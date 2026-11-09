// GL hero typography — the display headline lives INSIDE the WebGL scene
// so the bear can tumble between its lines. Each line is rasterized by
// the browser onto a canvas (perfect Thai shaping — tone marks and
// vowels land where the font says, which SDF text engines get wrong) and
// mounted on a plane. The DOM keeps the real text (visually hidden) for
// SEO/a11y.
//
// Line flavors (from the DOM spans):
//   .sm   — a small lead-in line (≈45% size)
//   .hl   — accent color; the line POPS in with an elastic overshoot and
//           keeps breathing (the "แมส" line: mass = it swells)
//   .echo — trailing characters shrink and fade like an echo ("เกิดดดดด")
//
// The planes render OPAQUE with alphaTest so they land in the
// transmission buffer — the gummy bear refracts the text behind it.

import * as THREE from 'three';
import gsap from 'gsap';
import { getSparkleTexture } from './trail.js';

const FONT_FAMILY = "'Mitr', 'IBM Plex Sans Thai', sans-serif";
const COLOR_TEXT = '#2B1735';
const COLOR_HL = '#FF3D8F';
const LINE_H = 1.15;      // line-height ratio, matches CSS .hero-headline
const PAD = 0.3;          // canvas padding in em — room for Thai marks
const SMALL = 0.42;       // .sm line scale
const OFFSETS = [0, 0.03, 0.015, 0.045]; // per-line x-offset in em

function parseLine(el) {
  const segs = [];
  el.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) {
      if (n.textContent) segs.push({ text: n.textContent });
    } else if (n.nodeType === Node.ELEMENT_NODE) {
      segs.push({
        text: n.textContent,
        hl: n.classList.contains('hl'),
        sm: n.classList.contains('sm'),
        xl: n.classList.contains('xl'),
        echo: n.classList.contains('echo'),
      });
    }
  });
  if (segs.length) {
    segs[0].text = segs[0].text.replace(/^\s+/, '');
    segs[segs.length - 1].text = segs[segs.length - 1].text.replace(/\s+$/, '');
  }
  return segs.filter((s) => s.text.length);
}

const XL = 2;             // .xl line scale
const lineScale = (segs) => {
  if (!segs.length) return 1;
  if (segs.every((s) => s.sm)) return SMALL;
  if (segs.every((s) => s.xl)) return XL;
  return 1;
};
const lineIsHl = (segs) => segs.some((s) => s.hl);
const lineIsSm = (segs) => segs.length > 0 && segs.every((s) => s.sm);
// small lead-in = body face, regular weight; everything else = display bold
const lineFont = (segs, px) => (lineIsSm(segs)
  ? `400 ${px}px 'IBM Plex Sans Thai', 'Mitr', sans-serif`
  : `700 ${px}px ${FONT_FAMILY}`);
// advance (in em of the base size) from this line's top to the next line's top:
// small lead-ins get extra air so tall Thai marks below don't collide;
// the big accent word (no ascenders) sits tighter
const lineAdvance = (segs) => {
  const ls = lineScale(segs);
  if (ls < 1) return ls * LINE_H + 0.22;
  if (ls > 1) return ls * LINE_H * 0.8;
  return lineIsHl(segs) ? LINE_H * 0.92 : LINE_H;
};

/** widest line in px at a given base size (echo runs shrink like the raster) */
const _measureCtx = document.createElement('canvas').getContext('2d');
function measureWidest(lines, fsPx) {
  let widest = 0;
  for (const segs of lines) {
    const fs = fsPx * lineScale(segs);
    let w = 0;
    for (const s of segs) {
      if (s.echo) {
        const gs = graphemes(s.text);
        gs.forEach((g, k) => {
          _measureCtx.font = lineFont(segs, fs * (1 - 0.5 * ((k + 1) / gs.length)));
          w += _measureCtx.measureText(g).width;
        });
      } else {
        _measureCtx.font = lineFont(segs, fs);
        w += _measureCtx.measureText(s.text).width;
      }
    }
    widest = Math.max(widest, w);
  }
  return widest;
}

/** split a string into grapheme clusters (Thai base + marks stay together) */
function graphemes(text) {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    return [...new Intl.Segmenter('th', { granularity: 'grapheme' }).segment(text)].map((s) => s.segment);
  }
  return [...text];
}

function rasterize(segs, fsPx, dpr) {
  const scale = lineScale(segs);
  const fs = fsPx * scale * dpr;
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  const font = (px) => lineFont(segs, px);

  // measure: echo segments are drawn per grapheme at shrinking sizes
  const runs = [];
  let width = 0;
  for (const s of segs) {
    if (s.echo) {
      const gs = graphemes(s.text);
      gs.forEach((g, k) => {
        const f = (k + 1) / gs.length;
        const px = fs * (1 - 0.5 * f);
        ctx.font = font(px);
        const w = ctx.measureText(g).width;
        runs.push({ text: g, px, w, alpha: 1 - 0.65 * f, color: s.hl ? COLOR_HL : COLOR_TEXT });
        width += w;
      });
    } else {
      ctx.font = font(fs);
      const w = ctx.measureText(s.text).width;
      runs.push({ text: s.text, px: fs, w, alpha: 1, color: s.hl ? COLOR_HL : COLOR_TEXT });
      width += w;
    }
  }

  const pad = fs * PAD;
  c.width = Math.ceil(width + pad * 2);
  c.height = Math.ceil(fs * (LINE_H + PAD * 1.2));
  ctx.textBaseline = 'alphabetic';
  let x = pad;
  const y = fs * (0.86 + PAD * 0.6);
  for (const r of runs) {
    ctx.font = font(r.px);
    ctx.globalAlpha = r.alpha;
    ctx.fillStyle = r.color;
    ctx.fillText(r.text, x, y);
    x += r.w;
  }
  ctx.globalAlpha = 1;

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.anisotropy = 4;
  return { tex, w: c.width, h: c.height, pad, scale };
}

export function buildHeadline(stage, onAsset) {
  const group = new THREE.Group();
  group.renderOrder = 0;
  stage.scene.add(group);

  const src = document.querySelector('[data-gl-headline]');
  const lines = src ? [...src.querySelectorAll('[data-line]')].map(parseLine) : [];
  const totalScale = lines.reduce((a, l) => a + lineScale(l), 0) || 1;

  const meshes = lines.map((segs) => {
    const mat = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      alphaTest: 0.3,
      depthWrite: true,
      toneMapped: false,
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    m.userData.fs = 0;
    m.userData.pop = 1;
    m.userData.hl = lineIsHl(segs);
    group.add(m);
    return m;
  });

  // tiny sparkles that twinkle around the accent word ("แมส") — sparse and brief
  const sparkles = [];
  meshes.forEach((m) => {
    if (!m.userData.hl) return;
    // [x, y] as fractions of the line box (0..1), phase, cycle seconds
    const spots = [[1.02, 0.95, 0.0, 3.6], [-0.03, 0.25, 1.9, 4.4], [0.62, 1.06, 3.1, 5.1]];
    spots.forEach(([fx, fy, phase, cycle]) => {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: getSparkleTexture(), depthTest: false, transparent: true, opacity: 0,
      }));
      sp.renderOrder = 3;
      group.add(sp);
      sparkles.push({ sp, m, fx, fy, phase, cycle });
    });
  });

  const end = onAsset ? onAsset('headline-font') : () => {};
  let fontsReady = false;
  const ready = Promise.all([
    document.fonts.load(`700 64px ${FONT_FAMILY}`, 'ก'),
    document.fonts.load(`700 64px ${FONT_FAMILY}`, 'A'),
  ]).catch(() => {}).then(() => { fontsReady = true; end(); layout(innerWidth, innerHeight); });
  if (lines.length === 0) end();

  let pxToWorld = 1;
  function layout(w, h) {
    const dist = stage.camera.position.z + 0.35;
    const worldH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(stage.camera.fov / 2));
    pxToWorld = worldH / h;

    // --fs-display: clamp(3rem, 1.6rem + 8.5vw, 8.5rem), capped so the block
    // never exceeds ~72% of a short viewport
    const totalAdvance = lines.reduce((a, l) => a + lineAdvance(l), 0) || 1;
    let fsPx = Math.min(136, Math.max(44, 25.6 + 0.085 * w), (h * 0.6) / totalAdvance);
    // keep the widest line inside ~58% of the viewport so the bear keeps its lane
    if (fontsReady) {
      const widest = measureWidest(lines, fsPx);
      const maxW = w * (h > w ? 0.92 : 0.5);
      if (widest > maxW) fsPx = Math.max(36, fsPx * (maxW / widest));
    }
    const padPx = Math.min(Math.max(w * 0.04, 20), 64);
    const blockH = fsPx * totalAdvance;
    // same left edge as the DOM .container (max-width 100rem, centered) so the
    // headline lines up with the intro paragraph and button below it
    const containerMax = 100 * parseFloat(getComputedStyle(document.documentElement).fontSize || '16');
    const containerLeft = Math.max(0, (w - containerMax) / 2) + padPx;
    const left = -((w / 2) - containerLeft) * pxToWorld;
    const portrait = h > w;
    const top = portrait
      ? (h / 2 - 96) * pxToWorld
      : (blockH / 2 + fsPx * 0.3) * pxToWorld; // sits higher: clear air above the intro
    const dpr = Math.min(devicePixelRatio || 1, 2);

    let y = top;
    meshes.forEach((m, i) => {
      if (fontsReady && m.userData.fs !== fsPx) {
        const r = rasterize(lines[i], fsPx, dpr);
        if (m.material.map) m.material.map.dispose();
        m.material.map = r.tex;
        m.material.needsUpdate = true;
        m.userData.fs = fsPx;
        m.userData.w = r.w / dpr;
        m.userData.h = r.h / dpr;
        m.userData.pad = r.pad / dpr;
      }
      const ls = lineScale(lines[i]);
      const lineH = fsPx * lineAdvance(lines[i]);
      const wPx = m.userData.w || 1;
      const hPx = m.userData.h || 1;
      const padW = m.userData.pad || 0;
      m.userData.baseW = wPx * pxToWorld;
      m.userData.baseH = hPx * pxToWorld;
      m.scale.set(m.userData.baseW, m.userData.baseH, 1);
      // anchor: left edge (scale pops out from the text's left/bottom corner)
      m.userData.anchorX = left - padW * pxToWorld + OFFSETS[i % OFFSETS.length] * fsPx * pxToWorld;
      // glyph box sits at the top of the line's slot; any extra advance is air below
      m.userData.anchorY = y - fsPx * LINE_H * ls * pxToWorld + fsPx * ls * 0.2 * pxToWorld
        + (m.userData.hl ? fsPx * 0.12 * pxToWorld : 0); // short accent word hugs the line above
      m.position.x = m.userData.anchorX + m.userData.baseW / 2;
      m.position.y = m.userData.anchorY + m.userData.baseH / 2;
      m.position.z = -0.35; // the bear rolls through this plane
      m.userData.baseY = m.position.y;
      y -= lineH * pxToWorld;
    });
  }
  stage.addResizeHook(layout);

  let visible = true;
  const fadeState = { scroll: 1 };

  function applyOpacity() {
    meshes.forEach((m) => {
      const o = m.userData.entrance ?? 0;
      const v = Math.min(1, o * fadeState.scroll);
      m.material.opacity = v;
      // opaque path (into the transmission buffer) once fully visible
      m.material.transparent = v < 0.999;
    });
  }

  return {
    group,
    meshes,
    ready,
    /** world-x of the widest line's right edge (glyphs, not canvas padding) */
    rightEdge() {
      let r = -Infinity;
      meshes.forEach((m) => {
        if (!m.userData.baseW) return;
        const padW = m.userData.pad * pxToWorld * (m.scale.x / m.userData.baseW);
        r = Math.max(r, m.position.x + m.scale.x / 2 - padW);
      });
      return r;
    },
    /** screen-space bottom of the lowest line, px from the viewport top
     *  (already includes the scroll ride) — the portrait bear parks under it */
    bottomEdgePx() {
      let b = Infinity;
      // from the layout anchors, not the live scale — the lines shrink/pop
      // during the entrance and the hero fade, and the bear must not chase that
      meshes.forEach((m) => {
        if (!m.userData.baseH) return;
        b = Math.min(b, group.position.y + m.userData.anchorY + m.userData.pad * pxToWorld);
      });
      if (!Number.isFinite(b)) return NaN;
      return innerHeight / 2 - b / pxToWorld;
    },
    /** screen-space top of the first line, px from the viewport top (scroll included) */
    topEdgePx() {
      let tp = -Infinity;
      meshes.forEach((m) => {
        if (!m.userData.baseH) return;
        tp = Math.max(tp, group.position.y + m.userData.anchorY + m.userData.baseH - m.userData.pad * pxToWorld);
      });
      if (!Number.isFinite(tp)) return NaN;
      return innerHeight / 2 - tp / pxToWorld;
    },
    /** entrance: lines rise + pop in, per-line delay .12s; the .hl line
     *  swells in with an elastic overshoot and jolts the bear */
    entrance() {
      meshes.forEach((m, i) => {
        m.userData.entrance = 0;
        gsap.to(m.userData, {
          entrance: 1,
          duration: m.userData.hl ? 0.5 : 1.1,
          delay: 0.12 * i,
          ease: 'power2.out',
          onUpdate: applyOpacity,
        });
        if (m.userData.hl) {
          m.userData.pop = 0.2;
          gsap.to(m.userData, {
            pop: 1, duration: 1.3, delay: 0.12 * i + 0.1, ease: 'elastic.out(1, 0.38)',
            onStart: () => { if (stage.jelly) stage.jelly.v += 3.5; },
          });
        } else {
          gsap.from(m.position, {
            y: m.position.y - 0.4,
            duration: 1.3,
            delay: 0.12 * i,
            ease: 'back.out(1.4)',
          });
        }
      });
    },
    /** headline exists on the home hero only */
    setPage(page) {
      const want = page === 'home';
      if (want === visible) return;
      visible = want;
      meshes.forEach((m, i) => {
        gsap.to(m.userData, {
          entrance: want ? 1 : 0,
          duration: 0.5,
          delay: 0.05 * i,
          ease: 'power2.out',
          onUpdate: applyOpacity,
        });
      });
    },
    /** ride the page scroll + thin out as the hero leaves; .hl breathes */
    update(scrollPx) {
      group.position.y = scrollPx * pxToWorld;
      fadeState.scroll = visible ? Math.max(0, 1 - (scrollPx / innerHeight) * 1.4) : 0;
      applyOpacity();
      const t = performance.now() / 1000;
      meshes.forEach((m) => {
        if (!m.userData.hl || !m.userData.baseW) return;
        const breathe = 1 + 0.028 * Math.sin(t * 2.1) + 0.012 * Math.sin(t * 5.3);
        const s = m.userData.pop * breathe;
        m.scale.set(m.userData.baseW * s, m.userData.baseH * s, 1);
        // grow from the left/bottom corner so the word swells outward
        m.position.x = m.userData.anchorX + (m.userData.baseW * s) / 2;
        m.position.y = m.userData.anchorY + (m.userData.baseH * s) / 2;
      });
      // sparkles: sit on the word's box, flash briefly once per cycle
      for (const k of sparkles) {
        const { m } = k;
        if (!m.userData.baseW) continue;
        const w = m.scale.x, h = m.scale.y;
        const pad = m.userData.pad * pxToWorld * (w / m.userData.baseW); // canvas padding → world
        k.sp.position.set(
          m.position.x - w / 2 + pad + (w - pad * 2) * k.fx,
          m.position.y - h / 2 + h * k.fy,
          -0.3,
        );
        const ph = ((t + k.phase) % k.cycle) / k.cycle;          // 0..1 through the cycle
        const flash = Math.pow(Math.max(0, Math.sin(ph * Math.PI * 2)), 14); // short blink
        const vis = Math.min(1, m.material.opacity);
        k.sp.material.opacity = flash * 0.9 * vis;
        k.sp.material.rotation = ph * 1.2;
        const sz = (0.07 + 0.08 * flash) * (m.userData.fs / 110);
        k.sp.scale.set(sz, sz, 1);
      }
    },
  };
}
