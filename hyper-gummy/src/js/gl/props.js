// Props: a scatter of gummy candies drifting around the bear at varying
// depths — mini bears, puffy hearts, cola bottles, citrus segments and a
// sour belt — each in its own flavor. Slow independent spin + bob; the
// whole cloud parallaxes with the pointer (handled by the stage).

import * as THREE from 'three';
import { FLAVORS, gummyMaterial } from './flavors.js';
import { heartGeometry, bottleGeometry, segmentGeometry, beltGeometry } from './candies.js';

const BEAR = 0, HEART = 1, BOTTLE = 2, SEGMENT = 3, BELT = 4;

// [angle, radius, depth z, scale, spin, kind, flavor index]
const PLACEMENTS = [
  // two candies live in the lane between the headline and the bear
  [2.0, 1.45, -0.9, 0.36, 0.05, HEART, 0],
  [1.45, 3.0, -2.2, 0.44, -0.04, SEGMENT, 1],
  [2.55, 2.1, -0.9, 0.3, 0.06, BOTTLE, 0],
  [3.75, 2.6, -1.8, 0.4, -0.05, BEAR, 5],
  [4.85, 3.2, -2.6, 0.5, 0.03, BELT, 0],
  [4.3, 1.3, -0.7, 0.3, -0.07, SEGMENT, 5],
  [0.95, 1.8, -0.5, 0.22, 0.08, HEART, 4],
  [2.15, 2.9, -1.6, 0.34, -0.06, BEAR, 2],
  [4.3, 1.9, -0.8, 0.26, 0.07, BOTTLE, 0],
  [5.3, 2.7, -2.0, 0.34, -0.03, HEART, 1],
];

export function buildProps(bearGeo) {
  const group = new THREE.Group();
  const items = [];

  const geos = {
    [BEAR]: bearGeo,
    [HEART]: heartGeometry(),
    [BOTTLE]: bottleGeometry(),
    [SEGMENT]: segmentGeometry(),
    [BELT]: beltGeometry(),
  };

  const mats = FLAVORS.map((f) => gummyMaterial(f, { thickness: 0.6, attenuationDistance: 0.9 }));
  // cola bottle: vertex-colored, a little darker/denser
  const colaMat = gummyMaterial(FLAVORS[1], {
    vertexColors: true,
    color: new THREE.Color('#ffffff'),
    attenuationColor: new THREE.Color('#8A2A16'),
    thickness: 0.8,
    attenuationDistance: 0.8,
  });
  // sour belt: sugar-coated — matte, barely translucent
  const sugarMat = new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    color: new THREE.Color('#ffffff'),
    roughness: 0.85,
    metalness: 0,
    transmission: 0.15,
    thickness: 0.3,
    clearcoat: 0,
    sheen: 0.8,
    sheenRoughness: 0.9,
    sheenColor: new THREE.Color('#ffffff'),
    side: THREE.DoubleSide,
  });

  PLACEMENTS.forEach(([a, r, z, s, spin, kind, flavor], i) => {
    const mat = kind === BOTTLE ? colaMat : kind === BELT ? sugarMat : mats[flavor % mats.length];
    const m = new THREE.Mesh(geos[kind], mat);
    m.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.65, z);
    m.scale.setScalar(s * (kind === BEAR ? 0.5 : 1));
    m.rotation.set(Math.sin(i * 2.1) * 0.5, Math.cos(i * 1.3) * 0.5, i * 0.9);
    group.add(m);
    items.push({ mesh: m, spin, axis: i % 3, phase: i * 1.7, baseY: m.position.y });
  });

  return {
    group,
    /** slow independent drift + bob; t in seconds */
    update(t) {
      for (const it of items) {
        const r = it.mesh.rotation;
        if (it.axis === 0) r.x += it.spin * 0.016;
        else if (it.axis === 1) r.y += it.spin * 0.016;
        else r.z += it.spin * 0.016;
        it.mesh.position.y = it.baseY + Math.sin(t * 0.6 + it.phase) * 0.08;
      }
    },
  };
}
