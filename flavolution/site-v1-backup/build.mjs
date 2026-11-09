// Assemble site pages from _src partials:  node build.mjs
import fs from 'node:fs';

const head = fs.readFileSync('_src/_head.html', 'utf8');
const foot = fs.readFileSync('_src/_foot.html', 'utf8');
const mock = fs.readFileSync('../mock/dir-c.html', 'utf8');
const heroSvg = mock.match(/<svg viewBox="0 0 360 320"[\s\S]*?<\/svg>/)[0];

const pages = [
  { out: 'index.html', body: 'index', active: 'HOME', title: 'Flavolution — หนึ่งวันในร้านของคุณ', desc: 'ควิซ 7 นาทีสำหรับเจ้าของร้านอาหารและคาเฟ่ ผ่านหนึ่งวันในร้าน แล้วดูว่าคุณมองข้ามอะไรอยู่', js: ['js/data.js', 'js/pages.js'] },
  { out: 'quiz.html', body: 'quiz', active: 'QUIZ', title: 'หนึ่งวันในร้านของคุณ — Flavolution', desc: 'ควิซ 25 ข้อ ผ่านหนึ่งวันในร้าน ตั้งแต่ตลาดเช้าจนปิดร้าน', js: ['js/data.js', 'js/quiz.js'] },
  { out: 'services.html', body: 'services', active: 'SVC', title: 'บริการ — Flavolution', desc: 'หาเมนูตัวชูโรง ดึงจุดขายที่มองข้าม เล่าเรื่องร้าน และระบบหลังบ้าน สำหรับร้านอาหารและคาเฟ่', js: [] },
  { out: 'about.html', body: 'about', active: 'ABOUT', title: 'เกี่ยวกับเรา — Flavolution', desc: 'คนทำคอนเทนต์ที่ช่วยร้านอาหารเห็นของดีที่ตัวเองมี', js: [] },
  { out: 'contact.html', body: 'contact', active: 'CONTACT', title: 'ติดต่อ — Flavolution', desc: 'คุยฟรี 30 นาที ทาง LINE หรือโทร', js: ['js/data.js', 'js/pages.js'] },
];

for (const p of pages) {
  let h = head.replace('__TITLE__', p.title).replace('__DESC__', p.desc);
  for (const k of ['HOME', 'SVC', 'ABOUT', 'CONTACT', 'QUIZ']) h = h.replace(`__A_${k}__`, k === p.active ? ' aria-current="page"' : '');
  const body = fs.readFileSync(`_src/${p.body}.body.html`, 'utf8').replace('__HERO_SVG__', heroSvg);
  const scripts = p.js.map((s) => `<script src="${s}"></script>`).join('\n');
  fs.writeFileSync(p.out, h + body + foot.replace('__SCRIPTS__', scripts));
  console.log('built', p.out);
}
