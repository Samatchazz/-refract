// Toppings for the secret-menu cup — three Blender-made gummy shapes
// (public/models/*.glb, source blender/toppings.blend): a piped cream swirl,
// a thin dusting sheet that settles on it, and one round mochi ball. The
// files carry geometry only (no materials, no UVs); the site dresses them in
// its pink jelly here. Each mesh is Y-up with its origin at the bottom
// centre and is about 1 unit tall, so callers scale and sit them directly.

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { solid } from './parts.js';

const FILES = { cream: 'matcha-cream', dust: 'matcha-dust', mochi: 'mochi-topping' };

// the toppings wear the dense pink jelly (`solid`, not transmissive): they
// start inside the translucent cup wall and sit under the dome lid later,
// and three.js drops transmissive meshes behind other transmissive ones

const url = (name) => `${import.meta.env.BASE_URL}models/${name}.glb`;

let pending = null;

/** load the three toppings once; resolves to { cream, dust, mochi } meshes
 *  (fresh clones each call, sharing geometry) or null if a file is missing */
export function loadToppings() {
  pending ??= new Promise((resolve) => {
    const loader = new GLTFLoader();
    const out = {};
    let left = Object.keys(FILES).length;
    for (const [key, file] of Object.entries(FILES)) {
      loader.load(
        url(file),
        (gltf) => {
          let mesh = null;
          gltf.scene.traverse((o) => { if (!mesh && o.isMesh) mesh = o; });
          if (mesh) {
            mesh.geometry.computeVertexNormals();
            mesh.geometry.computeBoundingBox();
            out[key] = mesh.geometry;
          }
          if (--left === 0) resolve(out);
        },
        undefined,
        () => { if (--left === 0) resolve(out); },
      );
    }
  });
  return pending.then((geos) => {
    if (!geos.cream || !geos.dust || !geos.mochi) return null;
    // three pinks of the same jelly: mid cream, deep dusting, pale mochi
    const cream = new THREE.Mesh(geos.cream, solid('#FFB3D1', '#FF3D8F', { roughness: 0.16, sheenColor: new THREE.Color('#FFD6E6') }));
    const dust = new THREE.Mesh(geos.dust, solid('#FF5FA6', '#C4085C', { roughness: 0.3, clearcoat: 0.4 }));
    const mochi = new THREE.Mesh(geos.mochi, solid('#FFD3E4', '#FF8FC2', { roughness: 0.22 }));
    cream.name = 'cream'; dust.name = 'dust'; mochi.name = 'mochi';
    return { cream, dust, mochi };
  });
}
