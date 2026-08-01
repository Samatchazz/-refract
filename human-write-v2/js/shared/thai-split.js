/* ============================================================
   thai-split.js — Thai-safe word segmentation (brief §4)
   NEVER SplitText / .split('') on Thai: vowel & tone marks detach.
   Use Intl.Segmenter word granularity, then wrap each segment.
   This is the "single most important porting change" from Idiology's
   whitespace splitter (see js/idiology/textReveal.js).
   ============================================================ */

const hasSeg = typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function';

/* Return array of word segments for a Thai string. */
export function segmentThai(text) {
  if (!hasSeg) return [text];                 // graceful fallback: one chunk, marks stay attached
  const seg = new Intl.Segmenter('th', { granularity: 'word' });
  return [...seg.segment(text)].map((s) => s.segment);
}

/*
  Replace an element's text with per-word <span>s and return them.
  Whitespace-only segments are emitted as plain text nodes so spacing
  survives without becoming animatable targets.
*/
export function wrapThaiWords(el, opts = {}) {
  const cls = opts.className || 'hw-word';
  const text = (opts.text != null ? opts.text : el.textContent);
  const words = segmentThai(text);
  el.textContent = '';
  const spans = [];
  words.forEach((w) => {
    if (/^\s+$/.test(w)) { el.appendChild(document.createTextNode(w)); return; }
    const span = document.createElement('span');
    span.className = cls;
    span.textContent = w;
    el.appendChild(span);
    spans.push(span);
  });
  return spans;
}
