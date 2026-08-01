// Build a faithful static clone from ../content/home.json.
// Re-run after editing home.json:  node clone/build.js
const fs = require('fs');
const path = require('path');
const ROOT = 'Z:/Claude Code/research/xxix';
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/home.json'), 'utf8'));

// PLACEHOLDER=1 → emit clone/template.html with copy + imagery stripped to
// neutral placeholders, keeping the exact structure/positions to build on.
const PH = !!process.env.PLACEHOLDER;
const PH_PALETTE = ['#f1f2f2','#e7e7e7','#ddd','#eaeaea'];
let phWordI = 0, phBlockI = 0;
const PH_WORDS = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore'.split(' ');
function phText(html){
  return (html||'').replace(/>([^<]+)</g, (m, t) => {
    if (!t.trim()) return m;
    const lead = (t.match(/^[\s⬤●→\-•]+/) || [''])[0];         // keep ⬤ → bullets/arrows
    const n = t.trim().split(/\s+/).length;
    const gen = Array.from({length:n}, () => PH_WORDS[phWordI++ % PH_WORDS.length]).join(' ');
    return '>' + lead + gen + '<';
  });
}

const COLOR = { dark:'#231f20', black:'#231f20', light:'#fff', white:'#fff',
  offwhite:'#f6fff1', beige:'#ffe57b', yellow:'#f8e71c', red:'#f57a5f', purple:'#9984ea' };
const esc = s => (s||'');
const asset = p => p ? '../' + p.replace(/^\.\//,'') : p;   // content paths are root-relative; page lives in /clone

// bodies mix HTML with light markdown (#### headings, [text](url) links)
function mdLite(s){
  if(!s) return '';
  return s.split('\n').map(line=>{
    const h = line.match(/^\s*(#{1,6})\s+(.*)$/);
    if(h){ const n=h[1].length; return `<h${n}>${h[2]}</h${n}>`; }
    return line;
  }).join('\n')
   .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

// vertical offsets: CMS offsetY is a generous absolute-ish push; scale gently for the stacked grid
const OY = 1.0, OX = 1;

function placement(pos, defSpan) {
  const st = [];
  if (pos.colStart && pos.colEnd) st.push(`grid-column:${pos.colStart}/${pos.colEnd}`);
  else st.push(`grid-column:span ${defSpan}`);
  if (pos.offsetY) st.push(`margin-top:${Math.round(pos.offsetY*OY)}px`);
  if (pos.offsetX) st.push(`margin-left:${Math.round(pos.offsetX*OX)}px`);
  return st.join(';');
}

function captionsHtml(m) {
  return (m.captions||[]).map(c => {
    const cls = ['caption', `caption--${c.position}`, c.fontColor==='light'?'caption--light':''].join(' ');
    const txt = PH ? '⬤ PROJECT NAME<br>Category / Discipline' : esc(c.text);
    return `<div class="${cls}">${txt}</div>`;
  }).join('');
}

function mediaInner(m) {
  const md = m.media; if (!md || !md.src) return '';
  const ar = m.aspectRatio ? `media--ar-${m.aspectRatio}` : '';
  const shadow = m.disableShadow ? '' : 'media--shadow';
  let inner;
  if (PH) {
    const c = PH_PALETTE[phBlockI++ % PH_PALETTE.length];
    const minh = ar ? '' : 'min-height:320px;';
    inner = `<div class="ph-block" style="width:100%;height:100%;${minh}background:${c};display:flex;align-items:center;justify-content:center;color:#999;font-size:13px;letter-spacing:.1em">${md.kind==='video'?'VIDEO':'IMAGE'}</div>`;
  } else {
    inner = md.kind === 'video'
      ? `<video src="${asset(md.src)}" autoplay muted loop playsinline${md.poster?` poster="${asset(md.poster)}"`:''}></video>`
      : `<img src="${asset(md.src)}" alt="" loading="lazy">`;
  }
  const body = `<div class="media ${ar} ${shadow}">${inner}${captionsHtml(m)}</div>`;
  return m.link && !PH ? `<a href="${m.link}">${body}</a>` : body;
}

function moduleHtml(m) {
  const s = m.style || {};
  const bg = s.bg ? `background:${s.bg};` : '';
  const fc = s.fontColor && COLOR[s.fontColor] ? `color:${COLOR[s.fontColor]};` : '';
  const width = s.width && s.width !== '100%' ? `width:${s.width};` : '';
  const defSpan = s.width === '100%' ? 6 : 5;
  const place = placement(m.pos || {}, defSpan);
  const styleAttr = `style="${place};${bg}${fc}${width}"`;

  if (m.type === 'master' || (m.body && m.type !== 'emailSignup')) {
    const inner = PH ? phText(mdLite(m.body)) : mdLite(m.body);
    const padded = s.bg ? `<div class="pad">${inner}</div>` : inner;
    return `<div class="module block" ${styleAttr}>${padded}</div>`;
  }
  if (m.type === 'media' || m.type === 'image') {
    return `<div class="module" ${styleAttr}>${mediaInner(m)}</div>`;
  }
  if (m.type === 'emailSignup') {
    const ph = PH ? 'Placeholder prompt' : esc(m.placeholder);
    const cta = PH ? 'Call to action →' : esc(m.cta);
    return `<div class="module" ${styleAttr}><div class="signup">
      <input type="email" placeholder="${ph}" aria-label="email">
      <span class="cta">${cta}</span></div></div>`;
  }
  return `<div class="module" ${styleAttr}>${m.body||''}</div>`;
}

const hero = data.hero;
const heroStyle = `style="grid-column:${hero.pos.colStart||1}/${hero.pos.colEnd||7};${hero.pos.offsetY?`margin-top:${Math.round(hero.pos.offsetY*OY)}px;`:''}"`;
const heroBody = PH ? phText(mdLite(hero.body)) : mdLite(hero.body);
const heroHtml = `<div class="module hero block" ${heroStyle}>${heroBody}</div>`;

const footer = data.footer || {};
const footHtml = PH ? `<footer class="foot">
  <div class="cols"><div class="loc"><b>CITY</b><span>Location one</span></div><div class="loc"><b>CITY</b><span>Location two</span></div><div class="loc"><b>CITY</b><span>Location three</span></div></div>
  <div class="cols"><div>Email placeholder</div><div>Social placeholder</div><div>Social placeholder</div></div>
</footer>` : `<footer class="foot">
  <div class="cols">${(footer.locations||[]).map(l=>`<div class="loc"><b>${esc(l.city)}</b><span>${esc(l.neighborhood)}</span></div>`).join('')}</div>
  <div class="cols">${(footer.socialLinks||[]).map(s=>`<div>${s.url?`<a href="${s.url}">${esc(s.label)}</a>`:esc(s.label)}</div>`).join('')}</div>
</footer>`;

const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${PH ? 'Scatter-grid template (replace-me)' : 'XXIX — faithful reference build (study only)'}</title>
<link rel="stylesheet" href="style.css">
</head><body>
<div class="cursor" aria-hidden="true"></div>
<nav class="nav"><a class="pill" href="index.html">HOME</a><a class="pill" href="../poc/index.html">POC</a></nav>
<div class="ref-banner">${PH ? 'TEMPLATE — structure only, copy &amp; imagery blanked. Fill in content/home.json (or drop your own JSON) and rebuild.' : 'REFERENCE / STUDY BUILD — content &amp; fonts © XXIX. Replace via content/home.json before any use.'}</div>
<main><div class="grid">
${heroHtml}
${data.modules.map(moduleHtml).join('\n')}
</div></main>
${footHtml}
<script>
(function(){var c=document.querySelector('.cursor');
if(!c||!matchMedia('(pointer:fine)').matches){if(c)c.style.display='none';return;}
var x=0,y=0,tx=0,ty=0;addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;});
(function l(){x+=(tx-x)*.2;y+=(ty-y)*.2;c.style.transform='translate('+x+'px,'+y+'px) translate(-50%,-50%)';requestAnimationFrame(l);})();
document.addEventListener('pointerover',function(e){c.classList.toggle('is-hover',!!e.target.closest('a,input,.pill'));});
})();
</script>
</body></html>`;

const outFile = PH ? 'clone/template.html' : 'clone/index.html';
fs.writeFileSync(path.join(ROOT, outFile), html);
console.log('built', outFile, '—', data.modules.length, 'modules', PH ? '(placeholder mode)' : '');
