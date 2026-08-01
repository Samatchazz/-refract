// Props (brief §1): 6–10 loose paper sheets and small ink drops drifting
// around the nib at varying depths. Paper = thin double-sided planes with
// a slight bend; drops = smooth spheres on the glossy matcap. Each prop
// rotates slowly and independently; the whole cloud parallaxes with the
// pointer (depth-weighted, handled by the stage).

import * as THREE from 'three';

function bentPaperGeometry() {
  const g = new THREE.PlaneGeometry(0.78, 1.1, 8, 10);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    // gentle diagonal bend + corner curl
    const z =
      Math.sin((x / 0.78 + 0.5) * Math.PI) * 0.05 +
      Math.sin((y / 1.1) * Math.PI * 0.8 + 0.4) * 0.03;
    pos.setZ(i, z);
  }
  g.computeVertexNormals();
  return g;
}

const PLACEMENTS = [
  // [angle around nib, radius, depth z, scale, spin speed]
  [0.4, 2.3, -1.4, 1.0, 0.05],
  [1.5, 2.9, -2.2, 1.25, -0.04],
  [2.6, 2.1, -0.9, 0.8, 0.06],
  [3.8, 2.6, -1.8, 1.1, -0.05],
  [4.9, 3.2, -2.6, 1.4, 0.03],
  [5.7, 2.0, -0.6, 0.7, -0.07],
];

const DROPS = [
  [0.9, 1.7, -0.4, 0.09],
  [2.2, 2.4, -1.2, 0.055],
  [4.3, 1.9, -0.8, 0.07],
  [5.4, 2.7, -1.9, 0.11],
];

export function buildProps({ dark, inkwet }) {
  const group = new THREE.Group();
  const items = [];

  const paperGeo = bentPaperGeometry();
  const paperMat = new THREE.MeshMatcapMaterial({
    matcap: dark,
    color: 0xd9d4c6, // aged-paper tint over the graphite capture
    side: THREE.DoubleSide,
  });

  PLACEMENTS.forEach(([a, r, z, s, spin], i) => {
    const m = new THREE.Mesh(paperGeo, paperMat);
    m.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.65, z);
    m.scale.setScalar(s);
    m.rotation.set(Math.sin(i * 2.1) * 0.7, Math.cos(i * 1.3) * 0.6, i * 0.9);
    group.add(m);
    items.push({ mesh: m, spin, axis: i % 3, phase: i * 1.7 });
  });

  const dropGeo = new THREE.SphereGeometry(1, 24, 16);
  const dropMat = new THREE.MeshMatcapMaterial({ matcap: inkwet, color: 0x14141c });

  DROPS.forEach(([a, r, z, s], i) => {
    const m = new THREE.Mesh(dropGeo, dropMat);
    m.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.6, z);
    m.scale.setScalar(s);
    group.add(m);
    items.push({ mesh: m, spin: 0.02, axis: 1, phase: i * 2.3 + 1 });
  });

  return {
    group,
    /** slow independent drift; t in seconds */
    update(t) {
      for (const it of items) {
        const r = it.mesh.rotation;
        if (it.axis === 0) r.x += it.spin * 0.016;
        else if (it.axis === 1) r.y += it.spin * 0.016;
        else r.z += it.spin * 0.016;
        it.mesh.position.y += Math.sin(t * 0.4 + it.phase) * 0.0006;
      }
    },
  };
}
