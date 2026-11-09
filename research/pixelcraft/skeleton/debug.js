// debug.js — section badges, keyboard toggles, ?debug tuning panel.
// Keys use e.code (Thai layout sends e.key='ก' — BRIEF §6.8); state persists in localStorage.
import { CONFIG, applyConfig } from './effects.js';

const LS = localStorage;
const editable = (e) => e.target.closest('input,textarea,[contenteditable]');

// ---------- badges: "S03 · E12 E22", not-implemented struck through ----------
let notImpl = new Set();
try {
  const man = await (await fetch('sections.json')).json();
  notImpl = new Set(man.effects.filter(e => e.implemented === false).map(e => e.id));
} catch { /* file:// — badge renders without strikethrough info */ }

for (const sec of document.querySelectorAll('[data-section]')) {
  const b = document.createElement('div');
  b.className = 'dbg-badge';
  const fx = (sec.dataset.effects || '').split(' ').filter(Boolean)
    .map(id => notImpl.has(id) ? `<s>${id}</s>` : id).join(' ');
  b.innerHTML = `${sec.dataset.section}${fx ? ' · ' + fx : ''}`;
  sec.style.position = 'relative';
  sec.prepend(b);
}
// mark deliberately-unimplemented boxes
for (const el of document.querySelectorAll('[data-effect-todo]')) {
  const t = document.createElement('div');
  t.className = 'dbg-badge';
  t.innerHTML = `<s>${el.dataset.effectTodo}</s> todo`;
  el.prepend(t);
}

const setBadges = (on) => { document.body.classList.toggle('badges-off', !on); LS.setItem('dbg.badges', on ? '1' : '0'); };
const setTokens = (on) => { document.body.classList.toggle('tokens-off', !on); LS.setItem('dbg.tokens', on ? '1' : '0'); };
setBadges(LS.getItem('dbg.badges') !== '0');   // default: on (BRIEF §6.8)
setTokens(LS.getItem('dbg.tokens') !== '0');

// ---------- key legend ----------
let legend = null;
const toggleLegend = () => {
  if (legend) { legend.remove(); legend = null; return; }
  legend = document.createElement('div');
  legend.className = 'dbg-legend';
  legend.innerHTML = 'D = badge · T = กรอบ token · ? = คีย์ · <code>?debug</code> = สไลเดอร์ · <code>?fill=th</code> = ตัวเติมไทย';
  document.body.append(legend);
};

document.addEventListener('keydown', (e) => {
  if (editable(e)) return;
  if (e.code === 'KeyD') setBadges(document.body.classList.contains('badges-off'));
  if (e.code === 'KeyT') setTokens(document.body.classList.contains('tokens-off'));
  if (e.key === '?') toggleLegend();
});

// ---------- ?debug panel — sliders for every tunable ----------
if (new URLSearchParams(location.search).has('debug')) {
  const panel = document.createElement('div');
  panel.className = 'dbg-panel';
  panel.innerHTML = '<strong>debug · จูนค่า</strong>';
  const row = (label, key, min, max, step) => {
    const l = document.createElement('label');
    const val = document.createElement('span');
    val.textContent = CONFIG[key];
    l.append(`${label} `, val);
    const r = document.createElement('input');
    Object.assign(r, { type: 'range', min, max, step, value: CONFIG[key] });
    r.addEventListener('input', () => { CONFIG[key] = +r.value; val.textContent = r.value; applyConfig(); });
    l.append(r);
    panel.append(l);
  };
  row('reveal duration (s)', 'revealDurS', 0.1, 2.5, 0.05);
  row('reveal distance (px)', 'revealDistPx', 0, 160, 5);
  row('stagger (ms)', 'staggerMs', 0, 600, 25);
  row('highlight duration (s)', 'hlDurS', 0.1, 2, 0.05);
  row('marquee speed ×', 'marqueeMul', 0.2, 3, 0.1);
  row('parallax ×', 'parallaxMul', 0, 3, 0.1);
  row('conveyor step (ms)', 'conveyorStepMs', 2000, 20000, 500);
  row('typed delay (ms)', 'typedDelayMs', 500, 6000, 100);
  row('typed ms/grapheme', 'typedMsPerGrapheme', 20, 200, 5);
  row('counter (ms)', 'counterDurMs', 300, 5000, 100);
  row('popup delay (s)', 'popupDelayS', 1, 120, 1);
  row('accordion grow', 'accGrow', 1.2, 6, 0.2);
  const off = document.createElement('label');
  off.innerHTML = '<input type="checkbox"> ปิด popup ชั่วคราว';
  off.querySelector('input').addEventListener('change', (e) => document.body.classList.toggle('popup-off', e.target.checked));
  panel.append(off);
  document.body.append(panel);
}
