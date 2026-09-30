import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const page_url = url.pathToFileURL(path.join(here, 'pricing.html')).href;

let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) {
  try { browser = await chromium.launch(opt); break; } catch (e) {}
}
if (!browser) { console.error('no browser'); process.exit(1); }

for (const [name, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
  const pg = await browser.newPage({ viewport: { width: w, height: h } });
  await pg.goto(page_url); await pg.waitForTimeout(1800);
  const full = await pg.evaluate(() => document.body.scrollHeight);
  await pg.screenshot({ path: path.join(here, `shot-${name}-top.png`) });
  await pg.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.45));
  await pg.waitForTimeout(300);
  await pg.screenshot({ path: path.join(here, `shot-${name}-mid.png`) });
  await pg.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await pg.waitForTimeout(300);
  await pg.screenshot({ path: path.join(here, `shot-${name}-end.png`) });
  console.log(name, w + 'x' + h, 'pageH', full);
  await pg.close();
}
await browser.close();
console.log('done');
