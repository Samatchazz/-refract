// build-toolkit.mjs — rebuilds the exact text that lives in Mat's Chrome as localStorage.kntk (v4.1.11)
// by replaying the three official patch files against toolkit.pack.src.js inside a throw-away sandbox.
// Nothing here talks to the network. Output: toolkit/kntk-<ver>.js + its sha256.
//
// Usage: node kn/node/build-toolkit.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'toolkit');
const SRC = 'toolkit.pack.src.js';
const PATCHES = ['toolkit-4.1.9-patch.js', 'toolkit-4.1.10-patch.js', 'toolkit-4.1.11-patch.js'];

const store = new Map();
const sandbox = {
  localStorage: {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => { store.set(k, String(v)); },
    removeItem: (k) => { store.delete(k); },
  },
  alert: () => {},
  setTimeout: () => 0, // patches schedule an alert + a selftest poll; neither matters for building the text
  fetch: () => Promise.reject(new Error('sandbox: no network')),
  console: { log() {}, warn() {}, error() {} },
  FormData: class {}, TextDecoder, atob,
  document: { getElementById: () => null, body: {}, querySelectorAll: () => [] },
};
sandbox.window = sandbox;
vm.createContext(sandbox);

const src = fs.readFileSync(path.join(DIR, SRC), 'utf8');
store.set('kntk', src);
vm.runInContext(src, sandbox, { filename: SRC });
for (const p of PATCHES) {
  const before = store.get('kntk').length;
  const ret = vm.runInContext(fs.readFileSync(path.join(DIR, p), 'utf8'), sandbox, { filename: p });
  const after = store.get('kntk').length;
  if (after <= before) throw new Error(`${p} did not extend kntk (returned ${JSON.stringify(ret)})`);
  console.log(`${p}: +${after - before} chars → VER ${sandbox.__VER}`);
}

const out = store.get('kntk');
const ver = sandbox.__VER;
const sha = crypto.createHash('sha256').update(out, 'utf8').digest('hex');
const file = path.join(DIR, `kntk-${ver}.js`);
fs.writeFileSync(file, out, 'utf8');
fs.writeFileSync(path.join(DIR, `kntk-${ver}.sha256`), `${sha}  kntk-${ver}.js\n`);
console.log(`built ${path.basename(file)} · ${out.length} chars · sha256 ${sha.slice(0, 16)}…`);
console.log(`src sha256 ${crypto.createHash('sha256').update(src, 'utf8').digest('hex').slice(0, 16)}… (RESUME.md says 82df25f6cc1ca961)`);
