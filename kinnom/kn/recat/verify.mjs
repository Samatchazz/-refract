// verify.mjs — READ-ONLY. Re-reads every post the log says was updated, straight from the public REST API (no login), and checks:
// categories == plan, planned tags present, no tag lost, and title/slug/date/content hash unchanged vs the pre-change snapshot (affected.json).
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
import { ROOT } from '../node/bridge.mjs'; import { readLog } from './apply.mjs';
const H = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);
// pre-change snapshots. The first fetch (21 Sep) was taken before the desk's chunk-decoding fix, so a few characters in it are U+FFFD;
// for posts only present in that snapshot, compare with U+FFFD runs as wildcards.
const snap = new Map();
for (const f of ['affected.corrupt.json', 'affected.json']) { const fp = path.join(ROOT, 'recat', f); if (fs.existsSync(fp)) for (const p of JSON.parse(fs.readFileSync(fp, 'utf8'))) snap.set(p.id, p); }
const sameText = (old, live) => { if (!old.includes('�')) return old === live; let at = 0; for (const seg of old.split(/�+/)) { const i = live.indexOf(seg, at); if (i < 0) return false; at = i + seg.length; } return Math.abs(old.length - live.length) < 3 * (old.split(/�+/).length); };
const planAll = [...JSON.parse(fs.readFileSync(path.join(ROOT, 'recat', 'plan.before-refetch.json'), 'utf8')), ...JSON.parse(fs.readFileSync(path.join(ROOT, 'recat', 'plan.json'), 'utf8'))];
const plan = new Map(planAll.map((p) => [p.id, p]));
const ids = [...new Set(readLog(path.join(ROOT, 'recat', 'apply-log.jsonl')).filter((r) => r.result === 'updated').map((r) => r.id))];
const same = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
let ok = 0; const bad = []; const NAME = { 11: 'Snack', 12: 'Cafe', 15: 'Food', 3655: 'Drinks', 3540: '7-11' }; const lines = [];
for (let i = 0; i < ids.length; i += 100) {
  const chunk = ids.slice(i, i + 100);
  const r = await (await fetch(`https://kinnom.co/wp-json/wp/v2/posts?include=${chunk.join(',')}&per_page=100&_fields=id,link,slug,date,status,title,categories,tags,content&_cb=${Date.now()}`)).json();
  for (const p of r) {
    const pl = plan.get(p.id), s = snap.get(p.id); const e = [];
    if (!same(p.categories, pl.cats)) e.push('cats ' + p.categories);
    if (!pl.addTags.every((t) => p.tags.includes(t))) e.push('tag missing');
    if (!s.tags.every((t) => p.tags.includes(t))) e.push('TAG LOST');
    if (p.status !== 'publish') e.push('status ' + p.status);
    if (p.slug !== s.slug || p.date !== s.date || !sameText(s.title, p.title.rendered)) e.push('title/slug/date changed');
    if (!sameText(s.content, p.content.rendered)) e.push('CONTENT CHANGED');
    if (e.length) bad.push(p.id + ': ' + e.join(', ')); else ok++;
    lines.push(`${p.link}  →  ${p.categories.map((c) => NAME[c] || c).join(' + ')}${pl.addTags.length ? '  (+แท็ก 7-11)' : ''}`);
  }
}
console.log(`checked ${ids.length} updated posts against the live site: OK ${ok} · problems ${bad.length}`); bad.forEach((b) => console.log('  ' + b));
if (process.argv.includes('--links')) lines.forEach((l) => console.log(l));
