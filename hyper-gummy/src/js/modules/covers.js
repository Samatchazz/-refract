// Abstract hover "cover" art for case rows — candy blob compositions
// seeded by the row index so each case gets a stable, distinct
// abstraction. CSS applies the blur.

const PALETTES = [
  ['#FFE0EC', '#FF3D8F', '#FFB3D1', '#FFD23F'],
  ['#FFF0D6', '#FF8A3D', '#FFD23F', '#FF3D8F'],
  ['#EAFBD8', '#A6E85C', '#5CCBFF', '#FFD23F'],
  ['#EEE6FF', '#8A5CFF', '#FF3D8F', '#5CCBFF'],
  ['#DDF6FF', '#5CCBFF', '#A6E85C', '#8A5CFF'],
  ['#FFF7CC', '#FFD23F', '#FF8A3D', '#A6E85C'],
  ['#FFE8F1', '#FF3D8F', '#8A5CFF', '#FF8A3D'],
];

function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function paint(canvas, seed, [W, H] = [320, 400]) {
  const w = (canvas.width = W);
  const h = (canvas.height = H);
  const ctx = canvas.getContext('2d');
  const rnd = mulberry32(seed * 7919 + 13);
  const pal = PALETTES[seed % PALETTES.length];

  ctx.fillStyle = pal[0];
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 8; i++) {
    const cx = rnd() * w;
    const cy = rnd() * h;
    const r = 50 + rnd() * 150;
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    const col = pal[1 + Math.floor(rnd() * (pal.length - 1))];
    g.addColorStop(0, col + (rnd() > 0.5 ? 'e6' : 'aa'));
    g.addColorStop(1, col + '00');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r * (0.6 + rnd() * 0.6), rnd() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rnd() - 0.5) * 10;
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
  // case-page media placeholders: same candy art, seeded per block,
  // sized for the block's aspect ratio so it never looks stretched
  scope.querySelectorAll('.media-art:empty').forEach((fig) => {
    const seed = parseInt(fig.dataset.seed ?? '0', 10);
    const canvas = document.createElement('canvas');
    paint(canvas, seed, fig.classList.contains('case-cover') || fig.parentElement?.classList.contains('post-cover') ? [640, 360] : [480, 400]);
    fig.appendChild(canvas);
  });
}
