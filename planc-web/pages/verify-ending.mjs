import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;
const S = 12500;
let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) {
  try { browser = await chromium.launch(opt); break; } catch (e) {}
}
async function run(name, w, h, points) {
  const errs = [];
  const pg = await browser.newPage({ viewport: { width: w, height: h } });
  pg.on('pageerror', e => errs.push(e.message));
  await pg.goto(F); await pg.waitForTimeout(3100);
  for (const [tag, p, tap] of points) {
    await pg.evaluate(v => window.scrollTo(0, v), Math.round(p * S));
    await pg.waitForTimeout(tap ? 1500 : 1100);
    if (tap) { await pg.click('#logoBtn'); await pg.waitForTimeout(1400); }
    await pg.screenshot({ path: path.join(here, `ve-${name}-${tag}.png`) });
  }
  await pg.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await pg.waitForTimeout(1000);
  await pg.screenshot({ path: path.join(here, `ve-${name}-end.png`) });
  console.log(name, 'errors:', errs.length ? errs.join(' | ') : 'NONE');
  await pg.close();
}
await run('d', 1440, 900, [
  ['hero', 0.11], ['ufo', 0.30], ['board', 0.415], ['wall', 0.77, true],
  ['bridge', 0.84], ['leap', 0.949], ['grab', 0.957], ['slide', 0.975], ['down', 0.99],
]);
await run('m', 390, 844, [
  ['hero', 0.11], ['board', 0.415], ['wall', 0.77, true], ['bridge', 0.84], ['slide', 0.972],
]);
// preloader revisit timing
const pg = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await pg.goto(F); await pg.waitForTimeout(3000);
await pg.reload(); await pg.waitForTimeout(900);
console.log('preloader gone after 0.9s on revisit:',
  await pg.evaluate(() => document.getElementById('preload').classList.contains('gone')));
await browser.close(); console.log('done');
