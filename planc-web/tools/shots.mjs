import { chromium } from 'playwright';
import fs from 'fs';

const OUT = '/home/claude/planc-site/tools/shots';
fs.mkdirSync(OUT, { recursive: true });

const b = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
});
const ctx = await b.newContext({ viewport:{width:390,height:844}, deviceScaleFactor:2 });
const pg = await ctx.newPage();
await pg.goto('file:///home/claude/planc-site/index.html');
await pg.waitForTimeout(2500);          // let the preloader lift

const S = 5200;
const marks = [0, .08, .16, .265, .335, .415, .535, .615, .715, .80, .90, .995, 1.06, 1.18];

for (const m of marks){
  await pg.evaluate(y => scrollTo(0, y), m * S);
  await pg.waitForTimeout(900);
  const name = String(Math.round(m*1000)).padStart(4,'0');
  await pg.screenshot({ path: `${OUT}/${name}.png` });
}
console.log('shots done');
await b.close();
