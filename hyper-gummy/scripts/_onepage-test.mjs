// One-page home: anchors, story effects on the home bear, nav from other pages.
import { chromium } from 'playwright';
const base = process.argv[2] || 'http://localhost:5400';
const browser = await chromium.launch({ headless: true, channel: 'chrome', args: ['--use-angle=d3d11'] });
for (const [tag, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['iphone', { viewport: { width: 430, height: 932 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }]]) {
  const ctx = await browser.newContext(opts);
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  p.on('console', (m) => { if (m.type() === 'error' && !/404/.test(m.text())) errs.push(m.text().slice(0, 160)); });
  const st = async (t) => console.log(tag, t, JSON.stringify(await p.evaluate(() => {
    const s = window.__stage; return { url: location.pathname + location.hash, y: Math.round(scrollY), ch: s?.about?.chapter, mix: +(s?.storyMix || 0).toFixed(2), fill: +(s?.fill?.value ?? 0).toFixed(1), containers: document.querySelectorAll('[data-barba=container]').length };
  })));
  await p.goto(base + '/'); await p.waitForTimeout(3500); await st('home top');
  // hero button → #about
  await p.click('.hero-intro .pill'); await p.waitForTimeout(2500); await st('after ฮาวทูแมส');
  // scroll through the story: grey → colour → heart → counter → steps → finale
  const tops = await p.evaluate(() => [...document.querySelectorAll('[data-chapter]')].map((c) => c.offsetTop + c.offsetHeight * 0.45));
  const shots = [];
  for (let i = 0; i < tops.length; i++) { await p.evaluate((y) => scrollTo(0, y), tops[i]); await p.waitForTimeout(2200); await st('chapter ' + i); shots.push(`refs/mobile/op-${tag}-${i}.png`); await p.screenshot({ path: shots[i] }); }
  // nav งาน from a case page → home#work
  await p.goto(base + '/case-secret-menu.html'); await p.waitForTimeout(3000);
  if (tag === 'desktop') await p.click('.top-nav a[href="/work.html"]'); else { await p.click('.burger, [data-menu-open]').catch(() => {}); await p.waitForTimeout(600); await p.click('.menu a[href="/work.html"], .menu-overlay a[href="/work.html"]'); }
  await p.waitForTimeout(3500); await st('case → งาน');
  await p.screenshot({ path: `refs/mobile/op-${tag}-work.png` });
  // top-nav เรา on the same page
  if (tag === 'desktop') { await p.click('.top-nav a[href="/#about"]'); await p.waitForTimeout(2500); await st('home → เรา'); }
  // cases + work header shot
  await p.evaluate(() => document.querySelector('.cases-list, #about').scrollIntoView()); await p.waitForTimeout(1500); await p.screenshot({ path: `refs/mobile/op-${tag}-cases.png` });
  console.log(tag, 'errors', errs);
  await ctx.close();
}
await browser.close();
