// สกรีนช็อตหน้าเทียบทิศทางศิลป์ ทีละใบ ทั้งด่านสว่างและด่านมืด
// ต้องระบุ executablePath เองในแซนด์บ็อกซ์ — npx playwright install ไม่ช่วย
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(here, 'styleshots');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const pg = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await pg.goto('file://' + path.join(here, 'style-ab.html'));
await pg.waitForTimeout(900);

for (const dark of [false, true]) {
  if (dark) await pg.click('#dark');
  for (const k of ['swiss', 'riso', 'hand']) {
    await pg.click(`.bar .seg button[data-v="${k}"]`);
    await pg.waitForTimeout(400);
    const card = await pg.$(`section.card[data-k="${k}"]`);
    await card.screenshot({ path: path.join(OUT, `${k}-${dark ? 'dark' : 'light'}.png`) });
  }
  await pg.click('.bar .seg button[data-v="all"]');
  await pg.waitForTimeout(300);
  await pg.screenshot({ path: path.join(OUT, `page-${dark ? 'dark' : 'light'}.png`), fullPage: true });
}
await b.close();
console.log('ok');
