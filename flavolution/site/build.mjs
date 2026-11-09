// Assemble site pages from _src partials:  node build.mjs
// Agency pages (home, services, about, contact) use the What Matters–style shell;
// the quiz keeps the original look C shell.
import fs from 'node:fs';

const VER = Date.now().toString(36);
const read = (f) => fs.readFileSync(`_src/${f}`, 'utf8');
const quizHead = read('_head-quiz.html');
const quizFoot = read('_foot-quiz.html');
const agHead = read('_head-agency.html');
const agFoot = read('_foot-agency.html');

const words = ['Hero dish +', 'Hidden gems +', 'Storytelling +', 'Back of house'];
const loader = `<div class="loader" hidden aria-hidden="true"><div class="loader__col disp">${Array(4).fill(words.map((w) => `<span>${w}</span>`).join('')).join('')}</div></div>
<script>(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches||sessionStorage.getItem('flav-loader'))return;sessionStorage.setItem('flav-loader','1');document.querySelector('.loader').hidden=false}catch(e){}})()</script>`;

const pages = [
  { out: 'index.html', body: 'index-agency', ag: true, active: 'HOME', loader: true, title: 'Flavolution — คนชี้เป้าของดีในร้านอาหารและคาเฟ่', desc: 'ของดีในร้านคุณมีอยู่แล้ว แค่คุณเห็นมันทุกวันจนลืม เราไปกิน ไปถาม แล้วทำให้มันขายได้ ตั้งแต่จานพระเอกยันหลังร้าน ควิซ 7 นาที ไม่ต้องกรอกอีเมล', js: ['js/data.js', 'js/agency.js'] },
  { out: 'quiz.html', body: 'quiz', ag: false, active: 'QUIZ', title: 'หนึ่งวันในร้านของคุณ — Flavolution', desc: 'ควิซ 25 ข้อ ไล่ดูหนึ่งวันในร้าน ตั้งแต่ไปตลาดเช้าจนปิดร้าน', js: ['js/data.js', 'js/quiz.js'] },
  { out: 'services.html', body: 'services-agency', ag: true, active: 'SVC', title: 'บริการ — Flavolution', desc: 'หาเมนูตัวชูโรง ดึงจุดขายที่มองข้าม เล่าเรื่องร้าน ระบบหลังบ้าน คิดให้ ทำให้ จนร้านทำเองได้ ร้านอาหารและคาเฟ่ทุกขนาด', js: ['js/agency.js'] },
  { out: 'about.html', body: 'about-agency', ag: true, active: 'ABOUT', title: 'เกี่ยวกับเรา — Flavolution', desc: 'คนทำคอนเทนต์สองคน ที่ช่วยให้ร้านอาหารเห็นของดีที่ตัวเองมี', js: ['js/agency.js'] },
  { out: 'contact.html', body: 'contact-agency', ag: true, active: 'CONTACT', title: 'ติดต่อ — Flavolution', desc: 'คุยฟรี 30 นาที ทาง LINE หรือโทร แล้วเราบอกตรงๆ ว่าควรเริ่มจากอะไร', js: ['js/data.js', 'js/agency.js'] },
];

for (const p of pages) {
  let h = (p.ag ? agHead : quizHead).replace('__TITLE__', p.title).replace('__DESC__', p.desc);
  for (const k of ['HOME', 'SVC', 'ABOUT', 'CONTACT', 'QUIZ']) h = h.replaceAll(`__A_${k}__`, k === p.active ? ' aria-current="page"' : '');
  if (p.ag) h = h.replace('__BODYCLASS__', `pg-${p.active.toLowerCase()}`).replace('__LOADER__', p.loader ? loader : '');
  const body = read(`${p.body}.body.html`);
  const scripts = p.js.map((s) => `<script src="${s}"></script>`).join('\n');
  // stamp local css/js so browsers never keep an old copy after a rebuild
  const html = (h + body + (p.ag ? agFoot : quizFoot).replace('__SCRIPTS__', scripts))
    .replace(/(href|src)="((?:css|js)\/[^"?]+)"/g, `$1="$2?v=${VER}"`);
  fs.writeFileSync(p.out, html);
  console.log('built', p.out);
}
