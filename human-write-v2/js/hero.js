/* ============================================================
   hero.js — §2 hero (5 beats + shuffle loop)
   Beat 1 (the entrance) now uses Idiology's masked line-reveal
   (js/idiology/textReveal.js) on the company-voice text — the
   signature effect — instead of a plain fade. Beats 2–5 (tear, hand
   dash, weight-twitch, sparkle, shuffle) are Human-Write specifics.
   ============================================================ */
import { EASE_PEN, EASE_TEAR, reducedMotion } from './config.js';
import { createStroke, primeStroke, drawStroke } from './shared/stroke.js';
import { revealLines } from './idiology/textReveal.js';

const SHUFFLE = ['แตกต่าง', 'โดดเด่น', 'ถูกจำ', 'เป็นตัวคุณ']; // Mali; เป็นตัวคุณ = brand promise, holds longer
const rand = (a, b) => a + Math.random() * (b - a);

export function initHero() {
  const hero = document.getElementById('hero');
  const left = hero.querySelector('.hero-left');
  const rightText = document.getElementById('hero-right-text');
  const kheed = document.getElementById('word-kheed');
  const dash = hero.querySelector('.hero-dash');
  const shuffleBox = hero.querySelector('.hero-shuffle-box');
  const shuffle = hero.querySelector('.hero-shuffle');

  // dash width target (mobile shortens per brief)
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const dashW = isMobile ? 46 : 92;

  // build the hand dash (sacred stroke) inside the gap
  const stroke = createStroke({ className: 'hero-dash-stroke' });
  dash.appendChild(stroke.svg);
  primeStroke(stroke.path);

  /* ---------- reduced motion: static final state (brief §2) ---------- */
  if (reducedMotion) {
    shuffle.textContent = 'เป็นตัวคุณ';
    gsap.set([left, rightText, shuffle], { visibility: 'visible', opacity: 1 });
    gsap.set(dash, { width: dashW });
    stroke.path.style.strokeDashoffset = 0;
    return;
  }

  gsap.set(shuffleBox, { opacity: 0 });
  gsap.set(dash, { width: 0 });

  // Beat 1 (0–~1s): masked line-reveal — Idiology signature, word-level stagger.
  // left ("เรา" + "ขีด") and the static right phrase reveal as masked lines.
  revealLines(left, { onScroll: false, duration: 0.9 });
  revealLines(rightText, { onScroll: false, delay: 0.12, duration: 0.9 });

  const tl = gsap.timeline({ delay: 0.15 });

  // shuffle word pops in just after the line lifts (kept outside the mask)
  tl.fromTo(shuffleBox, { opacity: 0, scale: .7, y: 6 },
    { opacity: 1, scale: 1, y: 0, duration: .3, ease: EASE_PEN }, 0.55);

  // Beat 2 (0.7–1.3): tear apart — gap opens (viscous ease, pulled not slid)
  tl.to(dash, { width: dashW, duration: .6, ease: EASE_TEAR }, 0.7);
  tl.to(left, { x: isMobile ? 0 : -6, duration: .6, ease: EASE_TEAR }, 0.7);

  // Beat 3 (1.3–2.0): hand dash draws tail-of-ขีด → ให้; ขีด twitches its weight axis
  tl.add(() => { drawStroke(stroke.path, { duration: .6, ease: EASE_PEN }); }, 1.3);
  const wp = { w: 600 };
  tl.to(wp, {
    w: 700, duration: .3, ease: 'power1.inOut', yoyo: true, repeat: 1,
    onUpdate() { kheed.style.fontVariationSettings = "'wght' " + Math.round(wp.w); },
  }, 1.35);

  // Beat 4 (~2.2): แตกต่าง sparkles — 3–4 short hand-drawn ticks, pop & vanish
  tl.add(() => { spark(shuffleBox); }, 2.2);

  // Beat 5 (loop ~2.5): shuffle in plain sight, animate container width, pop swap
  tl.add(() => { startShuffle(shuffle, shuffleBox); }, 2.6);
}

/* hand-drawn sparkle ticks (no gloss — polish belongs to the AI voice) */
function spark(anchor) {
  const NS = 'http://www.w3.org/2000/svg';
  const n = 3 + Math.floor(Math.random() * 2); // 3–4
  for (let i = 0; i < n; i++) {
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'hero-spark');
    svg.setAttribute('viewBox', '0 0 20 20');
    const p = document.createElementNS(NS, 'path');
    p.setAttribute('d', 'M10 2 L10 8 M4 12 L8 10 M16 12 L12 10'); // little hand tick-burst
    p.setAttribute('stroke', 'var(--c-accent)');
    p.setAttribute('stroke-width', '2');
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('fill', 'none');
    svg.appendChild(p);
    const size = rand(14, 22);
    svg.style.width = size + 'px'; svg.style.height = size + 'px';
    svg.style.left = rand(-10, 100) + '%';
    svg.style.top = rand(-60, 10) + '%';
    anchor.appendChild(svg);
    gsap.fromTo(svg,
      { opacity: 0, scale: .3, rotation: rand(-25, 25) },
      { opacity: 1, scale: 1, duration: .18, ease: EASE_PEN, delay: i * 0.06,
        onComplete() {
          gsap.to(svg, { opacity: 0, scale: .6, duration: .25, delay: .15,
            onComplete() { svg.remove(); } });
        } });
  }
}

/* measure a word's rendered width using the live shuffle span */
function measure(span, word) {
  const prev = span.textContent;
  span.textContent = word;
  const w = span.offsetWidth;
  span.textContent = prev;
  return w;
}

function startShuffle(span, box) {
  let i = 0;
  gsap.set(box, { width: measure(span, SHUFFLE[0]) });

  function next() {
    const word = SHUFFLE[i % SHUFFLE.length];
    const isPromise = (word === 'เป็นตัวคุณ');
    const w = measure(span, word);

    const t = gsap.timeline();
    t.to(span, { opacity: 0, scale: .7, rotation: rand(-6, 6), duration: .16, ease: 'power1.in' });
    t.add(() => { span.textContent = word; });
    t.to(box, { width: w, duration: .28, ease: EASE_PEN }, '<');
    t.fromTo(span, { opacity: 0, scale: .7, rotation: rand(-6, 6) },
      { opacity: 1, scale: 1, rotation: 0, duration: .22, ease: EASE_PEN });
    t.to({}, { duration: isPromise ? 2.4 : 1.1 });   // promise word lingers
    t.add(() => { i++; next(); });
  }
  gsap.delayedCall(1.1, () => { i = 1; next(); });
}
