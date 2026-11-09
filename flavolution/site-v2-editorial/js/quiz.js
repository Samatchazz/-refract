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
  function metersHtml(m) {
    function row(cls, name, v) {
      return '<div class="meter ' + cls + '"><div class="meter__row"><span>' + name + '</span><b>' + v + '</b></div><div class="meter__bar"><div class="meter__fill" style="--v:' + v + '%"></div></div></div>';
    }
    return '<div class="meters" aria-label="วันของคุณตอนนี้">' + row('meter--sales', 'ยอดขาย', m.sales) + row('meter--energy', 'พลังงาน', m.energy) + row('meter--review', 'รีวิว', m.review) + '</div>';
  }
  function stage(sky, top, body) {
    return '<section class="stage" data-sky="' + sky + '">' + top + '<div class="stage__body"><div class="wrap enter">' + body + '</div></div></section>';
  }
  function topBar(opts) {
    return '<div class="stage__top"><div class="wrap">' +
      '<button class="back" type="button" data-act="back"' + (opts.back ? '' : ' disabled') + '>← ย้อน</button>' +
      (opts.count ? '<span class="stage__count">' + opts.count + '</span>' : '') +
      '<span class="stage__time">' + esc(opts.time) + '</span>' +
      '<div class="progress" role="progressbar" aria-label="ความคืบหน้า" aria-valuenow="' + opts.p + '" aria-valuemin="0" aria-valuemax="100"><i style="--p:' + opts.p + '%"></i></div>' +
      '</div></div>';
  }
  function progressPct() {
    var ids = questionList(st.seg), done = ids.filter(function (id) { return st.ans[id] != null; }).length;
    return Math.round(done / ids.length * 100);
  }

  /* ---------------- screens ---------------- */
  function render() {
    if (!st.seg) return renderSeg();
    if (st.done) return renderResult();
    var list = steps(), s = list[st.step];
    if (!s) { st.step = 0; s = list[0]; }
    if (s.type === 'ch') return renderChapter(s.ch);
    if (s.type === 'q') return renderQuestion(s.id);
    return renderEnd();
  }

  function renderSeg() {
    var saved = load();
    var resume = saved && saved.seg && !saved.done && Object.keys(saved.ans || {}).length;
    app.innerHTML = stage('0', '',
      '<div class="seg">' +
      '<p class="eyebrow">Before we start</p><p class="note" style="color:var(--muted-on-ink);margin-top:6px">25 ข้อ · 7 นาที · ไม่ต้องกรอกอีเมล</p>' +
      '<h1>ร้านของคุณ<br>ตอนนี้เป็นแบบไหน</h1>' +
      '<p class="lead" style="color:var(--muted-on-ink)">ตอบตามที่ทำอยู่จริง ไม่ใช่ตามที่ควรทำ ไม่มีคำตอบผิด เพราะเราไม่ได้ให้คะแนนร้าน เราแค่หาว่าร้านคุณมองข้ามอะไรอยู่</p>' +
      (resume ? '<p style="margin-top:22px"><button class="btn btn--cream" type="button" data-act="resume">ทำต่อจากที่ค้างไว้ (' + Object.keys(saved.ans).length + ' ข้อ) <span class="btn__arrow" aria-hidden="true">→</span></button></p>' : '') +
      '<div class="seg__grid">' + F.SEGMENTS.map(function (s, i) {
        return '<button class="choice" type="button" data-seg="' + s.id + '"><span class="choice__k">0' + (i + 1) + '</span><span>' + esc(s.t) + '</span></button>';
      }).join('') + '</div>' +
      '<p class="note" style="margin-top:22px;color:var(--muted-on-ink)">ถ้ายังไม่เปิดร้าน ตอบตามที่คิดว่าจะทำ</p></div>');
  }

  function renderChapter(chId) {
    var c = chapter(chId), no = F.CHAPTERS.indexOf(c) + 1;
    app.innerHTML = stage(chId, topBar({ back: st.step > 0, time: c.label, p: progressPct() }),
      '<div class="chap"><p class="chap__no">บทที่ ' + no + ' / 7</p>' +
      '<div class="chap__time">' + esc(c.time) + '</div><h2>' + esc(c.title) + '</h2><p>' + esc(c.scene) + '</p>' +
      '<button class="btn" type="button" data-act="next">ไปต่อ <span class="btn__arrow" aria-hidden="true">→</span></button></div>');
    focusFirst('[data-act="next"]');
  }

  function renderQuestion(id) {
    var q = F.Q[id], c = chapter(q.ch);
    var ids = questionList(st.seg), n = ids.indexOf(id) + 1;
    app.innerHTML = stage(q.ch, topBar({ back: true, count: 'ข้อ ' + n + ' / ' + ids.length, time: c.time + ' · ' + c.title, p: progressPct() }),
      '<div class="qcard">' +
      '<div class="qcard__meta"><span>Q' + String(n).padStart(2, '0') + '</span><span>' + esc(c.time) + '</span></div>' +
      '<h2>' + esc(q.t) + '</h2>' +
      '<ul class="choices" role="list">' + q.c.map(function (ch, i) {
        var sel = st.ans[id] === i;
        return '<li><button class="choice' + (sel ? ' is-selected' : '') + '" type="button" data-choice="' + i + '" aria-pressed="' + sel + '"><span class="choice__k">0' + (i + 1) + '</span><span>' + esc(ch[0]) + '</span></button></li>';
      }).join('') + '</ul>' + metersHtml(meters()) + '</div>');
  }

  function renderEnd() {
    var m = meters();
    app.innerHTML = stage('end', topBar({ back: true, time: 'ปิดร้าน', p: 100 }),
      '<div class="chap"><p class="chap__no">จบวัน</p><div class="chap__time">23:00</div><h2>ปิดร้านแล้ว</h2>' +
      '<p>วันนี้ของคุณจบแบบนี้ ยอดขาย ' + m.sales + ' · พลังงานเหลือ ' + m.energy + ' · รีวิว ' + m.review + '</p>' +
      '<button class="btn" type="button" data-act="finish">ดูผลของร้านคุณ <span class="btn__arrow" aria-hidden="true">→</span></button></div>');
    focusFirst('[data-act="finish"]');
  }

  function lineUrl(msg) {
    var id = (F.LINE_OA_ID || '').trim();
    return id ? 'https://line.me/R/oaMessage/' + encodeURIComponent(id) + '/?' + encodeURIComponent(msg) : '';
  }

  function cover(code, label) {
    var a = F.ARCH[code], i = F.ARCH_ORDER.indexOf(code) + 1;
    return '<div class="res-cover" style="' + F.coverStyle(code) + '"><div class="res-cover__top"><span>FLAVOLUTION</span><span>' + String(i).padStart(2, '0') + ' / 10</span></div>' +
      '<div><p class="eyebrow" style="color:rgba(255,255,255,.8);font-family:var(--sans);letter-spacing:0;text-transform:none;font-size:14px">' + label + '</p>' +
      '<div class="res-cover__name">' + esc(a.n) + '</div><p class="res-cover__e">' + esc(a.e) + '</p></div></div>';
  }

  function renderResult() {
    var r = score(), a = F.ARCH[r.code], m = meters(), seg = segOf(st.seg), pair = F.ARCH[a.pair];
    var msg = 'สวัสดีครับ/ค่ะ ทำควิซหนึ่งวันในร้านของคุณแล้ว ร้านเราได้ผลเป็น "' + a.n + '" (' + (seg ? seg.t : '') + ') เรื่องที่อยากคุย: ' +
      r.pains.map(function (p, i) { return (i + 1) + ') ' + F.PAINS[p.id].n; }).join(' ');
    var url = lineUrl(msg);
    var lineBtn = url
      ? '<a class="btn btn--line" href="' + url + '" target="_blank" rel="noopener">ทัก LINE คุยฟรี 30 นาที <span class="btn__arrow" aria-hidden="true">→</span></a>'
      : '<button class="btn btn--line" type="button" data-act="line">ทัก LINE คุยฟรี 30 นาที <span class="btn__arrow" aria-hidden="true">→</span></button>';

    app.innerHTML =
      '<section class="res-hero on-ink"><div class="wrap res-hero__grid">' +
      cover(r.code, 'ร้านของคุณคือ') +
      '<div class="enter"><p class="eyebrow">23:00 · Your result</p>' +
      '<h1>' + esc(a.n) + '</h1><p class="lead">' + esc(a.e) + '</p>' +
      '<div class="dayend" aria-label="วันของคุณจบแบบนี้"><div><span class="num">' + m.sales + '</span><span>ยอดขาย</span></div><div><span class="num">' + m.energy + '</span><span>พลังงานเจ้าของ</span></div><div><span class="num">' + m.review + '</span><span>รีวิว</span></div></div>' +
      '</div></div></section>' +

      '<section class="report"><div class="wrap">' +
      '<div class="report__block grid grid--2">' +
      '<div><p class="eyebrow eyebrow--th">จุดแข็งของร้านแบบคุณ</p><ul class="pills" style="margin-top:16px">' + a.st.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<p class="watch">ที่ต้องระวัง: ' + esc(a.w) + '</p></div>' +
      '<div><p class="eyebrow eyebrow--th">วิธีคิดของคุณ</p><div class="axes" style="margin-top:22px">' +
      axis('มีระบบ', 'ใช้สัญชาตญาณ', r.axes.s) + axis('เน้นของ', 'เน้นเรื่องเล่า', r.axes.p) + axis('อยากโต', 'อยากมั่นคง', r.axes.g) + '</div></div></div>' +

      '<div class="report__block"><p class="eyebrow eyebrow--th">3 อย่างที่ร้านคุณทำอยู่โดยไม่รู้ตัว</p>' +
      r.pains.map(function (p, i) { return finding(p, i); }).join('') + '</div>' +

      '<div class="res-cta on-ink"><p class="eyebrow">Next</p><h3>อยากให้เราช่วยดู 3 เรื่องนี้ไหม</h3>' +
      '<p class="note">ข้อความใน LINE จะกรอกผลของคุณไว้ให้แล้ว เราจะรู้จักร้านคุณก่อนคุย ไม่มีค่าใช้จ่าย</p>' + lineBtn +
      '<p class="note">คู่ที่เติมกันได้ของคุณ: <b style="color:var(--cream)">' + esc(pair.n) + '</b> · ' + esc(pair.e) + '</p>' +
      '<div class="res-actions"><button class="btn btn--ghost" type="button" data-act="share">ส่งให้หุ้นส่วนทำด้วย</button><button class="btn btn--ghost" type="button" data-act="restart">ทำใหม่</button><a class="btn btn--ghost" href="services.html">ดูบริการทั้งหมด</a></div></div>' +
      '</div></section>';
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
    return '<article class="finding"><div class="finding__num">0' + (i + 1) + '</div><div>' +
      '<h3 class="finding__title">' + esc(d.n) + '</h3><p class="finding__body">' + esc(d.b) + '</p>' +
      (p.generic ? '<p class="because">ข้อนี้ไม่ได้มาจากคำตอบของคุณโดยตรง แต่เป็นจุดที่ร้านแบบคุณมักพลาด</p>'
        : '<p class="because">เพราะคุณตอบว่า “' + esc(p.because[0]) + '”</p>') +
      '<div class="todo"><div><b>ทำเองได้</b><span>' + esc(d.d) + '</span></div><div><b>เราช่วยได้</b><span>' + help + '</span></div></div>' +
      '</div></article>';
  }

  /* friend view: quiz.html#r=chef */
  function renderShared(code) {
    var a = F.ARCH[code];
    app.innerHTML = '<section class="res-hero on-ink" style="min-height:calc(100svh - 62px)"><div class="wrap res-hero__grid">' + cover(code, 'เพื่อนของคุณได้ผลเป็น') +
      '<div class="enter"><p class="eyebrow">A friend sent you this</p><h1>' + esc(a.n) + '</h1><p class="lead">' + esc(a.e) + '</p>' +
      '<ul class="pills" style="margin-top:22px">' + a.st.map(function (x) { return '<li style="border-color:var(--line-on-ink)">' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<p class="watch" style="color:var(--muted-on-ink)">ที่ต้องระวัง: ' + esc(a.w) + '</p>' +
      '<p style="margin-top:28px"><button class="btn btn--cream" type="button" data-act="fresh">แล้วร้านคุณล่ะ ทำ 7 นาที <span class="btn__arrow" aria-hidden="true">→</span></button></p></div>' +
      '</div></section>';
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
      app.querySelectorAll('.choice').forEach(function (t) { t.classList.remove('is-selected'); t.setAttribute('aria-pressed', 'false'); });
      void b.offsetWidth; b.classList.add('is-selected'); b.setAttribute('aria-pressed', 'true');
      // live meters
      var m = meters(), fills = app.querySelectorAll('.meter__fill'), vals = app.querySelectorAll('.meter__row b');
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
