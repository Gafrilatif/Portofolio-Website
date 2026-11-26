import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { Howler } from 'howler';

const cameraForward = new THREE.Vector3();

export function createSceneContext() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.02);
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(20, 15, 30);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );

  const composer = new EffectComposer(renderer);
  composer.addPass(renderScene);
  composer.addPass(bloomPass);

  const cssRenderer = new CSS3DRenderer();
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.domElement.style.position = 'fixed';
  cssRenderer.domElement.style.top = '0';
  cssRenderer.domElement.style.left = '0';
  cssRenderer.domElement.style.pointerEvents = 'none';
  cssRenderer.domElement.style.zIndex = '2';
  document.body.appendChild(cssRenderer.domElement);

  const css2DRenderer = new CSS2DRenderer();
  css2DRenderer.setSize(window.innerWidth, window.innerHeight);
  css2DRenderer.domElement.style.position = 'fixed';
  css2DRenderer.domElement.style.top = '0';
  css2DRenderer.domElement.style.left = '0';
  css2DRenderer.domElement.style.pointerEvents = 'none';
  css2DRenderer.domElement.style.zIndex = '5';
  document.body.appendChild(css2DRenderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2;
  controls.minDistance = 8;
  controls.maxDistance = 65;

  const loadingManager = new THREE.LoadingManager();
  loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    const progressBar = document.getElementById('progress-bar');
    const percentEl = document.getElementById('loader-percent');
    const assetEl = document.getElementById('loader-current-asset');
    const percentage = itemsTotal > 0 ? Math.round((itemsLoaded / itemsTotal) * 100) : 0;

    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (percentEl) percentEl.textContent = `${percentage}%`;
    if (assetEl && url) {
      const cleanPath = url.replace(/^.*\/(models|textures|audio)\//, '$1/');
      assetEl.textContent = `loading ${cleanPath}`;
    }
  };

  loadingManager.onLoad = () => {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const percentEl = document.getElementById('loader-percent');
    const assetTag = document.getElementById('loader-asset-tag');
    const assetEl = document.getElementById('loader-current-asset');

    if (progressBar) progressBar.style.width = '100%';
    if (percentEl) percentEl.textContent = '100%';
    if (assetTag) {
      assetTag.textContent = '[OK]';
      assetTag.className = 'log-tag-ok';
    }
    if (assetEl) assetEl.textContent = 'world.ready — entering room...';

    if (!loadingScreen) return;
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transform = 'scale(1.03)';
      loadingScreen.style.pointerEvents = 'none';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 720);
    }, 280);
  };

  const gltfLoader = new GLTFLoader(loadingManager);
  gltfLoader.setMeshoptDecoder(MeshoptDecoder);

  function resizeRenderers() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    composer.setSize(width, height);
    bloomPass.setSize(width, height);
    cssRenderer.setSize(width, height);
    css2DRenderer.setSize(width, height);
  }

  function updateAudioListener() {
    Howler.pos(camera.position.x, camera.position.y, camera.position.z);
    camera.getWorldDirection(cameraForward);
    Howler.orientation(cameraForward.x, cameraForward.y, cameraForward.z, 0, 1, 0);
  }

  return {
    scene,
    camera,
    renderer,
    composer,
    bloomPass,
    cssRenderer,
    css2DRenderer,
    controls,
    loadingManager,
    gltfLoader,
    resizeRenderers,
    updateAudioListener,
  };
}
