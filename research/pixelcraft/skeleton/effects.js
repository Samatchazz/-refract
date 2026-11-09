// effects.js — all mechanisms, one shared rAF loop + one IntersectionObserver.
// Every constant is measured (SECTIONS.md Table B) or explicitly declared approximate.
// Thai rule (BRIEF §6.5): no character splitting without Intl.Segmenter; line-level fallback.

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOBILE = matchMedia('(max-width: 768px)');

// Tunable constants — the ?debug panel writes here and to the CSS vars.
export const CONFIG = {
  revealDurS: 1.25,      // measured
  revealDistPx: 60,      // declared approximation
  staggerMs: 200,        // measured
  hlDurS: 0.6,           // not measured — chosen
  ioThreshold: 0.18,
  marqueeMul: 1,         // multiplies measured px/s (45.1 / 75.2)
  parallaxMul: 1,        // multiplies speed×100px law
  conveyorStepMs: 10500, // measured 10000ms transition + 500ms autoplay
  typedDelayMs: 2500,    // measured
  typedMsPerGrapheme: 60,// not measured — chosen
  counterDurMs: 2000,    // measured
  popupDelayS: 20,       // source serialized "200" without units — chosen 20s
  accGrow: 3,
};
const setVar = (k, v) => document.documentElement.style.setProperty(k, v);
export function applyConfig() {
  setVar('--dur-reveal', CONFIG.revealDurS + 's');
  setVar('--dist-reveal', CONFIG.revealDistPx + 'px');
  setVar('--stagger', CONFIG.staggerMs + 'ms');
  setVar('--dur-hl', CONFIG.hlDurS + 's');
  setVar('--acc-grow', CONFIG.accGrow);
  marquees.forEach(setMarqueeSpeed);
}

// ---------- token boxes: reserve width from data-approx-chars ----------
for (const el of document.querySelectorAll('[data-approx-chars]'))
  el.style.setProperty('--approx', el.getAttribute('data-approx-chars'));

// ---------- E20/E21/E30 — one IntersectionObserver ----------
const revealables = [];
for (const el of document.querySelectorAll('[data-effect~="E20"]')) revealables.push(el);
for (const parent of document.querySelectorAll('[data-stagger]')) {
  [...parent.children].forEach((c, i) => {
    c.style.setProperty('--fx-delay', (i * CONFIG.staggerMs) + 'ms');
    revealables.push(c);
  });
}
for (const el of document.querySelectorAll('.hl-host')) revealables.push(el);
const counters = document.querySelectorAll('[data-effect~="E32"]');
counters.forEach(el => revealables.push(el));

if (!REDUCED) revealables.forEach(el => { if (!el.classList.contains('hl-host')) el.classList.add('fx-hidden'); });

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const el = e.target;
    io.unobserve(el);
    if (el.classList.contains('hl-host')) { el.classList.add('is-in'); continue; }
    el.classList.remove('fx-hidden'); el.classList.add('fx-in');
    if (el.dataset.effect && el.dataset.effect.includes('E32')) runCounter(el);
  }
}, { threshold: CONFIG.ioThreshold });
revealables.forEach(el => io.observe(el));

// ---------- E32 counter ----------
function runCounter(el) {
  const to = +el.dataset.counterTo || 0;
  const dur = +el.dataset.counterDur || CONFIG.counterDurMs;
  if (REDUCED) { el.textContent = to; return; }
  const t0 = performance.now();
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); // ease-out; source tween curve not measured
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ---------- E33 marquee: duplicate track once (measured: 2 copies), honor px/s ----------
const marquees = [...document.querySelectorAll('[data-effect~="E33"]')];
function setMarqueeSpeed(m) {
  const track = m.querySelector('.marquee-track');
  const pps = (+m.dataset.marqueePps || 45) * CONFIG.marqueeMul;
  const half = track.scrollWidth / (track.dataset.dup ? 2 : 1);
  m.style.setProperty('--marq-gap', (m.dataset.marqueeGap || 120) + 'px');
  m.style.setProperty('--marq-dur', (half / pps) + 's');
}
for (const m of marquees) {
  const track = m.querySelector('.marquee-track');
  track.innerHTML += track.innerHTML.replace(/data-token(-dup)?=/g, 'data-token-dup='); // copies must not duplicate tokens
  track.dataset.dup = '1';
  setMarqueeSpeed(m);
}

// ---------- E31 typed rotator (grapheme-safe) ----------
(() => {
  const host = document.querySelector('[data-effect~="E31"]');
  if (!host) return;
  const words = [...host.querySelectorAll('.typed-item')].map(x => x.textContent.trim());
  if (!words.length) return;
  const live = document.createElement('span');
  live.className = 'live';
  host.prepend(live);
  if (REDUCED) { live.textContent = words[0]; return; }
  const seg = ('Segmenter' in Intl) ? new Intl.Segmenter('th', { granularity: 'grapheme' }) : null;
  const graphemes = (s) => seg ? [...seg.segment(s)].map(x => x.segment) : null;
  let wi = 0;
  const showWord = () => {
    const w = words[wi % words.length]; wi++;
    const gs = /[฀-๿]/.test(w) && !seg ? null : graphemes(w);
    if (!gs) { // Thai without Segmenter → line-level fallback (§6.5): fade whole word
      live.textContent = w;
      setTimeout(showWord, +host.dataset.typedDelay || CONFIG.typedDelayMs);
      return;
    }
    let i = 0;
    const type = () => {
      live.textContent = gs.slice(0, ++i).join('');
      if (i < gs.length) setTimeout(type, CONFIG.typedMsPerGrapheme);
      else setTimeout(erase, +host.dataset.typedDelay || CONFIG.typedDelayMs);
    };
    const erase = () => {
      const cur = graphemes(live.textContent) || [];
      cur.pop(); live.textContent = cur.join('');
      if (cur.length) setTimeout(erase, CONFIG.typedMsPerGrapheme / 2);
      else showWord();
    };
    type();
  };
  showWord();
})();

// ---------- E22 accordion: touch/click support on top of CSS hover ----------
for (const acc of document.querySelectorAll('[data-effect~="E22"]')) {
  acc.addEventListener('click', (e) => {
    const pane = e.target.closest('.pane');
    if (!pane) return;
    acc.querySelectorAll('.pane').forEach(p => p.classList.toggle('active', p === pane));
  });
}

// ---------- E51 before/after (click + drag + keyboard) ----------
for (const ba of document.querySelectorAll('[data-effect~="E51"]')) {
  const set = (pct) => {
    pct = Math.max(2, Math.min(98, pct));
    ba.style.setProperty('--ba', pct + '%');
    ba.querySelector('.ba-handle').setAttribute('aria-valuenow', Math.round(pct));
  };
  set(+ba.dataset.baOffset || 55); // measured default 55%
  const fromEvent = (e) => set(((e.clientX - ba.getBoundingClientRect().left) / ba.clientWidth) * 100);
  ba.addEventListener('pointerdown', (e) => { fromEvent(e); ba.setPointerCapture(e.pointerId); ba.addEventListener('pointermove', fromEvent); });
  ba.addEventListener('pointerup', () => ba.removeEventListener('pointermove', fromEvent));
  ba.querySelector('.ba-handle').addEventListener('keydown', (e) => {
    const cur = parseFloat(getComputedStyle(ba).getPropertyValue('--ba'));
    if (e.key === 'ArrowLeft') set(cur - 4);
    if (e.key === 'ArrowRight') set(cur + 4);
  });
}

// ---------- E61 timed popup ----------
(() => {
  const pop = document.querySelector('[data-effect~="E61"]');
  if (!pop) return;
  const close = () => { pop.hidden = true; document.removeEventListener('keydown', onEsc); };
  const onEsc = (e) => { if (e.key === 'Escape') close(); };
  setTimeout(() => {
    if (document.body.classList.contains('popup-off')) return;
    pop.hidden = false;
    pop.querySelector('.pop-close').focus();
    document.addEventListener('keydown', onEsc);
  }, CONFIG.popupDelayS * 1000);
  pop.querySelector('.pop-close').addEventListener('click', close);
  pop.addEventListener('click', (e) => { if (e.target === pop) close(); });
})();

// ---------- E62 offcanvas ----------
(() => {
  const btn = document.querySelector('.burger');
  const oc = document.getElementById('offcanvas');
  if (!btn || !oc) return;
  const setOpen = (open) => {
    oc.hidden = false;
    requestAnimationFrame(() => oc.classList.toggle('open', open));
    btn.setAttribute('aria-expanded', open);
    if (!open) setTimeout(() => { oc.hidden = true; }, 400);
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  oc.querySelector('.oc-close').addEventListener('click', () => setOpen(false));
})();

// ---------- shared rAF loop: E11 parallax · E12 fixed cluster · E50 conveyor · E52 drift ----------
const parallaxEls = [...document.querySelectorAll('[data-scroll-speed]')];
const cluster = document.querySelector('[data-effect~="E12"]');
const conveyors = [...document.querySelectorAll('[data-effect~="E50"]')].map(c => {
  const track = c.querySelector('.conveyor-track');
  // duplicate slides so the loop can wrap seamlessly
  track.innerHTML += track.innerHTML.replace(/data-token(-dup)?=/g, 'data-token-dup=');
  return { c, track, offset: 0, half: 0 };
});
const drift = document.querySelector('[data-effect~="E52"]');

// cubic-bezier evaluator for E12's measured curve (0.39,-0.06,0.54,1.17)
function bezierY(p, x1, y1, x2, y2) {
  // solve t for x=p (Newton), then return y(t)
  let t = p;
  for (let i = 0; i < 5; i++) {
    const x = 3 * (1 - t) ** 2 * t * x1 + 3 * (1 - t) * t * t * x2 + t ** 3;
    const dx = 3 * (1 - t) ** 2 * x1 + 6 * (1 - t) * t * (x2 - x1) + 3 * t * t * (1 - x2);
    if (Math.abs(dx) < 1e-6) break;
    t -= (x - p) / dx;
    t = Math.max(0, Math.min(1, t));
  }
  return 3 * (1 - t) ** 2 * t * y1 + 3 * (1 - t) * t * t * y2 + t ** 3;
}

let lastT = performance.now();
function frame(t) {
  const dt = Math.min(0.1, (t - lastT) / 1000); lastT = t;
  const vh = innerHeight, doc = document.documentElement;
  const maxScroll = doc.scrollHeight - vh;
  const y = scrollY;

  if (!REDUCED && !MOBILE.matches) {
    // E11 — linear translateY over viewport traversal; travel = speed×100px (measured law)
    for (const el of parallaxEls) {
      const r = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, 1 - (r.top + r.height / 2) / (vh + r.height))); // 0 enter → 1 exit
      const travel = (+el.dataset.scrollSpeed || 1) * 100 * CONFIG.parallaxMul;
      el.style.translate = `0 ${(-travel * (p - 0.5)).toFixed(1)}px`;
    }
    // E12 — appear over 10–20% of page scroll with the measured bezier
    if (cluster) {
      const frac = maxScroll ? y / maxScroll : 0;
      const p = Math.max(0, Math.min(1, (frac - 0.10) / 0.10));
      const e = bezierY(p, 0.39, -0.06, 0.54, 1.17);
      cluster.style.opacity = e.toFixed(3);
      cluster.style.translate = `0 ${(40 * (1 - e)).toFixed(1)}px`;
    }
    // E52 — sine drift ±5%, period ~16s (measured)
    if (drift) {
      const s = t / 1000 * (2 * Math.PI / 16);
      drift.style.translate = `${(Math.sin(s) * 5).toFixed(2)}% ${(Math.cos(s * 0.8) * 5).toFixed(2)}%`;
    }
  }
  // E50 — continuous conveyor: one step (slide+gap) per stepMs (measured 10.5s)
  if (!REDUCED) {
    for (const cv of conveyors) {
      const slide = cv.track.firstElementChild;
      if (!slide) continue;
      const gap = +cv.c.dataset.conveyorGap || 80;
      const stepPx = slide.getBoundingClientRect().width + gap;
      cv.half = cv.track.scrollWidth / 2;
      cv.offset = (cv.offset + stepPx * (dt * 1000) / CONFIG.conveyorStepMs) % cv.half;
      cv.track.style.transform = `translateX(${(-cv.offset).toFixed(1)}px)`;
    }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
applyConfig();
