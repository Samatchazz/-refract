import { chromium } from 'playwright';
let b; for (const o of [{}, {channel:'msedge'}, {channel:'chrome'}]) { try { b = await chromium.launch(o); break; } catch(e){} }
for (const [n,w,h] of [['d',1440,900],['m',390,844]]) {
  const errs=[]; const p = await b.newPage({viewport:{width:w,height:h}});
  p.on('pageerror',e=>errs.push(e.message));
  await p.goto('http://localhost:5900/pages/pricing-ms.html'); await p.waitForTimeout(1200);
  await p.evaluate(()=>document.querySelectorAll('.rv').forEach(e=>e.classList.add('on')));
  await p.waitForTimeout(1200);
  await p.screenshot({path:`ms-${n}.png`, fullPage:true});
  console.log(n, errs.length?errs.join('|'):'NONE', await p.evaluate(()=>document.documentElement.scrollWidth));
  await p.close();
}
await b.close();
