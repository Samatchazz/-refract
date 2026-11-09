// สกรีนช็อต proto galaga หลายจุด — ตรวจด้วยการเรนเดอร์เท่านั้น
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
const here = path.dirname(fileURLToPath(import.meta.url));
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const pg = await (await b.newContext({ viewport:{width:390,height:844}, deviceScaleFactor:2 })).newPage();
await pg.goto('file://' + path.join(here,'galaga-proto.html'));
await pg.waitForTimeout(900);
const P = [0, .05, .10, .17, .22, .30, .37, .44, .50, .63, .70, .78, .90, 1];
const max = await pg.evaluate(() => document.body.scrollHeight - innerHeight); // ต้องใช้ scrollSpace
for (let i=0;i<P.length;i++){
  await pg.evaluate(y=>scrollTo(0,y), Math.round(P[i]*max));
  await pg.waitForTimeout(650);
  await pg.screenshot({ path: path.join(here,'shots',`g${String(i).padStart(2,'0')}-p${P[i]}.png`) });
}
await b.close(); console.log('ok');
