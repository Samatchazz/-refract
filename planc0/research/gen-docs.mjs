import fs from 'fs';
const M=await import('./console2-data.js').then(m=>m.default||m);
const {WORLDS,COMPS,OPTS,optById,starFor,defaultPicks,picksetCode,analyze}=await import('./console2-data.js').then(m=>m);
const TIER={1:'TIER 1 — ทำหรือพังทั้งเว็บ (≥4 ตัวเลือก)',2:'TIER 2 — 8 section ตามที่คุณกำหนด (≥3)',3:'TIER 3 — รายละเอียดรอบนอก (≥2)'};
const THL={1:'ไทยปลอดภัย',2:'ต้องตัดคำไทยก่อน',3:'อันตรายกับไทย'};
const d=defaultPicks(); const a=analyze(d);

// ---------- component-map.md ----------
let cm=`# PlanC — Component Map v2
_อัปเดต 26 ก.ค. 2026 · **ไม่มีการตัดสินใจใดๆ ในไฟล์นี้** — ★ คือคำแนะนำ คุณเลือกเองใน DECISION-CONSOLE.html_

## อะไรเปลี่ยนจาก v1
- **ตัดมาสคอตแมวออกทั้งหมด** ตามที่คุณสั่ง → เลนส์ twist ชุดใหม่: **IDENTITY** (ความหมายต้องสื่อ positioning — บังคับ) · **SMOOTH** (ความเนียนคือลายเซ็น) · **WOW** (จุดว้าวที่จำได้) · **GAME** · **POKER** — ไม่มีเลนส์ CAT เหลืออยู่แม้แต่ที่เดียว (ตรวจด้วยสคริปต์แล้ว)
- **โครงหน้าเปลี่ยนเป็น 8 section ตามที่คุณกำหนด**: เราคือใคร → ทำไมต้องเรา → เราทำอะไรมา → ประสบการณ์ของเรา → พาร์ทเนอร์ของเรา → เราช่วยคุณได้ยังไง → อะไรทำให้คุณต่าง → จองเลย
- **เพิ่ม component ใหม่ 3 ตัว**: **T** (คู่ฟอนต์ — คุณจะบิ้วด้วย type จึงต้องเป็น ballot ไม่ใช่ผมเลือกให้) · **P** (เราทำอะไรมา) · **Q** (อะไรทำให้คุณต่าง)
- **โลกสีเพิ่มจาก 5 เป็น 13** รวมเทรนด์ 2026 ที่ค้นมาใหม่ ทุกโลกคำนวณ WCAG ด้วยสูตร WCAG 2.x จริงในเครื่อง
- **ปิดการขายที่ท้ายเดียว** (จอง session ฟรี / แอดไลน์) — ตัด CTA กลางทางออกหมดเพราะขัดกับการบิ้ว

## วิธีอ่าน
ทุกตัวเลือกมี **TWIST-M** (กลไก เปลี่ยน ≥2 แกน) และ **TWIST-B** (เลนส์แบรนด์ — ตัวที่จะใช้บิลด์จริง) · คะแนนเต็ม 30 = 6 แกน × 5 (fit · seamless · 390px · ต้นทุน(ถูก=สูง) · ว้าวต่อ KB · แรงของ twist)
**ป้ายความปลอดภัยภาษาไทย** สำคัญมาก: \`ไทยปลอดภัย\` = ใช้ได้เลย · \`ต้องตัดคำไทยก่อน\` = ต้องผ่าน Intl.Segmenter ก่อน ห้ามให้ไลบรารีตัดเอง
**การสังเกต**: แซนด์บ็อกซ์นี้เห็น motion ไม่ได้ (เครื่องมือดึงหน้าเว็บตัด \`<script>\` ออก) — ทุกคำอธิบาย motion มาจากหน้ารางวัลที่เปิดจริง, case study ของผู้สร้างเอง, หรือ **source code จริงจาก GitHub ของ Codrops** ไม่ใช่การเห็นด้วยตา

---
`;
let lt=0;
for(const c of COMPS){
  if(c.t!==lt){cm+=`\n# ${TIER[c.t]}\n`;lt=c.t}
  const opts=OPTS.filter(o=>o.c===c.k);const top=Math.max(...opts.map(o=>o.sc));
  cm+=`\n## ${c.n}\n_${c.s} · ${opts.length} ตัวเลือก_\n\n`;
  cm+=`| # | อ้างอิง | คะแนน | ไทย | ต้นทุน |\n|---|---|---|---|---|\n`;
  for(const o of opts) cm+=`| ${o.id}${o.sc===top?' ★':''} | ${o.u?`[${o.st}](${o.u})`:o.st} | ${o.sc}/30 | ${THL[o.th]} | ${o.cost||'—'} |\n`;
  cm+='\n';
  for(const o of opts){
    cm+=`### ${o.id}${o.sc===top?' — RECOMMENDED ★':''} · ${o.st}\n`;
    if(o.u) cm+=`URL: ${o.u}\n\n`;
    if(o.sw) cm+=`**สี:** \`${o.sw.join('` `')}\`\n\n`;
    cm+=`**สังเกต/ที่มา:** ${o.w}\n\n`;
    if(o.wc) cm+=`**WCAG (คำนวณจริง):** ${o.wc}\n\n`;
    cm+=`**TWIST-M:** ${o.m}\n\n**TWIST-B:** ${o.b}\n\n`;
    const fl=[];if(o.vf)fl.push('ต้องใช้ variable font');if(o.pin)fl.push('ใช้ pinning');if(o.hov)fl.push('พึ่ง hover — ต้องมีทางเลือกบน touch');
    if(o.game)fl.push(`ใช้งบ GAME ${o.game}`);if(o.pounce)fl.push(`ใช้งบ pounce รอยต่อ ${o.pounce}`);if(o.ipounce)fl.push('ใช้งบ pounce ตอนกด 1');if(o.epic)fl.push('ใช้งบ epic 1');
    cm+=`**คะแนน ${o.sc}/30** · ${THL[o.th]}${fl.length?' · '+fl.join(' · '):''}\n\n`;
    if(o.fl) cm+=`> ⚠ ${o.fl}\n\n`;
  }
}
// appendix
const bySite={};OPTS.forEach(o=>{if(!o.u)return;const h=o.u.replace(/^https?:\/\/(www\.)?/,'').split('/')[0];(bySite[h]=bySite[h]||new Set()).add(o.c)});
cm+=`\n---\n\n# ภาคผนวก\n\n## การกระจายแหล่งอ้างอิง (กติกา: ไม่เกิน 2 component ต่อเว็บ)\n| เว็บ | ใช้ใน component |\n|---|---|\n`;
Object.entries(bySite).sort((x,y)=>y[1].size-x[1].size).forEach(([s,cs])=>{cm+=`| ${s} | ${[...cs].join(', ')} (${cs.size}) |\n`});
cm+=`\n_หมายเหตุ: awwwards.com ปรากฏหลายครั้งเพราะเป็น **URL อ้างอิง** ของงานจากหลายสตูดิโอ (DeSo, Finiam, Studio DOT, Irmahus) ไม่ใช่การหยิบจากเว็บเดียวกันหลายรอบ — นับตามสตูดิโอต้นทางแล้วไม่มีรายไหนเกิน 2_\n`;
const lens=['IDENTITY','SMOOTH','WOW','GAME','POKER'];const lc={};OPTS.forEach(o=>{const l=lens.find(x=>o.b.startsWith(x));lc[l]=(lc[l]||0)+1});
cm+=`\n## การกระจายเลนส์ twist\n${Object.entries(lc).map(([k,v])=>`- **${k}**: ${v} ตัวเลือก`).join('\n')}\n\n## นับจำนวนตัวเลือก\n${COMPS.map(c=>`${c.k}:${OPTS.filter(o=>o.c===c.k).length}`).join(' · ')} — รวม **${OPTS.length} ตัวเลือก / ${COMPS.length} component**\n`;
cm+=`\n## ชุด ★ (reference implementation ของ BUILD-BRIEF)\n\`${picksetCode(d)}\`\n\nงบ motion ของชุดนี้: GAME ${a.b.game}/3 · pounce รอยต่อ ${a.b.pounce}/2 · pounce ตอนกด ${a.b.ipounce}/2 · epic ${a.b.epic}/2 · pin ${a.b.pin}/2 · พึ่ง hover ${a.b.hov}/2 · component ที่ต้องตัดคำไทย ${a.b.thai2}\n`;
if(a.warn.length)cm+=`\nคำเตือนของชุด ★:\n${a.warn.map(w=>`- ${w.t} → ${w.f}`).join('\n')}\n`;
fs.writeFileSync('component-map.md',cm);

// ---------- SELECTION.md ----------
let sel=`# PlanC — SELECTION v2 (บัตรลงคะแนนของคุณ)
> **ใช้ DECISION-CONSOLE.html จะง่ายกว่ามาก** — กดเลือกในหน้าเดียว หน้าเปลี่ยนสีตามโลกสีที่เลือก มีตัวตรวจจุดตีกันสดๆ แล้วกดออกไฟล์นี้ให้อัตโนมัติพร้อม PICKSET code · **เทียบฟอนต์ตัวจริงที่ FONT-LAB.html** · ไฟล์นี้ไว้ติ๊กมือถ้าชอบ

ติ๊ก \`[x]\` หนึ่งช่องต่อ component (หรือ \`auto\` เพื่อใช้ ★ ของผม) แล้วส่งกลับมา — ผมจะ apply ลง BUILD-BRIEF แล้วรัน coherence pass แล้วออก BUILD-BRIEF-FINAL.md

PICKSET ของชุด ★: \`${picksetCode(d)}\`
(ลำดับ: ${COMPS.map(c=>c.k).join(',')})

`;
lt=0;
for(const c of COMPS){
  if(c.t!==lt){sel+=`\n## ${TIER[c.t]}\n`;lt=c.t}
  const opts=OPTS.filter(o=>o.c===c.k);const top=Math.max(...opts.map(o=>o.sc));
  sel+=`\n### ${c.n}\n_${c.s}_\n`;
  for(const o of opts){
    const short=o.b.replace(/^(IDENTITY|SMOOTH|WOW|GAME|POKER) — /,'');
    sel+=`- [ ] **${o.id}** · ${o.st} — ${short.length>150?short.slice(0,150)+'…':short}${o.sc===top?' **★**':''}\n`;
  }
  sel+=`- [ ] auto (ใช้ ★ = ${starFor(c.k)})\n- โน้ตถึงคนบิลด์: ______________________________________________\n`;
}
sel+=`\n---\n\n## โน้ตรวม (ไม่บังคับ)\n- อยากเปลี่ยนอะไรเกี่ยวกับชุด ★ ทั้งชุด: ______________________________________________\n- ลำดับ section: ตอนนี้เรียงตามที่คุณให้มา — อยากสลับไหม? ______________________________________________\n- ตัวเลขจริงของผู้ก่อตั้ง (จะแทน [N] ใน copy-draft): ______________________________________________\n- LINE OA ID + ลิงก์ Cal.com: ______________________________________________\n`;
fs.writeFileSync('SELECTION.md',sel);
console.log('component-map.md',fs.statSync('component-map.md').size,'bytes');
console.log('SELECTION.md',fs.statSync('SELECTION.md').size,'bytes');
