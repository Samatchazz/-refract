import { chromium } from 'playwright';
const b = await chromium.launch({ headless: true });
for (const [w, h, label, scheme] of [[1440,900,'desktop','light'],[390,844,'mobile','light'],[1440,900,'desktop-dark','dark']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, colorScheme:scheme, deviceScaleFactor:1 });
  const p = await ctx.newPage();
  const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
  const reqs=[]; p.on('request',r=>{ const u=r.url(); if(!u.startsWith('http://localhost:5711') && !u.startsWith('data:')) reqs.push(u); });
  await p.goto('http://localhost:5711', { waitUntil:'networkidle' });
  await p.evaluate(()=>document.fonts.ready);
  await p.waitForTimeout(400);
  const info = await p.evaluate(()=>{
    document.querySelector('details').open = true;
    const cards=[...document.querySelectorAll('.card')];
    const tw=document.querySelector('.tablewrap');
    const bands=[...document.querySelectorAll('.band > *:not(.marker)')].filter(e=>e.getBoundingClientRect().width>0).map(e=>Math.round(e.getBoundingClientRect().left));
    return {
      winW: innerWidth,
      hScroll: document.documentElement.scrollWidth > innerWidth + 1,
      overflowBy: document.documentElement.scrollWidth - innerWidth,
      cardsPerRow: cards.length>1 && cards[0].getBoundingClientRect().top===cards[1].getBoundingClientRect().top ? 'side-by-side':'stacked',
      cardW: Math.round(cards[0].getBoundingClientRect().width),
      rail: getComputedStyle(document.querySelector('.page'),'::before').display,
      markerPos: getComputedStyle(document.querySelector('section.step .marker')).position,
      distinctLeftEdges: [...new Set(bands)].length,
      tableOverflows: tw.scrollWidth > tw.clientWidth,
      pageH: document.documentElement.scrollHeight,
      bg: getComputedStyle(document.body).backgroundColor,
    };
  });
  await p.evaluate(()=>window.scrollTo(0,0));
  await p.screenshot({ path:`../../research/northstar/page-check-${label}.jpg`, type:'jpeg', quality:72, fullPage:false });
  console.log(label, JSON.stringify(info), 'externalRequests:', reqs.length, reqs.slice(0,3), 'errors:', errs.length);
  await ctx.close();
}
await b.close();
