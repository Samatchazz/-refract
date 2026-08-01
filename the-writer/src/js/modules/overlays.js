// Menu overlay (spec §6.5) + reading overlay (brief §5 — the "showreel"
// equivalent). Both live OUTSIDE the barba container and persist across
// routes; open/close is class-driven so CSS owns the choreography.
// The GL scene keeps rendering behind, dimmed (hooked via callbacks).

import { fillSamples } from './samples.js';

const html = document.documentElement;

let onDim = () => {};
export function setDimHook(fn) { onDim = fn; }

function anyOverlayOpen() {
  return html.classList.contains('menu-open') || html.classList.contains('read-open');
}
function syncDim() { onDim(anyOverlayOpen() ? 0.25 : 0); }

export function closeMenu() {
  html.classList.remove('menu-open');
  document.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false');
  syncDim();
}

export function closeRead() {
  html.classList.remove('read-open');
  syncDim();
}

export function initOverlays() {
  fillSamples();

  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-menu-toggle]');
    if (toggle) {
      const open = html.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
      syncDim();
      return;
    }
    if (e.target.closest('[data-read-open]')) {
      closeMenu();
      html.classList.add('read-open');
      syncDim();
      return;
    }
    if (e.target.closest('[data-read-close]')) {
      closeRead();
      return;
    }
    // clicking a nav link inside the menu closes it (barba handles the route)
    if (e.target.closest('.menu-overlay a')) closeMenu();
  });

  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeMenu(); closeRead(); }
  });
}
