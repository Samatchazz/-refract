import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;
const S = 12500; let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) { try { browser = await chromium.launch(opt); break; } catch (e) {} }
const PTS=[['s4a',.655],['s4b',.668],['s4c',.675],['s5',.70],['s5b',.712],['w1',.74],['w2',.755],['w3',.77]];
async function run(name,w,h){const errs=[];const pg=await browser.newPage({viewport:{width:w,height:h}});
 pg.on('pageerror',e=>errs.push(e.message));await pg.goto(F);await pg.waitForTimeout(3100);
 for(const [t,p,wait] of PTS){await pg.evaluate(v=>window.scrollTo(0,v),Math.round(p*S));await pg.waitForTimeout(wait||1000);
  await pg.screenshot({path:path.join(here,`r4-${name}-${t}.png`)});}
 console.log(name,'errors:',errs.length?errs.join(' | '):'NONE');await pg.close();}
await run('d',1440,900);await run('m',390,844);await browser.close();
