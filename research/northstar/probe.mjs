// probe.mjs — the in-page measurement payload.
// Exported as a plain function so measure.mjs can pass it to page.evaluate().
// Everything here runs INSIDE the target page. It only reads; it never mutates layout.

export const PROBE = function () {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const docH = document.documentElement.scrollHeight;

  const px = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
  const r2 = (n) => Math.round(n * 100) / 100;

  const csCache = new WeakMap();
  const cs = (el) => { let c = csCache.get(el); if (!c) { c = getComputedStyle(el); csCache.set(el, c); } return c; };

  const allEls = Array.from(document.querySelectorAll('body *'));

  const rendered = (el) => {
    const c = cs(el);
    return c.display !== 'none' && c.visibility !== 'hidden';
  };
  // "visible" = rendered AND has area. Deliberately ignores opacity, because
  // scroll-reveal sites park real content at opacity:0 and we still want its geometry.
  const boxed = (el) => {
    if (!rendered(el)) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  const ownText = (el) => {
    let s = '';
    for (const n of el.childNodes) if (n.nodeType === 3) s += n.textContent;
    return s.replace(/\s+/g, ' ').trim();
  };

  // ---- DOM density gate -----------------------------------------------------
  let textNodeCount = 0;
  {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (!n.textContent.trim()) continue;
      const p = n.parentElement;
      if (!p || !rendered(p)) continue;
      const t = p.tagName;
      if (t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT') continue;
      textNodeCount++;
    }
  }
  const canvasCount = document.querySelectorAll('canvas').length;

  // layoutLeft: transform-immune left edge (offsetParent chain ignores transforms).
  const layoutLeft = (el) => {
    let x = 0, node = el;
    let guard = 0;
    while (node && guard++ < 100) {
      x += node.offsetLeft || 0;
      const p = node.offsetParent;
      if (!p) break;
      x -= p.scrollLeft || 0;
      node = p;
    }
    return x;
  };

  // ===========================================================================
  // A. CONTAINER AND GRID
  // ===========================================================================
  const blockish = (el) => /^(block|flex|grid|list-item|flow-root)$/.test(cs(el).display);
  // Award sites routinely split headlines into one <span> per character, so an
  // "own text >= 20 chars" rule finds nothing there. Fall back progressively.
  let textBlocks = [];
  for (const min of [20, 8, 1]) {
    textBlocks = allEls.filter((el) => boxed(el) && blockish(el) && ownText(el).length >= min);
    if (textBlocks.length >= 5) break;
  }
  if (!textBlocks.length) {
    // Last resort: block elements whose subtree has text but which have no block children.
    textBlocks = allEls.filter((el) => boxed(el) && blockish(el) &&
      (el.textContent || '').trim().length >= 8 &&
      !Array.from(el.children).some((k) => blockish(k)));
  }

  const pairTally = new Map();
  for (const el of textBlocks) {
    const r = el.getBoundingClientRect();
    const ll = layoutLeft(el);
    // Skip elements parked far off-canvas (accessibility text, off-screen slides);
    // they are not the page's content column.
    if (ll < -400 || ll > vw + 400) continue;
    const key = `${Math.round(r.width)}|${Math.round(ll)}`;
    let e = pairTally.get(key);
    if (!e) { e = { width: Math.round(r.width), left: Math.round(layoutLeft(el)), count: 0, sample: null }; pairTally.set(key, e); }
    e.count++;
    if (!e.sample) e.sample = { tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 60) };
  }
  const dominantPairs = [...pairTally.values()].sort((a, b) => b.count - a.count).slice(0, 6);

  // Walk up from a representative element to find the constraining container.
  let containerInfo = null;
  if (dominantPairs.length) {
    const target = dominantPairs[0];
    const rep = textBlocks.find((el) => Math.round(el.getBoundingClientRect().width) === target.width && Math.round(layoutLeft(el)) === target.left);
    if (rep) {
      const chain = [];
      let node = rep, guard = 0;
      while (node && node !== document.body && guard++ < 30) {
        const c = cs(node);
        const rr = node.getBoundingClientRect();
        chain.push({
          tag: node.tagName.toLowerCase(),
          cls: (node.className || '').toString().slice(0, 60),
          width: r2(rr.width),
          maxWidth: c.maxWidth,
          paddingInline: `${c.paddingLeft} / ${c.paddingRight}`,
          marginInline: `${c.marginLeft} / ${c.marginRight}`,
          display: c.display,
        });
        node = node.parentElement;
      }
      const constrained = chain.find((x) => x.maxWidth && x.maxWidth !== 'none');
      containerInfo = { chain: chain.slice(0, 8), constrained: constrained || null };
    }
  }

  // Real CSS grids that are page-wide-ish.
  const gridTally = new Map();
  for (const el of allEls) {
    if (!boxed(el)) continue;
    const c = cs(el);
    if (c.display !== 'grid' && c.display !== 'inline-grid') continue;
    const r = el.getBoundingClientRect();
    if (r.width < vw * 0.35) continue;
    const tpl = c.gridTemplateColumns;
    if (!tpl || tpl === 'none') continue;
    const cols = tpl.trim().split(/\s+/).length;
    if (cols < 2) continue;
    const key = `${cols}|${c.columnGap}|${r2(r.width)}`;
    let e = gridTally.get(key);
    if (!e) { e = { columns: cols, columnGap: c.columnGap, rowGap: c.rowGap, width: r2(r.width), template: tpl.slice(0, 200), count: 0 }; gridTally.set(key, e); }
    e.count++;
  }
  const grids = [...gridTally.values()].sort((a, b) => b.count - a.count).slice(0, 6);

  const bodyCS = cs(document.body);
  const htmlCS = getComputedStyle(document.documentElement);

  // ===========================================================================
  // B. SECTION DISCOVERY  (shared by B and C)
  // ===========================================================================
  // A section that paints no characters teaches us nothing about a grid. Scroll-driven
  // sites often stack empty "ref" spacers to drive a fixed render layer; those must not
  // be mistaken for the document's sections.
  const hasText = (el) => (el.textContent || '').trim().length >= 8;

  function pickSections() {
    // Preferred: a run of >=4 sibling <section>/<article> elements.
    const semantic = Array.from(document.querySelectorAll('section, article'))
      .filter((el) => boxed(el) && hasText(el) && el.getBoundingClientRect().height > vh * 0.15);
    if (semantic.length >= 4) {
      const byParent = new Map();
      for (const el of semantic) {
        const p = el.parentElement;
        if (!p) continue;
        if (!byParent.has(p)) byParent.set(p, []);
        byParent.get(p).push(el);
      }
      const best = [...byParent.values()].sort((a, b) => b.length - a.length)[0];
      if (best && best.length >= 4) return { how: 'semantic-siblings', els: best };
    }
    // Fallback: deepest full-height wrapper whose children are tall blocks.
    let best = null;
    for (const el of [document.body, ...allEls]) {
      if (!boxed(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.height < docH * 0.5 || r.width < vw * 0.5) continue;
      const kids = Array.from(el.children).filter((k) => boxed(k) && hasText(k) && k.getBoundingClientRect().height > vh * 0.18);
      if (kids.length < 3) continue;
      const depth = (() => { let d = 0, n = el; while (n && n !== document.body) { d++; n = n.parentElement; } return d; })();
      const score = kids.length * 10 + depth;
      if (!best || score > best.score) best = { score, els: kids, how: 'tall-children-of-wrapper' };
    }
    if (best) return { how: best.how, els: best.els };
    return { how: 'body-children', els: Array.from(document.body.children).filter((el) => boxed(el) && hasText(el)) };
  }

  const secPick = pickSections();
  const sectionEls = secPick.els;

  // First element in document order that actually paints a character. Threshold is
  // 1 char so per-character <span> headline rigs are still found.
  const firstTextEl = (root) => {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let n = root;
    do {
      if (n.nodeType === 1 && rendered(n)) {
        const t = n.tagName;
        if (t !== 'SCRIPT' && t !== 'STYLE' && t !== 'NOSCRIPT' && t !== 'SVG') {
          const c = cs(n);
          if (c.position !== 'fixed' && ownText(n).length >= 1) {
            const rr = n.getBoundingClientRect();
            if (rr.width > 0 && rr.height > 0) return n;
          }
        }
      }
    } while ((n = w.nextNode()));
    return null;
  };

  // The section's largest piece of text — what the eye actually aligns to.
  const headingEl = (root) => {
    let best = null, bestSize = 0;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let n = root;
    do {
      if (n.nodeType === 1 && rendered(n) && ownText(n).length >= 1) {
        const c = cs(n);
        if (c.position === 'fixed') continue;
        const f = px(c.fontSize);
        const rr = n.getBoundingClientRect();
        if (f > bestSize && rr.width > 0 && rr.height > 0) { bestSize = f; best = n; }
      }
    } while ((n = w.nextNode()));
    return best;
  };

  const sections = sectionEls.map((el, i) => {
    const c = cs(el);
    const r = el.getBoundingClientRect();
    const mkEdge = (e) => {
      if (!e) return null;
      const fr = e.getBoundingClientRect();
      return {
        layoutLeft: r2(layoutLeft(e)),
        rectLeft: r2(fr.left),
        tag: e.tagName.toLowerCase(),
        fontSize: cs(e).fontSize,
        text: ownText(e).slice(0, 48),
      };
    };
    const edge = mkEdge(firstTextEl(el));
    const hEdge = mkEdge(headingEl(el));
    return {
      index: i,
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      cls: (el.className || '').toString().slice(0, 70),
      height: r2(r.height),
      vhFraction: r2(r.height / vh),
      paddingBlockStart: c.paddingTop,
      paddingBlockEnd: c.paddingBottom,
      marginBlockStart: c.marginTop,
      marginBlockEnd: c.marginBottom,
      firstText: edge,
      heading: hEdge,
    };
  });

  // ---- B. LEFT-EDGE TEST ----------------------------------------------------
  const edges = sections.map((s) => (s.firstText ? s.firstText.layoutLeft : null)).filter((v) => v !== null);
  const edgesRect = sections.map((s) => (s.firstText ? s.firstText.rectLeft : null)).filter((v) => v !== null);
  const stats = (arr) => {
    if (!arr.length) return { n: 0, mean: null, stdDev: null, distinctExact: null, distinctClustered2px: null, clusters: [], values: [] };
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    const sd = Math.sqrt(arr.reduce((a, b) => a + (b - mean) ** 2, 0) / arr.length);
    // cluster with 2px tolerance
    const sorted = [...arr].sort((a, b) => a - b);
    const clusters = [];
    for (const v of sorted) {
      const last = clusters[clusters.length - 1];
      if (last && v - last.max <= 2) { last.max = v; last.count++; } else clusters.push({ min: v, max: v, count: 1 });
    }
    return {
      n: arr.length,
      mean: r2(mean),
      stdDev: r2(sd),
      distinctExact: new Set(arr.map((v) => Math.round(v))).size,
      distinctClustered2px: clusters.length,
      clusters: clusters.map((c) => ({ at: r2((c.min + c.max) / 2), count: c.count })),
      values: arr.map(r2),
    };
  };
  const headEdges = sections.map((s) => (s.heading ? s.heading.layoutLeft : null)).filter((v) => v !== null);
  const leftEdgeTest = {
    layout: stats(edges),
    rect: stats(edgesRect),
    headings: stats(headEdges),
    sectionDiscovery: secPick.how,
  };

  // ---- C. VERTICAL RHYTHM ---------------------------------------------------
  const near100vh = sections.filter((s) => Math.abs(s.height - vh) / vh <= 0.03).length;
  const spacingValues = [];
  for (const el of allEls) {
    if (!boxed(el)) continue;
    const c = cs(el);
    for (const p of ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight']) {
      const v = px(c[p]);
      if (v >= 4 && v < 1000) spacingValues.push(Math.round(v));
    }
  }
  const gcd2 = (a, b) => (b ? gcd2(b, a % b) : a);
  const strictGcd = spacingValues.length ? spacingValues.reduce((a, b) => gcd2(a, b)) : null;
  let baseUnit80 = null;
  for (let d = 48; d >= 2; d--) {
    const hits = spacingValues.filter((v) => v % d === 0).length;
    if (spacingValues.length && hits / spacingValues.length >= 0.8) { baseUnit80 = d; break; }
  }
  const spacingHistogram = (() => {
    const m = new Map();
    for (const v of spacingValues) m.set(v, (m.get(v) || 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 14).map(([v, c]) => ({ value: v, count: c }));
  })();

  // ===========================================================================
  // D. TYPE SCALE
  // ===========================================================================
  const textEls = allEls.filter((el) => boxed(el) && ownText(el).length >= 1);
  const sizeTally = new Map();
  for (const el of textEls) {
    const fs = r2(px(cs(el).fontSize));
    sizeTally.set(fs, (sizeTally.get(fs) || 0) + 1);
  }
  const distinctSizes = [...sizeTally.entries()].sort((a, b) => b[0] - a[0]).map(([size, count]) => ({ size, count }));
  // Sizes used by >=2 elements: filters one-off accidents from the real scale.
  const scaleSizes = distinctSizes.filter((d) => d.count >= 2).map((d) => d.size);
  const ratios = [];
  for (let i = 0; i < scaleSizes.length - 1; i++) ratios.push(r2(scaleSizes[i] / scaleSizes[i + 1]));

  const describe = (el) => {
    if (!el) return null;
    const c = cs(el);
    const r = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(),
      fontSize: r2(px(c.fontSize)),
      fontWeight: c.fontWeight,
      lineHeightPx: c.lineHeight === 'normal' ? 'normal' : r2(px(c.lineHeight)),
      lineHeightRatio: c.lineHeight === 'normal' ? null : r2(px(c.lineHeight) / px(c.fontSize)),
      letterSpacing: c.letterSpacing === 'normal' ? '0px' : c.letterSpacing,
      letterSpacingEm: c.letterSpacing === 'normal' ? 0 : r2(px(c.letterSpacing) / px(c.fontSize) * 1000) / 1000,
      fontFamily: c.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
      fontFamilyFull: c.fontFamily.slice(0, 120),
      textTransform: c.textTransform,
      color: c.color,
      widthPx: r2(r.width),
      text: ownText(el).slice(0, 60),
    };
  };

  const visH = (sel) => allEls.filter((el) => el.tagName.toLowerCase() === sel && boxed(el) && ownText(el).length > 0);
  const h1s = visH('h1');
  const h2s = visH('h2');
  const h3s = visH('h3');

  // Biggest text on the page regardless of tag — many of these sites don't use h1.
  const biggest = textEls.slice().sort((a, b) => px(cs(b).fontSize) - px(cs(a).fontSize))[0];

  // Body paragraph = the text element carrying the most prose at a reading size,
  // constrained to a plausible column width so we don't measure a full-bleed
  // wrapper or a rotated/marquee strip and report a nonsense ch value.
  const bodyCandidates = textEls
    .filter((el) => {
      const c = cs(el);
      const f = px(c.fontSize);
      if (f < 12 || f > 28) return false;
      if (c.writingMode && c.writingMode !== 'horizontal-tb') return false;
      const w = el.getBoundingClientRect().width;
      return w >= 180 && w <= Math.max(1100, vw * 0.92);
    })
    .map((el) => ({ el, len: ownText(el).length }))
    .filter((x) => x.len >= 60)
    .sort((a, b) => b.len - a.len);
  const bodyEl = bodyCandidates.length ? bodyCandidates[0].el : null;

  const smallEl = textEls
    .filter((el) => ownText(el).length >= 4)
    .sort((a, b) => px(cs(a).fontSize) - px(cs(b).fontSize))[0] || null;

  const monoEl = textEls.find((el) => /mono|courier|consol|menlo|roboto mono|ibm plex mono|jetbrains/i.test(cs(el).fontFamily)) || null;

  // Reading measure (spec method: rendered width of a 100-char string in that exact font).
  let readingMeasure = null;
  if (bodyEl) {
    const c = cs(bodyEl);
    const r = bodyEl.getBoundingClientRect();
    const contentW = r.width - px(c.paddingLeft) - px(c.paddingRight);
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.font = `${c.fontStyle} ${c.fontWeight} ${c.fontSize} / ${c.lineHeight === 'normal' ? 'normal' : c.lineHeight} ${c.fontFamily}`;
    const s100 = 'abcdefghij'.repeat(10);
    const w100 = ctx.measureText(s100).width;
    const wZero = ctx.measureText('0').width;
    readingMeasure = {
      columnWidthPx: r2(contentW),
      widthOf100Chars: r2(w100),
      measureCh_spec: w100 > 0 ? r2(contentW / (w100 / 100)) : null,
      measureCh_zeroWidth: wZero > 0 ? r2(contentW / wZero) : null,
      maxWidthDeclared: c.maxWidth,
      canvasFont: ctx.font,
    };
  }

  const familyTally = new Map();
  for (const el of textEls) {
    const fam = cs(el).fontFamily.split(',')[0].replace(/["']/g, '').trim();
    familyTally.set(fam, (familyTally.get(fam) || 0) + 1);
  }
  const fontFamilies = [...familyTally.entries()].sort((a, b) => b[1] - a[1]).map(([family, count]) => ({ family, count }));

  const typeRoles = {
    h1: describe(h1s[0]),
    biggestText: describe(biggest),
    h2All: h2s.slice(0, 12).map(describe),
    h3: describe(h3s[0]),
    body: describe(bodyEl),
    small: describe(smallEl),
    mono: describe(monoEl),
  };

  // ===========================================================================
  // E. COLOR AND RESTRAINT
  // ===========================================================================
  const norm = (v) => (v || '').replace(/\s+/g, '');
  const textColors = new Map();
  const bgColors = new Map();
  for (const el of allEls) {
    if (!boxed(el)) continue;
    const c = cs(el);
    if (ownText(el).length >= 1) {
      const k = norm(c.color);
      textColors.set(k, (textColors.get(k) || 0) + 1);
    }
    const bg = norm(c.backgroundColor);
    if (bg && bg !== 'rgba(0,0,0,0)' && bg !== 'transparent') bgColors.set(bg, (bgColors.get(bg) || 0) + 1);
  }
  const topColors = (m) => [...m.entries()].sort((a, b) => b[1] - a[1]).map(([value, count]) => ({ value, count }));

  const fixedEls = allEls.filter((el) => {
    if (!boxed(el)) return false;
    const c = cs(el);
    return c.position === 'fixed' || c.position === 'sticky';
  }).map((el) => {
    const r = el.getBoundingClientRect();
    const c = cs(el);
    return {
      tag: el.tagName.toLowerCase(),
      cls: (el.className || '').toString().slice(0, 60),
      position: c.position,
      rect: { top: r2(r.top), left: r2(r.left), width: r2(r.width), height: r2(r.height) },
      zIndex: c.zIndex,
      text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60),
      opacity: c.opacity,
    };
  }).slice(0, 20);

  const navEl = document.querySelector('header') || document.querySelector('nav') ||
    allEls.find((el) => /nav|header/i.test((el.className || '').toString()) && boxed(el)) || null;
  const navSnapshot = navEl ? (() => {
    const c = cs(navEl);
    const r = navEl.getBoundingClientRect();
    return {
      tag: navEl.tagName.toLowerCase(),
      cls: (navEl.className || '').toString().slice(0, 60),
      height: r2(r.height),
      top: r2(r.top),
      position: c.position,
      backgroundColor: c.backgroundColor,
      backdropFilter: c.backdropFilter,
      borderBottom: c.borderBottomWidth + ' ' + c.borderBottomColor,
      paddingBlock: `${c.paddingTop} / ${c.paddingBottom}`,
      transform: c.transform,
      opacity: c.opacity,
      mixBlendMode: c.mixBlendMode,
      color: c.color,
    };
  })() : null;

  return {
    viewport: { width: vw, height: vh },
    document: { scrollHeight: docH, vhMultiple: r2(docH / vh), textNodeCount, canvasCount, elementCount: allEls.length, title: document.title.slice(0, 120), lang: document.documentElement.lang || null },
    container: {
      dominantPairs,
      containerChain: containerInfo,
      grids,
      bodyPaddingInline: `${bodyCS.paddingLeft} / ${bodyCS.paddingRight}`,
      bodyMaxWidth: bodyCS.maxWidth,
      htmlPaddingInline: `${htmlCS.paddingLeft} / ${htmlCS.paddingRight}`,
    },
    leftEdgeTest,
    sections,
    verticalRhythm: {
      sectionCount: sections.length,
      near100vhCount: near100vh,
      near100vhPct: sections.length ? r2(near100vh / sections.length * 100) : null,
      strictGcdOfSpacing: strictGcd,
      baseUnitEstimate80pct: baseUnit80,
      spacingHistogram,
      spacingSampleSize: spacingValues.length,
    },
    typeScale: {
      distinctFontSizeCount: distinctSizes.length,
      distinctFontSizeCount_used2plus: scaleSizes.length,
      distinctSizes: distinctSizes.slice(0, 40),
      scaleSizesDesc: scaleSizes,
      consecutiveRatios: ratios,
      roles: typeRoles,
      readingMeasure,
      readingMeasureAlternates: bodyCandidates.slice(0, 3).map((x) => describe(x.el)),
      distinctFontFamilyCount: fontFamilies.length,
      fontFamilies: fontFamilies.slice(0, 8),
    },
    color: {
      textColors: topColors(textColors),
      backgroundColors: topColors(bgColors),
      distinctTextColorCount: textColors.size,
      distinctBgColorCount: bgColors.size,
    },
    persistent: { fixedOrSticky: fixedEls },
    nav: navSnapshot,
  };
};

// Second, smaller payload: re-read the nav after scrolling, for the state diff.
export const NAV_PROBE = function () {
  const px = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
  const r2 = (n) => Math.round(n * 100) / 100;
  const all = Array.from(document.querySelectorAll('body *'));
  const boxed = (el) => { const c = getComputedStyle(el); if (c.display === 'none' || c.visibility === 'hidden') return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const navEl = document.querySelector('header') || document.querySelector('nav') ||
    all.find((el) => /nav|header/i.test((el.className || '').toString()) && boxed(el)) || null;
  if (!navEl) return null;
  const c = getComputedStyle(navEl);
  const r = navEl.getBoundingClientRect();
  const fixed = all.filter((el) => { if (!boxed(el)) return false; const cc = getComputedStyle(el); return cc.position === 'fixed' || cc.position === 'sticky'; })
    .map((el) => { const rr = el.getBoundingClientRect(); const cc = getComputedStyle(el);
      return { tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 60), position: cc.position,
        rect: { top: r2(rr.top), left: r2(rr.left), width: r2(rr.width), height: r2(rr.height) },
        text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60), opacity: cc.opacity }; }).slice(0, 20);
  return {
    nav: {
      height: r2(r.height), top: r2(r.top), position: c.position,
      backgroundColor: c.backgroundColor, backdropFilter: c.backdropFilter,
      borderBottom: c.borderBottomWidth + ' ' + c.borderBottomColor,
      paddingBlock: `${c.paddingTop} / ${c.paddingBottom}`,
      transform: c.transform, opacity: c.opacity, color: c.color,
    },
    fixedOrSticky: fixed,
  };
};
