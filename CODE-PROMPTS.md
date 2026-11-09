# CODE-PROMPTS — สั่ง Claude Code สร้างส่วน landing (พรอมต์อังกฤษ รันทีละเฟส)

เตรียมก่อน: export จาก Stitch อยู่ที่ `stitch-draft\` และ `design.md` อยู่ระดับเดียวกับ DESIGN-DIRECTION.md

---

## Phase 1 — Build the landing page

```
Read these files fully before writing any code: design.md, DESIGN-DIRECTION.md, and the reference design in stitch-draft/ (both the exported code and the image).

Then build the marketing site:
- Vite + vanilla JS. Install: gsap, roughjs, rough-notation
- Rebuild the landing page following the layout and section order from stitch-draft/ — use it as a visual reference only, do NOT copy its code
- Strict art direction per DESIGN-DIRECTION.md: pure #000 on #fff only, no grays, no shadows. Google Fonts: Itim (Thai headings), Mali (Thai body), Shantell Sans (English)
- Every box, button, and card gets a hand-drawn wobbly border: use roughjs with a FIXED seed per element (never re-randomize on render), or the CSS uneven border-radius trick from DESIGN-DIRECTION.md
- Pull icons and decorations from assets-svg/sprites.svg via <use> (symbol index is in HANDOVER.md section 3): coins as bullet points, qblock as icons, clouds as quote frames, and a footer strip of ground blocks with the small cat walking toward the castle
- The hero includes a teaser card linking to the existing /creator-life page — do not touch that page or anything inside it
- No scroll animations yet, except rough-notation marker highlights firing once when elements enter the viewport
- When done, start the dev server so I can review
```

## Phase 2 — Motion & doodle polish

```
Polish the landing page, one concern at a time (do not touch /creator-life):
1. Section reveals: subtle fade/slide-in via gsap ScrollTrigger, short and non-blocking
2. Marquee strip: infinite horizontal loop, pauses on hover
3. Cards: slight random-looking rotations (deterministic per element, seeded by index) and a gentle straighten on hover
4. rough-notation: circle one keyword in the hero, underline key phrases in about/pricing — trigger on viewport entry, draw duration ~800ms
5. Doodle decorations (stars, arrows, squiggles) drawn with roughjs, scattered per DESIGN-DIRECTION.md, fixed seeds
Show me the result after each item.
```

## Phase 3 — Final QA

```
Final pass on the landing (leave /creator-life untouched):
- Responsive: no horizontal scroll on mobile, nav collapses into a hand-drawn hamburger menu
- Sweep the whole page for any color that is not pure #000 or #fff, including hover/focus/active states
- Check font fallbacks: Thai text must never fall back to a system serif
- Lighthouse pass: inline sprites.svg once, lazy-load below-the-fold sections if needed
- Write anything unresolved into BUILD-NOTES.md
```

## กติกาคุมงาน

- รันทีละเฟส เปิดเบราว์เซอร์ดูจริงก่อนสั่งเฟสถัดไป
- ฟีดแบ็กรายจุด: "on section X, change Y" ทีละเรื่อง อย่ารวบ
- Claude Code ถามเรื่องเนื้อหา (copy/ราคา/ชื่อแพ็กเกจ) → ตอบเอง อย่าปล่อยให้มันแต่ง
- ต้องการ asset ใหม่ → กลับห้อง Cowork ใช้สูตรใน mario-cat-mj-guide-easy.md
