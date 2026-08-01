/* Count-up counters (§8.5). */

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initCounters() {
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const to = +el.dataset.to;
    const suffix = el.dataset.append || '';

    if (REDUCE) {
      el.textContent = to + suffix;
      return;
    }

    const obj = { v: 0 };
    gsap.to(obj, {
      v: to,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
    });
  });
}
