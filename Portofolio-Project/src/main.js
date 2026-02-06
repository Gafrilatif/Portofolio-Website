import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap'; 
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';


//---- Scene Setup ----//

let zoom_sound = new Audio('/audio/zoom_sound.mp3');
let zoom_sound_reverse = new Audio('/audio/zoom_sound_reverse.mp3');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.02);
scene.background = new THREE.Color(0x000000);


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(20, 15, 30); 


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true 
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,  
    0.4,  
    0.85  
);

const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
cssRenderer.domElement.style.pointerEvents = 'none'; 
document.body.appendChild(cssRenderer.domElement);

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2; 
// controls.maxDistance = 50;

const loader = new GLTFLoader();

//---- Lights ----//

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(500, 500, 500);
directionalLight.castShadow = true;
scene.add(directionalLight);

//---- Textures and Materials ----//

const textureLoader = new THREE.TextureLoader();
const floorColor = textureLoader.load('/textures/metal_color.jpg');
const floorRoughness = textureLoader.load('/textures/metal_roughness.jpg');
const floorNormal = textureLoader.load('/textures/metal_normal.png');

[floorColor, floorRoughness, floorNormal].forEach(tex => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 8); 
});

const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorColor,              
    roughnessMap: floorRoughness, 
    normalMap: floorNormal,       
    roughness: 0.6,               
    metalness: 0.1                
});

const roomfloorColor = textureLoader.load('/textures/roomFloor_color.jpg');
const roomfloorRoughness = textureLoader.load('/textures/roomFloor_roughness.jpg');
const roomfloorNormal = textureLoader.load('/textures/roomFloor_normal.png');

[roomfloorColor, roomfloorRoughness, roomfloorNormal].forEach(tex => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 8); 
});

const roomFloorMaterial = new THREE.MeshStandardMaterial({
    map: roomfloorColor,              
    roughnessMap: roomfloorRoughness, 
    normalMap: roomfloorNormal,       
    roughness: 0.6,               
    metalness: 0                
});

const outsidefloorColor = textureLoader.load('/textures/grass_BaseColor.jpg');
const outsidefloorRoughness = textureLoader.load('/textures/grass_Roughness.jpg');
const outsidefloorNormal = textureLoader.load('/textures/grass_Normal.png');

[outsidefloorColor, outsidefloorRoughness, outsidefloorNormal].forEach(tex => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(0.2, 0.2); 
});

const outsideFloorMaterial = new THREE.MeshStandardMaterial({
    map: outsidefloorColor,              
    roughnessMap: outsidefloorRoughness, 
    normalMap: outsidefloorNormal,       
    roughness: 1,               
    metalness: 0                
});

const furnitureColor = textureLoader.load('/textures/wood_furniture_color.jpg');
const furnitureRoughness = textureLoader.load('/textures/wood_furniture_Roughness.jpg');
const furnitureNormal = textureLoader.load('/textures/wood_furniture_Normal.png');

[furnitureColor, furnitureRoughness, furnitureNormal].forEach(tex => {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(0.2, 0.2); 
});

const furnitureMaterial = new THREE.MeshStandardMaterial({
    map: furnitureColor,              
    roughnessMap: furnitureRoughness, 
    normalMap: furnitureNormal,       
    roughness: 1,               
    metalness: 0                
});


//---- Floor Setup ----//

const floorGeometry = new THREE.BoxGeometry(125, 1, 125); 
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -5.5; 
floor.receiveShadow = true;
scene.add(floor);

const roomFloor = new THREE.BoxGeometry(26, 3, 20.5); 
const roomFloorMesh = new THREE.Mesh(roomFloor, roomFloorMaterial);
roomFloorMesh.position.y = -5.5; 
roomFloorMesh.position.x = 12.5; 
roomFloorMesh.position.z = 5.25; 
roomFloorMesh.receiveShadow = true;
scene.add(roomFloorMesh);

const lShape = new THREE.Shape();

lShape.moveTo(-10.5, -10.0); 
lShape.lineTo(25.5, -10.0);   
lShape.lineTo(25.5, -5.0);    
lShape.lineTo(-0.5, -5.0);    
lShape.lineTo(-0.5, 15.5);    
lShape.lineTo(-10.5, 15.5);   
lShape.lineTo(-10.5, -10.0);

const extrudeSettings = {
  depth: 3,           
  bevelEnabled: false 
};

const lShapeGeometry = new THREE.ExtrudeGeometry(lShape, extrudeSettings);

outsideFloorMaterial.side = THREE.DoubleSide; 

const fullOutsideFloor = new THREE.Mesh(lShapeGeometry, outsideFloorMaterial);

fullOutsideFloor.rotation.x = Math.PI / 2; 

fullOutsideFloor.position.y = -4; 

fullOutsideFloor.receiveShadow = true;
scene.add(fullOutsideFloor);

const BoxGeometry = new THREE.BoxGeometry(1.48, 1, 1.48);
const BoxMaterial = new THREE.MeshStandardMaterial({ color: 0xC4A484 });
const box = new THREE.Mesh(BoxGeometry, BoxMaterial);
box.position.set(13.24, -4, -3.73);
box.castShadow = true;
box.receiveShadow = true;
scene.add(box);

//---- Functions ----//

function loadAsset(path, scale, position, rotation, userData, materialOverride = null) {
  loader.load(path, function (gltf) {
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
            }
            else if (materialOverride.isMaterial) {
                child.material = materialOverride;
            }
        }
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(model);
  })
};

function zoomToScreen(camPos, lookAtPos) {
  isZoomedIn = true;
  controls.enabled = false; 

  gsap.to(camera.position, {
    x: camPos.x,
    y: camPos.y,
    z: camPos.z,
    duration: 2,
    ease: "power2.inOut"
  });

  gsap.to(controls.target, {
    x: lookAtPos.x,
    y: lookAtPos.y,
    z: lookAtPos.z,
    duration: 2,
    ease: "power2.inOut",
    onUpdate: () => {
      camera.lookAt(controls.target);
    },
    onComplete: () => {
      pcInterface.classList.add('active');
    }
  });
}

function animate() {
  requestAnimationFrame(animate);
  
  controls.update();
  
  composer.render(scene, camera);
  cssRenderer.render(scene, camera);
}


//---- Load Models ----//

loadAsset(
  '/models/bookcaseClosed.glb',
  { x: 10, y: 10, z: 10 },
  { x: 0.5, y: -4, z: -1.5 },
  null,
  { id: 'bookcase', viewOffset: { x: 8, y: 5, z: 8 } },
  furnitureMaterial
);

loadAsset(
  '/models/books.glb',
  { x: 10, y: 10, z: 10 },
  { x: 1, y: 2.1, z: -2 },
  null,
  { id: 'book', viewOffset: { x: 8, y: 5, z: 8 } }
);

loadAsset(
  '/models/plantSmall1.glb',
  { x: 10, y: 10, z: 10 },
  { x: 3, y: -0.3, z: -2.2 },
  null,
  { id: 'plant', viewOffset: { x: 8, y: 5, z: 8 } },
);

loadAsset(
  '/models/desk.glb',
  { x: 10, y: 10, z: 10 },
  { x: 5, y: -4, z: -0.5 },
  null,
  { id: 'desk', viewOffset: { x: 5, y: 8, z: 10 } },
  furnitureMaterial
);

loadAsset(
  '/models/speaker.glb',
  { x: 10, y: 10, z: 10 },
  { x: 12.5, y: -3.5, z: -3 },
  null,
  { id: 'speaker', viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/custom_gaming_pc.glb',
  { x: 0.5, y: 0.5, z: 0.5 },
  { x: 9, y: -2.6, z: -2.2 },
  null,
  { id: 'custom_gaming_pc', viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/speakerSmall.glb',
  { x: 10, y: 10, z: 10 },
  { x: 5.5, y: -0.2, z: -3 },
  null,
  { id: 'speakerSmall', viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/eevee.glb',
  { x: 3, y: 3, z: 3 },
  { x: 1.7, y: -0.3, z: -2.5 },
  null,
  { id: 'eevee', viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/chairDesk.glb',
  { x: 10, y: 10, z: 10 },
  { x: 11.1, y: -4, z: 0 },
  { x: 0, y: Math.PI, z: 0 },
  { id: 'chair', viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/bedSingle.glb',
  { x: 10, y: 10, z: 10 },
  { x: 15, y: -4, z: 7 },
  null,
  { id: 'bed', viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/tableCoffeeSquare.glb',
  { x: 10, y: 10, z: 10 },
  { x: 19.4, y: -4, z: -1.4 },
  null,
  { id: 'tableCoffee', viewOffset: { x: 5, y: 8, z: 10 } },
  furnitureMaterial
);

loadAsset(
  '/models/phone2.glb',
  { x: 0.8, y: 0.8, z: 0.8 },
  { x: 17, y: -1.7, z: -2 },
  { x: 0, y: Math.PI, z: 0 },
  { id: 'phone', cameraPos: { x: 17, y: 1, z: -1 }, lookAt: { x: 17, y: -2.5, z: -3.5 }, viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/rugRectangle.glb',
  { x: 10, y: 10, z: 10 },
  { x: 2, y: -4, z: 14 },
  null,
  { id: 'rug', viewOffset: { x: 5, y: 8, z: 10 } }
);

loader.load('/models/monitor.glb', function (gltf) {
  const computerScreen = gltf.scene;
  computerScreen.scale.set(10, 10, 10); 
  computerScreen.position.set(7.5, -0.25, -2.5); 
  
  computerScreen.userData = { 
    id: 'computerScreen', 
    cameraPos: { x: 9, y: 1.3, z: -0.8 },
    lookAt: { x: 9, y: 1.3, z: -2.5 }
  };

  computerScreen.traverse((child) => {
    if (child.isMesh) {
      child.userData = computerScreen.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.name.toLowerCase().includes('screen')) {
         child.material = new THREE.MeshStandardMaterial({
            color: 0x000000,        
            roughness: 0.1,         
            metalness: 0.5,         
            emissive: 0x000000,     
            emissiveIntensity: 0
         });

         const div = document.getElementById('pc-interface');
         const cssObject = new CSS3DObject(div);

         cssObject.rotation.y = Math.PI; 
         cssObject.rotation.x = 172 * (Math.PI / 180);
         cssObject.rotation.z = Math.PI;

         cssObject.scale.set(0.00038, 0.00031, 0.0003); 
         
         cssObject.position.set(0.195, 0.171, -0.06); 
         
         
         child.add(cssObject);
      }
    }
  });
  scene.add(computerScreen);
});

loadAsset(
  '/models/computerKeyboard.glb',
  { x: 10, y: 10, z: 10 },
  { x: 8, y: -0.25, z: -0.5 },
  null,
  { id: 'computerKeyboard', viewOffset: { x: 8, y: 5, z: 8 } }
);

loadAsset(
  '/models/computerMouse.glb',
  { x: 10, y: 10, z: 10 },
  { x: 11.5, y: -0.25, z: -0.7 },
  null,
  { id: 'computerMouse', viewOffset: { x: 8, y: 5, z: 8 } }
);

loadAsset(
  '/models/wallCornerRond.glb',
  { x: 10, y: 10, z: 10 },
  { x: 5, y: -4, z: -5 },
  { x: 0, y: Math.PI, z: 0 },
  { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } },
  (mesh) => {
      mesh.material.metalness = 0.1;
      mesh.material.roughness = 0.8;
      mesh.material.side = THREE.DoubleSide;
      mesh.material.needsUpdate = true;
  }
);

loadAsset(
  'models/wallCornerRond.glb',
  { x: 10, y: 10, z: 10 },
  { x: 25.5, y: -4, z: 0.5 },
  { x: 0, y: Math.PI / 2, z: 0 },
  { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } },
  (mesh) => {
      mesh.material.metalness = 0.1;
      mesh.material.roughness = 0.8;
      mesh.material.side = THREE.DoubleSide;
      mesh.material.needsUpdate = true;
  }
);

loadAsset(
  '/models/wall.glb',
  { x: 10, y: 10, z: 10 },
  { x: 15, y: -4, z: -5 },
  { x: 0, y: Math.PI, z: 0 },
  { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } },
  (mesh) => {
      mesh.material.metalness = 0.1;
      mesh.material.roughness = 0.8;
      mesh.material.side = THREE.DoubleSide;
      mesh.material.needsUpdate = true;
  }
);

loadAsset(
  '/models/wall.glb',
  { x: 10, y: 10, z: 10 },
  { x: 20, y: -4, z: -5 },
  { x: 0, y: Math.PI, z: 0 },
  { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } },
  (mesh) => {
      mesh.material.metalness = 0.1;
      mesh.material.roughness = 0.8;
      mesh.material.side = THREE.DoubleSide;
      mesh.material.needsUpdate = true;
  }
);

loadAsset(
  '/models/wallWindow.glb',
  { x: 10, y: 10, z: 10 },
  { x: -0.5, y: -4, z: 0.5 },
  { x: 0, y: Math.PI * 1.5, z: 0 },
  { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } },
  (mesh) => {
      mesh.material.metalness = 0.1;
      mesh.material.roughness = 0.8;
      mesh.material.side = THREE.DoubleSide;
      mesh.material.needsUpdate = true;
  }
);

loadAsset(
  '/models/wallHalf.glb',
  { x: 10, y: 10, z: 10 },
  { x: -0.5, y: -4, z: 10.5 },
  { x: 0, y: Math.PI * 1.5, z: 0 },
  { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } },
  (mesh) => {
      mesh.material.metalness = 0.1;
      mesh.material.roughness = 0.8;
      mesh.material.side = THREE.DoubleSide;
      mesh.material.needsUpdate = true;
  }
);

loader.load('/models/streetLight.glb', function (gltf) {
  const streetlight = gltf.scene;
  streetlight.scale.set(20, 20, 20); 
  streetlight.position.set(-5, -4, -4.5); 
  streetlight.rotation.y = Math.PI / 4; 

  streetlight.userData = { id: 'streetlight', viewOffset: { x: 8, y: 5, z: 8 } };
  const bulbLight = new THREE.PointLight(0xffaa00, 800, 100);
  bulbLight.position.set(-0.2, 0.9, 0);
  bulbLight.castShadow = true;
  streetlight.add(bulbLight);

  // const helper = new THREE.PointLightHelper(bulbLight, 0.5); 
  // scene.add(helper);

  streetlight.traverse((child) => {
    if (child.isMesh) {
      child.userData = streetlight.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.name.toLowerCase().includes('glass') || child.name.toLowerCase().includes('bulb')) {
          child.material = new THREE.MeshStandardMaterial({
              color: 0xffaa00,        
              emissive: 0xffaa00,     
              emissiveIntensity: 4,   
              toneMapped: false       
          });
      }
    }
  });
  scene.add(streetlight);
});

//---- Interaction and Animation ----//
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let isZoomedIn = false; 
const pcInterface = document.getElementById('pc-interface');

const initialCameraState = {
  position: new THREE.Vector3(20, 15, 30),
  target: new THREE.Vector3(0, 0, 0)
};

window.addEventListener('click', (event) => {
  if (isZoomedIn) return;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true); 

  if (intersects.length > 0) {
    const hit = intersects.find(hit => hit.object.userData.id);
    const clickedObject = hit ? hit.object : null;

    const allowedInteractions = ['computerScreen', 'bookcase', 'phone']; 

    if (clickedObject && allowedInteractions.includes(clickedObject.userData.id)) {
      
      const data = clickedObject.userData;

      if (data.id === 'computerScreen') {
         zoom_sound.play();
         zoomToScreen(data.cameraPos, data.lookAt);
      } 
      else if(data.id === 'phone'){
         zoom_sound.play();
         zoomToScreen(data.cameraPos, data.lookAt);
      }
      
    }
  }
});

const navProjects = document.getElementById('nav-projects');

navProjects.addEventListener('click', (event) => {
  event.stopPropagation(); 
  
  if (isZoomedIn) return;

  const monitorPosition = { x: 9, y: 1.3, z: -0.8 };
  const monitorLookAt = { x: 9, y: 1.3, z: -2.5 };
  
  zoomToScreen(monitorPosition, monitorLookAt);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
});

document.getElementById('exit-btn').addEventListener('click', () => {
  pcInterface.classList.remove('active');
  zoom_sound_reverse.play();

  gsap.to(camera.position, {
    x: initialCameraState.position.x,
    y: initialCameraState.position.y,
    z: initialCameraState.position.z,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.to(controls.target, {
    x: initialCameraState.target.x,
    y: initialCameraState.target.y,
    z: initialCameraState.target.z,
    duration: 1.5,
    ease: "power2.out",
    onUpdate: () => {
      camera.lookAt(controls.target);
    },
    onComplete: () => {
      isZoomedIn = false;
      controls.enabled = true; 
    }
  });
});

animate();