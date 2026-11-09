// Secret-menu cup toppings check: scrolls case-secret-menu.html through the
// build chapters and screenshots each beat (dev server on :5400 first).
//   node scripts/_toppings-shots.mjs <out-dir> [portrait]
// PW_CHROME=/path/to/chrome picks a browser binary (cloud box: /opt/pw-browsers/chromium).
import { chromium } from 'playwright';
const out = process.argv[2] || 'pages/shots';
const portrait = process.argv[3] === 'portrait';
const launch = { headless: true, args: ['--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] };
if (process.env.PW_CHROME) launch.executablePath = process.env.PW_CHROME;
const browser = await chromium.launch(launch);
const ctx = await browser.newContext(portrait
  ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
page.on('response', (r) => { if (r.url().includes('/models/')) console.log('model', r.status(), r.url().split('/').pop()); });
await page.goto('http://127.0.0.1:5400/case-secret-menu.html', { waitUntil: 'load' });
await page.waitForTimeout(5000);
const H = await page.evaluate(() => innerHeight);
const tops = await page.evaluate(() => [...document.querySelectorAll('.post-chapter--build')].map((s) => ({ top: s.getBoundingClientRect().top + scrollY, h: s.offsetHeight })));
// Stage.buildEffects reads chapter i when rect.top <= mid; progress = (mid - top) / height
const at = async (ch, t, name) => {
  const y = tops[ch].top + t * tops[ch].h - H * 0.5;
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(2200);
  await page.screenshot({ path: `${out}/${portrait ? 'm-' : ''}${name}.png` });
};
await at(0, 0.95, 'ch0-end');
await at(1, 0.6, 'ch1-poured');
await at(1, 0.78, 'ch1-cream');
await at(1, 0.88, 'ch1-dust');
await at(1, 0.99, 'ch1-done');
await at(2, 0.3, 'ch2-lid');
await at(2, 0.9, 'ch2-crowd');
console.log('errors:', errs);
await browser.close();
