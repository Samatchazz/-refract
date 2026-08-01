/* ============================================================
   humanwrite.js — Human-Write identity behaviours layered on Idiology.
   - initSplash()  : plays the brief §1 splash inside the .loader overlay,
                     returns a Promise (drop-in for Idiology's initLoader).
   - initShuffle() : cycles the hero accent word (Mali, brief §2).
   - initEras()    : draws the sacred connecting-thread underline on every
                     era clause; on the SNS card, engagement erupts AFTER the
                     stroke completes (brief §3 box 5 — order is load-bearing).
   Uses global gsap / ScrollTrigger / CustomEase (registered in main.js).
   ============================================================ */

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SPLASH_COUNT = 9000000;      // brief §1 LOCKED (MI Group 2026)
const SEEN_KEY = 'hw-splash-seen';
const rand = (a, b) => a + Math.random() * (b - a);

let _pen;
const pen = () => _pen || (_pen = CustomEase.create('penHW', 'M0,0 C0.1,0.8 0.2,1 1,1'));

/* --- the one sacred stroke (identical path everywhere) --- */
const STROKE_PATH = 'M5,13 C42,7 74,17 112,11 C150,5 176,18 214,12 C250,6 274,15 296,10';
function makeStroke(cls) {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 300 24');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('class', 'hw-stroke' + (cls ? ' ' + cls : ''));
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(NS, 'path');
  path.setAttribute('d', STROKE_PATH);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'var(--stroke-color)');
  path.setAttribute('stroke-width', 'var(--stroke-w)');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('vector-effect', 'non-scaling-stroke');
  svg.appendChild(path);
  return { svg, path };
}
function prime(path) { const len = path.getTotalLength(); path.style.strokeDasharray = len; path.style.strokeDashoffset = len; return len; }
function draw(path, opts = {}) {
  prime(path);
  if (REDUCE) { path.style.strokeDashoffset = 0; if (opts.onComplete) opts.onComplete(); return null; }
  return gsap.to(path, { strokeDashoffset: 0, duration: opts.duration || 0.6, ease: opts.ease || pen(), delay: opts.delay || 0, onComplete: opts.onComplete });
}

/* ============================================================
   SPLASH (brief §1) — returns a Promise; resolves at the hard cut.
   ============================================================ */
export function initSplash() {
  const el = document.querySelector('[data-hw-splash]');
  if (!el) return Promise.resolve();

  let seen = false;
  try { seen = !!sessionStorage.getItem(SEEN_KEY); } catch (e) {}
  try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (e) {}

  const finishFast = () => {
    el.classList.add('is-done');
    return new Promise((r) => setTimeout(() => { el.classList.add('is-hidden'); r(); }, REDUCE ? 0 : 300));
  };

  // reduced motion OR already seen this session → skip the show
  if (REDUCE || seen) return new Promise((r) => setTimeout(() => finishFast().then(r), 150));

  const countEl = el.querySelector('[data-splash-count]');
  const crossHolder = el.querySelector('[data-splash-cross]');
  const pct = el.querySelector('[data-splash-pct]');
  const capa = el.querySelector('[data-splash-capa]');
  const capb = el.querySelector('[data-splash-capb]');
  const ai = el.querySelector('[data-splash-ai]');
  const human = el.querySelector('[data-splash-human]');
  const eraser = el.querySelector('[data-splash-eraser]');

  // split Latin logo into chars (Latin — safe)
  const chars = [...human.textContent].map((c) => {
    const s = document.createElement('span'); s.className = 'lh-ch'; s.textContent = c; return s;
  });
  human.textContent = ''; chars.forEach((c) => human.appendChild(c));

  const cross = makeStroke('splash-cross'); crossHolder.appendChild(cross.svg); prime(cross.path);
  cross.svg.style.width = '100%'; cross.svg.style.height = '100%'; cross.svg.style.position = 'absolute'; cross.svg.style.inset = '0';

  // skip button
  const skip = document.createElement('button');
  skip.className = 'hw-splash__skip'; skip.type = 'button'; skip.textContent = 'ข้าม';
  el.appendChild(skip);

  return new Promise((resolve) => {
    let done = false;
    const finish = () => { if (done) return; done = true; finishFast().then(resolve); };

    gsap.set([pct, capa, capb, human], { opacity: 0 });
    gsap.set(ai, { opacity: 1, clipPath: 'inset(0 0 0 0)' });
    gsap.set(chars, { opacity: 0, scale: .8 });
    if (eraser) gsap.set(eraser, { opacity: 0, xPercent: -150, yPercent: -50 });

    const counter = { v: 0 };
    const tl = gsap.timeline({ onComplete: finish });
    // number count-up (AI voice)
    tl.to(counter, { v: SPLASH_COUNT, duration: 1.2, ease: 'power2.out',
      onUpdate() { countEl.textContent = Math.round(counter.v).toLocaleString('en-US'); } }, 0.2);
    tl.to(capa, { opacity: 1, duration: .4, ease: 'power1.inOut' }, 0.2);
    // cross out → 0.1% + caption b (human hand)
    tl.add(() => draw(cross.path, { duration: .55, ease: pen() }), 1.5);
    tl.fromTo(pct, { opacity: 0, scale: .7, rotation: -10 }, { opacity: 1, scale: 1, rotation: -4, duration: .35, ease: pen() }, 1.8);
    tl.to(capb, { opacity: 1, duration: .3, ease: pen() }, 1.85);
    // logo: the ERASER wipes Ai-Write out L→R (clip synced), leaving a faint ghost
    if (eraser) {
      tl.to(eraser, { opacity: 1, duration: .1 }, 0.66);
      tl.to(eraser, { xPercent: 150, duration: .52, ease: 'power1.inOut' }, 0.7);
      tl.to(eraser, { opacity: 0, duration: .14 }, 1.15);
    }
    tl.to(ai, { clipPath: 'inset(0 0 0 100%)', opacity: .18, duration: .5, ease: 'power1.inOut' }, 0.7);
    tl.set(human, { opacity: 1 }, 1.15);
    let t = 1.15;
    chars.forEach((ch) => {
      tl.fromTo(ch, { opacity: 0, scale: .8, rotation: rand(-3, 3), y: rand(-6, 6) },
        { opacity: 1, scale: 1, rotation: rand(-2, 2), y: rand(-2, 2), duration: .4, ease: pen() }, t);
      t += rand(0.045, 0.085);
    });
    tl.to({}, { duration: .5 }, 2.7); // hold

    skip.addEventListener('click', () => { tl.kill(); finish(); });
  });
}

/* ============================================================
   HERO shuffle accent word (Mali) — brief §2
   ============================================================ */
const SHUFFLE = ['แตกต่าง', 'โดดเด่น', 'ถูกจำ', 'เป็นตัวคุณ'];
export function initShuffle() {
  const em = document.querySelector('[data-shuffle]');
  if (!em || REDUCE) { if (em) em.textContent = 'เป็นตัวคุณ'; return; }
  let i = 0;
  const step = () => {
    const word = SHUFFLE[i % SHUFFLE.length];
    const isPromise = word === 'เป็นตัวคุณ';
    const tl = gsap.timeline();
    tl.to(em, { opacity: 0, y: -6, duration: .18, ease: 'power2.out' }); // ease-out on exit (Emil: never ease-in on UI)
    tl.add(() => { em.textContent = word; });
    tl.fromTo(em, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .24, ease: pen() });
    tl.to({}, { duration: isPromise ? 2.6 : 1.2 });
    tl.add(() => { i++; step(); });
  };
  gsap.delayedCall(2.4, () => { i = 1; step(); }); // let the hero reveal settle first
}

/* ============================================================
   HERO — the word ขีด "releases" the hand stroke (brief §2 beat 3):
   the hyphen/dash IS the sacred stroke, drawn from the tail of ขีด;
   ขีด twitches its Anuphan weight axis as it lets go.
   ============================================================ */
export function initHeroStroke() {
  const dash = document.querySelector('.hero-dash');
  const kheed = document.querySelector('.hero-kheed');
  if (!dash) return;
  const s = makeStroke('hero-dash-stroke');
  dash.appendChild(s.svg); prime(s.path);
  if (REDUCE) { s.path.style.strokeDashoffset = 0; return; }
  draw(s.path, { duration: .6, ease: pen(), delay: 1.0 });   // after the line-reveal settles
  if (kheed) {
    const wp = { w: 600 };
    gsap.to(wp, { w: 760, duration: .3, ease: 'power1.inOut', yoyo: true, repeat: 1, delay: 1.0,
      onUpdate() { kheed.style.fontVariationSettings = "'wght' " + Math.round(wp.w); } });
  }
}

/* ============================================================
   ERAS (brief §3) — single centered box, swap per era, morph 4→5.
   5 real coded retro boxes, one gimmick each. Box 5 order is
   LOAD-BEARING: underline completes FIRST, engagement erupts AFTER.
   Ported from human-write-v2/js/eras.js.
   ============================================================ */
function attachUnderline(clause) {
  clause.classList.add('has-underline');
  const s = makeStroke('clause-stroke');
  clause.appendChild(s.svg); prime(s.path);
  return s;
}
function countEra(el, from, to, opts = {}) {
  const o = { v: from };
  const fmt = opts.pad ? (n) => String(Math.round(n)).padStart(opts.pad, '0')
                       : (n) => Math.round(n).toLocaleString('en-US');
  el.textContent = fmt(from);
  return gsap.to(o, { v: to, duration: opts.duration || 1, ease: opts.ease || 'power1.out',
    delay: opts.delay || 0, onUpdate() { el.textContent = fmt(o.v); }, onComplete: opts.onComplete });
}

export function initEras() {
  const section = document.getElementById('eras');
  if (!section) return;
  const stage = section.querySelector('.era-stage');
  const track = section.querySelector('.era-track');
  const slides = [...track.querySelectorAll('.era-slide')];
  const ticks = [...section.querySelectorAll('.era-progress i')];

  const underlines = slides.map((s) => {
    const clause = s.querySelector('.u-clause');
    return clause ? attachUnderline(clause) : null;
  });

  const fired = [];
  const cleanups = [];
  function fire(i) { if (fired[i]) return; fired[i] = true; const stop = GIMMICKS[i](slides[i], underlines[i]); if (typeof stop === 'function') cleanups[i] = stop; }
  function unfire(i) { if (cleanups[i]) { cleanups[i](); cleanups[i] = null; } }
  function setTicks(i) { ticks.forEach((t, n) => t.classList.toggle('on', n === i)); }

  const mobile = window.matchMedia('(max-width: 767px)').matches;

  if (REDUCE) { slides.forEach((s, i) => fire(i)); return; }

  if (mobile) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const i = slides.indexOf(e.target);
        if (e.isIntersecting && e.intersectionRatio > 0.6) { fire(i); setTicks(i); }
        else if (!e.isIntersecting) { unfire(i); }
      });
    }, { root: track, threshold: [0, 0.6, 1] });
    slides.forEach((s) => io.observe(s));
    setTicks(0);
    return;
  }

  // desktop: pinned, snap per era, swap + 4↔5 morph
  slides.forEach((s, i) => gsap.set(s, { autoAlpha: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.9 }));
  setTicks(0); fire(0);
  let current = 0;

  function go(next) {
    if (next === current) return;
    const oldEl = slides[current], newEl = slides[next];
    const morph = (current === 3 && next === 4) || (current === 4 && next === 3);
    unfire(current); fire(next);
    if (morph) {
      gsap.to(oldEl, { autoAlpha: 0, scaleX: 0.6, scaleY: 0.82, duration: .45, ease: 'power2.inOut' });
      gsap.fromTo(newEl, { autoAlpha: 0, scaleX: 0.62, scaleY: 0.82 }, { autoAlpha: 1, scaleX: 1, scaleY: 1, duration: .55, ease: 'power2.out' });
    } else {
      gsap.to(oldEl, { autoAlpha: 0, scale: 0.9, duration: .38, ease: 'power2.inOut' });
      gsap.fromTo(newEl, { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: .5, ease: 'power2.out' });
    }
    setTicks(next); current = next;
  }

  // Smooth hand-off from the light hero above: it recedes (fade + scale + blur)
  // as the dark era rises, so there is no hard light→dark cut at the boundary.
  const hero = document.getElementById('home');
  if (hero) {
    gsap.to(hero, {
      opacity: 0.12, scale: 0.965, y: -30, ease: 'none',   // GPU-only (dropped per-frame blur repaint)
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'top top', scrub: true },
    });
  }

  ScrollTrigger.create({
    trigger: section, start: 'top top', end: '+=500%', pin: stage,
    scrub: 0.6,            // smoothing catch-up instead of instant (removes jerk)
    anticipatePin: 1,      // GSAP: avoids the pin "jump" as it engages
    snap: { snapTo: 1 / (slides.length - 1), duration: { min: 0.2, max: 0.5 }, ease: 'power1.inOut' },
    onUpdate(self) { let idx = Math.round(self.progress * (slides.length - 1)); if (idx < 0) idx = 0; if (idx > slides.length - 1) idx = slides.length - 1; go(idx); },
  });
}

const GIMMICKS = [box1, box2, box3, box4, box5];

/* Box 1: book — letterpress phrase-blocks + approval stamp */
function box1(box, underline) {
  const phs = [...box.querySelectorAll('.book-copy .ph')];
  const stamp = box.querySelector('.stamp');
  if (REDUCE) { gsap.set(phs, { opacity: 1 }); if (underline) underline.path.style.strokeDashoffset = 0; return; }
  const tl = gsap.timeline();
  phs.forEach((ph, i) => { tl.fromTo(ph, { opacity: 0, scale: 1.06, y: -3 }, { opacity: 1, scale: 1, y: 0, duration: .22, ease: 'power3.out' }, i * 0.32); });
  tl.add(() => { if (underline) draw(underline.path, { duration: .5, ease: pen() }); }, 0.33);
  tl.fromTo(stamp, { opacity: 0, scale: 1.4, rotation: -20 }, { opacity: 1, scale: 1, rotation: -12, duration: .18, ease: 'power4.out' }, '+=0.15');
  tl.to(stamp, { keyframes: { x: [-4, 3, -2, 1, 0], rotation: [-13.5, -10.5, -12.6, -12] }, duration: .18, ease: 'power1.inOut' });
  return () => tl.kill();
}

/* Box 2: 90s web — hit counter, cursor→link visited */
function box2(box, underline) {
  const counter = box.querySelector('.hit-counter');
  const cursor = box.querySelector('.web-cursor');
  const link = box.querySelector('.web-link[data-visit]');
  if (REDUCE) { counter.textContent = '013370'; link.classList.add('is-visited'); if (underline) underline.path.style.strokeDashoffset = 0; return; }
  countEra(counter, 0, 13370, { duration: 1.4, ease: 'power2.out', pad: 6 });
  if (underline) draw(underline.path, { duration: .5, ease: pen(), delay: .3 });
  const lx = link.offsetLeft, ly = link.offsetTop;
  gsap.set(cursor, { opacity: 1, x: 0, y: 0 });
  const tl = gsap.timeline({ delay: .5 });
  tl.to(cursor, { x: lx, y: ly, duration: .9, ease: 'power2.inOut' });
  tl.to(cursor, { scale: .85, duration: .08, yoyo: true, repeat: 1 });
  tl.add(() => { link.classList.add('is-visited'); });
  tl.to(cursor, { opacity: 0, duration: .3, delay: .2 });

  // sites being born & dying — popups spawn and vanish while on screen
  const popLayer = box.querySelector('.web-popups');
  let popIv;
  if (popLayer) {
    const titles = ['GeoCities', 'ThaiCafe', '~mypage~', 'WebRing', 'Guestbook', 'ICQ 2000', 'Under Constr.'];
    const spawn = () => {
      const p = document.createElement('div');
      p.className = 'web-popup';
      p.innerHTML = '<div class="bar"><span>' + titles[Math.floor(Math.random() * titles.length)] + '</span><span>×</span></div><div class="pbody"></div>';
      p.style.left = rand(4, 68) + '%'; p.style.top = rand(8, 60) + '%';
      popLayer.appendChild(p);
      gsap.fromTo(p, { opacity: 0, scale: .6 }, { opacity: 1, scale: 1, duration: .25, ease: 'back.out(2)',
        onComplete() { gsap.to(p, { opacity: 0, scale: .7, duration: .3, delay: rand(.7, 1.8), onComplete() { p.remove(); } }); } });
    };
    popIv = setInterval(spawn, 850);
  }
  return () => { tl.kill(); if (popIv) clearInterval(popIv); if (popLayer) popLayer.innerHTML = ''; };
}

/* Box 3: webboard — views climb live and never stop; มาใหม่ blinks */
function box3(box, underline) {
  const views = box.querySelector('.views-n');
  const badge = box.querySelector('.board-new');
  const replies = [...box.querySelectorAll('.board-reply-row')];
  if (REDUCE) {
    views.textContent = (152847).toLocaleString('en-US');
    gsap.set(replies, { opacity: 1, y: 0 });
    if (underline) underline.path.style.strokeDashoffset = 0; return;
  }
  if (underline) draw(underline.path, { duration: .5, ease: pen(), delay: .2 });
  badge.classList.add('blink');
  let n = 152847;
  views.textContent = n.toLocaleString('en-US');
  const iv = setInterval(() => { n += 1 + Math.floor(Math.random() * 4); views.textContent = n.toLocaleString('en-US'); }, 380);
  // replies grow at the tail one by one
  gsap.set(replies, { opacity: 0, y: 8 });
  const rtl = gsap.timeline();
  replies.forEach((r) => { rtl.fromTo(r, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .3, ease: 'power2.out' }, '+=' + (0.7 + Math.random() * 0.7)); });
  return () => { clearInterval(iv); rtl.kill(); };
}

/* Box 4: MSN — bubbles on typing rhythm; friends go gray but us */
function box4(box, underline) {
  const bubbles = [...box.querySelectorAll('.msn-bubble')];
  const typing = box.querySelector('.msn-typing');
  const friends = [...box.querySelectorAll('.msn-friend:not(.is-us)')];
  if (REDUCE) { gsap.set(bubbles, { opacity: 1, y: 0 }); friends.forEach((f) => f.classList.add('is-offline')); if (underline) underline.path.style.strokeDashoffset = 0; return; }
  const tl = gsap.timeline();
  bubbles.forEach((b, i) => {
    tl.set(typing, { opacity: 1 });
    tl.to(typing, { opacity: 1, duration: .5 });
    tl.set(typing, { opacity: 0 });
    tl.fromTo(b, { opacity: 0, y: 8, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: .2, ease: 'back.out(2)' });
    if (i === 0) tl.add(() => { if (underline) draw(underline.path, { duration: .5, ease: pen() }); });
  });
  friends.forEach((f) => { tl.add(() => { f.classList.add('is-offline'); }, '+=0.35'); });
  // classic MSN "nudge" — the whole window shakes once
  const win = box.querySelector('.era-box');
  tl.add(() => { if (win) gsap.fromTo(win, { x: 0 }, { keyframes: { x: [-7, 6, -5, 4, -2, 0] }, duration: .5, ease: 'power1.inOut' }); }, '+=0.4');
  return () => tl.kill();
}

/* Box 5: SNS — LOAD-BEARING: underline first, THEN engagement */
function box5(box, underline) {
  const hearts = box.querySelector('.sns-hearts');
  const comments = box.querySelector('.sns-comments');
  const shares = box.querySelector('.sns-shares');
  const notifs = [...box.querySelectorAll('.sns-notif')];
  function erupt() {
    countEra(hearts, 12, 8876, { duration: 1.8, ease: 'expo.out' });
    countEra(comments, 3, 4432, { duration: 1.9, ease: 'expo.out', delay: .15 });
    countEra(shares, 1, 1204, { duration: 2.0, ease: 'expo.out', delay: .3 });
    // accelerating burst (gaps shrink), not metronomic — brief §3 + Emil §Stagger
    notifs.forEach((nf, i) => { gsap.fromTo(nf, { opacity: 0, y: 10, scale: .92 }, { opacity: 1, y: 0, scale: 1, duration: .3, ease: 'back.out(1.5)', delay: .2 + i * 0.12 - i * i * 0.012 }); });
  }
  if (REDUCE) {
    if (underline) underline.path.style.strokeDashoffset = 0;
    hearts.textContent = (8876).toLocaleString('en-US');
    comments.textContent = (4432).toLocaleString('en-US');
    shares.textContent = (1204).toLocaleString('en-US');
    gsap.set(notifs, { opacity: 1, y: 0, scale: 1 });
    return;
  }
  if (underline) draw(underline.path, { duration: 1.1, ease: pen(), delay: .3, onComplete: erupt });
  else gsap.delayedCall(1.4, erupt);
}
