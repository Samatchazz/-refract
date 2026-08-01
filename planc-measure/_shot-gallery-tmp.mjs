import { chromium } from 'playwright';

const FILE = 'file:///Z:/Claude%20Code/planc0/research/options-gallery.html';
const OUT = 'Z:/Claude Code/planc0/research/gallery-check.png';

const errors = [];
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
page.on('pageerror', e => errors.push('pageerror: ' + e.message));

await page.goto(FILE, { waitUntil: 'load', timeout: 20000 });
await page.waitForTimeout(1200);

const stats = await page.evaluate(() => ({
  sections: document.querySelectorAll('section.comp').length,
  cards: document.querySelectorAll('.card').length,
  stars: document.querySelectorAll('.card.star').length,
  badges: document.querySelectorAll('.badge').length,
  links: document.querySelectorAll('.card h3 a').length,
  swatches: document.querySelectorAll('.sw i').length,
  flags: document.querySelectorAll('.flag').length,
  heads: [...document.querySelectorAll('.comp-head h2')].map(h => h.textContent.trim()),
  bodyH: document.body.scrollHeight,
  appEmpty: document.getElementById('app').children.length === 0,
}));

await page.screenshot({ path: OUT, fullPage: true });
console.log(JSON.stringify({ stats, errors }, null, 2));
await browser.close();
