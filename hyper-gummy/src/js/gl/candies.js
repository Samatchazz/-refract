// Procedural gummy candies for the prop cloud, per the reference sheet:
// puffy heart, cola bottle (amber → red), citrus segment, and a
// sugar-coated sour belt in three stripes. Each geometry is centered and
// normalized to ~1.6 units tall so the placement scales in props.js stay
// comparable. Mini bears reuse the metaball bear.

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

function normalize(geo, height = 1.6) {
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

/** puffy gummy heart — extruded heart outline with a fat bevel */
export function heartGeometry() {
  const s = new THREE.Shape();
  const x = -8, y = -9.5;
  s.moveTo(x + 5, y + 5);
  s.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  s.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  s.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
  s.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
  s.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
  s.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

  let geo = new THREE.ExtrudeGeometry(s, {
    depth: 1.2,
    bevelEnabled: true,
    bevelThickness: 4.2,
    bevelSize: 3.0,
    bevelSegments: 28,   // dense bevel → no visible rings on close-ups
    curveSegments: 56,
  });
  geo.rotateZ(Math.PI);
  geo = smooth(geo);
  return normalize(geo, 1.5);
}

/** cola-bottle gummy — lathe silhouette, flattened front-to-back,
 *  vertex-colored amber (cap) → deep red (base) */
export function bottleGeometry() {
  const profile = [
    [0, 0], [0.3, 0], [0.36, 0.06], [0.37, 0.62], [0.33, 0.9],
    [0.25, 1.05], [0.25, 1.32], [0.23, 1.46], [0.27, 1.5], [0.27, 1.66],
    [0.2, 1.7], [0, 1.7],
  ].map(([r, h]) => new THREE.Vector2(r, h));
  let geo = new THREE.LatheGeometry(profile, 40);
  geo.scale(1, 1, 0.55);
  geo = smooth(geo);

  // gradient: red bottom → amber top
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const red = new THREE.Color('#D93A2B');
  const amber = new THREE.Color('#F2B544');
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const t = THREE.MathUtils.smoothstep(pos.getY(i), 0.55, 1.15);
    c.copy(red).lerp(amber, t);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return normalize(geo, 1.7);
}

/** citrus segment — half disc with a fat bevel and soft radial grooves */
export function segmentGeometry() {
  const R = 0.8;
  const s = new THREE.Shape();
  s.moveTo(-R, 0);
  s.absarc(0, 0, R, Math.PI, 0, true);
  s.lineTo(-R, 0);
  let geo = new THREE.ExtrudeGeometry(s, {
    depth: 0.22,
    bevelEnabled: true,
    bevelThickness: 0.16,
    bevelSize: 0.14,
    bevelSegments: 8,
    curveSegments: 40,
  });
  geo = smooth(geo);

  // radial grooves on both faces — the "segment" cue
  const pos = geo.attributes.position;
  const zMid = 0.11;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const face = Math.abs(z - zMid) > 0.14 ? Math.sign(z - zMid) : 0;
    if (!face) continue;
    const a = Math.atan2(y, x);
    const r = Math.hypot(x, y);
    const groove = Math.pow(Math.max(0, Math.cos(a * 7)), 12) * 0.03 * THREE.MathUtils.smoothstep(r, 0.15, 0.4) * (1 - THREE.MathUtils.smoothstep(r, 0.6, 0.78));
    pos.setZ(i, z - face * groove);
  }
  geo.computeVertexNormals();
  return normalize(geo, 1.0);
}

/** sour belt — a long wavy, twisted strip with three vertex-color stripes */
export function beltGeometry() {
  let geo = new THREE.BoxGeometry(3.4, 0.07, 0.55, 90, 1, 8);
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  const stripes = [new THREE.Color('#FF4D9D'), new THREE.Color('#FFD84D'), new THREE.Color('#9B4DFF')];
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.set(pos.getX(i), pos.getY(i), pos.getZ(i));
    const stripe = v.z < -0.09 ? 0 : v.z > 0.09 ? 2 : 1;
    // twist along the length, then a lazy wave
    const tw = v.x * 0.55;
    const y = v.y * Math.cos(tw) - v.z * Math.sin(tw);
    const z = v.y * Math.sin(tw) + v.z * Math.cos(tw);
    v.y = y + Math.sin(v.x * 1.9) * 0.28;
    v.z = z;
    pos.setXYZ(i, v.x, v.y, v.z);
    const c = stripes[stripe];
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.computeVertexNormals();
  geo.center();
  return geo;
}
