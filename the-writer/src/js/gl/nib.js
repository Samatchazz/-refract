// The fountain-pen nib — built procedurally (no external file needed):
// ExtrudeGeometry from a 2D outline with slit + breather hole, then
// tapered, curled across its width and smoothed. A real sculpt dropped
// at /assets/model/hero.glb (Draco OK) replaces it automatically.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

const LEN = 3.0;        // outline length in local units (tip y=0 → back y=LEN)

// Classic nib anatomy, face view: sharp tip → near-straight tines →
// angular shoulder "wings" at ~57% → sides easing in → rounded tail.
// The slit runs tip→breather hole; both oversized enough to read at
// a distance — these three cues are what make it a NIB, not a drop.
function nibShape() {
  const s = new THREE.Shape();
  s.moveTo(0.045, 0.02);
  // tines: long and almost straight (slight outward bow)
  s.bezierCurveTo(0.13, 0.72, 0.30, 1.34, 0.47, 1.72);
  // shoulder wing: quick flare, small round-over at the widest point
  s.bezierCurveTo(0.54, 1.86, 0.56, 1.98, 0.54, 2.12);
  // body easing inward toward the tail (kept slim — no spoon belly)
  s.bezierCurveTo(0.50, 2.5, 0.43, 2.78, 0.27, 2.92);
  // rounded tail
  s.bezierCurveTo(0.14, 3.01, -0.14, 3.01, -0.27, 2.92);
  // mirror: left body, wing, tines
  s.bezierCurveTo(-0.43, 2.78, -0.50, 2.5, -0.54, 2.12);
  s.bezierCurveTo(-0.56, 1.98, -0.54, 1.86, -0.47, 1.72);
  s.bezierCurveTo(-0.30, 1.34, -0.13, 0.72, -0.045, 0.02);
  // rounded writing point
  s.quadraticCurveTo(0, -0.045, 0.045, 0.02);
  s.closePath();

  // breather hole — generous, at ~50% of the length
  const hole = new THREE.Path();
  hole.absarc(0, 1.5, 0.125, 0, Math.PI * 2, true);
  s.holes.push(hole);

  // slit: from just above the tip to just below the hole
  const slit = new THREE.Path();
  const sw = 0.028;
  slit.moveTo(-sw, 0.07);
  slit.lineTo(sw, 0.07);
  slit.lineTo(sw * 0.7, 1.35);
  slit.lineTo(-sw * 0.7, 1.35);
  slit.closePath();
  s.holes.push(slit);

  return s;
}

export function buildProceduralNib() {
  const DEPTH = 0.045;
  let geo = new THREE.ExtrudeGeometry(nibShape(), {
    depth: DEPTH,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 2,
    curveSegments: 28,
  });

  // ---- sculpt: curl across width, taper thickness to the tip,
  //      slight lengthwise arc, hand-crafted asymmetry ----
  const pos = geo.attributes.position;
  const zMid = DEPTH / 2;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    const t = THREE.MathUtils.clamp(y / LEN, 0, 1); // 0 tip → 1 back

    // metal gets thinner toward the writing point
    z = zMid + (z - zMid) * (0.45 + 0.55 * t);
    // cylindrical curl across the width — kept shallow so the face
    // (slit + hole) stays readable from the camera
    z -= x * x * 0.2;
    // gentle lengthwise arc (belly)
    z += Math.sin(t * Math.PI) * 0.055;
    // subtle asymmetry — hand-crafted, not a logo render (brief §1)
    x += Math.sin(y * 5.1 + 0.7) * 0.006 * (1 - t);
    z += Math.sin(x * 9.0 + y * 3.0) * 0.0035;

    pos.setXYZ(i, x, y, z);
  }

  // smooth: weld verts then recompute normals across the welded surface
  geo.deleteAttribute('uv');
  geo.deleteAttribute('normal');
  geo = BufferGeometryUtils.mergeVertices(geo, 1e-4);
  geo.computeVertexNormals();

  // planar UVs so the scratch normal-map has coordinates
  geo.computeBoundingBox();
  const bb = geo.boundingBox;
  const size = new THREE.Vector3();
  bb.getSize(size);
  const uv = new Float32Array(geo.attributes.position.count * 2);
  for (let i = 0; i < geo.attributes.position.count; i++) {
    uv[i * 2] = (geo.attributes.position.getX(i) - bb.min.x) / size.x;
    uv[i * 2 + 1] = (geo.attributes.position.getY(i) - bb.min.y) / size.y;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));

  // center on origin, tip pointing -Y
  geo.center();
  return geo;
}

/** center + rescale an authored geometry to the procedural nib's footprint,
 *  auto-rotating its longest axis onto Y (our length axis) */
function normalize(geo) {
  if (!geo.attributes.normal) geo.computeVertexNormals();
  geo.center();
  geo.computeBoundingBox();
  const s = new THREE.Vector3();
  geo.boundingBox.getSize(s);
  if (s.z >= s.x && s.z >= s.y) geo.rotateX(-Math.PI / 2);      // z → y
  else if (s.x >= s.y && s.x >= s.z) geo.rotateZ(Math.PI / 2);  // x → y
  geo.computeBoundingBox();
  geo.boundingBox.getSize(s);
  const scale = LEN / Math.max(s.x, s.y, s.z);
  geo.scale(scale, scale, scale);
  return geo;
}

/** collect every mesh in a loaded scene graph into one geometry */
function collectGeometry(root) {
  const geos = [];
  root.traverse((o) => {
    if (o.isMesh && o.geometry) {
      const g = o.geometry.clone();
      g.applyMatrix4(o.matrixWorld);
      // drop attributes that vary between parts so merging succeeds
      for (const name of Object.keys(g.attributes)) {
        if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
      }
      geos.push(g.index ? g.toNonIndexed() : g);
    }
  });
  if (geos.length === 0) return null;
  if (geos.length === 1) return geos[0];
  try {
    return BufferGeometryUtils.mergeGeometries(geos, false) || geos[0];
  } catch {
    return geos[0];
  }
}

function tryGLB(url) {
  return new Promise((resolve) => {
    const draco = new DRACOLoader().setDecoderPath('/draco/');
    const loader = new GLTFLoader().setDRACOLoader(draco);
    loader.load(
      url,
      (gltf) => {
        gltf.scene.updateMatrixWorld(true);
        const geo = collectGeometry(gltf.scene);
        draco.dispose();
        resolve(geo ? normalize(geo) : null);
      },
      undefined,
      () => { draco.dispose(); resolve(null); },
    );
  });
}

// .mtl is intentionally ignored: shading comes from our matcaps (brief §1),
// so only the .obj geometry matters.
function tryOBJ(url) {
  return new Promise((resolve) => {
    new OBJLoader().load(
      url,
      (root) => {
        root.updateMatrixWorld(true);
        const geo = collectGeometry(root);
        resolve(geo ? normalize(geo) : null);
      },
      undefined,
      () => resolve(null),
    );
  });
}

// Set per authored model: true when its writing tip ends up pointing +Y
// after normalize() — the scene expects the tip at −Y (OldPen.obj: true).
const FLIP_AUTHORED_LENGTH = true;

/**
 * Authored model takes precedence over the procedural sculpt.
 * Drop either file in — checked in this order:
 *   1. /assets/model/hero.glb   (Draco OK)
 *   2. /assets/model/hero.obj   (.mtl not needed — matcap shading)
 */
export async function loadNibGeometry(onAsset) {
  const end = onAsset ? onAsset('nib') : () => {};
  const authored =
    (await tryGLB('/assets/model/hero.glb')) ||
    (await tryOBJ('/assets/model/hero.obj'));
  if (authored && FLIP_AUTHORED_LENGTH) authored.rotateZ(Math.PI);
  const geo = authored || buildProceduralNib();
  end();
  return geo;
}
