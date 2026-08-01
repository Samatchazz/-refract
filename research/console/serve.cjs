// serve.cjs — serves the whole repo root so the console can load its data,
// the north-star screenshots, and the real planc/ build in an iframe from the
// same origin (which is what lets the console inject live token overrides).
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PORT = 5800;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.cjs': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
};

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/research/console/index.html';
  const file = path.join(ROOT, url);
  // Never serve outside the repo root.
  if (!file.startsWith(ROOT)) { res.writeHead(403).end('forbidden'); return; }

  fs.stat(file, (err, st) => {
    let target = file;
    if (!err && st.isDirectory()) target = path.join(file, 'index.html');
    fs.readFile(target, (e, buf) => {
      if (e) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('not found: ' + url); return; }
      res.writeHead(200, {
        'Content-Type': TYPES[path.extname(target).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-cache',
      });
      res.end(buf);
    });
  });
}).listen(PORT, () => console.log(`PlanC Console v3 — http://localhost:${PORT}`));
