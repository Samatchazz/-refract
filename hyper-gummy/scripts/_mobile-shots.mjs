import { chromium } from 'playwright';
const base = 'http://localhost:5400';
const browser = await chromium.launch({ headless: true, channel: 'chrome',
  args: ['--ignore-gpu-blocklist', '--use-gl=angle', '--use-angle=d3d11', '--enable-gpu-rasterization'] });
const [W, H, tag] = [Number(process.argv[2]||430), Number(process.argv[3]||932), process.argv[4]||'a'];
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
await page.goto(base + '/' + (process.argv[5]||''), { waitUntil: 'load' });
await page.waitForTimeout(5000);
for (const y of (process.argv[6]||'0,250,500,800').split(',').map(Number)) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(1500);
  const info = await page.evaluate(() => {
    const bb = window.__stage.bearBox(0);
    const intro = document.querySelector('.hero-intro')?.getBoundingClientRect();
    return { scrollY, bear: [bb.x|0, bb.y|0, (bb.x+bb.width)|0, (bb.y+bb.height)|0], intro: intro && [intro.left|0, intro.top|0, intro.right|0, intro.bottom|0] };
  });
  console.log(tag, y, JSON.stringify(info));
  await page.screenshot({ path: `refs/mobile/${tag}-${y}.png` });
}
await browser.close();
