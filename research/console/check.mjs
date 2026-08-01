import { chromium } from 'playwright';
const b = await chromium.launch({ headless: true });
for (const [w,h,label] of [[1600,1000,'wide'],[1200,820,'narrow']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h} });
  const p = await ctx.newPage();
  const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,140)));
  await p.goto('http://localhost:5800',{waitUntil:'networkidle'});
  await p.waitForTimeout(900);
  const info = await p.evaluate(()=>{
    const tabs=[...document.querySelectorAll('.tab')];
    return { tabs:tabs.length, opts:document.querySelectorAll('.opt').length,
      hScroll:document.documentElement.scrollWidth>innerWidth+1,
      iframeOK:(()=>{try{return !!document.getElementById('preview').contentDocument.body}catch(e){return false}})() };
  });
  await p.screenshot({path:`shot-${label}.jpg`,type:'jpeg',quality:74});
  // walk every panel and screenshot the components one
  await p.evaluate(()=>document.querySelectorAll('.tab')[4].click());
  await p.waitForTimeout(500);
  if(label==='wide') await p.screenshot({path:'shot-comp.jpg',type:'jpeg',quality:74});
  console.log(label, JSON.stringify(info), 'errors:', errs.length, errs.slice(0,2));
  await ctx.close();
}
await b.close();
