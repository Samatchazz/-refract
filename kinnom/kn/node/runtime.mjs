// runtime.mjs — runs the UNCHANGED browser toolkit (kntk-4.1.11.js) under Node.
//
// What is shimmed (browser → Node):
//   window            → globalThis
//   localStorage      → JSON file in state/ (atomic write on every setItem)
//   fetch             → knFetch: guard + journal + (offline fixtures | real WordPress with application password)
// What is overridden after load (the only two behavioural changes, both transport-level):
//   __refresh / __api → no nonce; Basic auth; a non-JSON reply THROWS (the Dec 2024 "HTML on publish" case = STOP);
//                       writes are never retried (a retry of POST /posts is how double posts happen)
//   __up1             → image source is pluggable (phase 2: Drive API + resize 1600px); not available offline
// Every gate, __rev, __open/__vgate/__runPub guards, __addReview, __close and the selftest run as written.
//
// Modes: 'offline'  no network at all; only fixtures answer (default)
//        'readonly' GET goes to WordPress, every write is refused
//        'live'     GET + guarded writes
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(HERE, '..', '..');
const KNTK = path.join(HERE, 'toolkit', 'kntk-4.1.11.js');

/* ---------- guard: Mat's rule 5 enforced at the transport ---------- */
const ALLOWED = [
  ['GET', /^\/wp-json\/wp\/v2\/(posts|media|tags|categories)(\/\d+)?(\?|$)/],
  ['GET', /^\/wp-json\/wp\/v2\/users\/me(\?|$)/],
  ['POST', /^\/wp-json\/wp\/v2\/posts(\/\d+)?(\?|$)/],
  ['POST', /^\/wp-json\/wp\/v2\/media(\/\d+)?(\?|$)/],
  ['POST', /^\/wp-json\/wp\/v2\/tags(\?|$)/],
];
export function guard(method, p, body) {
  method = String(method || 'GET').toUpperCase();
  if (!ALLOWED.some(([m, re]) => m === method && re.test(p))) throw new Error(`GUARD refused ${method} ${p.split('?')[0]} (not on the allow-list: no delete, no settings/plugins/themes/users)`);
  // never change the publish status of an EXISTING post (rule 5). Creating a new post with status is fine.
  if (method === 'POST' && /^\/wp-json\/wp\/v2\/posts\/\d+/.test(p) && typeof body === 'string') {
    let o = null; try { o = JSON.parse(body); } catch { /* not json */ }
    if (o && Object.prototype.hasOwnProperty.call(o, 'status')) throw new Error(`GUARD refused status change on existing post ${p}`);
  }
}

/* ---------- file-backed localStorage ---------- */
function makeLocalStorage(file) {
  let data = {};
  if (fs.existsSync(file)) data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const flush = () => { const tmp = file + '.tmp'; fs.writeFileSync(tmp, JSON.stringify(data), 'utf8'); fs.renameSync(tmp, file); };
  return {
    getItem: (k) => (Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null),
    setItem: (k, v) => { data[k] = String(v); flush(); },
    removeItem: (k) => { delete data[k]; flush(); },
    _file: file,
  };
}

/* ---------- response helper ---------- */
function jsonResponse(obj, status = 200) {
  const text = JSON.stringify(obj);
  return { status, ok: status >= 200 && status < 300, headers: new Map([['content-type', 'application/json']]), json: async () => JSON.parse(text), text: async () => text };
}

/**
 * @param {object} o
 * @param {'offline'|'readonly'|'live'} [o.mode]
 * @param {string} [o.stateDir]      where localStorage.json + journal.jsonl live
 * @param {(method:string,path:string,body:any)=>object|undefined} [o.fixtures]  offline answers
 * @param {string} [o.base] [o.user] [o.appPassword]   WordPress (readonly/live only; read from env by callers)
 */
export async function boot(o = {}) {
  const mode = o.mode || 'offline';
  const stateDir = o.stateDir || path.join(ROOT, 'state');
  fs.mkdirSync(stateDir, { recursive: true });
  const journalFile = path.join(stateDir, 'journal.jsonl');
  const journal = (row) => fs.appendFileSync(journalFile, JSON.stringify({ t: new Date().toISOString(), mode, ...row }) + '\n');
  if (mode !== 'offline' && !(o.base && o.user && o.appPassword)) throw new Error(`mode ${mode} needs base + user + appPassword (node kn/node/secret.mjs set — never in chat, never in a file)`);
  // the credential may only ever travel to the site itself, over TLS — a typo or a tampered .env must not send it elsewhere
  if (mode !== 'offline' && !/^https:\/\/(www\.)?kinnom\.co\/?$/.test(o.base)) throw new Error(`refusing to send credentials to "${o.base}" — WP_BASE must be https://kinnom.co`);
  const auth = mode === 'offline' ? null : 'Basic ' + Buffer.from(`${o.user}:${o.appPassword}`).toString('base64');
  const realFetch = globalThis.fetch;

  async function knFetch(url, init = {}) {
    url = String(url);
    const method = String(init.method || 'GET').toUpperCase();
    if (!url.startsWith('/')) throw new Error(`knFetch: external URL not allowed here (${url.slice(0, 60)}) — image download is a phase-2 adapter`);
    guard(method, url, init.body);
    const t0 = Date.now();
    if (mode === 'offline') {
      const hit = o.fixtures && o.fixtures(method, url, init.body);
      journal({ method, path: url.split('?')[0], fixture: !!hit });
      if (!hit) throw new Error(`OFFLINE: no fixture for ${method} ${url.slice(0, 80)}`);
      if (hit.__raw !== undefined) { const text = String(hit.__raw), status = hit.status || 200; return { status, ok: status < 300, headers: new Map(), json: async () => JSON.parse(text), text: async () => text }; }
      return jsonResponse(hit);
    }
    if (mode === 'readonly' && method !== 'GET') { journal({ method, path: url.split('?')[0], refused: 'readonly' }); throw new Error(`READONLY: refused ${method} ${url.split('?')[0]}`); }
    const headers = { ...(init.headers || {}), Authorization: auth };
    delete headers['X-WP-Nonce'];
    // redirect:'error' — never follow a redirect while carrying the Authorization header
    const res = await realFetch(o.base.replace(/\/$/, '') + url, { method, headers, body: init.body, cache: 'no-store', redirect: 'error' });
    journal({ method, path: url.split('?')[0], status: res.status, ms: Date.now() - t0 });
    return res;
  }

  // install browser-ish globals, then evaluate the toolkit text in global scope (exactly what `eval(localStorage.kntk)` does in Chrome)
  globalThis.window = globalThis;
  globalThis.localStorage = makeLocalStorage(path.join(stateDir, 'localStorage.json'));
  globalThis.alert = (m) => console.log('[alert]', m);
  globalThis.fetch = knFetch;
  globalThis.document = globalThis.document || { getElementById: () => null, querySelectorAll: () => [], body: {} };
  (0, eval)(fs.readFileSync(KNTK, 'utf8'));
  const W = globalThis;

  /* ---- override 1: transport ---- */
  W.__NONCE = null;
  W.__refresh = async () => { throw new Error('__refresh: no nonce under Node (application password) — a 401/403 here means credentials/role are wrong → STOP'); };
  W.__api = async function (e, n) {
    n = n || {};
    const p = '/wp-json/wp/v2/' + String(e).replace(/^\/?wp-json\//, '').replace(/^\/?wp\/v2\//, '').replace(/^\//, '');
    const method = String(n.method || 'GET').toUpperCase();
    const tries = method === 'GET' ? 3 : 1; // never auto-retry a write
    let last;
    for (let i = 0; i < tries; i++) {
      try {
        const res = await knFetch(p, Object.assign({}, n, { headers: n.body ? { 'Content-Type': 'application/json' } : {} }));
        const text = await res.text();
        if (res.status === 401 || res.status === 403) throw Object.assign(new Error(`AUTH ${res.status} ${method} ${p.split('?')[0]}`), { fatal: true });
        try { return JSON.parse(text); } catch { throw Object.assign(new Error(`NONJSON ${res.status} ${method} ${p.split('?')[0]} :: ${text.slice(0, 80).replace(/\s+/g, ' ')}`), { fatal: method !== 'GET' }); }
      } catch (err) { last = err; if (err.fatal || /^(GUARD|OFFLINE|READONLY)/.test(err.message)) throw err; }
    }
    throw last;
  };

  /* ---- override 2: image upload adapter (phase 2) ---- */
  W.__up1 = async function () { throw new Error('__up1: image adapter not installed (phase 2: Drive API → resize 1600px JPEG → POST /media)'); };

  return { W, mode, stateDir, journalFile };
}

/* credentials: see secret.mjs (Windows DPAPI store outside the project; there is deliberately no plaintext .env route) */

/* ---------- offline fixtures built from the repo's own snapshots ---------- */
export function snapshotFixtures() {
  const tags = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'tags.json'), 'utf8')); // WP tag snapshot (4 Sep 2026, tags with ≥2 posts)
  return (method, url) => {
    if (method !== 'GET') return undefined;
    let m = url.match(/\/wp\/v2\/tags\?include=([\d,]+)/);
    if (m) return m[1].split(',').filter((id) => tags[id]).map((id) => ({ id: Number(id), name: tags[id].name, count: tags[id].count }));
    if (/\/wp\/v2\/users\/me/.test(url)) return { id: 1, _mocked: true };
    return undefined;
  };
}
