import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;
const S = 12500;

let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) {
  try { browser = await chromium.launch(opt); break; } catch (e) {}
}

const P = [
  ['00-hero', 0.0], ['01-fall', 0.05], ['02-story1', 0.11], ['03-boxes', 0.19],
  ['04-slice', 0.315], ['05-dark-in', 0.38], ['06-dark-out', 0.45],
  ['07-shark1', 0.53], ['08-shark3', 0.65], ['09-story2out', 0.70],
  ['10-chasm', 0.782], ['11-bridge', 0.87], ['12-flag', 0.93], ['13-end', 1.0],
];
const pg = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await pg.goto(F); await pg.waitForTimeout(3100);
for (const [name, p] of P) {
  await pg.evaluate(v => window.scrollTo(0, v), Math.round(p * S));
  await pg.waitForTimeout(1100);
  await pg.screenshot({ path: path.join(here, `aud-d-${name}.png`) });
}
const total = await pg.evaluate(() => document.body.scrollHeight - innerHeight);
console.log('desktop scrollable:', total);
await pg.close();

const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
await m.goto(F); await m.waitForTimeout(3100);
for (const [name, p] of [['00-hero', 0.0], ['02-story1', 0.11], ['07-shark1', 0.53], ['13-end', 1.0]]) {
  await m.evaluate(v => window.scrollTo(0, v), Math.round(p * S));
  await m.waitForTimeout(1100);
  await m.screenshot({ path: path.join(here, `aud-m-${name}.png`) });
}
await browser.close(); console.log('done');
