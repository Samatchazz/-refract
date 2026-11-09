import fs from 'node:fs';
const src = fs.readFileSync('quiz/QUESTION-BANK-v2.md', 'utf8');
const html = `<!doctype html>
<html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Flavolution คลังคำถาม รุ่น 2</title>
<link href="https://fonts.googleapis.com/css2?family=Anuphan:wght@400;600;700&family=Mitr:wght@500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js"></script>
<style>
:root{--bg:#f7f2ea;--ink:#1f1a14;--muted:#6b6259;--acc:#c8552c;--line:#e3d9cb;--card:#fffdf9;--tag:#efe6d8}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Anuphan,system-ui,sans-serif;font-size:17px;line-height:1.75}
main{max-width:860px;margin:0 auto;padding:32px 20px 80px}
h1,h2,h3{font-family:Mitr,Anuphan,sans-serif;line-height:1.35}
h1{font-size:34px}h2{font-size:26px;color:var(--acc);margin-top:56px;padding-top:16px;border-top:2px solid var(--line)}
h2+p em{color:var(--muted)}
p strong{display:block;font-family:Mitr;font-size:19px;margin-top:22px;color:var(--ink)}
ul{list-style:none;padding:0;margin:6px 0 0}
li{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 14px;margin:6px 0}
li .tag{display:inline-block;background:var(--tag);color:var(--muted);font-size:13px;padding:1px 8px;border-radius:999px;margin-left:8px;white-space:nowrap}
li .reveal{color:var(--acc);font-size:14px;margin-left:6px}
table{border-collapse:collapse;width:100%;font-size:14.5px;background:var(--card)}th,td{border:1px solid var(--line);padding:6px 10px;vertical-align:top;text-align:left}th{background:var(--tag)}
hr{border:0;border-top:1px solid var(--line);margin:32px 0}
code{background:var(--tag);padding:1px 5px;border-radius:4px}
</style></head><body><main>
<div id="out"></div>
<script>
const SRC=${JSON.stringify(src)};
document.getElementById('out').innerHTML=marked.parse(SRC);
// split "→ [tags] เผย X" into styled parts
for(const li of document.querySelectorAll('li')){
  const h=li.innerHTML; const i=h.indexOf('→');
  if(i<0) continue;
  let rest=h.slice(i+1).trim(); let tag='';
  const m=rest.match(/^\\[([^\\]]+)\\]\\s*/); if(m){tag=m[1]; rest=rest.slice(m[0].length);}
  li.innerHTML=h.slice(0,i).trim()+(tag?'<span class="tag">'+tag+'</span>':'')+(rest && rest!=='—'?'<span class="reveal">'+rest+'</span>':'');
}
</script></main></body></html>`;
fs.writeFileSync('quiz/QUESTION-BANK-v2.html', html);
console.log('ok', html.length);
