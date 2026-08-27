import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;

let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) {
  try { browser = await chromium.launch(opt); break; } catch (e) {}
}
const pg = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await pg.goto(F); await pg.waitForTimeout(3100);

// walk into the level a bit, then open pricing from the game nav
await pg.evaluate(() => window.scrollTo(0, 2600)); await pg.waitForTimeout(1200);
const beforeY = await pg.evaluate(() => window.scrollY);
await pg.click('a.navlk[href="#pricing"]'); await pg.waitForTimeout(1300);
console.log('hash after open:', await pg.evaluate(() => location.hash));
await pg.screenshot({ path: path.join(here, 'one-1-pricing-top.png') });

// scroll inside the overlay
await pg.evaluate(() => { const o = document.getElementById('pgPricing'); o.scrollTop = o.scrollHeight * 0.45; });
await pg.waitForTimeout(1400);
await pg.screenshot({ path: path.join(here, 'one-2-pricing-mid.png') });
const counts = await pg.evaluate(() =>
  [...document.querySelectorAll('#pgPricing [data-count]')].map(n => n.textContent));
console.log('counts:', counts.join(' / '));

// go back to the game via หน้าหลัก
await pg.click('#pgPricing a[href="#journey"]'); await pg.waitForTimeout(900);
const afterY = await pg.evaluate(() => window.scrollY);
console.log('game scrollY before/after:', beforeY, '/', afterY,
  beforeY === afterY ? 'PRESERVED' : 'MOVED');
await pg.screenshot({ path: path.join(here, 'one-3-back-to-game.png') });

// browser back button should reopen pricing
await pg.goBack(); await pg.waitForTimeout(900);
console.log('after back:', await pg.evaluate(() =>
  location.hash + ' open=' + document.getElementById('pgPricing').classList.contains('open')));

// mobile sanity
const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
await m.goto(F + '#pricing'); await m.waitForTimeout(2600);
await m.screenshot({ path: path.join(here, 'one-4-mobile-pricing.png') });
await browser.close();
console.log('done');
