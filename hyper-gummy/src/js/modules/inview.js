// In-view entrance system — their `js-in-view` pattern (spec §7.2).
// One-shot: unobserve after firing. Re-initialized per barba container.

let io = null;

export function initInView(scope = document) {
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });
  }
  scope.querySelectorAll('.js-in-view:not(.in-view)').forEach((el) => {
    // anything already inside the first viewport reveals immediately —
    // no waiting on the observer's first tick (throttled tabs, slow devices)
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.92 && r.bottom > 0) el.classList.add('in-view');
    else io.observe(el);
  });
}
