/* Text line reveal (§8.2) — custom line splitter, no paid SplitText. */

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Wrap each top-level word in span.w (inline elements like <em> become one unit),
   measure offsetTop, group into lines, wrap each line in .line > .line-inner. */
export function splitLines(el) {
  if (el.__origHTML === undefined) el.__origHTML = el.innerHTML;
  el.innerHTML = el.__origHTML;

  [...el.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
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

function reveal(el, { delay = 0, onScroll = true } = {}) {
  const dur = parseFloat(el.dataset.duration || 1);
  const lines = splitLines(el);
  gsap.set(el, { visibility: 'visible' });
  if (!lines.length) return null;
  const vars = {
    yPercent: 110,
    duration: dur,
    ease: 'expo.out',
    stagger: 0.08,
    delay,
    onStart() { el.__played = true; },
  };
  if (onScroll) vars.scrollTrigger = { trigger: el, start: 'top 85%' };
  el.__tween = gsap.from(lines, vars);
  return el.__tween;
}

/* Scroll-triggered reveals (everything except the hero pair, which is chained after the loader). */
export function initTextReveal() {
  const els = [...document.querySelectorAll('[data-text-reveal]:not([data-hero])')];

  if (REDUCE) {
    document.querySelectorAll('[data-text-reveal]').forEach((el) =>
      gsap.set(el, { visibility: 'visible' }));
    return;
  }

  els.forEach((el) => reveal(el));

  /* Re-split on resize (debounced 200ms) and refresh ScrollTrigger. */
  let t;
  let lastW = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastW) return; // ignore height-only (mobile URL bar)
    lastW = window.innerWidth;
    clearTimeout(t);
    t = setTimeout(() => {
      document.querySelectorAll('[data-text-reveal]').forEach((el) => {
        if (el.__tween) {
          el.__tween.scrollTrigger?.kill();
          el.__tween.kill();
          el.__tween = null;
        }
        if (el.__played || el.hasAttribute('data-hero')) {
          splitLines(el);
          gsap.set(el, { visibility: 'visible' });
        } else {
          reveal(el);
        }
      });
      ScrollTrigger.refresh();
    }, 200);
  });
}

/* Hero chain (§8.2): intro at t=0, display at t=0.15 — called after the loader finishes. */
export function playHeroReveal() {
  const intro = document.querySelector('.hero__intro[data-hero]');
  const display = document.querySelector('.hero__display[data-hero]');
  const para = document.querySelector('.hero__para[data-hero]');

  if (REDUCE) {
    [intro, display].forEach((el) => el && gsap.set(el, { visibility: 'visible' }));
    if (para) gsap.set(para, { opacity: 1, y: 0 });
    return;
  }

  if (intro) reveal(intro, { delay: 0, onScroll: false });
  if (display) reveal(display, { delay: 0.15, onScroll: false });
  if (para) {
    para.__played = true;
    gsap.to(para, { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out', delay: 0.85 });
  }
}
