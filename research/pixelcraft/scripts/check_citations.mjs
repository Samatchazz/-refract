// check_citations.mjs — resolve every ⟨file#json.path⟩ citation in a document (BRIEF.md §4.4)
// Usage: node research/pixelcraft/scripts/check_citations.mjs <doc.md> [--out out]
// Prints OK/FAIL per citation, ends with "N citations, M failed". Exit 0 only if M == 0.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const doc = args.find((a) => !a.startsWith('--'));
const outIdx = args.indexOf('--out');
const OUT = path.resolve(__dirname, '..', outIdx >= 0 ? args[outIdx + 1] : 'out');
if (!doc) {
  console.error('usage: node check_citations.mjs <doc.md> [--out out]');
  process.exit(1);
}

const text = fs.readFileSync(doc, 'utf8');
// Citation form: ⟨relative/path.json#dot.path[3].leaf⟩ — path part optional after #
const re = /⟨([^#⟩]+)(?:#([^⟩]*))?⟩/g;

// Resolve a dotted/bracketed path inside a parsed JSON value.
function resolvePath(objRoot, expr) {
  if (!expr) return { ok: true, value: '(whole file)' };
  let cur = objRoot;
  // split "a.b[2].c" into ["a","b",2,"c"]
  const parts = [];
  for (const seg of expr.split('.')) {
    const m = seg.match(/^([^[\]]*)((\[\d+\])*)$/);
    if (!m) return { ok: false, at: seg };
    if (m[1] !== '') parts.push(m[1]);
    const idxs = m[2].match(/\d+/g) || [];
    for (const i of idxs) parts.push(Number(i));
  }
  for (const p of parts) {
    if (cur == null) return { ok: false, at: String(p) };
    cur = cur[p];
    if (cur === undefined) return { ok: false, at: String(p) };
  }
  return { ok: true, value: cur };
}

let n = 0, failed = 0;
let m;
const lines = text.split('\n');
while ((m = re.exec(text)) !== null) {
  n++;
  const [whole, fileRel, jsonPath] = m;
  const lineNo = text.slice(0, m.index).split('\n').length;
  const file = path.join(OUT, fileRel.trim());
  let status = 'OK', detail = '';
  if (!fs.existsSync(file)) {
    status = 'FAIL'; detail = 'file not found: ' + path.relative(process.cwd(), file);
  } else if (/\.json$/i.test(file)) {
    try {
      const j = JSON.parse(fs.readFileSync(file, 'utf8'));
      const r = resolvePath(j, (jsonPath || '').trim());
      if (!r.ok) { status = 'FAIL'; detail = `path unresolved at "${r.at}"`; }
      else detail = `= ${JSON.stringify(r.value)?.slice(0, 80)}`;
    } catch (e) {
      status = 'FAIL'; detail = 'JSON parse error: ' + e.message;
    }
  } else {
    // non-JSON source (e.g. an image or txt) — existence is the check
    detail = '(non-JSON file, existence checked)';
  }
  if (status === 'FAIL') failed++;
  console.log(`${status} L${lineNo} ${whole} ${detail}`);
}
console.log(`\n${n} citations, ${failed} failed`);
process.exit(failed === 0 ? 0 : 2);
