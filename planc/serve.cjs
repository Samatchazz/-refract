/* dev server only — not part of the 3-file deliverable */
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = __dirname, PORT = 5600;
const TYPES = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png' };

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(ROOT, url === '/' ? 'index.html' : url);
  if (!file.startsWith(ROOT)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404, {'Content-Type':'text/plain'}).end('404'); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
                         'Cache-Control':'no-store' });
    res.end(buf);
  });
}).listen(PORT, () => console.log('planc → http://localhost:' + PORT));
