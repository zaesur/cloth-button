import * as THREE from "three";

const GRAVITY = -9.81;

const canvas = document.getElementById("canvas")!;

const scene = new THREE.Scene();
const clock = new THREE.Clock();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight);
const plane = createPlane();

scene.add(plane);
camera.position.z = 5;
update();

function render() {
  renderer.render(scene, camera);
}

function animate(delta: number) {
  const speeds = plane.geometry.getAttribute("speed");
  const positions = plane.geometry.getAttribute("position");

  for (let i = 0; i < positions.count; i++) {
    const speedY = speeds.array[i * speeds.itemSize];
    const positionY = positions.array[i * positions.itemSize + 1];

    const nextSpeedY = speedY + GRAVITY * delta;
    const nextPositionY = positionY + speedY * delta + GRAVITY * Math.pow(delta, 2) / 2;

    speeds.array[i * speeds.itemSize] = nextSpeedY;
    positions.array[i * positions.itemSize + 1] = nextPositionY;
  }
  
  speeds.needsUpdate = true;
  positions.needsUpdate = true;
}

function update() {
  const delta = clock.getDelta();

  requestAnimationFrame(update)
  animate(delta);
  render();
}

function createPlane() {
  const material = new THREE.MeshBasicMaterial({ wireframe: true });
  const geometry = new THREE.PlaneGeometry(1, 1, 10, 10);

  const speed = new Float32Array(geometry.getAttribute("position").count);
  geometry.setAttribute("speed", new THREE.BufferAttribute(speed, 1));

  return new THREE.Mesh(geometry, material);
}

