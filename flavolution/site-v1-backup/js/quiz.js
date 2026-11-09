/* Flavolution quiz engine — vanilla JS, no build step. Content lives in data.js */
(function () {
  'use strict';
  var F = window.FLAV;
  var app = document.getElementById('app');
  var KEY = 'flav-quiz-v1';

  /* ---------------- storage (optional; page works without it) ---------------- */
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
  function save(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) {} }

  var st = { seg: null, ans: {}, step: 0, done: false };

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function segOf(id) { return F.SEGMENTS.filter(function (s) { return s.id === id; })[0]; }
  function chapter(id) { return F.CHAPTERS[id - 1]; }
  function reveals(c) { return c[2].split(' ').filter(Boolean); }
  function has(tags, ch) { return tags.indexOf(ch) !== -1; }

  function questionList(seg) {
    var sw = F.SWAPS[seg] || {};
    var ids = F.CORE.map(function (id) { return sw[id] || id; });
    // keep each question inside its own chapter (stable sort by chapter)
    return ids.map(function (id, i) { return { id: id, i: i }; })
      .sort(function (a, b) { return (F.Q[a.id].ch - F.Q[b.id].ch) || (a.i - b.i); })
      .map(function (x) { return x.id; });
  }

  function steps() {
    var out = [], last = 0;
    questionList(st.seg).forEach(function (id) {
      var ch = F.Q[id].ch;
      if (ch !== last) { out.push({ type: 'ch', ch: ch }); last = ch; }
      out.push({ type: 'q', id: id });
    });
    out.push({ type: 'end' });
    return out;
  }

  function answered() {
    return questionList(st.seg).filter(function (id) { return st.ans[id] != null; })
      .map(function (id) { return { id: id, c: F.Q[id].c[st.ans[id]] }; });
  }

  /* ---------------- meters (flavour: how the day went) ---------------- */
  var TIRED = ['F12', 'G1', 'B10', 'G13', 'A5', 'C8', 'G16', 'G5'];
  var HURTS_REVIEW = ['D8', 'E10', 'C6', 'E6', 'B2', 'E5', 'C2', 'C3'];
  var HURTS_MONEY = ['A2', 'G12', 'B4', 'B3', 'E1', 'F2', 'F6', 'D13', 'E7', 'B5', 'F4', 'F3', 'G18'];
  function clamp(v) { return Math.max(5, Math.min(100, Math.round(v))); }
  function meters() {
    var m = { sales: 55, energy: 85, review: 60 };
    answered().forEach(function (a) {
      var t = a.c[1], r = reveals(a.c);
      if (has(t, 'S')) { m.energy += 2; m.review += 1; }
      if (has(t, 'G')) m.sales += 3;
      if (has(t, 'V')) m.review += 2;
      if (has(t, 'P')) m.review += 1;
      r.forEach(function (id) {
        m.energy -= 2;
        if (TIRED.indexOf(id) !== -1) m.energy -= 5;
        if (HURTS_REVIEW.indexOf(id) !== -1) m.review -= 6;
        if (HURTS_MONEY.indexOf(id) !== -1) m.sales -= 4;
      });
    });
    return { sales: clamp(m.sales), energy: clamp(m.energy), review: clamp(m.review) };
  }

  /* ---------------- scoring ---------------- */
  function score() {
    var ax = { s: [0, 0], p: [0, 0], g: [0, 0] }, absent = 0, kind = 0, agg = {};
    answered().forEach(function (a) {
      var t = a.c[1];
      if (has(t, 'S')) ax.s[0]++; if (has(t, 'I')) ax.s[1]++;
      if (has(t, 'P')) ax.p[0]++; if (has(t, 'V')) ax.p[1]++;
      if (has(t, 'G')) ax.g[0]++; if (has(t, 'K')) ax.g[1]++;
      if (has(t, '@')) absent++;
      if (has(t, 'k')) kind++;
      reveals(a.c).forEach(function (id) {
        agg[id] = agg[id] || { id: id, n: 0, because: [] };
        agg[id].n++;
        if (agg[id].because.length < 1) agg[id].because.push(a.c[0]);
      });
    });
    var prior = (segOf(st.seg) || { g: 0 }).g;
    if (prior > 0) ax.g[0] += prior; else ax.g[1] += -prior;

    /* Thresholds are relative, not 50/50: most questions offer one "systematic" option against three
       instinct ones, so picking it more than ~1 time in 3 already marks a systematic owner.
       Tuned by simulation so every archetype lands between ~6% and ~15% of random answer sets. */
    var T = { s: 0.34, p: 0.5, g: 0.5 };
    function share(pair) { var t = pair[0] + pair[1]; return t ? pair[0] / t : 0.5; }
    var sys = share(ax.s) > T.s, prod = share(ax.p) >= T.p, grow = share(ax.g) > T.g;

    var code;
    if (absent >= 2) code = 'remote';
    else if (st.seg === 'franchise' && (!sys || agg.G14)) code = 'formula';
    else {
      var key = (sys ? 'S' : 'I') + ' ' + (prod ? 'P' : 'V') + ' ' + (grow ? 'G' : 'K');
      // "ใจดี" modifier: an instinct/product/stable owner who keeps choosing the kind option is the kind-hearted owner
      if (key === 'I P K' && kind >= 4) key = 'I V K';
      code = F.ARCH_ORDER.filter(function (c) { return F.ARCH[c].key === key; })[0];
    }

    var pains = Object.keys(agg).map(function (id) { var x = agg[id]; x.score = F.PAINS[id].v * 10 + x.n * 4; return x; })
      .sort(function (a, b) { return b.score - a.score; }).slice(0, 3);
    F.ARCH[code].fb.forEach(function (id) {
      if (pains.length < 3 && !pains.some(function (p) { return p.id === id; })) pains.push({ id: id, n: 0, because: [], generic: true });
    });

    // dot position (0 = left label, 100 = right label), rescaled so the decision threshold sits at the middle
    function place(pair, t) {
      var s = share(pair);
      var x = s > t ? 50 - 50 * (s - t) / (1 - t) : 50 + 50 * (t - s) / t;
      return Math.round(Math.max(6, Math.min(94, x)));
    }
    return { code: code, pains: pains, axes: { s: place(ax.s, T.s), p: place(ax.p, T.p), g: place(ax.g, T.g) } };
  }

  /* ---------------- shared bits of markup ---------------- */
  function hud(m) {
    function row(cls, name, v) {
      return '<div class="meter ' + cls + '"><div class="meter__row"><span class="meter__name">' + name + '</span><span class="meter__val">' + v + '</span></div><div class="meter__bar"><div class="meter__fill" style="--v:' + v + '%"></div></div></div>';
    }
    return '<aside class="hud" aria-label="มิเตอร์ความวุ่นวาย"><div class="hud__head"><span class="hud__title">มิเตอร์ความวุ่นวาย</span><span class="badge badge--chili label" style="box-shadow:none;font-size:11px">LIVE</span></div>' +
      row('meter--sales', 'ยอดขาย', m.sales) + row('meter--energy', 'พลังงานเจ้าของ', m.energy) + row('meter--review', 'รีวิว', m.review) +
      '<div class="hud__pot" aria-hidden="true">' + potSvg('#FF5A1F', 120) + '</div><p class="hud__foot">ทุกคำตอบขยับมิเตอร์ ดูตอนจบว่าวันของคุณจบยังไง</p></aside>';
  }
  function potSvg(bg, w) {
    return '<svg viewBox="0 0 170 170" width="' + w + '" aria-hidden="true"><circle cx="85" cy="85" r="80" fill="' + bg + '" stroke="#141414" stroke-width="6"/>' +
      '<path d="M52 62 c-14 -30 34 -42 42 -18 c14 -18 46 -2 32 22 v20 H52 Z" fill="#FFF4E0" stroke="#141414" stroke-width="6" stroke-linejoin="round"/>' +
      '<rect x="48" y="84" width="76" height="12" rx="6" fill="#141414"/><path d="M54 96 H118 V122 a16 16 0 0 1 -16 16 H70 a16 16 0 0 1 -16 -16 Z" fill="#FFF4E0" stroke="#141414" stroke-width="6" stroke-linejoin="round"/>' +
      '<path d="M40 106 h14 M118 106 h14" stroke="#141414" stroke-width="8" stroke-linecap="round"/><circle cx="76" cy="112" r="4" fill="#141414"/><circle cx="96" cy="112" r="4" fill="#141414"/>' +
      '<path d="M80 124 q6 5 12 0" fill="none" stroke="#141414" stroke-width="5" stroke-linecap="round"/></svg>';
  }
  function topBar(label, p, back) {
    return '<div class="app-top"><div class="wrap"><button class="btn-ghost" type="button" data-act="back"' + (back ? '' : ' disabled') + '>← ย้อน</button>' +
      '<span class="badge badge--neon label app-top__time">' + esc(label) + '</span>' +
      '<div class="track app-top__track" style="--p:' + Math.max(3, p) + '%" role="progressbar" aria-label="เวลาในวัน" aria-valuenow="' + p + '" aria-valuemin="0" aria-valuemax="100"><div class="track__fill"></div></div>' +
      '</div></div>';
  }

  /* ---------------- screens ---------------- */
  function render() {
    var list = st.seg ? steps() : null;
    if (!st.seg) return renderSeg();
    if (st.done) return renderResult();
    var s = list[st.step];
    if (!s) { st.step = 0; s = list[0]; }
    if (s.type === 'ch') return renderChapter(s.ch);
    if (s.type === 'q') return renderQuestion(s.id);
    return renderEnd();
  }

  function renderSeg() {
    var saved = load();
    var resume = saved && saved.seg && !saved.done && Object.keys(saved.ans || {}).length;
    app.innerHTML =
      '<section class="quiz fadein"><div class="wrap">' +
      '<div class="quiz__bar"><span class="badge badge--ink label">ก่อนเริ่ม</span><span class="badge label">25 ข้อ · 7 นาที · ไม่ต้องกรอกอีเมล</span></div>' +
      '<h2>ร้านของคุณตอนนี้เป็นแบบไหน</h2>' +
      '<p class="hero__sub">ตอบตามจริงที่ทำอยู่ ไม่ใช่ตามที่ควรทำ ไม่มีคำตอบผิด เพราะเราไม่ได้ให้คะแนนร้าน เราหาว่าร้านคุณมองข้ามอะไรอยู่</p>' +
      (resume ? '<p class="mt"><button class="btn-ghost" type="button" data-act="resume">ทำต่อจากที่ค้างไว้ (' + Object.keys(saved.ans).length + ' ข้อ)</button></p>' : '') +
      '<div class="seg-grid">' + F.SEGMENTS.map(function (s, i) {
        return '<button class="ticket" type="button" data-seg="' + s.id + '"><span class="ticket__stub" aria-hidden="true"><span>' + (i + 1) + '</span></span><span>' + esc(s.t) + '</span><span class="ticket__check" aria-hidden="true">✓</span></button>';
      }).join('') + '</div>' +
      '<p class="note mt">ถ้ายังไม่เปิดร้าน ตอบตามที่คิดว่าจะทำ</p>' +
      '</div></section>';
  }

  function renderChapter(chId) {
    var c = chapter(chId);
    var no = F.CHAPTERS.indexOf(c) + 1;
    app.innerHTML = topBar('ตอนนี้ ' + c.time, c.p, st.step > 0) +
      '<section class="chapter chapter--screen fadein"><div class="wrap">' +
      '<div class="chapter__head"><span class="badge badge--chili label">บทที่ ' + no + ' / 7</span><span class="badge badge--neon label">' + esc(c.label) + '</span></div>' +
      '<div class="chapter__time">' + esc(c.time) + '</div><h2>' + esc(c.title) + '</h2><p class="chapter__scene">' + esc(c.scene) + '</p>' +
      '<button class="cta" type="button" data-act="next">ไปต่อ <span class="cta__arrow" aria-hidden="true">→</span></button>' +
      '</div></section>';
    focusFirst('[data-act="next"]');
  }

  function renderQuestion(id) {
    var q = F.Q[id], c = chapter(q.ch);
    var ids = questionList(st.seg), n = ids.indexOf(id) + 1;
    app.innerHTML = topBar(c.time + ' · ' + c.label, c.p, true) +
      '<section class="quiz fadein"><div class="wrap">' +
      '<div class="quiz__bar"><span class="badge badge--ink label quiz__count">ข้อ ' + n + ' / ' + ids.length + '</span><span class="badge label">' + esc(c.time) + ' · ' + esc(c.title) + '</span></div>' +
      '<div class="quiz__grid"><div>' +
      '<h2><span class="q-no">Q' + n + '</span>' + esc(q.t) + '</h2>' +
      '<ul class="tickets" role="list">' + q.c.map(function (ch, i) {
        var sel = st.ans[id] === i;
        return '<li><button class="ticket' + (sel ? ' is-selected' : '') + '" type="button" data-choice="' + i + '" aria-pressed="' + sel + '"><span class="ticket__stub" aria-hidden="true"><span>' + (i + 1) + '</span></span><span>' + esc(ch[0]) + '</span><span class="ticket__check" aria-hidden="true">✓</span></button></li>';
      }).join('') + '</ul></div>' + hud(meters()) + '</div>' +
      '</div></section>';
  }

  function renderEnd() {
    var m = meters();
    app.innerHTML = topBar('23:00 ปิดร้าน', 100, true) +
      '<section class="chapter chapter--screen fadein"><div class="wrap">' +
      '<div class="chapter__head"><span class="badge badge--chili label">จบวัน</span></div>' +
      '<div class="chapter__time">23:00</div><h2>ปิดร้านแล้ว</h2><p class="chapter__scene">วันนี้จบแบบนี้ ยอดขาย ' + m.sales + ' · พลังงานเหลือ ' + m.energy + ' · รีวิว ' + m.review + '</p>' +
      '<button class="cta" type="button" data-act="finish">ดูผลของร้านคุณ <span class="cta__arrow" aria-hidden="true">→</span></button>' +
      '</div></section>';
    focusFirst('[data-act="finish"]');
  }

  function lineUrl(msg) {
    var id = (F.LINE_OA_ID || '').trim();
    return id ? 'https://line.me/R/oaMessage/' + encodeURIComponent(id) + '/?' + encodeURIComponent(msg) : '';
  }

  function renderResult() {
    var r = score(), a = F.ARCH[r.code], m = meters(), seg = segOf(st.seg);
    var pair = F.ARCH[a.pair];
    var msg = 'สวัสดีครับ/ค่ะ ทำควิซหนึ่งวันในร้านของคุณแล้ว ร้านเราได้ผลเป็น "' + a.n + '" (' + (seg ? seg.t : '') + ') เรื่องที่อยากคุย: ' +
      r.pains.map(function (p, i) { return (i + 1) + ') ' + F.PAINS[p.id].n; }).join(' ');
    var url = lineUrl(msg);

    app.innerHTML =
      '<section class="result fadein"><div class="wrap"><div class="result__inner">' +
      '<div class="result__lead"><span class="badge badge--neon label">ผลของคุณ</span><span class="badge label" style="background:var(--paper)">23:00 · ปิดร้าน</span></div>' +
      '<article class="card">' +
      '<span class="stamp sticker" aria-hidden="true">บุคลิกร้าน</span>' +
      '<div class="card__headwrap"><p class="card__type label">ร้านของคุณคือ</p><h2>' + esc(a.n) + '</h2><p class="card__essence">' + esc(a.e) + '</p></div>' +
      '<div class="card__art">' + potSvg(a.bg, 170) + '</div>' +
      '<hr class="card__divider">' +
      '<div class="day-end" aria-label="วันของคุณจบแบบนี้"><div><b>' + m.sales + '</b><span>ยอดขาย</span></div><div><b>' + m.energy + '</b><span>พลังงานเจ้าของ</span></div><div><b>' + m.review + '</b><span>รีวิว</span></div></div>' +
      '<hr class="card__divider">' +
      '<div class="grid grid--2"><div><h3>จุดแข็งของร้านแบบคุณ</h3><ul class="pill-list">' + a.st.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') +
      '</ul><p class="because mt">ที่ต้องระวัง: ' + esc(a.w) + '</p></div>' +
      '<div><h3>วิธีคิดของคุณ</h3><div class="axes">' +
      axis('มีระบบ', 'ใช้สัญชาตญาณ', r.axes.s) + axis('เน้นของ', 'เน้นเรื่องเล่า', r.axes.p) + axis('อยากโต', 'อยากมั่นคง', r.axes.g) +
      '</div></div></div>' +
      '<hr class="card__divider">' +
      '<h3>3 อย่างที่ร้านคุณทำอยู่โดยไม่รู้ตัว</h3><div class="findings">' +
      r.pains.map(function (p, i) { return finding(p, i); }).join('') + '</div>' +
      (url ? '<a class="btn-line" href="' + url + '" target="_blank" rel="noopener">' : '<button class="btn-line" type="button" data-act="line">') +
      '<span class="btn-line__icon" aria-hidden="true">LINE</span>ทัก LINE คุยฟรี 30 นาที' + (url ? '</a>' : '</button>') +
      '<p class="note" style="margin-top:10px">ข้อความใน LINE จะกรอกผลของคุณไว้ให้แล้ว เราจะรู้จักร้านคุณก่อนคุย</p>' +
      '<p class="note">คู่ที่เติมกันได้: <b>' + esc(pair.n) + '</b> ' + esc(pair.e) + '</p>' +
      '<div class="result-actions"><button class="btn-ghost" type="button" data-act="share">ส่งให้หุ้นส่วนทำด้วย</button><button class="btn-ghost" type="button" data-act="restart">ทำใหม่</button><a class="btn-ghost" href="services.html" style="text-decoration:none">ดูบริการทั้งหมด</a></div>' +
      '</article></div></div></section>';
    app.dataset.msg = msg;
    app.dataset.code = r.code;
    window.scrollTo(0, 0);
  }

  function axis(left, right, pRight) {
    return '<div><div class="axis__row"><span>' + left + '</span><span>' + right + '</span></div><div class="axis__bar"><span class="axis__dot" style="--x:' + pRight + '%"></span></div></div>';
  }

  function finding(p, i) {
    var d = F.PAINS[p.id], sv = F.SERVICES[d.s];
    var help = d.s === 'talk'
      ? 'เรื่องนี้ไม่ใช่งานหลักของเรา แต่คุยได้ และเราแนะนำคนที่ทำเป็นให้'
      : '<a href="services.html#' + d.s + '">' + esc(sv.n) + '</a>';
    return '<div class="finding"><div class="finding__head"><span class="finding__num">0' + (i + 1) + '</span><span class="finding__title">' + esc(d.n) + '</span></div>' +
      '<p class="finding__body">' + esc(d.b) + '</p>' +
      (p.generic ? '<p class="because">ข้อนี้ไม่ได้มาจากคำตอบของคุณโดยตรง แต่เป็นจุดที่ร้านแบบคุณมักพลาด</p>'
        : '<p class="because">เพราะคุณตอบว่า “' + esc(p.because[0]) + '”</p>') +
      '<div class="mini mini--self"><span class="mini__tag">ทำเองได้</span><span>' + esc(d.d) + '</span></div>' +
      '<div class="mini mini--us"><span class="mini__tag">เราช่วยได้</span><span>' + help + '</span></div></div>';
  }

  /* friend view: quiz.html#r=chef */
  function renderShared(code) {
    var a = F.ARCH[code];
    app.innerHTML = '<section class="result fadein"><div class="wrap"><div class="result__inner"><article class="card">' +
      '<div class="card__headwrap"><p class="card__type label">เพื่อนของคุณได้ผลเป็น</p><h2>' + esc(a.n) + '</h2><p class="card__essence">' + esc(a.e) + '</p></div>' +
      '<div class="card__art">' + potSvg(a.bg, 170) + '</div><hr class="card__divider">' +
      '<ul class="pill-list">' + a.st.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<p class="because mt">ที่ต้องระวัง: ' + esc(a.w) + '</p>' +
      '<button class="cta" type="button" data-act="fresh">แล้วร้านคุณล่ะ ทำ 7 นาที <span class="cta__arrow" aria-hidden="true">→</span></button>' +
      '</article></div></div></section>';
  }

  /* ---------------- actions ---------------- */
  function go(delta) { st.step = Math.max(0, st.step + delta); save(st); render(); window.scrollTo(0, 0); }
  function focusFirst(sel) { var el = app.querySelector(sel); if (el) el.focus({ preventScroll: true }); }
  function toast(t) {
    var el = document.querySelector('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = t; el.classList.add('is-on');
    clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove('is-on'); }, 3200);
  }
  function copy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
    return Promise.reject();
  }

  var locked = false;
  app.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b || locked) return;

    if (b.dataset.seg) {
      st = { seg: b.dataset.seg, ans: {}, step: 0, done: false };
      b.classList.add('is-selected');
      locked = true;
      setTimeout(function () { locked = false; save(st); render(); window.scrollTo(0, 0); }, 320);
      return;
    }
    if (b.dataset.choice != null) {
      var s = steps()[st.step];
      st.ans[s.id] = +b.dataset.choice;
      app.querySelectorAll('.ticket').forEach(function (t) { t.classList.remove('is-selected'); t.setAttribute('aria-pressed', 'false'); });
      void b.offsetWidth; b.classList.add('is-selected'); b.setAttribute('aria-pressed', 'true');
      // live meters
      var m = meters(), fills = app.querySelectorAll('.meter__fill'), vals = app.querySelectorAll('.meter__val');
      [m.sales, m.energy, m.review].forEach(function (v, i) { if (fills[i]) fills[i].style.setProperty('--v', v + '%'); if (vals[i]) vals[i].textContent = v; });
      locked = true;
      setTimeout(function () { locked = false; go(1); }, 480);
      return;
    }
    switch (b.dataset.act) {
      case 'next': go(1); break;
      case 'back': go(-1); break;
      case 'resume': st = load(); render(); break;
      case 'finish': st.done = true; save(st); render(); break;
      case 'restart': clear(); st = { seg: null, ans: {}, step: 0, done: false }; history.replaceState(null, '', location.pathname); render(); window.scrollTo(0, 0); break;
      case 'fresh': history.replaceState(null, '', location.pathname); st = { seg: null, ans: {}, step: 0, done: false }; render(); break;
      case 'line':
        copy(app.dataset.msg).then(function () { toast('ยังไม่ได้ตั้ง LINE OA ของร้าน (ใส่ใน js/data.js) ข้อความผลของคุณถูกคัดลอกไว้แล้ว'); },
          function () { toast('ยังไม่ได้ตั้ง LINE OA ของร้าน (ใส่ใน js/data.js)'); });
        break;
      case 'share':
        var link = location.href.split('#')[0] + '#r=' + app.dataset.code;
        var text = 'ร้านเราได้ผลเป็น "' + F.ARCH[app.dataset.code].n + '" ลองทำดูว่าร้านคุณเป็นแบบไหน';
        if (navigator.share) navigator.share({ title: 'หนึ่งวันในร้านของคุณ', text: text, url: link }).catch(function () {});
        else copy(text + ' ' + link).then(function () { toast('คัดลอกลิงก์แล้ว ส่งให้หุ้นส่วนได้เลย'); }, function () { toast(link); });
        break;
    }
  });

  // keyboard: 1–5 picks a choice, ← goes back
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= 8) {
      var sel = app.querySelectorAll('[data-choice], [data-seg]')[n - 1];
      if (sel) sel.click();
    } else if (e.key === 'ArrowLeft') {
      var back = app.querySelector('[data-act="back"]:not([disabled])'); if (back) back.click();
    }
  });

  /* ---------------- boot ---------------- */
  var m = location.hash.match(/r=([a-z]+)/);
  if (m && F.ARCH[m[1]]) { renderShared(m[1]); return; }
  var saved = load();
  if (saved && saved.done && saved.seg) { st = saved; }
  render();
})();
