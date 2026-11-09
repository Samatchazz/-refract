// Screenshot the local site for review:  node shoot.mjs   (server must run on :5960)
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire('Z:/Claude Code/node_modules/');
const { chromium } = require('playwright');

const BASE = 'http://localhost:5960/';
const OUT = '../review';
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
async function shot(name, url, { w = 1440, h = 900, full = true, before } = {}) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.goto(BASE + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  if (before) await before(page);
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/${name}.jpg`, fullPage: full, type: 'jpeg', quality: 72 });
  await page.close();
  console.log('shot', name);
}

// play the quiz to a given screen
async function quizTo(page, seg, answers) {
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle' });
  await page.click(`[data-seg="${seg}"]`);
  await page.waitForTimeout(450);
  for (let i = 0; i < answers; i++) {
    for (let g = 0; g < 3; g++) {
      if (await page.$('[data-act="next"]')) { await page.click('[data-act="next"]'); await page.waitForTimeout(250); continue; }
      break;
    }
    const ch = await page.$$('[data-choice]');
    if (!ch.length) break;
    await ch[(i * 7) % ch.length].click();
    await page.waitForTimeout(620);
  }
}

const which = process.argv.slice(2);
const jobs = {
  'home-desk': () => shot('home-desk', 'index.html'),
  'home-mob': () => shot('home-mob', 'index.html', { w: 390, h: 844 }),
  'services-desk': () => shot('services-desk', 'services.html'),
  'about-desk': () => shot('about-desk', 'about.html'),
  'contact-mob': () => shot('contact-mob', 'contact.html', { w: 390, h: 844 }),
  'quiz-seg-mob': () => shot('quiz-seg-mob', 'quiz.html', { w: 390, h: 844, full: false, before: async (p) => { await p.evaluate(() => localStorage.clear()); await p.reload({ waitUntil: 'networkidle' }); } }),
  'quiz-ch1-mob': () => shot('quiz-ch1-mob', 'quiz.html', { w: 390, h: 844, full: false, before: (p) => quizTo(p, 'indie', 0) }),
  'quiz-q1-mob': () => shot('quiz-q1-mob', 'quiz.html', { w: 390, h: 844, full: true, before: async (p) => { await quizTo(p, 'indie', 0); await p.click('[data-act="next"]'); await p.waitForTimeout(300); } }),
  'quiz-q12-desk': () => shot('quiz-q12-desk', 'quiz.html', { full: false, before: (p) => quizTo(p, 'indie', 11) }),
  'quiz-q17-desk': () => shot('quiz-q17-desk', 'quiz.html', { full: false, before: (p) => quizTo(p, 'indie', 16) }),
  'result-desk': () => shot('result-desk', 'quiz.html', { before: async (p) => { await quizTo(p, 'indie', 25); if (await p.$('[data-act="next"]')) await p.click('[data-act="next"]'); await p.waitForTimeout(200); await p.click('[data-act="finish"]'); await p.waitForTimeout(400); } }),
  'result-mob': () => shot('result-mob', 'quiz.html', { w: 390, h: 844, before: async (p) => { await quizTo(p, 'cafe', 25); await p.click('[data-act="finish"]'); await p.waitForTimeout(400); } }),
};
for (const [k, fn] of Object.entries(jobs)) if (!which.length || which.includes(k)) await fn();
await browser.close();
