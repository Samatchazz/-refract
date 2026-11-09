// Render the procedural case art to JPGs the case pages load.
//   node scripts/render-art.mjs secret-menu [shot]
// → public/assets/cases/<slug>/<shot>.jpg   (cover 16:9, media-1 4:3,
//   media-2 3:4, wide 21:9, media-3 4:3, media-4 3:4)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2] || 'secret-menu';
const only = process.argv[3];
const base = process.env.ART_BASE || 'http://localhost:5400';
const SIZES = {
  cover: [1600, 900], 'media-1': [1200, 900], 'media-2': [900, 1200],
  wide: [2100, 900], 'media-3': [1200, 900], 'media-4': [900, 1200],
};
const out = resolve(ROOT, 'public/assets/cases', slug);
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ headless: true, channel: 'chrome',
  args: ['--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=d3d11', '--enable-gpu-rasterization'] });
for (const [shot, [w, h]] of Object.entries(SIZES)) {
  if (only && shot !== only) continue;
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(`${base}/art.html?scene=${slug}&shot=${shot}`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__artReady === true, null, { timeout: 60000 });
  await page.waitForTimeout(300);
  const file = resolve(out, `${shot}.jpg`);
  await page.screenshot({ path: file, type: 'jpeg', quality: 86 });
  console.log(`${slug}/${shot}.jpg ${w}x${h}`, errs.length ? errs : '');
  await ctx.close();
}
await browser.close();
