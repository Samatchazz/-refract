window.__VER="3.4.0",window.__NONCE=window.__NONCE||window.wpApiSettings&&window.wpApiSettings.nonce,window.__refresh=async function(){const e=await fetch("/wp-admin/admin-ajax.php",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"action=rest-nonce"});return window.__NONCE=(await e.text()).trim(),window.__NONCE},window.__api=async function(e,n){n=n||{};const t="/wp-json/wp/v2/"+(e=String(e).replace(/^\/?wp-json\//,"").replace(/^\/?wp\/v2\//,"").replace(/^\//,""))+(e.indexOf("?")>-1?"&":"?")+"_cb="+Date.now()+Math.random();for(let e=0;e<3;e++){const e=Object.assign({"X-WP-Nonce":window.__NONCE},n.body?{"Content-Type":"application/json"}:{}),o=await fetch(t,Object.assign({credentials:"include",cache:"no-store",headers:e},n));if(403!==o.status)return o.json();await window.__refresh()}throw new Error("__api ล้มเหลว 3 ครั้ง: "+e)},window.__MAP=window.__MAP||{},window.__pre=function(e){const n=[];if(!Array.isArray(e)||!e.length)return["ลิสต์ว่าง"];e.forEach((e,t)=>{e&&"object"==typeof e&&!Array.isArray(e)?(["key","fid","name","alt"].forEach(o=>{e[o]||n.push(t+": ไม่มี "+o)}),e.key&&e.name&&0!==e.name.indexOf(String(e.key).split("-")[0])&&n.push(t+": name ต้องขึ้นต้นด้วย prefix ของ key ("+e.key+" vs "+e.name+")")):n.push(t+": ต้องเป็น {key,fid,name,alt}")});const t=e.map(e=>e&&e.key).filter(Boolean);new Set(t).size!==t.length&&n.push("key ซ้ำ");const o=e.map(e=>e&&e.name).filter(Boolean);new Set(o).size!==o.length&&n.push("name ซ้ำ");const i=t.filter(e=>window.__MAP[e]);return i.length&&n.push("key เคยอัพไปแล้วในกะนี้: "+i.slice(0,3).join(",")),n.length?n:["OK "+e.length+" ใบ"]},window.__up1=async function(e,n,t){let o=null;for(let n=0;n<4;n++)try{const n=await fetch("https://lh3.googleusercontent.com/d/"+e+"=w1600"),t=await n.blob();if(t.size>5e3){o=t;break}}catch(e){}if(!o)throw new Error("ดึงรูปไม่ได้ "+e);const i=new FormData;i.append("file",o,n);const r=await fetch("/wp-json/wp/v2/media",{method:"POST",credentials:"include",headers:{"X-WP-Nonce":window.__NONCE},body:i}),s=await r.json();if(!s.id)throw new Error("อัพไม่ขึ้น "+n+" "+JSON.stringify(s).slice(0,120));return await window.__api("media/"+s.id,{method:"POST",body:JSON.stringify({alt_text:t,title:t})}),{id:s.id,url:s.source_url}},window.__runUp=function(e){Array.isArray(e)&&(e=e.map((e,n)=>Array.isArray(e)?{key:"k"+n,fid:e[0],name:e[1],alt:e[2]}:e)),e=e.map((e,n)=>Object.assign({},e,{key:e.key||"auto"+n}));const n=window.__pre(e);return 0!==n[0].indexOf("OK")?(console.log("__pre ไม่ผ่าน",n),window.__JOB={done:0,total:0,res:{},err:n},n):(window.__JOB={done:0,total:e.length,res:{},err:[]},async function(){for(const n of e){try{const e=await window.__up1(n.fid,n.name,n.alt);window.__JOB.res[n.key]=e,window.__MAP[n.key]=e}catch(e){window.__JOB.err.push(n.key+":"+e.message)}window.__JOB.done++}}(),"เริ่มอัพ "+e.length+" ใบ")},window.__own=function(e){const n=e.__k;if(!n)return["ไม่ได้ระบุ __k จึงตรวจรูปข้ามเมนูไม่ได้"];const t=Object.keys(window.__MAP).filter(e=>0===e.indexOf(n+"-")).map(e=>window.__MAP[e].url);if(!t.length)return["ไม่พบรูปของ "+n+" ใน __MAP"];const o=new Set(t),i=[],r=((e.content||"").replace(/<script[\s\S]*?<\/script>/g,"").match(/<img[^>]+src="([^"]+)"/g)||[]).map(e=>e.match(/src="([^"]+)"/)[1]),s=r.filter(e=>!o.has(e));return s.length&&i.push("รูปไม่ใช่ของเมนูนี้ "+s.length+" ใบ: "+s.map(e=>e.split("/").pop()).join(",")),e.__coverUrl&&(o.has(e.__coverUrl)||i.push("ปกไม่ใช่ของเมนูนี้"),r.indexOf(e.__coverUrl)>=0&&i.push("ปกซ้ำในเนื้อ")),i},window.__vpub=function(e,n){let t=[];const o=e.content||"";/[\u2013\u2014]/.test(o+e.title+e.slug+JSON.stringify(e.meta||{}))&&t.push("มีขีดยาว"),/[^\x00-\x7F]/.test(e.slug||"")&&t.push("slug ไม่ใช่อังกฤษ");const i=(o.replace(/<script[\s\S]*?<\/script>/g,"").match(/<img[^>]+src="([^"]+)"/g)||[]).map(e=>e.match(/src="([^"]+)"/)[1]),r=e.__src;if(r&&"number"==typeof r.usable&&"number"==typeof r.total){const e=i.length+1,n=Math.min(r.usable,8);e<n&&t.push("ใช้รูป "+e+" ใบ แต่โฟลเดอร์มีใบที่ใช้ได้ "+r.usable+" ใบ (ต้องใช้อย่างน้อย "+n+")"),e>8&&t.push("ใช้รูป "+e+" ใบ เกินเพดาน 8");const o=r.total-r.usable;o>0&&(!Array.isArray(r.dropped)||r.dropped.length!==o)&&t.push("ตัดรูป "+o+" ใบ แต่ระบุเหตุผลมา "+(r.dropped||[]).length+" ใบ"),Array.isArray(r.dropped)&&r.dropped.some(function(e){return!e||!e.why})&&t.push("มีรูปที่ตัดโดยไม่บอกเหตุผล")}else t.push("ไม่ได้บันทึก __src (โฟลเดอร์มีกี่ใบ/ใช้ได้กี่ใบ/ตัดใบไหนเพราะอะไร)");i.length<2&&t.push("รูปในเนื้อ "+i.length+" ใบ น้อยเกินไป"),n||(void 0===e.__labelPic||null===e.__labelPic||""===e.__labelPic?t.push("ไม่ได้ระบุ __labelPic (รูปไหนคือรูปฉลาก)"):"none"!==e.__labelPic&&"cover"!==e.__labelPic&&0!==e.__labelPic&&t.push("รูปฉลากอยู่ลำดับ "+e.__labelPic+" ต้องอยู่ 2 ใบแรก")),new Set(i).size!==i.length&&t.push("รูปซ้ำในเนื้อ"),e.featured_media||t.push("ไม่มี featured"),(e.categories||[]).length||t.push("ไม่มีหมวด"),(e.tags||[]).length<3&&t.push("แท็กแค่ "+(e.tags||[]).length);const s=e.meta||{};return s._yoast_wpseo_title||t.push("ไม่มี Yoast title"),s._yoast_wpseo_metadesc||t.push("ไม่มี Yoast desc"),(s._yoast_wpseo_metadesc||"").length>160&&t.push("Yoast desc ยาว "+s._yoast_wpseo_metadesc.length),/T\d\d:\d\d:\d\d/.test(e.date||"")||t.push("date ไม่มีเวลา"),!e.__cap||String(e.__cap).length<20?t.push("ไม่ได้ส่ง __cap (ข้อความแคปชั่นต้นฉบับ) จึงตรวจ traceability ไม่ได้"):t=t.concat(window.__vtrace(e.content||"",e.__cap)),t.concat(window.__own(e))},window.__vgate=async function(e,n){const t=[];for(let o=0;o<e.length;o++){const i=e[o],r=window.__vpub(i,n),s=await window.__api("posts?slug="+encodeURIComponent(i.slug)+"&status=publish,draft,pending,future&_fields=id");Array.isArray(s)&&s.length&&r.push("ลิงก์ชนของเดิม id="+s.map(e=>e.id).join(",")),t.push(o+":"+(r.length?r.join(","):"OK"))}return t.join(" | ")},window.__runPub=function(e){return window.__PJ={done:0,total:e.length,res:{},err:[]},async function(){for(const n of e){const e={};Object.keys(n).forEach(t=>{0!==t.indexOf("__")&&(e[t]=n[t])});try{if(/[–—]/.test(JSON.stringify(e)))throw new Error("DASH");const n=await window.__api("posts",{method:"POST",body:JSON.stringify(e)});if(!n.id)throw new Error(JSON.stringify(n).slice(0,150));window.__PJ.res[e.slug]=n}catch(n){window.__PJ.err.push(e.slug+":"+n.message)}window.__PJ.done++}}(),"เริ่มลง "+e.length+" โพสต์"},window.__HUB={recipes:42103,latest:43635,month711:42102},window.__hubOf=function(e,n){const t=String(e.date||"").slice(0,7),o=t===n,i=[];return e.isCook?i.push("recipes"):o?(i.push("latest"),i.push("month711")):i.push("month:"+t),i},window.__hub=async function(e,n){const t=[],o={};for(const i of e)for(const e of window.__hubOf(i,n)){if(0===e.indexOf("month:")){t.push(i.slug+" -> ต้องอยู่ในหน้าเดือน "+e.slice(6));continue}const n=window.__HUB[e];if(!o[n]){const e=await window.__api("posts/"+n+"?context=edit&_fields=content");o[n]=e.content&&(e.content.raw||e.content.rendered)||""}o[n].indexOf(i.slug)<0&&t.push("X "+i.slug+" ยังไม่อยู่ในหน้า "+e+" ("+n+")")}return t.length?t:["OK หน้าแม่ครบทุกตัว"]},window.__PILL="display:inline-block;background:#e0577b;color:#fff;padding:9px 18px;border-radius:999px;text-decoration:none;font-weight:700;font-size:15px;margin:6px 8px 2px 0;",window.__fig=(e,n)=>'<figure style="margin:18px 0;"><img src="'+e+'" alt="'+n+'" style="max-width:100%;height:auto;border-radius:12px;" /></figure>\n',window.__TH=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],window.__unk=e=>!e||/^(ไม่ระบุ|อ่านไม่ออก)/.test(String(e)),window.__rev=function(e){let n="<strong>"+e.verdict+"</strong>\n\n"+e.intro+"\n";for(let t=0;t<e.body.length;t++)n+=window.__fig(e.body[t].u,e.body[t].a)+e.body[t].c+"\n";const t=e.date.split("-"),o=(e,n)=>'<tr>\n<th scope="row">'+e+"</th>\n<td>"+n+"</td>\n</tr>\n";n+='<h3>บันทึกกินหนม</h3>\n<table class="kn-record">\n<tbody>\n'+o("ชื่อสินค้า",e.name)+o("ชื่อโรมัน",e.roman)+o("แบรนด์",e.brand)+o("ร้านที่เจอ",e.store)+o("ราคา",window.__unk(e.price)?"ไม่ระบุ":String(e.price).replace(/\s*บาท\s*$/,"")+" บาท")+o("หมวด",e.cat)+o("กินหนมเจอเมื่อ",'<time datetime="'+e.date+'">'+ +t[2]+" "+window.__TH[+t[1]-1]+" "+t[0]+"</time>")+"</tbody>\n</table>\n&nbsp;\n\n\n",n+=e.foot||'<p>👀 ตามส่องของใหม่กันต่อได้ที่ <a href="/new/" style="'+window.__PILL+'">ขนมในไทยออกใหม่ 50 รายการล่าสุด</a> และ <a href="/new-7-11-snacks/" style="'+window.__PILL+'">ขนมใหม่ 7-11 เดือนนี้</a></p>\n\n<strong>เคยกินอันนี้ไหม รสชาติเป็นยังไง เล่าให้ฟังในคอมเมนต์หน่อย</strong>\n\n';const i={"@context":"https://schema.org","@type":"Product",name:e.name,image:[e.cover.u].concat(e.body.map(e=>e.u)),description:e.verdict};window.__unk(e.brand)||(i.brand={"@type":"Brand",name:e.brand});const r=String(e.price||"").trim(),s=r.match(/^(\d+(?:\.\d+)?)\s*บาท?$/),a=r.match(/^(\d+(?:\.\d+)?)\s*[-–]\s*(\d+(?:\.\d+)?)\s*บาท?$/);return window.__unk(e.price)||(s?i.offers={"@type":"Offer",price:s[1],priceCurrency:"THB",availability:"https://schema.org/InStock"}:a&&(i.offers={"@type":"AggregateOffer",lowPrice:a[1],highPrice:a[2],priceCurrency:"THB",offerCount:2})),n+='<script type="application/ld+json">'+JSON.stringify(i)+"<\/script>",n},window.__b64=function(e){const n=atob(e),t=new Uint8Array(n.length);for(let e=0;e<n.length;e++)t[e]=n.charCodeAt(e);return new TextDecoder("utf-8").decode(t).replace(/^﻿/,"")},window.__norm=e=>String(e).replace(/[\s​|]+/g,"").replace(/[ๆฯ]/g,"").replace(/[^฀-๿a-zA-Z0-9]/g,""),window.__traceScore=function(e,n,t){t=t||6;const o=window.__norm(String(e).split("<h3>บันทึกกินหนม")[0].replace(/<script[\s\S]*?<\/script>/g,"").replace(/<figure[\s\S]*?<\/figure>/g,"").replace(/<[^>]+>/g,"|")),i=window.__norm(n);let r=0,s=0;for(let e=0;e+t<=o.length;e++)s++,i.indexOf(o.substr(e,t))>=0&&r++;const a=s?Math.round(r/s*100):0;return{bodyLen:o.length,capLen:i.length,trace:a,invent:100-a}},window.__vtrace=function(e,n){const t=window.__traceScore(e,n);return t.invent>10?["เนื้อหาที่ชี้กลับแคปชั่นไม่ได้ "+t.invent+"% (เพดาน 10%)"]:[]};;window.__VER='3.5.0';window.__vfoot=function(c){var e=[];c=String(c||'');if(/\bundefined\b|\bnull\b|\[object Object\]|\bNaN\b/.test(c))e.push('เนื้อหามีคำหลุด');if(c.indexOf('<h3>บันทึกกินหนม')<0)e.push('ไม่มีตารางบันทึกกินหนม');if(c.indexOf('href="/new')<0)e.push('ไม่มีลิงก์ท้ายโพสต์');if(c.indexOf('เล่าให้ฟังในคอมเมนต์')<0)e.push('ไม่มีบรรทัดชวนคอมเมนต์');return e;};if(!window.__vpub.__wrapped){window.__vpub0=window.__vpub;window.__vpub=function(p,c){return window.__vpub0(p,c).concat(window.__vfoot(p.content));};window.__vpub.__wrapped=1;};window.__PATCH2=1;window.__PILL2="display:inline-block;background:#e0577b;color:#fff;padding:6px 14px;border-radius:999px;text-decoration:none;font-weight:700;font-size:14px;";
window.__CARD="border:1px solid #eee;border-radius:12px;padding:14px 16px;margin:0 0 12px;";
window.__BTN="display:inline-block;background:#ee4d2d;color:#fff;padding:9px 18px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;margin-top:8px;";
window.__cfig=function(u,a){return '<figure style="margin:18px 0;"><img src="'+u+'" alt="'+a+'" style="max-width:100%;height:auto;border-radius:12px;" /></figure>';};
window.__ccard=function(n,url,eq){return '<div style="'+window.__CARD+'"><strong style="font-size:17px;">'+n+'</strong><br><a href="'+url+'" target="_blank" rel="nofollow sponsored noopener" style="'+window.__BTN+'">🛒 '+(eq?'ดูใน':'ซื้อใน')+' Shopee</a></div>';};
window.__cook=function(r){
 var h='<p><strong>'+r.sum+'</strong></p><p>'+r.intro+'</p>';
 h+='<h2>🛒 วัตถุดิบ</h2>'+window.__cfig(r.ingImg.u,r.ingImg.a);
 r.ing.forEach(function(x){h+=window.__ccard(x.n,x.url,false);});
 if(r.note)h+='<p>📍 '+r.note+'</p>';
 h+='<h2>👩‍🍳 วิธีทำ</h2>';
 r.steps.forEach(function(s,i){h+='<p><strong>'+(i+1)+'.</strong> '+s.t+'</p>';if(s.img)h+=window.__cfig(s.img.u,s.img.a);});
 h+='<h2>😋 หน้าตาตอนเสร็จ</h2><p>'+r.done+'</p>'+window.__cfig(r.doneImg.u,r.doneImg.a);
 if(r.eq&&r.eq.length){h+='<h2>🍳 อุปกรณ์ที่ใช้</h2>';r.eq.forEach(function(x){h+=window.__ccard(x.n,x.url,true);});}
 h+='\n<p>👀 อยากได้สูตรง่ายๆ แบบนี้อีก ดูทั้งหมดได้ที่ <a href="/easy-dessert-recipes/" style="'+window.__PILL+'">รวมสูตรขนมทำง่าย</a></p>\n';
 var ld={"@context":"https://schema.org","@type":"Recipe",name:r.name,author:{"@type":"Organization",name:"Kinnom"},image:[r.cover.u].concat(r.steps.filter(function(s){return s.img;}).map(function(s){return s.img.u;})),description:r.sum,recipeIngredient:r.ing.map(function(x){return x.n;}).concat(r.extraIng||[]),recipeInstructions:r.steps.map(function(s){return {"@type":"HowToStep",text:s.t};}),keywords:r.kw,totalTime:r.time};
 h+='<script type="application/ld+json">'+JSON.stringify(ld)+'<\/script>';
 return h;};
window.__chkCook0=function(p){var e=[];var c=p.content||'';
if(/[\u2013\u2014]/.test(c+p.title+p.slug+JSON.stringify(p.meta||{})))e.push('มีขีดยาว');
if(/[^\x00-\x7F]/.test(p.slug||''))e.push('slug ไม่ใช่อังกฤษ');
var cards=(c.match(/<div style="border:1px solid #eee/g)||[]).length;
var btns=(c.match(/🛒 (ซื้อใน|ดูใน) Shopee/g)||[]).length;
var links=(c.match(/https:\/\/s\.shopee\.co\.th\//g)||[]).length;
if(cards!==btns||cards!==links)e.push('การ์ด '+cards+' ปุ่ม '+btns+' ลิงก์ '+links+' ไม่เท่ากัน');
if(cards===0)e.push('ไม่มีการ์ดสินค้าเลย');
['🛒 วัตถุดิบ','👩‍🍳 วิธีทำ','😋 หน้าตาตอนเสร็จ'].forEach(function(s){if(c.indexOf(s)<0)e.push('ขาดหัวข้อ '+s);});
if(c.indexOf('kn-record')>=0)e.push('ห้ามมีตารางบันทึกกินหนม ในโพสต์สูตร');
if(c.indexOf('href="/new/"')>=0)e.push('ห้ามมีลิงก์ /new/ ในโพสต์สูตร');
if(c.indexOf('เล่าให้ฟังในคอมเมนต์')>=0)e.push('ห้ามมีบล็อกชวนคอมเมนต์ ในโพสต์สูตร');
if(c.indexOf('/easy-dessert-recipes/')<0)e.push('ไม่มีลิงก์หน้ารวมสูตร');
if(/\bundefined\b|\bnull\b|\[object Object\]|\bNaN\b/.test(c))e.push('เนื้อหามีคำหลุด');
if(c.indexOf('"@type":"Recipe"')<0)e.push('ไม่มี Recipe JSON-LD');
var im=(c.replace(/<script[\s\S]*?<\/script>/g,'').match(/<img[^>]+src="([^"]+)"/g)||[]).map(function(s){return s.match(/src="([^"]+)"/)[1];});
if(new Set(im).size!==im.length)e.push('รูปซ้ำในเนื้อ');
if(im.length<4)e.push('รูปในเนื้อ '+im.length+' ใบ น้อยเกินไป');
if(!p.featured_media)e.push('ไม่มี featured');
if((p.categories||[]).indexOf(13)<0)e.push('ไม่ได้อยู่หมวด Cooking#13');
if((p.tags||[]).length<3)e.push('แท็กแค่ '+(p.tags||[]).length);
var m=p.meta||{};if(!m._yoast_wpseo_title)e.push('ไม่มี Yoast title');if(!m._yoast_wpseo_metadesc)e.push('ไม่มี Yoast desc');
if((m._yoast_wpseo_metadesc||'').length>160)e.push('Yoast desc ยาว '+m._yoast_wpseo_metadesc.length);
if(!/T\d\d:\d\d:\d\d/.test(p.date||''))e.push('date ไม่มีเวลา');
if(!p.__cap||String(p.__cap).length<20)e.push('ไม่ได้ส่ง __cap');else e=e.concat(window.__vtrace(c,p.__cap));
return e.concat(window.__own(p));};
window.__chkCook=function(p,r){var e=window.__chkCook0(p);e=e.filter(function(x){return x.indexOf('ชี้กลับแคปชั่นไม่ได้')<0;});if(!r)e.push('ไม่ได้ส่ง recipe object จึงตรวจ traceability ไม่ได้');else{var t=window.__ctrace(r,p.__cap);if(t.invent>10)e.push('ข้อความสูตรที่ชี้กลับแคปชั่นไม่ได้ '+t.invent+'% (เพดาน 10%)');}return e;};
window.__ctrace=function(r,cap){var prose=[r.sum,r.intro].concat(r.steps.map(function(s){return s.t;})).concat([r.done,r.note||'']).join('|');var t=window.__traceScore(prose,cap);return t;};
window.__cgate=async function(list,recs){var out=[];for(var i=0;i<list.length;i++){var p=list[i];var e=window.__chkCook(p,recs[i]);var hit=await window.__api('posts?slug='+encodeURIComponent(p.slug)+'&status=publish,draft,pending,future&_fields=id');if(Array.isArray(hit)&&hit.length)e.push('ลิงก์ชนของเดิม id='+hit.map(function(x){return x.id;}).join(','));out.push(i+':'+(e.length?e.join(','):'OK'));}return out.join(' | ');};
window.__merge=async function(src,dst){var moved=[],err=[];for(var p=1;p<20;p++){var list=await window.__api('posts?tags='+src+'&per_page=50&status=publish,draft,pending,future&context=edit&_fields=id,tags');if(!Array.isArray(list)||!list.length)break;for(var i=0;i<list.length;i++){var po=list[i];var t=(po.tags||[]).filter(function(x){return x!==src;});if(t.indexOf(dst)<0)t.push(dst);var r=await window.__api('posts/'+po.id,{method:'POST',body:JSON.stringify({tags:t})});if(r.id)moved.push(po.id);else err.push(po.id);}if(list.length<50)break;}window.__MG='moved '+moved.length+' err '+err.length+' ids '+moved.slice(0,40).join(',');return window.__MG;};
window.__addRecipe=async function(hubId,postId,blurb){var r=await window.__api('posts/'+hubId+'?context=edit&_fields=content');var c=r.content.raw;var p=await window.__api('posts/'+postId+'?context=edit&_fields=title,slug,featured_media');if(c.indexOf('/'+p.slug+'/')>=0)return 'มีอยู่แล้ว';var m=await window.__api('media/'+p.featured_media+'?_fields=alt_text,media_details,source_url');var u=(m.media_details&&m.media_details.sizes&&m.media_details.sizes.medium_large)?m.media_details.sizes.medium_large.source_url:m.source_url;
var blk='<figure style="margin: 18px 0;"><img style="max-width: 100%; height: auto; border-radius: 12px;" src="'+u+'" alt="'+(m.alt_text||'').replace(/"/g,'')+'" /></figure>\n<h3>'+(p.title.raw||'')+'</h3>\n'+blurb+' <a href="/'+p.slug+'/" style="'+window.__PILL2+'">อ่านสูตรเต็ม →</a>\n';
var i=c.indexOf('<h2',c.lastIndexOf('<figure'));if(i<0)return 'ERR ไม่เจอจุดแทรก';var nc=c.slice(0,i)+blk+c.slice(i);
if(/[–—]/.test(blk))return 'ERR มีขีดยาว';
var w=await window.__api('posts/'+hubId,{method:'POST',body:JSON.stringify({content:nc})});return w.id?('OK figs'+((w.content&&w.content.raw)?(w.content.raw.match(/<figure/g)||[]).length:'?')):'ERR';};
window.__vfoot=function(c){var e=[];c=String(c||'');if(/\bundefined\b|\bnull\b|\[object Object\]|\bNaN\b/.test(c))e.push('เนื้อหามีคำหลุด');if(c.indexOf('<h3>บันทึกกินหนม')<0)e.push('ไม่มีตารางบันทึกกินหนม');if(c.indexOf('href="/new')<0)e.push('ไม่มีลิงก์ท้ายโพสต์');if(c.indexOf('เล่าให้ฟังในคอมเมนต์')<0)e.push('ไม่มีบรรทัดชวนคอมเมนต์');return e;};
window.__FOOT12="<p>👀 ตามส่องของใหม่กันต่อได้ที่ <a href=\"/new/\" style=\"display:inline-block;background:#e0577b;color:#fff;padding:9px 18px;border-radius:999px;text-decoration:none;font-weight:700;font-size:15px;margin:6px 8px 2px 0;\">ขนมในไทยออกใหม่ 50 รายการล่าสุด</a> และ <a href=\"/new-7-11-snacks-2025-12/\" style=\"display:inline-block;background:#e0577b;color:#fff;padding:9px 18px;border-radius:999px;text-decoration:none;font-weight:700;font-size:15px;margin:6px 8px 2px 0;\">ขนมใหม่ 7-11 ธันวาคม 2025</a></p>\n\n<strong>เคยกินอันนี้ไหม รสชาติเป็นยังไง เล่าให้ฟังในคอมเมนต์หน่อย</strong>\n\n";
window.__VER='3.6.0';

;/* ===== v4.1.7 gates layer (2 ก.ย. 2026) — ทำให้ขั้นตอนข้ามไม่ได้ =====
   ลำดับบังคับต่อ 1 ชุด:  __selftest() → __open(k, items, pics) → __runUp(pics) → __vgate/__cgate(list) → __runPub(list) → __close(k, tsvText)
   ข้ามขั้นไหน = ฟังก์ชันถัดไปปฏิเสธพร้อมบอกเหตุผล  สถานะเก็บใน localStorage.knst (รอด reload)
*/
window.__VER='4.1.8';
window.__h = function (t) { t = String(t); var x = 0; for (var i = 0; i < t.length; i++) x = (x * 31 + t.charCodeAt(i)) >>> 0; return x; };
window.__ST = { ver: '4.1.7', selftest: 0, cur: null, sets: {} };
(function () { try { var s = JSON.parse(localStorage.getItem('knst') || 'null'); if (s && /^4\./.test(String(s.ver || ''))) { if (s.ver !== '4.1.7') { s.ver = '4.1.7'; s.selftest = 0; } window.__ST = s; } } catch (e) { } })(); /* v4.1.7: อัพเวอร์ชันแล้วชุดที่เปิดอยู่ต้องไม่หาย (บั๊กเดิมทำ janb/feba หาย) */
window.__save = function () { try { localStorage.setItem('knst', JSON.stringify(window.__ST)); } catch (e) { } return 'saved'; };

/* ---- log เดียว (ก3) : ทุกอย่างลง __LOG + localStorage.knlog  ดึงเป็น TSV ด้วย __dumpLog() ---- */
window.__LOG = (function () { try { return JSON.parse(localStorage.getItem('knlog') || '[]'); } catch (e) { return []; } })();
window.__log = function (kind, o) {
  var row = Object.assign({ t: new Date().toISOString().slice(0, 19), kind: kind, set: window.__ST.cur || '' }, o || {});
  window.__LOG.push(row); if (window.__LOG.length > 3000) window.__LOG = window.__LOG.slice(-3000);
  try { localStorage.setItem('knlog', JSON.stringify(window.__LOG)); } catch (e) { }
  return row;
};
window.__dumpLog = function (n) {
  var rows = window.__LOG.slice(-(n || 200));
  var cols = ['t', 'kind', 'set', 'slug', 'id', 'row', 'brand', 'price', 'dev', 'note'];
  return cols.join('\t') + '\n' + rows.map(function (r) { return cols.map(function (c) { var v = r[c]; if (Array.isArray(v)) v = v.join(' / '); return String(v == null ? '' : v).replace(/[\t\n]/g, ' '); }).join('\t'); }).join('\n');
};

/* ---- แท็กต้อง "ถูก" ไม่ใช่แค่ "มี" (ก2) ---- */
window.__TAGS = window.__TAGS || {};
window.__TAG_OK = { 3847: 'ทำขนม (โครงสร้าง: ทุกโพสต์สูตร)', 3996: 'หม้อทอดไร้น้ำมัน (อุปกรณ์)' };
window.__tagfetch = async function (ids) {
  var miss = ids.filter(function (i) { return !window.__TAGS[i]; });
  for (var i = 0; i < miss.length; i += 50) {
    var r = await window.__api('tags?include=' + miss.slice(i, i + 50).join(',') + '&per_page=50&_fields=id,name,count');
    (Array.isArray(r) ? r : []).forEach(function (t) { window.__TAGS[t.id] = { name: t.name, count: t.count }; });
  }
  return ids.map(function (i) { return window.__TAGS[i] || null; });
};
window.__tagcheck = async function (p) {
  var e = [], ids = (p.tags || []).map(Number);
  if (!ids.length) return ['ไม่มีแท็ก'];
  if (new Set(ids).size !== ids.length) e.push('แท็กซ้ำ');
  var info = await window.__tagfetch(ids);
  var hay = window.__norm([p.title, p.__cap, p.__brand, p.__menu, (p.meta || {})._yoast_wpseo_title].join('|'));
  ids.forEach(function (id, i) {
    var t = info[i];
    if (!t) { e.push('แท็ก #' + id + ' ไม่มีอยู่จริง'); return; }
    if (window.__TAG_OK[id]) return;
    var nm = window.__norm(t.name);
    if (!nm || hay.indexOf(nm) < 0) e.push('แท็ก "' + t.name + '" (#' + id + ') ไม่พบใน title/แคปชั่น/แบรนด์');
  });
  return e;
};

/* ---- ช่อง __dev บังคับส่ง (ก3) ---- */
window.__devcheck = function (p) {
  if (!Array.isArray(p.__dev)) return ['ไม่ได้ส่ง __dev (สิ่งที่ตัดสินใจเอง: แก้คำผิด/ตัดรูป/ขั้นตอนไม่มีรูป — ส่ง [] ได้ถ้าไม่มี)'];
  return p.__dev.some(function (x) { return !x || !String(x).trim(); }) ? ['__dev มีรายการว่าง'] : [];
};

/* ---- คิวรอเคาะ (ข8): แถว owner=Mat ที่เกิน deadline ยัง open = เปิดชุดใหม่ไม่ได้ ---- */
window.__deccheck = function (tsv, today) {
  if (!tsv || String(tsv).length < 50) return ['ต้องส่ง opts.decisions = เนื้อไฟล์ claude/queue/decisions.tsv (อ่านสดก่อนเปิดชุด)'];
  today = today || new Date().toISOString().slice(0, 10);
  var late = [], open = 0;
  String(tsv).split('\n').forEach(function (l) {
    if (!l || l[0] === '#' || l.indexOf('id\t') === 0) return;
    var c = l.split('\t'); if (c.length < 10) return;
    if (c[9].trim() !== 'open') return; open++;
    if (c[3].trim() === 'Mat' && c[2].trim() < today) late.push(c[0]);
  });
  return late.length ? ['คิวรอเคาะเกินกำหนด ' + late.length + ' แถว (' + late.join(',') + ') — Mat ต้องเคาะก่อนถึงเปิดชุดใหม่ได้'] : [];
};

/* ---- ด่านเดียวเปิดชุด (ก1) ---- */
window.__pubKey = function (p) { var o = {}; Object.keys(p).forEach(function (k) { if (k.indexOf('__') !== 0) o[k] = p[k]; }); return window.__h(JSON.stringify(o)); };
window.__open = async function (k, items, pics, opts) {
  var e = [], st = window.__ST;
  if (!k || !/^[a-z]+\d*$/.test(k)) e.push('k ต้องเป็น prefix เช่น dec40 / jan37');
  if (st.cur && st.cur !== k && !st.sets[st.cur].closed) e.push('ชุดก่อน ' + st.cur + ' ยังไม่ __close (ยังไม่ save ขึ้นโปรเจกต์)');
  if (st.sets[k] && st.sets[k].closed) e.push('ชุด ' + k + ' ปิดไปแล้ว');
  if (!Array.isArray(items) || !items.length) e.push('items ว่าง');
  else items.forEach(function (it, i) {
    if (!it.row || !it.menu || !it.slug) e.push('items[' + i + '] ต้องมี row/menu/slug');
    if (!it.cap || String(it.cap).length < 20) e.push('items[' + i + '] ไม่มี cap (แคปชั่นเต็มจาก download_file_content)');
    else if (String(it.cap).indexOf('📍') < 0 && it.noPin !== true) e.push('items[' + i + '] แคปชั่นไม่มีบรรทัด 📍 (โดนตัดท้าย? ถ้าไม่มีจริงส่ง noPin:true)');
  });
  opts = opts || {};
  e = e.concat(window.__deccheck(opts.decisions));
  if (!Array.isArray(pics) || !pics.length) e.push('pics ว่าง');
  else {
    var pre = window.__pre(pics); if (pre[0].indexOf('OK') !== 0) e = e.concat(pre.map(function (x) { return 'pics: ' + x; }));
    pics.forEach(function (p, i) { if (String(p.key).indexOf(k + '-') !== 0) e.push('pics[' + i + '] key ต้องขึ้นต้น ' + k + '-'); });
  }
  if (e.length) return e;
  var dup = await window.__dup(items);
  var hard = dup.filter(function (x) { return x.indexOf('ลิงก์ชน') >= 0 || x.indexOf('ชื่อซ้ำ') >= 0; });
  if (hard.length) return hard;
  st.cur = k; st.sets[k] = { opened: Date.now(), cook: !!opts.cook, rows: items.map(function (i) { return i.row; }), slugs: items.map(function (i) { return i.slug; }), gated: {}, pub: {}, closed: false };
  window.__save(); window.__log('open', { note: k + ' rows ' + st.sets[k].rows.join(',') });
  var warn = dup.filter(function (x) { return x.indexOf('OK') !== 0; });
  return ['OPEN ' + k + ' ' + items.length + ' แถว ' + pics.length + ' รูป'].concat(warn);
};

/* ---- ตัวอัพรูปปฏิเสธถ้ายังไม่ __open ---- */
window.__upGuard = function (list) {
  var st = window.__ST, e = [];
  if (!st.cur || !st.sets[st.cur] || st.sets[st.cur].closed) return ['ยังไม่ __open ชุด'];
  (list || []).forEach(function (p, i) { var key = Array.isArray(p) ? '' : (p.key || ''); if (String(key).indexOf(st.cur + '-') !== 0) e.push('รูป[' + i + '] key "' + key + '" ไม่ใช่ของชุด ' + st.cur); });
  return e;
};
if (!window.__runUp.__v4) { window.__runUp0 = window.__runUp; window.__runUp = function (list) { var g = window.__upGuard(list); if (g.length) { window.__JOB = { done: 0, total: 0, res: {}, err: g }; return g; } return window.__runUp0(list); }; window.__runUp.__v4 = 1; }

/* ---- ด่านก่อนลง: บันทึกว่าโพสต์ไหนผ่านแล้ว (hash ของ payload) ---- */
window.__PARENT = { 'sunmoulin': 'ยามาซากิ', 'sunmulin': 'ยามาซากิ', 'ซันมูลัน': 'ยามาซากิ', 'ซันมูแลง': 'ยามาซากิ', 'ซันมูลิน': 'ยามาซากิ', 'แซงเอตัวล': 'ยามาซากิ', 'sainteoile': 'ยามาซากิ', 'flavorfield': 'ยามาซากิ', 'jsbakery': 'ยามาซากิ' };
window.__brandInCap = function (brand, cap) { var b = window.__norm(brand).toLowerCase(); if (cap.toLowerCase().indexOf(b) >= 0) return true; return Object.keys(window.__PARENT).some(function (k) { return window.__PARENT[k] === b && cap.toLowerCase().indexOf(k) >= 0; }); };
window.__evidence = function (p, isCook) {
  if (isCook) return [];
  var e = [], cap = window.__norm(p.__cap || '');
  if (p.__brand === undefined) e.push('ไม่ได้ส่ง __brand (ใส่ "ไม่ระบุ" ได้ถ้าแคปชั่นไม่บอกและอ่านฉลากไม่ได้)');
  else if (!window.__unk(p.__brand) && !window.__brandInCap(p.__brand, cap) && !/^(zoom|sheet):.+/.test(p.__brandSrc || '')) e.push('แบรนด์ "' + p.__brand + '" ไม่อยู่ในแคปชั่น และไม่ได้ระบุ __brandSrc:"zoom:<ไฟล์>"');
  if (p.__price === undefined) e.push('ไม่ได้ส่ง __price (ใส่ "ไม่ระบุ" ได้ถ้าแคปชั่นไม่บอก)');
  else if (!window.__unk(p.__price)) { var nums = String(p.__price).match(/\d+(?:\.\d+)?/g) || []; nums.forEach(function (n) { if (String(p.__cap || '').indexOf(n) < 0) e.push('ราคา ' + n + ' ไม่อยู่ในแคปชั่น'); }); }
  return e;
};
window.__gateExtra = async function (p, i, isCook) {
  var e = window.__devcheck(p).concat(await window.__tagcheck(p)).concat(window.__evidence(p, isCook));
  var st = window.__ST;
  if (!st.cur) e.push('ยังไม่ __open ชุด');
  else if (p.__k && String(p.__k).indexOf(st.cur) !== 0) e.push('__k ' + p.__k + ' ไม่ตรงชุดที่เปิด ' + st.cur);
  return e;
};
if (!window.__vgate.__v4) { window.__vgate0 = window.__vgate; window.__vgate = async function (list, isCook) {
  var base = (await window.__vgate0(list, isCook)).split(' | ');
  var out = [];
  for (var i = 0; i < list.length; i++) {
    var errs = base[i].replace(/^\d+:/, ''); errs = errs === 'OK' ? [] : errs.split(',');
    errs = errs.concat(await window.__gateExtra(list[i], i, !!isCook));
    if (!errs.length && window.__ST.cur) { window.__ST.sets[window.__ST.cur].gated[list[i].slug] = window.__pubKey(list[i]); }
    out.push(i + ':' + (errs.length ? errs.join(',') : 'OK'));
  }
  window.__save(); return out.join(' | ');
}; window.__vgate.__v4 = 1; }
if (!window.__cgate.__v4) { window.__cgate0 = window.__cgate; window.__cgate = async function (list, recs) {
  var base = (await window.__cgate0(list, recs)).split(' | ');
  var out = [];
  for (var i = 0; i < list.length; i++) {
    var errs = base[i].replace(/^\d+:/, ''); errs = errs === 'OK' ? [] : errs.split(',');
    errs = errs.concat(await window.__gateExtra(list[i], i, true));
    if (!errs.length && window.__ST.cur) { window.__ST.sets[window.__ST.cur].gated[list[i].slug] = window.__pubKey(list[i]); }
    out.push(i + ':' + (errs.length ? errs.join(',') : 'OK'));
  }
  window.__save(); return out.join(' | ');
}; window.__cgate.__v4 = 1; }

/* ---- ตัวลงโพสต์ปฏิเสธถ้า: ยังไม่ selftest / ยังไม่ผ่านด่าน / payload เปลี่ยนหลังผ่านด่าน ---- */
window.__pubGuard = function (list) {
  var st = window.__ST, e = [];
  if (!st.selftest || st.selftest.ver !== window.__VER || Date.now() - st.selftest.t > 12 * 3600 * 1000) e.push('ยังไม่ __selftest ในกะนี้ (หรือ toolkit เปลี่ยนเวอร์ชัน)');
  if (!st.cur || !st.sets[st.cur] || st.sets[st.cur].closed) e.push('ยังไม่ __open ชุด');
  else (list || []).forEach(function (p, i) {
    var g = st.sets[st.cur].gated[p.slug];
    if (!g) e.push('[' + i + '] ' + p.slug + ' ยังไม่ผ่าน __vgate/__cgate');
    else if (g !== window.__pubKey(p)) e.push('[' + i + '] ' + p.slug + ' payload เปลี่ยนหลังผ่านด่าน ต้อง gate ใหม่');
  });
  return e;
};
if (!window.__runPub.__v4) { window.__runPub0 = window.__runPub; window.__runPub = function (list) {
  var g = window.__pubGuard(list);
  if (g.length) { window.__PJ = { done: 0, total: 0, res: {}, err: g }; return g; }
  var r = window.__runPub0(list);
  (async function () {
    while (window.__PJ.done < window.__PJ.total) await new Promise(function (ok) { setTimeout(ok, 1500); });
    var set = window.__ST.sets[window.__ST.cur];
    list.forEach(function (p) {
      var res = window.__PJ.res[p.slug];
      if (res && res.id) { set.pub[p.slug] = res.id; window.__log('pub', { slug: p.slug, id: res.id, row: p.__row || '', brand: p.__brand || '', price: p.__price || '', dev: p.__dev || [] }); }
      else window.__log('puberr', { slug: p.slug, note: (window.__PJ.err.filter(function (x) { return x.indexOf(p.slug) === 0; })[0] || '') });
    });
    window.__save();
  })();
  return r;
}; window.__runPub.__v4 = 1; }

/* ---- ตรวจตาบอด (ข7, Mat เคาะ 100%): agent ตรวจกรอก {name,brand,store,price} จากแคปชั่น+รูปเท่านั้น แล้ว __cmp เทียบกับตารางในโพสต์ ---- */
window.__record = function (content) {
  var o = {}, re = /<th scope="row">([^<]+)<\/th>\s*<td>([\s\S]*?)<\/td>/g, m;
  while ((m = re.exec(content || ''))) o[m[1].trim()] = m[2].replace(/<[^>]+>/g, '').trim();
  return { name: o['ชื่อสินค้า'] || '', roman: o['ชื่อโรมัน'] || '', brand: o['แบรนด์'] || '', store: o['ร้านที่เจอ'] || '', price: o['ราคา'] || '' };
};
/* ชื่อเดียวกันคนละสะกด: เทียบหลัง normalize ให้เป็นตัวแทนเดียว */
window.__ALIAS = { 'yamazaki': 'ยามาซากิ', 'sunmulin': 'sunmoulin', 'ซันมูลิน': 'sunmoulin', 'ซันมูลัน': 'sunmoulin', 'ซันมูแลง': 'sunmoulin', 'เซเว่น': '7-11', '7eleven': '7-11', '711': '7-11', 'เซเว่นอีเลฟเว่น': '7-11', 'lawson108': 'lawson', 'ลอว์สัน': 'lawson', 'ลอว์สัน108': 'lawson', 'ดองกิ': 'donki', 'dondondonki': 'donki', 'แม็คโคร': 'makro', 'แมคโคร': 'makro', 'วอลล์': 'walls', 'wall\'s': 'walls', 'เซเว่นอีเลฟเว่น': '7-11', '7-eleven': '7-11' };
window.__canon = function (s) { var n = window.__norm(String(s || '').replace(/\s*[\(（][^\)）]*[\)）]/g, '')).toLowerCase(); Object.keys(window.__ALIAS).forEach(function (k) { n = n.split(k).join(window.__ALIAS[k]); }); return n; };
window.__cmp0 = function (rec, blind) {
  var d = [], N = window.__canon;
  var rb = N(rec.brand), bb = N(blind.brand);
  var bothKnown = !window.__unk(rec.brand) && !window.__unk(blind.brand), contains = bothKnown && rb.length >= 3 && bb.length >= 3 && (bb.indexOf(rb) >= 0 || rb.indexOf(bb) >= 0);
  if (!(rb === bb || contains || (window.__unk(rec.brand) && window.__unk(blind.brand)) || window.__PARENT[bb] === rb || window.__PARENT[N(window.__PARENT[bb] || '')] === rb)) d.push('แบรนด์: โพสต์ "' + rec.brand + '" vs ตรวจ "' + blind.brand + '"');
  var rp = (String(rec.price).match(/\d+(?:\.\d+)?/g) || []).join('-'), bp = (String(blind.price || '').match(/\d+(?:\.\d+)?/g) || []).join('-');
  if (rp !== bp) d.push('ราคา: โพสต์ "' + rec.price + '" vs ตรวจ "' + blind.price + '"');
  var rs = N(rec.store), bs = N(blind.store);
  if (rs && bs && rs.indexOf(bs) < 0 && bs.indexOf(rs) < 0) d.push('ร้าน: โพสต์ "' + rec.store + '" vs ตรวจ "' + blind.store + '"');
  var rn = N(rec.name), rr = N(rec.roman), bn = N(blind.name);
  if (bn && !window.__unk(blind.name) && !(rn.indexOf(bn) >= 0 || bn.indexOf(rn) >= 0 || (rr && (rr.indexOf(bn) >= 0 || bn.indexOf(rr) >= 0)))) d.push('ชื่อ: โพสต์ "' + rec.name + '" vs ตรวจ "' + blind.name + '"');
  return d;
};
window.__cmp = async function (postId, blind) {
  var p = await window.__api('posts/' + postId + '?context=edit&_fields=id,content');
  if (!p.id) return ['ไม่พบโพสต์ ' + postId];
  var rec = window.__record(p.content.raw || p.content.rendered), d = window.__cmp0(rec, blind || {});
  var st = window.__ST, set = st.cur && st.sets[st.cur];
  if (set) { set.blind = set.blind || {}; set.blind[postId] = { t: Date.now(), ok: !d.length, diffs: d, blind: blind }; window.__save(); }
  window.__log(d.length ? 'blind-diff' : 'blind-ok', { id: postId, note: d.join(' | ') });
  return d.length ? d : ['OK ตรงกัน 4 ช่อง'];
};
window.__flag = function (postId, decisionId) { var set = window.__ST.cur && window.__ST.sets[window.__ST.cur]; if (!set || !set.blind || !set.blind[postId]) return 'ยังไม่ได้ __cmp'; if (!/^D\d+/.test(decisionId || '')) return 'ต้องระบุ id แถวใน decisions.tsv (D..)'; set.blind[postId].flagged = decisionId; window.__save(); return 'FLAGGED ' + postId + ' → ' + decisionId; };

/* ---- ปิดชุด: ต้องส่งข้อความที่ save ขึ้นโปรเจกต์แล้ว และต้องมี id ทุกตัวที่ลงไป ---- */
window.__close = async function (k, savedText) {
  var st = window.__ST, set = st.sets[k];
  if (!set) return ['ไม่มีชุด ' + k];
  if (set.closed) return ['ปิดไปแล้ว'];
  var ids = Object.values(set.pub), miss = ids.filter(function (id) { return String(savedText || '').indexOf(String(id)) < 0; });
  if (!ids.length) return ['ชุดนี้ยังไม่ได้ลงโพสต์เลย ถ้าจะทิ้งชุดใช้ __abandon(k, เหตุผล)'];
  if (miss.length) return ['ข้อความที่ save ไม่มี id: ' + miss.join(',') + ' (ต้อง project_write ก่อนแล้วส่งเนื้อไฟล์มายืนยัน)'];
  if (!set.cook) { var b = set.blind || {}, un = ids.filter(function (id) { return !b[id]; }), bad = ids.filter(function (id) { return b[id] && !b[id].ok && !b[id].flagged; });
    if (un.length) return ['ยังไม่ผ่านตรวจตาบอด (__cmp) ' + un.length + ' โพสต์: ' + un.join(',')];
    if (bad.length) return ['ตรวจตาบอดไม่ตรง ' + bad.length + ' โพสต์: ' + bad.join(',') + ' — แก้แล้ว __cmp ใหม่ หรือ __flag(id, D..) ลง decisions.tsv']; }
  if (set.cook) { var hub = await window.__hub(Object.keys(set.pub).map(function (s) { return { slug: s, isCook: true, date: '' }; }), ''); if (hub[0].indexOf('OK') !== 0) return ['หน้ารวมสูตรยังไม่ครบ: ' + hub.join(' ; ')]; }
  set.closed = Date.now(); if (st.cur === k) st.cur = null; window.__save();
  window.__log('close', { note: k + ' ids ' + ids.join(',') });
  return ['CLOSED ' + k + ' ' + ids.length + ' โพสต์'];
};
window.__abandon = function (k, why) { var set = window.__ST.sets[k]; if (!set) return 'ไม่มีชุด'; if (Object.keys(set.pub).length) return 'ชุดนี้ลงโพสต์ไปแล้ว ต้อง __close'; if (!why) return 'ต้องบอกเหตุผล'; set.closed = Date.now(); set.abandoned = why; if (window.__ST.cur === k) window.__ST.cur = null; window.__save(); window.__log('abandon', { note: k + ' ' + why }); return 'ABANDONED ' + k; };
window.__status = function () { var st = window.__ST; return JSON.stringify({ ver: window.__VER, selftest: st.selftest ? st.selftest.t : 0, cur: st.cur, sets: Object.keys(st.sets).map(function (k) { var s = st.sets[k]; return k + ':' + (s.closed ? 'closed' : 'open') + ' gated' + Object.keys(s.gated).length + ' pub' + Object.keys(s.pub).length; }), log: window.__LOG.length }).replace(/[?&=]/g, '~'); };

/* ---- รอรูปโหลดเสร็จก่อนสกรีนช็อต (ก4) : ใช้บนแท็บดูรูป ---- */
window.__G = function (ids, cols, w) {
  cols = cols || 5; w = w || 400; window.__GR = 'loading';
  var html = '<div id="kg" style="display:grid;grid-template-columns:repeat(' + cols + ',1fr);gap:6px;background:#111;padding:6px;">' +
    ids.map(function (id, i) { return '<div style="position:relative"><img src="https://drive.google.com/thumbnail?id=' + id + '&sz=w' + w + '" style="width:100%;display:block"><span style="position:absolute;left:4px;top:4px;background:#e0577b;color:#fff;font:bold 18px/1 sans-serif;padding:3px 7px;border-radius:6px">' + i + '</span></div>'; }).join('') + '</div>';
  document.body.innerHTML = html; document.title = 'LOADING ' + ids.length;
  var imgs = Array.prototype.slice.call(document.querySelectorAll('#kg img'));
  return Promise.allSettled(imgs.map(function (im) { return im.decode(); })).then(function (rs) {
    var bad = rs.map(function (r, i) { return r.status === 'rejected' ? i : -1; }).filter(function (i) { return i >= 0; });
    window.__GR = bad.length ? 'ready but failed ' + bad.join(',') : 'ready'; document.title = 'READY ' + ids.length + (bad.length ? ' fail ' + bad.length : '');
    return window.__GR;
  });
};

/* ---- __dup (หายไปจาก live 3.6.0 — ใส่กลับ) ---- */
window.__dup = async function (items) {
  var n = [], seen = {};
  items.forEach(function (it) { var o = window.__norm(it.menu); if (seen[o]) n.push('แถว ' + it.row + ' ชื่อซ้ำกับแถว ' + seen[o] + ' ในลิสต์เราเอง'); else seen[o] = it.row; });
  for (var i = 0; i < items.length; i++) {
    var t = items[i];
    if (t.slug) { var r = await window.__api('posts?slug=' + encodeURIComponent(t.slug) + '&status=publish,draft,pending,future&_fields=id,title'); if (Array.isArray(r) && r.length) n.push('แถว ' + t.row + ' ลิงก์ชน id=' + r[0].id); }
    var w = String(t.menu).split(/\s+/).sort(function (a, b) { return b.length - a.length; })[0];
    if (w && w.length >= 4) {
      var q = await window.__api('posts?search=' + encodeURIComponent(w) + '&per_page=5&status=publish,draft&_fields=id,title');
      (Array.isArray(q) ? q : []).forEach(function (p) { var a = window.__norm(t.menu), b = window.__norm(p.title.rendered || p.title); if (a && b && (b.indexOf(a) >= 0 || a.indexOf(b) >= 0)) n.push('⚠️ แถว ' + t.row + ' คล้าย id=' + p.id + ' "' + (p.title.rendered || p.title) + '" → ต้องตัดสินเอง'); });
    }
  }
  return n.length ? n : ['OK ไม่พบซ้ำ ' + items.length + ' แถว'];
};

/* ---- หน้ารวมสูตร: แทรกให้ถูกหัวข้อเดือน (แก้จาก __addRecipe เดิมที่แทรกท้ายหมวดสุดท้ายเสมอ) ---- */
window.__monthLabel = function (date) { var y = date.slice(0, 4), m = +date.slice(5, 7); return window.__TH[m - 1] + ' ' + y; };
window.__hubInsert = function (content, label, block) {
  var re = /<h2[^>]*>([^<]*)<\/h2>/g, secs = [], m;
  while ((m = re.exec(content))) secs.push({ t: m[1], i: m.index, end: m.index + m[0].length });
  var hit = secs.find(function (s) { return s.t.indexOf('เดือน' + label) >= 0; });
  if (hit) return content.slice(0, hit.end) + '\n' + block + content.slice(hit.end);
  var ym = function (t) { var mm = t.match(/เดือน(\S+) (\d{4})/); if (!mm) return ''; var mi = window.__TH.indexOf(mm[1]); return mi < 0 ? '' : mm[2] + '-' + String(mi + 1).padStart(2, '0'); };
  var mine = ym('เดือน' + label);
  var before = secs.find(function (s) { var k = ym(s.t); return k && k < mine; }) || secs.find(function (s) { return s.t.indexOf('ตามไปดู') >= 0 || s.t.indexOf('ตามหาขนม') >= 0; });
  var at = before ? before.i : content.length;
  return content.slice(0, at) + '<h2>🗓️ เดือน' + label + '</h2>\n' + block + content.slice(at);
};
window.__addRecipe = async function (hubId, postId, blurb) {
  var r = await window.__api('posts/' + hubId + '?context=edit&_fields=content'); var c = r.content.raw;
  var p = await window.__api('posts/' + postId + '?context=edit&_fields=title,slug,featured_media,date,content');
  if (c.indexOf('/' + p.slug + '/') >= 0) return 'มีอยู่แล้ว';
  var m = await window.__api('media/' + p.featured_media + '?_fields=alt_text,media_details,source_url');
  var u = (m.media_details && m.media_details.sizes && m.media_details.sizes.medium_large) ? m.media_details.sizes.medium_large.source_url : m.source_url;
  if (!blurb) blurb = ((p.content.raw.match(/<p><strong>([\s\S]*?)<\/strong><\/p>/) || ['', ''])[1]).replace(/<[^>]+>/g, '').trim();
  var blk = '<figure style="margin: 18px 0;"><img style="max-width: 100%; height: auto; border-radius: 12px;" src="' + u + '" alt="' + (m.alt_text || '').replace(/"/g, '') + '" /></figure>\n<h3>' + (p.title.raw || '') + '</h3>\n' + blurb + ' <a href="/' + p.slug + '/" style="' + window.__PILL2 + '">อ่านสูตรเต็ม →</a>\n';
  if (/[–—]/.test(blk)) return 'ERR มีขีดยาว';
  var nc = window.__hubInsert(c, window.__monthLabel(p.date), blk);
  var w = await window.__api('posts/' + hubId, { method: 'POST', body: JSON.stringify({ content: nc }) });
  window.__log('hub', { id: hubId, note: 'addRecipe ' + postId + ' → เดือน' + window.__monthLabel(p.date) });
  return w.id ? ('OK figs' + ((w.content && w.content.raw) ? (w.content.raw.match(/<figure/g) || []).length : '?')) : 'ERR';
};

/* ---- หน้าเดือน: เพิ่มรีวิวเข้าหัวข้อแรกของหน้าเดือน เรียงตามวันที่ (v4.1.7) ---- */
window.__addReview = async function (pageId, postId) {
  var p = await window.__api('posts/' + postId + '?context=edit&_fields=id,title,slug,featured_media,content,date');
  var h = await window.__api('posts/' + pageId + '?context=edit&_fields=content'); var c = h.content.raw;
  if (c.indexOf('/' + p.slug + '/') >= 0) return 'มีอยู่แล้ว';
  var i1 = c.indexOf('<h2'), i2 = c.indexOf('<h2', i1 + 5); var sec = c.slice(i1, i2); var hEnd = sec.indexOf('</h2>') + 5;
  var blocks = sec.slice(hEnd).split('<figure').slice(1).map(function (b) { return '<figure' + b; });
  var slugOf = function (b) { return (b.match(/href="\/([^"\/]+)\//) || ['', ''])[1]; };
  var slugs = blocks.map(slugOf), info = {};
  for (var i = 0; i < slugs.length; i += 50) { var r = await window.__api('posts?slug=' + slugs.slice(i, i + 50).join(',') + '&per_page=50&_fields=slug,date'); (Array.isArray(r) ? r : []).forEach(function (x) { info[x.slug] = x.date; }); }
  var md = await window.__api('media/' + p.featured_media + '?_fields=alt_text,media_details,source_url');
  var u = (md.media_details && md.media_details.sizes && md.media_details.sizes.medium_large) ? md.media_details.sizes.medium_large.source_url : md.source_url;
  var style = (blocks[0] && blocks[0].match(/<a href="[^"]+" style="([^"]+)"/) || ['', window.__PILL2])[1] || window.__PILL2;
  var verdict = (p.content.raw.match(/<strong>([\s\S]*?)<\/strong>/) || ['', ''])[1].replace(/<[^>]+>/g, '').trim();
  var blk = '<figure style="margin: 18px 0;"><img style="max-width: 100%; height: auto; border-radius: 12px;" src="' + u + '" alt="' + (md.alt_text || '').replace(/"/g, '') + '" /></figure>\n<h3>' + p.title.raw + '</h3>\n' + verdict + ' <a href="/' + p.slug + '/" style="' + style + '">อ่านรีวิวเต็ม →</a>\n\n';
  if (/[–—]/.test(blk)) return 'ERR มีขีดยาว';
  var pos = blocks.findIndex(function (b) { return (info[slugOf(b)] || '') < p.date; }); if (pos < 0) pos = blocks.length;
  blocks.splice(pos, 0, blk);
  var fin = c.slice(0, i1) + sec.slice(0, hEnd) + '\n' + blocks.join('') + c.slice(i2);
  var w = await window.__api('posts/' + pageId, { method: 'POST', body: JSON.stringify({ content: fin }) });
  window.__log('hub', { id: pageId, note: 'addReview ' + postId + ' ' + p.slug + ' pos ' + pos });
  return w.id ? 'OK pos ' + pos + '/' + blocks.length : 'ERR';
};

/* ---- selftest ฉบับ v4: ของดีผ่าน + ของเสียตก + ด่านใหม่ต้องปฏิเสธจริง (async → poll window.__STR) ---- */
window.__selftestBase = function () {
  var e = [], cap = 'อร่อยมากครับ ชอบเลย เนื้อนุ่ม หอมเนย กินเพลิน ราคา 25 บาท เจอที่เซเว่น';
  var body = '<p>อร่อยมากครับ ชอบเลย เนื้อนุ่ม หอมเนย</p>' + ['A', 'B', 'C', 'D', 'E', 'F'].map(function (x) { return '<img src="' + x + '">'; }).join('') + '<h3>บันทึกกินหนม</h3><a href="/new/">x</a> เล่าให้ฟังในคอมเมนต์';
  var good = { title: 'x', slug: 'ok-slug', date: '2026-03-01T10:00:00', content: body, featured_media: 1, categories: [1], tags: [1, 2, 3], meta: { _yoast_wpseo_title: 't', _yoast_wpseo_metadesc: 'd' }, __k: 'ZZ', __coverUrl: 'Z', __cap: cap, __src: { total: 7, usable: 7, dropped: [] }, __labelPic: 'cover', __dev: [] };
  ['A', 'B', 'C', 'D', 'E', 'F', 'Z'].forEach(function (x, i) { window.__MAP['ZZ-' + i] = { id: 0, url: x }; });
  var t = window.__vpub(good, false); e.push('ของดีต้องผ่าน: ' + (t.length ? 'FAIL → ' + t.join(',') : 'PASS'));
  var M = function (o) { return Object.assign({}, good, o); };
  [['ขีดยาว', M({ title: 'a — b' })], ['รูปขาด', M({ content: body.replace('<img src="F">', '') })], ['รูปข้ามเมนู', M({ content: body.replace('src="F"', 'src="ALIEN"') })], ['ปกซ้ำในเนื้อ', M({ __coverUrl: 'A' })], ['แท็กน้อย', M({ tags: [1] })], ['ไม่มีปก', M({ featured_media: 0 })], ['date ไม่มีเวลา', M({ date: '2026-03-01' })], ['slug ไทย', M({ slug: 'สลัก' })], ['ไม่ส่ง __cap', M({ __cap: '' })], ['เนื้อหาแต่งเอง', M({ content: body.replace('เนื้อนุ่ม หอมเนย', 'กรอบนอกนุ่มในละมุนลิ้นสุดๆ ต้องลอง') })], ['ไม่มีตารางบันทึก', M({ content: body.replace('<h3>บันทึกกินหนม</h3>', '') })], ['รูปฉลากอยู่ใบที่ 4', M({ __labelPic: 3 })], ['ตัดรูปไม่บอกเหตุผล', M({ __src: { total: 8, usable: 7, dropped: [] } })]].forEach(function (c) {
    var r = window.__vpub(c[1], false); e.push('ของเสีย(' + c[0] + ')ต้องไม่ผ่าน: ' + (r.length ? 'PASS' : '❌FAIL ปล่อยผ่าน'));
  });
  ['ZZ-0', 'ZZ-1', 'ZZ-2', 'ZZ-3', 'ZZ-4', 'ZZ-5', 'ZZ-6'].forEach(function (k) { delete window.__MAP[k]; });
  ['__api', '__pre', '__runUp', '__own', '__vpub', '__vgate', '__runPub', '__dup', '__cook', '__cgate', '__chkCook', '__addRecipe', '__rev', '__hub'].forEach(function (n) { if (typeof window[n] !== 'function') e.push('❌ ขาด ' + n); });
  return e;
};
window.__selftest = function () {
  window.__STR = 'running';
  (async function () {
    var e = window.__selftestBase(), st = window.__ST, bak = JSON.stringify(st);
    try {
      st.cur = null; st.sets = {};
      var g = window.__upGuard([{ key: 'zz-0' }]); e.push('อัพรูปโดยไม่ __open ต้องถูกปฏิเสธ: ' + (g.length ? 'PASS' : '❌FAIL'));
      st.selftest = 0; g = window.__pubGuard([{ slug: 'x' }]); e.push('ลงโพสต์โดยไม่ selftest ต้องถูกปฏิเสธ: ' + (g.some(function (x) { return x.indexOf('selftest') >= 0; }) ? 'PASS' : '❌FAIL'));
      st.selftest = { t: Date.now(), ver: window.__VER }; st.cur = 'zz'; st.sets.zz = { gated: {}, pub: {}, closed: false };
      g = window.__pubGuard([{ slug: 'x', title: 'a' }]); e.push('ลงโพสต์ที่ยังไม่ผ่านด่าน ต้องถูกปฏิเสธ: ' + (g.some(function (x) { return x.indexOf('ยังไม่ผ่าน') >= 0; }) ? 'PASS' : '❌FAIL'));
      st.sets.zz.gated.x = window.__pubKey({ slug: 'x', title: 'a' });
      g = window.__pubGuard([{ slug: 'x', title: 'a' }]); e.push('ลงโพสต์ที่ผ่านด่านแล้ว ต้องผ่าน: ' + (g.length ? '❌FAIL ' + g.join(',') : 'PASS'));
      g = window.__pubGuard([{ slug: 'x', title: 'b' }]); e.push('payload เปลี่ยนหลังผ่านด่าน ต้องถูกปฏิเสธ: ' + (g.some(function (x) { return x.indexOf('เปลี่ยน') >= 0; }) ? 'PASS' : '❌FAIL'));
      g = window.__upGuard([{ key: 'yy-0' }]); e.push('อัพรูป key ผิดชุด ต้องถูกปฏิเสธ: ' + (g.length ? 'PASS' : '❌FAIL'));
      var o = await window.__open('yy', [{ row: 1, menu: 'x', slug: 'x', cap: 'ข้อความทดสอบยาวพอสมควรจบด้วยไทยครับ' }], [{ key: 'yy-0', fid: 'f', name: 'yy-0.jpg', alt: 'a' }]);
      e.push('เปิดชุดใหม่ทั้งที่ชุดก่อนยังไม่ปิด ต้องถูกปฏิเสธ: ' + (o.some(function (x) { return x.indexOf('ยังไม่ __close') >= 0; }) ? 'PASS' : '❌FAIL ' + o.join(',')));
      e.push('__dev ไม่ส่ง ต้องตก: ' + (window.__devcheck({}).length ? 'PASS' : '❌FAIL'));
      e.push('__dev [] ต้องผ่าน: ' + (window.__devcheck({ __dev: [] }).length ? '❌FAIL' : 'PASS'));
      var cp = 'ขนมปังเนยสด แบรนด์ฟาร์มเฮ้าส์ ราคา 25 บาท 📍 เซเว่น';
      e.push('แบรนด์ที่ไม่อยู่ในแคปชั่น ต้องตก: ' + (window.__evidence({ __cap: cp, __brand: 'ยามาซากิ', __price: '25' }, false).length ? 'PASS' : '❌FAIL'));
      e.push('แบรนด์ในแคปชั่น+ราคาในแคปชั่น ต้องผ่าน: ' + (window.__evidence({ __cap: cp, __brand: 'ฟาร์มเฮ้าส์', __price: '25 บาท' }, false).length ? '❌FAIL' : 'PASS'));
      e.push('ราคาที่ไม่อยู่ในแคปชั่น ต้องตก: ' + (window.__evidence({ __cap: cp, __brand: 'ฟาร์มเฮ้าส์', __price: '29' }, false).length ? 'PASS' : '❌FAIL'));
      e.push('ไม่ส่ง __brand/__price ต้องตก: ' + (window.__evidence({ __cap: cp }, false).length === 2 ? 'PASS' : '❌FAIL'));
      e.push('แบรนด์จากซูมฉลาก (มี __brandSrc) ต้องผ่าน: ' + (window.__evidence({ __cap: cp, __brand: 'ยามาซากิ', __brandSrc: 'zoom:IMG_1.jpg', __price: 'ไม่ระบุ' }, false).length ? '❌FAIL' : 'PASS'));
      e.push('แบรนด์แม่ ยามาซากิ เมื่อแคปชั่นบอก Sunmoulin ต้องผ่าน: ' + (window.__evidence({ __cap: 'ขนมปัง 📍 Sunmoulin สาขาสยาม', __brand: 'ยามาซากิ', __price: 'ไม่ระบุ' }, false).length ? '❌FAIL' : 'PASS'));
      e.push('สูตร (isCook) ไม่ต้องมีแบรนด์/ราคา: ' + (window.__evidence({ __cap: cp }, true).length ? '❌FAIL' : 'PASS'));
      var dt = 'id\topened\tdeadline\towner\tx\tx\tx\tx\tx\tสถานะ\tคำตอบ\nD01\t2026-09-02\t2026-09-05\tMat\tx\tx\tx\tx\tx\topen\t\nK01\t2026-09-02\t2026-09-01\tKed\tx\tx\tx\tx\tx\topen\t\n';
      e.push('ไม่ส่ง decisions ต้องตก: ' + (window.__deccheck('').length ? 'PASS' : '❌FAIL'));
      e.push('decisions ยังไม่ถึงกำหนด ต้องผ่าน: ' + (window.__deccheck(dt, '2026-09-04').length ? '❌FAIL' : 'PASS'));
      e.push('decisions Mat เกินกำหนด ต้องตก: ' + (window.__deccheck(dt, '2026-09-06').some(function (x) { return x.indexOf('D01') >= 0; }) ? 'PASS' : '❌FAIL'));
      var rc = window.__record('<tr>\n<th scope="row">ชื่อสินค้า</th>\n<td>ขนมปังเนยสด</td>\n</tr>\n<tr>\n<th scope="row">แบรนด์</th>\n<td>Sunmoulin</td>\n</tr>\n<tr>\n<th scope="row">ร้านที่เจอ</th>\n<td>เซเว่น</td>\n</tr>\n<tr>\n<th scope="row">ราคา</th>\n<td>25 บาท</td>\n</tr>');
      e.push('ตรวจตาบอดตรงกัน ต้องผ่าน: ' + (window.__cmp0(rc, { name: 'ขนมปังเนยสด', brand: 'sunmoulin', store: 'เซเว่น', price: '25' }).length ? '❌FAIL' : 'PASS'));
      e.push('ตรวจตาบอด Yamazaki=ยามาซากิ, Sunmulin=Sunmoulin, ชื่ออังกฤษตรง roman ต้องผ่าน: ' + (window.__cmp0({ name: 'เรดบีนบัน', roman: 'Red Bean Bun', brand: 'ยามาซากิ', store: 'Sunmoulin CTW', price: '48' }, { name: 'Red Bean Bun', brand: 'Yamazaki', store: 'Sunmulin CTW', price: '48' }).length ? '❌FAIL' : 'PASS'));
      e.push('ตรวจตาบอดแบรนด์มีวงเล็บอังกฤษต่อท้าย ต้องผ่าน: ' + (window.__cmp0({ name: 'ลูกชุบ', roman: '', brand: 'บ้านทองหยอด', store: '7-11', price: '39' }, { name: 'ลูกชุบ', brand: 'บ้านทองหยอด (BAN THANG YARD)', store: '7-11', price: '39' }).length ? '❌FAIL' : 'PASS'));
      e.push('ตรวจตาบอดแบรนด์ตรวจยาวกว่าแต่มีชื่อแบรนด์เรา + วอลล์=Wall\'s ต้องผ่าน: ' + ((window.__cmp0({ name: 'x', roman: '', brand: 'EZY Sweet', store: '7-11', price: '39' }, { name: 'x', brand: 'EZY.Sweet Bakery / Gold Selection x April\'s Bakery', store: '7-11', price: '39' }).length + window.__cmp0({ name: 'x', roman: '', brand: 'Wall\'s', store: 'แมคโคร', price: 'ไม่ระบุ' }, { name: 'x', brand: 'วอลล์', store: 'แมคโคร', price: 'ไม่ระบุ' }).length) ? '❌FAIL' : 'PASS'));
      e.push('ตรวจตาบอดชื่อ ไม่ระบุ ต้องไม่นับเป็นต่าง: ' + (window.__cmp0({ name: 'x', roman: '', brand: 'ไม่ระบุ', store: '7-11', price: '25' }, { name: 'ไม่ระบุ', brand: 'ไม่ระบุ', store: 'เซเว่น', price: '25' }).length ? '❌FAIL' : 'PASS'));
      e.push('ตรวจตาบอดแบรนด์/ราคาต่าง ต้องตก 2 ข้อ: ' + (window.__cmp0(rc, { name: 'ขนมปังเนยสด', brand: 'ฟาร์มเฮ้าส์', store: 'เซเว่น', price: '29' }).length === 2 ? 'PASS' : '❌FAIL'));
      st.sets.zz.pub = { x: 1 }; var cl = await window.__close('zz', 'x\t1');
      e.push('ปิดชุดโดยยังไม่ตรวจตาบอด ต้องถูกปฏิเสธ: ' + (cl[0].indexOf('ตาบอด') >= 0 ? 'PASS' : '❌FAIL ' + cl.join(',')));
      var hc = '<p>x</p><h2>🆕 มาใหม่เดือนสิงหาคม 2026</h2>\nA<h2>🗓️ เดือนกรกฎาคม 2026</h2>\nB<h2>🗓️ เดือนพฤษภาคม 2026</h2>\nC<h2>🛒 ตามไปดูขนมใหม่ในเซเว่น</h2>\nZ';
      var hi = window.__hubInsert(hc, 'กรกฎาคม 2026', 'NEW');
      e.push('แทรกสูตรเข้าหัวข้อเดือนที่มีอยู่ ต้องอยู่ต้นหมวด ก.ค.: ' + (hi.indexOf('เดือนกรกฎาคม 2026</h2>\nNEW') >= 0 ? 'PASS' : '❌FAIL'));
      hi = window.__hubInsert(hc, 'มิถุนายน 2026', 'NEW');
      e.push('เดือนที่ไม่มีหัวข้อ ต้องสร้างหัวข้อระหว่าง ก.ค. กับ พ.ค.: ' + (/B<h2>🗓️ เดือนมิถุนายน 2026<\/h2>\nNEW<h2>🗓️ เดือนพฤษภาคม/.test(hi) ? 'PASS' : '❌FAIL'));
      hi = window.__hubInsert(hc, 'ธันวาคม 2025', 'NEW');
      e.push('เดือนเก่าสุด ต้องสร้างหัวข้อก่อน ตามไปดู: ' + (/C<h2>🗓️ เดือนธันวาคม 2025<\/h2>\nNEW<h2>🛒/.test(hi) ? 'PASS' : '❌FAIL'));
      var tc = await window.__tagcheck({ title: 'คัพเค้กช็อกโกแลต', __cap: 'ทำคัพเค้กช็อกโกแลตง่ายๆ', tags: [433, 3038] });
      e.push('แท็กผิดตัว (ดาวแมกซ์ คอฟฟี่ ให้คัพเค้ก) ต้องตก: ' + (tc.some(function (x) { return x.indexOf('3038') >= 0; }) ? 'PASS' : '❌FAIL ' + tc.join(',')));
      e.push('แท็กถูกตัว (คัพเค้ก#433) ต้องผ่าน: ' + (tc.some(function (x) { return x.indexOf('433') >= 0; }) ? '❌FAIL' : 'PASS'));
      tc = await window.__tagcheck({ title: 'x', __cap: 'x', tags: [99999999] }); e.push('แท็ก id ไม่มีจริง ต้องตก: ' + (tc.some(function (x) { return x.indexOf('ไม่มีอยู่จริง') >= 0; }) ? 'PASS' : '❌FAIL'));
      ['__open', '__close', '__abandon', '__evidence', '__deccheck', '__hubInsert', '__monthLabel', '__addReview', '__cmp', '__cmp0', '__record', '__flag', '__runUp', '__runPub', '__vgate', '__cgate', '__tagcheck', '__devcheck', '__dumpLog', '__G', '__status'].forEach(function (n) { if (typeof window[n] !== 'function') e.push('❌ ขาด ' + n); });
    } catch (err) { e.push('❌ selftest พัง: ' + err.message); }
    window.__ST = JSON.parse(bak); st = window.__ST;
    var bad = e.filter(function (x) { return x.indexOf('FAIL') >= 0 || x.indexOf('❌') >= 0; });
    if (!bad.length) { st.selftest = { t: Date.now(), ver: window.__VER }; window.__save(); }
    window.__STR = 'v' + window.__VER + ' | ' + (bad.length ? '❌ ไม่ผ่าน ' + bad.length + ' ข้อ:\n' + bad.join('\n') : '✅ ผ่านทั้งหมด ' + e.length + ' ข้อ');
  })();
  return 'running → poll window.__STR';
};

/* v4.1.8 (4 ก.ย. 2026, Mat กดเอง): รับหลักฐานแบรนด์ sheet: (Brand Sheet ที่ Mat ตอบ) เท่ากับ zoom: — mkset เป็นคนเทียบกับ final_brand.json */

/* ===== v4.1.9 (5 ก.ย. 2026, Mat เคาะ D24+D26) ===== */
window.__VER='4.1.9';
window.__norm0 = window.__norm0 || window.__norm;
window.__unent = function (e) { return String(e == null ? '' : e).replace(/&amp;/gi, '&').replace(/&#0*38;/g, '&').replace(/&#0*39;|&apos;/gi, "'").replace(/&quot;/gi, '"').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&nbsp;/gi, ' '); };
window.__norm = function (e) { return window.__norm0(window.__unent(e)); };
window.__refresh = async function () {
  var n = '';
  try { var r = await fetch('/wp-admin/admin-ajax.php', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=rest-nonce' }); n = (await r.text()).trim(); } catch (e) { }
  if (/^[a-f0-9]{8,12}$/.test(n)) { window.__NONCE = n; return n; }
  var r2 = await fetch('/wp-admin/profile.php', { credentials: 'include', cache: 'no-store' }); var t = await r2.text();
  var m = t.match(/wpApiSettings\s*=\s*\{[^}]*"nonce":"([a-f0-9]{6,20})"/);
  if (!m) { if (/id="loginform"|wp-login\.php\?/.test(t)) throw new Error('หลุดล็อกอิน WP แล้ว — Mat ต้องล็อกอินใหม่เอง'); throw new Error('__refresh: หา nonce ไม่เจอทั้ง admin-ajax (ตอบ "' + n.slice(0, 10) + '") และ profile.php'); }
  window.__NONCE = m[1]; return m[1];
};
window.__selftestBase0 = window.__selftestBase0 || window.__selftestBase;
window.__selftestBase = function () {
  var e = window.__selftestBase0(); var A = String.fromCharCode(38);
  e.push('__norm ถอด HTML entity (M&amp;M&#039;s = M&M\'s): ' + (window.__norm('M' + A + 'amp;M' + A + '#039;s') === window.__norm('M' + A + 'M' + String.fromCharCode(39) + 's') ? 'PASS' : '❌FAIL'));
  e.push('__norm ข้อความธรรมดาผลเหมือน 4.1.8: ' + (window.__norm('เค้ก ช็อกโกแลต ๆ 25 บาท|x') === window.__norm0('เค้ก ช็อกโกแลต ๆ 25 บาท|x') && window.__norm('เค้ก ช็อกโกแลต ๆ 25 บาท|x') === 'เค้กช็อกโกแลต25บาทx' ? 'PASS' : '❌FAIL'));
  e.push('__norm ไม่ทำให้ของต่างกันเท่ากัน (S&amp;P vs SP2): ' + (window.__norm('S' + A + 'amp;P') !== window.__norm('SP2') ? 'PASS' : '❌FAIL'));
  return e;
};
window.__selftest0 = window.__selftest0 || window.__selftest;
window.__selftest = function () {
  var r = window.__selftest0();
  (async function () {
    for (var i = 0; i < 240 && window.__STR === 'running'; i++) await new Promise(function (z) { setTimeout(z, 500); });
    if (window.__STR === 'running') return;
    var extra = [];
    try { var me = await window.__api('users/me?_fields=id'); extra.push('nonce ใช้ได้จริง (users/me): ' + (me && me.id ? 'PASS' : '❌FAIL')); } catch (err) { extra.push('nonce ใช้ได้จริง (users/me): ❌FAIL ' + err.message); }
    var bad = extra.filter(function (x) { return x.indexOf('FAIL') >= 0; });
    if (bad.length) { window.__ST.selftest = 0; window.__save(); window.__STR = 'v' + window.__VER + ' | ❌ ไม่ผ่าน (ข้อเพิ่ม 4.1.9): ' + bad.join(' / ') + '\n' + window.__STR; }
    else { window.__STR = window.__STR.replace(/ผ่านทั้งหมด (\d+) ข้อ/, function (m, n) { return 'ผ่านทั้งหมด ' + (Number(n) + extra.length) + ' ข้อ'; }); }
  })();
  return r;
};

/* ===== v4.1.10 (12 ก.ย. 2026, brand canon) ===== */
window.__VER='4.1.10';
window.__brandInCap0 = window.__brandInCap0 || window.__brandInCap;
window.__brandParts = function (b) { b = String(b || ''); var m = b.match(/^(.*?)\s*\((.*?)\)\s*$/); var p = [b]; if (m) { p.push(m[1]); p.push(m[2]); } return p.filter(function (x) { return window.__norm(x).length >= 2; }); };
window.__brandInCap = function (brand, cap) { return window.__brandParts(brand).some(function (p) { return window.__brandInCap0(p, cap); }); };
window.__selftestBase1 = window.__selftestBase1 || window.__selftestBase;
window.__selftestBase = function () {
  var e = window.__selftestBase1();
  e.push('brandInCap สองภาษา ไทยในแคปชั่น: ' + (window.__brandInCap('ยามาซากิ (Yamazaki)', 'ขนมปังยามาซากิ 📍 7-11') ? 'PASS' : '❌FAIL'));
  e.push('brandInCap สองภาษา อังกฤษในแคปชั่น: ' + (window.__brandInCap('คัดสรร (Kudsan)', 'kudsan new menu 📍 7-11') ? 'PASS' : '❌FAIL'));
  e.push('brandInCap ไม่อยู่ในแคปชั่น ต้องตก: ' + (!window.__brandInCap('คัดสรร (Kudsan)', 'ขนมปังยามาซากิ 📍 7-11') ? 'PASS' : '❌FAIL'));
  e.push('brandInCap แบรนด์แม่ D20 ยังผ่าน: ' + (window.__brandInCap('ยามาซากิ (Yamazaki)', 'ขนมปัง 📍 Sunmoulin สาขาสยาม') ? 'PASS' : '❌FAIL'));
  return e;
};

/* ===== v4.1.11 (12 ก.ย. 2026, tagcheck case-insensitive) ===== */
window.__VER='4.1.11';
window.__tagcheck = async function (p) {
  var e = [], ids = (p.tags || []).map(Number);
  if (!ids.length) return ['ไม่มีแท็ก'];
  if (new Set(ids).size !== ids.length) e.push('แท็กซ้ำ');
  var info = await window.__tagfetch(ids);
  var hay = window.__norm([p.title, p.__cap, p.__brand, p.__menu, (p.meta || {})._yoast_wpseo_title].join('|')).toLowerCase();
  ids.forEach(function (id, i) {
    var t = info[i];
    if (!t) { e.push('แท็ก #' + id + ' ไม่มีอยู่จริง'); return; }
    if (window.__TAG_OK[id]) return;
    var nm = window.__norm(t.name).toLowerCase();
    if (!nm || hay.indexOf(nm) < 0) e.push('แท็ก "' + t.name + '" (#' + id + ') ไม่พบใน title/แคปชั่น/แบรนด์');
  });
  return e;
};
window.__selftestBase2 = window.__selftestBase2 || window.__selftestBase;
window.__selftestBase = function () {
  var e = window.__selftestBase2();
  var hay = window.__norm(['ชานมมะลิ Ito en', '', 'Ito en'].join('|')).toLowerCase();
  e.push('tagcheck ไม่สนตัวพิมพ์ ITO EN vs Ito en: ' + (hay.indexOf(window.__norm('ITO EN').toLowerCase()) >= 0 ? 'PASS' : '❌FAIL'));
  e.push('tagcheck ยังตกเมื่อไม่มีจริง: ' + (hay.indexOf(window.__norm('Meiji').toLowerCase()) < 0 ? 'PASS' : '❌FAIL'));
  return e;
};
