// Case-art renderer: /art.html?scene=secret-menu&shot=cover
// Same renderer, environment, lights and candy background as the site's
// Stage, so the still-life props read as the bear's world. Rendered
// continuously; window.__artReady flips true once the frame has settled,
// which scripts/render-art.mjs waits for before screenshotting.

import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildBackground } from './gl/background.js';

const SCENES = {
  'secret-menu': () => import('./gl/art/secret-menu.js'),
};

const q = new URLSearchParams(location.search);
const sceneName = q.get('scene') || 'secret-menu';
const shotName = q.get('shot') || 'cover';

const canvas = document.getElementById('art');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setClearColor(0xfff4e8, 1);
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 80);

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();
const key = new THREE.DirectionalLight(0xffffff, 1.6);
key.position.set(-3, 5, 6);
scene.add(key);
const rim = new THREE.DirectionalLight(0xffd9e6, 0.8);
rim.position.set(4, 2, -4);
scene.add(rim);
const fill = new THREE.DirectionalLight(0xfff1d6, 0.5);
fill.position.set(3, 1, 5);
scene.add(fill);

const bg = buildBackground();
scene.add(bg.mesh);

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

(async () => {
const mod = await SCENES[sceneName]();
const shot = mod.shots[shotName]();
scene.add(shot.group);
camera.position.copy(shot.cam.pos);
camera.lookAt(shot.cam.look);
camera.fov = shot.cam.fov;
camera.updateProjectionMatrix();

window.__art = { scene, camera, renderer, shot };

let frames = 0;
const clock = new THREE.Clock();
function tick() {
  requestAnimationFrame(tick);
  bg.update(clock.getElapsedTime() * 0.15 + 3.0, 0.15, 1);
  renderer.render(scene, camera);
  if (++frames === 12) window.__artReady = true;
}
tick();
})();
