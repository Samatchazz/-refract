// Abstract hover "cover" imagery for case rows (brief §5: blurred /
// abstract, never real covers). Generated procedurally per row — soft
// ink-blot compositions seeded by the row index so each project gets a
// stable, distinct abstraction. CSS applies the blur.

const PALETTES = [
  ['#1c1c26', '#4A5578', '#2a2333'],
  ['#181820', '#5b4a78', '#23283e'],
  ['#141419', '#3d4a6b', '#402730'],
  ['#1a1a24', '#4A5578', '#513a2c'],
  ['#16161e', '#31518a', '#2c2c3a'],
  ['#1d1d27', '#6b5a4a', '#2e3a55'],
  ['#15151c', '#44406e', '#233042'],
];

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function paint(canvas, seed) {
  const w = (canvas.width = 320);
  const h = (canvas.height = 400);
  const ctx = canvas.getContext('2d');
  const rnd = mulberry32(seed * 7919 + 13);
  const pal = PALETTES[seed % PALETTES.length];

  ctx.fillStyle = pal[0];
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 9; i++) {
    const cx = rnd() * w;
    const cy = rnd() * h;
    const r = 40 + rnd() * 160;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    const col = pal[1 + Math.floor(rnd() * (pal.length - 1))];
    g.addColorStop(0, col + (rnd() > 0.5 ? 'cc' : '88'));
    g.addColorStop(1, col + '00');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r * (0.5 + rnd() * 0.8), rnd() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  // faint grain so blur doesn't band
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rnd() - 0.5) * 14;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

export function initCovers(scope = document) {
  scope.querySelectorAll('.case-media:empty').forEach((panel) => {
    const link = panel.parentElement.querySelector('[data-case-media]');
    const seed = parseInt(link?.dataset.caseMedia ?? '0', 10);
    const canvas = document.createElement('canvas');
    paint(canvas, seed);
    panel.appendChild(canvas);
  });
}
