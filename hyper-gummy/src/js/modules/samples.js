// "ดูเคส" overlay content — three short case stories showing what
// "content from the first draft" actually changes. Injected into
// [data-read-content] on every page so the overlay works from any entry.
// Copy is DRAFT (placeholder outcomes) — replace with real cases.

export const SAMPLES_HTML = `
  <article class="read-sample">
    <span class="label"><span class="dot"></span> เคส 01 — น้ำผลไม้ไซส์พกพา</span>
    <h2 class="read-sample-title">ชื่อรสเกิดก่อนสูตร</h2>
    <p><strong>เราเข้าไปตอนสูตรยังมีแค่ "ส้ม" กับ "อะไรสักอย่างที่ไม่ใช่ส้ม"</strong>
    ทีม R&amp;D อยากได้รสที่สอง แต่ยังไม่รู้ว่าจะเป็นอะไร เราไม่ได้ตอบด้วยรส
    เราตอบด้วยคำถามว่า "คนจะพิมพ์อะไรตอนแชร์ขวดนี้"</p>
    <p>คำตอบคือ "ตื่นยัง" — คำที่คนพิมพ์ให้เพื่อนตอนเช้าอยู่แล้ว
    รสที่สองเลยกลายเป็นรส "ตื่นยัง" (ส้มยูซุ + เย็นๆ) ชื่อไปอยู่บนฝาขวดเป็นตัวใหญ่
    สูตรค่อยปรับตามชื่อทีหลัง ไม่ใช่ชื่อปรับตามสูตร</p>
    <p class="read-result">ผลลัพธ์: ฝาขวดกลายเป็นคอนเทนต์เอง — คนถ่ายฝาส่งให้เพื่อนแทนแคปชัน</p>
  </article>
  <article class="read-sample">
    <span class="label"><span class="dot dot--orange"></span> เคส 02 — สกินแคร์ผู้ชาย</span>
    <h2 class="read-sample-title">แพ็กเกจที่ออกแบบให้ "รีวิวได้" ตั้งแต่ร่างสอง</h2>
    <p><strong>ตอนเราเข้าไป ขวดยังเป็นโมเดล 3D สีเทา</strong> แบรนด์กังวลว่าผู้ชายไม่ถ่ายรูปสกินแคร์
    เราเลยไม่พยายามทำให้ขวดสวยขึ้น แต่ทำให้ขวด "มีเรื่องให้เล่าในสามวินาที"</p>
    <p>ฝาขวดถูกออกแบบใหม่ให้หมุนแล้วมีเสียงคลิกดังชัด และมีเลข 1-2-3 ข้างขวดบอกว่าใช้กี่ปั๊ม
    เพราะคลิปรีวิวที่ผู้ชายยอมถ่ายคือคลิป "ของมันใช้ง่าย" ไม่ใช่คลิป "ของมันสวย"</p>
    <p class="read-result">ผลลัพธ์: คลิปเสียงคลิกฝาขวดกลายเป็นฟอร์แมตหลักของครีเอเตอร์ตอนเปิดตัว</p>
  </article>
  <article class="read-sample">
    <span class="label"><span class="dot dot--lime"></span> เคส 03 — ขนมสำหรับเด็ก</span>
    <h2 class="read-sample-title">ตัวละครบนซองเกิดก่อนขนม</h2>
    <p><strong>โจทย์คือขนมข้าวโพดอบกรอบที่ยังไม่มีรูปทรง</strong> เราถามทีมว่า
    เด็กจะเล่นอะไรกับขนมนี้ก่อนกิน แล้วเสนอว่าชิ้นขนมควรเป็นรูปหมีสามท่า
    เพราะเด็กชอบเรียงและเล่าเรื่องก่อนกิน</p>
    <p>พอขนมมีท่า ตัวละครบนซองก็มีเรื่องเล่า พอมีเรื่องเล่า ผู้ปกครองก็มีคอนเทนต์ถ่ายลูก
    ทั้งหมดถูกตัดสินตอนโมลด์ยังไม่เปิด</p>
    <p class="read-result">ผลลัพธ์: เปิดตัวด้วยคลิปเด็กเล่นหมี ไม่ใช่คลิปโฆษณาขนม</p>
  </article>
`;

export function fillSamples() {
  const target = document.querySelector('[data-read-content]');
  if (target && !target.dataset.filled) {
    target.innerHTML = SAMPLES_HTML;
    target.dataset.filled = '1';
  }
}
