/* Expand-band scrub parallax (§5.2 / §8.4) — desktop, motion-safe only. */

export function initParallax() {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
    // 1) Window expands 40vw -> 100vw as the section scrolls through
    gsap.fromTo('[data-expand-target]', { width: '40vw' }, {
      width: '100vw', ease: 'none',
      scrollTrigger: { trigger: '[data-expand-band]', start: 'top 85%', end: 'top 15%', scrub: true },
    });
    // 2) Background drifts slower than scroll
    gsap.fromTo('[data-parallax-bg]', { yPercent: -10 }, {
      yPercent: 10, ease: 'none',
      scrollTrigger: { trigger: '[data-expand-band]', start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}
