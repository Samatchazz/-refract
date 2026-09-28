/* ส่วนธุรกิจ (ทิศ Bürocratik): ข้อความโผล่ทีละบรรทัด · เส้นคั่นลากจากซ้าย · แถวเลขข้อที่อ่านอยู่เป็นสีดำ ·
   ถามตอบกดเปิด — ใช้ทั้งไฟล์แยก (pages/one.html) และไฟล์รวม (build-journey.py ฝังให้) */
(function(){
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* แยกคำไทยด้วย Intl.Segmenter (ห้ามตัดทีละตัวอักษร) — แตะเฉพาะ text node, ไอคอน/‍span ในประโยคอยู่ที่เดิม */
  const seg = (typeof Intl !== 'undefined' && Intl.Segmenter) ? new Intl.Segmenter('th', { granularity: 'word' }) : null;
  function split(el){
    if (!seg || reduced) return;
    const walk = node => {
      for (const ch of [...node.childNodes]) {
        if (ch.nodeType === 3) {
          const frag = document.createDocumentFragment();
          for (const s of seg.segment(ch.textContent)) {
            if (!s.segment.trim()) { frag.appendChild(document.createTextNode(s.segment)); continue; }   /* ช่องว่างคงเป็น text — span เปล่าจะยุบ */
            const w = document.createElement('span'); w.className = 'b-w'; w.textContent = s.segment; frag.appendChild(w);
          }
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1) {
          if (ch.tagName === 'IMG' || ch.classList.contains('b-ast')) ch.classList.add('b-w');
          else walk(ch);
        }
      }
    };
    walk(el);
  }
  /* คำในบรรทัดเดียวกัน (offsetTop เท่ากัน) ขึ้นพร้อมกัน บรรทัดถัดไปตามมา 90ms */
  function stagger(el){
    let line = -1, top = null;
    el.querySelectorAll('.b-w').forEach(w => {
      if (w.offsetTop !== top) { top = w.offsetTop; line++; }
      w.style.setProperty('--dl', (line * 0.09).toFixed(2) + 's');
    });
  }
  document.querySelectorAll('.b-split').forEach(split);

  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const t = en.target;
    if (t.classList.contains('b-split')) stagger(t);
    t.classList.add(t.classList.contains('b-hr') ? 'on' : 'b-on');
    io.unobserve(t);
  }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.b-split,.b-rv,.b-hr').forEach(el => io.observe(el));

  /* แถวเลขข้อ: แถวที่อยู่ใกล้กลางจอที่สุดเป็นสีดำ */
  const rows = [...document.querySelectorAll('.b-row')];
  let tick = false;
  function active(){
    tick = false;
    const mid = innerHeight * 0.5; let best = null, bd = 1e9;
    for (const r of rows) { const b = r.getBoundingClientRect(); const d = Math.abs((b.top + b.bottom) / 2 - mid); if (d < bd) { bd = d; best = r; } }
    rows.forEach(r => r.classList.toggle('act', r === best && bd < innerHeight * 0.5));
  }
  if (rows.length) { addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(active); } }, { passive: true }); active(); }

  /* ถามตอบ */
  document.querySelectorAll('.b-q').forEach(b => b.addEventListener('click', () => b.parentElement.classList.toggle('open')));
})();
