// fetch.mjs — READ-ONLY. Pulls (a) the Cafe-only posts since Jul 2024 and (b) the correctly-categorised reference batch
// (Dec 2025–Aug 2026) through the connected wp-admin tab. Writes recat/affected.json + recat/reference.json.
import fs from 'node:fs';
import path from 'node:path';
import { start, ROOT } from '../node/bridge.mjs';

const OUT = path.join(ROOT, 'recat');
const F = '_fields=id,date,link,slug,title,categories,tags,content';
const Q = {
  affected: `posts?categories=12&categories_exclude=1,11,13,14,15,3540,3655,3999,4006&status=publish&after=2024-06-30T23%3A59%3A59&per_page=100&orderby=id&order=asc&${F}`,
  reference: `posts?status=publish&after=2025-11-30T23%3A59%3A59&before=2026-09-01T00%3A00%3A00&per_page=100&orderby=id&order=asc&${F}`,
};
const b = await start({ log: () => {} });
const t0 = Date.now();
while (!b.connected()) { if (Date.now() - t0 > 300000) { console.error('tab not connected'); process.exit(3); } await new Promise((r) => setTimeout(r, 1000)); }
const perma = await b.submit('get', { path: 'posts?per_page=1&_fields=id,link,slug' });
console.log('permalink sample:', JSON.stringify(perma[0]));
for (const [name, q] of Object.entries(Q)) {
  const all = [];
  for (let page = 1; page < 60; page++) {
    const r = await b.submit('get', { path: `${q}&page=${page}` }, { timeoutMs: 120000 });
    if (!Array.isArray(r)) { console.log(`${name}: page ${page} → ${r && r.code}`); break; }
    all.push(...r); process.stdout.write(`${name} ${all.length}\r`);
    if (r.length < 100) break;
    await new Promise((z) => setTimeout(z, 400));
  }
  const slim = all.map((p) => ({ id: p.id, date: p.date, link: p.link, slug: p.slug, title: p.title.rendered, categories: p.categories, tags: p.tags, content: p.content.rendered }));
  fs.writeFileSync(path.join(OUT, name + '.json'), JSON.stringify(slim));
  console.log(`${name}: ${slim.length} posts · ids unique ${new Set(slim.map((x) => x.id)).size}`);
}
await b.close();
