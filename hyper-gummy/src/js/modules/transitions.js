// Route transitions ([DECIDED: barba.js]).
// Veil wipe: strawberry panel slides up (0.45s) → DOM swaps → veil exits
// upward (0.45s). In the same ~0.9s window the GL bear HOPS — rises,
// spins once, and lands in the new page's keyframe pose. The canvas
// NEVER tears down — only morphs.

import barba from '@barba/core';
import gsap from 'gsap';
import { scrollToTop, refreshScroll, lenis } from './scroll.js';
import { env } from './env.js';

const veil = document.querySelector('.transition-veil');

function glStage() {
  return window.__stage || null;
}

/** bear hop: rise + one full spin, gloss on for the flight */
function glHop() {
  const stage = glStage();
  if (!stage) return;
  stage.setShiny(true);
  stage.jelly.v += 2;
  gsap.to(stage, { lift: 1, duration: 0.45, ease: 'power2.in', overwrite: 'auto' });
  gsap.to(stage, { spin: stage.spin + Math.PI * 2, duration: 0.9, ease: 'power2.inOut' });
}

function glLand(nextPage, candy, color) {
  const stage = glStage();
  if (!stage) return;
  stage.page = nextPage;
  stage.headline?.setPage(nextPage);
  stage.setHeld?.(candy || 'heart', color || '#FF3D8F');
  stage.refreshChapters?.();
  gsap.to(stage, {
    lift: 0,
    duration: 0.45,
    ease: 'power3.out',
    onComplete: () => {
      stage.setShiny(false);
      stage.jelly.v += 2.5; // landing squash
    },
  });
}

export function scrollToHash(hash = location.hash) {
  const el = hash && document.querySelector(hash);
  if (!el) return false;
  const y = el.getBoundingClientRect().top + (window.scrollY || 0) - 24;
  if (lenis) lenis.scrollTo(y, { duration: 1.4 });
  else window.scrollTo({ top: y, behavior: 'smooth' });
  return true;
}

function updateHead(nextHtml) {
  const m = nextHtml.match(/<title>([^<]*)<\/title>/i);
  if (m) document.title = m[1];
}

export function initTransitions(onContainerReady) {
  // barba does NOT preventDefault links it declines to handle (same URL,
  // or clicks landing mid-transition) — the browser would full-reload and
  // tear the canvas down. Swallow both cases.
  let busy = false;
  barba.hooks.before(() => { busy = true; });
  barba.hooks.after(({ next }) => {
    busy = false;
    // belt and braces: never leave two pages stacked in the DOM. Barba removes
    // the old container itself, but if a transition is interrupted (tab
    // backgrounded mid-wipe, a dropped fetch) it can leave one behind, and the
    // reader then sees the next page's sections appended under the current one.
    document.querySelectorAll('[data-barba="container"]').forEach((c) => {
      if (next?.container && c !== next.container) c.remove();
    });
    // land on the anchor only now — while entering, the old container is still
    // in the DOM above the new one, so the target's position would be wrong
    if (location.hash) { refreshScroll(); scrollToHash(location.hash); }
  });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-nav]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    const samePage = url.pathname === location.pathname;
    if (samePage || busy) e.preventDefault();
    // same-page anchor (งาน / เรา on the one-page home): smooth-scroll there
    if (samePage && url.hash && !busy) {
      history.replaceState(null, '', url.hash);
      scrollToHash(url.hash);
    }
  });

  // Safety net for browser back/forward: if the URL changed but the page
  // body did not follow within a moment (e.g. back pressed mid-transition,
  // which barba can drop), fall back to a plain load so the user is never
  // stuck looking at the wrong page under the right URL.
  const expectedNs = (path) => {
    const f = path.replace(/^.*\//, '');
    if (!f || f === 'index.html') return 'home';
    if (f.startsWith('case-')) return 'case';
    return f.replace(/\.html$/, '');
  };
  addEventListener('popstate', () => {
    const target = location.pathname;
    setTimeout(() => {
      if (location.pathname !== target) return; // navigated again meanwhile
      const ns = document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace;
      if (ns && ns !== expectedNs(target)) location.reload();
    }, 2500);
  });

  if (env.reducedMotion) {
    barba.init({
      timeout: 8000,
      transitions: [{
        name: 'crossfade',
        leave: ({ current }) => gsap.to(current.container, { opacity: 0, duration: 0.25 }),
        enter({ next }) {
          updateHead(next.html);
          scrollToTop(true);
          refreshScroll();
          onContainerReady(next.container);
          return gsap.from(next.container, { opacity: 0, duration: 0.25 });
        },
      }],
    });
    return;
  }

  gsap.set(veil, { yPercent: 101 });

  barba.init({
    timeout: 8000,
    prefetchIgnore: false,
    transitions: [{
      name: 'veil-wipe',

      async leave() {
        glHop();
        await gsap.to(veil, {
          yPercent: 0,
          duration: 0.45,
          ease: 'expo.out',
        });
      },

      async enter({ next }) {
        updateHead(next.html);
        scrollToTop(true);
        refreshScroll();
        glLand(next.container.dataset.glPage || next.namespace || 'home', next.container.dataset.glCandy, next.container.dataset.glColor);
        onContainerReady(next.container);
        await gsap.to(veil, {
          yPercent: -101,
          duration: 0.45,
          ease: 'expo.in',
        });
        gsap.set(veil, { yPercent: 101 });
      },
    }],
  });
}
