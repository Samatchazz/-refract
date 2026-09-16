import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;
const S = 12500;
let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) {
  try { browser = await chromium.launch(opt); break; } catch (e) {}
}
// scroll-space points (after sign 2 the world lags scroll by HOLD2=.04)
const PTS = [
  ['slice', 0.32], ['s1', 0.415], ['s2-stop', 0.49], ['s2-chat', 0.505], ['s3', 0.59],
  ['gust', 0.598], ['drone', 0.625], ['s4', 0.665], ['s5', 0.742], ['strike', 0.751],
  ['black', 0.762], ['wall', 0.775, true], ['bridge', 0.835], ['bridge2', 0.88], ['pole', 0.998],
];
async function run(name, w, h, pts) {
  const errs = [];
  const pg = await browser.newPage({ viewport: { width: w, height: h } });
  pg.on('pageerror', e => errs.push(e.message));
  await pg.goto(F); await pg.waitForTimeout(3100);
  for (const [tag, p, tap] of pts) {
    await pg.evaluate(v => window.scrollTo(0, v), Math.round(p * S));
    await pg.waitForTimeout(tap ? 3200 : 1100);
    if (tap) { await pg.click('#logoBtn',{force:true}); await pg.waitForTimeout(1500); }
    await pg.screenshot({ path: path.join(here, `st-${name}-${tag}.png`) });
  }
  console.log(name, 'errors:', errs.length ? errs.join(' | ') : 'NONE');
  await pg.close();
}
await run('d', 1440, 900, PTS);
await run('m', 390, 844, [['s2-chat', 0.505], ['s4', 0.665], ['s5', 0.73], ['black', 0.762]]);
await browser.close(); console.log('done');
