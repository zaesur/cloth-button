import * as THREE from "three";
import RAPIER from "@dimforge/rapier3d";
import { EXRLoader } from "three/examples/jsm/Addons.js";

const SEGMENTS = 10;
const MASS = 0.5;
const VERTEX_DISTANCE = 1 / SEGMENTS;

const canvas = document.getElementById("canvas")!;

const gravity = { x: 0, y: 0, z: 10 };
const world = new RAPIER.World(gravity);

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const camera = new THREE.PerspectiveCamera(
  45,
  canvas.clientWidth / canvas.clientHeight
);
const plane = createPlane();
const bodies = createBodies();
createJoints();

const background = await loadEnvironment("/cloth-button/rosendal_plains_1_2k.exr");
background.mapping = THREE.EquirectangularReflectionMapping;
scene.background = new THREE.Color("grey");
scene.environment = background;

scene.add(plane);
camera.position.z = 5;

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

function createPlane() {
  const material = new THREE.MeshStandardMaterial({
    wireframe: false,
    metalness: 0.1,
    roughness: 0.1,
  });
  const geometry = new THREE.PlaneGeometry(1, 1, SEGMENTS, SEGMENTS);
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
}

function createBodies() {
  const bodies: RAPIER.RigidBody[] = [];
  const vertex = new THREE.Vector3();

  const isFixed = (i: number, j: number) =>
    i % SEGMENTS === 0 || j % SEGMENTS === 0;

  for (let i = 0; i < SEGMENTS + 1; i++) {
    for (let j = 0; j < SEGMENTS + 1; j++) {
      const index = i * (SEGMENTS + 1) + j;

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

  const connect = (bodyA: RAPIER.RigidBody, bodyB: RAPIER.RigidBody) => {
    const origin = { x: 0, y: 0, z: 0 };
    const jointParams = RAPIER.JointData.spring(
      VERTEX_DISTANCE,
      100,
      10,
      origin,
      origin
    );

    const joint = world.createImpulseJoint(jointParams, bodyA, bodyB, true);
    joints.push(joint)
  };

  for (let i = 0; i < SEGMENTS + 1; i++) {
    for (let j = 0; j < SEGMENTS + 1; j++) {
      const index = i * (SEGMENTS + 1) + j;

      if (j < SEGMENTS) connect(bodies[index], bodies[index + 1]);
      if (i < SEGMENTS) connect(bodies[index], bodies[index + SEGMENTS + 1]);
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
