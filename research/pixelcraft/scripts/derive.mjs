// P3 derive — builds out/derived/{sections,typescale,palette,effect_section_map,widget_settings}.json
// from the raw capture, each under 40 KB, per BRIEF.md §4.3.
// Usage: node research/pixelcraft/scripts/derive.mjs [--out out] [--label home]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const getFlag = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const OUT = path.resolve(here, '..', getFlag('out', 'out'));
const LABEL = getFlag('label', 'home');
const J = f => JSON.parse(fs.readFileSync(path.join(OUT, f), 'utf8'));
const W = (f, obj) => {
  const p = path.join(OUT, 'derived', f);
  fs.writeFileSync(p, JSON.stringify(obj, null, 1));
  const kb = (fs.statSync(p).size / 1024).toFixed(1);
  console.log(`wrote derived/${f} (${kb} KB)`);
  if (fs.statSync(p).size > 40 * 1024) console.warn(`  WARNING: over 40 KB budget`);
};

fs.mkdirSync(path.join(OUT, 'derived'), { recursive: true });
const probe = J(`probe/${LABEL}_1440.json`);
const probe390 = J(`probe/${LABEL}_390.json`);

// ---------- sections.json ----------
{
  const secs390 = probe390.sections || [];
  const rows = probe.sections.map(s => {
    const img = `sections/${LABEL}_1440_S${s.sid.slice(1)}.jpg`;
    return {
      sid: s.sid,
      docTop: s.docTop,
      height: s.height,
      vhFraction: s.vhFraction,
      height390: null, // filled below by index match — 390 sections don't share sids reliably
      padding: s.padding,
      bg: s.bg,
      bgImage: s.bgImage || null,
      overlay: !!s.overlay,
      media: s.media,
      repeatGeometry: s.repeatGeometry || null,
      headingChars: (s.headings || []).map(h => (h.text || '').length),
      headings: (s.headings || []).map(h => ({ tag: h.tag, chars: (h.text || '').length })),
      paraChars: (s.paras || []).map(p => typeof p === 'string' ? p.length : (p.chars ?? (p.text || '').length)),
      buttons: (s.buttons || []).length,
      image: fs.existsSync(path.join(OUT, img)) ? img : '(no image)',
    };
  });
  // 390 heights: scraper assigns sids independently per viewport; match by order index
  // (home_390 found 24 vs 25 sections — align by index, flag the tail as unmatched)
  rows.forEach((r, i) => { r.height390 = secs390[i] ? secs390[i].height : null; r.height390Sid = secs390[i] ? secs390[i].sid : null; });
  W('sections.json', {
    source: `probe/${LABEL}_1440.json#sections`,
    source390: `probe/${LABEL}_390.json#sections`,
    note390: `home_390 probe found ${secs390.length} sections vs ${probe.sections.length} at 1440; height390 matched by array index, sid at 390 recorded in height390Sid — treat mismatched tails as unmeasured`,
    count: rows.length,
    sections: rows,
  });
}

// ---------- typescale.json ----------
{
  const rows = probe.typeScale.rows.filter(r => r.count >= 2);
  W('typescale.json', {
    source: `probe/${LABEL}_1440.json#typeScale`,
    rootFontSizePx: probe.doc?.rootFontSizePx ?? null,
    families: probe.typeScale.families,
    weights: probe.typeScale.weights,
    rows,
    droppedSingletons: probe.typeScale.rows.length - rows.length,
  });
}

// ---------- palette.json ----------
{
  const css = J('analysis_css.json');
  // keep only the theme-level color tokens, not Elementor's per-element generated vars
  const vars = {};
  for (const [k, v] of Object.entries(probe.rootVars || {})) {
    if (/^--(cmsmasters|e-global)-color|^--cmsmasters-colors|^--cmsmasters-(link|bg|button)/i.test(k)) vars[k] = v;
    if (Object.keys(vars).length >= 40) break;
  }
  const clip = (arr, n = 30) => (arr || []).slice(0, n);
  const clipVal = obj => Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, String(v).slice(0, 120)]));
  W('palette.json', {
    sources: [`probe/${LABEL}_1440.json#color`, `probe/${LABEL}_1440.json#rootVars`, 'analysis_css.json#rootVars'],
    bg: clip(probe.color.bg),
    text: clip(probe.color.text),
    border: clip(probe.color.border),
    gradients: clip(probe.color.gradients, 10),
    rootVarsColor: clipVal(vars),
    cssRootVars: clipVal(Object.fromEntries(Object.entries(css.rootVars || {}).filter(([k]) => /color/i.test(k)).slice(0, 40))),
  });
}

// ---------- effect_section_map.json ----------
// Join track_<label>_index.json (i → docTop, sec) with analysis_scroll rows.
// This is the ONLY permitted source for Table B's "where" column (§4.3).
{
  const idx = J(`track_${LABEL}_1440_index.json`);
  const scroll = J(`analysis_scroll_${LABEL}_1440.json`);
  const bySid = i => {
    const el = idx.find(e => e.i === i);
    if (!el) return { sid: '(unmapped)', docTop: null };
    const sid = (el.sec === null || el.sec === undefined) ? '(fixed/global)' : 'S' + String(el.sec + 1).padStart(2, '0');
    return { sid, docTop: el.docTop, cls: (el.cls || '').slice(0, 70) };
  };
  const rows = [];
  for (const kind of ['pinned', 'horizontalScroll', 'parallaxSlow', 'parallaxFast', 'parallaxReverse', 'opacityReveal']) {
    for (const e of scroll[kind] || []) {
      rows.push({ kind, i: e.i, ...bySid(e.i), medianSlope: e.medianSlope, samples: e.samples,
        holdRange: e.holdRange || null, opacityReveal: e.opacityReveal || null });
    }
  }
  W('effect_section_map.json', {
    sources: [`track_${LABEL}_1440_index.json`, `analysis_scroll_${LABEL}_1440.json`],
    note: 'sec in track index is a 0-based section array index; sid = S(sec+1). sec=null → element is fixed page chrome, not owned by a section.',
    rows,
  });
}

// ---------- widget_settings.json ----------
// Elementor widgets serialize their runtime config into data-settings on the rendered element.
// These are functional parameter facts read from the rendered DOM (not theme source code).
{
  const html = fs.readFileSync(path.join(OUT, `dom/${LABEL}_1440.html`), 'utf8');
  // locate section start offsets by data-id to attribute widgets to sections
  const marks = [];
  for (const s of probe.sections) {
    const m = /elementor-element-([a-f0-9]+)/.exec(s.cls);
    if (!m) continue;
    const pos = html.indexOf(`data-id="${m[1]}"`);
    if (pos >= 0) marks.push({ sid: s.sid, pos });
  }
  marks.sort((a, b) => a.pos - b.pos);
  const sidAt = pos => { let last = '(header/global)'; for (const m of marks) { if (m.pos <= pos) last = m.sid; else break; } return last; };
  const dec = s => s.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#039;/g, "'");

  const wanted = [
    'cmsmasters-marquee.default', 'cmsmasters-fancy-text.default', 'counter.default',
    'cmsmasters-media-carousel.default', 'cmsmasters-image-accordion.default',
    'cmsmasters-image-scroll.default', 'cmsmasters-before-after.default',
    'cmsmasters-time-popup.default', 'cmsmasters-offcanvas.default', 'progress.default',
    'cmsmasters-swap-button.default', 'cmsmasters-featured-box.default', 'cmsmasters-highlight-title.default',
  ];
  const found = {};
  for (const wt of wanted) {
    const key = wt.replace(/\.default$/, ''); // keys must stay dot-free for the citation checker
    found[key] = [];
    let idxPos = 0;
    for (let k = 0; k < 6; k++) {
      const i = html.indexOf(`data-widget_type="${wt}"`, idxPos);
      if (i < 0) break;
      const tagStart = html.lastIndexOf('<', i);
      const tag = html.slice(tagStart, html.indexOf('>', i));
      const m = /data-settings="([^"]*)"/.exec(tag);
      const idm = /data-id="([a-f0-9]+)"/.exec(tag);
      let settings = null;
      if (m) { try { settings = JSON.parse(dec(m[1])); } catch { settings = { unparsed: dec(m[1]).slice(0, 300) }; } }
      found[key].push({ sid: sidAt(i), dataId: idm ? idm[1] : null, settings });
      idxPos = i + 1;
    }
    if (!found[key].length) delete found[key];
  }
  // container-level settings worth keeping: bg float on S01, sticky blocks
  const extra = {};
  {
    const grabTag = (anchor, n) => {
      const outArr = []; let idxPos = 0;
      for (let k = 0; k < n; k++) {
        const i = html.indexOf(anchor, idxPos); if (i < 0) break;
        const tagStart = html.lastIndexOf('<', i);
        const tag = html.slice(tagStart, html.indexOf('>', i));
        const m = /data-settings="([^"]*)"/.exec(tag);
        const idm = /data-id="([a-f0-9]+)"/.exec(tag);
        let settings = null;
        if (m) { try { settings = JSON.parse(dec(m[1])); } catch { settings = { unparsed: dec(m[1]).slice(0, 300) }; } }
        outArr.push({ sid: sidAt(i), dataId: idm ? idm[1] : null, settings });
        idxPos = i + 1;
      }
      return outArr;
    };
    extra['bg-effect-float'] = grabTag('cmsmasters-bg-effect-type-float', 2);
    extra['block-sticky'] = grabTag('cmsmasters-block-sticky', 3);
    // scroll-effect containers (basicScroll bindings)
    extra['effect-type-scroll'] = grabTag('cmsmasters-effect-type-scroll', 8);
    // counters serialize their run parameters as data-* on the number span
    extra['counter-numbers'] = [...html.matchAll(/<span[^>]*elementor-counter-number"[^>]*>/g)].slice(0, 8).map(m => {
      const t = m[0];
      const g = re => { const x = re.exec(t); return x ? x[1] : null; };
      return { sid: sidAt(m.index), duration: g(/data-duration="([^"]*)"/), toValue: g(/data-to-value="([^"]*)"/),
        fromValue: g(/data-from-value="([^"]*)"/), delimiter: g(/data-delimiter="([^"]*)"/) };
    });
  }
  W('widget_settings.json', {
    source: `dom/${LABEL}_1440.html (data-settings attributes on rendered Elementor widgets)`,
    note: 'Functional parameters serialized by Elementor into the rendered page. Values are facts; markup is not reproduced. Widget keys have ".default" stripped so citation paths stay dot-free.',
    widgets: found,
    containers: extra,
  });

  // ---------- widget census + placement map ----------
  // Counts every data-widget_type instance per section. Appended into effect_section_map.json
  // (the canonical "where" source for Table B) as widgetPlacements.
  const census = {};
  for (const m of html.matchAll(/data-widget_type="([^"]+)"/g)) {
    const key = m[1].replace(/\.default$/, '').replace(/\./g, '-');
    const sid = sidAt(m.index);
    census[key] = census[key] || {};
    census[key][sid] = (census[key][sid] || 0) + 1;
  }
  // container-level mechanisms that are not widgets
  for (const anchor of ['cmsmasters-block-sticky', 'cmsmasters-effect-type-scroll', 'cmsmasters-bg-effect-type-float', 'cmsmasters-marquee-direction']) {
    const key = anchor.replace(/^cmsmasters-/, '');
    for (const m of html.matchAll(new RegExp(anchor, 'g'))) {
      const sid = sidAt(m.index);
      census[key] = census[key] || {};
      census[key][sid] = (census[key][sid] || 0) + 1;
    }
  }
  W('widget_census.json', {
    source: `dom/${LABEL}_1440.html (data-widget_type occurrences located against section offsets)`,
    census,
  });
  const mapPath = path.join(OUT, 'derived', 'effect_section_map.json');
  const mapObj = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
  mapObj.widgetPlacements = Object.fromEntries(Object.entries(census).map(([k, v]) => [k, Object.keys(v).sort()]));
  fs.writeFileSync(mapPath, JSON.stringify(mapObj, null, 1));
  console.log('appended widgetPlacements to derived/effect_section_map.json');
}

console.log('derive complete');
