// _gen.cjs — single source of truth for the skeleton's structure.
// Emits sections.json + index.html and prints the token list (pasted into README.md).
// Re-run after editing the SPEC below:  node research/pixelcraft/skeleton/_gen.cjs
// Every geometry number here traces to research/pixelcraft/out/ — see SECTIONS.md for citations.
'use strict';
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// approx Thai lengths per role (chars) — drives data-approx-chars box sizing
const ROLE_CHARS = { H1: 40, H2: 60, H3: 30, EYEBROW: 18, BODY: 160, CTA: 16, LABEL: 20, META: 24, NUM: 4, QUOTE: 90, LINK: 14, 'IMG-ALT': 30, TITLE: 28, TAG: 12 };
const ROLE_EL = { H1: 'h1', H2: 'h2', H3: 'h3', EYEBROW: 'p', BODY: 'p', CTA: 'a', LABEL: 'span', META: 'span', NUM: 'span', QUOTE: 'blockquote', LINK: 'a', 'IMG-ALT': 'div', TITLE: 'h3', TAG: 'span' };

// slot helpers -------------------------------------------------------------
const slot = (sid, role, opts = {}) => ({ token: `[${sid}-${role}]`, role, el: opts.el || ROLE_EL[role], approxChars: opts.chars || ROLE_CHARS[role], ...(opts.fontPx ? { fontPx: opts.fontPx } : {}) });
const gslot = (sid, group, n, role, opts = {}) => ({ token: `[${sid}-${group}-${n}-${role}]`, role, group, el: opts.el || ROLE_EL[role], approxChars: opts.chars || ROLE_CHARS[role] });
const cards = (sid, group, count, roles) => {
  const out = [];
  for (let n = 1; n <= count; n++) for (const r of roles) out.push(gslot(sid, group, n, r));
  return out;
};

// ---------------------------------------------------------------------------
// SPEC — id, order, measured min-height @1440 (out/derived/sections.json), bg tone,
// effects (frozen E-ids), layout pattern + pattern config. Slots are generated.
const SPEC = [
  { id: 'S01', h: 1176, vh: 1.31, bg: 'ink', fx: ['E01', 'E20', 'E31', 'E33', 'E40', 'E52'], pattern: 'hero' },
  { id: 'S02', h: 2206, vh: 2.45, bg: 'paper', fx: ['E20', 'E30', 'E40', 'E41'], pattern: 'showcase', n: 3 },
  { id: 'S03', h: 2148, vh: 2.39, bg: 'paper', fx: ['E20', 'E30'], pattern: 'bento', n: 12 },
  { id: 'S04', h: 583, vh: 0.65, bg: 'paper', fx: ['E20', 'E30', 'E40'], pattern: 'statement' },
  { id: 'S05', h: 671, vh: 0.75, bg: 'paper', fx: ['E11', 'E20', 'E30', 'E32'], pattern: 'proof' },
  { id: 'S06', h: 520, vh: 0.58, bg: 'mute', fx: ['E20', 'E21', 'E30', 'E42'], pattern: 'icongrid', n: 9 },
  { id: 'S07', h: 1019, vh: 1.13, bg: 'ink', fx: ['E50'], pattern: 'carousel', n: 5 },
  { id: 'S08', h: 905, vh: 1.01, bg: 'paper', fx: ['E11', 'E33'], pattern: 'marqueefeat', n: 4 },
  { id: 'S09', h: 403, vh: 0.45, bg: 'paper', fx: ['E51'], pattern: 'beforeafter' },
  { id: 'S10', h: 610, vh: 0.68, bg: 'paper', fx: ['E20', 'E30', 'E42'], pattern: 'cards2' },
  { id: 'S11', h: 1108, vh: 1.23, bg: 'paper', fx: ['E10', 'E20', 'E30'], pattern: 'stickydemo', n: 5, checks: 4 },
  { id: 'S12', h: 812, vh: 0.9, bg: 'paper', fx: ['E20', 'E21', 'E22', 'E30'], pattern: 'accordion', n: 3 },
  { id: 'S13', h: 486, vh: 0.54, bg: 'paper', fx: [], pattern: 'checkcols', cols: 3, per: 4 },
  { id: 'S14', h: 584, vh: 0.65, bg: 'paper', fx: ['E20', 'E30', 'E42'], pattern: 'cards3' },
  { id: 'S15', h: 857, vh: 0.95, bg: 'paper', fx: ['E10', 'E30'], pattern: 'stickyshow', n: 4 },
  { id: 'S16', h: 800, vh: 0.89, bg: 'ink', fx: ['E30'], pattern: 'statement' },
  { id: 'S17', h: 860, vh: 0.96, bg: 'paper', fx: ['E11', 'E30'], pattern: 'mediafeat' },
  { id: 'S18', h: 1886, vh: 2.1, bg: 'paper', fx: [], pattern: 'multiblock', checks: 8, list: 4 },
  { id: 'S19', h: 965, vh: 1.07, bg: 'mute', fx: ['E30', 'E50'], pattern: 'carousel', n: 5 },
  { id: 'S20', h: 861, vh: 0.96, bg: 'paper', fx: ['E30'], pattern: 'installcard', toggles: 5 },
  { id: 'S21', h: 1905, vh: 2.12, bg: 'paper', fx: ['E10', 'E30'], pattern: 'stickyshow', n: 3 },
  { id: 'S22', h: 1071, vh: 1.19, bg: 'ink', fx: ['E30'], pattern: 'tilegrid', n: 6 },
  { id: 'S23', h: 1149, vh: 1.28, bg: 'paper', fx: ['E30'], pattern: 'logowall', n: 24 },
  { id: 'S24', h: 356, vh: 0.4, bg: 'paper', fx: [], pattern: 'pricerow', n: 3 },
  { id: 'S25', h: 1007, vh: 1.12, bg: 'ink', fx: ['E20', 'E30', 'E40', 'E42'], pattern: 'ctafinal', checks: 3 },
];

// slots per pattern ---------------------------------------------------------
function slotsFor(s) {
  const S = s.id;
  switch (s.pattern) {
    case 'hero': return [
      slot(S, 'H1', { fontPx: 96, chars: 45 }),
      ...cards(S, 'TYPED', 3, ['LABEL']),
      slot(S, 'BODY', { chars: 90 }),
      ...cards(S, 'BTN', 2, ['CTA']),
      ...cards(S, 'MARQ', 12, ['LABEL']),
    ];
    case 'showcase': return [
      slot(S, 'H2', { fontPx: 72 }), slot(S, 'BODY'),
      ...cards(S, 'CARD', s.n, ['EYEBROW', 'TITLE', 'CTA', 'IMG-ALT']),
    ];
    case 'bento': return [
      slot(S, 'EYEBROW'), slot(S, 'H2', { fontPx: 72 }),
      ...cards(S, 'TILE', s.n, ['TITLE', 'BODY']),
    ];
    case 'statement': return [slot(S, 'EYEBROW'), slot(S, 'H2', { fontPx: 64, chars: 80 }), slot(S, 'BODY', { chars: 120 }), slot(S, 'CTA')];
    case 'proof': return [
      slot(S, 'H2', { fontPx: 56 }), ...cards(S, 'CHK', 3, ['LABEL']), slot(S, 'BODY'),
      slot(S, 'NUM', { chars: 4 }), slot(S, 'META'), slot(S, 'IMG-ALT'),
    ];
    case 'icongrid': return [slot(S, 'EYEBROW'), slot(S, 'H2'), ...cards(S, 'ICON', s.n, ['LABEL'])];
    case 'carousel': return [slot(S, 'H2'), slot(S, 'BODY'), ...cards(S, 'SLIDE', s.n, ['IMG-ALT'])];
    case 'marqueefeat': return [slot(S, 'H2'), slot(S, 'BODY'), slot(S, 'IMG-ALT'), ...cards(S, 'MARQ', s.n, ['LABEL'])];
    case 'beforeafter': return [slot(S, 'H2'), slot(S, 'BODY'), gslot(S, 'IMG', 1, 'IMG-ALT'), gslot(S, 'IMG', 2, 'IMG-ALT')];
    case 'cards2': return [slot(S, 'H2'), ...cards(S, 'CARD', 2, ['TITLE', 'BODY', 'IMG-ALT'])];
    case 'stickydemo': return [
      slot(S, 'EYEBROW'), slot(S, 'H2'), ...cards(S, 'CHK', s.checks, ['LABEL']),
      ...cards(S, 'DEMO', s.n, ['TITLE', 'BODY', 'IMG-ALT']),
    ];
    case 'accordion': return [slot(S, 'H2', { fontPx: 64 }), slot(S, 'BODY'), ...cards(S, 'PANE', s.n, ['TITLE', 'TAG', 'IMG-ALT'])];
    case 'checkcols': {
      const out = [slot(S, 'H2')];
      for (let c = 1; c <= s.cols; c++) {
        out.push(gslot(S, `COL${c}`, 1, 'META'));
        for (let n = 1; n <= s.per; n++) out.push(gslot(S, `COL${c}ITEM`, n, 'LABEL'));
      }
      return out;
    }
    case 'cards3': return [slot(S, 'H2'), slot(S, 'BODY'), ...cards(S, 'CARD', 3, ['TITLE', 'TAG', 'BODY'])];
    case 'stickyshow': return [slot(S, 'H2'), slot(S, 'BODY'), ...cards(S, 'SHOW', s.n, ['TITLE', 'BODY', 'IMG-ALT'])];
    case 'mediafeat': return [slot(S, 'EYEBROW'), slot(S, 'H2'), slot(S, 'BODY'), slot(S, 'IMG-ALT')];
    case 'multiblock': return [
      gslot(S, 'CARD', 1, 'TITLE'), ...cards(S, 'STEP', s.list, ['LABEL']),
      slot(S, 'H2'), ...cards(S, 'CHK', s.checks, ['LABEL']),
      slot(S, 'H3'), slot(S, 'BODY'),
    ];
    case 'installcard': return [
      slot(S, 'EYEBROW'), slot(S, 'H2'), slot(S, 'BODY'),
      gslot(S, 'CARD', 1, 'TITLE'), ...cards(S, 'TGL', s.toggles, ['LABEL']), slot(S, 'CTA'),
    ];
    case 'tilegrid': return [slot(S, 'EYEBROW'), slot(S, 'H2'), slot(S, 'BODY'), ...cards(S, 'TILE', s.n, ['LABEL'])];
    case 'logowall': return [slot(S, 'H2'), slot(S, 'BODY'), ...cards(S, 'LOGO', s.n, ['LABEL'])];
    case 'pricerow': return [slot(S, 'H2'), ...cards(S, 'ITEM', s.n, ['LABEL']), slot(S, 'NUM', { chars: 8 })];
    case 'ctafinal': return [slot(S, 'H2', { fontPx: 64 }), ...cards(S, 'CHK', s.checks, ['LABEL']), slot(S, 'CTA'), slot(S, 'IMG-ALT')];
    default: throw new Error('unknown pattern ' + s.pattern);
  }
}

// ---------------------------------------------------------------------------
// HTML emission — placeholders only; every slot element carries data-token.
const tok = (sl, cls = '') => {
  const t = sl.token.slice(1, -1);
  const style = sl.fontPx ? ` style="--tok-fs:${sl.fontPx}px"` : '';
  return `<${sl.el} class="tok ${cls}" data-token="${t}" data-approx-chars="${sl.approxChars}"${sl.el === 'a' ? ' href="#"' : ''}${style}>${sl.token}</${sl.el}>`;
};
const find = (slots, role) => slots.find(x => x.role === role && !x.group);
const grp = (slots, group) => slots.filter(x => x.group === group);
const byN = (list) => { const m = {}; for (const x of list) { const n = x.token.match(/-(\d+)-/)[1]; (m[n] = m[n] || []).push(x); } return Object.values(m); };

function headBlock(slots, { center = true } = {}) {
  const e = find(slots, 'EYEBROW'), h = find(slots, 'H2'), b = slots.find(x => x.role === 'BODY' && !x.group);
  return `<div class="shead${center ? ' center' : ''}">${e ? tok(e, 'eyebrow') : ''}${h ? tok(h, 'display') : ''}${b ? tok(b, 'body') : ''}</div>`;
}

function html(s) {
  const S = s.id, slots = s.slots;
  const w = (inner) => inner;
  switch (s.pattern) {
    case 'hero': {
      const typed = grp(slots, 'TYPED').map(x => tok(x, 'typed-item')).join('');
      const btns = grp(slots, 'BTN').map(x => tok(x, 'btn swap')).join('');
      const marq = grp(slots, 'MARQ').map(x => tok(x, 'marq-item')).join('');
      return w(`<div class="bgdrift" data-effect="E52" aria-hidden="true"></div>
  <div class="wrap hero-inner">
    <h1 class="display hero-h1" id="${S.toLowerCase()}-h" data-effect="E20"><span class="tok" data-token="${S}-H1" data-approx-chars="45">[${S}-H1]</span>
      <span class="typed" data-effect="E31" data-typed-delay="2500">${typed}</span></h1>
    ${tok(find(slots, 'BODY'), 'body')}
    <div class="btnrow" data-effect="E20">${btns}</div>
  </div>
  <div class="marquee" data-effect="E33" data-marquee-pps="45.1" data-marquee-gap="120">
    <div class="marquee-track">${marq}</div>
  </div>`);
    }
    case 'showcase': {
      const cardHtml = byN(grp(slots, 'CARD')).map((c, i) => `
    <article class="show-card${i % 2 ? ' flip' : ''}" data-effect="E20">
      <div class="imgbox panbox" data-effect="E41">${tok(c.find(x => x.role === 'IMG-ALT'), 'imgalt tall')}</div>
      <div class="show-meta">${tok(c.find(x => x.role === 'EYEBROW'), 'eyebrow')}${tok(c.find(x => x.role === 'TITLE'))}${tok(c.find(x => x.role === 'CTA'), 'btn swap')}</div>
    </article>`).join('');
      return `<div class="wrap">${headBlock(slots)}<div class="show-list">${cardHtml}</div></div>`;
    }
    case 'bento': {
      const tiles = byN(grp(slots, 'TILE')).map((c, i) => `
    <article class="tile b${(i % 5) + 1}">${tok(c[0])}${tok(c[1], 'body sm')}</article>`).join('');
      return `<div class="wrap">${headBlock(slots)}<div class="bento" data-effect="E21" data-stagger="200">${tiles}</div></div>`;
    }
    case 'statement': {
      const c = find(slots, 'CTA');
      return `<div class="wrap narrow center">${tok(find(slots, 'EYEBROW'), 'eyebrow')}<div data-effect="E20">${tok(find(slots, 'H2'), 'display hl-host')}</div>${tok(find(slots, 'BODY'), 'body')}${c ? tok(c, 'btn swap') : ''}</div>`;
    }
    case 'proof': {
      const chks = grp(slots, 'CHK').map(x => `<li>${tok(x)}</li>`).join('');
      return `<div class="wrap twocol">
    <div class="col" data-effect="E20">${tok(find(slots, 'H2'), 'display')}<ul class="checks">${chks}</ul>${tok(find(slots, 'BODY'), 'body')}</div>
    <div class="col drift" data-effect="E11" data-scroll-speed="1">
      <div class="imgbox">${tok(find(slots, 'IMG-ALT'), 'imgalt')}</div>
      <div class="statcard"><span class="num" data-effect="E32" data-counter-to="92" data-counter-dur="2000">0</span>${tok(find(slots, 'NUM'), 'numlabel')}${tok(find(slots, 'META'), 'meta')}</div>
    </div></div>`;
    }
    case 'icongrid': {
      const items = grp(slots, 'ICON').map(x => `<div class="iconitem" data-effect="E42"><span class="dot" aria-hidden="true"></span>${tok(x)}</div>`).join('');
      return `<div class="wrap twocol"><div class="col">${headBlock(slots, { center: false })}</div>
    <div class="col grid3" data-effect="E21" data-stagger="200">${items}</div></div>`;
    }
    case 'carousel': {
      const slides = grp(slots, 'SLIDE').map(x => `<div class="slide imgbox">${tok(x, 'imgalt')}</div>`).join('');
      return `<div class="wrap">${headBlock(slots)}</div>
  <div class="conveyor" data-effect="E50" data-conveyor-step="10500" data-conveyor-gap="80"><div class="conveyor-track">${slides}</div></div>
  <div class="dots" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>`;
    }
    case 'marqueefeat': {
      const marq = grp(slots, 'MARQ').map(x => tok(x, 'marq-item big')).join('');
      return `<div class="wrap center">${headBlock(slots)}<div class="imgbox wide" data-effect="E11" data-scroll-speed="1">${tok(find(slots, 'IMG-ALT'), 'imgalt')}</div></div>
  <div class="marquee giant" data-effect="E33" data-marquee-pps="75.2" data-marquee-gap="100"><div class="marquee-track">${marq}</div></div>`;
    }
    case 'beforeafter': {
      const [a, b] = grp(slots, 'IMG');
      return `<div class="wrap twocol"><div class="col">${headBlock(slots, { center: false })}</div>
    <div class="col"><div class="ba" data-effect="E51" data-ba-offset="55">
      <div class="ba-under imgbox">${tok(a, 'imgalt')}</div>
      <div class="ba-over imgbox">${tok(b, 'imgalt')}</div>
      <div class="ba-handle" role="slider" aria-label="before/after divider" aria-valuenow="55" tabindex="0"></div>
    </div></div></div>`;
    }
    case 'cards2': {
      const cs = byN(grp(slots, 'CARD')).map((c, i) => `
    <article class="bigcard ${i ? 'dark' : ''}" data-effect="E42">${tok(c.find(x => x.role === 'TITLE'))}${tok(c.find(x => x.role === 'BODY'), 'body sm')}<div class="imgbox">${tok(c.find(x => x.role === 'IMG-ALT'), 'imgalt')}</div></article>`).join('');
      return `<div class="wrap">${headBlock(slots)}<div class="grid2">${cs}</div></div>`;
    }
    case 'stickydemo': {
      const chks = grp(slots, 'CHK').map(x => `<li>${tok(x)}</li>`).join('');
      const demos = byN(grp(slots, 'DEMO')).map(c => `
      <article class="demo" data-effect="E20"><div class="imgbox">${tok(c.find(x => x.role === 'IMG-ALT'), 'imgalt')}</div>${tok(c.find(x => x.role === 'TITLE'))}${tok(c.find(x => x.role === 'BODY'), 'body sm')}</article>`).join('');
      return `<div class="wrap twocol">
    <div class="col sticky" data-effect="E10">${tok(find(slots, 'EYEBROW'), 'eyebrow')}${tok(find(slots, 'H2'), 'display hl-host')}<ul class="checks">${chks}</ul></div>
    <div class="col flow">${demos}</div></div>`;
    }
    case 'accordion': {
      const panes = byN(grp(slots, 'PANE')).map((c, i) => `
    <div class="pane${i === 2 ? ' active' : ''}" tabindex="0"><div class="imgbox fill">${tok(c.find(x => x.role === 'IMG-ALT'), 'imgalt')}</div>
      <div class="pane-meta">${tok(c.find(x => x.role === 'TITLE'))}${tok(c.find(x => x.role === 'TAG'), 'tag')}</div></div>`).join('');
      return `<div class="wrap">${headBlock(slots)}<div class="acc" data-effect="E22">${panes}</div></div>`;
    }
    case 'checkcols': {
      let cols = '';
      for (let c = 1; c <= s.cols; c++) {
        const head = grp(slots, `COL${c}`)[0];
        const items = grp(slots, `COL${c}ITEM`).map(x => `<li>${tok(x)}</li>`).join('');
        cols += `<div class="checkcol"><div class="pill">${tok(head, 'meta')}</div><ul class="checks">${items}</ul></div>`;
      }
      return `<div class="wrap">${headBlock(slots)}<div class="grid3 loose">${cols}</div></div>`;
    }
    case 'cards3': {
      const cs = byN(grp(slots, 'CARD')).map((c, i) => `
    <article class="bigcard tone${i}" data-effect="E42">${tok(c.find(x => x.role === 'TITLE'))}${tok(c.find(x => x.role === 'TAG'), 'tag')}${tok(c.find(x => x.role === 'BODY'), 'body sm')}</article>`).join('');
      return `<div class="wrap">${headBlock(slots)}<div class="grid3">${cs}</div></div>`;
    }
    case 'stickyshow': {
      const shows = byN(grp(slots, 'SHOW')).map(c => `
      <article class="demo"><div class="imgbox">${tok(c.find(x => x.role === 'IMG-ALT'), 'imgalt')}</div>${tok(c.find(x => x.role === 'TITLE'))}${tok(c.find(x => x.role === 'BODY'), 'body sm')}</article>`).join('');
      return `<div class="wrap twocol">
    <div class="col sticky" data-effect="E10">${tok(find(slots, 'H2'), 'display hl-host')}${tok(find(slots, 'BODY'), 'body')}</div>
    <div class="col flow">${shows}</div></div>`;
    }
    case 'mediafeat': return `<div class="wrap center">${headBlock(slots)}<div class="imgbox wide" data-effect="E11" data-scroll-speed="2">${tok(find(slots, 'IMG-ALT'), 'imgalt')}</div></div>`;
    case 'multiblock': {
      const steps = grp(slots, 'STEP').map((x, i) => `<li><span class="n">${i + 1}</span>${tok(x)}</li>`).join('');
      const chks = grp(slots, 'CHK').map(x => `<li>${tok(x)}</li>`).join('');
      return `<div class="wrap">
    <div class="grid2"><article class="bigcard dark">${tok(grp(slots, 'CARD')[0])}</article><ol class="steps">${steps}</ol></div>
    <div class="blockgap">${tok(find(slots, 'H2'), 'display hl-host')}<ul class="checks two">${chks}</ul></div>
    <div class="blockgap center">${tok(find(slots, 'H3'))}${tok(find(slots, 'BODY'), 'body')}</div></div>`;
    }
    case 'installcard': {
      const tgl = grp(slots, 'TGL').map(x => `<li><span class="tglpill" aria-hidden="true"></span>${tok(x)}</li>`).join('');
      return `<div class="wrap twocol">
    <div class="col">${headBlock(slots, { center: false })}</div>
    <div class="col"><div class="installcard">${tok(grp(slots, 'CARD')[0])}<ul class="tgllist">${tgl}</ul>${tok(find(slots, 'CTA'), 'btn dark swap')}</div></div></div>`;
    }
    case 'tilegrid': {
      const tiles = grp(slots, 'TILE').map(x => `<div class="mocktile"><div class="mockbar" aria-hidden="true"></div>${tok(x)}</div>`).join('');
      return `<div class="wrap">${headBlock(slots)}<div class="grid3">${tiles}</div></div>`;
    }
    case 'logowall': {
      const logos = grp(slots, 'LOGO').map(x => `<div class="logocell">${tok(x)}</div>`).join('');
      return `<div class="wrap">${headBlock(slots)}<div class="logowall">${logos}</div></div>`;
    }
    case 'pricerow': {
      const items = grp(slots, 'ITEM').map((x, i) => `<div class="priceitem">${tok(x)}</div>${i < grp(slots, 'ITEM').length - 1 ? '<span class="op" aria-hidden="true">+</span>' : ''}`).join('');
      return `<div class="wrap center">${tok(find(slots, 'H2'), 'display')}<div class="pricerow">${items}<span class="op" aria-hidden="true">=</span>${tok(find(slots, 'NUM'), 'price')}</div></div>`;
    }
    case 'ctafinal': {
      const chks = grp(slots, 'CHK').map(x => `<li>${tok(x)}</li>`).join('');
      return `<div class="wrap center">
    <div data-effect="E20">${tok(find(slots, 'H2'), 'display hl-host')}</div>
    <ul class="checks row">${chks}</ul>
    ${tok(find(slots, 'CTA'), 'btn accent swap')}
    <div class="imgbox wide">${tok(find(slots, 'IMG-ALT'), 'imgalt')}</div></div>`;
    }
    default: throw new Error('no html for ' + s.pattern);
  }
}

// ---------------------------------------------------------------------------
// header (S00) + global chrome
const S00 = {
  slots: [
    { token: '[S00-LINK]', role: 'LINK', el: 'a', approxChars: 10 },
    { token: '[S00-CTA]', role: 'CTA', el: 'a', approxChars: 16 },
    { token: '[S00-MENU-1-LINK]', role: 'LINK', group: 'MENU', el: 'a', approxChars: 14 },
    { token: '[S00-MENU-2-LINK]', role: 'LINK', group: 'MENU', el: 'a', approxChars: 14 },
    { token: '[S00-MENU-3-LINK]', role: 'LINK', group: 'MENU', el: 'a', approxChars: 14 },
    { token: '[S00-MENU-4-LINK]', role: 'LINK', group: 'MENU', el: 'a', approxChars: 14 },
  ],
};
const POPUP = { slots: [
  { token: '[POP-TITLE]', role: 'TITLE', el: 'h3', approxChars: 28 },
  { token: '[POP-BODY]', role: 'BODY', el: 'p', approxChars: 90 },
  { token: '[POP-CTA]', role: 'CTA', el: 'a', approxChars: 16 },
] };

// effects manifest (params mirror out/derived/effects.json; implemented status per build)
const EFFECTS = [
  { id: 'E01', name: 'page-load intro fade', group: 'E01s', mechanism: 'CSS keyframe on load, staggered delays', measuredFrom: 'probe/home_1440.json#effects.animatedCSS', implemented: true, reason: null, usedIn: ['S00', 'S01', 'S02'], params: { durationS: 1.25, timing: 'ease', delaysMs: [500, 700] } },
  { id: 'E10', name: 'sticky content block', group: 'E10s', mechanism: 'native position:sticky', measuredFrom: 'derived/widget_settings.json#containers.block-sticky', implemented: true, reason: null, usedIn: ['S11', 'S15', 'S21'], params: { offsetTopPx: 40 } },
  { id: 'E11', name: 'scroll vertical parallax', group: 'E10s', mechanism: 'rAF translateY linear over viewport traversal; travel = speed×100px', measuredFrom: 'effects/parallax_S05_speed2.json#fit', implemented: true, reason: null, usedIn: ['S05', 'S08', 'S17'], params: { pxPerSpeedUnit: 100, timing: 'linear' } },
  { id: 'E12', name: 'fixed action cluster appear', group: 'E10s', mechanism: 'fixed cluster translates -40px + fades over 10–20% page scroll', measuredFrom: 'effects/fixedwidget_pagescroll.json#fit', implemented: true, reason: null, usedIn: ['global'], params: { travelPx: -40, bezier: [0.39, -0.06, 0.54, 1.17], pageRange: [0.10, 0.20] } },
  { id: 'E20', name: 'scroll-entrance reveal', group: 'E20s', mechanism: 'IntersectionObserver + CSS transition (fade + rise)', measuredFrom: 'probe/home_1440.json#effects.animatedCSS', implemented: true, reason: null, usedIn: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S10', 'S11', 'S12', 'S14', 'S25'], params: { durationS: 1.25, distancePx: 60, timing: 'ease', distanceNote: 'distance approximated from fancy-text serialized setting (SECTIONS.md Table B)' } },
  { id: 'E21', name: 'sequential stagger reveal', group: 'E20s', mechanism: 'E20 + per-sibling delay', measuredFrom: 'probe/home_1440.json#effects.scrollAttrs', implemented: true, reason: null, usedIn: ['S03', 'S06', 'S12'], params: { staggerMs: 200 } },
  { id: 'E22', name: 'image accordion', group: 'E20s', mechanism: 'flex-grow transition on hover/focus + overlay fade', measuredFrom: 'derived/widget_settings.json#widgets.cmsmasters-image-accordion', implemented: true, reason: null, usedIn: ['S12'], params: { action: 'hover', defaultActive: 3, growTransitionS: 0.4, growNote: 'grow duration not measured on source; theme-wide 0.3–0.4s used' } },
  { id: 'E30', name: 'highlight-title reveal', group: 'E30s', mechanism: 'background-size sweep on highlight span when revealed', measuredFrom: 'analysis_css.json#keyframes', implemented: 'partial', reason: 'keyframes confirmed on source, duration not measurable (one-shot); 0.6s chosen, tunable in ?debug', usedIn: ['S02', 'S03', 'S04', 'S05', 'S06', 'S10', 'S11', 'S12', 'S14', 'S15', 'S16', 'S17', 'S19', 'S20', 'S21', 'S22', 'S23', 'S25'], params: { durationS: 0.6 } },
  { id: 'E31', name: 'typed text rotator', group: 'E30s', mechanism: 'grapheme-safe typing loop (Intl.Segmenter th) — line-level fallback without Segmenter', measuredFrom: 'derived/widget_settings.json#widgets.cmsmasters-fancy-text', implemented: 'partial', reason: 'word-change delay 2500ms measured; per-character cadence not serialized on source — 60ms/grapheme chosen, tunable', usedIn: ['S01'], params: { delayOnChangeMs: 2500, typeMsPerGrapheme: 60 } },
  { id: 'E32', name: 'counter count-up', group: 'E30s', mechanism: 'rAF tween of textContent on first view', measuredFrom: 'derived/widget_settings.json#containers.counter-numbers', implemented: true, reason: null, usedIn: ['S05'], params: { durationMs: 2000, to: 92 } },
  { id: 'E33', name: 'image/text marquee', group: 'E30s', mechanism: 'duplicated track, linear translateX loop, px/s honored at runtime', measuredFrom: 'effects/marquee_S01_inner.json#measured', implemented: true, reason: null, usedIn: ['S01', 'S08'], params: { ppsS01: 45.1, ppsS08: 75.2, copies: 2, gapS01: 120, gapS08: 100 } },
  { id: 'E40', name: 'swap-button hover', group: 'E40s', mechanism: 'label swap + color crossfade, no geometric movement', measuredFrom: 'effects/hover_swapbutton.json#measured', implemented: true, reason: null, usedIn: ['S00', 'S01', 'S02', 'S04', 'S25'], params: { transitionS: 0.3 } },
  { id: 'E41', name: 'image pan on hover', group: 'E40s', mechanism: 'inner placeholder pans vertically inside clipped frame while hovered', measuredFrom: 'derived/widget_settings.json#widgets.cmsmasters-image-scroll', implemented: 'partial', reason: 'direction/trigger measured; pan speed not measured on source — 6s full-travel chosen, tunable', usedIn: ['S02'], params: { direction: 'vertical', fullTravelS: 6 } },
  { id: 'E42', name: 'featured-box hover state', group: 'E40s', mechanism: 'color/background swap on hover, no movement', measuredFrom: 'effects/hover_featuredbox.json#measured', implemented: true, reason: null, usedIn: ['S06', 'S10', 'S14', 'S25'], params: { transitionS: 0.3 } },
  { id: 'E43', name: 'global micro-transitions', group: 'E40s', mechanism: 'shared 0.3s/0.4s ease transition tokens', measuredFrom: 'probe/home_1440.json#effects.transitions', implemented: true, reason: null, usedIn: ['global'], params: { colorS: 0.3, transformS: 0.4 } },
  { id: 'E50', name: 'conveyor media carousel', group: 'E50s', mechanism: 'hand-written continuous linear track (no Swiper); one step per 10.5s', measuredFrom: 'derived/widget_settings.json#widgets.cmsmasters-media-carousel', implemented: true, reason: null, usedIn: ['S07', 'S19'], params: { stepMs: 10500, gapPx: 80 } },
  { id: 'E51', name: 'before/after slider', group: 'E50s', mechanism: 'clip-path inset + click/drag/keyboard divider', measuredFrom: 'derived/widget_settings.json#widgets.cmsmasters-before-after', implemented: true, reason: null, usedIn: ['S09'], params: { defaultOffsetPct: 55, move: 'click' } },
  { id: 'E52', name: 'ambient background drift', group: 'E50s', mechanism: 'sine x/y drift ±5% on shared rAF', measuredFrom: 'effects/bgfloat_S01.json#fit', implemented: true, reason: null, usedIn: ['S01'], params: { rangePct: 5, periodS: 16 } },
  { id: 'E60', name: 'header absolute', group: 'E60s', mechanism: 'absolute header scrolls away; no hide/show because source page does not use it', measuredFrom: 'probe/home_1440.json#nav', implemented: true, reason: null, usedIn: ['S00'], params: { heightPx: 112 } },
  { id: 'E61', name: 'timed popup modal', group: 'E60s', mechanism: 'dialog opens after delay; close button; ESC closes', measuredFrom: 'derived/widget_settings.json#widgets.cmsmasters-time-popup', implemented: 'partial', reason: 'trigger value 200 serialized without units on source — 20s chosen, tunable in ?debug', usedIn: ['global'], params: { delayS: 20 } },
  { id: 'E62', name: 'offcanvas menu', group: 'E60s', mechanism: 'hamburger toggles fixed side panel', measuredFrom: 'derived/widget_settings.json#widgets.cmsmasters-offcanvas', implemented: true, reason: null, usedIn: ['S00'], params: {} },
];

// ---------------------------------------------------------------------------
const sections = SPEC.map((s, i) => ({ ...s, order: i + 1, slots: slotsFor(s) }));

// --- sections.json
const manifest = {
  version: 1,
  source: { demoUrl: 'https://pixel-craft.cmsmasters.studio/', capturedAt: '2026-08-01T08:43:51Z', viewport: '1440x900' },
  palette: { '--ink': '#0f1613', '--paper': '#F2EFDE', '--accent': '#F0B32E' },
  header: { id: 'S00', heightPx: 112, effects: ['E01', 'E40', 'E60', 'E62'], slots: S00.slots },
  popup: { effects: ['E61'], slots: POPUP.slots },
  sections: sections.map(s => ({
    id: s.id, order: s.order, minHeightPx: s.h, vhFraction: s.vh, bg: s.bg,
    effects: s.fx, pattern: s.pattern, slots: s.slots,
  })),
  effects: EFFECTS,
};

// token uniqueness check at generation time
{
  const all = [manifest.header, manifest.popup, ...manifest.sections].flatMap(s => s.slots.map(x => x.token));
  const dup = all.filter((t, i) => all.indexOf(t) !== i);
  if (dup.length) throw new Error('duplicate tokens: ' + dup.join(', '));
  console.log('tokens:', all.length, '(all unique)');
}

// --- index.html
const secHtml = sections.map(s => `
<!-- ================= ${s.id} · ${s.pattern} · effects: ${s.fx.join(' ') || '(none)'} ================= -->
<section data-section="${s.id}" data-effects="${s.fx.join(' ')}" class="sec bg-${s.bg}${s.h < 520 ? ' slim' : ''}" aria-labelledby="${s.id.toLowerCase()}-h" style="--min-h:${s.h}px">
  ${html(s).replace(/id="s\d+-h"/, `id="${s.id.toLowerCase()}-h"`)}
</section>`).join('\n');

// ensure every section has a heading with the aria id (patterns using headBlock get it injected here)
const fixed = secHtml.replace(/<section([^>]*aria-labelledby="(s\d{2})-h"[^>]*)>([\s\S]*?)<\/section>/g, (m, attrs, sid, inner) => {
  if (inner.includes(`id="${sid}-h"`)) return m;
  // first display/H element inside gets the id
  const inner2 = inner.replace(/<(h[123])([^>]*)>/, `<$1 id="${sid}-h"$2>`);
  return `<section${attrs}>${inner2}</section>`;
});

const menu = S00.slots.filter(x => x.group === 'MENU').map(x => `<li><a class="tok" href="#" data-token="${x.token.slice(1, -1)}" data-approx-chars="14">${x.token}</a></li>`).join('');

const indexHtml = `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Plan C — skeleton (Pixel Craft teardown basis)</title>
<link rel="icon" href="data:,">
<link rel="stylesheet" href="fonts/type.css">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<a class="skip" href="#main">ข้ามไปเนื้อหา</a>

<header class="site-header" data-section="S00" data-effects="E01 E40 E60 E62">
  <a class="tok logo" href="#" data-token="S00-LINK" data-approx-chars="10">[S00-LINK]</a>
  <nav class="head-nav" aria-label="หลัก"><ul>${menu}</ul></nav>
  <a class="tok btn swap" href="#" data-token="S00-CTA" data-approx-chars="16">[S00-CTA]</a>
  <button class="burger" data-effect="E62" aria-expanded="false" aria-controls="offcanvas" aria-label="เปิดเมนู"><span></span><span></span><span></span></button>
</header>

<div id="offcanvas" class="offcanvas" hidden>
  <button class="oc-close" aria-label="ปิดเมนู">×</button>
  <nav aria-label="offcanvas"><ul>${menu.replace(/S00-MENU/g, 'S00-MENU').replace(/data-token/g, 'data-token-dup')}</ul></nav>
</div>

<main id="main">
${fixed}
</main>

<div class="fixed-cluster" data-effect="E12" aria-hidden="true"><span class="fc-dot"></span><span class="fc-dot"></span></div>

<div class="popup" data-effect="E61" role="dialog" aria-modal="true" aria-labelledby="pop-h" hidden>
  <div class="popup-card">
    <button class="pop-close" aria-label="ปิด">×</button>
    <h3 class="tok" id="pop-h" data-token="POP-TITLE" data-approx-chars="28">[POP-TITLE]</h3>
    <p class="tok body" data-token="POP-BODY" data-approx-chars="90">[POP-BODY]</p>
    <a class="tok btn accent" href="#" data-token="POP-CTA" data-approx-chars="16">[POP-CTA]</a>
  </div>
</div>

<script type="module" src="effects.js"></script>
<script type="module" src="debug.js"></script>
<script type="module" src="filler-th.js"></script>
</body>
</html>
`;

// offcanvas duplicates the menu links visually; duplicates must NOT carry data-token
// (token uniqueness) — handled above by renaming to data-token-dup and leaving text.

const here = __dirname;
fs.writeFileSync(path.join(here, 'sections.json'), JSON.stringify(manifest, null, 1));
fs.writeFileSync(path.join(here, 'index.html'), indexHtml);
console.log('wrote sections.json (%d KB), index.html (%d KB)',
  Math.round(fs.statSync(path.join(here, 'sections.json')).size / 1024),
  Math.round(fs.statSync(path.join(here, 'index.html')).size / 1024));

// token list for README
const list = [manifest.header, manifest.popup, ...manifest.sections].flatMap(s => s.slots.map(x => x.token));
fs.writeFileSync(path.join(here, '_tokens.txt'), list.join('\n'));
console.log('wrote _tokens.txt (%d tokens)', list.length);
