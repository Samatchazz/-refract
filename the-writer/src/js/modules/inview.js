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
  scope.querySelectorAll('.js-in-view:not(.in-view)').forEach((el) => io.observe(el));
}
