/* PlanC Console v3 — one page for every choice.
   Reads planc/'s real tokens, shows each option as a change from them, previews
   token-level choices live in an iframe of the real build, and emits a complete
   self-contained build prompt. Nothing here writes to planc/. */
(function () {
  'use strict';

  var D = {};                 // loaded data
  var S = { picks: {}, extra: {} };  // picks: comp key -> option id
  var els = {};

  // ---------------------------------------------------------------- helpers
  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function txt(s) { return document.createTextNode(s); }

  // ------------------------------------------------------- font definitions
  // Only free families can be previewed live; paid ones need a licensed file,
  // which the console will not ship. Those show a note and an upload slot.
  var FONTPAIRS = {
    CUR: { label: 'Kanit + Anuphan (ที่บิ้วไว้ตอนนี้)', display: 'Kanit', body: 'Anuphan', google: 'Kanit:wght@400;500;700|Anuphan:wght@100..700', free: true },
    T1: { display: 'Anuphan', body: 'Anuphan', google: 'Anuphan:wght@100..700|IBM+Plex+Mono:wght@400;500', free: true },
    T2: { display: 'Noto Serif Thai', body: 'Anuphan', google: 'Noto+Serif+Thai:wght@100..900|Anuphan:wght@100..700', free: true },
    T3: { display: 'Kanit', body: 'Sarabun', google: 'Kanit:wght@400;500;700|Sarabun:wght@400;600;700', free: true },
    T4: { display: null, body: null, free: false, why: 'Aperçu Thai Pro VF ~$272 + Thonglor Soi 4 (Adobe CC) — ต้องมีไฟล์ลิขสิทธิ์ ถึงจะพรีวิวได้' },
    T5: { display: null, body: null, free: false, why: 'Proxima Nova Thai อยู่ใน Adobe CC — ต้องซิงก์ผ่าน Adobe Fonts เอง' },
    T6: { display: null, body: null, free: false, why: 'Ekachon ฿11,800/น้ำหนัก — ต้องซื้อและ self-host ไฟล์ WOFF2 เอง' }
  };

  // North-star options and the tokens each one actually implies, taken from the
  // measured data rather than invented.
  function nsOptions() {
    var c = {};
    D.northstar.candidates.forEach(function (x) { c[x.slug] = x; });
    var klim = c['klim-soehne'], exat = c.exat, off = c.offbeat;
    return [
      {
        id: 'klim', name: klim.name, src: klim,
        gist: 'เส้นขอบซ้ายเดียว σ 0 ตลอด 30 เท่าจอ · 9 ขนาดตัวอักษร · ไม่มีรูปเลย',
        tokens: { '--lh-display': String(Math.max(klim.thaiDisplayFloor, 1.3).toFixed(2)) },
        rules: ['ทุก section เริ่มที่ขอบซ้ายเดียวกันเป๊ะ (σ = 0)', 'ตัวอักษรไม่เกิน 9 ขนาดทั้งหน้า', 'ไม่มี section ไหนสูงเท่าจอพอดี (วัดได้ 0 จาก 6)']
      },
      {
        id: 'exat', name: exat.name, src: exat,
        gist: '2 ขอบซ้าย σ 2.4 · container วัดได้ 1439.91px · 0 จาก 8 section สูงเท่าจอ',
        tokens: { '--wrap': '1440px' },
        rules: ['ขอบซ้ายหลักหนึ่งแนว + คอลัมน์รองอีกหนึ่งแนวเท่านั้น', 'container กว้าง 1440px', 'ไม่มี section ไหนสูงเท่าจอพอดี']
      },
      {
        id: 'offbeat', name: off.name, src: off,
        gist: '8 ขนาดตัวอักษร · กริด 12 คอลัมน์ gap 25.92px · ระยะบรรทัดเนื้อหา 1.40 รองรับไทยอยู่แล้ว',
        tokens: { '--gut': 'clamp(20px, 4vw, 26px)', '--lh-body': '1.4' },
        rules: ['กริด 12 คอลัมน์ gutter 26px', 'ตัวอักษรไม่เกิน 8 ขนาดทั้งหน้า', 'ไทยกับอังกฤษอยู่คนละลำดับขนาดชัดเจน']
      },
      {
        id: 'hybrid', name: 'ผสม — กริดจาก Klim + ระบบสองภาษาจาก OFF-BEAT', src: null,
        gist: 'เส้นขอบซ้ายเดียวกับสเกลรัดกุมจาก Klim + กริด 12 คอลัมน์และระยะบรรทัดไทยจาก OFF-BEAT',
        tokens: { '--gut': 'clamp(20px, 4vw, 26px)', '--lh-body': '1.4' },
        rules: [
          'ทุก section เริ่มที่ขอบซ้ายเดียวกันเป๊ะ (จาก Klim)',
          'ตัวอักษรไม่เกิน 9 ขนาดทั้งหน้า (จาก Klim)',
          'กริด 12 คอลัมน์ gutter 26px (จาก OFF-BEAT)',
          'ระยะบรรทัดเนื้อหา 1.40 — ผ่านเกณฑ์ไทยโดยไม่ต้องแก้ (จาก OFF-BEAT)'
        ]
      }
    ];
  }

  var LEN_OPTS = [
    { id: 'measure', t: 'ยังไม่ตัดสิน — วัด copy ไทยจริงก่อน', d: 'ให้ตัวแทนวัดความสูงจริงของเนื้อหาไทยที่มี แล้วตั้งเป้าจากข้อมูล' },
    { id: 'keep', t: 'คงเป้าเดิม ~10 เท่าความสูงจอ', d: 'เชื่อว่าเนื้อหาเราสั้นกว่าเว็บอ้างอิงจริง' },
    { id: 'grow', t: 'ขยายเป็น ~20–30 เท่าความสูงจอ', d: 'ให้เท่ากลุ่มอ้างอิง (EXAT 33.4× · Plan AZ 32.2× · Klim 30.5×) — ต้องเพิ่มเนื้อหาจริง' }
  ];
  var VH_OPTS = [
    { id: 'quota', t: 'โควตา — ไม่เกิน 3 จาก 8 เฉพาะจุดที่ตั้งใจ', d: 'ตรงกับที่วัดมา: เว็บที่มี 5 section ขึ้นไปไม่มีเจ้าไหนเกิน 2 อัน' },
    { id: 'ban', t: 'ห้ามทุก section สูงเท่าจอพอดี', d: 'ตามกฎเดิมใน SITE-SKELETON §5.1' }
  ];

  // ------------------------------------------------------------ token model
  // Everything the picks imply, layered: north star → colour → fonts → sliders.
  function derivedTokens() {
    var t = {};
    var ns = nsOptions().filter(function (o) { return o.id === S.picks.NS; })[0];
    if (ns) Object.keys(ns.tokens).forEach(function (k) { t[k] = ns.tokens[k]; });

    var w = D.options.worlds[S.picks.M];
    if (w) {
      t['--bg'] = w.bg; t['--bg-2'] = w.bg2; t['--fg'] = w.fg; t['--fg-soft'] = w.fg2;
      if (w.ac1) t['--ac1'] = w.ac1;
      if (w.ac2) t['--ac2'] = w.ac2;
    }

    var fp = FONTPAIRS[S.picks.T];
    if (fp && fp.free) {
      t['--font-display'] = fp.display + ', system-ui, sans-serif';
      t['--font-body'] = fp.body + ', system-ui, sans-serif';
    }

    Object.keys(S.extra).forEach(function (k) { if (S.extra[k] !== null) t[k] = S.extra[k]; });
    return t;
  }

  function diffList() {
    var t = derivedTokens(), cur = D.current.tokens, out = [];
    Object.keys(t).forEach(function (k) {
      var a = (cur[k] || '').trim(), b = String(t[k]).trim();
      if (a.toLowerCase() !== b.toLowerCase()) out.push({ k: k, from: a || '(ไม่มี)', to: b });
    });
    return out;
  }

  // ------------------------------------------------------------ live preview
  var previewReady = false;
  function applyPreview() {
    var f = els.preview;
    var doc;
    try { doc = f.contentDocument; } catch (e) { return; }
    if (!doc || !doc.head) return;

    var fp = FONTPAIRS[S.picks.T];
    if (fp && fp.free && fp.google) {
      var href = 'https://fonts.googleapis.com/css2?' +
        fp.google.split('|').map(function (x) { return 'family=' + x; }).join('&') + '&display=swap';
      var link = doc.getElementById('cv3-font');
      if (!link) { link = doc.createElement('link'); link.id = 'cv3-font'; link.rel = 'stylesheet'; doc.head.appendChild(link); }
      if (link.href !== href) link.href = href;
    }

    var t = derivedTokens();
    var css = ':root{' + Object.keys(t).map(function (k) { return k + ':' + t[k] + ';'; }).join('') + '}';
    var st = doc.getElementById('cv3-tokens');
    if (!st) { st = doc.createElement('style'); st.id = 'cv3-tokens'; doc.head.appendChild(st); }
    st.textContent = css;
  }

  // ------------------------------------------------------------- panel defs
  var PANELS = [
    { k: 'NOW', n: 'สถานะปัจจุบัน', s: 'planc/ ตอนนี้เป็นอะไร', count: function () { return 0; } },
    { k: 'NS', n: 'โครงสร้าง', s: 'north star + 2 กฎ', count: function () { return (S.picks.NS ? 1 : 0) + (S.picks.LEN ? 1 : 0) + (S.picks.VH ? 1 : 0); } },
    { k: 'M', n: 'โลกสี', s: '13 โลก · พรีวิวสด', count: function () { return S.picks.M && S.picks.M !== D.current.currentWorld ? 1 : 0; } },
    { k: 'T', n: 'ฟอนต์', s: '6 คู่ + ทดสอบไทย', count: function () { return S.picks.T && S.picks.T !== 'CUR' ? 1 : 0; } },
    { k: 'COMP', n: 'คอมโพเนนต์', s: '16 ตัว · 94 ตัวเลือก', count: function () { var n = 0; compKeys().forEach(function (k) { if (S.picks[k]) n++; }); return n; } },
    { k: 'SCALE', n: 'สเกลและจังหวะ', s: 'ขนาด ระยะ motion · พรีวิวสด', count: function () { return Object.keys(S.extra).filter(function (k) { return S.extra[k] !== null; }).length; } }
  ];
  function compKeys() { return D.options.comps.map(function (c) { return c.k; }).filter(function (k) { return k !== 'M' && k !== 'T'; }); }

  // ----------------------------------------------------------------- render
  function optionCard(o, opts) {
    opts = opts || {};
    var pressed = opts.pressed;
    var meta = [];
    if (o.sc != null) meta.push(h('span', { text: o.sc + '/30' }));
    if (o.th) meta.push(h('span', { class: 'th' + o.th, text: o.th === 1 ? 'ไทยปลอดภัย' : o.th === 2 ? 'ต้องตัดคำไทย' : 'อันตรายกับไทย' }));
    if (o.cost) meta.push(h('span', { text: o.cost }));

    var kids = [
      h('div', { class: 'id' }, [
        txt(o.id + (opts.star ? ' ' : '')),
        opts.star ? h('span', { class: 'star', text: '★' }) : null
      ]),
      h('div', { class: 't', text: o.st || o.t || o.name || o.id })
    ];
    if (opts.swatches) kids.push(h('div', { class: 'sw' }, opts.swatches.map(function (c) { return h('i', { style: 'background:' + c }); })));
    if (o.w || o.d) kids.push(h('div', { class: 'd', text: (o.w || o.d || '').replace(/\*\*/g, '') }));
    if (opts.extraNote) kids.push(h('div', { class: 'd', text: opts.extraNote }));
    if (meta.length) kids.push(h('div', { class: 'meta' }, meta));
    if (opts.current) kids.push(h('span', { class: 'cur', text: 'ตอนนี้' }));

    return h('button', {
      class: 'opt', type: 'button', 'aria-pressed': pressed ? 'true' : 'false',
      'data-pick': opts.group, 'data-id': o.id,
      onclick: function () { setPick(opts.group, o.id); }
    }, kids);
  }

  function setPick(group, id) {
    S.picks[group] = (S.picks[group] === id) ? null : id;
    if (!S.picks[group]) delete S.picks[group];
    renderAll();
  }

  function row(title, key, nowVal, hint, body) {
    var changed = nowVal && nowVal.changed;
    var head = h('div', { class: 'row-head' }, [
      key ? h('span', { class: 'k', text: key }) : null,
      h('b', { text: title }),
      nowVal ? h('span', { class: 'now' + (changed ? ' changed' : ''), text: nowVal.text }) : null
    ]);
    var kids = [head];
    if (hint) kids.push(h('p', { class: 'hint', text: hint }));
    kids.push(body);
    return h('div', { class: 'row' }, kids);
  }

  function panelNOW() {
    var c = D.current;
    var tbl = h('table', { class: 'tokentable' }, Object.keys(c.tokens).map(function (k) {
      return h('tr', {}, [h('td', { text: k }), h('td', { text: c.tokens[k] })]);
    }));
    var world = D.options.worlds[c.currentWorld];
    return h('div', {}, [
      h('h1', { text: 'สถานะปัจจุบัน' }),
      h('p', { class: 'sub', text: 'อ่านจาก planc/style.css และ planc/index.html ตอนเปิดหน้านี้ — ทุกตัวเลือกในแผงอื่นแสดงเป็น "ต่างจากค่าพวกนี้ยังไง" ถ้าเลือกตรงกับของเดิมจะไม่นับเป็นการเปลี่ยน' }),
      row('โลกสีที่ใช้อยู่', 'M', null, null, h('div', { class: 'grid' }, [
        optionCard({ id: c.currentWorld || '—', st: world ? world.n : 'ไม่ตรงกับโลกไหนในลิสต์', w: world ? Object.keys(c.tokens).slice(0, 6).map(function (k) { return k + ' ' + c.tokens[k]; }).join(' · ') : '' },
          { group: '_none', pressed: true, current: true, swatches: world ? [world.bg, world.bg2, world.fg, world.fg2, world.ac1 || world.fg2, world.ac2 || world.fg2] : null })
      ])),
      row('โครงหน้า', null, null, null, h('p', { class: 'hint', text: c.sectionCount + ' section: ' + c.sections.join(' · ') })),
      row('ขนาดไฟล์', null, null, null, h('p', { class: 'hint', text: 'index.html ' + Math.round(c.files.bytes.html / 1024) + 'KB · style.css ' + Math.round(c.files.bytes.css / 1024) + 'KB · app.js ' + Math.round(c.files.bytes.js / 1024) + 'KB' })),
      row('token ทั้งหมด ' + Object.keys(c.tokens).length + ' ตัว', null, null, null, tbl)
    ]);
  }

  function panelNS() {
    var opts = nsOptions();
    var cards = opts.map(function (o) {
      var tokenNote = Object.keys(o.tokens).length
        ? 'token ที่ตามมา: ' + Object.keys(o.tokens).map(function (k) { return k + ' → ' + o.tokens[k]; }).join(' · ')
        : '';
      // id must stay exactly as nsOptions() defines it — the card's data-id is
      // what setPick stores, and what the prompt builder looks up again.
      var card = optionCard({ id: o.id, st: o.name, w: o.gist }, {
        group: 'NS', pressed: S.picks.NS === o.id, extraNote: tokenNote
      });
      if (o.src && o.src.shots && o.src.shots.length) {
        var strip = h('div', { class: 'shots' }, o.src.shots.slice(1, 4).map(function (f) {
          return h('img', { src: '/research/northstar/shots/' + f, alt: o.name, loading: 'lazy' });
        }));
        card.insertBefore(strip, card.querySelector('.meta') || null);
      }
      return card;
    });
    return h('div', {}, [
      h('h1', { text: 'โครงสร้าง' }),
      h('p', { class: 'sub', text: 'วัดมา 34 เว็บจากที่ลอง 39 — สามตัวนี้ตัวเลขดีที่สุด ดูรายละเอียดเต็มได้ที่ research/northstar/CANDIDATES.md' }),
      row('ต้นแบบสัดส่วน', 'NS', null, 'เอาสัดส่วน ไม่ได้เอาหน้าตา — ความกว้าง คอลัมน์ ระยะห่าง อัตราส่วนขนาด ระยะบรรทัด', h('div', { class: 'grid wide' }, cards)),
      row('ความยาวหน้า', 'LEN', null, 'เอกสารที่เทียบได้จริงวัดได้ 28–33 เท่าจอ · เป้าเดิมของเรา ~10 เท่า', h('div', { class: 'grid' },
        LEN_OPTS.map(function (o) { return optionCard(o, { group: 'LEN', pressed: S.picks.LEN === o.id }); }))),
      row('กฎ section สูงเท่าจอ', 'VH', null, '16 จาก 34 เว็บมีอย่างน้อย 1 section สูงเท่าจอพอดี · ไม่มีเว็บไหนที่มี 5 section ขึ้นไปเกิน 2 อัน', h('div', { class: 'grid' },
        VH_OPTS.map(function (o) { return optionCard(o, { group: 'VH', pressed: S.picks.VH === o.id }); })))
    ]);
  }

  function panelM() {
    var cur = D.current.currentWorld;
    var cards = Object.keys(D.options.worlds).map(function (id) {
      var w = D.options.worlds[id];
      var o = D.options.opts.filter(function (x) { return x.id === id; })[0] || { id: id, st: w.n };
      return optionCard({ id: id, st: w.n, w: o.wc || '' }, {
        group: 'M', pressed: S.picks.M === id, current: id === cur,
        swatches: [w.bg, w.bg2, w.fg, w.fg2, w.ac1 || w.fg2, w.ac2 || w.fg2]
      });
    });
    return h('div', {}, [
      h('h1', { text: 'โลกสี' }),
      h('p', { class: 'sub', text: 'กดแล้วตัวอย่างทางขวาเปลี่ยนสีจริงทันที · ตัวเลข WCAG มาจากการคำนวณจริง ไม่ใช่ประมาณ · กฎเดิมของเว็บ: สีรอง (ac2) ห้ามเป็นตัวหนังสือ' }),
      row('เลือกโลกสี', 'M', { text: 'ตอนนี้: ' + (cur || '—') + (D.options.worlds[cur] ? ' ' + D.options.worlds[cur].n : ''), changed: S.picks.M && S.picks.M !== cur }, null,
        h('div', { class: 'grid' }, cards))
    ]);
  }

  function panelT() {
    var tOpts = D.options.opts.filter(function (x) { return x.c === 'T'; });
    var cards = [optionCard({ id: 'CUR', st: FONTPAIRS.CUR.label, w: 'Kanit สำหรับหัวเรื่อง + Anuphan สำหรับเนื้อหา — ที่บิ้วไว้ตอนนี้ ฟรีทั้งคู่ พรีวิวได้' },
      { group: 'T', pressed: S.picks.T === 'CUR' || !S.picks.T, current: true })];
    tOpts.forEach(function (o) {
      var fp = FONTPAIRS[o.id] || {};
      cards.push(optionCard(o, {
        group: 'T', pressed: S.picks.T === o.id,
        extraNote: fp.free ? 'พรีวิวสดได้' : ('พรีวิวสดไม่ได้ — ' + (fp.why || 'ต้องมีไฟล์ลิขสิทธิ์'))
      }));
    });

    var strings = ['สร้างตัวตนที่เป็นของคุณ ไม่ใช่ของเทรนด์', 'เปี่ยม ปุ๋ย หญิง ปฏิญาณ ฟื้นฟู เรื่อง ที่ กุ๊กกิ๊ก'];
    var fpNow = FONTPAIRS[S.picks.T || 'CUR'];
    var fam = (fpNow && fpNow.free ? fpNow.display : 'Kanit');
    var lh = (derivedTokens()['--lh-display'] || D.current.tokens['--lh-display']);
    var stress = h('div', { style: 'margin-top:10px;border:1px solid var(--c-line);border-radius:3px;padding:14px 16px;background:var(--c-panel)' },
      strings.map(function (s) {
        return h('div', {
          style: 'font-family:"' + fam + '",system-ui,sans-serif;font-weight:700;font-size:30px;line-height:' + lh + ';max-width:16ch;margin-bottom:10px',
          text: s
        });
      }).concat([h('p', { class: 'hint', text: 'เกณฑ์ที่วัดมา: ระยะบรรทัดหัวเรื่องต่ำกว่า ' + D.northstar.thaiFloor + ' สระบนกับสระล่างจะชนกัน · ตอนนี้ตั้งไว้ ' + lh })]));

    return h('div', {}, [
      h('h1', { text: 'ฟอนต์' }),
      h('p', { class: 'sub', text: 'คู่ฟอนต์คือ component ที่สำคัญที่สุดเพราะเว็บนี้บิ้วด้วยตัวอักษร · ฟอนต์ฟรีพรีวิวสดได้ ฟอนต์ที่ต้องซื้อพรีวิวไม่ได้เพราะฝังไฟล์ลิขสิทธิ์ไม่ได้' }),
      row('คู่ฟอนต์', 'T', { text: 'ตอนนี้: Kanit + Anuphan', changed: S.picks.T && S.picks.T !== 'CUR' }, null, h('div', { class: 'grid wide' }, cards)),
      row('ทดสอบไทยด้วยคำที่สระซ้อนหนักที่สุด', null, null, 'สองบรรทัดนี้ใช้ฟอนต์และระยะบรรทัดที่เลือกอยู่จริง', stress)
    ]);
  }

  function panelCOMP() {
    var TIER = { 1: 'TIER 1 — ทำพลาดแล้วพังทั้งเว็บ', 2: 'TIER 2 — 8 section', 3: 'TIER 3 — รายละเอียดรอบนอก' };
    var kids = [
      h('h1', { text: 'คอมโพเนนต์' }),
      h('p', { class: 'sub', text: '16 ตัว 94 ตัวเลือก · ★ คือคะแนนสูงสุดของกลุ่ม ไม่ใช่คำสั่ง · แผงนี้พรีวิวสดไม่ได้ เพราะแต่ละตัวเลือกต้องเขียนโค้ดจริงถึงจะเห็น — ที่เลือกไว้จะถูกเขียนเป็นสเปกลงใน prompt' })
    ];
    var lastTier = 0;
    D.options.comps.forEach(function (c) {
      if (c.k === 'M' || c.k === 'T') return; // have their own panels
      if (c.t !== lastTier) { kids.push(h('h1', { style: 'font-size:13px;margin:26px 0 2px;color:var(--c-dim)', text: TIER[c.t] })); lastTier = c.t; }
      var opts = D.options.opts.filter(function (o) { return o.c === c.k; });
      var top = Math.max.apply(null, opts.map(function (o) { return o.sc || 0; }));
      kids.push(row(c.n, c.k, null, c.s, h('div', { class: 'grid wide' }, opts.map(function (o) {
        return optionCard(o, { group: c.k, pressed: S.picks[c.k] === o.id, star: (o.sc === top) });
      }))));
    });
    return h('div', {}, kids);
  }

  var SLIDERS = [
    { k: '--lh-display', label: 'ระยะบรรทัด หัวเรื่อง', min: 1.0, max: 1.8, step: 0.01, unit: '', floor: true },
    { k: '--lh-body', label: 'ระยะบรรทัด เนื้อหา', min: 1.2, max: 2.2, step: 0.05, unit: '' },
    { k: '--wrap', label: 'ความกว้าง container', min: 1080, max: 1680, step: 20, unit: 'px' },
    { k: '--t-base', label: 'ความเร็ว transition หลัก', min: 150, max: 800, step: 50, unit: 'ms' },
    { k: '--t-epic', label: 'ความเร็ว epic', min: 600, max: 2000, step: 100, unit: 'ms' }
  ];

  function panelSCALE() {
    var cur = D.current.tokens;
    var kids = [
      h('h1', { text: 'สเกลและจังหวะ' }),
      h('p', { class: 'sub', text: 'เลื่อนแล้วตัวอย่างทางขวาเปลี่ยนทันที · ค่าเริ่มต้นคือค่าที่บิ้วไว้ · ลากกลับไปตรงค่าเดิมแล้วจะเลิกนับเป็นการเปลี่ยน' })
    ];
    SLIDERS.forEach(function (s) {
      var now = parseFloat(cur[s.k]) || s.min;
      var val = S.extra[s.k] != null ? parseFloat(S.extra[s.k]) : now;
      var out = h('output', { text: val + s.unit });
      var input = h('input', {
        type: 'range', min: s.min, max: s.max, step: s.step, value: val,
        oninput: function (e) {
          var v = parseFloat(e.target.value);
          out.textContent = v + s.unit;
          S.extra[s.k] = (Math.abs(v - now) < 1e-9) ? null : (v + s.unit);
          applyPreview(); renderSide(); renderTabs();
        }
      });
      var note = s.floor ? ' · พื้นไทยที่วัดมา ' + D.northstar.thaiFloor : '';
      kids.push(row(s.label, s.k, { text: 'ตอนนี้: ' + cur[s.k], changed: S.extra[s.k] != null }, 'ช่วง ' + s.min + '–' + s.max + s.unit + note,
        h('div', { class: 'fld' }, [input, out])));
    });
    kids.push(row('สเกลตัวอักษร 6 ขั้น', null, null, 'เปลี่ยนทีละขั้นได้ใน prompt — แผงนี้แสดงค่าปัจจุบันเพื่ออ้างอิง', h('table', { class: 'tokentable' },
      ['--step-0', '--step-1', '--step-2', '--step-3', '--step-4', '--step-5'].map(function (k) {
        return h('tr', {}, [h('td', { text: k }), h('td', { text: cur[k] })]);
      }))));
    return h('div', { }, kids);
  }

  // ------------------------------------------------------------ prompt build
  // Spine blocks arrive with their own "## N · title" first line; the prompt
  // supplies its own headings, so drop theirs to avoid two headings per section.
  function spine(key) {
    var s = D.spine[key];
    if (!s) return '';
    return s.replace(/^##\s.*\n?/, '').trim();
  }

  function optSpec(id) {
    var o = D.options.opts.filter(function (x) { return x.id === id; })[0];
    if (!o) return null;
    var lines = ['**' + o.id + ' — ' + o.st + '**' + (o.u ? ' (' + o.u + ')' : '')];
    if (o.w) lines.push('- กลไก: ' + o.w);
    if (o.m) lines.push('- motion: ' + o.m);
    if (o.b) lines.push('- เลนส์แบรนด์: ' + o.b);
    if (o.th) lines.push('- ภาษาไทย: ' + (o.th === 1 ? 'ปลอดภัย' : o.th === 2 ? 'ต้องตัดคำด้วย thaiWords() ก่อน ห้ามให้ไลบรารีตัดเอง' : 'อันตราย — ต้องมีทางหนีสำหรับไทย'));
    if (o.wc) lines.push('- WCAG: ' + o.wc);
    return lines.join('\n');
  }

  function buildPrompt() {
    var t = derivedTokens();
    var merged = {};
    Object.keys(D.current.tokens).forEach(function (k) { merged[k] = D.current.tokens[k]; });
    Object.keys(t).forEach(function (k) { merged[k] = t[k]; });

    var ns = nsOptions().filter(function (o) { return o.id === S.picks.NS; })[0];
    var len = LEN_OPTS.filter(function (o) { return o.id === S.picks.LEN; })[0];
    var vh = VH_OPTS.filter(function (o) { return o.id === S.picks.VH; })[0];
    var fp = FONTPAIRS[S.picks.T || 'CUR'];
    var world = D.options.worlds[S.picks.M || D.current.currentWorld];

    var P = [];
    P.push('# PlanC — BUILD FROM SCRATCH (สร้างเว็บใหม่ทั้งหน้า)');
    P.push('');
    P.push('สร้างเว็บ one-page ของ PlanC ใหม่ทั้งหน้าตามสเปกนี้ ไม่ต้องอ่านไฟล์เดิม สเปกนี้สมบูรณ์ในตัวเอง');
    P.push('ไฟล์ปลายทาง: `planc/index.html` · `planc/style.css` · `planc/app.js` (vanilla ทั้งหมด ไม่มี framework ไม่มี build step)');
    P.push('เขียนโค้ดต้นฉบับทั้งหมด ห้ามลอก HTML/CSS/class name จากเว็บอ้างอิงใดๆ — อ้างอิงให้แค่สัดส่วน');
    P.push('');

    // --- 1 structure
    P.push('## 1 · โครงสร้าง (จากการวัดเว็บอ้างอิง 34 เว็บ)');
    if (ns) {
      P.push('**ต้นแบบสัดส่วน: ' + ns.name + '**' + (ns.src ? ' — ' + ns.src.url : ''));
      P.push('');
      P.push('กฎที่ต้องทำตาม:');
      ns.rules.forEach(function (r) { P.push('- ' + r); });
      if (ns.src) {
        P.push('');
        P.push('ตัวเลขที่วัดได้จริงจากเว็บนี้: ขอบซ้าย ' + ns.src.edges + ' แนว (σ ' + (ns.src.edgeSd || 0).toFixed(2) + 'px) · '
          + ns.src.sizes + ' ขนาดตัวอักษร · ยาว ' + ns.src.vh + ' เท่าจอ · section สูงเท่าจอพอดี ' + ns.src.near100 + '/' + ns.src.sectionCount
          + (ns.src.grid ? ' · กริด ' + ns.src.grid.cols + ' คอลัมน์ gap ' + ns.src.grid.gap : '')
          + (ns.src.measureCh ? ' · reading measure ' + Math.round(ns.src.measureCh) + 'ch' : ''));
      }
    } else {
      P.push('_ยังไม่ได้เลือกต้นแบบ — ให้ใช้กริดเดิมใน planc/style.css_');
    }
    P.push('');
    if (len) P.push('**ความยาวหน้า:** ' + len.t + ' — ' + len.d);
    if (vh) P.push('**กฎ section สูงเท่าจอ:** ' + vh.t + ' — ' + vh.d);
    P.push('');

    // --- 2 tokens
    P.push('## 2 · THEME BLOCK — ใช้ค่าเหล่านี้ตรงตัว ห้ามมีค่าอื่นนอกชุดนี้');
    P.push('');
    P.push('```css');
    P.push(':root{');
    Object.keys(merged).forEach(function (k) {
      var changed = (D.current.tokens[k] || '').trim().toLowerCase() !== String(merged[k]).trim().toLowerCase();
      P.push('  ' + k + ': ' + merged[k] + ';' + (changed ? '   /* เปลี่ยนจาก ' + (D.current.tokens[k] || 'ไม่มี') + ' */' : ''));
    });
    P.push('}');
    P.push('```');
    P.push('');
    if (world) P.push('โลกสี: **' + (S.picks.M || D.current.currentWorld) + ' ' + world.n + '**' + (world.dark ? ' (พื้นเข้ม)' : ' (พื้นสว่าง)'));
    P.push('กฎสี: `--ac1` ใช้เป็นตัวหนังสือได้ · `--ac2` เป็นกราฟิกเท่านั้น ห้ามเป็นตัวหนังสือเด็ดขาด');
    P.push('');
    P.push('ฟอนต์: **' + (fp.label || (fp.display + ' + ' + fp.body) || 'ตามที่ระบุใน T') + '**'
      + (fp.free ? ' · โหลดจาก Google Fonts' : ' · เป็นฟอนต์ลิขสิทธิ์ ต้อง self-host ไฟล์ที่เจ้าของส่งให้ ห้าม hotlink'));
    P.push('ระยะบรรทัดหัวเรื่องห้ามต่ำกว่า **' + D.northstar.thaiFloor + '** — วัดด้วย canvas ink extent บน Kanit 700 แล้ว ต่ำกว่านี้สระบนสระล่างชนกันจริง');
    P.push('');

    // --- 3 components
    P.push('## 3 · สเปกต่อคอมโพเนนต์');
    P.push('');
    var tierName = { 1: 'TIER 1', 2: 'TIER 2 — 8 section', 3: 'TIER 3' };
    var lastT = 0;
    D.options.comps.forEach(function (c) {
      var pick = S.picks[c.k];
      if (c.k === 'M' || c.k === 'T') return;
      if (!pick) return;
      if (c.t !== lastT) { P.push('### ' + tierName[c.t]); P.push(''); lastT = c.t; }
      P.push('#### ' + c.n);
      var spec = optSpec(pick);
      if (spec) P.push(spec);
      P.push('');
    });
    var missing = D.options.comps.filter(function (c) { return c.k !== 'M' && c.k !== 'T' && !S.picks[c.k]; });
    if (missing.length) {
      P.push('**คอมโพเนนต์ที่ยังไม่ได้เลือก (' + missing.length + ' ตัว) — ให้เลือกตัวที่คะแนนสูงสุดของกลุ่มเอง แล้วบอกว่าเลือกอะไรเพราะอะไร:**');
      missing.forEach(function (c) {
        var opts = D.options.opts.filter(function (o) { return o.c === c.k; });
        var top = opts.slice().sort(function (a, b) { return (b.sc || 0) - (a.sc || 0); })[0];
        P.push('- ' + c.n + ' → แนะนำ ' + (top ? top.id + ' ' + top.st : '—'));
      });
      P.push('');
    }

    // --- 4 invariant spine
    P.push('## 4 · โครงหน้าและรอยต่อ');
    P.push('');
    P.push(spine('layout'));
    P.push('');
    P.push('## 5 · กฎภาษาไทย');
    P.push('');
    P.push(spine('thaiSafe'));
    P.push('');
    P.push('## 6 · กฎเหล็ก');
    P.push('');
    P.push(spine('hardRules'));
    P.push('');
    P.push('## 7 · สถาปัตยกรรม');
    P.push('');
    P.push(spine('architecture'));
    P.push('');
    P.push('## 8 · กับดักที่ทำให้พังแบบไม่มี error');
    P.push('');
    P.push(spine('traps'));
    P.push('');
    P.push('## 9 · SEO');
    P.push('');
    P.push(spine('seo'));
    P.push('');
    P.push('## 10 · Definition of Done');
    P.push('');
    P.push(spine('dod'));
    P.push('');
    P.push('## 11 · ค่าที่ยังไม่มี — ใส่ placeholder อย่าแต่งขึ้นมา');
    P.push('');
    P.push(spine('placeholders'));
    P.push('');
    P.push('---');
    P.push('_prompt นี้สร้างจาก PlanC Console v3 · เลือกไปแล้ว ' + Object.keys(S.picks).length + ' ข้อ · token ที่ต่างจากของเดิม ' + diffList().length + ' ตัว_');
    return P.join('\n');
  }

  // ------------------------------------------------------------------ side
  function renderSide() {
    var d = diffList();
    els.diffEmpty.hidden = d.length > 0;
    els.diffList.innerHTML = '';
    d.forEach(function (x) {
      els.diffList.appendChild(h('div', { class: 'dline' }, [
        h('div', { class: 'dk', text: x.k.replace('--', '') }),
        h('div', { class: 'dv' }, [h('span', { class: 'from', text: x.from }), txt('  →  '), h('span', { class: 'to', text: x.to })])
      ]));
    });

    els.analysis.innerHTML = '';
    var picks = Object.keys(S.picks).length;
    var compPicked = compKeys().filter(function (k) { return S.picks[k]; }).length;
    els.count.textContent = 'เลือกแล้ว ' + picks + ' ข้อ · คอมโพเนนต์ ' + compPicked + '/' + compKeys().length + ' · token ต่าง ' + d.length + ' ตัว';

    // Thai leading guard — the one rule that silently breaks the site.
    var lh = parseFloat(derivedTokens()['--lh-display'] || D.current.tokens['--lh-display']);
    if (lh && lh < D.northstar.thaiFloor) {
      els.analysis.appendChild(h('div', { class: 'warnbox', text: 'ระยะบรรทัดหัวเรื่อง ' + lh + ' ต่ำกว่าพื้นไทยที่วัดมา ' + D.northstar.thaiFloor + ' — สระบนกับสระล่างจะชนกันจริง ไม่ใช่แค่ดูแน่น' }));
    }
    var w = D.options.worlds[S.picks.M];
    if (w && !w.ac2) {
      els.analysis.appendChild(h('div', { class: 'synbox', text: 'โลกนี้มีสีเน้นสีเดียว — กฎ "ac2 เป็นกราฟิกเท่านั้น" จะไม่มีผล ต้องหาอย่างอื่นแทนจุดที่เคยใช้ coral' }));
    }
    var fp = FONTPAIRS[S.picks.T];
    if (fp && !fp.free) {
      els.analysis.appendChild(h('div', { class: 'warnbox', text: 'คู่ฟอนต์นี้ต้องซื้อ — พรีวิวทางขวายังเป็นฟอนต์เดิม และตอนบิ้วต้องมีไฟล์จริงก่อน' }));
    }
  }

  function renderTabs() {
    var rail = document.querySelector('.rail');
    rail.querySelectorAll('.tab').forEach(function (n) { n.remove(); });
    PANELS.forEach(function (p, i) {
      var n = p.count();
      rail.appendChild(h('button', {
        class: 'tab', type: 'button', role: 'tab',
        'aria-selected': S.tab === p.k ? 'true' : 'false',
        onclick: function () { S.tab = p.k; renderAll(); document.querySelector('.main').scrollTop = 0; }
      }, [
        h('span', { class: 'n', text: String(i) }),
        h('span', { class: 'l' }, [h('b', { text: p.n }), h('i', { text: p.s })]),
        h('span', { class: 'chg', text: String(n), hidden: n ? null : 'hidden' })
      ]));
    });
  }

  function renderMain() {
    var m = document.querySelector('.main');
    m.innerHTML = '';
    var f = { NOW: panelNOW, NS: panelNS, M: panelM, T: panelT, COMP: panelCOMP, SCALE: panelSCALE }[S.tab];
    m.appendChild(f());
  }

  function renderAll() { renderTabs(); renderMain(); renderSide(); applyPreview(); }

  // ------------------------------------------------------------------ boot
  function download(name, text, type) {
    var b = new Blob([text], { type: type || 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(b); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  function openSheet(title, text, foot) {
    els.sheetTitle.textContent = title;
    els.sheetText.value = text;
    els.sheetFoot.textContent = foot || '';
    els.sheet.hidden = false;
    els.sheetText.focus();
  }

  Promise.all(['options', 'current', 'northstar', 'spine'].map(function (n) {
    return fetch('/research/console/data/' + n + '.json').then(function (r) { return r.json(); });
  })).then(function (arr) {
    D.options = arr[0]; D.current = arr[1]; D.northstar = arr[2]; D.spine = arr[3];

    els.preview = document.getElementById('preview');
    els.diffEmpty = document.getElementById('diff-empty');
    els.diffList = document.getElementById('diff-list');
    els.analysis = document.getElementById('analysis');
    els.count = document.getElementById('count');
    els.sheet = document.getElementById('sheet');
    els.sheetText = document.getElementById('sheet-text');
    els.sheetTitle = document.getElementById('sheet-title');
    els.sheetFoot = document.getElementById('sheet-foot');

    S.tab = 'NS';
    S.picks.T = 'CUR';
    S.picks.M = D.current.currentWorld;

    els.preview.addEventListener('load', function () { previewReady = true; applyPreview(); });

    document.getElementById('vp-d').addEventListener('click', function () {
      document.getElementById('frame').classList.remove('m');
      this.setAttribute('aria-pressed', 'true');
      document.getElementById('vp-m').setAttribute('aria-pressed', 'false');
    });
    document.getElementById('vp-m').addEventListener('click', function () {
      document.getElementById('frame').classList.add('m');
      this.setAttribute('aria-pressed', 'true');
      document.getElementById('vp-d').setAttribute('aria-pressed', 'false');
    });
    document.getElementById('reload').addEventListener('click', function () {
      els.preview.src = els.preview.src;
    });

    document.getElementById('gen').addEventListener('click', function () {
      var p = buildPrompt();
      openSheet('BUILD PROMPT — สร้างเว็บใหม่ทั้งหน้า', p,
        p.length.toLocaleString() + ' ตัวอักษร · วางในแชทได้เลย สเปกสมบูรณ์ในตัวเอง ไม่ต้องมีไฟล์เดิม');
    });
    document.getElementById('save').addEventListener('click', function () {
      download('SELECTION.json', JSON.stringify({
        picks: S.picks, tokenOverrides: S.extra,
        resolvedTokens: derivedTokens(), diff: diffList()
      }, null, 2), 'application/json');
    });
    document.getElementById('reset').addEventListener('click', function () {
      S.picks = { T: 'CUR', M: D.current.currentWorld };
      S.extra = {};
      renderAll();
    });
    document.getElementById('sheet-close').addEventListener('click', function () { els.sheet.hidden = true; });
    document.getElementById('sheet-copy').addEventListener('click', function () {
      els.sheetText.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { /* */ }
      if (navigator.clipboard) navigator.clipboard.writeText(els.sheetText.value).catch(function () {});
      this.textContent = ok || navigator.clipboard ? 'คัดลอกแล้ว ✓' : 'คัดลอกไม่ได้';
      var b = this;
      setTimeout(function () { b.textContent = 'คัดลอก'; }, 1800);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') els.sheet.hidden = true; });

    renderAll();
  }).catch(function (e) {
    document.querySelector('.main').innerHTML = '<h1>โหลดข้อมูลไม่ได้</h1><p class="sub">' + esc(e.message)
      + '</p><p class="sub">รัน <code>node research/console/build-data.mjs</code> ก่อน แล้วเปิดผ่าน <code>node research/console/serve.cjs</code></p>';
  });
})();
