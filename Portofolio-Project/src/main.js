import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap'; 
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

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


const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(500, 500, 500);
directionalLight.castShadow = true;
scene.add(directionalLight);

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
  depth: 3,           // Thickness of the floor
  bevelEnabled: false // Sharp edges (no round corners)
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

const loader = new GLTFLoader();

loader.load('/models/bookcaseClosed.glb', function (gltf) {
  const bookcase = gltf.scene;
  bookcase.scale.set(10, 10, 10); 
  bookcase.position.set(0.5, -4, -1.5); 
  
  bookcase.userData = { id: 'bookcase', viewOffset: { x: 8, y: 5, z: 8 } };

  bookcase.traverse((child) => {
    if (child.isMesh) {
      child.userData = bookcase.userData; 
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(bookcase);
});

loader.load('/models/books.glb', function (gltf) {
  const book = gltf.scene;
  book.scale.set(10, 10, 10); 
  book.position.set(1, 2.1, -2); 

  book.userData = { id: 'book', viewOffset: { x: 8, y: 5, z: 8 } };
  book.traverse((child) => {
    if (child.isMesh) {
      child.userData = book.userData; 
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(book);
});

loader.load('/models/plantSmall1.glb', function (gltf) {
  const plant = gltf.scene;
  plant.scale.set(10, 10, 10); 
  plant.position.set(3, -0.3, -2.2); 

  plant.userData = { id: 'plant', viewOffset: { x: 8, y: 5, z: 8 } };
  plant.traverse((child) => {
    if (child.isMesh) {
      child.userData = plant.userData; 
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(plant);
});

loader.load('/models/desk.glb', function (gltf) {
  const desk = gltf.scene;
  desk.scale.set(10, 10, 10);
  desk.position.set(5, -4, -0.5); 

  desk.userData = { id: 'desk', viewOffset: { x: 5, y: 8, z: 10 } };

  desk.traverse((child) => {
    if (child.isMesh) {
      child.userData = desk.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(desk);
});

loader.load('/models/desk.glb', function (gltf) {
  const desk = gltf.scene;
  desk.scale.set(10, 10, 10);
  desk.position.set(5, -4, -0.5); 

  desk.userData = { id: 'desk', viewOffset: { x: 5, y: 8, z: 10 } };

  desk.traverse((child) => {
    if (child.isMesh) {
      child.userData = desk.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(desk);
});

loader.load('/models/speaker.glb', function (gltf) {
  const speaker = gltf.scene;
  speaker.scale.set(10, 10, 10);
  speaker.position.set(12.5, -3.5, -3); 

  speaker.userData = { id: 'speaker', viewOffset: { x: 5, y: 8, z: 10 } };

  speaker.traverse((child) => {
    if (child.isMesh) {
      child.userData = speaker.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(speaker);
});

loader.load('/models/custom_gaming_pc.glb', function (gltf) {
  const custom_gaming_pc = gltf.scene;
  custom_gaming_pc.scale.set(0.5, 0.5, 0.5);
  custom_gaming_pc.position.set(9, -2.6, -2.2); 

  custom_gaming_pc.userData = { id: 'custom_gaming_pc', viewOffset: { x: 5, y: 8, z: 10 } };
  custom_gaming_pc.traverse((child) => {
    if (child.isMesh) {
      child.userData = custom_gaming_pc.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(custom_gaming_pc);
});


loader.load('/models/speakerSmall.glb', function (gltf) {
  const speaker = gltf.scene;
  speaker.scale.set(10, 10, 10);
  speaker.position.set(5.5, -0.2, -3); 

  speaker.userData = { id: 'speaker', viewOffset: { x: 5, y: 8, z: 10 } };

  speaker.traverse((child) => {
    if (child.isMesh) {
      child.userData = speaker.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(speaker);
});

loader.load('/models/eevee.glb', function (gltf) {
  const eevee = gltf.scene;
  eevee.scale.set(3, 3, 3);
  eevee.position.set(1.7, -0.3, -2.5); 

  eevee.userData = { id: 'eevee', viewOffset: { x: 5, y: 8, z: 10 } };
  eevee.traverse((child) => {
    if (child.isMesh) {
      child.userData = eevee.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(eevee);
});

loader.load('/models/chairDesk.glb', function (gltf) {
  const chair = gltf.scene;
  chair.scale.set(10, 10, 10);
  chair.position.set(11.1, -4, 0); 
  chair.rotation.y = Math.PI;

  chair.userData = { id: 'chair', viewOffset: { x: 5, y: 8, z: 10 } };
  chair.traverse((child) => {
    if (child.isMesh) {
      child.userData = chair.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(chair);
});

loader.load('/models/bedSingle.glb', function (gltf) {
  const bed = gltf.scene;
  bed.scale.set(10, 10, 10);
  bed.position.set(15, -4, 7); 

  bed.userData = { id: 'bed', viewOffset: { x: 5, y: 8, z: 10 } };

  bed.traverse((child) => {
    if (child.isMesh) {
      child.userData = bed.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(bed);
});

loader.load('/models/rugRectangle.glb', function (gltf) {
  const rug = gltf.scene;
  rug.scale.set(10, 10, 10);
  rug.position.set(2, -4, 14); 

  rug.userData = { id: 'rug', viewOffset: { x: 5, y: 8, z: 10 } };

  rug.traverse((child) => {
    if (child.isMesh) {
      child.userData = rug.userData;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(rug);
});

loader.load('/models/monitor.glb', function (gltf) {
  const computerScreen = gltf.scene;
  computerScreen.scale.set(10, 10, 10); 
  computerScreen.position.set(7.5, 0, -2.5); 
  
  computerScreen.userData = { 
    id: 'computerScreen', 
    cameraPos: { x: 9, y: 1.8, z: -0.8 },
    lookAt: { x: 9, y: 1.8, z: -2.5 }
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
         
         cssObject.position.set(0.195, 0.17, -0.06); 
         
         
         child.add(cssObject);
      }
    }
  });
  scene.add(computerScreen);
});

loader.load('/models/computerKeyboard.glb', function (gltf) {
  const computerKeyboard = gltf.scene;
  computerKeyboard.scale.set(10, 10, 10); 
  computerKeyboard.position.set(8, 0, -0.5); 

  computerKeyboard.userData = { id: 'computerKeyboard', viewOffset: { x: 8, y: 5, z: 8 } };

  computerKeyboard.traverse((child) => {
    if (child.isMesh) {
      child.userData = computerKeyboard.userData; 
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(computerKeyboard);
});

loader.load('/models/computerMouse.glb', function (gltf) {
  const computerMouse = gltf.scene;
  computerMouse.scale.set(10, 10, 10); 
  computerMouse.position.set(11.5, 0, -0.7); 

  computerMouse.userData = { id: 'computerMouse', viewOffset: { x: 8, y: 5, z: 8 } };

  computerMouse.traverse((child) => {
    if (child.isMesh) {
      child.userData = computerMouse.userData; 
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(computerMouse);
});

loader.load('/models/wallCornerRond.glb', function (gltf) {
  const wall = gltf.scene;
  wall.scale.set(10, 10, 10); 
  wall.position.set(5, -4, -5); 
  wall.rotation.y = Math.PI; 

  wall.userData = { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } };
  wall.traverse((child) => {
    if (child.isMesh) {
      child.userData = wall.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material.metalness = 0.1; 
        
        child.material.roughness = 0.8;

        child.material.side = THREE.DoubleSide; 

        child.material.needsUpdate = true;
      }

    }
  });
  scene.add(wall);
});

loader.load('/models/wallCornerRond.glb', function (gltf) {
  const wall2 = gltf.scene;
  wall2.scale.set(10, 10, 10); 
  wall2.position.set(25.5, -4, 0.5); 
  wall2.rotation.y = Math.PI / 2; 

  wall2.userData = { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } };
  wall2.traverse((child) => {
    if (child.isMesh) {
      child.userData = wall2.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material.metalness = 0.1; 
        
        child.material.roughness = 0.8;

        child.material.side = THREE.DoubleSide; 

        child.material.needsUpdate = true;
      }

    }
  });
  scene.add(wall2);
});

loader.load('/models/wall.glb', function (gltf) {
  const wall3 = gltf.scene;
  wall3.scale.set(10, 10, 10); 
  wall3.position.set(15, -4, -5); 
  wall3.rotation.y = Math.PI; 

  wall3.userData = { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } };
  wall3.traverse((child) => {
    if (child.isMesh) {
      child.userData = wall3.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material.metalness = 0.1; 
        
        child.material.roughness = 0.8;

        child.material.side = THREE.DoubleSide; 

        child.material.needsUpdate = true;
      }

    }
  });
  scene.add(wall3);
});

loader.load('/models/wall.glb', function (gltf) {
  const wall3 = gltf.scene;
  wall3.scale.set(10, 10, 10); 
  wall3.position.set(20, -4, -5); 
  wall3.rotation.y = Math.PI; 

  wall3.userData = { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } };
  wall3.traverse((child) => {
    if (child.isMesh) {
      child.userData = wall3.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material.metalness = 0.1; 
        
        child.material.roughness = 0.8;

        child.material.side = THREE.DoubleSide; 

        child.material.needsUpdate = true;
      }

    }
  });
  scene.add(wall3);
});

loader.load('/models/wallWindow.glb', function (gltf) {
  const wall4 = gltf.scene;
  wall4.scale.set(10, 10, 10); 
  wall4.position.set(-0.5, -4, 0.5); 
  wall4.rotation.y = Math.PI * 1.5; 

  wall4.userData = { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } };
  wall4.traverse((child) => {
    if (child.isMesh) {
      child.userData = wall4.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material.metalness = 0.1; 
        
        child.material.roughness = 0.8;

        child.material.side = THREE.DoubleSide; 

        child.material.needsUpdate = true;
      }

    }
  });
  scene.add(wall4);
});

loader.load('/models/wallHalf.glb', function (gltf) {
  const wall4 = gltf.scene;
  wall4.scale.set(10, 10, 10); 
  wall4.position.set(-0.5, -4, 10.5); 
  wall4.rotation.y = Math.PI * 1.5; 

  wall4.userData = { id: 'wall', viewOffset: { x: 8, y: 5, z: 8 } };
  wall4.traverse((child) => {
    if (child.isMesh) {
      child.userData = wall4.userData; 
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        child.material.metalness = 0.1; 
        
        child.material.roughness = 0.8;

        child.material.side = THREE.DoubleSide; 

        child.material.needsUpdate = true;
      }

    }
  });
  scene.add(wall4);
});

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

    const allowedInteractions = ['computerScreen', 'bookcase']; 

    if (clickedObject && allowedInteractions.includes(clickedObject.userData.id)) {
      
      const data = clickedObject.userData;

      if (data.id === 'computerScreen') {
         zoomToScreen(data.cameraPos, data.lookAt);
      } 
      
    }
  }
});

const navProjects = document.getElementById('nav-projects');

navProjects.addEventListener('click', (event) => {
  event.stopPropagation(); 
  
  if (isZoomedIn) return;

  const monitorPosition = { x: 9, y: 1.8, z: -0.8 };
  const monitorLookAt = { x: 9, y: 1.8, z: -2.5 };
  
  zoomToScreen(monitorPosition, monitorLookAt);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight); // Add this
});

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

document.getElementById('exit-btn').addEventListener('click', () => {
  pcInterface.classList.remove('active');

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


function animate() {
  requestAnimationFrame(animate);
  
  controls.update();
  
  composer.render(scene, camera);
  cssRenderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();