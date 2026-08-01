/* Services scroll-stack (Scroll Stack Cards).
   Layout is pure CSS position:sticky — works everywhere, all viewport sizes.
   GSAP only adds depth: as the next card slides over, the covered card
   scales down and dims slightly (scrubbed, so it tracks scroll both ways). */

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initStack() {
  const cards = [...document.querySelectorAll('[data-svc-stack] .svc-card')];
  if (cards.length < 2 || REDUCE) return;

  cards.forEach((card, i) => {
    if (i === cards.length - 1) return; // top card never shrinks
    const next = cards[i + 1];
    /* brightness (not opacity!) — a translucent card would let the one
       beneath ghost through, since stacked cards sit only 12px apart.
       fromTo: GSAP parses an initial "filter: none" as brightness(0). */
    gsap.fromTo(card, { scale: 1, filter: 'brightness(1)' }, {
      scale: 0.95,
      filter: 'brightness(0.82)',
      ease: 'none',
      scrollTrigger: {
        trigger: next,
        start: 'top bottom',
        end: () => 'top top+=' + (120 + i * 12),
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });
}
