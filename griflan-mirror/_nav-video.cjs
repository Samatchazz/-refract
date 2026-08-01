// สลับโลโก้ nav — 3 แบบ
//   rig   = เวกเตอร์ rig ได้ (ตัวจริง) ← ค่าเริ่มต้น
//   video = วิดีโอโลโก้ไดคัทตอนรันไทม์
//   cat   = แมว raster ตัวเก่า
// ใช้: node _nav-video.cjs rig
const fs = require('fs');
const mode = (process.argv[2] || 'rig').toLowerCase();

const NAV_RIG = `<script>(function(){
  // PLANC-NAV-RIG
  var tries=0;
  var t=setInterval(function(){
    var holder=document.querySelector(".js-i-logo-post-fade");
    if(holder && window.PlanCRig && !holder.dataset.plancDone){
      holder.dataset.plancDone="1"; clearInterval(t);
      var cv=holder.querySelector("canvas"); if(cv) cv.style.display="none";
      var link=holder.closest("a")||holder.parentElement;
      var box=document.createElement("div");
      box.style.cssText="position:absolute;inset:0";
      holder.appendChild(box);
      if(link) link.style.pointerEvents="auto";
      var rig=window.PlanCRig.mount(box,{coat:"#f2efde",openMs:1800,hitArea:link||holder});
      if(link){
        link.addEventListener("mouseleave",function(){ rig.hover(false); });
      }
      window.__plancRig=rig;
    }
    if(++tries>100) clearInterval(t);
  },100);
})();</script>`;

const NAV_VIDEO = `<script>(function(){
  // PLANC-NAV-VIDEO
  var CFG = window.__navCrop = { x0:0.00, x1:1.00, y0:0.16, y1:0.76, tint:"#f2efde", scale:1.75, cut:1.15 };
  var tries=0;
  var t=setInterval(function(){
    var holder=document.querySelector(".js-i-logo-post-fade");
    if(holder && !holder.dataset.plancDone){
      holder.dataset.plancDone="1"; clearInterval(t);
      var cv0=holder.querySelector("canvas"); if(cv0) cv0.style.display="none";
      var link=holder.closest("a")||holder.parentElement;
      var box=document.createElement("div");
      box.style.cssText="position:absolute;inset:0;pointer-events:none;"+
        "transition:transform .45s cubic-bezier(.2,.9,.25,1);will-change:transform";
      holder.appendChild(box);
      var cv=document.createElement("canvas");
      cv.style.cssText="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)";
      box.appendChild(cv);
      var v=document.createElement("video");
      v.src="/assets/video/logo-anim.mp4";
      v.autoplay=true; v.loop=true; v.muted=true; v.playsInline=true;
      v.setAttribute("playsinline",""); v.setAttribute("muted","");
      v.style.cssText="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none";
      holder.appendChild(v);
      var work=document.createElement("canvas"), wx=work.getContext("2d",{willReadFrequently:true});
      var ox=cv.getContext("2d");
      var DPR=Math.min(window.devicePixelRatio||1, 2), rgb=[242,239,222];
      function hex2rgb(h){var m=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(h);
        return m?[parseInt(m[1],16),parseInt(m[2],16),parseInt(m[3],16)]:[242,239,222];}
      var W=0,H=0;
      function layout(){
        var lr=(link||holder).getBoundingClientRect();
        var cw=CFG.x1-CFG.x0, chh=CFG.y1-CFG.y0;
        var w=Math.max(40, lr.width*CFG.scale);
        var h=w*(chh/cw)*(v.videoHeight&&v.videoWidth?(v.videoHeight/v.videoWidth):1);
        W=Math.round(w); H=Math.round(h);
        cv.style.width=W+"px"; cv.style.height=H+"px";
        cv.width=Math.round(W*DPR); cv.height=Math.round(H*DPR);
        work.width=cv.width; work.height=cv.height;
      }
      function draw(){
        if(v.readyState>=2 && cv.width>0){
          rgb=hex2rgb(CFG.tint);
          var vw=v.videoWidth, vh=v.videoHeight;
          var sx=CFG.x0*vw, sy=CFG.y0*vh, sw=(CFG.x1-CFG.x0)*vw, sh=(CFG.y1-CFG.y0)*vh;
          wx.clearRect(0,0,work.width,work.height);
          wx.drawImage(v, sx,sy,sw,sh, 0,0,work.width,work.height);
          var img=wx.getImageData(0,0,work.width,work.height), d=img.data;
          for(var i=0;i<d.length;i+=4){
            var lum=(d[i]+d[i+1]+d[i+2])/3;
            var a=255-lum*CFG.cut;
            d[i+3]= a<0?0 : a>255?255 : a;
            d[i]=rgb[0]; d[i+1]=rgb[1]; d[i+2]=rgb[2];
          }
          ox.putImageData(img,0,0);
        }
        requestAnimationFrame(draw);
      }
      v.addEventListener("loadedmetadata", function(){ layout(); });
      addEventListener("resize", layout);
      layout(); draw();
      var kick=function(){ var q=v.play(); if(q&&q.catch) q.catch(function(){}); };
      kick();
      document.addEventListener("visibilitychange",function(){ if(!document.hidden) kick(); });
      ["click","scroll","touchstart","mousemove"].forEach(function(ev){
        addEventListener(ev, kick, {once:true, passive:true}); });
      // วิดีโอตอบสนองไม่ได้ ใช้ CSS ชดเชยเล็กน้อย
      var host=link||holder;
      if(host){
        host.style.pointerEvents="auto";
        host.addEventListener("mouseenter",function(){ box.style.transform="scale(1.07)"; });
        host.addEventListener("mouseleave",function(){ box.style.transform="scale(1)"; });
        host.addEventListener("click",function(){
          box.style.transform="scale(.9)";
          setTimeout(function(){ box.style.transform="scale(1)"; },160); });
      }
      window.__plancNavVid={video:v,canvas:cv,cfg:CFG,layout:layout};
    }
    if(++tries>100) clearInterval(t);
  },100);
})();</script>`;

const NAV_CAT = fs.readFileSync('_navblock.old.txt', 'utf8');

let h = fs.readFileSync('index.html', 'utf8');
const s = h.indexOf('<script>(function(){');
if (s < 0) { console.error('ไม่เจอ nav block'); process.exit(1); }
const e = h.indexOf('</script>', h.indexOf('if(++tries>100) clearInterval(t);', s)) + 9;
const cur = h.slice(s, e);
const next = mode === 'cat' ? NAV_CAT : mode === 'video' ? NAV_VIDEO : NAV_RIG;
h = h.slice(0, s) + next + h.slice(e);

// สลับไฟล์ที่ต้องโหลด: rig ใช้ plan-c-rig.js, cat ใช้ plan-c-cat.js, video ไม่ต้องใช้
const wanted = mode === 'cat' ? 'plan-c-cat.js' : mode === 'video' ? null : 'plan-c-rig.js';
h = h.replace(/<script src="\/assets\/plan-c-(?:cat|rig)\.js"><\/script>/g, '');
if (wanted) h = h.replace(next, '<script src="/assets/' + wanted + '"></script>\n' + next);

fs.writeFileSync('index.html', h);
console.log('nav →', mode, '| แทนที่ ' + cur.length + ' → ' + next.length + ' ตัวอักษร' +
  (wanted ? ' | โหลด ' + wanted : ' | ไม่ต้องโหลดสคริปต์'));
