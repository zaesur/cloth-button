import * as THREE from "three";
import RAPIER from "@dimforge/rapier3d";
import { EXRLoader } from "three/examples/jsm/Addons.js";

const ENVIRONMENT_PATH = "/cloth-button/rosendal_plains_1_2k.exr";
const TEXTURE_PATH = "/cloth-button/text.png";

const WIDTH = 2;
const HEIGHT = 1;
const ASPECT_RATIO = WIDTH / HEIGHT;
const WIDTH_SEGMENTS = 10;
const HEIGHT_SEGMENTS = Math.floor(WIDTH_SEGMENTS * ASPECT_RATIO);
const RELAX_FACTOR = 1.1;
const HORIZONTAL_VERTEX_DISTANCE = (RELAX_FACTOR * WIDTH) / WIDTH_SEGMENTS;
const VERTICAL_VERTEX_DISTANCE = (RELAX_FACTOR * HEIGHT) / HEIGHT_SEGMENTS;
const MASS = 1;
const PRE_ITERATIONS = 0;

const canvas = document.getElementById("canvas")!;

const gravity = { x: 0, y: 0, z: 10 };
const world = new RAPIER.World(gravity);

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
const camera = new THREE.PerspectiveCamera(
  45,
  canvas.clientWidth / canvas.clientHeight
);
const plane = await createPlane();
const bodies = createBodies();
createJoints();

const background = await loadEnvironment(ENVIRONMENT_PATH);
background.mapping = THREE.EquirectangularReflectionMapping;
scene.environment = background;

scene.add(plane);
camera.position.z = 5;

for (let i = 0; i < PRE_ITERATIONS; i++) {
  world.step();
}

update();

function update() {
  requestAnimationFrame(update);
  updatePhysics();
  updateGeometry();
  render();
}

function updatePhysics() {
  world.step();
}

function updateGeometry() {
  const positions = plane.geometry.attributes.position;

  for (let i = 0; i < positions.count; i++) {
    const newPosition = bodies[i].translation();
    positions.setXYZ(i, newPosition.x, newPosition.y, newPosition.z);
  }

  positions.needsUpdate = true;
  plane.geometry.computeVertexNormals();
}

function render() {
  renderer.render(scene, camera);
}

async function createPlane() {
  const map = await loadTexture(TEXTURE_PATH);
  map.offset.set(-0.5, 0);
  map.repeat.set(WIDTH, HEIGHT);
  map.wrapS = map.wrapT = THREE.ClampToEdgeWrapping;

  const material = new THREE.MeshStandardMaterial({
    wireframe: false,
    metalness: 0.1,
    roughness: 0.1,
    map,
  });
  const geometry = new THREE.PlaneGeometry(
    WIDTH,
    HEIGHT,
    WIDTH_SEGMENTS,
    HEIGHT_SEGMENTS
  );
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}

function createBodies() {
  const bodies: RAPIER.RigidBody[] = [];
  const vertex = new THREE.Vector3();

  const isFixed = (i: number, j: number) =>
    i % HEIGHT_SEGMENTS === 0 || j % WIDTH_SEGMENTS === 0;

  for (let i = 0; i < HEIGHT_SEGMENTS + 1; i++) {
    for (let j = 0; j < WIDTH_SEGMENTS + 1; j++) {
      const index = i * (WIDTH_SEGMENTS + 1) + j;

      vertex.fromBufferAttribute(plane.geometry.attributes.position, index);
      vertex.applyMatrix4(plane.matrixWorld);

      const method = isFixed(i, j) ? "fixed" : "dynamic";
      const bodyDesc = RAPIER.RigidBodyDesc[method]()
        .setAdditionalMass(MASS)
        .setTranslation(...vertex.toArray());

      const body = world.createRigidBody(bodyDesc);
      bodies.push(body);
    }
  }

  return bodies;
}

function createJoints() {
  const joints: RAPIER.ImpulseJoint[] = [];

  const connect = (
    bodyA: RAPIER.RigidBody,
    bodyB: RAPIER.RigidBody,
    distance: number
  ) => {
    const origin = { x: 0, y: 0, z: 0 };
    const jointParams = RAPIER.JointData.rope(distance, origin, origin);

    const joint = world.createImpulseJoint(jointParams, bodyA, bodyB, true);
    joints.push(joint);
  };

  for (let i = 0; i < HEIGHT_SEGMENTS + 1; i++) {
    for (let j = 0; j < WIDTH_SEGMENTS + 1; j++) {
      const index = i * (WIDTH_SEGMENTS + 1) + j;

      if (j < WIDTH_SEGMENTS)
        connect(bodies[index], bodies[index + 1], HORIZONTAL_VERTEX_DISTANCE);
      if (i < HEIGHT_SEGMENTS)
        connect(
          bodies[index],
          bodies[index + WIDTH_SEGMENTS + 1],
          VERTICAL_VERTEX_DISTANCE
        );
    }
  }

  return joints;
}

async function loadEnvironment(url: string) {
  const loader = new EXRLoader();
  return new Promise<THREE.DataTexture>((resolve, reject) => {
    loader.load(url, (data) => resolve(data), undefined, reject);
  });
}

async function loadTexture(url: string) {
  const loader = new THREE.TextureLoader();
  return new Promise<THREE.Texture>((resolve, reject) => {
    loader.load(url, (data) => resolve(data), undefined, reject);
  });
}
