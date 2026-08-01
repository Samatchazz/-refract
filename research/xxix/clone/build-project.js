// Build a faithful project case-study page from ../content/project_<slug>.json
//   node clone/build-project.js aplos
const fs=require('fs'),path=require('path');
const ROOT='Z:/Claude Code/research/xxix';
const SLUG=process.argv[2]||'aplos';
const data=JSON.parse(fs.readFileSync(path.join(ROOT,`content/project_${SLUG}.json`),'utf8'));
const asset=p=>p?'../'+p.replace(/^\.\//,''):p;
const esc=s=>(s||'');
const mdLinks=s=>(s||'').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>');

function mediaTag(m,cls){
  if(!m||!m.src) return `<div class="${cls}" style="aspect-ratio:16/10;background:#f1f2f2"></div>`;
  return m.kind==='video'
    ? `<video class="${cls}" src="${asset(m.src)}" autoplay muted loop playsinline></video>`
    : `<img class="${cls}" src="${asset(m.src)}" alt="" loading="lazy">`;
}

function moduleHtml(m){
  if(m.type==='intro'){
    const details=(m.details||[]);
    // details come as alternating label/value pairs (Brief, <desc>, ...)
    let rows='';
    for(let i=0;i<details.length;i+=2){
      const label=details[i]?details[i].copy:''; const val=details[i+1]?details[i+1].copy:'';
      rows+=`<div class="detail-row"><span class="label">${esc(label)}</span>${mdLinks(val)}</div>`;
    }
    const callouts=(m.callouts||[]).map(c=>`<div class="callout ${c.font==='serif'?'serif':''}">${mdLinks(c.copy)}</div>`).join('');
    return `<section class="proj-intro">
      <h1>${esc(m.heading)}</h1>
      <div class="cols"><div>${rows}</div><div>${callouts}</div></div>
    </section>`;
  }
  if(m.type==='oneUp') return `<section class="oneUp">${mediaTag(m.media,'')}</section>`;
  if(m.type==='twoUp'){
    const side=s=>`<div>${mediaTag(s.media,'')}${s.caption?`<div class="cap">${esc(s.caption)}</div>`:''}</div>`;
    return `<section class="twoUp">${side(m.left)}${side(m.right)}</section>`;
  }
  return '';
}

const html=`<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>XXIX — ${esc(data.name)} (reference build)</title>
<link rel="stylesheet" href="style.css">
</head><body class="proj">
<div class="cursor" aria-hidden="true"></div>
<nav class="nav"><a class="pill" href="index.html">HOME</a><a class="pill" href="work.html">WORK</a></nav>
<div class="ref-banner">REFERENCE / STUDY BUILD — content &amp; fonts © XXIX. Replace via content/project_${SLUG}.json before any use.</div>
<main>
  <div class="proj-hero">${mediaTag(data.hero,'')}</div>
  ${data.modules.map(moduleHtml).join('\n')}
  <a class="proj-back" href="work.html">← Back to work</a>
</main>
<script>
(function(){var c=document.querySelector('.cursor');
if(!c||!matchMedia('(pointer:fine)').matches){if(c)c.style.display='none';return;}
var x=0,y=0,tx=0,ty=0;addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;});
(function l(){x+=(tx-x)*.2;y+=(ty-y)*.2;c.style.transform='translate('+x+'px,'+y+'px) translate(-50%,-50%)';requestAnimationFrame(l);})();
document.addEventListener('pointerover',function(e){c.classList.toggle('is-hover',!!e.target.closest('a,input,.pill'));});
})();
</script>
</body></html>`;

fs.writeFileSync(path.join(ROOT,`clone/project-${SLUG}.html`),html);
console.log(`built clone/project-${SLUG}.html — ${data.modules.length} modules`);
