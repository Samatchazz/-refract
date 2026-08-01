// อัดวิดีโอเดินดูหน้าเทียบทิศทางศิลป์ — Mat เปิด HTML บนมือถือไม่ค่อยได้ เลยต้องมี mp4
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const ctx = await b.newContext({
  viewport: { width: 390, height: 844 },
  recordVideo: { dir: path.join(here, 'stylevid'), size: { width: 390, height: 844 } },
});
const pg = await ctx.newPage();
await pg.goto('file://' + path.join(here, 'style-ab.html'));
await pg.waitForTimeout(1400);

// เลื่อนแบบมีความเร่ง ไม่ใช่กระโดด — จะได้เห็นว่าตอนเลื่อนจริงมันรู้สึกยังไง
const glideTo = (y, ms) => pg.evaluate(([y, d]) => new Promise(res => {
  const a = scrollY, t0 = performance.now();
  (function step(t){
    const p = Math.min(1, (t - t0) / d);
    const e = p < .5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
    scrollTo(0, a + (y - a) * e);
    p < 1 ? requestAnimationFrame(step) : res();
  })(t0);
}), [y, ms]);

const bottom = () => pg.evaluate(() => document.body.scrollHeight - innerHeight);

for (const dark of [false, true]) {
  if (dark) { await pg.click('#dark'); await pg.waitForTimeout(900); }
  await pg.click('.bar .seg button[data-v="all"]');
  await pg.waitForTimeout(700);
  await glideTo(await bottom(), 7000);
  await pg.waitForTimeout(600);
  await glideTo(0, 2200);
  await pg.waitForTimeout(500);
  // แล้วดูทีละใบ จะได้เทียบใบต่อใบแบบเต็มจอ
  for (const k of ['swiss', 'riso', 'hand']) {
    await pg.click(`.bar .seg button[data-v="${k}"]`);
    await pg.waitForTimeout(1500);
    await glideTo(330, 1300);
    await pg.waitForTimeout(1400);
    await glideTo(0, 900);
    await pg.waitForTimeout(400);
  }
}
await pg.waitForTimeout(600);
await ctx.close();
await b.close();
console.log('ok');
