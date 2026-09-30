// which parts of the game script never run during a full walk (both screen sizes, scrub back, ask no/yes, to the footer)
import { chromium } from 'playwright';
const F='file:///Z:/Claude Code/planc-web/proto-journey/planc-journey-proto.html';
let browser; for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) { try { browser = await chromium.launch(opt); break; } catch (e) {} }
const unc = new Map(); let src=null, runs=0;
for (const [w,h] of [[1440,900],[390,844]]) {
  const pg = await browser.newPage({ viewport: { width: w, height: h } });
  await pg.coverage.startJSCoverage({ reportAnonymousScripts: true });
  await pg.goto(F); await pg.waitForTimeout(3200);
  const at = (p,ms=60) => pg.evaluate(v => scrollTo(0, Math.round(v*12500)), p).then(()=>pg.waitForTimeout(ms));
  const tap = id => pg.evaluate(i => document.getElementById(i).click(), id);
  for (let p=0;p<=0.80;p+=0.004) await at(p);
  for (let p=0.80;p>=0.30;p-=0.02) await at(p);
  for (let p=0.30;p<=0.86;p+=0.01) await at(p);
  await at(0.9,300);
  await pg.waitForSelector('#help.on', { timeout: 20000 }); await pg.waitForTimeout(1800); await tap('helpNo');
  await pg.waitForTimeout(800); await pg.waitForSelector('#help.on', { timeout: 20000 }); await pg.waitForTimeout(1800); await tap('helpYes'); await pg.waitForTimeout(1500);
  for (let p=0.80;p<=1.07;p+=0.003) await at(p);
  for (let p=1.07;p>=0.7;p-=0.02) await at(p);
  await pg.evaluate(()=>scrollTo(0,document.body.scrollHeight)); await pg.waitForTimeout(1500);
  await pg.evaluate(()=>window.dispatchEvent(new Event('resize'))); await pg.waitForTimeout(800);
  const cov = await pg.coverage.stopJSCoverage();
  const main = cov.filter(c => c.source && c.source.includes('const POLE_P')).sort((a,b)=>b.source.length-a.source.length)[0];
  src = main.source; runs++;
  const dead = [];
  for (const fn of main.functions) for (const r of fn.ranges) if (r.count === 0) dead.push([r.startOffset, r.endOffset, fn.functionName]);
  const keys = new Set(dead.map(d=>d[0]+'-'+d[1]));
  if (runs===1) dead.forEach(d=>unc.set(d[0]+'-'+d[1], d)); else for (const k of [...unc.keys()]) if (!keys.has(k)) unc.delete(k);
  await pg.close();
}
const lineOf = off => src.slice(0,off).split('\n').length;
const list = [...unc.values()].filter(d=>d[1]-d[0]>60).sort((a,b)=>a[0]-b[0]);
const top = list.filter(d => !list.some(o => o!==d && o[0]<=d[0] && o[1]>=d[1] && (o[1]-o[0])>(d[1]-d[0])));
let tot=0; for (const d of top) { tot+=d[1]-d[0]; console.log(`L${lineOf(d[0])}-${lineOf(d[1])} (${d[1]-d[0]}ch) fn=${d[2]||'(anon)'} :: ${src.slice(d[0], d[0]+110).replace(/\s+/g,' ')}`); }
console.log('uncovered total chars', tot, 'of', src.length);
await browser.close();
