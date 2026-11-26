import * as THREE from 'three';

export function buildEnvironment(scene, materials) {
  const floorGeometry = new THREE.BoxGeometry(125, 1, 125);
  const floor = new THREE.Mesh(floorGeometry, materials.floorMaterial);
  floor.position.y = -5.5;
  floor.receiveShadow = true;
  scene.add(floor);

  const roomFloor = new THREE.BoxGeometry(26, 3, 20.5);
  const roomFloorMesh = new THREE.Mesh(roomFloor, materials.roomFloorMaterial);
  roomFloorMesh.position.set(12.5, -5.5, 5.25);
  roomFloorMesh.receiveShadow = true;
  scene.add(roomFloorMesh);

  // Full-world grass base excluding the room and front-right cutaway zone
  const lShape = new THREE.Shape();
  lShape.moveTo(-62.5, -62.5);
  lShape.lineTo(62.5, -62.5);
  lShape.lineTo(62.5, 0.5);
  lShape.lineTo(25.5, 0.5);
  lShape.lineTo(25.5, -5.0);
  lShape.lineTo(-0.5, -5.0);
  lShape.lineTo(-0.5, 62.5);
  lShape.lineTo(-62.5, 62.5);
  lShape.lineTo(-62.5, -62.5);

  const lShapeGeometry = new THREE.ExtrudeGeometry(lShape, {
    depth: 3,
    bevelEnabled: false,
  });
  const fullOutsideFloor = new THREE.Mesh(
    lShapeGeometry,
    materials.outsideFloorMaterial
  );
  fullOutsideFloor.rotation.x = Math.PI / 2;
  fullOutsideFloor.position.y = -4;
  fullOutsideFloor.receiveShadow = true;
  scene.add(fullOutsideFloor);

  const boxGeometry = new THREE.BoxGeometry(1.48, 1, 1.48);
  const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xc4a484 });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(13.24, -4, -3.73);
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);
}
