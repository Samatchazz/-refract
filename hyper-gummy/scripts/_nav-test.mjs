// Navigate the site the way a visitor would (desktop nav / phone burger menu /
// reduced-motion) and count barba containers after every hop.
import { chromium } from 'playwright';
const base = process.argv[2] || 'http://localhost:5400';
const browser = await chromium.launch({ headless: true, channel: 'chrome', args: ['--use-angle=d3d11'] });
const modes = [
  ['desktop', { viewport: { width: 1440, height: 900 } }],
  ['iphone', { viewport: { width: 430, height: 932 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }],
  ['reduced-motion', { viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' }],
];
for (const [tag, opts] of modes) {
  const ctx = await browser.newContext(opts);
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  const count = async (t) => console.log(tag, t, JSON.stringify(await p.evaluate(() => ({
    url: location.pathname,
    containers: document.querySelectorAll('[data-barba=container]').length,
    ns: [...document.querySelectorAll('[data-barba=container]')].map((c) => c.dataset.barbaNamespace).join(','),
    docH: document.documentElement.scrollHeight,
  }))));
  const go = async (href) => {
    if (tag === 'iphone') {
      await p.click('.burger, [data-menu-open]').catch(() => {});
      await p.waitForTimeout(600);
      await p.click(`.menu a[href="${href}"], .menu-overlay a[href="${href}"]`);
    } else {
      await p.click(`.top-nav a[href="${href}"]`);
    }
    await p.waitForTimeout(2500);
  };
  await p.goto(base + '/');
  await p.waitForTimeout(3000);
  await go('/work.html'); await count('งาน');
  await go('/about.html'); await count('เรา');
  await p.click('.logo'); await p.waitForTimeout(2500); await count('home');
  await p.goBack(); await p.waitForTimeout(3500); await count('back');
  if (tag === 'desktop') await p.screenshot({ path: 'refs/mobile/nav-last.png', fullPage: true });
  console.log(tag, 'errors', errs);
  await ctx.close();
}
await browser.close();
