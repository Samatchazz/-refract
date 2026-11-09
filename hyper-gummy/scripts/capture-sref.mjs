// Capture clean 3D-canvas screenshots (no text / UI) for Midjourney --sref / --oref.
//   node scripts/capture-sref.mjs            → uses http://localhost:5400 if a server is up,
//                                              otherwise spawns `vite --port 5401`
// Output → hyper-gummy/refs/  (gitignored)
//
// Relies on the app's capture flags: ?noui=1 (hides every DOM layer + the GL
// headline) and ?freeze=1 (stops the render loop on a settled rest frame and
// sets window.__frozen). window.__stage.bearBox() gives the bear's screen rect.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from './_png.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'refs');
mkdirSync(OUT, { recursive: true });

async function reachable(url) {
  try { const r = await fetch(url, { method: 'HEAD' }); return r.ok; } catch { return false; }
}

let base = 'http://localhost:5400';
let server = null;
if (!(await reachable(base))) {
  base = 'http://localhost:5401';
  server = spawn('npx', ['vite', '--port', '5401', '--strictPort'], { cwd: ROOT, shell: true, stdio: 'ignore' });
  for (let i = 0; i < 40 && !(await reachable(base)); i++) await new Promise((r) => setTimeout(r, 500));
}
console.log('server:', base);

// Headless Google Chrome (channel 'chrome') with D3D11 → renders on the real
// GPU. Playwright's bundled headless shell falls back to SwiftShader, which
// takes ~1 s per frame for this scene at 2× — far too slow to settle.
const browser = await chromium.launch({
  headless: true,
  channel: 'chrome',
  args: ['--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=d3d11', '--enable-gpu-rasterization'],
});

async function shoot({ name, width, height, clipToBear = false, noProps = false }) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(`${base}/?noui=1&freeze=1${noProps ? '&noprops=1' : ''}`, { waitUntil: 'load' });
  // wait for the settled, frozen rest frame (the app sets __frozen after >90 frames & 4.5 s)
  await page.waitForFunction(() => window.__frozen === true, null, { timeout: 60000 });
  // sanity: no visible text nodes anywhere
  const leaks = await page.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const out = [];
    while (walker.nextNode()) {
      const n = walker.currentNode;
      if (!n.textContent.trim()) continue;
      const el = n.parentElement;
      const cs = getComputedStyle(el);
      if (cs.display !== 'none' && cs.visibility !== 'hidden' && el.getClientRects().length) out.push(n.textContent.trim().slice(0, 30));
    }
    return out;
  });
  if (leaks.length) console.warn(`[${name}] visible text still in DOM:`, leaks);

  let clip;
  if (clipToBear) {
    clip = await page.evaluate(() => window.__stage.bearBox(0.1));
    clip.x = Math.max(0, clip.x); clip.y = Math.max(0, clip.y);
    clip.width = Math.min(width - clip.x, clip.width);
    clip.height = Math.min(height - clip.y, clip.height);
  }
  const file = resolve(OUT, name);
  await page.screenshot({ path: file, clip, omitBackground: false });
  const dims = PNG.size(file);
  console.log(`${name}: ${dims.width}×${dims.height}`);
  await ctx.close();
  return dims;
}

try {
  await shoot({ name: 'sref-hero-16x9.png', width: 1920, height: 1080 });
  await shoot({ name: 'sref-hero-1x1.png', width: 1440, height: 1440 });
  await shoot({ name: 'oref-bear-tight.png', width: 1200, height: 1200, clipToBear: true, noProps: true });
} finally {
  await browser.close();
  if (server) server.kill();
}
