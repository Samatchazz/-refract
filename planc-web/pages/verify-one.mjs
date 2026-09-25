// เว็บหน้าเดียว (25 ก.ย.): nav แคปซูล · ตอนจบ "ให้ planc* ช่วยไหม" · หน้าธุรกิจต่อท้าย · ลูปหลับ
import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;
const S = 12500, HOLD2 = 0.04;
let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) {
  try { browser = await chromium.launch(opt); break; } catch (e) {}
}
const shot = (pg, n) => pg.screenshot({ path: path.join(here, `one-${n}.png`) });

async function run(name, w, h) {
  const errs = [];
  const pg = await browser.newPage({ viewport: { width: w, height: h } });
  pg.on('pageerror', e => errs.push(e.message));
  await pg.goto(F); await pg.waitForTimeout(3100);
  await pg.evaluate(() => scrollTo(0, 0.11 * 12500)); await pg.waitForTimeout(1000);
  await shot(pg, `${name}-1-nav`);
  // the wall: 2 deaths then freeze → the question
  await pg.evaluate(v => scrollTo(0, v), Math.round(0.80 * S)); await pg.waitForTimeout(1500);
  await shot(pg, `${name}-2-wall`);
  await pg.waitForTimeout(6000);
  const asking = await pg.evaluate(() => document.getElementById('help').classList.contains('on'));
  await shot(pg, `${name}-3-ask`);
  await pg.click('#helpNo'); await pg.waitForTimeout(3600);
  const askAgain = await pg.evaluate(() => document.getElementById('help').classList.contains('on'));
  await pg.click('#helpYes'); await pg.waitForTimeout(1500);
  const bridged = await pg.evaluate(() => document.body.classList.contains('bridged'));
  await shot(pg, `${name}-4-bridged`);
  await pg.evaluate(v => scrollTo(0, v), Math.round(0.87 * S)); await pg.waitForTimeout(1200);
  await shot(pg, `${name}-5-cross`);
  await pg.evaluate(v => scrollTo(0, v), Math.round(0.885 * S)); await pg.waitForTimeout(1200);
  await shot(pg, `${name}-5b-fireworks`);
  await pg.evaluate(v => scrollTo(0, v), Math.round(1.012 * S)); await pg.waitForTimeout(1500);
  const colored = await pg.evaluate(() => document.body.classList.contains('colored'));
  await shot(pg, `${name}-5c-color`);
  // into the business pages
  for (const id of ['pricing', 'about', 'contact']) {
    await pg.evaluate(i => { const a = document.querySelector(`a.navlk[href="#${i}"]`); a ? a.click() : scrollTo(0, document.getElementById(i).offsetTop); }, id);
    await pg.waitForTimeout(1500);
    await shot(pg, `${name}-6-${id}`);
  }
  await pg.waitForTimeout(600);
  const past = await pg.evaluate(() => document.body.classList.contains('past'));
  const stageVis = await pg.evaluate(() => getComputedStyle(document.getElementById('stage')).visibility);
  const counts = await pg.evaluate(() => [...document.querySelectorAll('[data-count]')].map(n => n.textContent).join('/'));
  await pg.evaluate(() => scrollTo(0, document.body.scrollHeight)); await pg.waitForTimeout(1200);
  await shot(pg, `${name}-7-footer`);
  // back to the top via the logo
  await pg.click('#logoBtn'); await pg.waitForTimeout(1200);
  const y0 = await pg.evaluate(() => scrollY);
  console.log(name, { asking, askAgain, bridged, colored, past, stageVis, counts, y0, errors: errs.length ? errs.join(' | ') : 'NONE' });
  await pg.close();
}
await run('d', 1440, 900);
await run('m', 390, 844);

// skip test: fresh page, jump straight to pricing from the nav, then scroll back up — no snap to the cliff
const pg = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await pg.goto(F); await pg.waitForTimeout(3000);
await pg.evaluate(() => document.querySelector('a.navlk[href="#about"]').click()); await pg.waitForTimeout(1500);
const skipBridged = await pg.evaluate(() => document.body.classList.contains('bridged'));
await pg.evaluate(v => scrollTo(0, v), Math.round(0.90 * S)); await pg.waitForTimeout(1500);
const yBack = await pg.evaluate(() => scrollY);
await shot(pg, 'skip-back');
console.log('skip:', { skipBridged, yBack, expected: Math.round(0.90 * S) });
await browser.close(); console.log('done');
