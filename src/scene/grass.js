import * as THREE from 'three';

function createGrassBladeGeometry() {
  // Tapered, gently curved 3D grass blade (height = 1.0, base at y = 0)
  // 4 segments (7 vertices, 5 triangles) with root-to-tip vertex color AO
  const positions = new Float32Array([
    // Row 0 (base)
    -0.06, 0.0, 0.0,
     0.06, 0.0, 0.0,
    // Row 1 (lower-mid)
    -0.048, 0.33, 0.015,
     0.048, 0.33, 0.015,
    // Row 2 (upper-mid)
    -0.026, 0.68, 0.055,
     0.026, 0.68, 0.055,
    // Row 3 (tip)
     0.0, 1.0, 0.13,
  ]);

  // Darker at roots for natural ambient occlusion, brighter toward tips
  const colors = new Float32Array([
    0.35, 0.38, 0.35,
    0.35, 0.38, 0.35,
    0.65, 0.70, 0.62,
    0.65, 0.70, 0.62,
    0.90, 0.96, 0.84,
    0.90, 0.96, 0.84,
    1.0, 1.0, 0.92,
  ]);

  const indices = [
    0, 1, 2,
    1, 3, 2,
    2, 3, 4,
    3, 5, 4,
    4, 5, 6,
  ];

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

function isInsideGrassZone(x, z) {
  if (x < -62 || x > 62 || z < -62 || z > 62) return false;

  // Exclude room interior (with 0.35 wall clearance) and front-right cutaway zone
  if (x > -0.85 && z > -5.35) {
    if (x < 25.85 || z > 0.15) return false;
  }

  // Small clearance around streetlight pole at (-5, -4.5)
  const dx = x - -5;
  const dz = z - -4.5;
  if (dx * dx + dz * dz < 0.45) return false;

  return true;
}

export function createGrassField(scene) {
  const isMobile = window.innerWidth <= 640;
  const totalBlades = isMobile ? 9000 : 20000;

  const bladeGeometry = createGrassBladeGeometry();
  const uniforms = { uTime: { value: 0 } };

  const grassMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    vertexColors: true,
    roughness: 0.85,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });

  grassMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uTime;`
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vec3 instOrigin = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        float bend = position.y * position.y;
        float wave = sin(uTime * 1.65 + instOrigin.x * 0.35 + instOrigin.z * 0.25) * 0.14
                   + sin(uTime * 2.9 + instOrigin.x * 0.8 - instOrigin.z * 0.6) * 0.05;
        transformed.x += wave * bend;
        transformed.z += wave * 0.55 * bend;`
      );
  };

  const instancedMesh = new THREE.InstancedMesh(bladeGeometry, grassMaterial, totalBlades);
  instancedMesh.receiveShadow = true;
  instancedMesh.castShadow = false;
  instancedMesh.frustumCulled = false;

  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const groundY = -4.02;

  let placed = 0;
  let attempts = 0;
  const maxAttempts = totalBlades * 12;

  while (placed < totalBlades && attempts < maxAttempts) {
    attempts++;

    // Sample across the full 125x125 world and apply a smooth radial density falloff
    // centered around the house & streetlight so there are zero hard rectangular seams
    const x = -62 + Math.random() * 124;
    const z = -62 + Math.random() * 124;

    if (!isInsideGrassZone(x, z)) continue;

    const dist = Math.hypot(x - 6, z - 2);
    const keepProb = Math.exp(-Math.pow(dist / 38, 2)) * 0.92 + 0.08;
    if (Math.random() > keepProb) continue;

    const height = 0.38 + Math.random() * 0.62;
    const width = 0.85 + Math.random() * 0.5;

    dummy.position.set(x, groundY, z);
    dummy.rotation.set(
      (Math.random() - 0.5) * 0.28,
      Math.random() * Math.PI * 2,
      (Math.random() - 0.5) * 0.28
    );
    dummy.scale.set(width, height, 1);
    dummy.updateMatrix();
    instancedMesh.setMatrixAt(placed, dummy.matrix);

    // Organic forest/moss/olive green variation per blade
    const hue = 0.24 + Math.random() * 0.07;
    const sat = 0.42 + Math.random() * 0.22;
    const light = 0.16 + Math.random() * 0.17;
    color.setHSL(hue, sat, light);
    instancedMesh.setColorAt(placed, color);

    placed++;
  }

  instancedMesh.count = placed;
  instancedMesh.instanceMatrix.needsUpdate = true;
  if (instancedMesh.instanceColor) {
    instancedMesh.instanceColor.needsUpdate = true;
  }

  scene.add(instancedMesh);

  return {
    update(elapsedSeconds) {
      uniforms.uTime.value = elapsedSeconds;
    },
  };
}
