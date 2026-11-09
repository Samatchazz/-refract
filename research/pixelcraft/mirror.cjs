// mirror.cjs — PRIVATE reference viewer for the captured theme pages (out/dom/*.html).
// Serves the measurement copy locally so the owner can eyeball the original next to the
// skeleton. This is the private working copy allowed by BRIEF §0.2 — measurement/reference
// only. It is NOT a build basis, never ships, and nothing here may be copied into skeleton/
// (owner decision 2026-07-31, reconfirmed in chat 2026-08-01: "mirror for reference").
// Asset URLs inside the saved DOM are absolute → images/fonts/css load live from the demo
// host, so this needs internet and shows the real thing.
// Usage: node research/pixelcraft/mirror.cjs → http://localhost:8124
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'out');
const OUT_MAIN = path.join(__dirname, 'out-main');
const PORT = 8124;

const pages = [];
for (const [dir, label] of [[OUT, 'out'], [OUT_MAIN, 'out-main']]) {
  const domDir = path.join(dir, 'dom');
  if (!fs.existsSync(domDir)) continue;
  for (const f of fs.readdirSync(domDir)) if (f.endsWith('.html')) pages.push({ label, f, p: path.join(domDir, f) });
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (url.pathname === '/') {
    const list = pages.map((pg, i) => `<li><a href="/p/${i}">${pg.label}/${pg.f}</a></li>`).join('');
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(`<!doctype html><meta charset="utf-8"><title>pixelcraft mirror (private reference)</title>
<body style="font-family:sans-serif;max-width:640px;margin:40px auto">
<h1>Mirror — สำเนาวัดส่วนตัว</h1>
<p><strong>ไว้ดูเทียบเท่านั้น</strong> — ห้ามก๊อบโค้ด/asset จากหน้าพวกนี้เข้า skeleton (มติ 2026-07-31 / 2026-08-01)<br>
ภาพ/ฟอนต์โหลดสดจากโฮสต์เดโม จึงต้องต่อเน็ต · เทียบคู่กับ skeleton ที่ :8123</p>
<ul>${list}</ul>`);
  }
  const m = url.pathname.match(/^\/p\/(\d+)$/);
  if (m && pages[+m[1]]) {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    return res.end(fs.readFileSync(pages[+m[1]].p));
  }
  res.writeHead(404); res.end('404');
}).listen(PORT, () => {
  console.log(`mirror at http://localhost:${PORT} (${pages.length} pages)`);
});
