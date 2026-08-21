import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(HERE);

// portable launch: bundled chromium if installed, else system Edge/Chrome
async function launch(){
  try { return await chromium.launch(); } catch (e) {}
  for (const channel of ['msedge', 'chrome']){
    try { return await chromium.launch({ channel }); } catch (e) {}
  }
  throw new Error('no chromium/edge/chrome available for playwright');
}

const b = await launch();
const pg = await b.newPage({ viewport:{width:390,height:844}, deviceScaleFactor:2 });
await pg.goto('file:///' + path.join(ROOT, 'index.html').replace(/\\/g,'/'));
await pg.waitForTimeout(2200);

const S = 13000;
const stops = [0,.05,.12,.20,.26,.33,.42,.47,.54,.615,.70,.78,.86,.955,1.0];
let n = 0;
for (const p of stops){
  await pg.evaluate(y => scrollTo(0, y), p * S);
  await pg.waitForTimeout(650);
  await pg.screenshot({ path: path.join(HERE, 'shots', `p${String(n).padStart(2,'0')}-${String(p).replace('.','_')}.png`) });
  n++;
}
// closing panel
await pg.evaluate(y => scrollTo(0, y), S + 900);
await pg.waitForTimeout(700);
await pg.screenshot({ path: path.join(HERE, 'shots', 'p99-end.png') });

await b.close();
console.log('shots done:', n + 1);
