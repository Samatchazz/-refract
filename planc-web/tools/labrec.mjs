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

await pg.goto('file:///home/claude/planc-site/tools/lab.html');
await sleep(1400);

// how many modes each demo has
const modeCount = await pg.evaluate(() =>
  [...document.querySelectorAll('.demo')].map(d => d.querySelectorAll('.seg button').length));

// scroll a demo's frame to a comfortable spot on screen
const focus = i => pg.evaluate(k => new Promise(res => {
  const el = document.querySelectorAll('.demo')[k];
  const to = el.getBoundingClientRect().top + scrollY - 70;
  const from = scrollY, t0 = performance.now(), d = 700;
  (function step(t){
    const p = Math.min(1, (t - t0) / d);
    const e = p < .5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
    scrollTo(0, from + (to - from) * e);
    p < 1 ? requestAnimationFrame(step) : res();
  })(t0);
}), i);

const setMode = (i, m) => pg.evaluate(([k, m]) => {
  const el = document.querySelectorAll('.demo')[k];
  el.querySelectorAll('.seg button')[m].click();
}, [i, m]);

// drag the scrubber by hand — a jump would hide the whole point
const glide = (i, a, z, ms) => pg.evaluate(([k, a, z, d]) => new Promise(res => {
  const st = demos[k]; st.auto = false;
  st.p = a; st.range.value = a * 1000;
  const t0 = performance.now();
  (function step(t){
    const p = Math.min(1, (t - t0) / d);
    const e = p < .5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
    st.p = a + (z - a) * e;
    st.range.value = st.p * 1000;
    p < 1 ? requestAnimationFrame(step) : res();
  })(t0);
}), [i, a, z, ms]);

// title card
await sleep(1500);

for (let i = 0; i < modeCount.length; i++){
  await focus(i);
  await sleep(400);
  for (let m = 0; m < modeCount[i]; m++){
    await setMode(i, m);
    await sleep(350);
    await glide(i, 0, 1, 2100);
    await sleep(450);
  }
  // last mode is always the correct one — prove it scrubs backwards cleanly
  await glide(i, 1, 0, 1500);
  await sleep(650);
}

await pg.evaluate(() => scrollTo({ top: document.body.scrollHeight, behavior:'smooth' }));
await sleep(1800);

await ctx.close();
await b.close();
console.log('recorded');
