// Case art — "เมนูลับที่ไม่ได้ลับ" (coffee chain, secret menu).
// Motif: a puffy pink door (the "secret") and a domed take-away cup with
// jelly cubes (the menu item). Six shots, one per media slot on the page.
// Each shot returns { group, cam: { pos, look, fov } }.

import * as THREE from 'three';
import { C, cup, door, cube, blob, floor, shadow } from './parts.js';

const v = (x, y, z) => new THREE.Vector3(x, y, z);

function scatterCubes(g, list) {
  for (const [x, z, s, rot, col] of list) {
    const c = cube(s, col);
    c.position.set(x, s / 2 - 0.02, z);
    c.rotation.set(0, rot, 0);
    g.add(c);
    const sh = shadow(s * 1.1, 0.22);
    sh.position.set(x, 0.006, z);
    g.add(sh);
  }
}

export const shots = {
  /** 16:9 header — the reference composition: cup front-right, door ajar behind-left */
  cover() {
    const g = new THREE.Group();
    g.add(floor());
    const d = door({ open: 0.75 });
    d.position.set(-2.1, 0, -1.4);
    d.rotation.y = 0.28;
    g.add(d);
    const ds = shadow(2.2, 0.22); ds.position.set(-2.1, 0.006, -1.2); ds.scale.set(1, 0.55, 1); g.add(ds);
    const cp = cup();
    cp.position.set(1.0, 0, 0.5);
    cp.rotation.y = -0.2;
    g.add(cp);
    const cs = shadow(1.25, 0.3); cs.position.set(1.0, 0.006, 0.5); g.add(cs);
    scatterCubes(g, [[-0.9, 1.4, 0.36, 0.4, [C.lime, C.limeDeep]], [3.1, 0.2, 0.42, 1.1, [C.peach, C.peachDeep]], [2.6, -0.9, 0.3, 0.2, [C.lime, C.limeDeep]]]);
    const b = blob(0.55, [C.lime, C.limeDeep]); b.position.set(3.4, 0.3, -1.6); g.add(b);
    return { group: g, cam: { pos: v(0.3, 1.9, 7.2), look: v(-0.1, 1.15, 0), fov: 30 } };
  },

  /** 4:3 — the closed door, dead center: "the secret" */
  'media-1'() {
    const g = new THREE.Group();
    g.add(floor());
    const d = door({ open: 0 });
    g.add(d);
    const ds = shadow(2.0, 0.22); ds.position.set(0, 0.006, 0.25); ds.scale.set(1, 0.5, 1); g.add(ds);
    scatterCubes(g, [[-2.0, 1.2, 0.34, 0.3, [C.lime, C.limeDeep]], [1.9, 0.9, 0.3, 1.2, [C.lemon, C.lemonDeep]]]);
    const b = blob(0.6, [C.peach, C.peachDeep]); b.position.set(2.6, 0.3, -1.8); g.add(b);
    return { group: g, cam: { pos: v(0.6, 1.9, 6.4), look: v(0, 1.25, 0), fov: 30 } };
  },

  /** 3:4 — the cup, portrait, close */
  'media-2'() {
    const g = new THREE.Group();
    g.add(floor());
    const cp = cup();
    cp.rotation.y = -0.15;
    g.add(cp);
    const cs = shadow(1.3, 0.3); g.add(cs);
    scatterCubes(g, [[-1.1, 0.9, 0.36, 0.5, [C.pink, C.pinkDeep]], [1.15, 0.6, 0.3, 1.0, [C.lime, C.limeDeep]]]);
    const d = door({ open: 0.5 }); d.position.set(-2.4, 0, -2.6); d.rotation.y = 0.35; g.add(d);
    return { group: g, cam: { pos: v(0.4, 2.0, 5.6), look: v(0, 1.35, 0), fov: 32 } };
  },

  /** 21:9 — the menu that isn't secret: three cups in three flavors on the counter */
  wide() {
    const g = new THREE.Group();
    g.add(floor({ w: 20, d: 10 }));
    const flavors = [
      { drink: [C.lime, C.limeDeep], lid: C.pinkDeep, cubeColor: [C.pink, C.pinkDeep] },
      { drink: [C.peach, C.peachDeep], lid: C.skyDeep, cubeColor: [C.sky, C.skyDeep] },
      { drink: [C.grape, C.grapeDeep], lid: C.lemonDeep, cubeColor: [C.lemon, C.lemonDeep] },
    ];
    flavors.forEach((f, i) => {
      const cp = cup(f);
      cp.position.set(-2.4 + i * 2.4, 0, i === 1 ? -0.3 : 0.2);
      cp.rotation.y = -0.3 + i * 0.25;
      g.add(cp);
      const cs = shadow(1.25, 0.3); cs.position.set(cp.position.x, 0.006, cp.position.z); g.add(cs);
    });
    const d = door({ open: 0.9 }); d.position.set(-6.2, 0, -2.4); d.rotation.y = 0.5; g.add(d);
    scatterCubes(g, [[4.6, 0.9, 0.36, 0.6, [C.lime, C.limeDeep]], [-4.6, 1.1, 0.3, 0.2, [C.pink, C.pinkDeep]]]);
    const b = blob(0.7, [C.lemon, C.lemonDeep]); b.position.set(6.4, 0.35, -1.6); g.add(b);
    return { group: g, cam: { pos: v(0.2, 2.2, 9.4), look: v(0, 1.2, 0), fov: 30 } };
  },

  /** 4:3 — jelly cubes and a straw on the counter: the ingredient nobody hid */
  'media-3'() {
    const g = new THREE.Group();
    g.add(floor());
    scatterCubes(g, [
      [0, 0, 0.5, 0.3, [C.pink, C.pinkDeep]], [0.62, 0.35, 0.44, 1.0, [C.pink, C.pinkDeep]],
      [-0.6, 0.4, 0.4, 0.7, [C.lime, C.limeDeep]], [0.25, -0.55, 0.42, 1.4, [C.pink, C.pinkDeep]],
      [-0.35, -0.5, 0.36, 0.1, [C.peach, C.peachDeep]], [1.25, -0.2, 0.34, 0.9, [C.lime, C.limeDeep]],
    ]);
    // one stacked on top
    const top = cube(0.4, [C.pink, C.pinkDeep]); top.position.set(0.05, 0.5 + 0.2, 0.02); top.rotation.set(0.1, 0.9, 0.05); g.add(top);
    // a straw lying across
    const path = new THREE.CatmullRomCurve3([v(-1.9, 0.08, 1.1), v(-0.6, 0.08, 0.95), v(0.2, 0.08, 0.95), v(0.55, 0.14, 1.15), v(0.9, 0.3, 1.5)]);
    const straw = new THREE.Mesh(new THREE.TubeGeometry(path, 48, 0.075, 24, false), cube(0.1, [C.lime, C.limeDeep]).material);
    g.add(straw);
    const cp = cup(); cp.position.set(2.2, 0, -1.3); cp.rotation.y = -0.4; g.add(cp);
    const cs = shadow(1.25, 0.3); cs.position.set(2.2, 0.006, -1.3); g.add(cs);
    return { group: g, cam: { pos: v(0.3, 1.9, 4.4), look: v(0.1, 0.35, 0), fov: 32 } };
  },

  /** 3:4 — the door swung open, the cup waiting inside the glow */
  'media-4'() {
    const g = new THREE.Group();
    g.add(floor());
    const d = door({ open: 1.25 });
    g.add(d);
    const ds = shadow(2.0, 0.22); ds.position.set(0, 0.006, 0.3); ds.scale.set(1, 0.5, 1); g.add(ds);
    const cp = cup({ cubes: 2 });
    cp.scale.setScalar(0.62);
    cp.position.set(0.15, 0, -0.6);
    cp.rotation.y = -0.2;
    g.add(cp);
    const cs = shadow(0.85, 0.3); cs.position.set(0.15, 0.006, -0.6); g.add(cs);
    scatterCubes(g, [[-1.6, 1.3, 0.34, 0.3, [C.lime, C.limeDeep]], [1.7, 1.0, 0.3, 1.2, [C.pink, C.pinkDeep]]]);
    return { group: g, cam: { pos: v(0.9, 1.8, 6.0), look: v(0, 1.25, 0), fov: 31 } };
  },
};
