import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import path from 'path';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VID  = path.join(HERE, 'vid');

async function launch(){
  try { return await chromium.launch(); } catch (e) {}
  for (const c of ['msedge', 'chrome']){
    try { return await chromium.launch({ channel: c }); } catch (e) {}
  }
  throw new Error('no browser');
}

const b = await launch();
const ctx = await b.newContext({
  viewport:{width:390,height:844}, deviceScaleFactor:2,
  recordVideo:{dir:VID, size:{width:390,height:844}}
});
const pg = await ctx.newPage();
const sleep = ms => pg.waitForTimeout(ms);
await pg.goto('file:///' + path.join(HERE, 'proto.html').replace(/\\/g,'/'));
await sleep(2600);                       // the bobbing-cat preloader

const S = 12500;
const glide = (from, to, ms) => pg.evaluate(([a, z, d]) => new Promise(res=>{
  const t0 = performance.now();
  (function step(t){
    const k = Math.min(1, (t - t0) / d);
    const e = k < .5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2)/2;
    scrollTo(0, a + (z - a) * e);
    k < 1 ? requestAnimationFrame(step) : res();
  })(t0);
}), [from, to, ms]);

// scene 1: tiny cat head-bumps three treasure boxes
for (const [a,z,ms] of [[0,.055,1900],[.055,.115,1800],[.115,.175,1800],[.175,.23,1700]]){
  await glide(a*S, z*S, ms); await sleep(650);
}
// scene 2: gear + the dark editing stretch
await glide(.22*S, .34*S, 1900); await sleep(500);
await glide(.34*S, .47*S, 1900); await sleep(500);
// scene 3: three bites
for (const [a,z,ms] of [[.47,.55,1500],[.55,.61,1300],[.61,.68,1400]]){
  await glide(a*S, z*S, ms); await sleep(450);
}
// scene 4: the wall, the doomed leap, the blink
await glide(.68*S, .76*S, 1400); await sleep(500);
await glide(.76*S, .806*S, 1600); await sleep(900);
// the tap — logo goes rainbow first, hold so the viewer sees it
await sleep(700);
await pg.click('#logoBtn', {force:true});
await sleep(1400);                        // bridge draws in
// cross the rainbow, grow back, ending
await glide(.806*S, .93*S, 2600); await sleep(400);
await glide(.93*S, 1.0*S, 1500); await sleep(600);
// prove it scrubs: back into the bridge, then out
await glide(1.0*S, .84*S, 1200); await sleep(500);
await glide(.84*S, 1.0*S, 1200); await sleep(500);
await glide(1.0*S, S + 844*1.6, 1600); await sleep(1200);

const video = pg.video();
await ctx.close(); await b.close();

const webm = await video.path();
const mp4 = path.join(HERE, 'planc-journey-proto.mp4');
for (const FF of ['ffmpeg', 'C:\\Program Files\\FreeDownloadManager.ORG\\Free Download Manager\\ffmpeg.exe']){
  try {
    execFileSync(FF, ['-y','-i',webm,'-c:v','mpeg4','-q:v','7','-pix_fmt','yuv420p',mp4], {stdio:'ignore'});
    console.log('recorded', mp4); process.exit(0);
  } catch (e) {}
}
console.log('webm only:', webm);
