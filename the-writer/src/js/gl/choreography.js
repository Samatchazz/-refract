// Scroll choreography (spec §4.2): scroll progress → pose keyframes per
// page, stored as plain arrays and lerped — NOT hardcoded in the render
// loop. Personality (brief §1): as the user scrolls, the nib tilts to a
// writing angle (~40–55°) and glides along a shallow arc, as if
// inscribing an invisible line across the section.

import * as THREE from 'three';

// keyframe: { at: scroll progress 0..1, pos:[x,y,z], rot:[x,y,z], scale }
// face turned to the camera so the slit + breather hole read; classic
// diagonal hang, tip pointing low-left
const REST_ROT = [-0.08, -0.15, -0.5];
// writing angle: nib pitched onto the page ≈ 48° with a pen-hold roll
const WRITE_ROT = [-0.95, -0.12, -0.6];

const KEYFRAMES = {
  home: [
    // x 1.18: the shoulder overlaps the headline's long lines → interleave
    { at: 0.0,  pos: [1.18, 0.05, 0],    rot: REST_ROT,            scale: 1 },
    // drop to the line, pen-down left of the section
    { at: 0.3,  pos: [-1.15, 0.42, -0.5], rot: WRITE_ROT,           scale: 0.8 },
    // shallow inscribing arc across the cases list
    { at: 0.55, pos: [0.05, 0.18, -0.55], rot: [-0.88, -0.05, -0.52], scale: 0.78 },
    { at: 0.78, pos: [1.15, 0.4, -0.6],  rot: [-0.98, -0.2, -0.66],  scale: 0.75 },
    // manifesto: settles back, small and distant
    { at: 1.0,  pos: [-0.55, 0.15, -1.6], rot: [-0.35, 0.35, -0.25], scale: 0.62 },
  ],
  work: [
    { at: 0.0, pos: [-1.25, 0.5, -0.9],  rot: [-0.5, 0.45, -0.3],   scale: 0.7 },
    { at: 0.5, pos: [-0.1, 0.2, -1.0],   rot: WRITE_ROT,            scale: 0.62 },
    { at: 1.0, pos: [1.05, 0.45, -1.3],  rot: [-1.0, -0.25, -0.7],  scale: 0.58 },
  ],
  craft: [
    { at: 0.0, pos: [1.25, 0.35, -0.7],  rot: [-0.3, -0.5, -0.45],  scale: 0.75 },
    { at: 0.5, pos: [0.3, 0.05, -0.9],   rot: WRITE_ROT,            scale: 0.68 },
    { at: 1.0, pos: [-1.0, 0.3, -1.4],   rot: [-0.6, 0.4, -0.3],    scale: 0.6 },
  ],
  about: [
    { at: 0.0, pos: [0.0, 0.55, -1.4],   rot: [-0.25, 0.1, -0.5],   scale: 0.55 },
    { at: 1.0, pos: [0.4, -0.2, -2.0],   rot: [-0.5, 0.6, -0.2],    scale: 0.48 },
  ],
  contact: [
    { at: 0.0, pos: [1.1, 0.1, -0.5],    rot: REST_ROT,             scale: 0.85 },
    { at: 1.0, pos: [0.6, 0.45, -1.0],   rot: [-1.05, -0.2, -0.72], scale: 0.7 },
  ],
};

const _pos = new THREE.Vector3();
const _rot = new THREE.Vector3();

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

const _pos2 = new THREE.Vector3();
const _rot2 = new THREE.Vector3();
