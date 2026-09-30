import { chromium } from 'playwright';
const F='file:///Z:/Claude Code/planc-web/proto-journey/planc-journey-proto.html';
let browser; for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) { try { browser = await chromium.launch(opt); break; } catch (e) {} }
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
const pg = await ctx.newPage(); const errs=[]; pg.on('pageerror',e=>errs.push(e.message));
const cdp = await ctx.newCDPSession(pg);
await pg.goto(F); await pg.waitForTimeout(3200);
await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
async function frames(label, fn, ms){
  await pg.evaluate(() => { window.__f=[]; let l=performance.now(); window.__run=true; (function t(n){ window.__f.push(n-l); l=n; if(window.__run) requestAnimationFrame(t); })(l); });
  await fn(); await pg.waitForTimeout(ms);
  const f = await pg.evaluate(() => { window.__run=false; return window.__f.slice(2); });
  const s=[...f].sort((a,b)=>a-b); const avg=f.reduce((a,b)=>a+b,0)/f.length;
  console.log(label, 'frames', f.length, 'avg ms', avg.toFixed(1), 'p95', s[Math.floor(s.length*.95)].toFixed(1), 'worst', s[s.length-1].toFixed(0), '>33ms', f.filter(x=>x>33).length);
}
const S=12500;
const scrollThrough = (a,b,ms) => pg.evaluate(([a,b,ms]) => { const t0=performance.now(); (function st(n){ const k=Math.min(1,(n-t0)/ms); scrollTo(0,a+(b-a)*k); if(k<1) requestAnimationFrame(st); })(t0); }, [a*S,b*S,ms]);
await frames('IDLE light', async()=>{ await pg.evaluate(()=>scrollTo(0,0.1*12500)); }, 3000);
await frames('SCROLL light 0.05→0.35', ()=>scrollThrough(0.05,0.35,4000), 4200);
await frames('SCROLL storm 0.40→0.78', ()=>scrollThrough(0.40,0.78,4000), 4200);
await frames('IDLE storm', async()=>{ await pg.evaluate(()=>scrollTo(0,0.6*12500)); }, 3000);
await cdp.send('Profiler.enable'); await cdp.send('Profiler.start');
await scrollThrough(0.40,0.70,3000); await pg.waitForTimeout(3200);
const { profile } = await cdp.send('Profiler.stop');
const self={}; const dt=profile.timeDeltas; const byId=Object.fromEntries(profile.nodes.map(n=>[n.id,n]));
profile.samples.forEach((id,i)=>{ const n=byId[id]; const k=n.callFrame.functionName||'(anon)'; self[k]=(self[k]||0)+dt[i]/1000; });
console.log('PROFILE:', Object.entries(self).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k,v])=>k+':'+v.toFixed(0)+'ms').join('  '));
console.log('errors', errs.length?errs:'NONE');
await browser.close();
