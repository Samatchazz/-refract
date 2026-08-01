// Human-Write — app glue (spec §2.3, §7). Target < 8 KB of our own code.
import Swup from 'swup';
import SwupPreloadPlugin from '@swup/preload-plugin';

// Single source of truth for the footer scarcity banner (brief §2.8).
const AVAILABILITY = 'รอบนี้รับ 6 คู่ — เปิดรอบถัดไป ตุลาคม 2026';

const supportsVT = 'startViewTransition' in document;
document.documentElement.classList.toggle('has-vt', supportsVT);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

// Same-document view transition helper: falls back to an instant swap.
function withVT(mutate) {
  if (supportsVT && !reduced.matches) document.startViewTransition(mutate);
  else mutate();
}

/* ——— per-page init (runs on load and after every swup swap) ——— */
function initPage() {
  document.querySelectorAll('[data-availability]').forEach((el) => {
    el.textContent = AVAILABILITY;
  });
  if (reduced.matches) document.querySelectorAll('video').forEach((v) => v.pause());
}

/* ——— service flip panels: toggle through a view transition (spec §6.4) ——— */
document.addEventListener('click', (e) => {
  const summary = e.target.closest('details.panel > summary');
  if (!summary || !supportsVT || reduced.matches) return; // native <details> otherwise
  e.preventDefault();
  const details = summary.parentElement;
  withVT(() => { details.open = !details.open; });
});

/* ——— roster filters: re-sort through a view transition (spec §6.5) ——— */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  const filter = btn.dataset.filter;
  withVT(() => {
    document.querySelectorAll('.filter-btn').forEach((b) => {
      b.setAttribute('aria-pressed', String(b === btn));
    });
    let shown = 0;
    document.querySelectorAll('.roster-row').forEach((row) => {
      const show = filter === 'all' || (row.dataset.tags || '').split(' ').includes(filter);
      row.hidden = !show;
      if (show) shown += 1;
    });
    const status = document.querySelector('[data-filter-status]');
    if (status) status.textContent = `แสดงพี่เลี้ยง ${shown} คน`;
  });
});

/* ——— swup: page fetching + native view transitions (spec §2.3) ——— */
const announcer = document.createElement('p');
announcer.setAttribute('aria-live', 'polite');
announcer.className = 'visually-hidden';
document.body.append(announcer);

const swup = new Swup({
  native: supportsVT,
  containers: ['#main'],
  animationSelector: '#main', // used only on the non-VT crossfade path
  plugins: [new SwupPreloadPlugin()],
});

// Card-morph navigations get the full 4-tier stagger (spec §4.3); plain
// link navigations keep the fast default transition (spec §4.2).
swup.hooks.on('visit:start', (visit) => {
  const el = visit.trigger && visit.trigger.el;
  const staged = !!(el && el.closest('[style*="--vt"]'));
  document.documentElement.classList.toggle('vt-stage', staged);
});
swup.hooks.on('visit:end', () => {
  document.documentElement.classList.remove('vt-stage');
});

swup.hooks.on('page:view', () => {
  // aria-current on the persistent header nav
  const here = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach((a) => {
    const current = a.pathname === here
      || (a.pathname === '/mentors.html' && here.startsWith('/mentor/'));
    if (current) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  // announce + move focus to the swapped content (spec §7)
  announcer.textContent = document.title;
  const main = document.querySelector('#main');
  if (main) main.focus({ preventScroll: true });
  initPage();
});

initPage();
