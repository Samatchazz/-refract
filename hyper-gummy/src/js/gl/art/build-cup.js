// Scroll-built cup — the case page's four "events", one per chapter. Lives
// in the site's persistent GL stage (same place as the bear). apply() is
// called every frame with the current chapter (0–3), progress inside it
// (0–1), the clock and dt; it is deterministic in (ch, t) except for the
// squash spring and the POW bursts, which fire when thresholds are crossed.
//
//   0 มาเลือกส่วนผสมกัน!   empty cup pops in; six ingredients orbit it like a
//                          picker; the three chosen ones dive in (POW each),
//                          the rest drop away
//   1 ลับ! ทำได้! อร่อย!   a heavy pour — the cup squashes on impact, the
//                          level rises, the chosen bits float up and bob
//   2 พาน้องสู่โลกกว้าง     lid + straw land, the cup spins to show off, then
//                          copies itself into a crowd of cups
//   3 อย่าปล่อยให้น้องแมส   the crowd scatters; the stage hands the cup to the
//                          returning bear (handled by Stage.buildEffects)
// The whole cup wears the hero bear's strawberry gummy skin.

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { bottleGeometry, heartGeometry } from '../candies.js';
import { C, cup, solid, bearSkin } from './parts.js';

const { smoothstep, lerp, clamp } = THREE.MathUtils;
const backOut = (x, s = 1.7) => 1 + (s + 1) * Math.pow(x - 1, 3) + s * Math.pow(x - 1, 2);
const bounceOut = (x) => {
  const n = 7.5625, d = 2.75;
  if (x < 1 / d) return n * x * x;
  if (x < 2 / d) return n * (x -= 1.5 / d) * x + 0.75;
  if (x < 2.5 / d) return n * (x -= 2.25 / d) * x + 0.9375;
  return n * (x -= 2.625 / d) * x + 0.984375;
};
const seg = (p, a, b) => clamp((p - a) / (b - a), 0, 1);
const bell = (x) => Math.sin(Math.PI * clamp(x, 0, 1));

// ---- ingredient shapes (simple gummy forms, own flavors like the props) ----
// nine orbit the cup; seven are "chosen" and dive in one after another — a
// secret menu is a pile of ingredients, not a plain drink
function ingredients() {
  const mk = (geo, col, deep, o) => new THREE.Mesh(geo, solid(col, deep, o));
  const jelly = mk(new RoundedBoxGeometry(0.42, 0.42, 0.42, 4, 0.11), '#FFC2DB', '#FF5FA6');
  const ice = mk(new RoundedBoxGeometry(0.44, 0.44, 0.44, 4, 0.08), '#E6F7FF', '#7FD3FF', { roughness: 0.08, clearcoat: 1 });
  const matcha = mk(new THREE.SphereGeometry(0.26, 40, 28), C.lime, C.limeDeep, { roughness: 0.6, clearcoat: 0.2 });
  matcha.scale.set(1, 0.75, 1);
  const berry = mk(heartGeometry(), '#FF6B7A', '#E0173A');
  berry.scale.setScalar(0.3);
  const cookie = mk(new THREE.CylinderGeometry(0.24, 0.24, 0.09, 40), '#FFE3A1', '#E0A83A', { roughness: 0.5 });
  const honey = mk(new THREE.SphereGeometry(0.19, 32, 20), C.lemon, C.lemonDeep);
  honey.scale.set(0.9, 1.15, 0.9);
  const boba = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    const b = mk(new THREE.SphereGeometry(0.11, 24, 16), '#C9B3FF', '#6E3FE0');
    b.position.set(Math.cos(i * 1.7) * 0.14, (i % 2) * 0.16 - 0.08, Math.sin(i * 1.7) * 0.14);
    boba.add(b);
  }
  // packaging never goes in: these two get rejected
  const syrup = mk(bottleGeometry(), '#FFD08A', '#E88A1F');
  syrup.scale.setScalar(0.42);
  const milk = mk(new RoundedBoxGeometry(0.34, 0.5, 0.34, 4, 0.06), '#FFF6F9', '#FFC6DA');
  return [
    { m: jelly, chosen: true, pow: '#FF5FA6' },
    { m: syrup, chosen: false },
    { m: ice, chosen: true, pow: '#7FD3FF' },
    { m: berry, chosen: true, pow: '#FF3D5F' },
    { m: matcha, chosen: true, pow: '#7ED321' },
    { m: milk, chosen: false },
    { m: boba, chosen: true, pow: '#8A5CFF' },
    { m: cookie, chosen: true, pow: '#FFC21A' },
    { m: honey, chosen: true, pow: '#FFD23F' },
  ];
}
// where each chosen bit settles inside the cup (x, y, z) — a loose pile
const SLOTS = [
  [-0.2, 0.95, 0.1], [0.22, 0.9, 0.15], [0.0, 1.22, -0.15], [-0.26, 1.28, -0.08],
  [0.26, 1.3, -0.02], [0.05, 0.62, 0.2], [-0.06, 0.45, -0.2],
];

// ---- a cheap cup for the crowd (no transmission: 12 of them) ----
function miniCup() {
  const g = new THREE.Group();
  const wall = new THREE.Mesh(
    new THREE.LatheGeometry([[0, 0], [0.56, 0], [0.66, 0.9], [0.78, 1.66]].map(([r, y]) => new THREE.Vector2(r, y)), 32),
    bearSkin({ thickness: 1.0, attenuationDistance: 1.3 }),
  );
  g.add(wall);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.78, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), wall.material);
  dome.scale.set(1, 0.7, 1);
  dome.position.y = 1.7;
  g.add(dome);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.79, 0.07, 10, 40), dome.material);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 1.7;
  g.add(rim);
  const straw = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.3, 12), dome.material);
  straw.position.set(0.25, 2.5, 0);
  straw.rotation.z = -0.15;
  g.add(straw);
  return g;
}

export function buildCupRig(fx = {}) {
  const group = new THREE.Group();
  // the cup sits in its own tilt group (tipped toward the camera by the
  // stage) so the pour stream and the crowd can stay world-upright
  const tilt = new THREE.Group();
  group.add(tilt);
  const c = cup({ cubes: 0, look: 'bear' });
  const P = c.userData.parts;
  tilt.add(c);

  // the chosen ingredients also exist as smaller copies INSIDE the cup,
  // revealed one by one as their orbiting twin dives in
  const ING = ingredients();
  const chosen = ING.filter((i) => i.chosen);
  const inCup = chosen.map((it, i) => {
    const m = it.m.clone();
    m.scale.multiplyScalar(0.72);
    m.position.fromArray(SLOTS[i]);
    m.rotation.set(i * 0.7, i * 1.3, i * 0.4);
    m.userData.slotY = SLOTS[i][1];
    m.visible = false;
    c.add(m);
    return m;
  });

  // orbiting picker
  const orbit = new THREE.Group();
  ING.forEach((it, i) => {
    it.angle = (i / ING.length) * Math.PI * 2;
    it.m.scale.multiplyScalar(1.35); // readable next to the big cup
    it.m.userData.baseScale = it.m.scale.clone();
    orbit.add(it.m);
  });
  group.add(orbit);

  // pouring stream (thick, wobbly — reference: the matcha pour clip)
  const stream = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.13, 1, 24, 1, true),
    solid('#FF6FAE', '#E8247A', { roughness: 0.25, side: THREE.DoubleSide }),
  );
  stream.geometry.translate(0, -0.5, 0);
  stream.position.set(0.05, 3.2, 0);
  stream.visible = false;
  group.add(stream);

  // the crowd
  const crowd = new THREE.Group();
  const CROWD = [];
  for (let i = 0; i < 12; i++) {
    const mc = miniCup();
    const a = (i / 12) * Math.PI * 2 + 0.4;
    const r = 2.4 + (i % 3) * 0.9;
    const s = 0.45 + (i % 4) * 0.09;
    mc.position.set(Math.cos(a) * r, -0.4 + Math.sin(a * 1.7) * 1.1, -1.0 - (i % 3) * 0.9);
    mc.rotation.y = -0.4 + (i % 5) * 0.2;
    mc.scale.setScalar(0.001);
    mc.visible = false;
    crowd.add(mc);
    CROWD.push({ m: mc, s, delay: (i * 7) % 12 / 12, a, r });
  }
  crowd.position.x = 1.5; // keeps the crowd on the stage's right half, off the copy
  group.add(crowd);

  // splash: a handful of droplets thrown up when the stream hits
  const DROPS = [];
  const dropMat = solid('#FF3D8F', '#C4085C', { roughness: 0.1 });
  for (let i = 0; i < 10; i++) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.06 + (i % 3) * 0.025, 14, 10), dropMat);
    d.visible = false;
    tilt.add(d);
    DROPS.push({ m: d, p: new THREE.Vector3(), v: new THREE.Vector3(), life: 0 });
  }
  const splash = (y) => {
    DROPS.forEach((d, i) => {
      const a = (i / DROPS.length) * Math.PI * 2 + Math.random() * 0.5;
      d.p.set(Math.cos(a) * 0.15, y, Math.sin(a) * 0.15);
      d.v.set(Math.cos(a) * (1.2 + Math.random()), 2.6 + Math.random() * 1.6, Math.sin(a) * (1.2 + Math.random()));
      d.life = 0.9;
      d.m.visible = true;
    });
  };

  // squash spring on the cup (impacts kick it) + a bounce spring for the bits
  const jelly = { x: 0, v: 0 };
  const bounce = { x: 0, v: 0 };
  const kick = (v) => { jelly.v += v; bounce.v += Math.abs(v) * 0.5; };
  let prev = { ch: -1, t: 0 };
  const crossed = (ch, t, at) => prev.ch === ch && prev.t < at && t >= at;
  const powAt = (color, local) => {
    if (!fx.pow) return;
    const w = group.localToWorld(local.clone());
    fx.pow(color, w);
  };

  const state = { words: 0, cupShown: true, crowdOut: 0 };

  function apply(ch, t, time, dt = 1 / 60) {
    // springs
    jelly.v += (-70 * jelly.x - 6 * jelly.v) * dt;
    jelly.x += jelly.v * dt;
    const sq = clamp(jelly.x, -0.3, 0.3);
    bounce.v += (-90 * bounce.x - 7 * bounce.v) * dt;
    bounce.x += bounce.v * dt;
    // droplets fly, fall, vanish
    DROPS.forEach((d) => {
      if (d.life <= 0) { d.m.visible = false; return; }
      d.life -= dt;
      d.v.y -= 9.5 * dt;
      d.p.addScaledVector(d.v, dt);
      d.m.position.copy(d.p);
      d.m.scale.setScalar(Math.max(0.001, Math.min(1, d.life * 2.5)));
      if (d.p.y < 0.2) d.life = 0;
    });

    // ---------- 0: pick ingredients ----------
    const popIn = ch > 0 ? 1 : seg(t, 0, 0.14);
    const cupS = popIn < 1 ? backOut(popIn, 2.2) : 1;
    P.wall.visible = popIn > 0.001;
    P.wall.scale.setScalar(Math.max(0.001, cupS));

    const orbitOn = ch === 0;
    orbit.visible = orbitOn;
    let landed = ch > 0 ? chosen.length : 0;
    if (orbitOn) {
      const show = seg(t, 0.06, 0.22);         // picker fades in
      const spin = time * 0.5 + t * 3.0;       // keeps turning as you scroll
      const R = 2.0, Y = 1.3;
      let ci = 0;
      ING.forEach((it) => {
        const a = it.angle + spin;
        let x = Math.cos(a) * R, y = Y + Math.sin(a * 2 + it.angle) * 0.18, z = Math.sin(a) * R * 0.55;
        let s = show;
        if (it.chosen) {
          const k = ci++;
          const t0 = 0.3 + k * 0.085;                            // one every ~8% of the chapter
          const dive = seg(t, t0, t0 + 0.08);                    // fly into the cup
          if (dive > 0) {
            const e = dive < 1 ? backOut(dive, 0.6) : 1;
            x = lerp(x, 0, e); y = lerp(y, 1.05, e) + bell(dive) * 0.6; z = lerp(z, 0, e);
            s = show * (1 - smoothstep(dive, 0.85, 1));
            if (dive >= 1) landed = Math.max(landed, k + 1);
            if (crossed(ch, t, t0 + 0.08)) { powAt(it.pow, new THREE.Vector3(0, 1.5, 0.5)); kick(-1.4); }
          }
        } else {
          const drop = seg(t, 0.9, 1);          // the rejects fall away
          y -= drop * drop * 3.0;
          s = show * (1 - smoothstep(drop, 0.6, 1));
        }
        it.m.position.set(x, y, z);
        it.m.rotation.set(time * 0.6 + it.angle, time * 0.8, 0);
        it.m.scale.copy(it.m.userData.baseScale).multiplyScalar(Math.max(0.001, s));
      });
    }
    // in-cup bits: visible once landed (they sit low until the pour lifts them)
    inCup.forEach((m, i) => { m.visible = i < landed; });

    // ---------- 1: the heavy pour ----------
    const pour = ch < 1 ? 0 : ch > 1 ? 1 : seg(t, 0.05, 0.62);
    const level = smoothstep(pour, 0.0, 1);
    P.drink.scale.set(1 + sq * 0.4, Math.max(0.001, level), 1 + sq * 0.4);
    P.drink.visible = level > 0.002;
    const pourOn = ch === 1 && t > 0.02 && t < 0.66;
    stream.visible = pourOn;
    if (pourOn) {
      // hangs from a fixed height straight down into the (tilted) mouth
      const mouth = tilt.localToWorld(new THREE.Vector3(0, 1.4, 0));
      group.worldToLocal(mouth);
      const surface = mouth.y - 0.9 + level * 0.9;
      const grow = seg(t, 0.02, 0.09) * (1 - seg(t, 0.6, 0.66));
      stream.position.set(mouth.x + 0.05 + Math.sin(time * 9) * 0.02, 3.2, mouth.z);
      stream.scale.set(1 + Math.sin(time * 11) * 0.08, Math.max(0.05, 3.2 - surface) * grow, 1);
      if (crossed(ch, t, 0.09)) { kick(-2.4); splash(0.5); }   // the stream hits the bottom
      if (crossed(ch, t, 0.3)) splash(0.05 + level * 0.9 + 0.1); // and keeps spitting as it fills
    }
    // the bits float up with the surface and bob
    inCup.forEach((m, i) => {
      const floatY = lerp(m.userData.slotY - 0.45, m.userData.slotY, level);
      const bob = level > 0.98 ? Math.sin(time * 1.6 + i * 2.1) * 0.03 : 0;
      m.position.y = floatY + bob + clamp(bounce.x, 0, 0.4) * (1 + (i % 3) * 0.3);
      m.rotation.y = i * 1.3 + (1 - level) * 0.6;
    });
    if (ch === 1 && crossed(ch, t, 0.62)) kick(0.9);

    // ---------- 2: lid, straw, show-off spin, crowd ----------
    const l = ch < 2 ? 0 : ch > 2 ? 1 : seg(t, 0.02, 0.16);
    const lidDrop = l < 1 ? backOut(l, 1.2) : 1;
    P.lid.visible = l > 0.001;
    P.lid.position.y = lerp(2.4, 0, lidDrop);
    if (ch === 2 && crossed(ch, t, 0.16)) kick(-1.4);
    if (P.straw) {
      const sw = ch < 2 ? 0 : ch > 2 ? 1 : seg(t, 0.14, 0.3);
      const slide = sw < 1 ? backOut(sw, 1.4) : 1;
      P.straw.visible = sw > 0.001;
      P.straw.position.y = lerp(2.2, 0, slide);
      P.straw.rotation.z = (1 - slide) * -0.35;
    }
    const spin = ch < 2 ? 0 : ch > 2 ? 1 : seg(t, 0.34, 0.6);
    c.rotation.y = (spin < 1 ? (1 - Math.pow(1 - spin, 3)) : 1) * Math.PI * 2 + (ch >= 2 ? Math.sin(time * 0.6) * 0.06 : 0);

    const crowdIn = ch < 2 ? 0 : ch > 2 ? 1 : seg(t, 0.5, 1);
    const crowdOut = ch < 3 ? 0 : seg(t, 0.0, 0.35);
    crowd.visible = crowdIn > 0 && crowdOut < 1;
    CROWD.forEach((cc) => {
      const k = seg(crowdIn, cc.delay * 0.6, cc.delay * 0.6 + 0.4);
      const pop = k < 1 ? backOut(k, 2.0) : 1;
      const out = seg(crowdOut, cc.delay * 0.4, cc.delay * 0.4 + 0.6);
      const s = Math.max(0.001, cc.s * pop * (1 - out));
      cc.m.visible = s > 0.002;
      cc.m.scale.setScalar(s);
      const fly = out * out * 5;
      cc.m.position.set(Math.cos(cc.a) * (cc.r + fly), -0.4 + Math.sin(cc.a * 1.7) * 1.1 + Math.sin(time * 1.3 + cc.a) * 0.05 + fly * 0.4, cc.m.position.z);
    });

    // cup squash (spring) — origin at the base
    c.scale.set(1 - sq * 0.5, 1 + sq, 1 - sq * 0.5);

    // words on the chapter title, per chapter
    if (ch === 0) state.words = (t >= 0.06) + (t >= 0.3) + (t >= 0.6);
    else if (ch === 1) state.words = (t >= 0.09) + (t >= 0.5) + (t >= 0.7);
    else if (ch === 2) state.words = (t >= 0.16) + (t >= 0.34) + (t >= 0.55);
    else state.words = (t >= 0.06) + (t >= 0.2) + (t >= 0.34) + (t >= 0.48);
    state.crowdOut = crowdOut;

    prev = { ch, t };
  }

  apply(0, 0, 0, 1 / 60);
  return { group, tilt, apply, state };
}
