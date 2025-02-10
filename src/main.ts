import * as THREE from "three";

const canvas = document.getElementById("canvas")!;

const scene = new THREE.Scene();
const clock = new THREE.Clock();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight);
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1),
  new THREE.MeshBasicMaterial({ color: "white" }),
);

scene.add(cube);
camera.position.z = 5;
update();

function render() {
  renderer.render(scene, camera);
}

function animate(delta: number) {
  cube.rotation.y += delta
}

function update() {
  const delta = clock.getDelta();

  requestAnimationFrame(update)
  animate(delta);
  render();
}


