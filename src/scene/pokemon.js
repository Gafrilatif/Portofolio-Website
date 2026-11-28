import * as THREE from 'three';
import gsap from 'gsap';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const POKEMON_MANIFEST = [
  {
    key: 'eevee',
    name: 'EEVEE',
    path: './models/eevee.glb',
    position: { x: 1.7, y: -0.35, z: -2.5 },
    rotationY: 0.25,
    targetHeight: 1.5,
  },
  {
    key: 'mew',
    name: 'MEW',
    path: './models/mew.glb',
    position: { x: 10.0, y: 9.5, z: 5.0 },
    rotationY: 0,
    targetHeight: 1.55,
    isFlying: true,
  },
  {
    key: 'vulpix',
    name: 'VULPIX',
    path: './models/vulpix-_super_smash_bros._ultimate.glb',
    position: { x: 2.1, y: -4.0, z: 5.8 },
    rotationY: 1.55,
    targetHeight: 1.35,
  },
  {
    key: 'flareon',
    name: 'FLAREON',
    path: './models/flareon.glb',
    position: { x: 11.2, y: -4.0, z: -2.7 },
    rotationY: -0.4,
    targetHeight: 1.7,
  },
  {
    key: 'jolteon',
    name: 'JOLTEON',
    path: './models/jolteon.glb',
    position: { x: 2.1, y: 4.15, z: -2.1 },
    rotationY: 0.35,
    targetHeight: 1.7,
  },
  {
    key: 'bulbasaur',
    name: 'BULBASAUR',
    path: './models/bulbasaur_pokemon.glb',
    position: { x: 21.4, y: -1.54, z: 4.5 },
    rotationY: -0.65,
    targetHeight: 1.65,
  },
  {
    key: 'umbreon',
    name: 'UMBREON',
    path: './models/umbreon.glb',
    position: { x: 27.6, y: -4.0, z: -3.2 },
    rotationY: 2.2,
    targetHeight: 2.0,
  },
  {
    key: 'arcanine',
    name: 'ARCANINE',
    path: './models/arcanine.glb',
    position: { x: -5.8, y: -4.0, z: 0.5 },
    rotationY: 0.85,
    targetHeight: 3.3,
  },
];

function poseMewFlying(model) {
  const bones = {};
  model.traverse((obj) => {
    if (obj.isBone) bones[obj.name] = obj;
  });

  // Playful curled-up psychic flying pose
  if (bones.Waist_03) bones.Waist_03.rotation.x += 0.22;
  if (bones.LThigh_05) { bones.LThigh_05.rotation.z -= 0.75; bones.LThigh_05.rotation.x += 0.35; }
  if (bones.LLeg_06) bones.LLeg_06.rotation.z += 0.95;
  if (bones.RThigh_011) { bones.RThigh_011.rotation.z -= 0.55; bones.RThigh_011.rotation.x -= 0.25; }
  if (bones.RLeg_012) bones.RLeg_012.rotation.z += 0.85;
  if (bones.LArm_027) { bones.LArm_027.rotation.z -= 0.55; bones.LArm_027.rotation.y += 0.4; }
  if (bones.RArm_038) { bones.RArm_038.rotation.z += 0.55; bones.RArm_038.rotation.y -= 0.4; }
  if (bones.Head_032) bones.Head_032.rotation.z += 0.15;

  const tailBones = [];
  for (let i = 1; i <= 7; i++) {
    const tb = bones[`Tail${i}_0${16 + i}`];
    if (tb) {
      tb.rotation.z += i <= 3 ? 0.24 : -0.22;
      tailBones.push({ bone: tb, baseZ: tb.rotation.z, baseY: tb.rotation.y, idx: i });
    }
  }
  return tailBones;
}

function poseVulpixLaying(model) {
  const bones = {};
  model.traverse((obj) => {
    if (obj.isBone) bones[obj.name] = obj;
  });

  // Cozy laying-down / resting pose under the coffee table
  if (bones.LArm_023) { bones.LArm_023.rotation.z -= 1.05; bones.LArm_023.rotation.x += 0.3; }
  if (bones.LForeArm_024) bones.LForeArm_024.rotation.z += 0.65;
  if (bones.RArm_032) { bones.RArm_032.rotation.z += 1.05; bones.RArm_032.rotation.x += 0.3; }
  if (bones.RForeArm_033) bones.RForeArm_033.rotation.z -= 0.65;

  if (bones.LThigh_012) bones.LThigh_012.rotation.z -= 1.1;
  if (bones.LLeg_013) bones.LLeg_013.rotation.z += 1.35;
  if (bones.RThigh_016) bones.RThigh_016.rotation.z -= 1.1;
  if (bones.RLeg_017) bones.RLeg_017.rotation.z += 1.35;

  if (bones.Neck_026) bones.Neck_026.rotation.z += 0.35;
  if (bones.Head_027) { bones.Head_027.rotation.y += 0.25; bones.Head_027.rotation.z -= 0.15; }
}

function createPokeballMesh() {
  const group = new THREE.Group();
  const radius = 0.42;

  // Glossy red top hemisphere
  const topGeo = new THREE.SphereGeometry(radius, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const topMat = new THREE.MeshStandardMaterial({
    color: 0xe52521,
    roughness: 0.22,
    metalness: 0.15,
  });
  group.add(new THREE.Mesh(topGeo, topMat));

  // White bottom hemisphere
  const botGeo = new THREE.SphereGeometry(radius, 24, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
  const botMat = new THREE.MeshStandardMaterial({
    color: 0xf4f6f8,
    roughness: 0.28,
    metalness: 0.1,
  });
  group.add(new THREE.Mesh(botGeo, botMat));

  // Black center equator band
  const bandGeo = new THREE.TorusGeometry(radius * 0.99, 0.045, 10, 32);
  const bandMat = new THREE.MeshStandardMaterial({ color: 0x15181c, roughness: 0.5 });
  const band = new THREE.Mesh(bandGeo, bandMat);
  band.rotation.x = Math.PI / 2;
  group.add(band);

  // Outer black button ring
  const ringGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.06, 20);
  const ring = new THREE.Mesh(ringGeo, bandMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.z = radius * 0.96;
  group.add(ring);

  // Glowing center button (blinks red during wiggles, flashes cyan/gold on catch)
  const btnGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.08, 20);
  const btnMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.25,
    roughness: 0.2,
  });
  const button = new THREE.Mesh(btnGeo, btnMat);
  button.rotation.x = Math.PI / 2;
  button.position.z = radius * 0.98;
  group.add(button);

  return { group, btnMat };
}

export function createPokemonSystem(gltfLoader, scene, camera) {
  const entries = new Map();
  const caughtKeys = new Set();
  let isCatching = false;
  let toastTimer = null;
  let tutorialHint = null;

  const totalCount = POKEMON_MANIFEST.length;

  function showToast(message, isMaster = false) {
    const toast = document.getElementById('catch-toast');
    if (!toast) return;
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.toggle('master', isMaster);
    toast.classList.add('visible');
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, isMaster ? 5200 : 3600);
  }

  function updatePokedexCounter() {
    const pill = document.getElementById('pokedex-counter');
    const countEl = document.getElementById('pokedex-count');
    if (!pill || !countEl) return;
    countEl.textContent = `${caughtKeys.size} / ${totalCount}`;
    if (caughtKeys.size > 0) {
      pill.classList.add('visible');
    }
    if (caughtKeys.size === totalCount) {
      pill.classList.add('complete');
    }
  }

  function spawnCatchStars(worldPos) {
    const root = document.createElement('div');
    root.className = 'poke-stars';
    root.innerHTML = `
      <span class="poke-star s1">★</span>
      <span class="poke-star s2">✦</span>
      <span class="poke-star s3">★</span>
      <span class="poke-star s4">✦</span>
    `;
    const obj = new CSS2DObject(root);
    obj.position.set(worldPos.x, worldPos.y + 0.6, worldPos.z);
    scene.add(obj);

    setTimeout(() => {
      scene.remove(obj);
      root.remove();
    }, 1100);
  }

  // Load all 8 Pokémon with automatic height normalization & flush surface alignment
  POKEMON_MANIFEST.forEach((cfg) => {
    gltfLoader.load(cfg.path, (gltf) => {
      const model = gltf.scene;

      // Remove baked floor plane in Bulbasaur model before computing bounds
      if (cfg.key === 'bulbasaur') {
        const toRemove = [];
        model.traverse((child) => {
          if (child.isMesh && child.name.toLowerCase().includes('pplane')) {
            toRemove.push(child);
          }
        });
        toRemove.forEach((m) => m.parent?.remove(m));
      }

      let tailBones = [];
      if (cfg.isFlying) {
        tailBones = poseMewFlying(model);
      } else if (cfg.pose === 'laying') {
        poseVulpixLaying(model);
      }

      model.updateMatrixWorld(true);

      const rawBox = new THREE.Box3().setFromObject(model);
      const rawSize = new THREE.Vector3();
      rawBox.getSize(rawSize);
      const scaleFactor = rawSize.y > 0 ? cfg.targetHeight / rawSize.y : 1;

      model.scale.setScalar(scaleFactor);
      model.rotation.order = 'YXZ';
      model.rotation.y = cfg.rotationY || 0;
      if (cfg.rotationX) model.rotation.x = cfg.rotationX;
      model.updateMatrixWorld(true);

      // Recompute bounding box after scaling so feet sit flush at cfg.position.y
      const scaledBox = new THREE.Box3().setFromObject(model);
      const scaledCenter = new THREE.Vector3();
      const scaledSize = new THREE.Vector3();
      scaledBox.getCenter(scaledCenter);
      scaledBox.getSize(scaledSize);

      model.position.set(
        cfg.position.x - scaledCenter.x,
        cfg.position.y - scaledBox.min.y,
        cfg.position.z - scaledCenter.z
      );

      // Wrap flying Mew in a pivot group so flight position & rotation stay centered cleanly
      let targetObject = model;
      if (cfg.isFlying) {
        const pivot = new THREE.Group();
        pivot.position.set(cfg.position.x, cfg.position.y, cfg.position.z);
        model.position.sub(pivot.position);
        pivot.add(model);
        scene.add(pivot);
        targetObject = pivot;
      } else {
        scene.add(model);
      }

      const userData = { id: 'pokemon', pokemonKey: cfg.key };
      model.userData = userData;
      model.traverse((child) => {
        if (child.isMesh) {
          child.userData = userData;
          child.castShadow = true;
          // Avoid shadow-map acne blotches on SkinnedMeshes (Vulpix, Mew)
          child.receiveShadow = false;
        }
      });

      // Generous invisible clickable hitbox so even small or flying Pokémon are easy to click
      const hitSize = new THREE.Vector3(
        Math.max(scaledSize.x * 1.45, 1.5),
        Math.max(scaledSize.y * 1.45, 1.5),
        Math.max(scaledSize.z * 1.45, 1.5)
      );
      const hitbox = new THREE.Mesh(
        new THREE.BoxGeometry(hitSize.x, hitSize.y, hitSize.z),
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          depthWrite: false,
        })
      );
      const worldCenter = new THREE.Vector3(
        cfg.position.x,
        cfg.position.y + scaledSize.y * 0.5,
        cfg.position.z
      );
      hitbox.position.copy(worldCenter);
      hitbox.userData = userData;
      hitbox.castShadow = false;
      hitbox.receiveShadow = false;
      scene.add(hitbox);

      entries.set(cfg.key, {
        cfg,
        model: targetObject,
        hitbox,
        worldCenter,
        groundY: cfg.isFlying ? -4.0 : cfg.position.y,
        caught: false,
        tailBones,
      });
    });
  });

  function catchPokemon(key) {
    if (isCatching) return;
    const entry = entries.get(key);
    if (!entry || entry.caught) return;

    isCatching = true;
    entry.caught = true;
    scene.remove(entry.hitbox);

    // Dismiss Eevee's tutorial hint permanently once Eevee is clicked
    if (entry.cfg.isTutorial && tutorialHint) {
      tutorialHint.element.classList.add('dismissed');
      setTimeout(() => {
        if (tutorialHint) {
          tutorialHint.obj.visible = false;
          tutorialHint.element.style.display = 'none';
        }
      }, 300);
    }

    const { group: pokeball, btnMat } = createPokeballMesh();

    // Launch from just below-front of the current camera toward the Pokémon
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    const startPos = camera.position
      .clone()
      .addScaledVector(forward, 3.2)
      .add(new THREE.Vector3(0, -1.2, 0));

    const targetPos = entry.worldCenter.clone();
    const restPos = new THREE.Vector3(targetPos.x, entry.groundY + 0.44, targetPos.z);

    pokeball.position.copy(startPos);
    pokeball.scale.setScalar(0.85);
    pokeball.lookAt(targetPos);
    scene.add(pokeball);

    // Impact flash light
    const flashLight = new THREE.PointLight(0xff4455, 0, 10);
    flashLight.position.copy(targetPos);
    scene.add(flashLight);

    const arcPeakY = Math.max(startPos.y, targetPos.y) + 4.2;
    const tl = gsap.timeline();

    // 1. Parabolic throw arc + rapid spin
    const throwObj = { t: 0 };
    tl.to(throwObj, {
      t: 1,
      duration: 0.52,
      ease: 'power1.inOut',
      onUpdate: () => {
        const t = throwObj.t;
        pokeball.position.x = THREE.MathUtils.lerp(startPos.x, targetPos.x, t);
        pokeball.position.z = THREE.MathUtils.lerp(startPos.z, targetPos.z, t);
        const linearY = THREE.MathUtils.lerp(startPos.y, targetPos.y, t);
        const arcBoost = 4 * t * (1 - t) * (arcPeakY - (startPos.y + targetPos.y) * 0.5);
        pokeball.position.y = linearY + arcBoost;
        pokeball.rotation.x += 0.32;
      },
    });

    // 2. Impact flash + Pokémon absorbed into Pokéball
    tl.to(flashLight, { intensity: 18, duration: 0.12, ease: 'power2.out' }, 'impact')
      .to(
        entry.model.scale,
        { x: 0.001, y: 0.001, z: 0.001, duration: 0.24, ease: 'power2.in' },
        'impact'
      )
      .to(
        entry.model.position,
        { x: targetPos.x, y: targetPos.y, z: targetPos.z, duration: 0.24, ease: 'power2.in' },
        'impact'
      )
      .to(flashLight, { intensity: 0, duration: 0.25, ease: 'power2.in' }, 'impact+=0.12')
      .call(() => {
        entry.model.visible = false;
      });

    // 3. Pokéball bounces slightly & lands on the surface facing the camera
    tl.to(pokeball.position, {
      y: restPos.y + 0.9,
      duration: 0.18,
      ease: 'power2.out',
    })
      .to(pokeball.position, {
        y: restPos.y,
        duration: 0.22,
        ease: 'bounce.out',
      })
      .call(() => {
        pokeball.rotation.set(0, 0, 0);
        pokeball.lookAt(camera.position.x, restPos.y, camera.position.z);
      });

    // 4. Classic 3-wiggle tension animation with blinking red center button
    for (let w = 0; w < 3; w++) {
      tl.call(() => {
        btnMat.color.setHex(0xff3344);
        btnMat.emissive.setHex(0xff2233);
        btnMat.emissiveIntensity = 1.8;
      })
        .to(pokeball.rotation, { z: 0.45, duration: 0.12, ease: 'power2.out' })
        .to(pokeball.rotation, { z: -0.4, duration: 0.16, ease: 'power2.inOut' })
        .to(pokeball.rotation, { z: 0, duration: 0.12, ease: 'power2.out' })
        .call(() => {
          btnMat.color.setHex(0xffffff);
          btnMat.emissive.setHex(0xffffff);
          btnMat.emissiveIntensity = 0.2;
        })
        .to({}, { duration: 0.16 });
    }

    // 5. Gotcha! Star burst + cyan/gold button flash + toast & Pokédex update
    tl.call(() => {
      btnMat.color.setHex(0x00ffcc);
      btnMat.emissive.setHex(0x00ffcc);
      btnMat.emissiveIntensity = 2.4;
      spawnCatchStars(restPos);

      caughtKeys.add(key);
      updatePokedexCounter();

      const remaining = totalCount - caughtKeys.size;
      if (remaining === 0) {
        showToast(`★ MASTER TRAINER! All ${totalCount} / ${totalCount} Pokémon caught!`, true);
      } else if (caughtKeys.size === 1) {
        showToast(`★ Gotcha! ${entry.cfg.name} caught! (1 / ${totalCount}) — ${remaining} more hidden around the room & outside!`);
      } else {
        showToast(`★ Gotcha! ${entry.cfg.name} caught! (${caughtKeys.size} / ${totalCount})`);
      }
    })
      .to({}, { duration: 0.55 })
      .to(pokeball.scale, {
        x: 0.001,
        y: 0.001,
        z: 0.001,
        duration: 0.3,
        ease: 'back.in(1.8)',
      })
      .call(() => {
        scene.remove(pokeball);
        scene.remove(flashLight);
        isCatching = false;
      });
  }

  function setHintsTemporarilyHidden(hidden) {
    if (!tutorialHint || caughtKeys.has('eevee')) return;
    tutorialHint.element.classList.toggle('temporarily-hidden', hidden);
  }

  function update(elapsedSeconds) {
    const mew = entries.get('mew');
    if (mew && !mew.caught) {
      // Smooth playful figure-8 flight path high near the glowing ceiling light bulb
      const speed = 0.52;
      const t = elapsedSeconds * speed;
      const x = 10.5 + Math.sin(t) * 6.5;
      const z = 5.0 + Math.sin(t * 2) * 3.8;
      const y = 9.5 + Math.sin(elapsedSeconds * 2.0) * 1.1;

      // Velocity tangent for natural flight heading & subtle bank
      const vx = Math.cos(t) * 6.8 * speed;
      const vz = Math.cos(t * 2) * 3.8 * 2 * speed;

      mew.model.position.set(x, y, z);
      mew.model.rotation.y = Math.atan2(vx, vz);
      mew.model.rotation.z = -Math.sin(t) * 0.18;

      mew.worldCenter.set(x, y, z);
      mew.hitbox.position.set(x, y, z);

      // Gentle psychic tail wave
      if (mew.tailBones) {
        for (const tb of mew.tailBones) {
          tb.bone.rotation.y = tb.baseY + Math.sin(elapsedSeconds * 3.5 - tb.idx * 0.45) * 0.16;
        }
      }
    }
  }

  return {
    catchPokemon,
    setHintsTemporarilyHidden,
    update,
    isCatching: () => isCatching,
  };
}
