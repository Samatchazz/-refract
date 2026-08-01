/* ============================================================
   eras.js — §3 era section
   Desktop: pinned ~500vh, snap per era, swap transitions + 4→5 morph.
   Mobile:  horizontal scroll-snap cards, gimmick on active (IO).
   Reduced: static stacked boxes, gimmicks shown in final state.
   Box 5 order is LOAD-BEARING: underline first, engagement after.
   ============================================================ */
import { EASE_PEN, reducedMotion } from './config.js';
import { attachUnderline, drawStroke } from './shared/stroke.js';

const rand = (a, b) => a + Math.random() * (b - a);

/* number count-up helper — mirrors Idiology counters.js grammar
   (duration, power ease, onUpdate writes rounded value). */
function count(el, from, to, opts = {}) {
  const o = { v: from };
  const fmt = opts.pad
    ? (n) => String(Math.round(n)).padStart(opts.pad, '0')
    : (n) => Math.round(n).toLocaleString('en-US');
  el.textContent = fmt(from);
  return gsap.to(o, {
    v: to, duration: opts.duration || 1, ease: opts.ease || 'power1.out', delay: opts.delay || 0,
    onUpdate() { el.textContent = fmt(o.v); }, onComplete: opts.onComplete,
  });
}

export function initEras() {
  const section = document.getElementById('eras');
  const stage = section.querySelector('.era-stage');
  const track = section.querySelector('.era-track');
  const slides = [...track.querySelectorAll('.era-slide')];
  const ticks = [...section.querySelectorAll('.era-progress i')];

  // attach the connecting-thread underline (sacred stroke) to every box's clause
  const underlines = slides.map((s) => {
    const clause = s.querySelector('.u-clause');
    return clause ? attachUnderline(clause) : null;
  });

  const fired = [];            // gimmick-once guard
  const cleanups = [];         // per-slide stop fns (e.g. live counters)

  function fire(i) {
    if (fired[i]) return; fired[i] = true;
    const stop = GIMMICKS[i](slides[i], underlines[i]);
    if (typeof stop === 'function') cleanups[i] = stop;
  }
  function unfire(i) { if (cleanups[i]) { cleanups[i](); cleanups[i] = null; } }
  function setTicks(i) { ticks.forEach((t, n) => t.classList.toggle('on', n === i)); }

  const mobile = window.matchMedia('(max-width: 767px)').matches;

  /* ---------- REDUCED MOTION: static, all boxes, final states ---------- */
  if (reducedMotion) {
    slides.forEach((s, i) => fire(i));
    return;
  }

  /* ---------- MOBILE: swipe cards, gimmick on active via IO ---------- */
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

  /* ---------- DESKTOP: pinned, snap per era, swap/morph ---------- */
  slides.forEach((s, i) => gsap.set(s, { autoAlpha: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.9 }));
  setTicks(0);
  fire(0);
  let current = 0;

  function go(next) {
    if (next === current) return;
    const oldEl = slides[current], newEl = slides[next];
    const morph = (current === 3 && next === 4) || (current === 4 && next === 3); // special 4↔5 morph
    unfire(current);
    fire(next);

    if (morph) {
      // chat window shrinks/reshapes into the feed card
      gsap.to(oldEl, { autoAlpha: 0, scaleX: 0.6, scaleY: 0.82, duration: .45, ease: 'power2.inOut' });
      gsap.fromTo(newEl, { autoAlpha: 0, scaleX: 0.62, scaleY: 0.82 },
        { autoAlpha: 1, scaleX: 1, scaleY: 1, duration: .55, ease: 'power2.out' });
    } else {
      gsap.to(oldEl, { autoAlpha: 0, scale: 0.9, duration: .38, ease: 'power2.inOut' });
      gsap.fromTo(newEl, { autoAlpha: 0, scale: 0.92 },
        { autoAlpha: 1, scale: 1, duration: .5, ease: 'power2.out' });
    }
    setTicks(next);
    current = next;
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: '+=500%',                       // ~500vh pinned (brief §3)
    pin: stage,
    scrub: true,
    snap: { snapTo: 1 / (slides.length - 1), duration: 0.3, ease: 'power1.inOut' },
    onUpdate(self) {
      let idx = Math.round(self.progress * (slides.length - 1));
      if (idx < 0) idx = 0; if (idx > slides.length - 1) idx = slides.length - 1;
      go(idx);
    },
  });
}

/* ============================================================
   GIMMICKS — one per box. Each returns an optional cleanup fn.
   ============================================================ */
const GIMMICKS = [box1, box2, box3, box4, box5];

/* ---- Box 1: book — letterpress phrase-blocks + approval stamp ---- */
function box1(box, underline) {
  const phs = [...box.querySelectorAll('.book-copy .ph')];
  const stamp = box.querySelector('.stamp');
  if (reducedMotion) {
    gsap.set(phs, { opacity: 1 });
    if (underline) underline.path.style.strokeDashoffset = 0;
    return;
  }
  const tl = gsap.timeline();
  phs.forEach((ph, i) => {
    // soft physical thunk per block (not per-char typewriter)
    tl.fromTo(ph, { opacity: 0, scale: 1.06, y: -3 },
      { opacity: 1, scale: 1, y: 0, duration: .22, ease: 'power3.out' }, i * 0.32);
  });
  tl.add(() => { if (underline) drawStroke(underline.path, { duration: .5, ease: EASE_PEN }); }, 0.33);
  // "ผ่านการตรวจ" stamp slams down
  tl.fromTo(stamp, { opacity: 0, scale: 1.4, rotation: -20 },
    { opacity: 1, scale: 1, rotation: -12, duration: .18, ease: 'power4.out' }, '+=0.15');
  // 1-frame shake — manual jitter (RoughEase is EasePack, not core)
  tl.to(stamp, { keyframes: { x: [-4, 3, -2, 1, 0], rotation: [-13.5, -10.5, -12.6, -12] }, duration: .18, ease: 'power1.inOut' });
  return () => tl.kill();
}

/* ---- Box 2: 90s web — hit counter, cursor→link visited ---- */
function box2(box, underline) {
  const counter = box.querySelector('.hit-counter');
  const cursor = box.querySelector('.web-cursor');
  const link = box.querySelector('.web-link[data-visit]');
  if (reducedMotion) {
    counter.textContent = '013370';
    link.classList.add('is-visited');
    if (underline) underline.path.style.strokeDashoffset = 0;
    return;
  }
  count(counter, 0, 13370, { duration: 1.4, ease: 'power2.out', pad: 6 });
  if (underline) drawStroke(underline.path, { duration: .5, ease: EASE_PEN, delay: .3 });
  // pointer travels to the link, clicks, link turns purple
  const lx = link.offsetLeft, ly = link.offsetTop;
  gsap.set(cursor, { opacity: 1, x: 0, y: 0 });
  const tl = gsap.timeline({ delay: .5 });
  tl.to(cursor, { x: lx, y: ly, duration: .9, ease: 'power2.inOut' });
  tl.to(cursor, { scale: .85, duration: .08, yoyo: true, repeat: 1 }); // the click
  tl.add(() => { link.classList.add('is-visited'); });
  tl.to(cursor, { opacity: 0, duration: .3, delay: .2 });
  return () => tl.kill();
}

/* ---- Box 3: webboard — views climb live and never stop; มาใหม่ blinks ---- */
function box3(box, underline) {
  const views = box.querySelector('.views-n');
  const badge = box.querySelector('.board-new');
  if (reducedMotion) {
    views.textContent = (152847).toLocaleString('en-US');
    if (underline) underline.path.style.strokeDashoffset = 0;
    return;
  }
  if (underline) drawStroke(underline.path, { duration: .5, ease: EASE_PEN, delay: .2 });
  badge.classList.add('blink');
  let n = 152847;
  views.textContent = n.toLocaleString('en-US');
  const iv = setInterval(() => {
    n += 1 + Math.floor(Math.random() * 4);   // someone is reading right now
    views.textContent = n.toLocaleString('en-US');
  }, 380);
  return () => clearInterval(iv);   // stop when off screen
}

/* ---- Box 4: MSN — bubbles on typing rhythm; friends go gray but us ---- */
function box4(box, underline) {
  const bubbles = [...box.querySelectorAll('.msn-bubble')];
  const typing = box.querySelector('.msn-typing');
  const friends = [...box.querySelectorAll('.msn-friend:not(.is-us)')];
  if (reducedMotion) {
    gsap.set(bubbles, { opacity: 1, y: 0 });
    friends.forEach((f) => f.classList.add('is-offline'));
    if (underline) underline.path.style.strokeDashoffset = 0;
    return;
  }
  const tl = gsap.timeline();
  bubbles.forEach((b, i) => {
    tl.set(typing, { opacity: 1 });
    tl.to(typing, { opacity: 1, duration: .5 });                  // "typing…" beat
    tl.set(typing, { opacity: 0 });
    tl.fromTo(b, { opacity: 0, y: 8, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: .2, ease: 'back.out(2)' });
    if (i === 0) tl.add(() => { if (underline) drawStroke(underline.path, { duration: .5, ease: EASE_PEN }); });
  });
  friends.forEach((f) => { tl.add(() => { f.classList.add('is-offline'); }, '+=0.35'); });
  return () => tl.kill();
}

/* ---- Box 5: SNS — LOAD-BEARING: underline first, THEN engagement ---- */
function box5(box, underline) {
  const hearts = box.querySelector('.sns-hearts');
  const comments = box.querySelector('.sns-comments');
  const shares = box.querySelector('.sns-shares');
  const notifs = [...box.querySelectorAll('.sns-notif')];

  function erupt() {
    // viral, not metronomic — expo/log-scale acceleration
    count(hearts, 12, 8876, { duration: 1.8, ease: 'expo.out' });         // real figure (easter egg)
    count(comments, 3, 4432, { duration: 1.9, ease: 'expo.out', delay: .15 });
    count(shares, 1, 1204, { duration: 2.0, ease: 'expo.out', delay: .3 });
    notifs.forEach((nf, i) => {
      gsap.fromTo(nf, { opacity: 0, y: 10, scale: .9 },
        { opacity: 1, y: 0, scale: 1, duration: .3, ease: 'back.out(2)', delay: .2 + i * 0.22 });
    });
  }

  if (reducedMotion) {
    if (underline) underline.path.style.strokeDashoffset = 0;
    hearts.textContent = (8876).toLocaleString('en-US');
    comments.textContent = (4432).toLocaleString('en-US');
    shares.textContent = (1204).toLocaleString('en-US');
    gsap.set(notifs, { opacity: 1, y: 0, scale: 1 });
    return;
  }
  // 1) low counts already show. 2) underline draws slowly.
  // 3) ONLY on stroke complete → erupt. Never parallel, never reversed.
  if (underline) {
    drawStroke(underline.path, { duration: 1.1, ease: EASE_PEN, delay: .3, onComplete: erupt });
  } else {
    gsap.delayedCall(1.4, erupt);
  }
}
