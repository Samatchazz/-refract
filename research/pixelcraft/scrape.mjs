// scrape.mjs v2 — Pixel Craft (ThemeForest 61661179) design-system teardown capture.
//
// Run on a machine with internet access:
//     cd "Z:\Claude Code"
//     npm i playwright && npx playwright install chromium
//     node research/pixelcraft/scrape.mjs
//
// Flags:
//     --url <URL>      skip iframe resolution, capture this URL directly
//     --out <dir>      output dir name under research/pixelcraft/  (default: out)
//     --label <name>   label prefix for this capture             (default: home)
//     --headful        run a visible browser (to see Cloudflare challenges)
//     --quick          skip the 390px pass and the hover pass  (DEBUG ONLY — see BRIEF §2)
//     --no-shots       skip all screenshots (fast structural debug)
//
// Everything lands in research/pixelcraft/<out>/

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let chromium, pwVersion = 'unknown';
try {
  ({ chromium } = await import('playwright'));
  try { pwVersion = JSON.parse(fs.readFileSync(fileURLToPath(await import.meta.resolve('playwright/package.json')), 'utf8')).version; } catch { }
} catch {
  console.error('\n!! playwright not found\n   run:  cd "Z:\\Claude Code" && npm i playwright && npx playwright install chromium\n');
  process.exit(1);
}

const HERE = path.dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const arg = (k, d = null) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const flag = (k) => argv.includes(k);

const OUT = path.join(HERE, arg('--out', 'out'));
const LABEL = arg('--label', 'home');
const SHOTS = !flag('--no-shots');
const QUICK = flag('--quick');

const D = (...p) => { const d = path.join(OUT, ...p); fs.mkdirSync(d, { recursive: true }); return d; };
const W = (rel, data) => {
  const f = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, typeof data === 'string' || Buffer.isBuffer(data) ? data : JSON.stringify(data, null, 2));
  return f;
};

const PREVIEW_URL = 'https://preview.themeforest.net/item/pixel-craft-digital-agency-creative-portfolio-wordpress-theme/full_screen_preview/61661179';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const log = (...a) => console.log('[pixelcraft]', ...a);
const META = { startedAt: new Date().toISOString(), playwright: pwVersion, flags: argv.slice(), captures: [], notCaptured: [], warnings: [] };
const warn = (m) => { log('WARN:', m); META.warnings.push(m); };

D();

// ===========================================================================
// IN-PAGE PROBE — read-only except for the data-trk / data-sec index attributes
// ===========================================================================
const PROBE = function (opts) {
  const stamp = !!(opts && opts.stamp);
  const vw = innerWidth, vh = innerHeight;
  const r2 = (n) => Math.round(n * 100) / 100;
  const px = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
  const cache = new WeakMap();
  const cs = (el) => { let c = cache.get(el); if (!c) { c = getComputedStyle(el); cache.set(el, c); } return c; };
  const all = Array.from(document.querySelectorAll('body *'));
  const pageY = () => window.pageYOffset || document.documentElement.scrollTop || 0;
  const shown = (el) => { const c = cs(el); return c.display !== 'none' && c.visibility !== 'hidden'; };
  const boxed = (el) => { if (!shown(el)) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const ownText = (el) => { let s = ''; for (const n of el.childNodes) if (n.nodeType === 3) s += n.textContent; return s.replace(/\s+/g, ' ').trim(); };
  const clsOf = (el) => (el.className && el.className.baseVal !== undefined ? el.className.baseVal : (el.className || '')).toString().replace(/\s+/g, ' ').trim();
  const dataAttrs = (el) => { const o = {}; for (const a of el.attributes) if ((a.name.startsWith('data-') && !/^data-(trk|sec)$/.test(a.name)) || a.name === 'id') o[a.name] = a.value.slice(0, 120); return o; };
  const scrollY = pageY();

  // ---- A. libraries -------------------------------------------------------
  const g = (k) => { try { return typeof window[k] !== 'undefined'; } catch { return false; } };
  const libs = {
    gsap: g('gsap') || g('TweenMax'),
    gsapVersion: (() => { try { return window.gsap && window.gsap.version; } catch { return null; } })(),
    ScrollTrigger: (() => { try { return !!(window.ScrollTrigger || (window.gsap && window.gsap.core && window.gsap.core.globals && window.gsap.core.globals().ScrollTrigger)); } catch { return false; } })(),
    ScrollSmoother: g('ScrollSmoother'), SplitText: g('SplitText'), Draggable: g('Draggable'), Flip: g('Flip'),
    Lenis: g('Lenis') || g('lenis'), LocomotiveScroll: g('LocomotiveScroll') || g('locomotiveScroll'),
    Swiper: g('Swiper'), barba: g('barba'), THREE: g('THREE'), PIXI: g('PIXI'), Matter: g('Matter'), OGL: g('OGL'),
    AOS: g('AOS'), ScrollMagic: g('ScrollMagic'), Splitting: g('Splitting'), SplitType: g('SplitType'),
    Isotope: g('Isotope'), Masonry: g('Masonry'), imagesLoaded: g('imagesLoaded'), anime: g('anime'),
    Rive: g('rive') || g('Rive'), lottie: g('lottie') || g('bodymovin'), Vivus: g('Vivus'),
    jQuery: (() => { try { return window.jQuery ? window.jQuery.fn.jquery : null; } catch { return null; } })(),
    elementor: g('elementor') || g('elementorFrontend'), wpBakery: g('vc_js'),
    smoothScrollbar: g('Scrollbar'), simpleParallax: g('simpleParallax'), Rellax: g('Rellax'),
  };
  const scripts = Array.from(document.querySelectorAll('script')).map((s) => ({ src: s.src || null, inlineBytes: s.src ? 0 : (s.textContent || '').length, id: s.id || null }));
  const links = Array.from(document.querySelectorAll('link[rel=stylesheet], link[as=style]')).map((l) => l.href);
  const inlineStyleBytes = Array.from(document.querySelectorAll('style')).reduce((a, s) => a + (s.textContent || '').length, 0);
  const metaGenerator = Array.from(document.querySelectorAll('meta[name=generator]')).map((m) => m.content);

  // theme fingerprint — for _capture_meta.json / FINDINGS provenance
  const themeHints = [];
  for (const l of links) { const m = l.match(/wp-content\/(?:themes|plugins)\/([\w-]+)[^?]*\?ver=([\w.]+)/); if (m) themeHints.push({ kind: 'css', name: m[1], ver: m[2] }); }
  for (const s of scripts) if (s.src) { const m = s.src.match(/wp-content\/(?:themes|plugins)\/([\w-]+)[^?]*\?ver=([\w.]+)/); if (m) themeHints.push({ kind: 'js', name: m[1], ver: m[2] }); }

  // ---- B. :root custom properties + root font-size (for the rem column) ----
  const rootFontSizePx = r2(px(getComputedStyle(document.documentElement).fontSize));
  const rootVars = (() => {
    const out = {};
    try {
      for (const sheet of document.styleSheets) {
        let rules; try { rules = sheet.cssRules; } catch { continue; }
        for (const r of rules || []) {
          if (r.type !== 1) continue;
          if (!/(^|,)\s*(:root|html|body)\s*(,|$)/.test(r.selectorText || '')) continue;
          for (const p of r.style) if (p.startsWith('--')) out[p] = r.style.getPropertyValue(p).trim();
        }
      }
    } catch { }
    return out;
  })();

  // ---- C. section discovery ----------------------------------------------
  function pickSections() {
    const docH = document.documentElement.scrollHeight;
    const cands = [];
    const semantic = Array.from(document.querySelectorAll('section, [class*=section], .elementor-section'))
      .filter((el) => boxed(el) && el.getBoundingClientRect().height > vh * 0.2);
    const byParent = new Map();
    for (const el of semantic) { const p = el.parentElement; if (!p) continue; if (!byParent.has(p)) byParent.set(p, []); byParent.get(p).push(el); }
    const bestParent = [...byParent.entries()].sort((a, b) => b[1].length - a[1].length)[0];
    if (bestParent) {
      const kids = Array.from(bestParent[0].children).filter((k) => boxed(k) && k.getBoundingClientRect().height > vh * 0.08);
      if (kids.length >= 3) cands.push({ how: 'children-of-section-parent', els: kids });
      cands.push({ how: 'semantic-siblings', els: bestParent[1] });
    }
    for (const el of [document.body, ...all]) {
      if (!boxed(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.height < docH * 0.5 || r.width < vw * 0.5) continue;
      const kids = Array.from(el.children).filter((k) => boxed(k) && k.getBoundingClientRect().height > vh * 0.08);
      if (kids.length >= 3) cands.push({ how: 'tall-children', els: kids });
    }
    cands.push({ how: 'body-children', els: Array.from(document.body.children).filter((k) => boxed(k) && k.getBoundingClientRect().height > vh * 0.08) });
    // NOTE: absolutely/fixed-positioned members are KEPT (agency themes often position
    // a hero or a pinned band absolutely) — they are flagged `overlay` instead, so the
    // S-numbering never develops a hole. Only page-chrome overlays are dropped.
    for (const c of cands) {
      c.els = c.els.filter((el) => {
        const p = cs(el).position, r = el.getBoundingClientRect();
        if (p !== 'fixed') return true;
        return r.height >= vh * 0.8;               // a fixed full-screen band is a section; a fixed nav/cursor is not
      });
    }
    const score = (c) => {
      const cover = c.els.reduce((a, e) => a + e.getBoundingClientRect().height, 0) / Math.max(docH, 1);
      return Math.min(cover, 1.15) * 100 + Math.min(c.els.length, 30);
    };
    return cands.sort((a, b) => score(b) - score(a))[0];
  }
  const pick = pickSections();
  // Sort by document position, not DOM child order — S-numbering must be visual order.
  const ordered = pick.els.slice().sort((a, b) => (a.getBoundingClientRect().top) - (b.getBoundingClientRect().top));

  const bigTextIn = (el) => {
    let best = null, bestSize = 0;
    for (const n of el.querySelectorAll('h1,h2,h3,h4,p,span,div,a,li')) {
      const t = ownText(n); if (t.length < 2 || !boxed(n)) continue;
      const f = px(cs(n).fontSize);
      if (f > bestSize) { bestSize = f; best = { text: t.slice(0, 90), fontSize: r2(f), tag: n.tagName.toLowerCase(), weight: cs(n).fontWeight, family: cs(n).fontFamily.split(',')[0].replace(/["']/g, '') }; }
    }
    return best;
  };

  // repeated-block geometry: rows/columns/gap/card box/image aspect — Table A needs this
  const repeatGeometry = (el, clsName) => {
    const members = Array.from(el.querySelectorAll('*')).filter((k) => clsOf(k).split(' ')[0] === clsName && boxed(k));
    if (members.length < 3) return null;
    const rects = members.map((m) => m.getBoundingClientRect());
    const rows = new Map();
    for (const r of rects) { const key = Math.round(r.top / 12); rows.set(key, (rows.get(key) || 0) + 1); }
    const perRow = [...rows.values()];
    const first = members[0], fr = rects[0];
    const img = first.querySelector('img');
    let colGap = null;
    const sameRow = rects.filter((r) => Math.abs(r.top - fr.top) < 12).sort((a, b) => a.left - b.left);
    if (sameRow.length >= 2) colGap = r2(sameRow[1].left - (sameRow[0].left + sameRow[0].width));
    let rowGap = null;
    const nextRow = rects.filter((r) => r.top > fr.top + 12).sort((a, b) => a.top - b.top)[0];
    if (nextRow) rowGap = r2(nextRow.top - (fr.top + fr.height));
    return {
      count: members.length, rows: rows.size, columns: Math.max(...perRow),
      card: { w: r2(fr.width), h: r2(fr.height), ratio: r2(fr.width / Math.max(fr.height, 1)), radius: cs(first).borderRadius },
      colGap, rowGap,
      image: img ? { natural: `${img.naturalWidth}x${img.naturalHeight}`, rendered: `${Math.round(img.getBoundingClientRect().width)}x${Math.round(img.getBoundingClientRect().height)}`, aspect: r2(img.getBoundingClientRect().width / Math.max(img.getBoundingClientRect().height, 1)), objectFit: cs(img).objectFit } : null,
    };
  };

  const sections = ordered.map((el, i) => {
    if (stamp) el.setAttribute('data-sec', String(i));
    const c = cs(el), r = el.getBoundingClientRect();
    const media = { img: el.querySelectorAll('img').length, video: el.querySelectorAll('video').length, canvas: el.querySelectorAll('canvas').length, svg: el.querySelectorAll('svg').length, iframe: el.querySelectorAll('iframe').length };
    const headings = Array.from(el.querySelectorAll('h1,h2,h3,h4,h5,h6')).filter(boxed).slice(0, 8)
      .map((h) => ({ tag: h.tagName.toLowerCase(), fontSize: r2(px(cs(h).fontSize)), chars: (h.textContent || '').trim().length, text: (h.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 90) }));
    const paras = Array.from(el.querySelectorAll('p')).filter(boxed).slice(0, 5)
      .map((p) => ({ chars: (p.textContent || '').trim().length, fontSize: r2(px(cs(p).fontSize)), text: (p.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 140) }));
    const btns = Array.from(el.querySelectorAll('a,button')).filter(boxed).slice(0, 12)
      .map((b) => ({ tag: b.tagName.toLowerCase(), text: (b.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40), href: b.getAttribute('href') || null }));
    const kidClassTally = {};
    for (const k of el.querySelectorAll('*')) { const cl = clsOf(k).split(' ')[0]; if (!cl) continue; kidClassTally[cl] = (kidClassTally[cl] || 0) + 1; }
    const repeated = Object.entries(kidClassTally).filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([cl, n]) => ({ cls: cl, count: n }));
    const geom = repeated.length ? repeatGeometry(el, repeated[0].cls) : null;
    return {
      index: i, sid: 'S' + String(i + 1).padStart(2, '0'),
      tag: el.tagName.toLowerCase(), id: el.id || null, cls: clsOf(el).slice(0, 140), data: dataAttrs(el),
      docTop: r2(r.top + scrollY), height: r2(r.height), vhFraction: r2(r.height / vh),
      overlay: c.position === 'absolute' || c.position === 'fixed', position: c.position,
      bg: c.backgroundColor, bgImage: c.backgroundImage === 'none' ? null : c.backgroundImage.slice(0, 600),
      color: c.color, padding: `${c.paddingTop} ${c.paddingRight} ${c.paddingBottom} ${c.paddingLeft}`,
      overflow: c.overflow, display: c.display,
      gridTemplateColumns: c.display.includes('grid') ? c.gridTemplateColumns : null,
      media, headings, paras, buttons: btns, repeatedChildren: repeated, repeatGeometry: geom,
      biggestText: bigTextIn(el),
    };
  });

  // ---- D. type scale ------------------------------------------------------
  const textEls = all.filter((el) => boxed(el) && ownText(el).length >= 1);
  const sizeTally = new Map(), famTally = new Map(), weightTally = new Map();
  for (const el of textEls) {
    const c = cs(el);
    const f = r2(px(c.fontSize));
    const fam = c.fontFamily.split(',')[0].replace(/["']/g, '').trim();
    const key = `${f}|${c.fontWeight}|${fam}|${c.textTransform}|${c.lineHeight === 'normal' ? 'normal' : r2(px(c.lineHeight) / px(c.fontSize))}|${c.letterSpacing === 'normal' ? '0' : r2(px(c.letterSpacing) / px(c.fontSize) * 1000) / 1000}`;
    sizeTally.set(key, (sizeTally.get(key) || 0) + 1);
    famTally.set(fam, (famTally.get(fam) || 0) + 1);
    weightTally.set(c.fontWeight, (weightTally.get(c.fontWeight) || 0) + 1);
  }
  const typeRows = [...sizeTally.entries()].map(([k, count]) => {
    const [size, weight, family, transform, lh, ls] = k.split('|');
    return { px: +size, rem: r2(+size / rootFontSizePx), weight, family, transform, lineHeightRatio: lh, letterSpacingEm: +ls, count };
  }).sort((a, b) => b.px - a.px);
  const fontFaces = (() => {
    const out = [];
    try { for (const sheet of document.styleSheets) { let rules; try { rules = sheet.cssRules; } catch { continue; } for (const r of rules || []) if (r.type === 5) out.push({ family: r.style.fontFamily, weight: r.style.fontWeight, style: r.style.fontStyle, src: (r.style.src || '').slice(0, 300) }); } } catch { }
    return out;
  })();

  // ---- E. colors (incl. gradients — backgroundColor alone misses them) ----
  const norm = (v) => (v || '').replace(/\s+/g, '');
  const textColors = new Map(), bgColors = new Map(), borderColors = new Map(), gradients = new Map();
  const bigBackgrounds = [];
  for (const el of all) {
    if (!boxed(el)) continue;
    const c = cs(el), r = el.getBoundingClientRect();
    if (ownText(el).length >= 1) textColors.set(norm(c.color), (textColors.get(norm(c.color)) || 0) + 1);
    const bg = norm(c.backgroundColor);
    if (bg && bg !== 'rgba(0,0,0,0)') bgColors.set(bg, (bgColors.get(bg) || 0) + 1);
    if (px(c.borderTopWidth) > 0) borderColors.set(norm(c.borderTopColor), (borderColors.get(norm(c.borderTopColor)) || 0) + 1);
    if (c.backgroundImage && c.backgroundImage.includes('gradient')) {
      const decl = c.backgroundImage.slice(0, 300);
      gradients.set(decl, (gradients.get(decl) || 0) + 1);
      for (const m of decl.matchAll(/rgba?\([^)]+\)|#[0-9a-f]{3,8}/gi)) bgColors.set(norm(m[0]), (bgColors.get(norm(m[0])) || 0) + 1);
    }
    if (r.width * r.height > vw * vh * 0.5 && c.backgroundImage !== 'none') {
      bigBackgrounds.push({ cls: clsOf(el).slice(0, 70), backgroundImage: c.backgroundImage, backgroundSize: c.backgroundSize, backgroundRepeat: c.backgroundRepeat, opacity: c.opacity, mixBlendMode: c.mixBlendMode });
    }
  }
  const top = (m) => [...m.entries()].sort((a, b) => b[1] - a[1]).map(([value, count]) => ({ value, count }));

  // ---- F. effect inventory -----------------------------------------------
  const eff = {
    mixBlend: [], filters: [], backdrop: [], clipPath: [], maskImage: [], willChange: [], stickyFixed: [],
    transformed: [], animatedCSS: [], scrollTimeline: [], transitions: new Map(),
    cursorNone: cs(document.body).cursor === 'none' || cs(document.documentElement).cursor === 'none',
    videos: [], canvases: [], marquees: [], scrollAttrs: new Map(), aspectRatios: new Map(), radii: new Map(), shadows: new Map(),
  };
  const brief = (el) => ({ tag: el.tagName.toLowerCase(), cls: clsOf(el).slice(0, 80), sec: el.closest('[data-sec]') ? +el.closest('[data-sec]').getAttribute('data-sec') : null, rect: (() => { const r = el.getBoundingClientRect(); return { w: r2(r.width), h: r2(r.height), top: r2(r.top + scrollY) }; })() });
  for (const el of all) {
    if (!shown(el)) continue;
    const c = cs(el);
    if (c.mixBlendMode && c.mixBlendMode !== 'normal') eff.mixBlend.push({ ...brief(el), value: c.mixBlendMode });
    if (c.filter && c.filter !== 'none') eff.filters.push({ ...brief(el), value: c.filter.slice(0, 80) });
    if (c.backdropFilter && c.backdropFilter !== 'none') eff.backdrop.push({ ...brief(el), value: c.backdropFilter.slice(0, 80) });
    if (c.clipPath && c.clipPath !== 'none') eff.clipPath.push({ ...brief(el), value: c.clipPath.slice(0, 100) });
    if (c.maskImage && c.maskImage !== 'none') eff.maskImage.push({ ...brief(el), value: c.maskImage.slice(0, 100) });
    if (c.willChange && c.willChange !== 'auto') eff.willChange.push({ ...brief(el), value: c.willChange });
    if (c.position === 'sticky' || c.position === 'fixed') eff.stickyFixed.push({ ...brief(el), position: c.position, top: c.top, zIndex: c.zIndex, opacity: c.opacity });
    if (c.transform && c.transform !== 'none') eff.transformed.push({ ...brief(el), value: c.transform.slice(0, 90) });
    // native scroll-driven animation — if present it is the cheapest possible mechanism to copy
    if (c.animationTimeline && c.animationTimeline !== 'auto' && c.animationTimeline !== 'none') eff.scrollTimeline.push({ ...brief(el), timeline: c.animationTimeline, range: c.animationRange || null, name: c.animationName });
    if (c.animationName && c.animationName !== 'none') {
      eff.animatedCSS.push({ ...brief(el), name: c.animationName, duration: c.animationDuration, timing: c.animationTimingFunction, iteration: c.animationIterationCount, direction: c.animationDirection });
      if (/marquee|ticker|scroll|slide|infinite|loop/i.test(c.animationName)) eff.marquees.push({ ...brief(el), kind: 'css', name: c.animationName, duration: c.animationDuration });
    }
    if (c.transitionProperty && c.transitionDuration !== '0s') {
      const k = `${c.transitionProperty} ${c.transitionDuration} ${c.transitionTimingFunction}`;
      eff.transitions.set(k, (eff.transitions.get(k) || 0) + 1);
    }
    if (c.aspectRatio && c.aspectRatio !== 'auto') eff.aspectRatios.set(c.aspectRatio, (eff.aspectRatios.get(c.aspectRatio) || 0) + 1);
    if (c.borderRadius && c.borderRadius !== '0px') eff.radii.set(c.borderRadius, (eff.radii.get(c.borderRadius) || 0) + 1);
    if (c.boxShadow && c.boxShadow !== 'none') eff.shadows.set(c.boxShadow.slice(0, 70), (eff.shadows.get(c.boxShadow.slice(0, 70)) || 0) + 1);
    for (const a of el.attributes) if (/^data-(aos|scroll|speed|splitting|animate|anim|parallax|delay|lag|cursor|magnet|reveal|split|stagger|marquee|tilt)/.test(a.name)) {
      const k = `${a.name}=${a.value.slice(0, 40)}`; eff.scrollAttrs.set(k, (eff.scrollAttrs.get(k) || 0) + 1);
    }
  }
  for (const v of document.querySelectorAll('video')) eff.videos.push({ ...brief(v), src: (v.currentSrc || v.src || (v.querySelector('source') || {}).src || '').slice(0, 200), autoplay: v.autoplay, loop: v.loop, muted: v.muted, poster: (v.poster || '').slice(0, 160) });
  for (const cv of document.querySelectorAll('canvas')) {
    let ctxKind = 'unknown';
    try { ctxKind = cv.getContext('webgl2') ? 'webgl2' : (cv.getContext('webgl') ? 'webgl' : '2d-or-taken'); } catch { }
    eff.canvases.push({ ...brief(cv), width: cv.width, height: cv.height, ctxKind });
  }
  // JS-driven marquees have no animationName — detect by duplicated sibling text in an overflow:hidden track
  for (const el of all) {
    if (!boxed(el) || cs(el).overflow === 'visible') continue;
    const kids = Array.from(el.children).filter(boxed);
    if (kids.length < 2) continue;
    const t0 = (kids[0].textContent || '').replace(/\s+/g, ' ').trim();
    if (t0.length < 8) continue;
    const dupes = kids.filter((k) => (k.textContent || '').replace(/\s+/g, ' ').trim() === t0).length;
    if (dupes >= 2) eff.marquees.push({ ...brief(el), kind: 'duplicated-track', copies: dupes, sample: t0.slice(0, 50), childTransform: cs(kids[0]).transform.slice(0, 60) });
  }
  // split-text signature: many single-character/word children under one parent
  const splitSignature = [];
  for (const el of all) {
    const kids = Array.from(el.children);
    if (kids.length < 5) continue;
    const singles = kids.filter((k) => (k.textContent || '').trim().length === 1).length;
    if (singles >= 5) { splitSignature.push({ ...brief(el), kind: 'char-split', units: singles, childDisplay: cs(kids[0]).display }); continue; }
    const masked = kids.filter((k) => /line|word/i.test(clsOf(k)) && cs(k).overflow === 'hidden').length;
    if (masked >= 2) splitSignature.push({ ...brief(el), kind: 'line-mask', units: masked });
  }
  eff.splitSignature = splitSignature.slice(0, 20);
  // SVG grain / feTurbulence params — needed to rebuild the noise without copying assets
  eff.turbulence = Array.from(document.querySelectorAll('feTurbulence')).slice(0, 6).map((t) => ({
    baseFrequency: t.getAttribute('baseFrequency'), numOctaves: t.getAttribute('numOctaves'),
    seed: t.getAttribute('seed'), type: t.getAttribute('type'), filterId: t.closest('filter') ? t.closest('filter').id : null,
  }));
  eff.bigBackgrounds = bigBackgrounds.slice(0, 8);

  const mapOut = (m) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30).map(([value, count]) => ({ value, count }));
  eff.transitions = mapOut(eff.transitions); eff.scrollAttrs = mapOut(eff.scrollAttrs);
  eff.aspectRatios = mapOut(eff.aspectRatios); eff.radii = mapOut(eff.radii); eff.shadows = mapOut(eff.shadows);
  const cap = (a, n = 40) => ({ count: a.length, sample: a.slice(0, n) });
  for (const k of ['mixBlend', 'filters', 'backdrop', 'clipPath', 'maskImage', 'willChange', 'stickyFixed', 'transformed', 'animatedCSS', 'marquees', 'scrollTimeline']) eff[k] = cap(eff[k]);

  // ---- G. layout ----------------------------------------------------------
  const gridTally = new Map(), widthTally = new Map();
  for (const el of all) {
    if (!boxed(el)) continue;
    const c = cs(el), r = el.getBoundingClientRect();
    if (/grid/.test(c.display) && r.width >= vw * 0.3) {
      const cols = (c.gridTemplateColumns || '').trim().split(/\s+/).length;
      if (cols >= 2) {
        const k = `${cols}|${c.columnGap}|${c.rowGap}|${Math.round(r.width)}`;
        if (!gridTally.has(k)) gridTally.set(k, { columns: cols, columnGap: c.columnGap, rowGap: c.rowGap, width: Math.round(r.width), template: (c.gridTemplateColumns || '').slice(0, 160), count: 0, sample: clsOf(el).slice(0, 70) });
        gridTally.get(k).count++;
      }
    }
    if (/^(block|flex|grid|flow-root)$/.test(c.display) && r.width >= 200) {
      const k = `${Math.round(r.width)}|${Math.round(r.left)}`;
      if (!widthTally.has(k)) widthTally.set(k, { width: Math.round(r.width), left: Math.round(r.left), count: 0, sample: clsOf(el).slice(0, 60) });
      widthTally.get(k).count++;
    }
  }

  // ---- H. links + nav -----------------------------------------------------
  const pageLinks = []; const seen = new Set();
  for (const a of document.querySelectorAll('a[href]')) {
    const h = a.getAttribute('href') || '';
    if (/^(#|mailto:|tel:|javascript:)/.test(h)) continue;
    let abs; try { abs = new URL(h, location.href).href; } catch { continue; }
    if (new URL(abs).host !== location.host || seen.has(abs)) continue;
    seen.add(abs);
    pageLinks.push({ href: abs, text: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 50), inNav: !!a.closest('header,nav,[class*=menu],[class*=nav]') });
  }
  const navEl = document.querySelector('header') || document.querySelector('nav');
  const nav = navEl ? (() => { const c = cs(navEl), r = navEl.getBoundingClientRect();
    return { tag: navEl.tagName.toLowerCase(), cls: clsOf(navEl).slice(0, 90), height: r2(r.height), top: r2(r.top), position: c.position, bg: c.backgroundColor, backdropFilter: c.backdropFilter, mixBlendMode: c.mixBlendMode, zIndex: c.zIndex, transform: c.transform.slice(0, 60), color: c.color, padding: `${c.paddingTop} ${c.paddingRight} ${c.paddingBottom} ${c.paddingLeft}` }; })() : null;

  return {
    url: location.href, title: document.title, viewport: { vw, vh }, capturedAtScrollY: scrollY,
    doc: { scrollHeight: document.documentElement.scrollHeight, vhMultiple: r2(document.documentElement.scrollHeight / vh), elementCount: all.length, rootFontSizePx, lang: document.documentElement.lang || null },
    bodyClass: clsOf(document.body), metaGenerator, themeHints, libs, scripts, stylesheetLinks: links, inlineStyleBytes, rootVars,
    sectionDiscovery: pick.how, sections, pageLinks: pageLinks.slice(0, 80), nav,
    typeScale: { rows: typeRows.slice(0, 70), families: top(famTally), weights: top(weightTally), fontFaces },
    color: { text: top(textColors), bg: top(bgColors), border: top(borderColors), gradients: top(gradients).slice(0, 12) },
    effects: eff,
    layout: { grids: [...gridTally.values()].sort((a, b) => b.count - a.count).slice(0, 10), dominantWidths: [...widthTally.values()].sort((a, b) => b.count - a.count).slice(0, 10) },
  };
};

// ---------------------------------------------------------------------------
// Runtime introspection of animation libraries. This is the highest-fidelity
// source there is: ScrollTrigger knows its own pin start/end in document px,
// so no amount of scroll sampling beats reading it directly.
// ---------------------------------------------------------------------------
const LIB_PROBE = function () {
  const out = {};
  const cls = (el) => { try { return (el && el.className ? el.className.toString() : (el && el.tagName) || '').slice(0, 70); } catch { return ''; } };
  try {
    const ST = window.ScrollTrigger || (window.gsap && window.gsap.core.globals && window.gsap.core.globals().ScrollTrigger);
    if (ST && ST.getAll) out.scrollTriggers = ST.getAll().slice(0, 120).map((t) => ({
      trigger: cls(t.trigger), start: Math.round(t.start), end: Math.round(t.end), distance: Math.round(t.end - t.start),
      pin: !!t.pin, pinSpacing: t.vars && t.vars.pinSpacing, scrub: t.vars && t.vars.scrub,
      toggleActions: t.vars && t.vars.toggleActions, markers: !!(t.vars && t.vars.markers),
      startVar: t.vars && String(t.vars.start), endVar: t.vars && String(t.vars.end),
    }));
  } catch (e) { out.scrollTriggerError = String(e).slice(0, 120); }
  try {
    if (window.gsap) out.tweens = window.gsap.globalTimeline.getChildren(true, true, false).slice(0, 80)
      .map((t) => ({ duration: t.duration(), ease: t.vars && String(t.vars.ease), stagger: t.vars && JSON.stringify(t.vars.stagger || null), targets: (t.targets && t.targets()[0]) ? cls(t.targets()[0]) : null }));
  } catch (e) { out.tweensError = String(e).slice(0, 120); }
  try { if (window.ScrollSmoother && window.ScrollSmoother.get) { const s = window.ScrollSmoother.get(); if (s) out.scrollSmoother = { smooth: s.smooth(), effects: !!s.vars.effects, normalizeScroll: s.vars.normalizeScroll }; } } catch { }
  try {
    // Lenis/Locomotive instances are usually module-scoped; find them on any element or window key
    for (const k of Object.keys(window)) { const v = window[k];
      if (v && typeof v === 'object' && v.options && ('lerp' in v.options || 'wheelMultiplier' in v.options)) { out.lenis = { key: k, options: JSON.parse(JSON.stringify(v.options)) }; break; } }
  } catch { }
  try { const sw = document.querySelector('.swiper'); if (sw && sw.swiper) { const p = sw.swiper.params; out.swiper = { slidesPerView: p.slidesPerView, spaceBetween: p.spaceBetween, speed: p.speed, loop: p.loop, effect: p.effect, autoplay: !!p.autoplay, direction: p.direction }; } } catch { }
  try { out.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches; out.colorScheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; } catch { }
  return out;
};

const TRACK_SETUP = function () {
  const boxed = (el) => { const c = getComputedStyle(el); if (c.display === 'none' || c.visibility === 'hidden') return false; const r = el.getBoundingClientRect(); return r.width > 4 && r.height > 4; };
  const clsOf = (el) => (el.className && el.className.baseVal !== undefined ? el.className.baseVal : (el.className || '')).toString().replace(/\s+/g, ' ').trim();
  const y0 = window.pageYOffset || document.documentElement.scrollTop || 0;
  let cands = Array.from(document.querySelectorAll('img, video, canvas, h1, h2, h3, [class*=parallax], [data-speed], [class*=image], [class*=media], [class*=card], [class*=title], [class*=hero], [class*=sticky], [class*=pin], [class*=marquee], [class*=track], section, [data-sec]'))
    .filter(boxed);
  // Spread the budget evenly down the document — taking the first 260 in DOM order
  // would leave everything below the fold untracked and look like "no effects down there".
  cands.sort((a, b) => (a.getBoundingClientRect().top - b.getBoundingClientRect().top));
  const BUDGET = 260;
  if (cands.length > BUDGET) {
    const keep = new Set();
    // guarantee coverage inside every section first
    const bySec = new Map();
    for (let i = 0; i < cands.length; i++) { const s = cands[i].closest('[data-sec]'); const k = s ? s.getAttribute('data-sec') : 'x'; if (!bySec.has(k)) bySec.set(k, []); bySec.get(k).push(i); }
    for (const list of bySec.values()) { const step = Math.max(1, Math.floor(list.length / 6)); for (let j = 0; j < list.length && keep.size < BUDGET; j += step) keep.add(list[j]); }
    const stride = Math.max(1, Math.floor(cands.length / BUDGET));
    for (let i = 0; i < cands.length && keep.size < BUDGET; i += stride) keep.add(i);
    cands = [...keep].sort((a, b) => a - b).map((i) => cands[i]);
  }
  window.__track = cands.map((el, i) => {
    el.setAttribute('data-trk', String(i));
    const r = el.getBoundingClientRect();
    const s = el.closest('[data-sec]');
    return { i, tag: el.tagName.toLowerCase(), cls: clsOf(el).slice(0, 80), docTop: Math.round(r.top + y0), sec: s ? +s.getAttribute('data-sec') : null };
  });
  return window.__track;
};

const TRACK_SAMPLE = function () {
  const y = window.pageYOffset || document.documentElement.scrollTop || 0;
  const out = [];
  for (const el of document.querySelectorAll('[data-trk]')) {
    const r = el.getBoundingClientRect(); const c = getComputedStyle(el);
    out.push([+el.getAttribute('data-trk'), Math.round(r.top * 10) / 10, Math.round(r.left * 10) / 10, Math.round(r.height * 10) / 10, c.opacity === '1' ? 1 : +c.opacity]);
  }
  return { y, docH: document.documentElement.scrollHeight, rows: out };
};

// ===========================================================================
// Scrolling that survives virtual-scroll libraries
// ===========================================================================
async function waitStable(page, timeout = 2600) {
  await page.evaluate((to) => new Promise((res) => {
    const els = Array.from(document.querySelectorAll('[data-trk]')).slice(0, 40);
    const probe = els.length ? els : [document.body];
    const read = () => probe.map((e) => Math.round(e.getBoundingClientRect().top)).join(',');
    let last = null, same = 0; const t0 = performance.now();
    const tick = () => {
      const v = read();
      if (v === last) same++; else { same = 0; last = v; }
      if (same >= 3 || performance.now() - t0 > to) return res();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), timeout).catch(() => { });
}

async function scrollTo(page, y) {
  const before = await page.evaluate(() => window.pageYOffset || document.documentElement.scrollTop || 0);
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(150);
  let after = await page.evaluate(() => window.pageYOffset || document.documentElement.scrollTop || 0);
  // Locomotive v4-style wrappers keep pageYOffset at 0 forever — fall back to real
  // wheel events, which every virtual-scroll library listens to.
  if (Math.abs(after - y) > 80 && Math.abs(y - before) > 40) {
    const delta = y - after;
    const step = Math.sign(delta) * 420;
    for (let acc = 0; Math.abs(acc) < Math.abs(delta) && Math.abs(acc) < 40000; acc += step) {
      await page.mouse.wheel(0, step);
      await page.waitForTimeout(70);
    }
    after = await page.evaluate(() => window.pageYOffset || document.documentElement.scrollTop || 0);
  }
  await waitStable(page);
  return after;
}

async function settleLoad(page, budgetMs = 20000) {
  // Real signals, not a flat sleep: fonts resolved + document height stable + no
  // full-viewport preloader still covering the page.
  const t0 = Date.now();
  try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch { }
  let last = -1, stable = 0;
  while (Date.now() - t0 < budgetMs) {
    const h = await page.evaluate(() => document.documentElement.scrollHeight).catch(() => -1);
    if (h === last) stable++; else { stable = 0; last = h; }
    const blocked = await page.evaluate(() => {
      const vh = innerHeight;
      return Array.from(document.querySelectorAll('body *')).some((el) => {
        const c = getComputedStyle(el);
        if (c.position !== 'fixed' || c.display === 'none' || c.visibility === 'hidden' || +c.opacity < 0.05) return false;
        const r = el.getBoundingClientRect();
        return r.height >= vh * 0.9 && r.width >= innerWidth * 0.9 && +c.opacity > 0.5 && (+c.zIndex || 0) >= 100;
      });
    }).catch(() => false);
    if (stable >= 3 && !blocked && h > 0) break;
    await page.waitForTimeout(600);
  }
  return { waitedMs: Date.now() - t0, finalHeight: last };
}

// ===========================================================================
async function resolveDemoUrl(browser) {
  const override = arg('--url');
  if (override) { log('using supplied URL:', override); return override; }
  log('opening the ThemeForest preview page to find the demo iframe …');
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: UA });
  const page = await ctx.newPage();
  await page.goto(PREVIEW_URL, { waitUntil: 'domcontentloaded', timeout: 90000 }).catch((e) => warn('preview goto: ' + e.message));
  await page.waitForTimeout(6000);
  // rank iframes by rendered area — a consent/analytics iframe is tiny, the demo is full-screen
  const frames = await page.evaluate(() => Array.from(document.querySelectorAll('iframe')).map((f) => {
    const r = f.getBoundingClientRect();
    return { src: f.src || null, area: Math.round(r.width * r.height), w: Math.round(r.width), h: Math.round(r.height) };
  }));
  const frameUrls = page.frames().map((f) => f.url()).filter(Boolean);
  const title = await page.title().catch(() => '');
  W('_preview_probe.json', { title, frames, frameUrls });
  const bad = /themeforest|envato|google|doubleclick|about:blank|^data:|recaptcha|cloudflare/i;
  const ranked = frames.filter((f) => f.src && !bad.test(f.src)).sort((a, b) => b.area - a.area);
  const cand = (ranked[0] && ranked[0].src) || frameUrls.find((u) => !bad.test(u));
  await ctx.close();
  if (!cand) throw new Error(
    'Could not resolve the demo URL from the preview page (ThemeForest may be blocking headless).\n' +
    '  See out/_preview_probe.json, then follow BRIEF §2.1a — do NOT guess a URL.');
  log('demo resolved:', cand);
  return cand;
}

// ===========================================================================
async function capture(browser, url, label, width, height, deep) {
  log(`--- capture ${label} @ ${width}x${height} deep=${deep}`);
  const ctx = await browser.newContext({
    viewport: { width, height }, userAgent: UA, deviceScaleFactor: 1,
    reducedMotion: 'no-preference',   // otherwise motion-gated JS disables itself and the inventory looks empty
    colorScheme: 'light',
  });
  const page = await ctx.newPage();

  // Real transfer sizes via CDP — content-length is absent on most compressed responses.
  const reqMeta = new Map(); const netRows = [];
  let cdp = null;
  try {
    cdp = await ctx.newCDPSession(page);
    await cdp.send('Network.enable');
    cdp.on('Network.responseReceived', (e) => reqMeta.set(e.requestId, { url: e.response.url, type: e.type, status: e.response.status, mime: e.response.mimeType }));
    cdp.on('Network.loadingFinished', (e) => { const m = reqMeta.get(e.requestId); if (m) netRows.push({ ...m, encodedBytes: e.encodedDataLength }); });
  } catch (e) { warn('CDP unavailable, network weights will be missing: ' + e.message); }
  const consoleErrs = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrs.push(m.text().slice(0, 200)); });

  const navStart = Date.now();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });

  // --- preloader: it IS an effect (E01 band). Filenames carry MEASURED elapsed ms.
  if (SHOTS && deep) {
    for (const target of [400, 1200, 2400, 3800]) {
      const wait = target - (Date.now() - navStart);
      if (wait > 0) await page.waitForTimeout(wait);
      const elapsed = Date.now() - navStart;
      await page.screenshot({ path: path.join(D('shots'), `${label}_preload_${elapsed}ms.jpg`), quality: 72, type: 'jpeg' }).catch(() => { });
    }
  }
  const settled = await settleLoad(page);
  await scrollTo(page, 0);

  // --- DOM + probe (stamps data-sec so per-section screenshots can use locators) ---
  const html = await page.content();
  W(`dom/${label}.html`, html);
  const probe = await page.evaluate(PROBE, { stamp: true });
  probe._settle = settled;
  W(`probe/${label}.json`, probe);
  const libProbe = await page.evaluate(LIB_PROBE).catch((e) => ({ error: String(e).slice(0, 200) }));
  W(`libprobe/${label}.json`, libProbe);
  log(`  sections=${probe.sections.length} (${probe.sectionDiscovery}) docH=${probe.doc.scrollHeight} libs=${Object.entries(probe.libs).filter(([, v]) => v).map(([k]) => k).join(',') || 'none'}`);
  if (libProbe.scrollTriggers) log(`  ScrollTriggers=${libProbe.scrollTriggers.length} (pinned=${libProbe.scrollTriggers.filter((t) => t.pin).length})`);

  // --- stylesheets AND scripts (the theme bundle holds the real constants) ---
  if (deep) {
    for (const [kind, list, dirName] of [['css', probe.stylesheetLinks, 'css'], ['js', probe.scripts.map((s) => s.src).filter(Boolean), 'js']]) {
      const dir = D(dirName); const manifest = [];
      for (const href of [...new Set(list)]) {
        try {
          const r = await page.request.get(href, { timeout: 30000 });
          if (!r.ok()) { manifest.push({ href, status: r.status() }); continue; }
          const body = await r.text();
          const name = (href.split('/').pop().split('?')[0] || `f${manifest.length}.${kind}`).slice(0, 80);
          const file = path.join(dir, `${String(manifest.length).padStart(2, '0')}_${name}`);
          fs.writeFileSync(file, body);
          manifest.push({ href, status: 200, bytes: body.length, file: path.relative(OUT, file) });
        } catch (e) { manifest.push({ href, error: e.message.slice(0, 120) }); }
      }
      if (kind === 'css') {
        const inlineCSS = await page.evaluate(() => Array.from(document.querySelectorAll('style')).map((s) => s.textContent).join('\n/* --- */\n'));
        fs.writeFileSync(path.join(dir, '99_inline.css'), inlineCSS);
        manifest.push({ href: '(inline <style>)', bytes: inlineCSS.length, file: 'css/99_inline.css' });
      }
      W(`${kind}_manifest_${label}.json`, manifest);
      log(`  ${kind}: ${manifest.length} files, ${manifest.reduce((a, m) => a + (m.bytes || 0), 0)} bytes`);
    }
  }

  // --- scroll pass: docH is RE-READ each step (lazy-load grows the page) ---
  if (deep) await page.evaluate(TRACK_SETUP).then((t) => W(`track_${label}_index.json`, t)).catch((e) => warn('TRACK_SETUP: ' + e.message));
  const samples = []; const visited = [];
  const initialDocH = await page.evaluate(() => document.documentElement.scrollHeight);
  const scrollable = initialDocH > height + 60;
  if (!scrollable) log(`  page is one viewport tall (${initialDocH}px) — nothing to scroll`);
  const nSteps = !scrollable ? 0 : (deep ? 26 : 10);
  let step = 0, lastY = -1, stuck = 0;
  while (step <= nSteps) {
    const docH = await page.evaluate(() => document.documentElement.scrollHeight);
    const target = Math.max(0, Math.round((docH - height) * (step / nSteps)));
    const y = await scrollTo(page, target);
    visited.push({ step, target, actualY: y, docH });
    if (Math.abs(y - lastY) < 8 && step > 0) stuck++; else stuck = 0;
    lastY = y;
    if (SHOTS) await page.screenshot({ path: path.join(D('shots'), `${label}_s${String(step).padStart(2, '0')}.jpg`), quality: 72, type: 'jpeg' }).catch(() => { });
    if (deep) samples.push(await page.evaluate(TRACK_SAMPLE).catch(() => null));
    if (stuck >= 3) { warn(`${label}: scroll appears stuck at y=${y} (step ${step}) — stopping the scroll pass early`); break; }
    step++;
  }
  W(`scroll_visited_${label}.json`, visited);
  if (deep) W(`track_${label}_samples.json`, samples);
  const uniqueY = new Set(visited.map((v) => Math.round(v.actualY / 10))).size;
  if (scrollable && uniqueY < Math.min(8, visited.length)) warn(`${label}: only ${uniqueY} distinct scroll positions across ${visited.length} steps — scrolling probably did not take`);

  // --- per-section screenshots via locator: captures the FULL element box,
  //     re-resolving its position at capture time (docTop from the first probe is stale) ---
  if (SHOTS && deep) {
    const secDir = D('sections'); let ok = 0;
    for (let i = 0; i < probe.sections.length && i < 60; i++) {
      const sid = probe.sections[i].sid;
      try {
        const loc = page.locator(`[data-sec="${i}"]`).first();
        await loc.scrollIntoViewIfNeeded({ timeout: 8000 });
        await page.waitForTimeout(1400);            // let reveal animations finish
        await loc.screenshot({ path: path.join(secDir, `${label}_${sid}.jpg`), quality: 78, type: 'jpeg', timeout: 20000 });
        ok++;
      } catch (e) { warn(`section shot ${sid} failed: ${e.message.slice(0, 80)}`); }
    }
    log(`  section shots: ${ok}/${Math.min(probe.sections.length, 60)}`);
    await scrollTo(page, 0);
  }

  // --- probe #2 at mid-page: which sections only exist after lazy-mount ---
  if (deep) {
    const docH = await page.evaluate(() => document.documentElement.scrollHeight);
    await scrollTo(page, Math.round(docH * 0.5));
    W(`probe/${label}_mid.json`, await page.evaluate(PROBE, { stamp: false }));
    await scrollTo(page, 0);
  }

  // --- hover, per section (scrolling first, so cards are actually in view) ---
  if (deep && !QUICK) {
    const hoverDir = D('hover'); const hoverOut = [];
    for (let si = 0; si < probe.sections.length && si < 14; si++) {
      try {
        await page.locator(`[data-sec="${si}"]`).first().scrollIntoViewIfNeeded({ timeout: 6000 });
        await page.waitForTimeout(900);
      } catch { continue; }
      const cands = await page.evaluate((s) => {
        const root = document.querySelector(`[data-sec="${s}"]`); if (!root) return [];
        const clsOf = (el) => (el.className || '').toString().replace(/\s+/g, ' ').trim();
        const list = Array.from(root.querySelectorAll('a, button, [class*=card], [class*=item], [class*=project], [class*=work], [class*=btn]'))
          .filter((el) => { const r = el.getBoundingClientRect(); return r.width > 60 && r.height > 24 && r.top > 0 && r.bottom < innerHeight; }).slice(0, 4);
        window.__hov = list;
        return list.map((el, i) => { const r = el.getBoundingClientRect(); const c = getComputedStyle(el);
          return { i, sec: s, tag: el.tagName.toLowerCase(), cls: clsOf(el).slice(0, 70), text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40),
            center: { x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2) },
            corner: { x: Math.round(r.left + r.width * 0.85), y: Math.round(r.top + r.height * 0.85) },
            before: { transform: c.transform.slice(0, 60), opacity: c.opacity, background: c.backgroundColor, color: c.color, filter: c.filter.slice(0, 40), letterSpacing: c.letterSpacing } }; });
      }, si);
      for (const h of cands) {
        try {
          await page.mouse.move(h.center.x, h.center.y, { steps: 6 }); await page.waitForTimeout(650);
          const atCenter = await page.evaluate((i) => { const el = window.__hov[i]; const c = getComputedStyle(el);
            const cur = Array.from(document.querySelectorAll('[class*=cursor]')).filter((e) => e.getBoundingClientRect().width > 0).slice(0, 3)
              .map((e) => { const cc = getComputedStyle(e), r = e.getBoundingClientRect();
                return { cls: (e.className || '').toString().slice(0, 60), w: Math.round(r.width), h: Math.round(r.height), transform: cc.transform.slice(0, 60), mixBlendMode: cc.mixBlendMode, bg: cc.backgroundColor, text: (e.textContent || '').trim().slice(0, 30) }; });
            return { transform: c.transform.slice(0, 60), opacity: c.opacity, background: c.backgroundColor, color: c.color, filter: c.filter.slice(0, 40), letterSpacing: c.letterSpacing, cursorEls: cur }; }, h.i);
          // second sample near a corner: if transform differs, it is a magnetic/tilt effect
          await page.mouse.move(h.corner.x, h.corner.y, { steps: 4 }); await page.waitForTimeout(450);
          const atCorner = await page.evaluate((i) => { const c = getComputedStyle(window.__hov[i]); return { transform: c.transform.slice(0, 60) }; }, h.i);
          const changed = h.before.transform !== atCenter.transform || h.before.opacity !== atCenter.opacity || h.before.background !== atCenter.background || h.before.color !== atCenter.color || h.before.filter !== atCenter.filter;
          const magnetic = atCenter.transform !== atCorner.transform;
          hoverOut.push({ ...h, after: atCenter, atCorner, changed, magnetic });
          if (changed && hoverOut.filter((x) => x.changed).length <= 8) await page.screenshot({ path: path.join(hoverDir, `${label}_hover_S${String(si + 1).padStart(2, '0')}_${h.i}.jpg`), quality: 75, type: 'jpeg' }).catch(() => { });
        } catch { }
      }
    }
    W(`hover_${label}.json`, hoverOut);
    log(`  hover: ${hoverOut.length} probed, ${hoverOut.filter((h) => h.changed).length} change, ${hoverOut.filter((h) => h.magnetic).length} magnetic`);

    // --- menu toggle: never click a nav LINK by accident ---
    try {
      await scrollTo(page, 0);
      const urlBefore = page.url();
      const opened = await page.evaluate(() => {
        const ok = Array.from(document.querySelectorAll('button, [role=button], [aria-expanded], [class*=burger], [class*=hamburger], [class*=menu-toggle], [class*=nav-toggle]'))
          .filter((el) => { const r = el.getBoundingClientRect();
            return el.tagName !== 'A' && el.closest('header,nav,body>div') && r.width > 10 && r.width < 90 && r.height > 10 && r.height < 90 && getComputedStyle(el).display !== 'none'; })[0];
        if (!ok) return { clicked: false };
        ok.click();
        return { clicked: true, cls: (ok.className || '').toString().slice(0, 60) };
      });
      await page.waitForTimeout(1600);
      const navigated = page.url() !== urlBefore;
      if (navigated) { warn('menu toggle navigated the page — ignoring'); await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => { }); }
      const overlayVisible = navigated ? false : await page.evaluate(() => Array.from(document.querySelectorAll('body *')).some((el) => {
        const c = getComputedStyle(el), r = el.getBoundingClientRect();
        return c.position === 'fixed' && r.height >= innerHeight * 0.7 && r.width >= innerWidth * 0.5 && +c.opacity > 0.5 && c.visibility !== 'hidden';
      }));
      if (opened.clicked && overlayVisible && SHOTS) await page.screenshot({ path: path.join(D('shots'), `${label}_menu_open.jpg`), quality: 78, type: 'jpeg' });
      W(`menu_${label}.json`, { ...opened, navigated, overlayVisible });
    } catch (e) { warn('menu probe: ' + e.message.slice(0, 90)); }
  }

  W(`network_${label}.json`, netRows);
  W(`console_errors_${label}.json`, consoleErrs.slice(0, 60));
  META.captures.push({ label, url, viewport: `${width}x${height}`, deep, sections: probe.sections.length, docHeight: probe.doc.scrollHeight, consoleErrors: consoleErrs.length, settledMs: settled.waitedMs });
  await ctx.close();
  return probe;
}

// A separate load with every animation forced to its end state. The normal full-page
// screenshot shows below-fold reveals un-triggered; this one is the real structural map.
async function captureForcedReveal(browser, url, label, width, height) {
  if (!SHOTS) return;
  const ctx = await browser.newContext({ viewport: { width, height }, userAgent: UA, reducedMotion: 'no-preference' });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
    await settleLoad(page, 15000);
    // walk the page once so IntersectionObserver fires everywhere
    const docH = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < docH; y += Math.round(height * 0.8)) await scrollTo(page, y);
    await scrollTo(page, 0);
    // "as a visitor sees it" full page — taken in this throwaway context so the
    // viewport resize fullPage performs can't disturb the measurement pass.
    await page.screenshot({ path: path.join(D('shots'), `${label}_full.jpg`), quality: 60, type: 'jpeg', fullPage: true }).catch((e) => warn('plain full-page shot: ' + e.message.slice(0, 80)));
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;opacity:1!important;visibility:visible!important;transform:none!important;filter:none!important;clip-path:none!important}' });
    await page.evaluate(() => { try { window.gsap && window.gsap.globalTimeline.progress(1); } catch { } });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(D('shots'), `${label}_full_forced.jpg`), quality: 60, type: 'jpeg', fullPage: true });
    log('  forced-reveal full-page shot written');
  } catch (e) { warn('forced-reveal pass: ' + e.message.slice(0, 100)); }
  await ctx.close();
}

// ===========================================================================
// Node-side analysis
// ===========================================================================
function analyzeTrack(label, vh) {
  const idxFile = path.join(OUT, `track_${label}_index.json`);
  const smpFile = path.join(OUT, `track_${label}_samples.json`);
  if (!fs.existsSync(idxFile) || !fs.existsSync(smpFile)) return null;
  const index = JSON.parse(fs.readFileSync(idxFile, 'utf8'));
  const samples = JSON.parse(fs.readFileSync(smpFile, 'utf8')).filter(Boolean);
  const byEl = new Map();
  for (const s of samples) for (const [i, top, left, h, op] of s.rows) {
    if (!byEl.has(i)) byEl.set(i, []);
    byEl.get(i).push({ y: s.y, top, left, h, op });
  }
  const out = [];
  for (const [i, pts] of byEl) {
    pts.sort((a, b) => a.y - b.y);
    const slopes = [], xslopes = [];
    for (let k = 1; k < pts.length; k++) {
      const dy = pts[k].y - pts[k - 1].y;
      if (dy < 20) continue;
      if (pts[k].top > vh * 2 || pts[k].top + pts[k].h < -vh) continue;   // only while near the viewport
      slopes.push({ y: pts[k].y, slope: Math.round(((pts[k].top - pts[k - 1].top) / dy) * 1000) / 1000 });
      xslopes.push(Math.round(((pts[k].left - pts[k - 1].left) / dy) * 1000) / 1000);
    }
    if (!slopes.length) continue;
    const sorted = slopes.map((s) => s.slope).sort((a, b) => a - b);
    const med = sorted[Math.floor(sorted.length / 2)];
    const xsorted = xslopes.slice().sort((a, b) => a - b);
    const xmed = xsorted.length ? xsorted[Math.floor(xsorted.length / 2)] : 0;
    // EXCLUSIVE bands. slope = d(rect.top)/d(scrollY):
    //   -1.00 = static in normal flow    |s| < 0.08 = pinned
    //   -0.92..-0.08 = moves slower than scroll (classic background parallax)
    //   < -1.08      = moves faster than scroll
    //   > +0.08      = drifts downward (reverse parallax)
    const band = (s, xs) => {
      if (Math.abs(s) < 0.08) return Math.abs(xs) > 0.2 ? 'horizontal-scroll' : 'pinned';
      if (s > -0.92 && s < -0.08) return 'parallax-slow';
      if (s < -1.08) return 'parallax-fast';
      if (s > 0.08) return 'parallax-reverse';
      return 'static';
    };
    // A pin usually occupies only PART of an element's tracked life, so the median
    // stays near -1 and a median-only classifier misses it entirely. Segment first.
    const segments = [];
    for (let k = 0; k < slopes.length; k++) {
      const b = band(slopes[k].slope, xslopes[k]);
      const prev = segments[segments.length - 1];
      if (prev && prev.band === b) { prev.toY = slopes[k].y; prev.steps++; }
      else segments.push({ band: b, fromY: slopes[k].y, toY: slopes[k].y, steps: 1 });
    }
    const real = segments.filter((s) => s.band !== 'static' && s.steps >= 2)
      .map((s) => ({ ...s, distance: s.toY - s.fromY }));
    const dominant = band(med, xmed);
    const meta = index.find((x) => x.i === i) || { i };
    const opacities = [...new Set(pts.map((p) => Math.round(p.op * 100) / 100))];
    const kinds = [...new Set([dominant, ...real.map((s) => s.band)])].filter((k) => k !== 'static');
    const rec = { ...meta, kind: kinds[0] || 'static', kinds, samples: slopes.length, medianSlope: med, medianXSlope: xmed };
    if (real.length) rec.segments = real;
    const hold = real.filter((s) => s.band === 'pinned' || s.band === 'horizontal-scroll')
      .sort((a, b) => b.distance - a.distance)[0];
    if (hold) rec.holdRange = { fromY: hold.fromY, toY: hold.toY, distance: hold.distance, steps: hold.steps, band: hold.band };
    if (opacities.length > 1 && Math.min(...opacities) < 0.95) rec.opacityReveal = opacities;
    if (kinds.length || rec.opacityReveal) out.push(rec);
  }
  // An element is listed under every band it actually exhibits, not just its median band.
  const by = (k) => out.filter((r) => r.kinds && r.kinds.includes(k));
  const res = {
    legend: 'slope = d(rect.top)/d(scrollY). -1.00 = static in flow. |s|<0.08 pinned (horizontal-scroll if xSlope>0.2). -0.92..-0.08 slower than scroll. <-1.08 faster than scroll. >+0.08 drifts down. `kinds` lists every band the element exhibited; `segments` gives the scroll range of each. `holdRange` is the longest pin/h-scroll segment — this is the number to quote for pin distance.',
    stepResolutionNote: 'fromY/toY are only as precise as the scroll step (docHeight/26). Treat them as ±one step; if libprobe/*.json has scrollTriggers, prefer its exact start/end values.',
    trackedElements: byEl.size,
    pinned: by('pinned'), horizontalScroll: by('horizontal-scroll'),
    parallaxSlow: by('parallax-slow'), parallaxFast: by('parallax-fast'), parallaxReverse: by('parallax-reverse'),
    opacityReveal: out.filter((r) => r.opacityReveal).slice(0, 60),
  };
  W(`analysis_scroll_${label}.json`, res);
  log(`  scroll-analysis: pinned=${res.pinned.length} hscroll=${res.horizontalScroll.length} parallax=${res.parallaxSlow.length + res.parallaxFast.length + res.parallaxReverse.length} reveal=${res.opacityReveal.length}`);
  return res;
}

function analyzeCSS() {
  const dir = path.join(OUT, 'css');
  if (!fs.existsSync(dir)) return null;
  let all = ''; const files = fs.readdirSync(dir).sort();
  for (const f of files) all += '\n' + fs.readFileSync(path.join(dir, f), 'utf8');
  const tally = (re, pick = (m) => m[1]) => {
    const m = new Map(); let x;
    const r = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
    while ((x = r.exec(all))) { const k = pick(x); if (!k) continue; m.set(k, (m.get(k) || 0) + 1); }
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  };
  const bp = tally(/@media[^{]*?\(\s*(?:min|max)-width\s*:\s*([\d.]+(?:px|em|rem))/i);
  const keyframes = tally(/@keyframes\s+([\w-]+)/i);
  const fontFace = [];
  { const r = /@font-face\s*{([^}]*)}/gi; let m;
    while ((m = r.exec(all))) { const b = m[1];
      fontFace.push({ family: ((b.match(/font-family\s*:\s*([^;]+)/i) || [])[1] || '').trim().replace(/["']/g, ''), weight: ((b.match(/font-weight\s*:\s*([^;]+)/i) || [])[1] || '').trim(), src: ((b.match(/src\s*:\s*([^;]+)/i) || [])[1] || '').trim().slice(0, 220) }); } }
  const clamps = tally(/font-size\s*:\s*(clamp\([^;]+\))/i).slice(0, 20);
  const kw = {};
  for (const k of ['mix-blend-mode', 'backdrop-filter', 'clip-path', 'mask-image', 'cursor:none', 'cursor: none', 'position:sticky', 'position: sticky', 'will-change', 'clamp(', 'aspect-ratio', 'scroll-snap', 'writing-mode', '@supports', 'perspective', 'transform-style', 'animation-timeline', 'view-timeline', 'scroll-timeline', 'view(', 'scroll(', 'text-wrap', '@container', 'feTurbulence']) kw[k] = all.split(k).length - 1;
  const rootVars = {};
  for (const b of [...all.matchAll(/:root\s*{([^}]*)}/gi)].map((m) => m[1])) for (const m of b.matchAll(/(--[\w-]+)\s*:\s*([^;]+)/g)) rootVars[m[1]] = m[2].trim().slice(0, 80);
  const res = { files: files.map((f) => ({ file: f, bytes: fs.statSync(path.join(dir, f)).size })), totalBytes: all.length,
    breakpoints: bp.map(([value, count]) => ({ value, count })), keyframes: keyframes.map(([name, count]) => ({ name, count })),
    fluidFontSizes: clamps.map(([value, count]) => ({ value, count })), fontFace, keywordCounts: kw, rootVars };
  W('analysis_css.json', res);
  log(`  css-analysis: breakpoints=${bp.length} keyframes=${keyframes.length} @font-face=${fontFace.length} scroll-timeline=${kw['animation-timeline']}`);
  return res;
}

function analyzeJS() {
  const dir = path.join(OUT, 'js');
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).sort();
  const patterns = {
    scrollTriggerCreate: /ScrollTrigger\s*\.\s*create\s*\(/g, scrub: /scrub\s*:\s*([\w.]+)/g,
    stagger: /stagger\s*:\s*([\w.{}\s:,"']{1,40})/g, ease: /ease\s*:\s*["'`]([\w.()-]+)["'`]/g,
    pin: /pin\s*:\s*(true|[\w.$]+)/g, lerp: /lerp\s*:\s*([\d.]+)/g,
    newLenis: /new\s+Lenis\s*\(/g, locomotive: /new\s+LocomotiveScroll\s*\(/g,
    splitText: /new\s+SplitText\s*\(|SplitType\s*\(|Splitting\s*\(/g,
    duration: /duration\s*:\s*([\d.]+)/g, swiperNew: /new\s+Swiper\s*\(/g,
    requestAnimationFrame: /requestAnimationFrame\s*\(/g, intersectionObserver: /new\s+IntersectionObserver\s*\(/g,
  };
  const out = { files: [], hits: {} };
  for (const f of files) {
    const body = fs.readFileSync(path.join(dir, f), 'utf8');
    const row = { file: f, bytes: body.length, hits: {} };
    for (const [name, re] of Object.entries(patterns)) {
      const m = body.match(new RegExp(re.source, 'g'));
      if (m && m.length) {
        row.hits[name] = m.length;
        out.hits[name] = out.hits[name] || { total: 0, values: {} };
        out.hits[name].total += m.length;
        for (const one of m.slice(0, 40)) { const v = one.replace(/\s+/g, ' ').slice(0, 40); out.hits[name].values[v] = (out.hits[name].values[v] || 0) + 1; }
      }
    }
    if (Object.keys(row.hits).length) out.files.push(row);
  }
  W('analysis_js.json', out);
  log(`  js-analysis: ${out.files.length} files with animation signatures`);
  return out;
}

function analyzeNetwork(label) {
  const f = path.join(OUT, `network_${label}.json`);
  if (!fs.existsSync(f)) return null;
  const rows = JSON.parse(fs.readFileSync(f, 'utf8'));
  const byType = {};
  for (const r of rows) {
    const t = (r.type || 'other').toLowerCase();
    byType[t] = byType[t] || { count: 0, bytes: 0, unmeasured: 0 };
    byType[t].count++;
    if (r.encodedBytes > 0) byType[t].bytes += r.encodedBytes; else byType[t].unmeasured++;
  }
  const total = rows.reduce((a, r) => a + (r.encodedBytes || 0), 0);
  const res = { responses: rows.length, measuredBytes: total, unmeasured: rows.filter((r) => !r.encodedBytes).length, byType,
    heaviest: rows.slice().sort((a, b) => (b.encodedBytes || 0) - (a.encodedBytes || 0)).slice(0, 20).map((r) => ({ url: r.url.slice(0, 140), type: r.type, kb: Math.round((r.encodedBytes || 0) / 1024) })) };
  W(`analysis_network_${label}.json`, res);
  log(`  network: ${res.responses} responses, ${Math.round(total / 1024)} KB measured, ${res.unmeasured} unmeasured`);
  return res;
}

// ===========================================================================
// Launch order: an explicitly requested browser, else Playwright's bundled Chromium,
// else the Chrome / Edge already installed on the machine. The fallback exists so
// `npx playwright install` is never required — that download is ~200 MB into
// AppData\Local and is not worth the disk pressure when a browser is already present.
async function launchBrowser() {
  const want = arg('--browser');
  const base = {
    headless: !flag('--headful'),
    args: ['--autoplay-policy=no-user-gesture-required', '--disable-blink-features=AutomationControlled'],
  };
  const attempts = [];
  if (process.env.PW_CHROME) attempts.push({ label: 'PW_CHROME', opts: { ...base, executablePath: process.env.PW_CHROME } });
  if (want) attempts.push({ label: want, opts: { ...base, ...(want === 'chromium' ? {} : { channel: want }) } });
  else attempts.push(
    { label: 'bundled chromium', opts: base },
    { label: 'installed Chrome', opts: { ...base, channel: 'chrome' } },
    { label: 'installed Edge', opts: { ...base, channel: 'msedge' } },
  );
  const errors = [];
  for (const a of attempts) {
    try { const b = await chromium.launch(a.opts); log(`browser: ${a.label}`); META.browserUsed = a.label; return b; }
    catch (e) { errors.push(`${a.label}: ${e.message.split('\n')[0].slice(0, 120)}`); }
  }
  throw new Error('no usable browser found.\n  ' + errors.join('\n  ') +
    '\n  Fix: install Google Chrome or Microsoft Edge (already present on most Windows machines),\n' +
    '  or run `npx playwright install chromium` if you have ~200 MB free on C:.\n' +
    '  You can also force one with --browser chrome | msedge | chromium.');
}
const browser = await launchBrowser();
try {
  META.chromium = browser.version();
  const demo = await resolveDemoUrl(browser);
  META.demoUrl = demo;
  W('_demo_url.txt', demo);
  if (/localhost|127\.0\.0\.1/.test(demo)) warn('demo URL is localhost — this is a TEST FIXTURE, not the real theme demo. Do not write findings from it.');

  const L1 = `${LABEL}_1440`;
  const home = await capture(browser, demo, L1, 1440, 900, true);
  analyzeTrack(L1, 900); analyzeCSS(); analyzeJS(); analyzeNetwork(L1);
  await captureForcedReveal(browser, demo, L1, 1440, 900);

  if (QUICK) {
    META.notCaptured.push('390px mobile pass (--quick)', 'hover pass (--quick)');
    warn('--quick was used: mobile and hover data are MISSING. Any claim about breakpoints or hover effects must say "not measured", never "none found".');
  } else {
    const L2 = `${LABEL}_390`;
    await capture(browser, demo, L2, 390, 844, true);   // deep on mobile too — the skeleton needs it
    analyzeTrack(L2, 844); analyzeNetwork(L2);
  }

  const base = demo.replace(/\/$/, '');
  const links = (home.pageLinks || []).filter((l) => l.href.replace(/\/$/, '') !== base && !/\.(jpg|png|pdf|zip|svg|webp)$/i.test(l.href));
  const uniq = [...new Set([...links.filter((l) => l.inNav), ...links].map((l) => l.href))].slice(0, 3);
  W('_inner_links.json', uniq);
  for (let i = 0; i < uniq.length; i++) {
    try { await capture(browser, uniq[i], `page${i + 1}_1440`, 1440, 900, false); }
    catch (e) { warn(`inner page ${uniq[i]}: ${e.message.slice(0, 90)}`); }
  }

  META.finishedAt = new Date().toISOString();
  META.themeHints = home.themeHints;
  META.outDir = path.relative(HERE, OUT);
  W('_capture_meta.json', META);
  log(`\ndone → ${path.relative(process.cwd(), OUT)}`);
  if (META.warnings.length) log(`${META.warnings.length} warning(s) recorded in _capture_meta.json — read them before writing findings.`);
} catch (e) {
  META.fatalError = e.message;
  META.finishedAt = new Date().toISOString();
  try { W('_capture_meta.json', META); } catch { }
  console.error('\n!! failed:', e.message, '\n', e.stack);
  process.exitCode = 1;
} finally {
  await browser.close();
}
