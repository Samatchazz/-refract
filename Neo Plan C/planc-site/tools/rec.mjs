import { chromium } from 'playwright';

const b = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
});
const ctx = await b.newContext({
  viewport:{width:390,height:844}, deviceScaleFactor:2,
  recordVideo:{dir:'/home/claude/planc-site/tools/vid', size:{width:390,height:844}}
});
const pg = await ctx.newPage();
const sleep = ms => pg.waitForTimeout(ms);

await pg.goto('file:///home/claude/planc-site/index.html');
await sleep(2200);                      // watch the preloader lift

const S = 5200;

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

const plan = [[0,.10,900],[.10,.20,1100],[.20,.30,850],[.30,.40,1000],
              [.40,.47,700],[.47,.58,1000],[.58,.66,750],[.66,.78,1100],
              [.78,.88,900],[.88,1.0,1200]];
for (const [a,z,ms] of plan){ await glide(a*S, z*S, ms); await sleep(500); }

await glide(1.0*S, .62*S, 900); await sleep(550);   // scrub backwards — reversible
await glide(.62*S, 1.0*S, 1100); await sleep(500);

await glide(1.0*S, S + 844*1.5, 1400); await sleep(1400);   // into the closing panel

await ctx.close();
await b.close();
console.log('recorded');
