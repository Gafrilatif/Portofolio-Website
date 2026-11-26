import * as THREE from 'three';

function loadTiledTextures(textureLoader, paths, repeatX, repeatY) {
  return paths.map((path) => {
    const tex = textureLoader.load(path);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeatX, repeatY);
    return tex;
  });
}

export function createMaterials(loadingManager) {
  const textureLoader = new THREE.TextureLoader(loadingManager);

  const [floorColor, floorRoughness, floorNormal] = loadTiledTextures(
    textureLoader,
    [
      './textures/metal_color.jpg',
      './textures/metal_roughness.jpg',
      './textures/metal_normal.png',
    ],
    8,
    8
  );

  const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorColor,
    roughnessMap: floorRoughness,
    normalMap: floorNormal,
    roughness: 0.6,
    metalness: 0.1,
  });

  const [roomfloorColor, roomfloorRoughness, roomfloorNormal] = loadTiledTextures(
    textureLoader,
    [
      './textures/roomFloor_color.jpg',
      './textures/roomFloor_roughness.jpg',
      './textures/roomFloor_normal.png',
    ],
    8,
    8
  );

  const roomFloorMaterial = new THREE.MeshStandardMaterial({
    map: roomfloorColor,
    roughnessMap: roomfloorRoughness,
    normalMap: roomfloorNormal,
    roughness: 0.6,
    metalness: 0,
  });

  const [outsidefloorColor, outsidefloorRoughness, outsidefloorNormal] =
    loadTiledTextures(
      textureLoader,
      [
        './textures/grass_BaseColor.jpg',
        './textures/grass_Roughness.jpg',
        './textures/grass_Normal.png',
      ],
      0.2,
      0.2
    );

  const outsideFloorMaterial = new THREE.MeshStandardMaterial({
    map: outsidefloorColor,
    roughnessMap: outsidefloorRoughness,
    normalMap: outsidefloorNormal,
    roughness: 1,
    metalness: 0,
    side: THREE.DoubleSide,
  });

  const [furnitureColor, furnitureRoughness, furnitureNormal] =
    loadTiledTextures(
      textureLoader,
      [
        './textures/wood_furniture_color.jpg',
        './textures/wood_furniture_roughness.jpg',
        './textures/wood_furniture_normal.jpg',
      ],
      0.2,
      0.2
    );

  const furnitureMaterial = new THREE.MeshStandardMaterial({
    map: furnitureColor,
    roughnessMap: furnitureRoughness,
    normalMap: furnitureNormal,
    roughness: 1,
    metalness: 0,
  });

  function applyWallMaterial(mesh) {
    mesh.material.metalness = 0.1;
    mesh.material.roughness = 0.8;
    mesh.material.side = THREE.DoubleSide;
    mesh.material.needsUpdate = true;
  }

  return {
    floorMaterial,
    roomFloorMaterial,
    outsideFloorMaterial,
    furnitureMaterial,
    applyWallMaterial,
  };
}
