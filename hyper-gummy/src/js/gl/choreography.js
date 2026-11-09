// Scroll choreography: scroll progress → pose keyframes per page,
// stored as plain arrays and lerped — never hardcoded in the render loop.
// Personality: the bear TUMBLES — as the user scrolls it rolls across the
// page like a gummy tipped out of the jar, always landing face-forward.

import * as THREE from 'three';

// keyframe: { at: scroll progress 0..1, pos:[x,y,z], rot:[x,y,z], scale }
const REST_ROT = [0.06, -0.32, -0.12];   // three-quarter view, slight head tilt

const KEYFRAMES = {
  home: [
    // x 1.15: the bear's shoulder overlaps the headline's long lines → interleave
    { at: 0.0,  pos: [1.45, -0.1, 0],     rot: REST_ROT,              scale: 0.88 },
    // tips over and rolls left
    { at: 0.3,  pos: [-1.2, 0.35, -0.5],  rot: [0.25, 0.7, 0.55],     scale: 0.82 },
    // rolls back through the middle
    { at: 0.55, pos: [0.1, 0.1, -0.6],    rot: [-0.1, -0.6, -0.45],   scale: 0.78 },
    { at: 0.78, pos: [1.2, 0.35, -0.6],   rot: [0.15, 0.9, 0.35],     scale: 0.74 },
    // manifesto: settles small and distant, peeking
    { at: 1.0,  pos: [-0.6, 0.2, -1.6],   rot: [0.1, 0.4, -0.2],      scale: 0.62 },
  ],
  work: [
    { at: 0.0, pos: [-1.25, 0.45, -0.9],  rot: [0.1, 0.5, -0.25],     scale: 0.7 },
    { at: 0.5, pos: [-0.1, 0.15, -1.0],   rot: [-0.05, -0.4, 0.3],    scale: 0.62 },
    { at: 1.0, pos: [1.05, 0.4, -1.3],    rot: [0.2, 0.8, -0.3],      scale: 0.58 },
  ],
  craft: [
    { at: 0.0, pos: [1.25, 0.3, -0.7],    rot: [0.05, -0.5, 0.2],     scale: 0.75 },
    { at: 0.5, pos: [1.0, 0.05, -0.9],    rot: [0.2, 0.3, -0.35],     scale: 0.68 },
    { at: 1.0, pos: [0.7, 0.3, -1.4],     rot: [-0.1, 0.9, 0.25],     scale: 0.6 },
  ],
  // about: the bear never leaves — it stays center-right the whole story
  // and only gets "small adjustments" (color, held item, smile, friends)
  about: [
    { at: 0.0, pos: [1.0, -0.15, -0.2],   rot: [0.05, -0.25, -0.06],  scale: 0.9 },
    { at: 0.6, pos: [1.0, -0.1, -0.2],    rot: [0.05, -0.1, 0.04],    scale: 0.92 },
    { at: 0.8, pos: [0.9, -0.05, 0.1],    rot: [0.0, 0.0, 0.0],       scale: 1.0 },
    { at: 1.0, pos: [0.7, -0.2, -0.6],    rot: [0.05, -0.2, -0.05],   scale: 0.8 },
  ],
  // case page: shows the case's candy in the header, hops OFF-screen right
  // while the reader is in the content, and comes back bottom-left for
  // the "next case" footer
  case: [
    { at: 0.0,  pos: [1.75, -0.2, -0.3],  rot: [0.05, -0.3, -0.1],    scale: 0.7 }, // clear of long titles
    { at: 0.12, pos: [5.4, 0.5, -0.6],    rot: [0.1, -0.8, 0.4],      scale: 0.7 },
    { at: 0.85, pos: [5.4, 0.5, -0.6],    rot: [0.1, -0.8, 0.4],      scale: 0.7 },
    { at: 1.0,  pos: [1.4, 0.25, -0.9],   rot: [0.05, -0.35, -0.1],   scale: 0.6 },
  ],
  contact: [
    { at: 0.0, pos: [1.1, 0.05, -0.5],    rot: REST_ROT,              scale: 0.85 },
    { at: 1.0, pos: [0.6, 0.4, -1.0],     rot: [0.2, -0.6, 0.3],      scale: 0.7 },
  ],
};

const _pos = new THREE.Vector3();
const _rot = new THREE.Vector3();
const _pos2 = new THREE.Vector3();
const _rot2 = new THREE.Vector3();

function smootherstep(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/**
 * Resolve the pose for (page, scroll progress) into out {pos, rot, scale}.
 * Pure keyframe lookup + lerp — reversible by construction.
 */
export function resolvePose(page, progress, out) {
  const kfs = KEYFRAMES[page] || KEYFRAMES.home;
  const p = THREE.MathUtils.clamp(progress, 0, 1);

  let a = kfs[0];
  let b = kfs[kfs.length - 1];
  for (let i = 0; i < kfs.length - 1; i++) {
    if (p >= kfs[i].at && p <= kfs[i + 1].at) {
      a = kfs[i];
      b = kfs[i + 1];
      break;
    }
  }
  const span = Math.max(1e-5, b.at - a.at);
  const t = smootherstep(THREE.MathUtils.clamp((p - a.at) / span, 0, 1));

  _pos.fromArray(a.pos).lerp(_pos2.fromArray(b.pos), t);
  _rot.fromArray(a.rot).lerp(_rot2.fromArray(b.rot), t);

  out.pos.copy(_pos);
  out.rot.set(_rot.x, _rot.y, _rot.z);
  out.scale = THREE.MathUtils.lerp(a.scale, b.scale, t);
}
