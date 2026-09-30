// deterministic walk of the whole level for before/after pixel comparison:
// CSS animations + transitions frozen, un-bridged pass up to the wall, bridged pass to the end, then the business sheet
// usage: node snap.mjs <outDir>
import { chromium } from 'playwright';
import fs from 'fs';
const out = process.argv[2]; fs.mkdirSync(out, { recursive: true });
const F='file:///Z:/Claude Code/planc-web/proto-journey/planc-journey-proto.html';
let browser; for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) { try { browser = await chromium.launch(opt); break; } catch (e) {} }
const FREEZE='*,*::before,*::after{animation:none!important;transition:none!important}';
for (const [n,w,h] of [['d',1440,900],['m',390,844]]) {
  const pg = await browser.newPage({ viewport: { width: w, height: h } }); const errs=[]; pg.on('pageerror',e=>errs.push(e.message));
  await pg.addInitScript(css => { addEventListener('DOMContentLoaded', () => { const s=document.createElement('style'); s.textContent=css; document.head.appendChild(s); }); }, FREEZE);
  await pg.goto(F); await pg.waitForTimeout(3200);
  const shot = async (tag) => { await pg.waitForTimeout(850); await pg.screenshot({ path: `${out}/${n}-${tag}.png` }); };
  const at = p => pg.evaluate(v => scrollTo(0, Math.round(v*12500)), p);
  for (let i=0;i<=37;i++){ const p=i*0.02; await at(p); await shot('a'+String(i).padStart(2,'0')); }          // 0 .. 0.74 un-bridged
  await pg.evaluate(() => document.querySelector('a.navlk[href="#about"]').click()); await pg.waitForTimeout(400);   // counts as crossed
  for (let i=37;i<=53;i++){ const p=i*0.02; await at(p); await shot('b'+String(i).padStart(2,'0')); }         // 0.74 .. 1.06 bridged
  const H = await pg.evaluate(() => document.documentElement.scrollHeight);
  const top = await pg.evaluate(() => document.getElementById('biz').offsetTop);
  let k=0; for (let y=top-h*0.5; y<H-h; y+=h*0.9){ await pg.evaluate(v=>scrollTo(0,v),y); await pg.waitForTimeout(1300); await pg.screenshot({ path: `${out}/${n}-z${String(k++).padStart(2,'0')}.png` }); }
  console.log(n, 'frames', 38+17+k, errs.length?errs:'NONE'); await pg.close();
}
await browser.close();
