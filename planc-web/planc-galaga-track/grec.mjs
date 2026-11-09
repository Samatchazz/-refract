// อัดวิดีโอ proto galaga — เลื่อนลงทั้งด่านช้าๆ แล้วเลื่อนกลับขึ้นเพื่อพิสูจน์ว่าย้อนได้
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';
const here = path.dirname(fileURLToPath(import.meta.url));
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const ctx = await b.newContext({ viewport:{width:390,height:844},
  recordVideo:{ dir: path.join(here,'vid'), size:{width:390,height:844} } });
const pg = await ctx.newPage();
await pg.goto('file://' + path.join(here,'galaga-proto.html'));
await pg.waitForTimeout(1500);
const glideTo = (y,ms)=>pg.evaluate(([y,d])=>new Promise(res=>{
  const a=scrollY,t0=performance.now();
  (function step(t){ const p=Math.min(1,(t-t0)/d);
    const e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
    scrollTo(0,a+(y-a)*e); p<1?requestAnimationFrame(step):res(); })(t0);
}),[y,ms]);
const max = await pg.evaluate(()=>document.body.scrollHeight-innerHeight);
await glideTo(max, 30000);          // ลงช้าๆ เห็นทุกเวฟ
await pg.waitForTimeout(900);
await glideTo(max*0.45, 5500);      // ย้อนกลับกลางทาง — ศัตรูต้องประกอบร่างกลับ
await pg.waitForTimeout(700);
await glideTo(max, 6000);           // ลงอีกรอบ
await pg.waitForTimeout(900);
await ctx.close(); await b.close(); console.log('ok');
