require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = 3000;
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const DATA_DIR = path.join(__dirname, 'data');

// ── Startup cache ──────────────────────────────────────────────────────────────
let matClonePosts = [];
let uruDna = null;
let murakamiDna = null;
let wordbank = null;
let prefixPool = [];
let suffixPool = [];

(function loadCaches() {
  try {
    const dna = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'mat_clone_dna.json'), 'utf8'));
    matClonePosts = dna.posts || [];
    console.log(`✓ mat_clone_dna.json loaded (${matClonePosts.length} posts)`);
  } catch (e) {
    console.warn('⚠ mat_clone_dna.json not found');
  }

  try {
    uruDna = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'uruda_dna.json'), 'utf8'));
    console.log('✓ uruda_dna.json loaded');
  } catch (e) {
    console.warn('⚠ uruda_dna.json not found');
  }

  try {
    murakamiDna = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'murakami_dna.json'), 'utf8'));
    console.log('✓ murakami_dna.json loaded');
  } catch (e) {
    console.warn('⚠ murakami_dna.json not found');
  }

  try {
    wordbank = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'wordbank.json'), 'utf8'));
    console.log('✓ wordbank.json loaded');
  } catch (e) {
    console.warn('⚠ wordbank.json not found');
  }

  try {
    prefixPool = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'twist_prefix.json'), 'utf8'));
    suffixPool = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'twist_suffix.json'), 'utf8'));
    console.log(`✓ twist pools loaded (${prefixPool.length} prefix × ${suffixPool.length} suffix = ${prefixPool.length * suffixPool.length} combinations)`);
  } catch (e) {
    console.warn('⚠ twist_prefix.json / twist_suffix.json not found');
  }
})();

// ── Helpers ────────────────────────────────────────────────────────────────────

function getWordPool(profile) {
  if (!wordbank) return [];
  const behavioralKeys = ['impulse_action','reaction_sound','loss_of_control','physical_reaction','discovery_surprise','behavioral_observation'];
  const pool = [
    ...(wordbank[profile] || []),
    ...(wordbank.neutral || []),
    ...behavioralKeys.flatMap(k => wordbank[k] || []),
  ];
  const unique = [...new Set(pool)];
  return unique.sort(() => Math.random() - 0.5).slice(0, 10);
}

function getMatFallbackText() {
  const shuffled = [...matClonePosts].sort(() => Math.random() - 0.5);
  let text = '';
  for (const post of shuffled) {
    if (text.length + post.length > 8000) break;
    text += post + '\n\n';
  }
  return text.trim();
}


function buildDnaText(dna, maxChars = 8000) {
  if (!dna) return '';
  const sentences = [...(dna.sentences || [])].sort(() => Math.random() - 0.5);
  const paragraphs = [...(dna.paragraphs || [])].sort(() => Math.random() - 0.5);
  let text = '';
  for (const s of sentences) {
    if (text.length + s.length > maxChars) break;
    text += s + '\n';
  }
  for (const p of paragraphs) {
    if (text.length + p.length > maxChars) break;
    text += '\n' + p;
  }
  return text.trim();
}

const S1_ANGLES = ['ความหิวที่ไม่รู้ตัว', 'อารมณ์ขุ่นมัวก่อนกิน', 'สถานที่ที่ไม่คาดคิด', 'ช่วงเวลาผิดที่', 'ผู้คนรอบข้าง', 'อุณหภูมิ', 'ความง่วง', 'สิ่งที่กำลังคิดอยู่ก่อนหยิบ', 'การตัดสินใจแบบ autopilot', 'ช่วงระหว่างงาน'];
const S2_ANGLES = ['สัมผัสแรกที่กระทบ', 'เสียงในขณะกิน', 'แสงในห้อง', 'อากาศข้างนอก', 'ความเงียบรอบข้าง', 'ร่างกายตอบสนอง', 'ลำดับ texture', 'ช่วงเวลากลางวัน', 'ช่วงเวลาค่ำ', 'กลิ่นที่ปะทะก่อน'];
const S3_ANGLES = ['คืนก่อนนอน', 'ความว่างเปล่าหลังกิน', 'สิ่งที่ทำให้นึกถึงคนอื่น', 'คำถามที่ไม่มีคำตอบ', 'ช่วงเวลาที่ยืดออก', 'ความรู้สึกที่ค้างหลังวาง', 'ความทรงจำที่ไม่ชัด', 'ช่วงบ่ายที่เงียบ'];
function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function samplePairs(n = 7) {
  if (!prefixPool.length || !suffixPool.length) return [];
  const px = [...prefixPool].sort(() => Math.random() - 0.5).slice(0, n);
  const sx = [...suffixPool].sort(() => Math.random() - 0.5).slice(0, n);
  return px.map((p, i) => `${p} → ${sx[i]}`);
}

function buildTwistInstruction(twist) {
  if (twist && twist.includes('→')) {
    const [setup, payoff] = twist.split('→').map(s => s.trim());
    return `- plot twist มี 2 จุด — ปลูก "${setup}" ในต้นเรื่อง → ปิดด้วย "${payoff}" ที่จบ ต้องปรากฏทั้งสองจุด`;
  }
  return `- plot twist ต้องใช้: "${twist}" — ห้ามเปลี่ยน ห้าม paraphrase`;
}



// ── POST /api/rewrite/pre ──────────────────────────────────────────────────────
// Step 1: detect dessert profile (1 AI call) → word pool
// Step 2: sample twist pairs locally from prefix+suffix pool (no AI)
app.post('/api/rewrite/pre', async (req, res) => {
  const { draft, context } = req.body;
  if (!draft) return res.status(400).json({ error: 'draft is required' });

  const profileCall = anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 60,
    system: 'ตอบ JSON เท่านั้น ไม่มีคำอธิบาย ไม่มี markdown',
    messages: [{
      role: 'user',
      content: `ขนมหรืออาหารใน draft นี้เป็นประเภทไหน?\ncold = ขนมเย็น ไอศกรีม เครื่องดื่มเย็น\ncrunch = กรอบ แห้ง ของทอด\ncream = ครีม นุ่ม มูส\nsweet = หวาน ทั่วไป ไม่เข้าประเภทอื่น\n\nตอบ: {"profile": "cold|crunch|cream|sweet"}\n\ndraft: ${draft}`,
    }],
  });

  let profile = 'sweet';
  let twistOptions = { style1: [], style2: [], style3: [] };

  try {
    const r1 = await profileCall;
    const profileMatch = r1.content[0].text.trim().match(/"profile"\s*:\s*"(cold|crunch|cream|sweet)"/);
    if (profileMatch) profile = profileMatch[1];

    const allPairs = samplePairs(15);
    twistOptions.style1 = allPairs.slice(0, 5);
    twistOptions.style2 = allPairs.slice(5, 10);
    twistOptions.style3 = allPairs.slice(10, 15);
  } catch (e) {
    console.error('Pre error:', e.message);
    return res.status(500).json({ error: e.message });
  }

  const wordOptions = {
    style1: getWordPool(profile),
    style2: getWordPool(profile),
    style3: getWordPool(profile),
  };
  res.json({ wordOptions, twistOptions, profile });
});

// ── POST /api/rewrite/generate ─────────────────────────────────────────────────
// Runs 3 parallel API calls (Promise.all), each with its own DNA + rules
app.post('/api/rewrite/generate', async (req, res) => {
  const { draft, context, selectedWordsByStyle, twistByStyle } = req.body;
  if (!draft) return res.status(400).json({ error: 'draft is required' });
  if (!selectedWordsByStyle ||
      !Array.isArray(selectedWordsByStyle.style1) || !selectedWordsByStyle.style1.length ||
      !Array.isArray(selectedWordsByStyle.style2) || !selectedWordsByStyle.style2.length ||
      !Array.isArray(selectedWordsByStyle.style3) || !selectedWordsByStyle.style3.length)
    return res.status(400).json({ error: 'selectedWordsByStyle.style1/2/3 must each have at least 1 word' });
  if (!twistByStyle || !twistByStyle.style1 || !twistByStyle.style2 || !twistByStyle.style3)
    return res.status(400).json({ error: 'twistByStyle.style1/2/3 are required' });

  const wordsStr1 = [...selectedWordsByStyle.style1].sort(() => Math.random() - 0.5).join(', ');
  const wordsStr2 = [...selectedWordsByStyle.style2].sort(() => Math.random() - 0.5).join(', ');
  const wordsStr3 = [...selectedWordsByStyle.style3].sort(() => Math.random() - 0.5).join(', ');
  const userText = `draft: ${draft}${context ? `\ncontext: ${context}` : ''}`;
  const uruText = buildDnaText(uruDna);
  const muraText = buildDnaText(murakamiDna);
  const matSample = getMatFallbackText();
  const angleS1 = pickRandom(S1_ANGLES);
  const angleS2 = pickRandom(S2_ANGLES);
  const angleS3 = pickRandom(S3_ANGLES);

  // ── Call 1 — Style 1 (Mat Clone voice via text sample)
  const call1 = anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1000,
    system: `คุณคือนักเขียนรีวิวขนมไทย เขียนด้วยเสียงเดียวกับ reference ด้านล่างทุกอย่าง
=== Voice Reference ===
${matSample}
=== END ===
กฎ:
- จุดเข้าเรื่อง: ${angleS1} — เริ่มจากตรงนี้ก่อนถึงขนม
- humor แบบขำตัวเอง ไม่ใช่แบบ comedian
${buildTwistInstruction(twistByStyle.style1)}
- พูดกับคนอ่านแบบเพื่อน ไม่ใช่ brand
- proof by action ไม่ใช่คำพูด
- ห้ามเปลี่ยนชื่อขนมหรือสินค้าจาก draft
- ห้ามใช้: อร่อยมาก หอมหวานกำลังดี ลงตัวสุดๆ สายหวานต้องลอง ไม่ผิดหวัง
- ใส่คำเหล่านี้อย่างเป็นธรรมชาติ สลับลำดับได้ตามบริบท: ${wordsStr1}
- สร้าง simile 1 อันที่เหมาะกับ draft นี้ เลือก tone เองตามอารมณ์ขนม (เช่น เปรียบกับความรู้สึก ความทรงจำ สถานการณ์ที่ไม่คาดคิด) ให้เป็น simile ที่ชัดและไม่ธรรมดา
- ภาษาไทย ความยาว 1–2 ย่อหน้า ห้ามใช้ markdown`,
    messages: [{ role: 'user', content: userText }],
  });

  // ── Call 2 — Style 2 (Uruda DNA)
  const call2 = anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1000,
    system: `เขียนรีวิวขนมภาษาไทยโดยใช้ DNA ด้านล่างเป็น reference เสียงและโครงสร้าง:
=== DNA ===
${uruText}
=== END ===
กฎ:
- จุดเข้าเรื่อง: ${angleS2} — เริ่มจากตรงนี้ก่อนถึงขนม
- sensory detail เฉพาะเจาะจง ไม่ใช่ทั่วไป
- รสชาติมี sequence อะไรมาก่อน อะไรตามมา
- observation → feeling โดยไม่ประกาศ
- ห้ามอธิบายซ้ำสิ่งที่ประโยคก่อนบอกแล้ว
- ห้ามเปลี่ยนชื่อขนมหรือสินค้าจาก draft
${buildTwistInstruction(twistByStyle.style2)}
- ใส่คำเหล่านี้อย่างเป็นธรรมชาติ สลับลำดับได้ตามบริบท: ${wordsStr2}
- ภาษาไทย ความยาว 1–2 ย่อหน้า ห้ามใช้ markdown ห้ามมี header`,
    messages: [{ role: 'user', content: userText }],
  });

  // ── Call 3 — Style 3 (Murakami DNA)
  const call3 = anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1000,
    system: `เขียนรีวิวขนมภาษาไทยด้วยเสียงสไตล์วรรณกรรมแปลญี่ปุ่น โดยใช้ DNA ด้านล่างเป็น reference:
=== DNA ===
${muraText}
=== END ===
กฎ:
- จุดเข้าเรื่อง: ${angleS3} — เริ่มจากตรงนี้ก่อนถึงขนม
- รสชาติผ่านมาแล้วยังคงอยู่ lingering เสมอ
- ไม่มีอะไรชัดเจน มีแต่ความรู้สึกที่อธิบายไม่ได้
- ประโยคสั้น มีเว้นวรรค มีน้ำหนัก
- ห้ามเปลี่ยนชื่อขนมหรือสินค้าจาก draft
${buildTwistInstruction(twistByStyle.style3)}
- ใส่คำเหล่านี้อย่างเป็นธรรมชาติ สลับลำดับได้ตามบริบท: ${wordsStr3}
- ภาษาไทย เสียงสไตล์วรรณกรรมแปลญี่ปุ่น ความยาว 1–2 ย่อหน้า ห้ามใช้ markdown ห้ามมี header`,
    messages: [{ role: 'user', content: userText }],
  });

  const logs = {
    style1: {
      source: 'Mat Clone DNA (text sample ~2,700 tokens)',
      rules: [`angle: ${angleS1}`, 'humor ขำตัวเอง', 'proof by action', 'พูดกับคนอ่านแบบเพื่อน'],
      twist: twistByStyle.style1,
      words: selectedWordsByStyle.style1,
    },
    style2: {
      source: 'Uruda DNA (sentences + paragraphs)',
      rules: [`angle: ${angleS2}`, 'sensory detail เฉพาะเจาะจง', 'รสชาติมี sequence', 'observation → feeling'],
      twist: twistByStyle.style2,
      words: selectedWordsByStyle.style2,
    },
    style3: {
      source: 'Murakami DNA (sentences + paragraphs)',
      rules: [`angle: ${angleS3}`, 'รสชาติ lingering', 'ประโยคสั้น มีน้ำหนัก', 'internal monologue'],
      twist: twistByStyle.style3,
      words: selectedWordsByStyle.style3,
    },
  };

  try {
    const [r1, r2, r3] = await Promise.all([call1, call2, call3]);
    res.json({
      style1: r1.content[0].text,
      style2: r2.content[0].text,
      style3: r3.content[0].text,
      selectedWordsByStyle,
      twistByStyle,
      logs,
    });
  } catch (e) {
    console.error('Generate error:', e.message);
    res.status(500).json({ error: e.message });
  }
});


// ── POST /api/twist ────────────────────────────────────────────────────────────
app.post('/api/twist', (req, res) => {
  const { styleKey } = req.body;
  if (!['style1','style2','style3'].includes(styleKey))
    return res.status(400).json({ error: 'styleKey must be style1/style2/style3' });

  const counts = { style1: 5, style2: 5, style3: 5 };
  res.json({ twists: samplePairs(counts[styleKey]) });
});

// ── GET /api/words ─────────────────────────────────────────────────────────────
app.get('/api/words', (req, res) => {
  const profile = ['cold','crunch','cream','sweet'].includes(req.query.profile)
    ? req.query.profile : 'sweet';
  res.json({ randomWords: getWordPool(profile) });
});


app.listen(PORT, () => console.log(`\nREFRACT running at http://localhost:${PORT}\n`));
