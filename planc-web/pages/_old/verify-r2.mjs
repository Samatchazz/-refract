import { chromium } from 'playwright';
import path from 'path'; import url from 'url';
const here = path.dirname(url.fileURLToPath(import.meta.url));
const F = url.pathToFileURL(path.join(here, '../proto-journey/planc-journey-proto.html')).href;
const S = 12500; let browser;
for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) { try { browser = await chromium.launch(opt); break; } catch (e) {} }
const PTS=[['sl0',.30],['sl1',.335],['sl2',.352],['sl3',.372],['s1',.415],['s3a',.575],['s3b',.60],['s4',.665],['s5a',.725],['s5b',.742],['s5c',.748]];
async function run(name,w,h){const errs=[];const pg=await browser.newPage({viewport:{width:w,height:h}});
 pg.on('pageerror',e=>errs.push(e.message));await pg.goto(F);await pg.waitForTimeout(3100);
 for(const [t,p] of PTS){await pg.evaluate(v=>window.scrollTo(0,v),Math.round(p*S));await pg.waitForTimeout(1000);
  await pg.screenshot({path:path.join(here,`r2-${name}-${t}.png`)});}
 console.log(name,'errors:',errs.length?errs.join(' | '):'NONE');await pg.close();}
await run('d',1440,900);await run('m',390,844);await browser.close();
