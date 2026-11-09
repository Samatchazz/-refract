// mockwp.mjs — an in-memory WordPress just big enough for the toolkit's REST calls, for end-to-end tests without the real site.
// mockWP() returns a fixtures function (method, url, body) → object | {__raw,status} | undefined, for runtime.boot({fixtures}).
// fixtures.$ exposes the stores for assertions.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './runtime.mjs';

export function mockWP(opts = {}) {
  const tagSnap = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'tags.json'), 'utf8'));
  const tags = new Map(Object.entries(tagSnap).map(([id, t]) => [Number(id), { id: Number(id), name: t.name, count: t.count || 0 }]));
  const posts = new Map(); const media = new Map(); let nextId = 90000; let nextMedia = 500000; let nextTag = 900000;
  const log = [];
  const monthPage = { id: opts.monthPageId || 60584, title: { raw: 'month' }, slug: 'new-7-11-snacks-2024-12', status: 'publish', date: '2024-12-01T10:00:00', tags: [], categories: [3540, 3999],
    content: { raw: '<p>intro</p>\n<h2>🆕 รีวิวเดือนนี้</h2>\n<h2>🛒 ตามไปดูขนมใหม่ในเซเว่น</h2>\n<p>z</p>' } };
  posts.set(monthPage.id, monthPage);
  const q = (url) => Object.fromEntries(new URL('http://x' + url).searchParams);
  const findPosts = (p) => {
    let arr = [...posts.values()];
    if (p.slug) { const s = p.slug.split(','); arr = arr.filter((x) => s.includes(x.slug)); }
    if (p.search) arr = arr.filter((x) => (x.title.raw || '').includes(p.search) || (x.content.raw || '').includes(p.search));
    if (p.after) arr = arr.filter((x) => (x.date || '') > p.after);
    if (p.before) arr = arr.filter((x) => (x.date || '') < p.before);
    if (p.tags) arr = arr.filter((x) => (x.tags || []).includes(Number(p.tags)));
    return arr;
  };
  const view = (x) => ({ id: x.id, slug: x.slug, date: x.date, title: { raw: x.title.raw, rendered: x.title.raw }, content: { raw: x.content.raw, rendered: x.content.raw }, featured_media: x.featured_media, tags: x.tags, categories: x.categories, status: x.status, meta: x.meta });
  function fixtures(method, url, body) {
    log.push({ method, path: url.split('?')[0] });
    if (opts.intercept) { const r = opts.intercept(method, url, body, log); if (r !== undefined) return r; }
    const p = q(url); const u = url.split('?')[0];
    let m;
    if (method === 'GET') {
      if (u.endsWith('/users/me')) return { id: 1 };
      if (u.endsWith('/tags') && p.include) return p.include.split(',').map((i) => tags.get(Number(i))).filter(Boolean);
      if (u.endsWith('/tags') && p.search !== undefined) return [...tags.values()].filter((t) => t.name.toLowerCase().includes(p.search.toLowerCase())).slice(0, 20);
      if ((m = u.match(/\/posts\/(\d+)$/))) { const x = posts.get(Number(m[1])); return x ? view(x) : { code: 'rest_post_invalid_id', data: { status: 404 } }; }
      if (u.endsWith('/posts')) return findPosts(p).map(view);
      if ((m = u.match(/\/media\/(\d+)$/))) { const x = media.get(Number(m[1])); return x ? { id: x.id, source_url: x.source_url, alt_text: x.alt_text, media_details: { sizes: {} } } : {}; }
    }
    if (method === 'POST') {
      if (u.endsWith('/media')) { const id = nextMedia++; const x = { id, source_url: `https://kinnom.co/wp-content/uploads/mock/${id}.jpg`, alt_text: '' }; media.set(id, x); return { id, source_url: x.source_url }; }
      if ((m = u.match(/\/media\/(\d+)$/))) { const x = media.get(Number(m[1])); Object.assign(x, JSON.parse(body)); return { id: x.id }; }
      if (u.endsWith('/tags')) { const { name } = JSON.parse(body); const id = nextTag++; tags.set(id, { id, name, count: 0 }); return { id, name }; }
      if (u.endsWith('/posts')) {
        const b = JSON.parse(body); const id = nextId++;
        const x = { id, slug: b.slug, date: b.date, title: { raw: b.title }, content: { raw: b.content }, featured_media: b.featured_media, tags: b.tags, categories: b.categories, status: b.status, meta: b.meta };
        posts.set(id, x); return view(x);
      }
      if ((m = u.match(/\/posts\/(\d+)$/))) { const x = posts.get(Number(m[1])); const b = JSON.parse(body); if (b.content !== undefined) x.content.raw = b.content; if (b.tags) x.tags = b.tags; if (b.categories) x.categories = b.categories; return view(x); }
    }
    return undefined;
  }
  fixtures.$ = { posts, media, tags, log, monthPage, addPost: (x) => posts.set(x.id, { title: { raw: '' }, content: { raw: '' }, status: 'publish', tags: [], categories: [], ...x }) };
  return fixtures;
}
