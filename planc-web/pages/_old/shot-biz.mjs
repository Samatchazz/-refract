import { chromium } from 'playwright';
let b; for (const o of [{}, {channel:'msedge'}, {channel:'chrome'}]) { try { b = await chromium.launch(o); break; } catch(e){} }
const B='http://localhost:5900';
for (const [n,w,h] of [['d',1440,900],['m',390,844]]) {
  for (const pg of ['pricing','about','contact']) {
    const errs=[]; const p = await b.newPage({viewport:{width:w,height:h}});
    p.on('pageerror',e=>errs.push(e.message));
    await p.goto(`${B}/pages/${pg}.html`); await p.waitForTimeout(1000);
    await p.evaluate(()=>document.querySelectorAll('.rv').forEach(e=>e.classList.add('on'))); await p.waitForTimeout(900);
    await p.screenshot({path:`biz-${pg}-${n}.png`, fullPage:true});
    console.log('page',pg,n,errs.length?errs.join('|'):'NONE','sw',await p.evaluate(()=>document.documentElement.scrollWidth));
    await p.close();
  }
  // one-file: open each overlay
  const errs=[]; const p = await b.newPage({viewport:{width:w,height:h}});
  p.on('pageerror',e=>errs.push(e.message));
  await p.goto(`${B}/proto-journey/planc-journey-proto.html`); await p.waitForTimeout(3200);
  for (const pg of ['contact','about','pricing']) {
    await p.evaluate(h=>location.hash=h,pg); await p.waitForTimeout(900);
    const id='#pg'+pg[0].toUpperCase()+pg.slice(1);
    const st=await p.evaluate(id=>{const o=document.querySelector(id);return {open:o.classList.contains('open'),sw:o.scrollWidth,cw:o.clientWidth,h:o.scrollHeight}},id);
    await p.screenshot({path:`one-${pg}-${n}.png`});
    // scroll to middle and shoot
    await p.evaluate(id=>{const o=document.querySelector(id);o.scrollTop=o.scrollHeight*0.35},id); await p.waitForTimeout(1200);
    await p.screenshot({path:`one-${pg}-${n}-mid.png`});
    console.log('one',pg,n,JSON.stringify(st));
  }
  // footer self-link '#' must not close the page; end CTA must open contact
  await p.evaluate(()=>{const o=document.querySelector('#pgPricing');o.scrollTop=o.scrollHeight});
  await p.waitForTimeout(500);
  await p.click('#pgPricing .footin a[href="#"]',{force:true}); await p.waitForTimeout(400);
  console.log('self-link keeps page open:', await p.evaluate(()=>document.querySelector('#pgPricing').classList.contains('open')));
  console.log(n,'one-file errors', errs.length?errs.join('|'):'NONE');
  await p.close();
}
await b.close();
