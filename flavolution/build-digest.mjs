import fs from 'node:fs';
const R = 'research/';
const md = n => fs.readFileSync(R + n, 'utf8');
const files = {
  q: md('01-quiz-references.md'),
  w: md('02-web-references.md'),
  p: md('03-pain-points.md'),
  a: md('04-agencies.md'),
};
const overview = fs.readFileSync('digest-overview.html', 'utf8');

const html = `<!doctype html>
<html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Flavolution research digest</title>
<link href="https://fonts.googleapis.com/css2?family=Anuphan:wght@400;600;700&family=Mitr:wght@500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js"></script>
<style>
:root{--bg:#f7f2ea;--ink:#1f1a14;--muted:#6b6259;--acc:#c8552c;--line:#e3d9cb;--card:#fffdf9}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Anuphan,system-ui,sans-serif;font-size:17px;line-height:1.7}
main{max-width:980px;margin:0 auto;padding:32px 20px 80px}
h1,h2,h3{font-family:Mitr,Anuphan,sans-serif;line-height:1.35}
h1{font-size:40px;margin:8px 0 12px}h2{font-size:26px;margin:0 0 12px;color:var(--acc)}h3{font-size:20px}
.eyebrow{color:var(--muted);font-size:14px;letter-spacing:.04em;margin:0}
.lead{font-size:19px;color:#3a332c}
section{margin:36px 0;padding-top:8px}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.card{display:block;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;text-decoration:none;color:inherit}
.card .num{display:block;font-family:Mitr;font-size:38px;color:var(--acc);line-height:1}
.card b{display:block;margin:6px 0 2px}.card p{margin:0;font-size:14px;color:var(--muted)}
.callout{background:#fff4ec;border-left:4px solid var(--acc);padding:14px 18px;border-radius:0 12px 12px 0;margin:16px 0}
table.mini{width:100%;border-collapse:collapse;font-size:15px;margin:14px 0;background:var(--card)}
table.mini th,table.mini td{border:1px solid var(--line);padding:8px 10px;vertical-align:top;text-align:left}
table.mini th{background:#efe6d8;font-weight:600}
.axes,.dirs{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0}
.axes>div,.dirs>div{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px}
.axes p,.dirs p{margin:4px 0 0;font-size:15px;color:var(--muted)}
.muted{color:var(--muted);font-size:15px}
.ask{background:#1f1a14;color:#f7f2ea;border-radius:16px;padding:24px 28px}.ask h2{color:#f4a27a}.ask li{margin:6px 0}
details{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:6px 20px;margin:14px 0}
summary{cursor:pointer;font-family:Mitr;font-size:20px;padding:12px 0}
.md{font-size:15px;overflow-x:auto}.md table{border-collapse:collapse;min-width:100%;font-size:13.5px}.md th,.md td{border:1px solid var(--line);padding:6px 8px;vertical-align:top}.md th{background:#efe6d8}
.md h2{font-size:20px;margin-top:28px}.md h3{font-size:17px}.md a{color:var(--acc)}.md code{background:#efe6d8;padding:1px 4px;border-radius:4px}
@media(max-width:760px){.grid4,.axes,.dirs{grid-template-columns:1fr 1fr}h1{font-size:30px}}
@media(max-width:480px){.grid4,.axes,.dirs{grid-template-columns:1fr}}
</style></head><body><main>
${overview}
<h2 style="margin-top:48px">รายละเอียดเต็มแต่ละสาย (กดเปิด)</h2>
<details id="pain"><summary>03 · pain point 82 ข้อ + แกน + 8 บุคลิก + โครงควิซ</summary><div class="md" data-src="p"></div></details>
<details id="agency"><summary>04 · เอเจนซี่ 36 แห่ง + ราคา + เมนูบริการที่เสนอ</summary><div class="md" data-src="a"></div></details>
<details id="quiz"><summary>01 · ควิซอ้างอิง 22 เว็บ + บทเรียน</summary><div class="md" data-src="q"></div></details>
<details id="web"><summary>02 · เว็บอ้างอิง 32 เว็บ + 3 ทางภาพ</summary><div class="md" data-src="w"></div></details>
<script>
const SRC=${JSON.stringify(files).replace(/<\/script/gi, '<\\/script')};
for(const el of document.querySelectorAll('.md')){el.innerHTML=marked.parse(SRC[el.dataset.src]);}
document.querySelectorAll('.md a').forEach(a=>{a.target='_blank';a.rel='noopener'});
if(location.hash){const d=document.querySelector(location.hash);if(d)d.open=true}
</script></main></body></html>`;
fs.writeFileSync('research/DIGEST.html', html);
console.log('written', html.length);
