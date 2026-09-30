import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = f => url.pathToFileURL(path.join(here, f)).href;

let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) {
  try { browser = await chromium.launch(opt); break; } catch (e) {}
}

// 1) pricing: reveal states + countup at mid-scroll, desktop + mobile
for (const [name, w, h] of [['p-desktop', 1440, 900], ['p-mobile', 390, 844]]) {
  const pg = await browser.newPage({ viewport: { width: w, height: h } });
  await pg.goto(F('pricing.html')); await pg.waitForTimeout(2200);
  await pg.screenshot({ path: path.join(here, `chk-${name}-top.png`) });
  await pg.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.42));
  await pg.waitForTimeout(1400);
  await pg.screenshot({ path: path.join(here, `chk-${name}-band.png`) });
  const counts = await pg.evaluate(() =>
    [...document.querySelectorAll('[data-count]')].map(n => n.textContent));
  console.log(name, 'counts:', counts.join(' / '));
  await pg.close();
}

// 2) game proto nav (top of level), desktop + mobile
for (const [name, w, h] of [['g-desktop', 1440, 900], ['g-mobile', 390, 844]]) {
  const pg = await browser.newPage({ viewport: { width: w, height: h } });
  await pg.goto(F('../proto-journey/planc-journey-proto.html'));
  await pg.waitForTimeout(3100);
  await pg.evaluate(() => window.scrollTo(0, 400)); await pg.waitForTimeout(1100);
  await pg.screenshot({ path: path.join(here, `chk-${name}-nav.png`) });
  const link = await pg.evaluate(() => {
    const a = document.querySelector('.navlk');
    const r = a.getBoundingClientRect();
    return { href: a.getAttribute('href'), x: r.x, w: r.width, text: a.textContent };
  });
  console.log(name, 'nav link:', JSON.stringify(link));
  await pg.close();
}
await browser.close();
console.log('done');
