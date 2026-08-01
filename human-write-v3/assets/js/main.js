/* Idiology homepage — module init (§8.1 global GSAP setup + wiring). */

import { initTextReveal, playHeroReveal } from './modules/textReveal.js';
import { initBlockReveal } from './modules/blockReveal.js';
import { initParallax } from './modules/parallax.js';
import { initCounters } from './modules/counters.js';
import { initHeader } from './modules/header.js';
import { initCursor } from './modules/cursor.js';
import { initLoader } from './modules/loader.js';
import { initReader } from './modules/reader.js';
import { initStack } from './modules/stack.js';
import { initSplash, initShuffle, initEras as initHWEras, initHeroStroke } from './modules/humanwrite.js';

const ENABLE_PAGE_TRANSITION = false; // §4.2 — flip on for multi-page builds

gsap.registerPlugin(ScrollTrigger, CustomEase);
ScrollTrigger.defaults({ toggleActions: 'play none none none' }); // play once, never reverse

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Fade-up entrances (paragraphs, buttons, footer columns) ---------- */
function initFadeUps() {
  document.querySelectorAll('[data-fade-up]:not([data-hero])').forEach((el) => {
    if (REDUCE) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'expo.out',
      delay: parseFloat(el.dataset.delay || 0),
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });
}

/* ---------- Marquee (§8.6) — JS only clones the single authored logo set ---------- */
function initMarquee() {
  document.querySelectorAll('[data-marquee] .marquee__track').forEach((track) => {
    const set = track.querySelector('.marquee__set');
    if (!set) return;
    const clone = set.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.append(clone);
  });
}

/* ---------- Testimonial slider (§5.6) ---------- */
function initSlider() {
  const el = document.querySelector('[data-testi-swiper]');
  if (!el || typeof Swiper === 'undefined') return;
  new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: false,
    autoHeight: true,
    grabCursor: true,
    keyboard: { enabled: true },
    navigation: {
      prevEl: '[data-testi-prev]',
      nextEl: '[data-testi-next]',
      disabledClass: 'is-disabled',
    },
  });
}

/* ---------- Page transition (§4.2, behind a flag) ---------- */
function initPageTransition() {
  if (!ENABLE_PAGE_TRANSITION) return;
  const overlay = document.querySelector('[data-page-transition]');
  if (!overlay) return;
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || a.target === '_blank' ||
        a.origin !== location.origin ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    overlay.classList.add('is-active');
    setTimeout(() => { location.href = href; }, 350);
  });
}

/* ---------- Footer year ---------- */
function initYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------- Boot ---------- */
async function start() {
  initHeader();
  initCursor();
  initYear();
  initMarquee();
  initSlider();
  initPageTransition();
  initReader();

  /* Split text only once fonts are in — line measurement depends on final metrics. */
  await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 2000))]);

  initTextReveal();
  initBlockReveal();
  initParallax();
  initStack();
  initCounters();
  initFadeUps();
  initHWEras();          // sacred underline per era card + SNS engagement erupt
  ScrollTrigger.refresh();

  /* Hero reveal + shuffle chain strictly AFTER the splash fade completes
     (brief §1→§2). initSplash is the Human-Write drop-in for initLoader. */
  initSplash().then(() => { playHeroReveal(); initHeroStroke(); initShuffle(); });
}

start();
