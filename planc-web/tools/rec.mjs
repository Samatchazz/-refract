import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(HERE);
const VID  = path.join(HERE, 'vid');

async function launch(){
  try { return await chromium.launch(); } catch (e) {}
  for (const channel of ['msedge', 'chrome']){
    try { return await chromium.launch({ channel }); } catch (e) {}
  }
  throw new Error('no chromium/edge/chrome available for playwright');
}

const b = await launch();
const ctx = await b.newContext({
  viewport:{width:390,height:844}, deviceScaleFactor:2,
  recordVideo:{dir:VID, size:{width:390,height:844}}
});
const pg = await ctx.newPage();
const sleep = ms => pg.waitForTimeout(ms);

await pg.goto('file:///' + path.join(ROOT, 'index.html').replace(/\\/g,'/'));
await sleep(2200);                      // watch the preloader lift

const S = 10400;

// hand-rolled easing scroll — a jump-cut scrollTo would hide the whole point,
// which is that the gait is coupled to scroll SPEED
const glide = (from, to, ms) => pg.evaluate(([a, z, d]) => new Promise(res=>{
  const t0 = performance.now();
  (function step(t){
    const k = Math.min(1, (t - t0) / d);
    const e = k < .5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2)/2;
    scrollTo(0, a + (z - a) * e);
    k < 1 ? requestAnimationFrame(step) : res();
  })(t0);
}), [from, to, ms]);

// show the chrome first: menu opens, then closes
await pg.click('#menuBtn'); await sleep(1100);
await pg.click('#menuBtn'); await sleep(700);

const plan = [[0,.10,1400],[.10,.20,1700],[.20,.30,1500],[.30,.40,1500],
              [.40,.47,1100],[.47,.58,1600],[.58,.66,1300],[.66,.78,1700],
              [.78,.88,1400],[.88,1.0,1900]];
for (const [a,z,ms] of plan){ await glide(a*S, z*S, ms); await sleep(500); }

await glide(1.0*S, .62*S, 900); await sleep(550);   // scrub backwards — reversible
await glide(.62*S, 1.0*S, 1100); await sleep(500);

await glide(1.0*S, S + 844*1.5, 1400); await sleep(1400);   // into the closing panel

const video = pg.video();
await ctx.close();
await b.close();

// webm -> mp4 so phones can play it. Playwright's own ffmpeg encodes
// VP8 only, so use a real ffmpeg: PATH first, then the one FDM ships.
const webm = await video.path();
const candidates = [
  'ffmpeg',
  'C:\\Program Files\\FreeDownloadManager.ORG\\Free Download Manager\\ffmpeg.exe',
];
const mp4 = path.join(ROOT, 'dist', 'planc-site-v4.mp4');
let done = false;
for (const FF of candidates){
  try {
    // -c:v mpeg4: the FDM build (ffmpeg 3.0) has no libx264; MPEG-4 part 2
    // in an .mp4 container still plays everywhere that matters here
    execFileSync(FF, ['-y', '-i', webm, '-c:v', 'mpeg4', '-q:v', '7',
                      '-pix_fmt', 'yuv420p', mp4], {stdio:'ignore'});
    done = true; break;
  } catch (e) {}
}
console.log(done ? 'recorded ' + mp4 : 'recorded webm only (no ffmpeg): ' + webm);
