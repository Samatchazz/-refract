// MatCap textures (brief §1): dark graphite-iridescent (default) and
// wet-ink glossy (hover / route transitions), plus a brushed-metal
// normal map for micro-scratches.
//
// Authored PNGs at /assets/matcap/matcap-dark.png and
// /assets/matcap/matcap-inkwet.png take precedence automatically;
// otherwise we synthesize equivalents on a canvas — the sphere-capture
// math is the same either way.

import * as THREE from 'three';

const SIZE = 512;

function circleClip(ctx) {
  ctx.beginPath();
  ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2, 0, Math.PI * 2);
  ctx.clip();
}

function radial(ctx, x, y, r, stops) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  for (const [o, c] of stops) g.addColorStop(o, c);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, SIZE, SIZE);
}

/** near-black graphite with cold violet/steel highlights */
function paintDark(ctx) {
  ctx.fillStyle = '#0e0e13';
  ctx.fillRect(0, 0, SIZE, SIZE);
  circleClip(ctx);
  // restrained steel sheen, upper-left key light
  radial(ctx, SIZE * 0.32, SIZE * 0.26, SIZE * 0.55, [
    [0, 'rgba(150,158,186,0.38)'],
    [0.35, 'rgba(90,96,126,0.16)'],
    [0.7, 'rgba(30,32,44,0.05)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  // cold violet iridescence, lower-right rim
  radial(ctx, SIZE * 0.8, SIZE * 0.84, SIZE * 0.5, [
    [0, 'rgba(106,90,138,0.32)'],
    [0.5, 'rgba(74,85,120,0.14)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  // rim light bottom-left (steel blue)
  radial(ctx, SIZE * 0.14, SIZE * 0.86, SIZE * 0.35, [
    [0, 'rgba(90,110,150,0.22)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  // tight specular
  radial(ctx, SIZE * 0.34, SIZE * 0.24, SIZE * 0.09, [
    [0, 'rgba(225,230,246,0.8)'],
    [0.4, 'rgba(180,186,214,0.25)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  edgeDarken(ctx);
}

/** glossier wet-ink variant — deeper base, sharper brighter speculars */
function paintInkwet(ctx) {
  ctx.fillStyle = '#0b0b10';
  ctx.fillRect(0, 0, SIZE, SIZE);
  circleClip(ctx);
  radial(ctx, SIZE * 0.33, SIZE * 0.27, SIZE * 0.6, [
    [0, 'rgba(140,155,195,0.7)'],
    [0.3, 'rgba(74,85,120,0.35)'],
    [0.7, 'rgba(20,22,34,0.08)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  radial(ctx, SIZE * 0.8, SIZE * 0.8, SIZE * 0.55, [
    [0, 'rgba(96,80,140,0.55)'],
    [0.6, 'rgba(50,58,92,0.2)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  // hard specular — the "wet" cue
  radial(ctx, SIZE * 0.37, SIZE * 0.24, SIZE * 0.07, [
    [0, 'rgba(255,255,255,1)'],
    [0.5, 'rgba(220,228,255,0.5)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  radial(ctx, SIZE * 0.62, SIZE * 0.55, SIZE * 0.05, [
    [0, 'rgba(190,200,240,0.6)'],
    [1, 'rgba(0,0,0,0)'],
  ]);
  edgeDarken(ctx);
}

function edgeDarken(ctx) {
  // rim sheen just inside the edge — pops the silhouette off the dark
  // background (grazing-angle normals sample here)
  const rim = ctx.createRadialGradient(SIZE / 2, SIZE / 2, SIZE * 0.3, SIZE / 2, SIZE / 2, SIZE * 0.5);
  rim.addColorStop(0, 'rgba(0,0,0,0)');
  rim.addColorStop(0.72, 'rgba(0,0,0,0)');
  rim.addColorStop(0.86, 'rgba(150,162,196,0.30)');
  rim.addColorStop(0.94, 'rgba(120,128,164,0.12)');
  rim.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = rim;
  ctx.fillRect(0, 0, SIZE, SIZE);

  const g = ctx.createRadialGradient(SIZE / 2, SIZE / 2, SIZE * 0.34, SIZE / 2, SIZE / 2, SIZE * 0.5);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(0.9, 'rgba(0,0,0,0.18)');
  g.addColorStop(1, 'rgba(0,0,0,0.55)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, SIZE, SIZE);
}

function canvasTexture(paint) {
  const c = document.createElement('canvas');
  c.width = c.height = SIZE;
  paint(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Fine brushed-metal normal map: horizontal scratch height field → normals. */
function scratchNormalMap() {
  const s = 256;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, s, s);
  for (let i = 0; i < 900; i++) {
    const y = Math.random() * s;
    const len = 20 + Math.random() * 120;
    const x = Math.random() * s;
    const v = 108 + Math.floor(Math.random() * 40);
    ctx.strokeStyle = `rgba(${v},${v},${v},${0.25 + Math.random() * 0.5})`;
    ctx.lineWidth = Math.random() < 0.85 ? 1 : 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + len, y + (Math.random() - 0.5) * 3);
    ctx.stroke();
  }
  // height → tangent-space normals
  const src = ctx.getImageData(0, 0, s, s);
  const out = ctx.createImageData(s, s);
  const h = (x, y) => src.data[(((y + s) % s) * s + ((x + s) % s)) * 4] / 255;
  const strength = 1.6;
  for (let y = 0; y < s; y++) {
    for (let x = 0; x < s; x++) {
      const dx = (h(x + 1, y) - h(x - 1, y)) * strength;
      const dy = (h(x, y + 1) - h(x, y - 1)) * strength;
      const inv = 1 / Math.hypot(dx, dy, 1);
      const i = (y * s + x) * 4;
      out.data[i] = (-dx * inv * 0.5 + 0.5) * 255;
      out.data[i + 1] = (-dy * inv * 0.5 + 0.5) * 255;
      out.data[i + 2] = (inv * 0.5 + 0.5) * 255;
      out.data[i + 3] = 255;
    }
  }
  ctx.putImageData(out, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 3);
  return t;
}

/* ---- click-to-recolor variants (the Dogstudio "click the dog" trick) ----
   Same sphere-capture math as paintDark, hue-shifted per theme. */

const TINT_THEMES = [
  // key light, iridescent rim, secondary rim, specular, trail/neon color
  { name: 'graphite', trail: '#39ff14' }, // default dark matcap, green ink
  {
    name: 'ember', trail: '#ff6a3c',
    key: '255,150,110', iri: '200,70,45', rim: '255,110,60', spec: '255,225,205',
  },
  {
    name: 'ink-blue', trail: '#4aa8ff',
    key: '120,170,255', iri: '60,95,200', rim: '85,140,255', spec: '215,232,255',
  },
  {
    name: 'violet', trail: '#b06aff',
    key: '185,140,255', iri: '130,85,215', rim: '150,105,255', spec: '236,222,255',
  },
];

function paintTinted(ctx, d) {
  ctx.fillStyle = '#0e0e13';
  ctx.fillRect(0, 0, SIZE, SIZE);
  circleClip(ctx);
  radial(ctx, SIZE * 0.32, SIZE * 0.26, SIZE * 0.55, [
    [0, `rgba(${d.key},0.5)`],
    [0.35, `rgba(${d.key},0.2)`],
    [0.7, `rgba(${d.key},0.05)`],
    [1, 'rgba(0,0,0,0)'],
  ]);
  radial(ctx, SIZE * 0.8, SIZE * 0.84, SIZE * 0.5, [
    [0, `rgba(${d.iri},0.42)`],
    [0.5, `rgba(${d.iri},0.18)`],
    [1, 'rgba(0,0,0,0)'],
  ]);
  radial(ctx, SIZE * 0.14, SIZE * 0.86, SIZE * 0.35, [
    [0, `rgba(${d.rim},0.3)`],
    [1, 'rgba(0,0,0,0)'],
  ]);
  radial(ctx, SIZE * 0.34, SIZE * 0.24, SIZE * 0.09, [
    [0, `rgba(${d.spec},0.9)`],
    [0.4, `rgba(${d.spec},0.3)`],
    [1, 'rgba(0,0,0,0)'],
  ]);
  edgeDarken(ctx);
}

/** theme list for the click-cycle; index 0 keeps the default dark matcap */
export function buildTintVariants(defaultMatcap) {
  return TINT_THEMES.map((d) => ({
    name: d.name,
    trail: d.trail,
    matcap: d.key ? canvasTexture((ctx) => paintTinted(ctx, d)) : defaultMatcap,
  }));
}

function tryLoadPng(url) {
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(
      url,
      (t) => { t.colorSpace = THREE.SRGBColorSpace; resolve(t); },
      undefined,
      () => resolve(null),
    );
  });
}

export async function loadMatcaps(onAsset) {
  const end = onAsset ? onAsset('matcaps') : () => {};
  const [darkPng, inkwetPng] = await Promise.all([
    tryLoadPng('/assets/matcap/matcap-dark.png'),
    tryLoadPng('/assets/matcap/matcap-inkwet.png'),
  ]);
  const result = {
    dark: darkPng || canvasTexture(paintDark),
    inkwet: inkwetPng || canvasTexture(paintInkwet),
    normal: scratchNormalMap(),
  };
  end();
  return result;
}
