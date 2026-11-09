// bridge.mjs — the "job desk": a tiny HTTP server on 127.0.0.1 that Mat's logged-in wp-admin tab long-polls for work.
// Authority stays in Chrome (cookie + nonce); this side never sees a credential. No LLM anywhere in the loop.
//
// Security model
//   - binds 127.0.0.1 only (never 0.0.0.0)
//   - every request must carry the session token (state/bridge-token, random, created once; baked into the bookmarklet)
//   - every request must carry Origin: https://kinnom.co (the browser sets it; other sites cannot forge it)
//   - jobs are DATA: {id, fn, args}. The page glue (bridge-page.js) maps fn to a fixed allow-list of toolkit calls. Nothing is eval'ed.
//   - CORS + Chrome "Local Network Access" preflight answered for https://kinnom.co only
//
//   node kn/node/bridge.mjs            start + print the bookmarklet (one-time bookmark in Chrome)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(HERE, '..', '..');
export const ORIGIN = 'https://kinnom.co';
export const PORT = 47321;

export function sessionToken(stateDir = path.join(ROOT, 'state')) {
  const f = path.join(stateDir, 'bridge-token');
  fs.mkdirSync(stateDir, { recursive: true });
  if (!fs.existsSync(f)) fs.writeFileSync(f, crypto.randomBytes(24).toString('hex'));
  return fs.readFileSync(f, 'utf8').trim();
}

export function pageScript(token, port = PORT) {
  return fs.readFileSync(path.join(HERE, 'bridge-page.js'), 'utf8').replace('__BRIDGE_URL__', `http://127.0.0.1:${port}`).replace('__BRIDGE_TOKEN__', token);
}
export function bookmarklet(token, port = PORT) {
  // the bookmarklet only fetches the glue from the desk (token in the URL); the glue itself is served, not stored in the bookmark
  return 'javascript:' + encodeURIComponent(`(async()=>{if(location.origin!=='${ORIGIN}'){alert('open this on kinnom.co/wp-admin');return;}const s=await (await fetch('http://127.0.0.1:${port}/page.js?token=${token}')).text();(0,eval)(s);})()`);
}

/**
 * start({token, port, origin, stateDir, log}) → { submit(fn,args,{timeoutMs}), connected(), close(), port, token }
 */
export function start(o = {}) {
  const token = o.token || sessionToken(o.stateDir);
  const origin = o.origin || ORIGIN;
  const log = o.log || (() => {});
  const queue = []; const pending = new Map(); let waiter = null; let lastPoll = 0; let seq = 0;
  const cors = (res) => {
    res.setHeader('Access-Control-Allow-Origin', origin); res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Private-Network', 'true'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); res.setHeader('Vary', 'Origin');
  };
  const send = (res, code, body, type = 'application/json') => { cors(res); res.writeHead(code, { 'content-type': type + '; charset=utf-8', 'cache-control': 'no-store' }); res.end(typeof body === 'string' ? body : JSON.stringify(body)); };
  // collect raw chunks and decode ONCE: decoding per chunk splits multi-byte UTF-8 (Thai) at chunk boundaries → U+FFFD (found 22 Sep 2026)
  const readBody = (req) => new Promise((ok, no) => { const parts = []; let n = 0; req.on('data', (c) => { parts.push(c); n += c.length; if (n > 50e6) no(new Error('too big')); }); req.on('end', () => ok(Buffer.concat(parts).toString('utf8'))); req.on('error', no); });

  const server = http.createServer(async (req, res) => {
    const u = new URL(req.url, 'http://127.0.0.1');
    if (req.method === 'OPTIONS') { cors(res); res.writeHead(204); return res.end(); }
    const reqOrigin = req.headers.origin;
    if (reqOrigin !== origin) { log({ refused: 'origin', got: reqOrigin || null, path: u.pathname }); return send(res, 403, { error: 'origin' }); }
    if (u.searchParams.get('token') !== token) { log({ refused: 'token', path: u.pathname }); return send(res, 403, { error: 'token' }); }
    if (u.pathname === '/page.js') return send(res, 200, pageScript(token, server.address().port), 'text/javascript');
    if (u.pathname === '/job') { // long-poll: one job, or {} after ~25 s
      lastPoll = Date.now();
      const give = () => { const j = queue.shift(); send(res, 200, j || {}); };
      if (queue.length) return give();
      waiter = give;
      const t = setTimeout(() => { if (waiter === give) { waiter = null; give(); } }, 25000);
      req.on('close', () => { clearTimeout(t); if (waiter === give) waiter = null; });
      return;
    }
    if (u.pathname === '/result' && req.method === 'POST') {
      let r; try { r = JSON.parse(await readBody(req)); } catch { return send(res, 400, { error: 'json' }); }
      const p = pending.get(r.id); if (!p) return send(res, 200, { stale: true });
      pending.delete(r.id); clearTimeout(p.timer);
      log({ job: p.fn, id: r.id, ms: Date.now() - p.t0, error: r.error || undefined });
      if (r.error) p.reject(new Error(`page: ${p.fn}: ${r.error}`)); else p.resolve(r.result);
      return send(res, 200, { ok: true });
    }
    send(res, 404, { error: 'no' });
  });

  return new Promise((resolve) => server.listen(o.port ?? PORT, '127.0.0.1', () => resolve({
    port: server.address().port, token,
    connected: () => Date.now() - lastPoll < 40000,
    submit: (fn, args, { timeoutMs = 20 * 60 * 1000 } = {}) => new Promise((res, rej) => {
      const id = `${Date.now().toString(36)}-${++seq}`; const t0 = Date.now();
      const timer = setTimeout(() => { pending.delete(id); rej(new Error(`bridge: ${fn} timed out after ${timeoutMs / 1000}s (is the wp-admin tab still connected?)`)); }, timeoutMs);
      pending.set(id, { resolve: res, reject: rej, timer, fn, t0 });
      queue.push({ id, fn, args }); if (waiter) { const w = waiter; waiter = null; w(); }
    }),
    close: () => new Promise((r) => server.close(r)),
  })));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv[2] === 'bookmarklet') { // writes a page Mat drags to his bookmarks bar once
    const tok = sessionToken(); const f = path.join(ROOT, 'state', 'kinnom-bridge-bookmarklet.html');
    fs.writeFileSync(f, `<!doctype html><meta charset="utf-8"><title>kinnom bridge</title><body style="font:16px system-ui;padding:40px;line-height:1.7">
<h2>kinnom bridge</h2><p>ลากปุ่มนี้ไปวางบนแถบ bookmark ของ Chrome (ทำครั้งเดียว):</p>
<p><a href="${bookmarklet(tok)}" style="display:inline-block;background:#e0577b;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-weight:700">🔗 kinnom bridge</a></p>
<p>วิธีใช้: เปิดแท็บ <b>kinnom.co/wp-admin</b> ที่ล็อกอินแล้ว → กด bookmark นี้ 1 ครั้ง → Chrome อาจถามสิทธิ์ "เชื่อมต่ออุปกรณ์ในเครือข่าย" ให้กด Allow → กลับมาที่เทอร์มินัลจะเห็น "tab: connected"</p>
<p style="color:#666">bookmark นี้ใช้ได้กับเครื่องนี้เท่านั้น (token อยู่ใน state/bridge-token) และทำงานเฉพาะเมื่อโปรแกรม bridge เปิดอยู่</p></body>`);
    console.log('written ' + f); process.exit(0);
  }
  const b = await start({ log: (x) => console.log(JSON.stringify(x)) });
  console.log(`bridge on http://127.0.0.1:${b.port} (loopback only) · waiting for the wp-admin tab`);
  console.log('bookmarklet (add once as a bookmark, click it on kinnom.co/wp-admin):');
  console.log(bookmarklet(b.token, b.port));
  setInterval(() => console.log(b.connected() ? 'tab: connected' : 'tab: not connected'), 30000);
}
