// The gummy bear — a METABALL sculpt (marching cubes) so the whole body
// is one smooth, seamless blob the way a moulded gummy is: no visible
// joins between head, arms and legs. Reference look: glossy pink gummy
// bear, front-facing — squarish head with small ear nubs, flat face with
// tiny dented eyes and a nose/mouth mark, stubby arms hugging the sides,
// two chunky round legs pushed forward, and a flat moulded back.
//
// Built once at boot (~150 ms at res 96), then treated like any static
// geometry. Height normalized to LEN so the stage's choreography numbers
// keep their units.

import * as THREE from 'three';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

export const LEN = 3.0;

/** local point on the right paw — the sugar trail streams from here */
export const PAW = new THREE.Vector3();
/** local anchor for the heart the bear hugs (center of the belly, in front) */
export const HEART = new THREE.Vector3();
/** model-unit → local-unit factor, so the heart can be sized relative to the bear */
export let MODEL_SCALE = 1;

// ---- model space: feet at y≈0, ear tops at y≈2.05, front is +z ----
const RAW_PAW = new THREE.Vector3(0.42, 0.78, 0.7);
const RAW_HEART = new THREE.Vector3(0, 0.8, 0.52);
const BACK_Z = -0.3;          // flat-back plane
const FRONT_MIN = 0.12;       // only front-facing verts get face dents

// model → metaball unit cube
const K = 0.32;               // model units → [0,1] grid units
const OX = 0.5, OY = 0.15, OZ = 0.5;

const RES = 96;
const SUBTRACT = 260;         // blend halo ≈ 1.15× radius: seams melt, limbs stay readable
const ISO = 80;

// [x, y, z, radius] in model units — mirrored entries get both sides
const BALLS = [
  // head: one big round ball — wider than the body (cute proportions)
  [0, 1.52, 0, 0.56],
  // cheeks: a little fullness low on the face
  [0.22, 1.36, 0.1, 0.3, 'm'],
  // ears: round, big-ish, sitting high on the head
  [0.44, 1.96, -0.04, 0.2, 'm'],
  // muzzle: a small soft bump low on the face
  [0, 1.32, 0.3, 0.19],
  // neck / chest — narrow so the head reads big
  [0, 1.1, 0, 0.32],
  [0.16, 0.98, 0, 0.34, 'm'],
  // belly — widest point
  [0, 0.75, 0.05, 0.48],
  [0.2, 0.7, 0, 0.4, 'm'],
  // hips
  [0, 0.5, 0.05, 0.4],
  // arms: a chain of near-equal, closely spaced balls → one smooth tube
  // (no "biceps" lumps), curving forward to cradle the heart
  [0.46, 0.98, 0.06, 0.2, 'm'],
  [0.53, 0.92, 0.18, 0.19, 'm'],
  [0.55, 0.86, 0.32, 0.19, 'm'],
  [0.5, 0.81, 0.46, 0.19, 'm'],
  [0.42, 0.78, 0.58, 0.19, 'm'],
  // legs: sitting — two chunky lobes pushed well forward, soles to camera
  [0.3, 0.34, 0.26, 0.3, 'm'],
  [0.34, 0.27, 0.52, 0.25, 'm'],
];

function falloff(d, r) {
  const t = THREE.MathUtils.clamp(1 - d / r, 0, 1);
  return t * t * (3 - 2 * t);
}

function addBalls(mc) {
  const strengthFor = (r) => (r * K) ** 2 * (SUBTRACT + ISO);
  for (const [x, y, z, r, m] of BALLS) {
    const s = strengthFor(r);
    mc.addBall(OX + x * K, OY + y * K, OZ + z * K, s, SUBTRACT);
    if (m) mc.addBall(OX - x * K, OY + y * K, OZ + z * K, s, SUBTRACT);
  }
}

/** flat back + embossed face (eyes, nose/mouth) — in model units.
 *  `smile` 0..1 widens and curves the mouth (used as a morph target). */
function sculpt(pos, smile = 0) {
  // cute: eyes wide apart at mid-head height, nose + smile low on the muzzle
  const eyeL = [-0.22, 1.52];
  const eyeR = [0.22, 1.52];
  const nose = [0, 1.36];
  const mouth = [0, 1.26];
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    let z = pos.getZ(i);

    // flat back: everything behind the mould plane collapses onto it
    if (z < BACK_Z) z = BACK_Z + (z - BACK_Z) * 0.06;

    if (z > FRONT_MIN) {
      z -= 0.04 * falloff(Math.hypot(x - eyeL[0], y - eyeL[1]), 0.065);
      z -= 0.04 * falloff(Math.hypot(x - eyeR[0], y - eyeR[1]), 0.065);
      // nose: small oval
      z -= 0.028 * falloff(Math.hypot((x - nose[0]) / 1.4, y - nose[1]), 0.05);
      // mouth: shallow arc at rest → wide, deep, upturned smile at smile=1
      const mw = 0.14 + 0.09 * smile;
      const mx = (x - mouth[0]) / mw;
      const curve = 0.035 + 0.075 * smile;
      const my = (y - mouth[1] - curve * (1 - mx * mx)) / (0.035 + 0.015 * smile);
      z -= (0.022 + 0.022 * smile) * falloff(Math.hypot(mx, my), 1);
      // happy eyes: the dents narrow into little arcs as the smile grows
      if (smile > 0) {
        const squint = (ex) => 0.03 * smile * falloff(Math.hypot((x - ex) / 1.6, y - 1.5), 0.075);
        z += squint(-0.22) + squint(0.22);
      }
    }
    pos.setXYZ(i, x, y, z);
  }
}

export function buildBearGeometry() {
  const mc = new MarchingCubes(RES, new THREE.MeshBasicMaterial(), false, false, 160000);
  mc.isolation = ISO;
  mc.reset();
  addBalls(mc);
  mc.update();

  // marching-cubes output is in [-1, 1]; bring it back to model units
  const n = mc.count;
  const src = mc.positionArray;
  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    out[i * 3] = src[i * 3] / (2 * K);
    out[i * 3 + 1] = (src[i * 3 + 1] + 1 - 2 * OY) / (2 * K);
    out[i * 3 + 2] = src[i * 3 + 2] / (2 * K);
  }
  let geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(out, 3));
  geo = BufferGeometryUtils.mergeVertices(geo, 1e-4);

  // smile morph target: same vertices, sculpted with smile=1
  const smileAttr = geo.attributes.position.clone();
  sculpt(smileAttr, 1);
  sculpt(geo.attributes.position, 0);
  geo.computeVertexNormals();

  geo.computeBoundingBox();
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();
  geo.boundingBox.getCenter(center);
  geo.boundingBox.getSize(size);
  geo.translate(-center.x, -center.y, -center.z);
  const s = LEN / size.y;
  geo.scale(s, s, s);
  for (let i = 0; i < smileAttr.count; i++) {
    smileAttr.setXYZ(i,
      (smileAttr.getX(i) - center.x) * s,
      (smileAttr.getY(i) - center.y) * s,
      (smileAttr.getZ(i) - center.z) * s);
  }
  geo.morphAttributes.position = [smileAttr];

  PAW.copy(RAW_PAW).sub(center).multiplyScalar(s);
  HEART.copy(RAW_HEART).sub(center).multiplyScalar(s);
  MODEL_SCALE = s;
  return geo;
}
