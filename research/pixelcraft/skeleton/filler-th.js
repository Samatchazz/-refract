// filler-th.js — ?fill=th only: swap every token for meaningless Thai filler of realistic
// length (data-approx-chars). Explicit exception to "no invented content" (BRIEF §6.8):
// the filler is deliberately nonsense, lives only here, and never loads without the flag.
if (new URLSearchParams(location.search).get('fill') === 'th') {
  // nonsense syllables with stacked vowels/tone marks on purpose — stress-tests line-height
  const POOL = ['ทดสอบ', 'ข้อความ', 'ชั่วคราว', 'ตัวเติม', 'เนื้อหา', 'ยังไม่จริง', 'สำหรับวัด', 'ความยาว',
    'บรรทัดไทย', 'สระซ้อน', 'วรรณยุกต์', 'ตัวอย่าง', 'พื้นที่', 'จัดวาง', 'โครงร่าง', 'น้ำหนัก', 'ทดลอง', 'ชิ้นงาน'];
  let i = 0;
  for (const el of document.querySelectorAll('[data-token]')) {
    const target = +el.getAttribute('data-approx-chars') || 12;
    let s = '';
    while (s.length < target) s += (s ? ' ' : '') + POOL[i++ % POOL.length];
    el.textContent = s;
  }
  document.body.classList.add('tokens-off');
}
