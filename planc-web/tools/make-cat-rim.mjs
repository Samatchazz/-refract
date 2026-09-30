// bake the dark-level white rim around the cat into one PNG (replaces 4 stacked CSS drop-shadows)
import { chromium } from 'playwright';
import fs from 'fs';
const src = 'data:image/png;base64,' + fs.readFileSync('Z:/Claude Code/planc-web/assets/cat.png').toString('base64');
let browser; for (const opt of [{}, { channel: 'msedge' }, { channel: 'chrome' }]) { try { browser = await chromium.launch(opt); break; } catch (e) {} }
const pg = await browser.newPage();
const out = await pg.evaluate(async (src) => {
  const img = new Image(); img.src = src; await new Promise(r => img.onload = r);
  const PAD = 8, R = 2 * img.naturalWidth / 150;          // 2 css px at the 150px display width
  const K = 0.5;   /* a flat white shape: half resolution is plenty and keeps the single-file build small */
  const c = document.createElement("canvas"); c.width = Math.round((img.naturalWidth + PAD * 2) * K); c.height = Math.round((img.naturalHeight + PAD * 2) * K);
  // hard mask first: cat.png has a column of nearly-transparent stray pixels at its right edge; stamped 121
  // times they add up to a visible white line (a drop-shadow only ever showed them at their own faint alpha)
  const m = document.createElement("canvas"); m.width = img.naturalWidth; m.height = img.naturalHeight;
  const mx = m.getContext("2d"); mx.drawImage(img, 0, 0);
  const id = mx.getImageData(0, 0, m.width, m.height);
  for (let i = 3; i < id.data.length; i += 4) id.data[i] = id.data[i] > 110 ? 255 : 0;
  mx.putImageData(id, 0, 0);
  const x = c.getContext("2d"); x.scale(K, K);
  for (let dx = -R; dx <= R + 0.01; dx += R / 5) for (let dy = -R; dy <= R + 0.01; dy += R / 5) x.drawImage(m, PAD + dx, PAD + dy);   // square dilation, like the 4 chained shadows
  x.globalCompositeOperation = 'source-in'; x.fillStyle = '#fcfcfa'; x.setTransform(1, 0, 0, 1, 0, 0); x.fillRect(0, 0, c.width, c.height);
  return { url: c.toDataURL('image/png'), w: c.width, h: c.height, nw: img.naturalWidth, nh: img.naturalHeight, R };
}, src);
fs.writeFileSync('Z:/Claude Code/planc-web/assets/cat-rim.png', Buffer.from(out.url.split(',')[1], 'base64'));
console.log(out.w, out.h, out.nw, out.nh, out.R.toFixed(2), fs.statSync('Z:/Claude Code/planc-web/assets/cat-rim.png').size);
await browser.close();
