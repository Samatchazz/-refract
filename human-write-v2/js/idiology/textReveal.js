/* ============================================================
   textReveal.js — Idiology's signature masked line-reveal (§8.2),
   ported to Human-Write with ONE change: the word splitter uses
   Intl.Segmenter('th') instead of whitespace, so Thai vowel/tone
   marks never detach (brief §4). Everything else — offsetTop line
   grouping, .line > .line-inner wrapping, yPercent:110 -> 0 behind an
   overflow:hidden mask, expo.out, stagger 0.08 — is inherited verbatim.
   ============================================================ */
import { segmentThai } from '../shared/thai-split.js';
import { reducedMotion } from '../config.js';

/* Wrap each top-level word in span.w (child ELEMENTS become one unit),
   measure offsetTop, group into lines, wrap each line in .line > .line-inner. */
export function splitLines(el) {
  if (el.__origHTML === undefined) el.__origHTML = el.innerHTML;
  el.innerHTML = el.__origHTML;

  [...el.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      /* THE PORT: Thai word segmentation, not /(\s+)/.
         segmentThai keeps whitespace segments so spacing survives. */
      segmentThai(node.textContent).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.append(document.createTextNode(' '));
        } else {
          const s = document.createElement('span');
          s.className = 'w';
          s.textContent = part;
          frag.append(s);
        }
      });
      node.replaceWith(frag);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.classList.add('w');
    }
  });

  const units = [...el.querySelectorAll(':scope > .w')];
  if (!units.length) return [];

  const groups = [];
  let currentTop = null;
  units.forEach((u) => {
    const top = u.offsetTop;
    if (currentTop === null || Math.abs(top - currentTop) > 4) {
      groups.push([]);
      currentTop = top;
    }
    groups[groups.length - 1].push(u);
  });

  const inners = [];
  groups.forEach((group) => {
    const line = document.createElement('span');
    line.className = 'line';
    const inner = document.createElement('span');
    inner.className = 'line-inner';
    line.append(inner);
    el.insertBefore(line, group[0]);
    let node = group[0];
    const last = group[group.length - 1];
    while (node) {
      const next = node.nextSibling;
      inner.append(node);
      if (node === last) break;
      node = next;
    }
    inners.push(inner);
  });
  return inners;
}

/* Reveal one element's lines. Idiology's `reveal()` — masked yPercent lift. */
export function revealLines(el, { delay = 0, onScroll = true, duration } = {}) {
  const dur = duration != null ? duration : parseFloat(el.dataset.duration || 1);
  const lines = splitLines(el);
  gsap.set(el, { visibility: 'visible' });
  if (!lines.length) return null;
  const vars = {
    yPercent: 110,
    duration: dur,
    ease: 'expo.out',   // the house entrance ease
    stagger: 0.08,
    delay,
    onStart() { el.__played = true; },
  };
  if (onScroll) vars.scrollTrigger = { trigger: el, start: 'top 85%' };
  el.__tween = gsap.from(lines, vars);
  return el.__tween;
}

/* Scroll-triggered reveals for generic company-voice copy
   (everything except [data-hero], which its section plays on its own clock). */
export function initTextReveal() {
  const els = [...document.querySelectorAll('[data-text-reveal]:not([data-hero])')];

  if (reducedMotion) {
    document.querySelectorAll('[data-text-reveal]').forEach((el) =>
      gsap.set(el, { visibility: 'visible' }));
    return;
  }
  els.forEach((el) => revealLines(el));
}
