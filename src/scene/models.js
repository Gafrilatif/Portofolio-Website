import * as THREE from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

function loadAsset(gltfLoader, scene, { path, scale, position, rotation, userData, materialOverride = null, castShadow = true, onLoaded = null }) {
  gltfLoader.load(path, (gltf) => {
    const model = gltf.scene;
    model.scale.set(scale.x, scale.y, scale.z);
    model.position.set(position.x, position.y, position.z);
    if (rotation) {
      model.rotation.set(rotation.x, rotation.y, rotation.z);
    }
    model.userData = userData;

    model.traverse((child) => {
      if (child.isMesh) {
        child.userData = userData;
        if (materialOverride) {
          if (typeof materialOverride === 'function') {
            materialOverride(child);
          } else if (materialOverride.isMaterial) {
            child.material = materialOverride;
          }
        }
        child.castShadow = castShadow;
        child.receiveShadow = true;
      }
    });

    scene.add(model);
    if (onLoaded) {
      onLoaded(model);
    }
  });
}

export function loadModels(gltfLoader, scene, materials, radioController = null) {
  const cssScreens = {
    computerScreen: null,
    phone: null,
  };

  const assets = [
    {
      path: './models/lightBulb.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 10, y: 15, z: 5 },
      rotation: { x: Math.PI, y: 0, z: 0 },
      userData: { id: 'lightBulb' },
      castShadow: false,
      materialOverride: (mesh) => {
        const name = mesh.name.toLowerCase();
        if (name.includes('object_4') || name.includes('glass') || name.includes('light')) {
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0xffaa00,
            emissive: 0xffaa00,
            emissiveIntensity: 0.5,
            toneMapped: true,
            roughness: 0.4,
            metalness: 0,
            transparent: true,
            opacity: 0.3,
          });

          const light = new THREE.PointLight(0xffaa00, 480, 34);
          light.position.set(0, 3, 0);
          light.castShadow = true;
          light.shadow.bias = -0.001;
          light.shadow.mapSize.set(1024, 1024);
          mesh.add(light);
        }
      },
    },
    {
      path: './models/bookcaseClosed.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 0.5, y: -4, z: -1.5 },
      userData: { id: 'bookcase' },
      materialOverride: materials.furnitureMaterial,
    },
    {
      path: './models/books.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 1, y: 2.1, z: -2 },
      userData: { id: 'book' },
    },
    {
      path: './models/plantSmall1.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 3, y: -0.3, z: -2.2 },
      userData: { id: 'plant' },
    },
    {
      path: './models/desk.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 5, y: -4, z: -0.5 },
      userData: { id: 'desk' },
      materialOverride: materials.furnitureMaterial,
    },
    {
      path: './models/speaker.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 12.5, y: -3.5, z: -3 },
      userData: { id: 'speaker' },
    },
    {
      path: './models/custom_gaming_pc.glb',
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      position: { x: 9, y: -2.6, z: -2.2 },
      userData: { id: 'custom_gaming_pc' },
    },
    {
      path: './models/speakerSmall.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 5.5, y: -0.2, z: -3 },
      userData: { id: 'speakerSmall' },
    },
    {
      path: './models/eevee.glb',
      scale: { x: 3, y: 3, z: 3 },
      position: { x: 1.7, y: -0.3, z: -2.5 },
      userData: { id: 'eevee' },
    },
    {
      path: './models/chairDesk.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 11.1, y: -4, z: 0 },
      rotation: { x: 0, y: Math.PI, z: 0 },
      userData: { id: 'chair' },
    },
    {
      path: './models/bedSingle.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 15, y: -4, z: 7 },
      userData: { id: 'bed' },
    },
    {
      path: './models/tableCoffeeSquare.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 19.4, y: -4, z: -1.4 },
      userData: { id: 'tableCoffee' },
      materialOverride: materials.furnitureMaterial,
    },
    {
      path: './models/tableCoffee.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 3.1, y: -4, z: 4.5 },
      rotation: { x: 0, y: Math.PI / 2, z: 0 },
      userData: { id: 'windowCoffeeTable' },
      materialOverride: materials.furnitureMaterial,
    },
    {
      path: './models/radio.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 2.6, y: -1.7, z: 7.4 },
      rotation: { x: 0, y: Math.PI / 2, z: 0 },
      userData: { id: 'radio' },
      onLoaded: (model) => {
        radioController?.attachModel(model);

        // Generous invisible hitbox covering the whole radio for effortless clicking
        model.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        const hitbox = new THREE.Mesh(
          new THREE.BoxGeometry(
            Math.max(size.x * 1.25, 1.4),
            Math.max(size.y * 1.2, 2.2),
            Math.max(size.z * 1.2, 3.4)
          ),
          new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0,
            depthWrite: false,
          })
        );
        hitbox.position.copy(center);
        hitbox.userData = { id: 'radio' };
        hitbox.castShadow = false;
        hitbox.receiveShadow = false;
        scene.add(hitbox);
      },
    },
    {
      path: './models/phone2.glb',
      scale: { x: 0.8, y: 0.8, z: 0.8 },
      position: { x: 17, y: -1.7, z: -2 },
      rotation: { x: 0, y: Math.PI, z: 0 },
      userData: { id: 'phone' },
      materialOverride: (mesh) => {
        if (mesh.name.toLowerCase().includes('phonedetails_phonedetails_0')) {
          const phoneDiv = document.getElementById('phone-interface');
          if (!phoneDiv) return;
          const cssPhone = new CSS3DObject(phoneDiv);
          cssPhone.scale.set(0.115, 0.116, 0.114);
          cssPhone.position.set(-36.2, -40.1, 0);
          cssPhone.rotation.y = Math.PI;
          cssPhone.rotation.x = 165 * (Math.PI / 180);
          cssPhone.rotation.z = 0;
          mesh.add(cssPhone);
          cssScreens.phone = cssPhone;
        }
      },
    },
    {
      path: './models/rugRectangle.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 2, y: -4, z: 14 },
      userData: { id: 'rug' },
    },
    {
      path: './models/monitor.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 7.5, y: -0.25, z: -2.5 },
      userData: { id: 'computerScreen' },
      materialOverride: (mesh) => {
        if (mesh.name.toLowerCase().includes('screen')) {
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0x061214,
            roughness: 0.15,
            metalness: 0.4,
            emissive: 0x003028,
            emissiveIntensity: 0.35,
          });

          const div = document.getElementById('pc-interface');
          if (!div) return;
          const cssObject = new CSS3DObject(div);
          cssObject.rotation.y = Math.PI;
          cssObject.rotation.x = 172 * (Math.PI / 180);
          cssObject.rotation.z = Math.PI;
          cssObject.scale.set(0.00038, 0.00031, 0.0003);
          cssObject.position.set(0.1975, 0.1715, -0.06);
          mesh.add(cssObject);
          cssScreens.computerScreen = cssObject;
        }
      },
      onLoaded: (model) => {
        // Generous invisible hitbox spanning the entire monitor screen & bezel
        model.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        const hitbox = new THREE.Mesh(
          new THREE.BoxGeometry(size.x * 1.1, size.y * 1.1, Math.max(size.z * 1.6, 1.0)),
          new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0,
            depthWrite: false,
          })
        );
        hitbox.position.copy(center);
        hitbox.userData = { id: 'computerScreen' };
        hitbox.castShadow = false;
        hitbox.receiveShadow = false;
        scene.add(hitbox);
      },
    },
    {
      path: './models/computerKeyboard.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 8, y: -0.25, z: -0.5 },
      userData: { id: 'computerKeyboard' },
    },
    {
      path: './models/computerMouse.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 11.5, y: -0.25, z: -0.7 },
      userData: { id: 'computerMouse' },
    },
    {
      path: './models/wallCornerRond.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 5, y: -4, z: -5 },
      rotation: { x: 0, y: Math.PI, z: 0 },
      userData: { id: 'wall' },
      castShadow: false,
      materialOverride: materials.applyWallMaterial,
    },
    {
      path: './models/wallCornerRond.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 25.5, y: -4, z: 0.5 },
      rotation: { x: 0, y: Math.PI / 2, z: 0 },
      userData: { id: 'wall' },
      castShadow: false,
      materialOverride: materials.applyWallMaterial,
    },
    {
      path: './models/wall.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 15, y: -4, z: -5 },
      rotation: { x: 0, y: Math.PI, z: 0 },
      userData: { id: 'wall' },
      castShadow: false,
      materialOverride: materials.applyWallMaterial,
    },
    {
      path: './models/wall.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: 20, y: -4, z: -5 },
      rotation: { x: 0, y: Math.PI, z: 0 },
      userData: { id: 'wall' },
      castShadow: false,
      materialOverride: materials.applyWallMaterial,
    },
    {
      path: './models/wallWindow.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: -0.5, y: -4, z: 0.5 },
      rotation: { x: 0, y: Math.PI * 1.5, z: 0 },
      userData: { id: 'wall' },
      castShadow: false,
      materialOverride: materials.applyWallMaterial,
    },
    {
      path: './models/wallHalf.glb',
      scale: { x: 10, y: 10, z: 10 },
      position: { x: -0.5, y: -4, z: 10.5 },
      rotation: { x: 0, y: Math.PI * 1.5, z: 0 },
      userData: { id: 'wall' },
      castShadow: false,
      materialOverride: materials.applyWallMaterial,
    },
  ];

  assets.forEach((asset) => loadAsset(gltfLoader, scene, asset));

  gltfLoader.load('./models/streetLight.glb', (gltf) => {
    const streetlight = gltf.scene;
    streetlight.scale.set(20, 20, 20);
    streetlight.position.set(-5, -4, -4.5);
    streetlight.rotation.y = Math.PI / 4;
    streetlight.userData = { id: 'streetlight' };

    const bulbLight = new THREE.PointLight(0xffaa00, 800, 100);
    bulbLight.position.set(-0.2, 0.9, 0);
    bulbLight.castShadow = true;
    bulbLight.shadow.bias = -0.001;
    bulbLight.shadow.mapSize.set(1024, 1024);
    streetlight.add(bulbLight);

    streetlight.traverse((child) => {
      if (child.isMesh) {
        child.userData = streetlight.userData;
        child.castShadow = true;
        child.receiveShadow = true;

        const name = child.name.toLowerCase();
        if (name.includes('glass') || name.includes('bulb')) {
          child.castShadow = false;
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffaa00,
            emissive: 0xffaa00,
            emissiveIntensity: 4,
            toneMapped: false,
          });
        }
      }
    });

    scene.add(streetlight);
  });

  return cssScreens;
}
