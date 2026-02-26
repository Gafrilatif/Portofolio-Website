import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap'; 
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { Howl } from 'howler';


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

const loadingManager = new THREE.LoadingManager();

loadingManager.onProgress = function(url, itemsLoaded, itemsTotal) {
  const progressBar = document.getElementById('progress-bar');
  const percentage = (itemsLoaded / itemsTotal) * 100;
  progressBar.style.width = percentage + '%';
};

loadingManager.onLoad = function() {
  const loadingScreen = document.getElementById('loading-screen');
  
  loadingScreen.style.opacity = '0';
  
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1000); 
};


const loader = new GLTFLoader(loadingManager); 


//---- Textures and Materials ----//

const textureLoader = new THREE.TextureLoader(loadingManager);
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

function zoomToScreen(camPos, lookAtPos, targetID) {
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
      if (targetID === 'computerScreen') {
         document.getElementById('pc-interface').classList.add('active');
      } else if (targetID === 'phone') {
         document.getElementById('phone-interface').classList.add('active');
      }
    }
  });
}

function zoomOut() {
  if (!isZoomedIn) return;

  if (typeof closeProject === 'function') closeProject();

  document.getElementById('pc-interface').classList.remove('active');
  document.getElementById('phone-interface').classList.remove('active');

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
}

function animate() {
  requestAnimationFrame(animate);
  
  controls.update();

  Howler.pos(camera.position.x, camera.position.y, camera.position.z);

  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward);

  Howler.orientation(forward.x, forward.y, forward.z, 0, 1, 0);
  
  composer.render(scene, camera);
  cssRenderer.render(scene, camera);
}


//---- Load Models ----//

loadAsset(
  '/models/lightBulb.glb',
  { x: 10, y: 10, z: 10 },
  { x: 10, y: 15, z: 5 },
  { x: Math.PI, y: 0, z: 0 },
  { id: 'lightBulb', viewOffset: { x: 8, y: 5, z: 8 } },
  (mesh) => {
    if (mesh.name.toLowerCase().includes('object_4') || mesh.name.toLowerCase().includes('glass') || mesh.name.toLowerCase().includes('light')) {
        
        console.log("✅ MAKING IT GLOW:", mesh.name);

        mesh.material = new THREE.MeshStandardMaterial({
            color: 0xffaa00,       
            emissive: 0xffaa00,    
            emissiveIntensity: 0.5, 
            toneMapped: true,     
            roughness: 0.4,
            metalness: 0,
            transparent: true,
            opacity: 0.3
        });

        const light = new THREE.PointLight(0xffaa00, 400, 30);
        light.position.set(0, 3, 0);
        light.castShadow = true;
        
        mesh.add(light);
    }
  }
);

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
  { id: 'phone', cameraPos: { x: 17, y: 0.5, z: -2.2 }, lookAt: { x: 17, y: -2.5, z: -3.5 } },
  (mesh) => {
    if (mesh.name.toLowerCase().includes('phonedetails_phonedetails_0')) {
       
       console.log("✅ ATTACHING HTML TO:", mesh.name);

       const phoneDiv = document.getElementById('phone-interface');
       const cssPhone = new CSS3DObject(phoneDiv);

       cssPhone.scale.set(0.1, 0.1, 0.1); 
       
       cssPhone.position.set(-34, -43, 0); 
       
       cssPhone.rotation.y = Math.PI; 
       cssPhone.rotation.x = 165 * (Math.PI / 180);
       cssPhone.rotation.z = 0;

       mesh.add(cssPhone);
    }
  }
);

loadAsset(
  '/models/rugRectangle.glb',
  { x: 10, y: 10, z: 10 },
  { x: 2, y: -4, z: 14 },
  null,
  { id: 'rug', viewOffset: { x: 5, y: 8, z: 10 } }
);

loadAsset(
  '/models/monitor.glb',
  { x: 10, y: 10, z: 10 },         
  { x: 7.5, y: -0.25, z: -2.5 },   
  null,                            
  {                                
    id: 'computerScreen', 
    cameraPos: { x: 9, y: 1.3, z: -0.8 },
    lookAt: { x: 9, y: 1.3, z: -2.5 }
  },
  (mesh) => {
      if (mesh.name.toLowerCase().includes('screen')) {
         
         mesh.material = new THREE.MeshStandardMaterial({
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
         cssObject.position.set(0.1975, 0.1715, -0.06); 
         
         mesh.add(cssObject);
      }
  }
);

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
         zoomToScreen(data.cameraPos, data.lookAt, data.id);
      } 
      else if(data.id === 'phone'){

         zoom_sound.play();
         zoomToScreen(data.cameraPos, data.lookAt, data.id);
      }
      
    }
  }
});

const navProjects = document.getElementById('nav-projects');
const navContact = document.getElementById('nav-contact');

navProjects.addEventListener('click', (event) => {
  event.stopPropagation(); 
  
  if (isZoomedIn) return;

  zoom_sound.play();

  const monitorPosition = { x: 9, y: 1.3, z: -0.8 };
  const monitorLookAt = { x: 9, y: 1.3, z: -2.5 };
  
  zoomToScreen(monitorPosition, monitorLookAt, 'computerScreen');
});

navContact.addEventListener('click', (event) => {
  event.stopPropagation();
  
  if (isZoomedIn) return;

  zoom_sound.play();

  const phonePosition = { x: 17, y: 0.5, z: -2.2 };
  const phoneLookAt = { x: 17, y: -2.5, z: -3.5 };
  
  zoomToScreen(phonePosition, phoneLookAt, 'phone');
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
});

document.getElementById('nav-home').addEventListener('click', (event) => {
    event.stopPropagation();
    zoomOut();
});

window.openProject = function(url) {
  document.getElementById('desktop-icons').style.display = 'none';
  
  document.getElementById('project-window').style.display = 'flex';
  
  document.getElementById('project-frame').src = url;
};

window.closeProject = function() {
  document.getElementById('project-frame').src = '';
  
  document.getElementById('project-window').style.display = 'none';
  
  document.getElementById('desktop-icons').style.display = 'flex'; 
};

document.querySelectorAll('.exit-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        zoomOut();
    });
});

animate();