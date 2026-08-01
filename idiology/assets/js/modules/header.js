/* Header sticky shrink (§5.0 / §8.7) + mobile overlay menu. */

export function initHeader() {
  const header = document.querySelector('[data-header]');
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!header) return;

  /* Sticky shrink with 4px hysteresis (on at >30, off at <26). */
  let sticky = false;
  const onScroll = () => {
    const y = window.scrollY;
    if (!sticky && y > 30) {
      sticky = true;
      header.classList.add('is-sticky');
      header.classList.remove('is-transparent');
    } else if (sticky && y < 26) {
      sticky = false;
      header.classList.remove('is-sticky');
      header.classList.add('is-transparent');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  if (burger && menu) {
    const setOpen = (open) => {
      burger.classList.toggle('is-open', open);
      menu.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () =>
      setOpen(!menu.classList.contains('is-open')));
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });
  }
}
