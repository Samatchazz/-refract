import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true, channel: 'chrome', args: ['--ignore-gpu-blocklist','--use-gl=angle','--use-angle=d3d11'] });
const [W, H, tag] = [Number(process.argv[2]), Number(process.argv[3]), process.argv[4]];
const mobile = W < 700;
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile });
const page = await ctx.newPage();
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type()==='error') errs.push(m.text()); });
await page.goto('http://localhost:5400/about.html', { waitUntil: 'load' });
await page.waitForTimeout(4500);
const tops = await page.evaluate(() => [...document.querySelectorAll('[data-chapter]')].map(s => s.offsetTop));
const H2 = await page.evaluate(() => innerHeight);
let i = 0;
for (const top of tops) {
  for (const f of [0.15, 0.8]) {
    const sec = await page.evaluate((i) => document.querySelectorAll('[data-chapter]')[i].offsetHeight, i);
    const y = Math.max(0, top - H2 * 0.4 + sec * f * 0.6);
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(f === 0.15 ? 2600 : 1400);
    await page.screenshot({ path: `refs/mobile/${tag}-ch${i}-${f}.png` });
  }
  i++;
}
console.log(tag, 'counter =', await page.evaluate(() => document.querySelector('[data-count]')?.textContent), 'errors:', errs);
await browser.close();
