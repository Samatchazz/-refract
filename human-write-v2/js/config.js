/* ============================================================
   config.js — shared runtime config + the two motion personalities.
   GSAP plugins are registered by an inline classic script in index.html
   BEFORE this module evaluates, so CustomEase.create is safe at eval time.
   (Mirrors Idiology's "global GSAP setup", main.js §8.1.)
   ============================================================ */

/* reduced motion, matched to the pre-paint decision in <head> */
export const reducedMotion = document.documentElement.classList.contains('hw-reduced');

/* --- the two personalities (brief §0) --- */
/* Human hand: pen-on-paper friction (fast start, dragging finish) */
export const EASE_PEN = CustomEase.create('pen', 'M0,0 C0.1,0.8 0.2,1 1,1');
/* "Tear apart" — viscous, pulled not slid (hero beat 2) */
export const EASE_TEAR = CustomEase.create('tear', 'M0,0 C0.7,0 0.85,1 1,1');
/* AI voice uses inline { ease: 'power1.inOut', stagger: 0.05 } where it appears. */
