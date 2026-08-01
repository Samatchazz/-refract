/* PlanC — PICKSET M4-T*(PATH A)-A5-B2-C1-D2-E1-P2-G2-K3-F1-Q2-H1-I1-J1-L3 */
'use strict';

/* ══════════════════════════════════════════════════════════════════════
   CONTENT — every string on the site, once.
   Markup carries the same strings statically so the page is readable with
   JS off and crawlable without execution; each text node declares its
   origin with data-c="path". Load the page with ?copycheck to have the
   two verified against each other in the console.
   `[...]` values are the client's own placeholder tokens. Nothing here is
   invented — missing figures stay missing.
   ══════════════════════════════════════════════════════════════════════ */
const CONTENT = {
  brand: 'PlanC',
  nav: ['เราคือใคร', 'สามขั้น', 'ผลงาน', 'จองเลย'],

  /* shared by three places: preloader (I1), back parallax layer (B2), word walls (D2) */
  trendWords: ['สายเกม','สายบิวตี้','สายมู','สายเต้น','สายกิน','ปัง','viral','แมส','สายย่อ','ตามกระแส','ทำตามสูตร'],

  preloader: { last: 'คุณ' },

  sections: {
    1:{ kicker:'เราคือใคร' },
    2:{ kicker:'ทำไมต้องเรา', head:'เทรนด์มาแล้วก็ไป ตัวตนอยู่ต่อ' },
    3:{ kicker:'เราทำอะไรมา', head:'ตัวเลขที่ไม่ได้มาจากโชค',
        sub:'ทุกตัวเลขข้างล่างมีที่มา และเป็นของครีเอเตอร์ที่เราดูแล ไม่ใช่ของเราเอง',
        en:'EN: receipts, not promises.' },
    4:{ kicker:'ประสบการณ์ของเรา', head:'คนที่สอน ยังลงสนามอยู่ทุกวัน',
        sub:'ไม่ใช่โค้ชที่เลิกทำมาห้าปีแล้วมาเล่าความหลัง ทุกอย่างที่คุณจะได้ ผ่านการทดลองบนช่องจริง เงินจริง ยอดจริง ของเราเอง',
        en:'EN: still in the game.' },
    5:{ kicker:'พาร์ทเนอร์ของเรา', head:'คนที่ทำงานด้วยกัน', sub:'ไม่ได้เยอะ แต่เลือกแล้วทุกราย', en:'EN: few, chosen.' },
    6:{ kicker:'เราช่วยคุณได้ยังไง', head:'สามขั้น จากใครก็ได้ สู่ตัวจริง' },
    7:{ kicker:'อะไรทำให้คุณต่าง', head:'คุณตอนนี้ กับคุณอีกสามเดือน',
        sub:'ไม่ใช่คำสัญญา แต่เป็นสิ่งที่เกิดขึ้นจริงกับคนที่ทำครบสามขั้น',
        en:'EN: same you. finally legible.' },
    8:{ kicker:'จองเลย', head:'พร้อมจะเป็นตัวเองหรือยัง',
        sub:'คุยกันก่อนได้ ไม่มีสคริปต์ขาย ไม่มีคำสัญญาเว่อร์ๆ มีแต่คำถามที่ตรงมาก' }
  },

  hero: {
    lines: ['สร้างตัวตน','ที่เป็นของคุณ','ไม่ใช่ของเทรนด์'],
    sub: 'ที่ปรึกษา 1:1 สำหรับครีเอเตอร์ที่เบื่อการวิ่งตามเทรนด์ ดูแลโดยอินฟลูเอนเซอร์ที่ยังลงสนามอยู่ทุกวัน ไม่ใช่นักทฤษฎี',
    en: 'EN: stop chasing. start being.',
    cue: 'เลื่อนลง',
    specimen: {
      label: 'ลองปรับดู — นี่คือฟอนต์จริงของเว็บนี้',
      weightHint: '3 ระดับ — ฟอนต์หัวเรื่องเป็นแบบสแตติก',
      sizeHint: '34–96 พิกเซล ปรับได้ต่อเนื่อง',
      en: 'EN: type specimen, not a hero image'
    },
    /* the 3 Kanit files that are actually loaded — the control snaps between them */
    weights: [400, 500, 700]
  },

  manifesto: {
    body: 'ทุกคนบอกให้คุณตามเทรนด์ เต้นตามเพลงเดิม พูดมุกเดียวกัน ทำคลิปหน้าตาเหมือนกันทั้งฟีด แล้วสงสัยว่าทำไมคนจำเราไม่ได้ ความจริงคืออัลกอริทึมไม่ได้รักคนที่เหมือนใคร มันรักคนที่ชัด เราไม่สอนคุณเลียนแบบใคร เราขุดสิ่งที่คุณมีอยู่แล้ว แล้ววิศวกรรมทุกอย่างรอบมัน จนโลกเลื่อนผ่านคุณไม่ได้',
    en: "EN: trends expire. you don't.",
    land: 'คนที่ชัด ไม่ต้องตะโกน'
  },

  /* every figure carries its provenance — a bare number is advertising */
  numbers: [
    { v:'[N]', u:'ผู้ติดตาม', p:'ที่เพิ่มให้ครีเอเตอร์ในเครือ — จาก [N] บัญชี ภายใน [N] เดือน' },
    { v:'[N]', u:'คลิป',      p:'ที่ทะลุ [N] ล้านวิว — ทำจากแกนตัวตนเดียว ไม่ใช่จากการตามเทรนด์' },
    { v:'[N]', u:'แบรนด์',    p:'ที่กลับมาจ้างซ้ำ — ตัวเลขที่บอกอะไรมากกว่ายอดวิว' },
    { v:'[N]', u:'ครีเอเตอร์', p:'ที่เลิกทำคอนเทนต์ที่ไม่ใช่ตัวเอง — ตัวเลขที่เราภูมิใจที่สุด' }
  ],
  beforeAfter: ['จาก [N] → [N] ใน [N] วัน', '[หนึ่งบรรทัดว่าเปลี่ยนอะไร — รอเจ้าของเขียน]'],

  founder: {
    caption: 'กว่าจะชัดว่าตัวเองเป็นใคร ก็ใช้เวลาเหมือนกัน',
    here: { y:'ตอนนี้', t:'you are here' },
    rows: [
      { y:'[ปี]', t:'เริ่มทำคอนเทนต์ครั้งแรก' },
      { y:'[ปี]', t:'เจ๊งครั้งแรก — ทำ [N] คลิปติดกันแล้วไม่มีใครดู',
        more:'[ประโยคจริงของปีที่เจ๊ง — รอเจ้าของเขียน]' },
      { y:'[ปี]', t:'เข้าใจว่าปัญหาไม่ใช่อัลกอริทึม แต่เป็นการไม่รู้ว่าตัวเองคือใคร' },
      { y:'[N]',  t:'ผู้ติดตามที่ปั้นด้วยมือตัวเอง บนแพลตฟอร์ม [IG/TikTok/YouTube]' },
      { y:'[N]',  t:'แบรนด์ที่ทำงานด้วย' },
      { y:'[N]',  t:'ครีเอเตอร์ที่ดูแลแบบ 1:1 จนถึงวันนี้' }
    ]
  },

  partners: ['[ชื่อพาร์ทเนอร์ 1]','[ชื่อพาร์ทเนอร์ 2]','[ชื่อพาร์ทเนอร์ 3]','[ชื่อพาร์ทเนอร์ 4]','[ชื่อพาร์ทเนอร์ 5]','[ชื่อพาร์ทเนอร์ 6]'],
  partnersGroups: 'แพลตฟอร์ม · เอเจนซี · แบรนด์',
  partnersPause: 'หยุด',

  pillars: [
    { lv:'LV.1 — EXTRACT', name:'ขุดตัวตน', depth:'00m',
      sub:'คุยลึกแบบ 1:1 จนเจอว่าอะไรคือเสียงของคุณจริงๆ ไม่ใช่เสียงที่ยืมคนอื่นมา',
      body:'เซสชันขุดตัวตน — เรื่องที่คุณเล่าได้ทั้งคืนโดยไม่เบื่อ มุมที่คนรอบตัวบอกว่า "อันนี้แหละคือแก" เอามากางให้เห็นเป็นข้อๆ แล้วเลือกอันที่จะเป็นแกนของทุกคอนเทนต์' },
    { lv:'LV.2 — ENGINEER', name:'วิศวกรรมอัลกอริทึม', depth:'-12m',
      sub:'ออกแบบระบบคอนเทนต์รอบตัวตนของคุณ ให้อัลกอริทึมทำงานให้คุณ ไม่ใช่คุณทำงานให้มัน',
      body:'โครงคอนเทนต์ จังหวะลง รูปแบบซีรีส์ hook ที่เป็นภาษาคุณเอง วัดผล ปรับ วนซ้ำ — ทุกอย่างสร้างรอบแกนเดียวที่ขุดเจอใน LV.1 ไม่ใช่รอบเทรนด์ของสัปดาห์นี้' },
    { lv:'LV.3 — ESTABLISH', name:'สร้างอาณาจักรของตัวเอง', depth:'-30m',
      sub:'จากครีเอเตอร์ที่คนตาม เป็นเจ้าของพื้นที่ที่คนต้องมาหา',
      body:'พอตัวตนชัดและระบบหมุนได้เอง ขั้นต่อไปคือทำให้มันเป็นทรัพย์สิน — คอมมูนิตี้ ช่องทางรายได้ แบรนด์ของตัวเอง อาณาจักรที่อยู่ได้แม้อัลกอริทึมจะเปลี่ยนใจพรุ่งนี้' }
  ],
  pillarNext: 'ต่อไป ↓',

  faq: {
    head: 'คำถามที่คนมักไม่กล้าถาม',
    items: [
      { q:'ราคาเท่าไหร่', a:'[คำตอบ — รอเจ้าของเขียน]' },
      { q:'ใช้เวลานานแค่ไหน', a:'[คำตอบ — รอเจ้าของเขียน]' },
      { q:'ต้องมีผู้ติดตามเท่าไหร่ถึงเริ่มได้', a:'[คำตอบ — รอเจ้าของเขียน]' },
      { q:'ถ้าไม่เวิร์กจะรู้เมื่อไหร่', a:'[คำตอบ — รอเจ้าของเขียน]' },
      { q:'ทำเองได้ไหมโดยไม่ต้องจ้าง', a:'[คำตอบ — รอเจ้าของเขียน]' }
    ]
  },

  pinned: { frame:'คุณคือครีเอเตอร์ที่', words:['ตามเทรนด์','รู้ว่าตัวเองคือใคร','คนอื่นตาม'] },

  diff: {
    head: ['ตอนนี้','หลังจากนี้'],
    rows: [
      ['เปิดแอปแล้วดูว่าใครทำอะไร แล้วทำตาม','เปิดแอปแล้วรู้ว่าวันนี้ตัวเองจะพูดเรื่องอะไร'],
      ['ยอดดีบ้างไม่ดีบ้าง ไม่รู้ว่าเพราะอะไร','รู้ว่าคลิปไหนจะทำงาน ก่อนกดโพสต์'],
      ['คนจำคลิปได้ แต่จำคุณไม่ได้','คนเห็นสามวินาทีแรกแล้วรู้ว่าเป็นคุณ'],
      ['กลัวหยุดโพสต์แล้วหายไปเลย','หยุดหนึ่งอาทิตย์ก็ยังมีคนรอ'],
      ['รับงานที่ได้เงินแต่ไม่ใช่ตัวเอง','ปฏิเสธงานได้ เพราะมีงานที่ใช่เข้ามา']
    ]
  },

  walls: [ ['หลงทาง','เจอตัวเอง'], ['ตัวคนเดียว','มีทีม'] ],

  cta: {
    mainLabel:'จองคุยฟรี 30 นาที',
    mainSub:'ไม่มีค่าใช้จ่าย ไม่ต้องเตรียมอะไร มาคุยว่าตอนนี้ติดอะไรอยู่',
    altLead:'ยังไม่พร้อมคุย?',
    altLabel:'แอดไลน์มาถามก่อนได้',
    qrCaption:'สแกนเพื่อแอดไลน์',
    calLink:'[ลิงก์ Cal.com]',   /* waiting on the client */
    lineId:'[LINE OA]'           /* waiting on the client — needed for the deep link AND the QR */
  },

  socials: ['IG','TikTok','YouTube','LINE'],
  footMicro: '© PlanC',
  footMicroEn: 'EN: made for people who refuse to be a copy',

  /* [C1] polished public voice → blunt honest voice */
  voicePairs: [
    ['เราช่วยวางกลยุทธ์คอนเทนต์ระดับมืออาชีพ','เลิกก๊อปสูตรคนอื่นสักที มาขุดของจริงในตัวคุณ'],
    ['ปรึกษาการเติบโตอย่างยั่งยืน','โตแบบไม่ต้องเสแสร้ง เหนื่อยน้อยกว่าเยอะ'],
    ['เข้าใจกลไกของแพลตฟอร์ม','อัลกอริทึมไม่ใช่ผี มันแค่ชอบคนที่ชัด'],
    ['พัฒนาแบรนด์บุคคลของคุณ','ให้คนจำคุณได้ โดยไม่ต้องตะโกน'],
    ['บริการที่ปรึกษาแบบตัวต่อตัว','คุยกันสองคน ไม่มีสไลด์ ไม่มีศัพท์สวยๆ'],
    ['วิเคราะห์ข้อมูลเชิงลึก','ดูเลขแล้วบอกตรงๆ ว่าอันไหนคุณหลอกตัวเอง']
  ],

  trail: ['you','own','voice','real']
};

/* ══════════════════════════════════════════════════════════════════════
   THAI WORD SPLITTER — used everywhere a word unit is needed.
   Thai has no spaces and stacks marks above/below, so any character-level
   split shatters the text. Nothing in this file ever calls .split('') on
   Thai, iterates Thai glyphs, or animates letter-spacing.
   ══════════════════════════════════════════════════════════════════════ */
const SEG = ('Segmenter' in Intl) ? new Intl.Segmenter('th', { granularity:'word' }) : null;
const LOANWORDS = ['เทรนด์','คอนเทนต์','อัลกอริทึม','ครีเอเตอร์','อินฟลูเอนเซอร์','แพลตฟอร์ม'];

function thaiWords(text, extra){
  if (!SEG) return text.split(/(\s+)/).filter(w => w.length);   // graceful, still word-level
  // `extra` keeps a caller-supplied compound together — the segmenter splits
  // ตัวตน into ตัว|ตน, which is correct linguistically but wrong when the word
  // is being treated as one designed unit (the accent word in a heading).
  const keep = extra ? LOANWORDS.concat(extra) : LOANWORDS;
  const out = [];
  let pos = 0;
  while (pos < text.length){
    const hit = keep.find(w => text.startsWith(w, pos));
    if (hit){ out.push(hit); pos += hit.length; continue; }
    let next = text.length;
    for (const w of keep){ const j = text.indexOf(w, pos); if (j >= 0 && j < next) next = j; }
    for (const s of SEG.segment(text.slice(pos, next))) out.push(s.segment);
    pos = next;
  }
  return out.filter(w => w.length);
}

/* A whitespace token must stay a text node: a space inside an inline-block
   collapses to zero width and welds the neighbouring words together. */
const isSpace = w => !w.trim();

/* ── small shared helpers ─────────────────────────────────────────── */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)');
const FINE    = matchMedia('(hover: hover) and (pointer: fine)');
const DESKTOP = matchMedia('(min-width: 768px)');
const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;

/* one rAF-throttled scroll loop for the whole page */
const SCROLL = {
  items: [],
  add(fn){ this.items.push(fn); },
  _queued: false,
  force(){ const vh = innerHeight; for (const fn of this.items) fn(vh); },
  kick(){
    if (this._queued) return;
    this._queued = true;
    requestAnimationFrame(() => { this._queued = false; this.force(); });
  },
  start(){
    addEventListener('scroll', () => this.kick(), { passive:true });
    addEventListener('resize', () => this.kick());
    this.kick();
  }
};

/* progress of an element across the viewport, 0 → 1 */
function travel(el, vh, startAt = 0.85, endAt = 0.35){
  const r = el.getBoundingClientRect();
  const from = vh * startAt, to = vh * endAt - r.height;
  if (from === to) return 0;
  return clamp01((from - r.top) / (from - to));
}

/* ══════════════════════════════════════════════════════════════════════
   [I1] PRELOADER — epic budget 1/2. Owns boundary 0→1: the final word
   flies into the hero heading's own "คุณ". Depends on: A5 (needs the
   heading already split into words, so A5 runs first).
   ══════════════════════════════════════════════════════════════════════ */
function initPreloader(){
  const pre = $('#pre'), word = $('#preWord');
  if (!pre) return;

  const finish = (fly) => {
    if (pre.dataset.done) return;
    pre.dataset.done = '1';
    const target = $('.hl__target');
    if (fly && target && !REDUCED.matches){
      const a = word.getBoundingClientRect(), b = target.getBoundingClientRect();
      // FLIP: transform only, no layout thrash
      word.style.transform = `translate3d(${b.left - a.left}px, ${b.top - a.top}px, 0) scale(${b.height / a.height})`;
      word.classList.add('is-fly');
      target.style.visibility = 'hidden';
      pre.classList.add('is-out');
      setTimeout(() => { target.style.visibility = ''; pre.classList.add('is-gone'); }, 1200);
    } else {
      pre.classList.add('is-out');
      setTimeout(() => pre.classList.add('is-gone'), 400);
    }
    document.documentElement.classList.remove('is-loading');
  };

  document.documentElement.classList.add('is-loading');
  ['wheel','touchstart','pointerdown','keydown'].forEach(e =>
    addEventListener(e, () => finish(false), { once:true, passive:true }));

  if (REDUCED.matches){ setTimeout(() => finish(false), 200); return; }

  const t0 = performance.now();
  const run = () => {
    // fonts ready fast → compressed 600ms version; a preloader is never dead waiting time
    const fast = (performance.now() - t0) < 400;
    const list = CONTENT.trendWords.slice(0, fast ? 2 : 4);
    const step = fast ? 220 : 300;   // 180ms strike + breath
    let i = 0;
    const next = () => {
      if (pre.dataset.done) return;
      if (i < list.length){
        word.textContent = list[i];
        pre.classList.remove('is-strike');
        void pre.offsetWidth;
        requestAnimationFrame(() => pre.classList.add('is-strike'));
        i++;
        setTimeout(next, step);
      } else {
        word.textContent = CONTENT.preloader.last;   // "คุณ" is never struck through
        pre.classList.remove('is-strike');
        setTimeout(() => finish(true), fast ? 160 : 200);
      }
    };
    next();
  };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(run, run);
  setTimeout(() => { if (!pre.dataset.done && !word.textContent) run(); }, 900);
}

/* ══════════════════════════════════════════════════════════════════════
   [A5] HERO TYPE SPECIMEN — the wow moment is also the argument.
   Weight SNAPS between the 3 loaded Kanit files (Kanit is static, so a
   continuous weight slider would stutter and re-download per step).
   ══════════════════════════════════════════════════════════════════════ */
function initHeroSpecimen(){
  const h1 = $('#h1');
  if (!h1) return;

  // word-wrap each line so the preloader has a real target, and so marks
  // keep their own shaping run. aria-label carries the sentence.
  h1.setAttribute('aria-label', CONTENT.hero.lines.join(' '));
  $$('.hl__line', h1).forEach(line => {
    const words = thaiWords(line.textContent.trim());
    line.textContent = '';
    words.forEach(w => {
      if (isSpace(w)){ line.appendChild(document.createTextNode(w)); return; }
      const s = document.createElement('span');
      s.className = 'hl__w' + (w === CONTENT.preloader.last ? ' hl__target' : '');
      s.style.display = 'inline-block';
      s.style.overflow = 'visible';
      s.textContent = w;
      line.appendChild(s);
    });
  });

  const wIn = $('#specWeight'), wOut = $('#specWeightOut');
  const sIn = $('#specSize'),   sOut = $('#specSizeOut');
  if (!wIn || !sIn) return;

  const stops = $$('.spec__stops span');
  const setW = () => {
    const i = +wIn.value;
    const v = CONTENT.hero.weights[i] || CONTENT.hero.weights[1];
    h1.style.setProperty('--hl-wght', v);
    wOut.textContent = v;
    stops.forEach((s, j) => s.classList.toggle('is-on', j === i));
  };
  const setS = () => {
    h1.style.setProperty('--hl-size', sIn.value + 'px');
    sOut.textContent = sIn.value;
  };
  wIn.addEventListener('input', setW);
  sIn.addEventListener('input', setS);

  // start the size slider from whatever the responsive default actually is
  const px = Math.round(parseFloat(getComputedStyle(h1).fontSize));
  sIn.value = Math.min(96, Math.max(34, px));
  sOut.textContent = sIn.value;
  setW();
}

/* ══════════════════════════════════════════════════════════════════════
   HOUSE MOTION — masked word reveal, shared by every display heading.
   Runs on word units from thaiWords(), so it never splits a glyph cluster.
   Used by: A5 (hero accent), and every h2/pillar name. Depends on: nothing.
   ══════════════════════════════════════════════════════════════════════ */
function maskWords(el, { accent } = {}){
  if (el.dataset.masked) return;
  el.dataset.masked = '1';
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.textContent = '';
  let i = 0;
  thaiWords(text, accent).forEach(w => {
    if (isSpace(w)){ el.appendChild(document.createTextNode(w)); return; }
    const outer = document.createElement('span');
    outer.className = 'rv';
    outer.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('span');
    inner.className = 'rv__i' + (accent && w === accent ? ' is-accent' : '');
    inner.textContent = w;
    outer.style.setProperty('--d', (i++ * 40) + 'ms');   // --stagger-word
    outer.appendChild(inner);
    el.appendChild(outer);
  });
}

/* ══════════════════════════════════════════════════════════════════════
   REVEAL SAFETY NET — content must never depend on an animation callback.
   Both the curtain and the heading mask hide their target first and reveal
   it on intersection. If IntersectionObserver delivers nothing (throttled
   tab, a non-compositing embed, a prerender), that leaves real copy at
   opacity 0 with no way back. Measured here: a probe observer delivered 0
   callbacks and 39 elements stayed invisible.
   So: IO is the trigger, never the guarantee. If nothing has intersected
   within 3s, everything reveals unconditionally. A skipped animation is
   cosmetic; hidden copy is a broken page.
   ══════════════════════════════════════════════════════════════════════ */
const REVEAL = { alive:false, groups:[] };
function watchReveal(els, reveal, rootMargin){
  if (!els.length) return;
  REVEAL.groups.push({ els, reveal });
  if (!('IntersectionObserver' in window)){ els.forEach(reveal); return; }
  const io = new IntersectionObserver(es => {
    REVEAL.alive = true;
    es.forEach(e => { if (e.isIntersecting){ reveal(e.target); io.unobserve(e.target); } });
  }, { rootMargin: rootMargin || '0px 0px -15% 0px' });
  els.forEach(el => io.observe(el));
}
function armRevealFailsafe(){
  setTimeout(() => {
    if (REVEAL.alive) return;
    console.warn('[reveal] no intersection callbacks after 3s — revealing all content');
    REVEAL.groups.forEach(g => g.els.forEach(g.reveal));
    // and jump past the transitions themselves, which may be frozen too
    document.documentElement.classList.add('reveal-now');
  }, 3000);
}

/* The curtain half of the shared grammar. One observer drives every block on
   the page, so a number cell, a comparison pair and a pillar all enter with
   the same move — that sameness is what makes eight boundaries read as one
   continuous piece rather than eight separate arrivals. */
function initCurtains(){
  const blocks = $$('[data-curtain]');
  if (!blocks.length) return;

  blocks.forEach(el => {
    el.classList.add('cur');
    // everything already in the block hides until mid-wipe
    Array.from(el.children).forEach(c => c.classList.add('cur__hide'));
    const c = document.createElement('span');
    c.className = 'cur__c';
    c.setAttribute('aria-hidden', 'true');
    el.appendChild(c);
  });

  if (REDUCED.matches){
    blocks.forEach(el => { el.classList.add('is-in'); $$('.cur__c', el).forEach(c => c.remove()); });
    return;
  }

  watchReveal(blocks, el => {
    // stagger by position within the run, matching the reference's 0.08s
    const peers = el.parentElement
      ? Array.from(el.parentElement.children).filter(n => n.hasAttribute('data-curtain'))
      : [el];
    el.style.setProperty('--d', (Math.max(0, peers.indexOf(el)) * 80) + 'ms');
    el.classList.add('is-in');
  });                                             // ≈ the reference's "top 85%"
}

function initHeadingReveal(){
  const heads = $$('[data-reveal]');
  if (!heads.length) return;
  heads.forEach(h => maskWords(h, { accent: h.dataset.accent }));
  if (REDUCED.matches){ heads.forEach(h => h.classList.add('is-revealed')); return; }
  watchReveal(heads, h => h.classList.add('is-revealed'), '0px 0px -18% 0px');
}

/* ══════════════════════════════════════════════════════════════════════
   [B2] SCROLL ENGINE — 3 parallax layers + the 6 rule hand-offs.
   BACK 1.15× (trend words, blurred) · MID 1× · FRONT 0.92×.
   Displacement is capped at ±8% of viewport height, so depth reads as
   permanence rather than drift. transform: translate3d only.
   Also owns [B2b], the boundary rules, because they run off the same
   progress values. Depends on: nothing.
   ══════════════════════════════════════════════════════════════════════ */
function initParallax(){
  const back = $('#pxBack');

  if (back){
    // trend words live in the document (not fixed), so they genuinely drift past
    const n = CONTENT.trendWords.length;
    CONTENT.trendWords.forEach((w, i) => {
      const s = document.createElement('span');
      s.textContent = w;
      s.style.top  = (4 + (i / n) * 92).toFixed(2) + '%';
      s.style.left = ((i * 37) % 74 + 4).toFixed(2) + '%';
      back.appendChild(s);
    });
    // Measure <main>, NOT documentElement.scrollHeight. The layer is absolutely
    // positioned, so it contributes to scrollHeight itself — sizing it from
    // scrollHeight makes each pass taller than the last, and with a
    // ResizeObserver watching, the page ran away to 53,646px (3.2× the real
    // content) leaving ~37,000px of empty scroll. <main> is in normal flow and
    // is unaffected by this layer, so it is a stable source of truth.
    const host = $('main') || document.body;
    const sizeBack = () => {
      const h = host.offsetHeight;
      if (Math.abs(parseFloat(back.style.height || 0) - h) > 2) back.style.height = h + 'px';
    };
    sizeBack();
    addEventListener('resize', sizeBack);
    if ('ResizeObserver' in window) new ResizeObserver(sizeBack).observe(host);
  }

  if (REDUCED.matches) { initBoundaryRules(); return; }   // multipliers → 1.0, blur stays

  const layers = [
    ...(back ? $$('span', back).map(el => ({ el, k: 1 })) : []),      // 1.15× → full cap
    ...$$('.px-front').map(el => ({ el, k: -0.53 }))                  // 0.92× → ~53% of cap, opposite
  ];

  SCROLL.add(vh => {
    const cap = vh * 0.08;                       // hard ±8vh
    for (const L of layers){
      const r = L.el.getBoundingClientRect();
      if (r.bottom < -cap || r.top > vh + cap) continue;
      const rel = ((r.top + r.height / 2) - vh / 2) / vh;   // −1 … 1
      const y = Math.max(-cap, Math.min(cap, -rel * L.k * cap));
      L.el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    }
  });

  initBoundaryRules();
}

/* [B2b] the six rule hand-offs between sections */
function initBoundaryRules(){
  const rules = $$('.bnd[data-grow]');
  if (!rules.length) return;
  SCROLL.add(vh => {
    for (const el of rules){
      const p = travel(el, vh, 0.95, 0.55);
      el.style.setProperty('--p', p.toFixed(3));
    }
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [C1] DUAL-VOICE WORDPLAY — the site whispers its honest voice under its
   public one. Mask wipe over intact text: never touches glyph structure,
   so it is 100% Thai-safe. ONE behaviour per span: pointer devices get
   hover, touch devices get a single auto-swap when centred. Keyboard
   always works — every span is a <button aria-expanded>.
   ══════════════════════════════════════════════════════════════════════ */
function initDualVoice(){
  const spans = $$('.voice');
  if (!spans.length) return;

  spans.forEach(b => {
    b.addEventListener('click', () => {
      b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });
  });

  if (FINE.matches){
    spans.forEach(b => {
      b.addEventListener('pointerenter', () => b.setAttribute('aria-expanded','true'));
      b.addEventListener('pointerleave', () => b.setAttribute('aria-expanded','false'));
      b.addEventListener('focus', () => b.setAttribute('aria-expanded','true'));
      b.addEventListener('blur',  () => b.setAttribute('aria-expanded','false'));
    });
  } else {
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting){ e.target.setAttribute('aria-expanded','true'); io.unobserve(e.target); }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    spans.forEach(b => io.observe(b));
  }
}

/* ══════════════════════════════════════════════════════════════════════
   [D2] WORD WALLS — the 2 set-piece boundaries (2→3 and 6→7).
   The wipe is a mask that slides down while its inner counter-translates
   up, so the second word is revealed in place instead of sliding in.
   transform only — no clip-path, no height animation.
   ══════════════════════════════════════════════════════════════════════ */
function initWordWalls(){
  const walls = $$('.wall');
  if (!walls.length || REDUCED.matches) return;
  SCROLL.add(vh => {
    for (const w of walls){
      const r = w.getBoundingClientRect();
      const span = r.height - vh;
      const raw = span > 0 ? clamp01(-r.top / span) : 0;
      const p = clamp01((raw - 0.3) / 0.4);       // wipe occupies the middle of the pin
      w.style.setProperty('--p', p.toFixed(3));
    }
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [E1] MANIFESTO WORD-FILL — the only weight animation on the site, and
   the only place it is safe: Anuphan is variable, Kanit is not.
   Scrolling the manifesto IS the visitor overwriting the noise.
   ══════════════════════════════════════════════════════════════════════ */
function initWordFill(){
  const blocks = $$('[data-fill]');
  if (!blocks.length) return;

  const built = blocks.map(el => {
    const words = thaiWords(el.textContent.trim());
    el.textContent = '';
    const nodes = [];
    words.forEach(t => {
      if (isSpace(t)){ el.appendChild(document.createTextNode(t)); return; }
      const w = document.createElement('w');
      w.textContent = t;
      el.appendChild(w);
      nodes.push(w);
    });
    return { el, nodes, slow: el.hasAttribute('data-fill-slow') };
  });

  if (REDUCED.matches){
    built.forEach(b => b.nodes.forEach(n => n.classList.add('is-on')));
    return;
  }

  SCROLL.add(vh => {
    for (const b of built){
      const p = travel(b.el, vh, 0.9, b.slow ? 0.45 : 0.3);
      const lit = Math.round(p * b.nodes.length) + 1;   // snap one word ahead
      for (let i = 0; i < b.nodes.length; i++){
        b.nodes[i].classList.toggle('is-on', i < lit);
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [P2] PROOF COUNTERS — hand-written tween, no plugin. The real value is
   in the DOM from the start, so it is correct with JS disabled. Every
   figure is currently a [N] placeholder, so the tween stays inert until
   the client supplies real numbers — it never invents one.
   ══════════════════════════════════════════════════════════════════════ */
function initCounters(){
  const cells = $$('[data-count]');
  if (!cells.length) return;

  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.closest('.num').classList.add('is-in');
      io.unobserve(el);

      const raw = el.textContent.trim();
      const target = Number(raw.replace(/[,\s]/g, ''));
      if (!Number.isFinite(target) || target <= 0 || REDUCED.matches) return;  // "[N]" → nothing to count

      const dur = 800, t0 = performance.now();   // --t-slow
      const fmt = new Intl.NumberFormat('th-TH');
      const tick = now => {
        const p = clamp01((now - t0) / dur);
        const e2 = 1 - Math.pow(1 - p, 3);       // settle
        el.textContent = fmt.format(Math.round(target * e2));
        if (p < 1) requestAnimationFrame(tick); else el.textContent = raw;
      };
      requestAnimationFrame(tick);
    });
  }, { rootMargin: '0px 0px -20% 0px' });

  cells.forEach(c => io.observe(c));
}

/* ══════════════════════════════════════════════════════════════════════
   [G2] FOUNDER TIMELINE — the single quantized moment in the build
   (--steps-q, GAME budget 1/3). Deliberately unlike §3: small mono
   figures on a rule, not giant display figures.
   The failure row opens on long-press OR Enter/Space — keyboard is
   mandatory, not a fallback.
   ══════════════════════════════════════════════════════════════════════ */
function initTimeline(){
  const rows = $$('.tl__row');
  if (!rows.length) return;

  const io = new IntersectionObserver(es => {
    es.forEach((e, i) => {
      if (e.isIntersecting){
        e.target.style.transitionDelay = (i * 60) + 'ms';    // --stagger-row
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -15% 0px' });
  rows.forEach(r => io.observe(r));

  const btn = $('.tl__reveal');
  if (!btn) return;
  const row = btn.closest('.tl__row');
  const toggle = () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    row.classList.toggle('is-open', !open);
  };

  let timer = null, held = false;
  btn.addEventListener('pointerdown', () => {
    held = false;
    timer = setTimeout(() => { held = true; toggle(); }, 600);
  });
  ['pointerup','pointerleave','pointercancel'].forEach(e =>
    btn.addEventListener(e, () => clearTimeout(timer)));
  // a plain click must not give the hidden detail away — only the long press does
  btn.addEventListener('click', ev => { if (!held) ev.preventDefault(); held = false; });
  btn.addEventListener('keydown', ev => {
    if (ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); toggle(); }
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [K3] PARTNER MARQUEE — names as type (0 KB, perfect optical alignment,
   inherits theme colour). Track ×4 so one loop is not legible as a
   repeat; clones are aria-hidden so each name is announced once.
   WCAG 2.2.2: the pause button is mandatory, not optional.
   ══════════════════════════════════════════════════════════════════════ */
function initMarquee(){
  const track = $('#mqTrack'), pause = $('#mqPause');
  if (!track) return;
  const set = $('.mq__set', track);

  for (let i = 0; i < 3; i++){
    const c = set.cloneNode(true);
    c.setAttribute('aria-hidden','true');
    track.appendChild(c);
  }

  const size = () => {
    const w = set.getBoundingClientRect().width;
    if (w > 0) track.style.setProperty('--mq-dur', (w / 40).toFixed(2) + 's');  // 40px/s, linear
  };
  size();
  addEventListener('resize', size);
  if (document.fonts) document.fonts.ready.then(size);

  if (!pause) return;
  pause.addEventListener('click', () => {
    const on = pause.getAttribute('aria-pressed') === 'true';
    pause.setAttribute('aria-pressed', on ? 'false' : 'true');
    track.style.animationPlayState = on ? 'running' : 'paused';
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [F1] PILLAR AUTO-ACCORDION — exactly one row open at a time, so each
   pillar gets a solo moment (which is what a 1:1 service is).
   A user click permanently overrides the auto behaviour.
   ══════════════════════════════════════════════════════════════════════ */
function initAccordion(){
  const btns = $$('.pil__btn');
  if (!btns.length) return;
  let manual = false;

  const open = i => btns.forEach((b, j) => b.setAttribute('aria-expanded', String(i === j)));

  btns.forEach((b, i) => b.addEventListener('click', () => {
    manual = true;
    const isOpen = b.getAttribute('aria-expanded') === 'true';
    open(isOpen ? -1 : i);
  }));

  if (REDUCED.matches) return;
  SCROLL.add(vh => {
    if (manual) return;
    let best = -1;
    btns.forEach((b, i) => {
      const r = b.getBoundingClientRect();
      if (r.top <= vh * 0.4) best = i;      // header crossed 40% of the viewport
    });
    if (best >= 0 && btns[best].getAttribute('aria-expanded') !== 'true') open(best);
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [Q2] PINNED SENTENCE — the frame never moves; only the slot changes.
   Crossfade, never slide: sliding reads as two things swapping places,
   crossfade reads as one thing changing. That difference is the effect.
   Pin budget 1/2. Not pinned below 768px — pinning eats the viewport and
   fights momentum scroll.
   ══════════════════════════════════════════════════════════════════════ */
function initPinnedSentence(){
  const pin = $('#pin'), words = $$('.pin__w');
  if (!pin || !words.length) return;

  const show = i => words.forEach((w, j) => w.classList.toggle('is-on', i === j));

  if (REDUCED.matches){ show(words.length - 1); return; }

  // Both paths are registered up front and decide at call time. Reading
  // DESKTOP.matches once at boot would strand the component on whatever
  // the viewport happened to be then — including a resize across 768px,
  // a tablet rotation, or a zero-size viewport during startup.
  let swapped = false;
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting && !DESKTOP.matches && !swapped){   // mobile: one swap on entry, no pin
      swapped = true; show(words.length - 1);
    }
  }), { rootMargin:'-30% 0px -30% 0px' });
  io.observe(pin);

  SCROLL.add(vh => {
    if (!DESKTOP.matches) return;
    const r = pin.getBoundingClientRect();
    const span = r.height - vh;
    const p = span > 0 ? clamp01(-r.top / span) : 0;
    show(Math.min(words.length - 1, Math.floor(p * words.length)));
  });

  DESKTOP.addEventListener('change', () => { swapped = false; show(0); SCROLL.kick(); });
}

/* the comparison pairs: left enters, right follows 120ms later (CSS delay) */
function initDiffRows(){
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin:'0px 0px -12% 0px' });
  $$('.diff__pair').forEach(p => io.observe(p));
}

/* ══════════════════════════════════════════════════════════════════════
   [H1] CLOSING DOORS — deliberately unequal. Zero JS in the conversion
   path itself: the primary door is a plain <a>, which no ad blocker can
   silently delete. This function only fills in the hrefs from CONTENT and
   marks the ones the client has not supplied yet.
   ══════════════════════════════════════════════════════════════════════ */
function initDoors(){
  const isPlaceholder = v => !v || /^\[.*\]$/.test(v);
  const cal = $('#calLink'), line = $('#lineLink');

  const mark = (el, token) => {
    el.setAttribute('aria-disabled','true');
    el.addEventListener('click', e => e.preventDefault());
    const tag = document.createElement('span');
    tag.className = 'mono';
    tag.style.display = 'block';
    tag.style.color = 'var(--fg-soft)';
    tag.textContent = token;
    el.after(tag);
  };

  if (cal){
    if (isPlaceholder(CONTENT.cta.calLink)) mark(cal, CONTENT.cta.calLink);
    else cal.href = CONTENT.cta.calLink;
  }
  if (line){
    if (isPlaceholder(CONTENT.cta.lineId)) mark(line, CONTENT.cta.lineId);
    // never line:// — deprecated for security. On desktop the scheme does
    // nothing at all, which is why the QR beside it is mandatory.
    else line.href = 'https://line.me/R/oaMessage/' + encodeURIComponent(CONTENT.cta.lineId);
  }

  ['#calLink','.door__line'].forEach(sel => {
    const el = $(sel); if (!el) return;
    el.addEventListener('pointerdown', () => el.classList.add('is-press'));
    ['pointerup','pointerleave','pointercancel'].forEach(e =>
      el.addEventListener(e, () => el.classList.remove('is-press')));
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [J1] NAV — press-state on pointerdown, not hover. Overlay traps focus
   and returns it to the burger on close.
   ══════════════════════════════════════════════════════════════════════ */
function initNav(){
  const nav = $('#nav'), burger = $('#burger'), ov = $('#navOverlay'), close = $('#navClose');
  if (!nav) return;

  const inkZones   = $$('.on-ink');
  const coralZones = $$('.wall__mask');     // the coral wipe pane, which slides over the ink
  const covers = (el, y) => { const r = el.getBoundingClientRect(); return r.top <= y && r.bottom >= y; };

  SCROLL.add(() => {
    nav.classList.toggle('is-stuck', scrollY > 8);
    const y = nav.offsetHeight * 0.5;
    const onCoral = coralZones.some(z => covers(z, y));
    const onInk   = !onCoral && inkZones.some(z => covers(z, y));
    nav.classList.toggle('is-clear', onCoral || onInk);
    nav.classList.toggle('is-inv', onInk);   // white type on ink only, never on coral
  });

  $$('.nav__links a, .navov__list a, .foot__nav a').forEach(a => {
    a.addEventListener('pointerdown', () => a.classList.add('is-press'));
    ['pointerup','pointerleave','pointercancel'].forEach(e =>
      a.addEventListener(e, () => a.classList.remove('is-press')));
  });

  if (!burger || !ov) return;
  const items = $$('a, button', ov);
  let lastFocus = null;

  const setOpen = on => {
    burger.setAttribute('aria-expanded', String(on));
    burger.setAttribute('aria-label', on ? 'ปิดเมนู' : 'เปิดเมนู');
    if (on){
      lastFocus = document.activeElement;
      ov.hidden = false;
      $$('.navov__list a', ov).forEach((a, i) => a.style.setProperty('--d', (i * 60) + 'ms'));
      requestAnimationFrame(() => ov.classList.add('is-open'));
      (items[0] || ov).focus({ preventScroll:true });
      document.body.style.overflow = 'clip';
    } else {
      ov.classList.remove('is-open');
      ov.hidden = true;
      document.body.style.overflow = '';
      (lastFocus || burger).focus({ preventScroll:true });
    }
  };

  burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
  burger.addEventListener('pointerdown', () => burger.classList.add('is-press'));
  ['pointerup','pointerleave','pointercancel'].forEach(e =>
    burger.addEventListener(e, () => burger.classList.remove('is-press')));
  if (close) close.addEventListener('click', () => setOpen(false));
  $$('.navov__list a', ov).forEach(a => a.addEventListener('click', () => setOpen(false)));

  ov.addEventListener('keydown', e => {
    if (e.key === 'Escape'){ setOpen(false); return; }
    if (e.key !== 'Tab' || !items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  });
}

/* ══════════════════════════════════════════════════════════════════════
   [L3] CURSOR TRAIL — desktop pointers only, hover budget 1/2.
   The shed words are TEXT, so they are --fg or teal, never coral.
   12 pooled nodes, reused; the layer is aria-hidden and click-through.
   On touch there is deliberately no substitute effect.
   ══════════════════════════════════════════════════════════════════════ */
function initCursorTrail(){
  const layer = $('#trail');
  if (!layer || !FINE.matches || REDUCED.matches) return;

  const N = 12, pool = [];
  for (let i = 0; i < N; i++){
    const b = document.createElement('b');
    b.textContent = CONTENT.trail[i % CONTENT.trail.length];
    layer.appendChild(b);
    pool.push({ el:b, until:0, x:0, y:0, dx:0, dy:0 });
  }

  let cursor = 0, last = 0, live = 0;
  addEventListener('pointermove', e => {
    const now = performance.now();
    if (now - last < 60) return;
    last = now;
    const n = pool[cursor];
    cursor = (cursor + 1) % N;
    n.x = e.clientX; n.y = e.clientY;
    n.dx = (Math.random() - 0.5) * 40;
    n.dy = -18 - Math.random() * 26;
    n.until = now + 600;
    n.el.style.transition = 'none';
    n.el.style.transform = `translate3d(${n.x}px, ${n.y}px, 0)`;
    n.el.style.opacity = '0.85';
    requestAnimationFrame(() => {
      n.el.style.transition = 'transform 600ms var(--ease-glide), opacity 600ms var(--ease-glide)';
      n.el.style.transform = `translate3d(${n.x + n.dx}px, ${n.y + n.dy}px, 0)`;
      n.el.style.opacity = '0';
    });
    if (!live){ live = 1; }
  }, { passive:true });
}

/* ══════════════════════════════════════════════════════════════════════
   COMPONENTS — one component, one labelled CSS block, one init.
   ══════════════════════════════════════════════════════════════════════ */
const COMPONENTS = {
  I1: initPreloader,   A5: initHeroSpecimen,   B2: initParallax,
  C1: initDualVoice,   D2: initWordWalls,      E1: initWordFill,
  P2: initCounters,    G2: initTimeline,       K3: initMarquee,
  F1: initAccordion,   Q2: initPinnedSentence, H1: initDoors,
  J1: initNav,         L3: initCursorTrail
};

/* A5 must run before I1 (the preloader flies into a word A5 creates). */
const ORDER = ['A5','B2','C1','D2','E1','P2','G2','K3','F1','Q2','H1','J1','L3','I1'];

/* dev-only: prove markup and CONTENT have not drifted apart. ?copycheck */
function copycheck(){
  const get = p => p.split('.').reduce((o,k) => (o == null ? o : (o[k] !== undefined ? o[k] : o[p])), CONTENT);
  let bad = 0;
  $$('[data-c]').forEach(el => {
    const path = el.dataset.c;
    let v = path.split('.').reduce((o,k) => o == null ? undefined : o[k], CONTENT);
    if (v === undefined) v = CONTENT[path];
    if (typeof v !== 'string'){ console.warn('[copycheck] no string at', path); bad++; return; }
    if (el.textContent.trim() !== v.trim()){
      console.warn('[copycheck] drift at', path, '\n  markup :', el.textContent.trim(), '\n  CONTENT:', v.trim());
      bad++;
    }
  });
  console.log(bad ? `[copycheck] ${bad} mismatch(es)` : '[copycheck] markup matches CONTENT');
  void get;
}

function boot(){
  ORDER.forEach(k => { try { COMPONENTS[k](); } catch (err) { console.error('[' + k + ']', err); } });
  initHeadingReveal();
  initCurtains();
  initDiffRows();
  armRevealFailsafe();
  SCROLL.start();
  if (location.search.includes('copycheck')){
    copycheck();
    window.__planc = { SCROLL, thaiWords, CONTENT };   // dev hook, flag-gated
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
