// rleonardi-keyboard.mjs — extra captures for the rleonardi interactive resume
// The canvas game advances via horizontal scroll / arrow keys, so the main
// script's static screenshots can't capture progression. This opens the site,
// repeatedly presses ArrowRight, and saves ~10 screenshots into out/rleonardi/.
// ignoreHTTPSErrors is required here: the site fails ERR_CERT_AUTHORITY_INVALID
// in this environment (local certificate interception).
import { chromium } from 'playwright';
import fs from 'node:fs';

const URL = 'https://www.rleonardi.com/interactive-resume/';
const OUT = './out/rleonardi';
const SHOTS = 10;
const PRESSES_PER_SHOT = 8;

fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  ignoreHTTPSErrors: true,
});
const page = await context.newPage();

await page.goto(URL, { waitUntil: 'load', timeout: 90000 });
await page.waitForTimeout(8000); // let the game load/intro settle

// focus the canvas so key events reach the game
await page.mouse.click(720, 450);
await page.waitForTimeout(500);

for (let i = 0; i < SHOTS; i++) {
  const name = `${OUT}/keyboard-${String(i).padStart(2, '0')}.png`;
  await page.screenshot({ path: name });
  console.log(`captured ${name}`);
  for (let k = 0; k < PRESSES_PER_SHOT; k++) {
    await page.keyboard.press('ArrowRight', { delay: 30 });
    // the site maps wheel/scroll to horizontal progression; arrows alone don't advance it
    await page.mouse.wheel(0, 160);
  }
  await page.waitForTimeout(1200);
}

await browser.close();
console.log('done');
