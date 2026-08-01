// Smooth scroll — Lenis, lerp 0.08 (brief §4 overrides spec's 0.1).
// Disabled on touch and under reduced-motion (spec §7.1).
// Synced with ScrollTrigger; driven by GSAP's single ticker (spec §3.3).

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { env } from './env.js';

gsap.registerPlugin(ScrollTrigger);

export let lenis = null;

// page scroll progress 0..1, owned by a ScrollTrigger scrub (spec §4.2)
// — the GL choreography reads this instead of touching scrollY itself.
let progress = 0;
export const getScrollProgress = () => progress;

export function initScroll() {
  if (!env.touch && !env.reducedMotion) {
    lenis = new Lenis({ lerp: 0.08 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  ScrollTrigger.create({
    id: 'gl-choreo',
    start: 0,
    end: () => ScrollTrigger.maxScroll(window),
    onUpdate: (self) => { progress = self.progress; },
    onRefresh: (self) => { progress = self.progress; },
  });

  // console-debuggable per the verification workflow
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.lenis = lenis;

  return lenis;
}

/** after barba swaps a container the page height changes — remeasure */
export function refreshScroll() {
  ScrollTrigger.refresh();
}

export function scrollToTop(immediate = true) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo(0, 0);
}

export { gsap, ScrollTrigger };
