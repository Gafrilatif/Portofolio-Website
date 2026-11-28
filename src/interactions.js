import * as THREE from 'three';
import gsap from 'gsap';

const CAMERA_TARGETS = {
  computerScreen: {
    cameraPos: new THREE.Vector3(9, 1.3, -0.8),
    lookAt: new THREE.Vector3(9, 1.3, -2.5),
    portraitViewDir: new THREE.Vector3(0, 0, 1).normalize(),
    portraitFitWidth: 3.95,
    portraitPadding: 1.08,
    interfaceId: 'pc-interface',
    navId: 'projects',
  },
  phone: {
    cameraPos: new THREE.Vector3(17.1, -0.1, -2.5),
    lookAt: new THREE.Vector3(17.1, -2.5, -3.5),
    portraitViewDir: new THREE.Vector3(0, 2.4, 1.0).normalize(),
    portraitFitWidth: 2.85,
    portraitPadding: 1.12,
    interfaceId: 'phone-interface',
    navId: 'contact',
  },
};

const HOME_DESKTOP = {
  position: new THREE.Vector3(20, 15, 30),
  target: new THREE.Vector3(0, 0, 0),
};

const HOME_MOBILE = {
  lookAt: new THREE.Vector3(11.5, -1, 4),
  viewDir: new THREE.Vector3(12, 17, 29).normalize(),
  fitWidth: 32,
  fitHeight: 26,
  minDistance: 46,
};

function isPortraitViewport() {
  return window.innerWidth < window.innerHeight;
}

function getHomeCameraState(camera) {
  const aspect = window.innerWidth / window.innerHeight;
  if (aspect < 1) {
    const vFovRad = THREE.MathUtils.degToRad(camera.fov);
    const tanHalfV = Math.tan(vFovRad / 2);
    const distV = (HOME_MOBILE.fitHeight / 2) / tanHalfV;
    const distH = (HOME_MOBILE.fitWidth / 2) / (tanHalfV * aspect);
    const distance = Math.max(HOME_MOBILE.minDistance, Math.max(distV, distH) * 1.12);

    return {
      position: HOME_MOBILE.lookAt.clone().addScaledVector(HOME_MOBILE.viewDir, distance),
      target: HOME_MOBILE.lookAt.clone(),
    };
  }
  return {
    position: HOME_DESKTOP.position.clone(),
    target: HOME_DESKTOP.target.clone(),
  };
}

function getTargetCameraState(targetId, camera) {
  const config = CAMERA_TARGETS[targetId];
  const aspect = window.innerWidth / window.innerHeight;

  // Desktop landscape: keep exact hand-tuned coordinates untouched
  if (aspect >= 1) {
    return {
      cameraPos: config.cameraPos.clone(),
      lookAt: config.lookAt.clone(),
    };
  }

  // Portrait mobile: pull back along the EXACT desktop viewing ray from config.lookAt
  // so 3D parallax keeps the CSS3D screens locked flush inside the physical monitor & phone bezels
  const lookAt = config.lookAt.clone();
  const rayDir = config.cameraPos.clone().sub(lookAt).normalize();

  const vFovRad = THREE.MathUtils.degToRad(camera.fov);
  const tanHalfV = Math.tan(vFovRad / 2);
  const distH = (config.portraitFitWidth / 2) / (tanHalfV * aspect);
  const distance = distH * config.portraitPadding;

  return {
    cameraPos: lookAt.clone().addScaledVector(rayDir, distance),
    lookAt,
  };
}

export function setupInteractions(
  ctx,
  hints,
  cssScreens = {},
  radioController = null,
  pokemonSystem = null
) {
  const { scene, camera, renderer, controls, resizeRenderers } = ctx;

  const zoomSound = new Audio('./audio/zoom_sound.mp3');
  const zoomSoundReverse = new Audio('./audio/zoom_sound_reverse.mp3');

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const allowedInteractions = new Set(['computerScreen', 'phone', 'radio', 'pokemon']);

  let activeTargetId = null;
  let isTransitioning = false;
  let pointerDownPos = { x: 0, y: 0 };
  let bootTimers = [];
  let phoneTimers = [];

  // Set initial responsive home framing
  const initialHome = getHomeCameraState(camera);
  camera.position.copy(initialHome.position);
  controls.target.copy(initialHome.target);
  controls.maxDistance = 95;
  controls.update();

  function setActiveNav(navName) {
    document.querySelectorAll('[data-nav]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.nav === navName);
    });
  }

  function playSound(audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  function syncChairVisibility() {
    if (!cssScreens.chair) return;
    // Hide desk chair only while zoomed into the PC monitor on portrait mobile so it doesn't block the pulled-back view
    const hideChair = activeTargetId === 'computerScreen' && isPortraitViewport();
    cssScreens.chair.visible = !hideChair;
  }

  function cancelPcBootSequence() {
    bootTimers.forEach((id) => clearTimeout(id));
    bootTimers = [];
    const fill = document.getElementById('boot-bar-fill');
    if (fill) gsap.killTweensOf(fill);
  }

  function startPcBootSequence() {
    cancelPcBootSequence();
    closeProject();

    const bootScreen = document.getElementById('pc-boot-screen');
    const fill = document.getElementById('boot-bar-fill');
    const status = document.getElementById('boot-status');
    const workspace = document.getElementById('os-workspace');
    const topbar = document.getElementById('os-topbar');

    if (!bootScreen || !fill || !status) return;

    if (workspace) workspace.style.visibility = 'hidden';
    if (topbar) topbar.style.visibility = 'hidden';

    bootScreen.classList.remove('fade-out');
    bootScreen.style.display = 'flex';
    fill.style.width = '0%';
    status.textContent = 'Initializing system...';

    gsap.to(fill, {
      width: '100%',
      duration: 1.85,
      ease: 'power1.inOut',
    });

    bootTimers.push(
      setTimeout(() => {
        status.textContent = 'Loading portfolio modules...';
      }, 650),
      setTimeout(() => {
        status.textContent = 'Welcome';
      }, 1400),
      setTimeout(() => {
        if (workspace) workspace.style.visibility = 'visible';
        if (topbar) topbar.style.visibility = 'visible';
        bootScreen.classList.add('fade-out');
      }, 1900),
      setTimeout(() => {
        bootScreen.style.display = 'none';
      }, 2350)
    );
  }

  function cancelPhoneConnectSequence() {
    phoneTimers.forEach((id) => clearTimeout(id));
    phoneTimers = [];
    const fill = document.getElementById('phone-connect-fill');
    if (fill) gsap.killTweensOf(fill);
  }

  function startPhoneConnectSequence() {
    cancelPhoneConnectSequence();

    const bootScreen = document.getElementById('phone-boot-screen');
    const fill = document.getElementById('phone-connect-fill');
    const status = document.getElementById('phone-connect-status');
    const topbar = document.getElementById('phone-topbar');
    const icons = document.getElementById('phone-icons');
    const footer = document.getElementById('phone-footer');

    if (!bootScreen || !fill || !status) return;

    if (topbar) topbar.style.visibility = 'hidden';
    if (icons) icons.style.visibility = 'hidden';
    if (footer) footer.style.visibility = 'hidden';

    bootScreen.classList.remove('fade-out');
    bootScreen.style.display = 'flex';
    fill.style.width = '0%';
    status.textContent = 'Acquiring signal...';

    gsap.to(fill, {
      width: '100%',
      duration: 1.5,
      ease: 'power1.inOut',
    });

    phoneTimers.push(
      setTimeout(() => {
        status.textContent = 'Syncing directory...';
      }, 550),
      setTimeout(() => {
        status.textContent = 'Connected — LINE 01';
      }, 1150),
      setTimeout(() => {
        if (topbar) topbar.style.visibility = 'visible';
        if (icons) icons.style.visibility = 'visible';
        if (footer) footer.style.visibility = 'visible';
        bootScreen.classList.add('fade-out');
      }, 1550),
      setTimeout(() => {
        bootScreen.style.display = 'none';
      }, 2000)
    );
  }

  function hideAllInterfaces() {
    cancelPcBootSequence();
    cancelPhoneConnectSequence();
    document.getElementById('pc-interface')?.classList.remove('active');
    document.getElementById('phone-interface')?.classList.remove('active');
  }

  function openProject(url, title = 'project.html') {
    if (activeTargetId !== 'computerScreen' || isTransitioning) return;
    const workspace = document.getElementById('os-workspace');
    const win = document.getElementById('project-window');
    const frame = document.getElementById('project-frame');
    const titleEl = document.getElementById('project-title');
    if (workspace) workspace.style.display = 'none';
    if (win) win.style.display = 'flex';
    if (titleEl) titleEl.textContent = title;
    if (frame) frame.src = url;
  }

  function closeProject() {
    const workspace = document.getElementById('os-workspace');
    const win = document.getElementById('project-window');
    const frame = document.getElementById('project-frame');
    if (frame) frame.src = '';
    if (win) win.style.display = 'none';
    if (workspace) workspace.style.display = '';
  }

  function updateOsClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const formatted = `${hh}:${mm}`;
    const osClock = document.getElementById('os-clock');
    const phoneClock = document.getElementById('phone-clock');
    if (osClock) osClock.textContent = formatted;
    if (phoneClock) phoneClock.textContent = formatted;
  }

  updateOsClock();
  setInterval(updateOsClock, 15000);

  window.openProject = openProject;
  window.closeProject = closeProject;

  function zoomToTarget(targetId) {
    const config = CAMERA_TARGETS[targetId];
    if (!config) return;
    if (activeTargetId === targetId && !isTransitioning) return;

    // Permanently dismiss only this specific object's floating arrow hint
    hints.dismissHint(targetId);

    if (activeTargetId && activeTargetId !== targetId) {
      closeProject();
      hideAllInterfaces();
    }

    activeTargetId = targetId;
    isTransitioning = true;
    controls.enabled = false;
    renderer.domElement.style.cursor = 'default';
    hints.setHintsTemporarilyHidden(true);
    pokemonSystem?.setHintsTemporarilyHidden(true);
    setActiveNav(config.navId);
    syncChairVisibility();
    playSound(zoomSound);

    const { cameraPos, lookAt } = getTargetCameraState(targetId, camera);

    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);

    gsap.to(camera.position, {
      x: cameraPos.x,
      y: cameraPos.y,
      z: cameraPos.z,
      duration: 1.8,
      ease: 'power2.inOut',
    });

    gsap.to(controls.target, {
      x: lookAt.x,
      y: lookAt.y,
      z: lookAt.z,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(controls.target);
      },
      onComplete: () => {
        isTransitioning = false;
        if (activeTargetId === targetId) {
          document.getElementById(config.interfaceId)?.classList.add('active');
          if (targetId === 'computerScreen') {
            startPcBootSequence();
          } else if (targetId === 'phone') {
            startPhoneConnectSequence();
          }
        }
      },
    });
  }

  function zoomOut() {
    if (!activeTargetId && !isTransitioning) {
      setActiveNav('home');
      return;
    }

    closeProject();
    hideAllInterfaces();
    activeTargetId = null;
    isTransitioning = true;
    setActiveNav('home');
    syncChairVisibility();
    playSound(zoomSoundReverse);

    const homeState = getHomeCameraState(camera);
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);

    gsap.to(camera.position, {
      x: homeState.position.x,
      y: homeState.position.y,
      z: homeState.position.z,
      duration: 1.4,
      ease: 'power2.out',
    });

    gsap.to(controls.target, {
      x: homeState.target.x,
      y: homeState.target.y,
      z: homeState.target.z,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        camera.lookAt(controls.target);
      },
      onComplete: () => {
        isTransitioning = false;
        controls.enabled = true;
        hints.setHintsTemporarilyHidden(false);
        pokemonSystem?.setHintsTemporarilyHidden(false);
      },
    });
  }

  function hitTestInteractive(clientX, clientY) {
    pointer.x = (clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    for (const hit of intersects) {
      const id = hit.object?.userData?.id;
      if (id && allowedInteractions.has(id)) {
        return hit.object.userData;
      }
    }
    return null;
  }

  // Drag-safe click detection on canvas
  renderer.domElement.addEventListener('pointerdown', (event) => {
    pointerDownPos = { x: event.clientX, y: event.clientY };
  });

  renderer.domElement.addEventListener('pointerup', (event) => {
    if (activeTargetId || isTransitioning) return;
    const dx = event.clientX - pointerDownPos.x;
    const dy = event.clientY - pointerDownPos.y;
    if (Math.hypot(dx, dy) > 6) return;

    const hitData = hitTestInteractive(event.clientX, event.clientY);
    if (!hitData) return;

    if (hitData.id === 'radio') {
      hints.dismissHint('radio');
      radioController?.toggle();
    } else if (hitData.id === 'pokemon') {
      pokemonSystem?.catchPokemon(hitData.pokemonKey);
    } else {
      zoomToTarget(hitData.id);
    }
  });

  // Hover cursor feedback on desktop
  let hoverThrottle = 0;
  renderer.domElement.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' || activeTargetId || isTransitioning) return;
    const now = performance.now();
    if (now - hoverThrottle < 50) return;
    hoverThrottle = now;

    const hitData = hitTestInteractive(event.clientX, event.clientY);
    renderer.domElement.style.cursor = hitData ? 'pointer' : 'grab';
  });

  // Nav buttons (desktop pill + mobile dock)
  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const action = btn.dataset.nav;
      if (action === 'home') {
        zoomOut();
      } else if (action === 'projects') {
        zoomToTarget('computerScreen');
      } else if (action === 'contact') {
        zoomToTarget('phone');
      }
    });
  });

  // Exit buttons inside PC and Phone screens
  document.querySelectorAll('.exit-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      zoomOut();
    });
  });

  // Escape key to zoom out
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeTargetId) {
      zoomOut();
    }
  });

  // Gmail contact click: mailto + clipboard copy with feedback
  const gmailCard = document.getElementById('contact-gmail');
  if (gmailCard) {
    gmailCard.addEventListener('click', () => {
      const email = 'gafrilatif.aviandi@gmail.com';
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
      const pill = document.getElementById('gmail-copy-pill');
      if (pill) {
        pill.textContent = 'COPIED!';
        pill.classList.add('copied');
        setTimeout(() => {
          pill.textContent = '[COPY]';
          pill.classList.remove('copied');
        }, 1800);
      }
      window.location.href = `mailto:${email}`;
    });
  }

  // Responsive resize & orientation change handling
  window.addEventListener('resize', () => {
    resizeRenderers();
    syncChairVisibility();
    if (activeTargetId && !isTransitioning) {
      const { cameraPos, lookAt } = getTargetCameraState(activeTargetId, camera);
      camera.position.copy(cameraPos);
      controls.target.copy(lookAt);
      camera.lookAt(controls.target);
    }
  });

  setActiveNav('home');

  return {
    zoomToTarget,
    zoomOut,
  };
}
