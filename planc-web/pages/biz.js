/* หน้าธุรกิจแบบไฟล์แยก: ขึ้นทีละใบตอนเลื่อนถึง + เลขนับขึ้น + โลโก้ rig
   (ไฟล์รวมไม่ใช้ไฟล์นี้ — router ใน proto.html ทำหน้าที่เดียวกันใต้ overlay) */
(function(){
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el){
    const target = +el.dataset.count, t0 = performance.now(), dur = 850;
    (function tick(t){
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * e).toLocaleString('en-US');
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('on');
    if (!reduced) e.target.querySelectorAll('[data-count]').forEach(countUp);
    io.unobserve(e.target);
  }), { threshold: .18 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
})();
function bizLogo(){
  const logo = document.getElementById('logoBtn');
  if (window.PlanCRig) PlanCRig.mount(logo, { coat: 'currentColor' });
  else {
    logo.textContent = 'planc*';
    logo.style.cssText = "font-family:'Prompt',sans-serif;font-weight:800;font-size:19px;width:auto";
  }
  logo.addEventListener('click', () => { location.href = '../proto-journey/planc-journey-proto.html'; });
}
