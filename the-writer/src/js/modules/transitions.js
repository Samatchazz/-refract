// Route transitions (spec §6.6, [DECIDED: barba.js]).
// Veil wipe: panel in --c-bg slides up (0.45s) → DOM swaps → veil exits
// upward (0.45s). In the same ~0.9s window the GL nib lifts off the page
// (rotation to vertical, small rise — brief §1) and settles into the new
// page's keyframe pose. The canvas NEVER tears down — only morphs.

import barba from '@barba/core';
import gsap from 'gsap';
import { scrollToTop, refreshScroll } from './scroll.js';
import { env } from './env.js';

const veil = document.querySelector('.transition-veil');

function glStage() {
  return window.__stage || null;
}

/** nib lift-off + settle, matcap flashes wet-ink for the flight */
function glLiftOff() {
  const stage = glStage();
  if (!stage) return;
  stage.setInkwet(true);
  gsap.to(stage, {
    lift: 1,
    duration: 0.45,
    ease: 'power2.in',
  });
}

function glSettle(nextPage) {
  const stage = glStage();
  if (!stage) return;
  stage.page = nextPage; // choreography now resolves against the new page
  stage.headline?.setPage(nextPage);
  gsap.to(stage, {
    lift: 0,
    duration: 0.45,
    ease: 'power3.out',
    onComplete: () => stage.setInkwet(false),
  });
}

function updateHead(nextHtml) {
  const m = nextHtml.match(/<title>([^<]*)<\/title>/i);
  if (m) document.title = m[1];
}

export function initTransitions(onContainerReady) {
  // barba does NOT preventDefault links it declines to handle (same URL,
  // or clicks landing mid-transition) — the browser would full-reload and
  // tear the canvas down. Swallow both cases: the canvas must never die.
  let busy = false;
  barba.hooks.before(() => { busy = true; });
  barba.hooks.after(() => { busy = false; });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-nav]');
    if (!a) return;
    const samePage = new URL(a.href, location.href).pathname === location.pathname;
    if (samePage || busy) e.preventDefault();
  });

  if (env.reducedMotion) {
    // reduced motion: transitions become crossfades (spec §7.5)
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
        glLiftOff();
        await gsap.to(veil, {
          yPercent: 0,
          duration: 0.45,
          ease: 'expo.out',
        });
      },

      async enter({ next }) {
        updateHead(next.html);
        scrollToTop(true);
        refreshScroll(); // new container = new page height for the scrub
        glSettle(next.container.dataset.glPage || next.namespace || 'home');
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
