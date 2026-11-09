// เทสเกมจริง: เปิด ขยับเมาส์เป็นคลื่นซ้าย-ขวา ปล่อยให้ autofire เคลียร์ + จับ error
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
const here = path.dirname(fileURLToPath(import.meta.url));
const rec = process.argv[2] === 'rec';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const ctx = await b.newContext({ viewport:{width:390,height:844},
  ...(rec ? { recordVideo:{ dir:path.join(here,'vid'), size:{width:390,height:844} } } : {}) });
const pg = await ctx.newPage();
const errs = [];
pg.on('pageerror', e=>errs.push(String(e)));
pg.on('console', m=>{ if(m.type()==='error') errs.push(m.text()); });
await pg.goto('file://' + path.join(here,'galaga-play.html'));
await pg.waitForTimeout(2800);
if(!rec) await pg.screenshot({ path: path.join(here,'shots','play-intro.png') });

// บินซ้าย-ขวาเป็นคลื่น ~40 วิ ให้ autofire เก็บให้ครบสามเวฟ
const t0 = Date.now();
let i = 0;
while (Date.now()-t0 < 46000) {
  const x = 195 + Math.sin(i/14)*150;
  await pg.mouse.move(x, 700);
  await pg.waitForTimeout(33);
  i++;
  if(!rec && i===260) await pg.screenshot({ path: path.join(here,'shots','play-mid.png') });
  const done = await pg.evaluate(() =>
    document.querySelector('canvas') && window.__done === true).catch(()=>false);
}
if(!rec) await pg.screenshot({ path: path.join(here,'shots','play-end.png') });
await pg.waitForTimeout(600);
await ctx.close(); await b.close();
console.log('errors:', errs.length ? errs.slice(0,6) : 'none');
