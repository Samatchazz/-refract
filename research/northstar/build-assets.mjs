// build-assets.mjs — produces assets.json: base64 data URIs for the decision page.
// The Artifact CSP blocks every external host, so fonts and screenshots must be inlined.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SHOTS = path.join(HERE, 'shots');

const PICKS = [
  ['klim-soehne', ['scroll025', 'scroll050', 'scroll075']],
  ['exat', ['scroll025', 'scroll050', 'scroll075']],
  ['offbeat', ['scroll025', 'scroll050', 'scroll075']],
];

// Kanit and Anuphan are the project's own faces and are OFL-licensed, so embedding
// them is both legitimate and useful: the page renders Thai in the exact fonts the
// leading decision is about.
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&family=Anuphan:wght@400;600&display=swap';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// ---- fonts ----------------------------------------------------------------
const cssText = await page.evaluate(async (url) => {
  const r = await fetch(url);
  return await r.text();
}, FONT_CSS).catch(() => null);

const fonts = [];
if (cssText) {
  // Keep only the thai and latin subsets; drop latin-ext/vietnamese to save weight.
  const blocks = cssText.split('@font-face').slice(1);
  for (const b of blocks) {
    const fam = (b.match(/font-family:\s*'([^']+)'/) || [])[1];
    const wght = (b.match(/font-weight:\s*([\d\s]+);/) || [])[1];
    const url = (b.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
    const range = (b.match(/unicode-range:\s*([^;]+);/) || [])[1] || '';
    if (!fam || !url) continue;
    const isThai = /U\+0E01/i.test(range);
    const isLatinBase = /U\+0000-00FF/i.test(range);
    if (!isThai && !isLatinBase) continue;
    fonts.push({ family: fam, weight: (wght || '400').trim(), url, subset: isThai ? 'thai' : 'latin' });
  }
}

const fontData = [];
for (const f of fonts) {
  const b64 = await page.evaluate(async (u) => {
    const r = await fetch(u);
    const buf = new Uint8Array(await r.arrayBuffer());
    let s = '';
    for (let i = 0; i < buf.length; i++) s += String.fromCharCode(buf[i]);
    return btoa(s);
  }, f.url);
  fontData.push({ ...f, b64, kb: Math.round(b64.length * 0.75 / 1024) });
  console.log(`font ${f.family} ${f.weight} ${f.subset} — ${Math.round(b64.length * 0.75 / 1024)}KB`);
}

// ---- screenshots ----------------------------------------------------------
const shots = {};
for (const [slug, labels] of PICKS) {
  shots[slug] = [];
  for (const label of labels) {
    const file = path.join(SHOTS, `${slug}-1440-${label}.jpg`);
    if (!fs.existsSync(file)) { console.log('MISSING', file); continue; }
    const srcB64 = fs.readFileSync(file).toString('base64');
    const out = await page.evaluate(async ({ src, w, q }) => {
      const img = new Image();
      img.src = 'data:image/jpeg;base64,' + src;
      await img.decode();
      const c = document.createElement('canvas');
      c.width = w;
      c.height = Math.round(img.naturalHeight * (w / img.naturalWidth));
      const ctx = c.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, c.width, c.height);
      return { data: c.toDataURL('image/jpeg', q), w: c.width, h: c.height };
    }, { src: srcB64, w: 470, q: 0.52 });
    shots[slug].push({ label, ...out, kb: Math.round(out.data.length * 0.75 / 1024) });
    console.log(`shot ${slug} ${label} — ${Math.round(out.data.length * 0.75 / 1024)}KB (${out.w}×${out.h})`);
  }
}

await browser.close();

const assets = { fonts: fontData, shots };
fs.writeFileSync(path.join(HERE, 'assets.json'), JSON.stringify(assets));
const totalKb = Math.round(fs.statSync(path.join(HERE, 'assets.json')).size / 1024);
console.log(`\nassets.json written — ${totalKb}KB total`);
