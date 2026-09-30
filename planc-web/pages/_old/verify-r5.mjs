import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;
const S = 12500; let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) { try { browser = await chromium.launch(opt); break; } catch (e) {} }
async function run(name,w,h){const errs=[];const pg=await browser.newPage({viewport:{width:w,height:h}});
 pg.on('pageerror',e=>errs.push(e.message));await pg.goto(F);await pg.waitForTimeout(3100);
 for(let p=.56;p<=.785;p+=.015){await pg.evaluate(v=>window.scrollTo(0,v),Math.round(p*S));await pg.waitForTimeout(900);
  await pg.screenshot({path:path.join(here,`r5-${name}-${Math.round(p*1000)}.png`)});}
 console.log(name,'errors:',errs.length?errs.join(' | '):'NONE');await pg.close();}
await run('d',1440,900);await run('x',1920,1080);await browser.close();
