/* bridge-page.js — runs INSIDE the wp-admin tab (loaded by the bookmarklet). Fixed glue only: it long-polls the desk on
   127.0.0.1 for {id, fn, args} and calls the UNCHANGED toolkit functions already in the page. No eval of anything received.
   Placeholders are filled by bridge.mjs when serving this file. */
(function () {
  if (window.__KB && window.__KB.alive) { window.__KB.stop = false; return 'bridge already running'; }
  var BASE = '__BRIDGE_URL__', TOKEN = '__BRIDGE_TOKEN__';
  var KB = window.__KB = { alive: true, stop: false, done: 0, last: '' };
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var poll = function (get, ok, ms, max) {
    return (async function () { var t0 = Date.now(); while (!ok(get())) { if (Date.now() - t0 > max) throw new Error('poll timeout'); await sleep(ms); } return get(); })();
  };
  /* the toolkit itself, exactly as Mat's sessions load it */
  if (typeof window.__open !== 'function' && localStorage.getItem('kntk')) (0, eval)(localStorage.getItem('kntk'));

  /* ---- the allow-list: every fn is a fixed call into the toolkit ---- */
  var FN = {
    ping: function () { return { ver: window.__VER, cur: window.__ST && window.__ST.cur, url: location.href }; },
    status: function () { return window.__status(); },
    kntk: function () { var t = localStorage.getItem('kntk') || ''; return { len: t.length, h: window.__h(t) }; }, /* compare with kn/node/toolkit/kntk-4.1.11.js */
    selftest: async function () {
      window.__selftest();
      await poll(function () { return window.__STR; }, function (s) { return s !== 'running'; }, 500, 120000);
      await sleep(3000); /* 4.1.9 appends a users/me check after the base run */
      return window.__STR;
    },
    state: function () { return JSON.parse(JSON.stringify(window.__ST)); },
    open: function (a) { return window.__open(a.k, a.items, a.pics, { cook: !!a.cook, decisions: a.decisions }); },
    runUp: async function (a) {
      var miss = a.pics.filter(function (p) { return !window.__MAP[p.key]; });
      if (!miss.length) return { missing: [], err: [] };
      var r = window.__runUp(miss); if (Array.isArray(r)) return { refused: r };
      await poll(function () { return window.__JOB; }, function (j) { return j && j.done >= j.total; }, 2000, 30 * 60 * 1000);
      return { missing: a.pics.filter(function (p) { return !window.__MAP[p.key]; }).map(function (p) { return p.key; }), err: window.__JOB.err };
    },
    build: async function (a) { /* = the fixed part of mkset's build.js, same logic, data from bridge.json */
      var U = function (k) { return window.__MAP[k].url; }; var A = function (k) { return a.alt[k]; }; var list = [];
      var NN = function (x) { return String(x || '').toLowerCase().replace(/[\s\-'’.()]/g, ''); };
      for (var r of a.R) {
        var body = r.body.map(function (x) { return { u: U(x[0]), a: A(x[0]), c: x[1] }; });
        var tags = [];
        for (var t of r.tags) {
          if (typeof t === 'string') {
            var js = await window.__api('tags?search=' + encodeURIComponent(t) + '&per_page=20&_fields=id,name');
            var ex = (js || []).find(function (x) { return x.name === t; }) || (js || []).find(function (x) { return NN(x.name) === NN(t); });
            if (!ex) { var cr = await window.__api('tags', { method: 'POST', body: JSON.stringify({ name: t }) }); if (cr && cr.id) ex = cr; else if (cr && cr.data && cr.data.term_id) ex = { id: cr.data.term_id }; }
            if (!ex || !ex.id) throw new Error('tag ' + t);
            if (!tags.includes(ex.id)) tags.push(ex.id);
          } else if (!tags.includes(t)) tags.push(t);
        }
        var content = window.__rev({ verdict: r.verdict, intro: r.intro, body: body, name: r.name, roman: r.roman, brand: r.brand, store: r.store, price: r.price, cat: r.cat, date: r.date.slice(0, 10), cover: { u: U(r.k + '-c') }, foot: r.foot });
        var it = { title: r.title, slug: r.slug, status: 'publish', date: r.date, categories: [12], tags: tags, featured_media: window.__MAP[r.k + '-c'].id, content: content,
          meta: { _yoast_wpseo_title: r.yt, _yoast_wpseo_metadesc: r.yd }, __k: r.k, __cap: r.cap, __coverUrl: U(r.k + '-c'), __src: r.src, __labelPic: r.labelPic, __brand: r.brand, __price: r.price, __dev: r.dev, __row: r.row };
        if (r.brandSrc) it.__brandSrc = r.brandSrc;
        list.push(it);
      }
      window.__LIST = list;
      return { n: list.length, first: list[0] && list[0].__row, last: list[list.length - 1] && list[list.length - 1].__row, gate: await window.__vgate(list, false) };
    },
    runPub: async function (a) { /* ONE call per set — the desk enforces it too */
      var L = window.__LIST || [];
      if (L.length !== a.n || (L[0] && L[0].__row) !== a.first) throw new Error('LIST mismatch ' + L.length + ' ' + (L[0] && L[0].__row));
      var r = window.__runPub(L); if (Array.isArray(r)) return { refused: r };
      await poll(function () { return window.__PJ; }, function (p) { return p && p.done >= p.total; }, 2000, 30 * 60 * 1000);
      await poll(function () { var s = window.__ST.sets[window.__ST.cur]; return s ? Object.keys(s.pub).length : 0; }, function (n) { return n + window.__PJ.err.length >= L.length; }, 1000, 60000).catch(function () { });
      var res = window.__PJ.res;
      return { ids: L.map(function (x) { return { slug: x.slug, row: x.__row, id: res[x.slug] && res[x.slug].id }; }), err: window.__PJ.err };
    },
    finalize: async function (a) {
      var out = [];
      for (var id of a.ids) { await window.__cmp(id, {}); await window.__flag(id, 'D22'); out.push({ id: id, review: await window.__addReview(a.pageId, id) }); }
      return out;
    },
    pageHas: async function (a) {
      var p = await window.__api('posts/' + a.pageId + '?context=edit&_fields=content'); var c = p.content.raw;
      return { missing: a.slugs.filter(function (s) { return c.indexOf('/' + s + '/') < 0; }), figs: (c.match(/<figure/g) || []).length };
    },
    close: function (a) { return window.__close(a.k, a.ids.join(',')); },
    get: function (a) { if (!/^[a-z0-9_\/\-?=&,.%]+$/i.test(a.path) || /\b(delete|force)\b/i.test(a.path)) throw new Error('get: path'); return window.__api(a.path); },
    dumpLog: function (a) { return window.__dumpLog(a.n || 500); },
    /* recategorise ONE published post: only `categories` and `tags` can ever be sent; tags are only added; nothing happens unless the
       post still looks exactly like the plan said (so a human edit in between is never overwritten) */
    setTerms: async function (a) {
      var same = function (x, y) { x = x.slice().sort(); y = y.slice().sort(); return x.length === y.length && x.every(function (v, i) { return v === y[i]; }); };
      if (!Number.isInteger(a.id) || !Array.isArray(a.cats) || !a.cats.length || !a.cats.every(Number.isInteger) || !Array.isArray(a.addTags) || !a.addTags.every(Number.isInteger)) throw new Error('setTerms: bad args');
      var cur = await window.__api('posts/' + a.id + '?context=edit&_fields=id,status,categories,tags');
      if (!cur || cur.id !== a.id) throw new Error('setTerms: cannot read post ' + a.id + ' ' + JSON.stringify(cur).slice(0, 120));
      var before = { cats: cur.categories, tags: cur.tags };
      if (cur.status !== 'publish') return { result: 'skip-status', before: before, status: cur.status };
      var tags = cur.tags.slice(); a.addTags.forEach(function (t) { if (tags.indexOf(t) < 0) tags.push(t); });
      if (same(cur.categories, a.cats) && tags.length === cur.tags.length) return { result: 'already', before: before };
      if (!same(cur.categories, a.expectCats)) return { result: 'skip-changed', before: before };
      var r = await window.__api('posts/' + a.id, { method: 'POST', body: JSON.stringify({ categories: a.cats, tags: tags }) });
      if (!r || r.id !== a.id || !same(r.categories || [], a.cats) || !same(r.tags || [], tags)) throw new Error('setTerms: unexpected reply for ' + a.id + ' ' + JSON.stringify(r).slice(0, 160));
      return { result: 'updated', before: before, after: { cats: r.categories, tags: r.tags } };
    }
  };

  (async function loop() {
    while (!KB.stop) {
      var job = null;
      try { job = await (await fetch(BASE + '/job?token=' + TOKEN)).json(); } catch (e) { KB.last = 'desk unreachable ' + e.message; await sleep(3000); continue; }
      if (!job || !job.id) continue;
      var out = { id: job.id };
      try { if (!FN[job.fn]) throw new Error('unknown fn ' + job.fn); out.result = await FN[job.fn](job.args || {}); }
      catch (e) { out.error = String(e && e.message || e); }
      KB.done++; KB.last = job.fn + (out.error ? ' ERR ' + out.error : ' ok');
      try { await fetch(BASE + '/result?token=' + TOKEN, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(out) }); }
      catch (e) { KB.last = 'result not delivered ' + e.message; }
    }
    KB.alive = false;
  })();
  return 'bridge running -> ' + BASE;
})();
