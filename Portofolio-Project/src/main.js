import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap'; 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true 
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

const loader = new GLTFLoader();
loader.load('/models/bookcaseOpen.glb', function (gltf) {
  const bookcase = gltf.scene;
  
  bookcase.scale.set(5, 5, 5); 
  bookcase.position.set(-10, -5, 0); 
  
  bookcase.userData = { id: 'bookcase' };

  bookcase.traverse((child) => {
    if (child.isMesh) {
      child.userData = { id: 'bookcase' };
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(bookcase);
});

loader.load('/models/computerScreen.glb', function (gltf) {
  const model = gltf.scene;
  model.scale.set(5, 5, 5);
  model.position.set(0, -5, 0);
  scene.add(model);
});

const checkPoints = [
  { position: { x: 0, y: 0, z: 60 }, lookAt: { x: 0, y: 0, z: 0 } },   
  { position: { x: 30, y: 0, z: 30 }, lookAt: { x: 10, y: 0, z: 0 } }, 
  { position: { x: 0, y: 20, z: 10 }, lookAt: { x: 0, y: 0, z: 0 } }   
];

let scrollPercent = 0;
let isFocused = false; 

document.body.onscroll = () => {
  isFocused = false; 

  scrollPercent =
    ((document.documentElement.scrollTop || document.body.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight)) * 100;
};

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;

    if (clickedObject.userData.id === 'bookcase') {
      isFocused = true; 

      gsap.to(camera.position, {
        x: clickedObject.position.x + 8, 
        y: clickedObject.position.y + 2,
        z: clickedObject.position.z + 8,
        duration: 1.5,
        ease: "power2.out", 
        onUpdate: () => camera.lookAt(clickedObject.position)
      });
    }
  }
});

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function animate() {
  requestAnimationFrame(animate);

  if (!isFocused) {
    let targetPos, targetLook;
    
    if (scrollPercent < 50) {
      const p = scrollPercent / 50;
      targetPos = {
        x: lerp(checkPoints[0].position.x, checkPoints[1].position.x, p),
        y: lerp(checkPoints[0].position.y, checkPoints[1].position.y, p),
        z: lerp(checkPoints[0].position.z, checkPoints[1].position.z, p)
      };
      targetLook = {
        x: lerp(checkPoints[0].lookAt.x, checkPoints[1].lookAt.x, p),
        y: lerp(checkPoints[0].lookAt.y, checkPoints[1].lookAt.y, p),
        z: lerp(checkPoints[0].lookAt.z, checkPoints[1].lookAt.z, p)
      };
    } else {
      const p = (scrollPercent - 50) / 50;
      targetPos = {
        x: lerp(checkPoints[1].position.x, checkPoints[2].position.x, p),
        y: lerp(checkPoints[1].position.y, checkPoints[2].position.y, p),
        z: lerp(checkPoints[1].position.z, checkPoints[2].position.z, p)
      };
      targetLook = {
        x: lerp(checkPoints[1].lookAt.x, checkPoints[2].lookAt.x, p),
        y: lerp(checkPoints[1].lookAt.y, checkPoints[2].lookAt.y, p),
        z: lerp(checkPoints[1].lookAt.z, checkPoints[2].lookAt.z, p)
      };
    }

    camera.position.set(targetPos.x, targetPos.y, targetPos.z);
    camera.lookAt(targetLook.x, targetLook.y, targetLook.z);
  }

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();