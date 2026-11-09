// Case-art parts — the same gummy language as the bear (glossy translucent
// physical materials under the RoomEnvironment), assembled into small
// still-life props: a domed take-away cup, jelly cubes, a bendy straw, a
// puffy arch door, a soft candy floor and a fake contact shadow.

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { gummyMaterial, FLAVORS } from '../flavors.js';

export const C = {
  pink: '#FF8FBF', pinkDeep: '#FF3D8F', blush: '#FFB3D1',
  lime: '#CBF39A', limeDeep: '#7ED321',
  peach: '#FFB07A', peachDeep: '#FF7A1F',
  lemon: '#FFE58A', lemonDeep: '#FFC21A',
  sky: '#9CDFFF', skyDeep: '#2FA8FF',
  grape: '#B9A0FF', grapeDeep: '#7A4BFF',
};

/** solid-ish gummy (cup body, door, floor): translucent but dense */
export function gummy(color, attenuation, o = {}) {
  return gummyMaterial({ color, attenuation }, { transmission: 0.55, thickness: 0.8, attenuationDistance: 0.9, ...o });
}
/** dense opaque gummy — for anything INSIDE a clear part (drink, cubes,
 *  straw): three.js skips transmissive meshes in the transmission pass, so a
 *  translucent thing behind the cup wall would simply vanish. */
export function solid(color, deep, o = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color).lerp(new THREE.Color(deep), 0.45),
    roughness: 0.12,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    sheen: 0.5,
    sheenColor: new THREE.Color(color),
    envMapIntensity: 1.2,
    ...o,
  });
}
/** clear candy plastic (cup wall, dome lid) — glassy, tinted by attenuation */
export function clear(tint = '#ffffff', o = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#ffffff'),
    roughness: 0.06,
    metalness: 0,
    transmission: 1,
    thickness: 0.08,
    ior: 1.35,
    attenuationColor: new THREE.Color(tint),
    attenuationDistance: 1.2,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    envMapIntensity: 0.55,
    side: THREE.DoubleSide,
    ...o,
  });
}

/** take-away cup: tapered clear wall, lime drink inside, pink dome lid with a
 *  lime rim, jelly cubes floating up top, bendy lime straw. ~2.6 units tall. */
/** the bear's own skin: strawberry gummy, exactly the hero material */
export function bearSkin(o = {}) {
  return gummyMaterial(FLAVORS[0], { thickness: 0.9, attenuationDistance: 1.1, ...o });
}

export function cup({ drink = [C.lime, C.limeDeep], lid = C.pinkDeep, cubes = 3, straw = true, cubeColor = [C.pink, C.pinkDeep], look = 'clear' } = {}) {
  // look 'bear': the whole cup in the hero bear's strawberry gummy — wall and
  // dome translucent like the bear, drink/cubes/straw dense pinks inside
  const bear = look === 'bear';
  if (bear) { drink = ['#FF3D8F', '#C4085C']; cubeColor = ['#FFD3E4', '#FF8FC2']; }
  // bear look: the cup is a CHUNKY gummy — a thick wall with a fat rounded
  // lip, the same deep strawberry material as the bear, so it reads as one
  // family (the thin clear cup looked like cheap plastic next to it)
  const wallMat = () => (bear ? bearSkin({ thickness: 1.2, attenuationDistance: 1.3 }) : clear('#ffffff'));
  const domeMat = () => (bear ? bearSkin({ thickness: 0.9, attenuationDistance: 1.1 }) : clear(lid, { attenuationDistance: 0.5, thickness: 0.3 }));
  const g = new THREE.Group();
  const parts = { cubes: [] };

  // wall
  const thinProfile = [[0, 0], [0.56, 0], [0.6, 0.04], [0.66, 0.9], [0.72, 1.55], [0.76, 1.6], [0.78, 1.66]];
  const chunkyProfile = [
    [0, 0], [0.5, 0], [0.58, 0.03], [0.62, 0.1],          // rounded foot
    [0.7, 0.9], [0.78, 1.6], [0.84, 1.68], [0.86, 1.76],  // outer wall up to the lip
    [0.82, 1.84], [0.74, 1.86], [0.68, 1.8],              // fat lip rolls over
    [0.64, 1.7], [0.56, 0.95], [0.5, 0.2], [0.42, 0.14], [0, 0.14], // inner wall + floor
  ];
  const wall = new THREE.Mesh(
    new THREE.LatheGeometry((bear ? chunkyProfile : thinProfile).map(([r, y]) => new THREE.Vector2(r, y)), 72),
    wallMat(),
  );
  wall.geometry.computeVertexNormals();
  g.add(wall);
  parts.wall = wall;

  // drink — a lime lathe just inside the wall, meniscus at .95 (geometry
  // starts at y=0 so scale.y is the fill level)
  const drinkMesh = new THREE.Mesh(
    new THREE.LatheGeometry((bear
      ? [[0, 0], [0.49, 0], [0.55, 0.5], [0.62, 0.92], [0, 0.92]]
      : [[0, 0], [0.55, 0], [0.6, 0.45], [0.635, 0.9], [0, 0.9]]
    ).map(([r, y]) => new THREE.Vector2(r, y)), 64),
    solid(drink[0], drink[1], { roughness: 0.1 }),
  );
  drinkMesh.position.y = bear ? 0.14 : 0.05;
  g.add(drinkMesh);
  parts.drink = drinkMesh;

  // jelly cubes bobbing above the drink
  const cubeGeo = new RoundedBoxGeometry(0.4, 0.4, 0.4, 5, 0.13);
  const cubeMat = solid(cubeColor[0], cubeColor[1]);
  const spots = [[-0.22, 1.1, 0.1, 0.3], [0.2, 1.02, 0.18, -0.4], [0.04, 1.28, -0.2, 0.9], [-0.3, 1.32, -0.15, 1.6]];
  for (let i = 0; i < Math.min(cubes, spots.length); i++) {
    const [x, y, z, r] = spots[i];
    const m = new THREE.Mesh(cubeGeo, cubeMat);
    m.position.set(x, y, z);
    m.rotation.set(r * 0.6, r, r * 0.3);
    m.userData.rest = m.position.clone();
    m.userData.restRot = m.rotation.clone();
    g.add(m);
    parts.cubes.push(m);
  }

  // lid: lime rim band + pink dome (one group so it can drop on as a piece)
  const lidG = new THREE.Group();
  const rimR = bear ? 0.88 : 0.79, rimT = bear ? 0.11 : 0.07, rimY = bear ? 1.84 : 1.7;
  const rim = new THREE.Mesh(new THREE.TorusGeometry(rimR, rimT, 24, 96), bear ? bearSkin({ thickness: 0.6 }) : solid(drink[0], drink[1]));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = rimY;
  lidG.add(rim);
  if (!bear) {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.78, 0.16, 96, 1, true), solid(drink[0], drink[1], { side: THREE.DoubleSide }));
    band.position.y = 1.62;
    lidG.add(band);
  }
  const dome = new THREE.Mesh(new THREE.SphereGeometry(bear ? 0.86 : 0.78, 96, 48, 0, Math.PI * 2, 0, Math.PI / 2), domeMat());
  dome.scale.set(1, bear ? 0.8 : 0.7, 1);
  dome.position.y = bear ? 1.86 : 1.72;
  lidG.add(dome);
  g.add(lidG);
  parts.lid = lidG;

  // bendy straw out of the dome
  if (straw) {
    const strawG = new THREE.Group();
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.22, 1.0, 0.05),
      new THREE.Vector3(0.24, 2.0, 0.05),
      new THREE.Vector3(0.27, 2.55, 0.05),
      new THREE.Vector3(0.38, 2.78, 0.05),
      new THREE.Vector3(0.62, 2.86, 0.05),
      new THREE.Vector3(0.9, 2.84, 0.05),
    ]);
    const sMesh = new THREE.Mesh(new THREE.TubeGeometry(path, 48, bear ? 0.1 : 0.075, 24, false), bear ? bearSkin({ thickness: 0.5 }) : solid(drink[0], drink[1], { roughness: 0.18 }));
    strawG.add(sMesh);
    if (bear) { // rounded ends
      for (const u of [0, 1]) {
        const cap = new THREE.Mesh(new THREE.SphereGeometry(0.1, 20, 14), sMesh.material);
        cap.position.copy(path.getPointAt(u));
        strawG.add(cap);
      }
    }
    // ribbed bend: three fat rings around the neck
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(bear ? 0.11 : 0.085, bear ? 0.04 : 0.03, 12, 32), sMesh.material);
      const p = path.getPointAt(0.62 + i * 0.07);
      const t = path.getTangentAt(0.62 + i * 0.07);
      ring.position.copy(p);
      ring.lookAt(p.clone().add(t));
      strawG.add(ring);
    }
    g.add(strawG);
    parts.straw = strawG;
  }
  g.userData.height = 2.9;
  g.userData.parts = parts;
  return g;
}

/** puffy arch door: a fat tube frame, a rounded slab door on a hinge, a knob.
 *  `open` = radians the door swings (0 closed, ~0.9 ajar). ~2.6 units tall. */
export function door({ color = [C.pink, C.pinkDeep], open = 0, glow = C.lemon } = {}) {
  const g = new THREE.Group();
  const mat = gummy(color[0], color[1], { transmission: 0.45, attenuationDistance: 1.1 });

  // frame: rounded arch path
  const w = 0.95, h = 2.4, r = 0.55;
  const pts = [];
  pts.push(new THREE.Vector3(-w, 0, 0), new THREE.Vector3(-w, h - r, 0));
  for (let i = 1; i < 8; i++) { const a = Math.PI - (i / 8) * (Math.PI / 2); pts.push(new THREE.Vector3(-w + r + Math.cos(a) * r, h - r + Math.sin(a) * r, 0)); }
  pts.push(new THREE.Vector3(-w + r, h, 0), new THREE.Vector3(w - r, h, 0));
  for (let i = 1; i < 8; i++) { const a = Math.PI / 2 - (i / 8) * (Math.PI / 2); pts.push(new THREE.Vector3(w - r + Math.cos(a) * r, h - r + Math.sin(a) * r, 0)); }
  pts.push(new THREE.Vector3(w, h - r, 0), new THREE.Vector3(w, 0, 0));
  const path = new THREE.CatmullRomCurve3(pts, false, 'centripetal', 0.2);
  const frame = new THREE.Mesh(new THREE.TubeGeometry(path, 160, 0.19, 24, false), mat);
  g.add(frame);
  // feet caps
  for (const x of [-w, w]) {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.19, 24, 16), mat);
    cap.position.set(x, 0, 0);
    g.add(cap);
  }

  // doorway glow (a warm slab behind the opening — light from the "secret" room)
  const glowMesh = new THREE.Mesh(new THREE.PlaneGeometry(2 * w - 0.2, h - 0.15), new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.9 }));
  glowMesh.position.set(0, (h - 0.15) / 2, -0.25);
  g.add(glowMesh);

  // slab door on a hinge at the left post
  const hinge = new THREE.Group();
  hinge.position.set(-w + 0.19, 0, 0.02);
  const dw = 2 * w - 0.45, dh = h - 0.28;
  const slab = new THREE.Mesh(new RoundedBoxGeometry(dw, dh, 0.14, 4, 0.06), gummy(color[0], color[1], { transmission: 0.3, roughness: 0.12 }));
  slab.position.set(dw / 2, dh / 2 + 0.02, 0);
  hinge.add(slab);
  // raised inner panel
  const panel = new THREE.Mesh(new RoundedBoxGeometry(dw * 0.62, dh * 0.42, 0.08, 3, 0.04), slab.material);
  panel.position.set(dw / 2, dh * 0.66, 0.09);
  hinge.add(panel);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 24), gummy(C.blush, C.pinkDeep, { transmission: 0.2 }));
  knob.position.set(dw - 0.22, dh * 0.47, 0.14);
  hinge.add(knob);
  hinge.rotation.y = -open;
  g.add(hinge);
  g.userData.height = h + 0.2;
  return g;
}

/** a single jelly cube */
export function cube(size = 0.4, color = [C.pink, C.pinkDeep]) {
  return new THREE.Mesh(
    new RoundedBoxGeometry(size, size, size, 4, size * 0.26),
    gummyMaterial({ color: color[0], attenuation: color[1] }, { thickness: 0.5, attenuationDistance: 0.6 }),
  );
}

/** soft candy blob (background filler) */
export function blob(r = 0.5, color = [C.lime, C.limeDeep]) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 32), gummy(color[0], color[1]));
  m.scale.set(1, 0.72, 0.9);
  return m;
}

/** candy floor: a fat rounded slab, top at y = 0 */
export function floor({ color = [C.pink, C.pinkDeep], w = 14, d = 9 } = {}) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, 0.6, d, 3, 0.25), gummy(color[0], color[1], { transmission: 0.25, roughness: 0.2, attenuationDistance: 2.5 }));
  m.position.y = -0.3;
  return m;
}

/** fake contact shadow: a soft dark disc on the floor */
export function shadow(r = 1, opacity = 0.28) {
  const size = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const grd = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, 'rgba(90,30,70,1)');
  grd.addColorStop(0.55, 'rgba(90,30,70,.45)');
  grd.addColorStop(1, 'rgba(90,30,70,0)');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2 * r, 2 * r), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.006;
  m.renderOrder = 1;
  return m;
}
