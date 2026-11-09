// What the bear hugs — a set of simple, cute, puffy shapes that take any
// color: heart, star, bow, cup (with straw), ice-cream cone, donut.
// Each is built once from basic geometry; `buildHeld(kind, color)` returns
// a Group sized/rotated to sit in the bear's arms. Meshes flagged
// `tint` take the case color; the rest (straw, cone) keep fixed colors.

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { gummyMaterial } from './flavors.js';
import { heartGeometry } from './candies.js';

const cache = {};

function normalize(geo, height = 1.5) {
  geo.computeBoundingBox();
  const size = new THREE.Vector3();
  geo.boundingBox.getSize(size);
  geo.center();
  const s = height / size.y;
  geo.scale(s, s, s);
  return geo;
}
function smooth(geo) {
  geo.deleteAttribute('uv');
  const g = BufferGeometryUtils.mergeVertices(geo, 1e-4);
  g.computeVertexNormals();
  return g;
}
function place(geo, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
  geo.scale(sx, sy, sz); geo.rotateX(rx); geo.rotateY(ry); geo.rotateZ(rz); geo.translate(x, y, z);
  return geo;
}
const puff = (shape, depth = 0.5, bevel = 0.4) => smooth(new THREE.ExtrudeGeometry(shape, {
  depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: 12, curveSegments: 24,
}));

// ---- geometries (built lazily, cached) ----
const GEO = {
  heart: () => heartGeometry(),
  star: () => {
    const s = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 0.5 : 1;
      const a = Math.PI / 2 + (i * Math.PI) / 5;
      i ? s.lineTo(Math.cos(a) * r, Math.sin(a) * r) : s.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    s.closePath();
    return normalize(puff(s, 0.35, 0.3), 1.5);
  },
  bow: () => {
    const S = (r) => new THREE.SphereGeometry(r, 40, 28);
    const C = (r, l) => new THREE.CapsuleGeometry(r, l, 10, 28);
    const parts = [
      place(S(1), -0.52, 0.06, 0, 0.55, 0.34, 0.24, 0, 0, 0.12),   // left loop
      place(S(1), 0.52, 0.06, 0, 0.55, 0.34, 0.24, 0, 0, -0.12),   // right loop
      place(S(0.2), 0, 0, 0.06),                                   // knot
      place(C(0.12, 0.4), -0.26, -0.4, 0, 1, 1, 1, 0, 0, 0.55),    // tails
      place(C(0.12, 0.4), 0.26, -0.4, 0, 1, 1, 1, 0, 0, -0.55),
    ];
    return normalize(smooth(BufferGeometryUtils.mergeGeometries(parts, false)), 1.2);
  },
  donut: () => normalize(smooth(new THREE.TorusGeometry(0.5, 0.25, 32, 64)), 1.3),
  // the chunky take-away cup from the secret-menu case: fat lip, dome lid,
  // bendy straw — one merged gummy so it tints like the other held things
  cupBody: () => {
    const prof = [
      [0, 0], [0.5, 0], [0.58, 0.03], [0.62, 0.1], [0.7, 0.9], [0.78, 1.6], [0.84, 1.68], [0.86, 1.76],
      [0.82, 1.84], [0.74, 1.86], [0.68, 1.8], [0.64, 1.7], [0.56, 0.95], [0.5, 0.2], [0.42, 0.14], [0, 0.14],
    ].map(([r, h]) => new THREE.Vector2(r, h));
    const body = new THREE.LatheGeometry(prof, 48);
    const rim = place(new THREE.TorusGeometry(0.88, 0.11, 16, 64), 0, 1.84, 0, 1, 1, 1, Math.PI / 2);
    const dome = place(new THREE.SphereGeometry(0.86, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2), 0, 1.86, 0, 1, 0.8, 1);
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.22, 1.7, 0.05), new THREE.Vector3(0.24, 2.3, 0.05), new THREE.Vector3(0.3, 2.62, 0.05),
      new THREE.Vector3(0.5, 2.8, 0.05), new THREE.Vector3(0.82, 2.78, 0.05),
    ]);
    const straw = new THREE.TubeGeometry(path, 32, 0.1, 16, false);
    const cap = place(new THREE.SphereGeometry(0.1, 16, 12), 0.82, 2.78, 0.05);
    const merged = BufferGeometryUtils.mergeGeometries(
      [body, rim, dome, straw, cap].map((g) => { g.deleteAttribute('uv'); return g; }), false);
    return normalize(smooth(merged), 1.5);
  },
  straw: () => new THREE.CapsuleGeometry(0.05, 1.2, 6, 16),
  scoop: () => new THREE.SphereGeometry(0.42, 40, 28),
  cone: () => smooth(new THREE.ConeGeometry(0.4, 0.95, 40)),
};
const geo = (k) => (cache[k] ??= GEO[k]());

// ---- kinds: parts, scale (× MODEL_SCALE), rotation in the bear's arms ----
const KINDS = {
  heart:    { s: 0.56, rot: [0.12, 0, -0.12], parts: [{ g: 'heart', tint: true }] },
  star:     { s: 0.55, rot: [0.1, 0, 0.2],   parts: [{ g: 'star', tint: true }] },
  bow:      { s: 0.52, rot: [0.15, 0, -0.1], parts: [{ g: 'bow', tint: true }] },
  donut:    { s: 0.55, rot: [0.5, 0, 0.2],   parts: [{ g: 'donut', tint: true }] },
  cup:      { s: 0.5, rot: [0.1, 0.3, -0.15], parts: [{ g: 'cupBody', tint: true }] },
  icecream: { s: 0.55, rot: [0.1, 0.2, -0.2], parts: [
    { g: 'cone', color: '#E9B97C', pos: [0, -0.55, 0], rot: [Math.PI, 0, 0] },
    { g: 'scoop', tint: true, pos: [0, 0.05, 0] },
    { g: 'scoop', tint: true, pos: [0.06, 0.55, 0.06], scale: 0.8 },
  ] },
};

export const HELD_KINDS = Object.keys(KINDS);

/** material for a tint color: lighter face, deeper attenuation */
function tintMaterial(hex) {
  const c = new THREE.Color(hex);
  const light = c.clone().lerp(new THREE.Color('#ffffff'), 0.3);
  const deep = c.clone().lerp(new THREE.Color('#000000'), 0.25);
  return gummyMaterial({ color: '#' + light.getHexString(), attenuation: '#' + deep.getHexString() }, {
    thickness: 1.0, attenuationDistance: 0.9,
  });
}

/** build (or rebuild) a held-shape group. Returns { group, s, rot } */
export function buildHeld(kind, colorHex = '#FF3D8F') {
  const def = KINDS[kind] || KINDS.heart;
  const group = new THREE.Group();
  const tintMat = tintMaterial(colorHex);
  for (const p of def.parts) {
    const mat = p.tint ? tintMat : gummyMaterial({ color: p.color, attenuation: p.color }, { transmission: 0.4, thickness: 0.5 });
    const m = new THREE.Mesh(geo(p.g), mat);
    if (p.pos) m.position.fromArray(p.pos);
    if (p.rot) m.rotation.fromArray(p.rot);
    if (p.scale) m.scale.setScalar(p.scale);
    group.add(m);
  }
  return { group, s: def.s, rot: def.rot };
}
