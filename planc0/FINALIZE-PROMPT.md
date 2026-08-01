# PROMPT C — FINALIZE (วางในแชท research เดิม · แชทที่ทำ BUILD-BRIEF.md)

> **วิธีใช้:** เติมช่อง BALLOT ข้างล่างก่อน (แก้แค่บรรทัดที่ขึ้นต้นด้วย `-` ในบล็อก BALLOT)
> แล้วก๊อปทั้งบล็อก ``` วางในแชทเดิม — ไม่ใช่แชทใหม่ (แชทใหม่ไม่มี context ของไฟล์)
> ถ้าอยากให้เร็วที่สุด: ตัดสินแค่ **A, B, M** แล้วปล่อยที่เหลือเป็น `auto`

---

## ⚑ ก่อนวาง — เติมบัตรตรงนี้

เลือกอย่างละ 1 ตัว (ใส่รหัส เช่น `A1` หรือ `auto`)

| Component | ตัวเลือก | ★ ของ AI |
|---|---|---|
| A — HERO | `____` | A1 Exo Ape (คำกลางลองเป็นคนอื่น ขีดฆ่า แล้วลงที่ **ตัวตน**) |
| B — SCROLL | `____` | B1 Lenis + scroll-velocity + จังหวะแมวย่อ-พุ่ง |
| C — WORDPLAY | `____` | C1 Minh Pham สองเสียง (สุภาพ ซ่อนเสียงจริง) |
| D — TRANSITIONS | `____` | D1 เส้นหางแมวเส้นเดียวลากข้ามทุก boundary |
| **M — COLOR WORLD** | `____` | M0 The Table (เขียว+งาช้าง+ทอง/แดง) — *เปิด `palette-preview.html` เทียบด้วยตาก่อน* |
| E — MANIFESTO | `____` | E1 Nikola Radeski word-fill |
| F — SERVICES | `____` | F1 Cuberto accordion 00m→-30m |
| G — FOUNDER | `____` | G1 ledger “หลักฐาน ไม่ใช่คำโฆษณา” |
| H — CTA/FOOTER | `____` | H1 หน้ายกตัวขึ้น เจอแมวนั่งอยู่ข้างใต้ |
| I — PRELOADER | `____` | I1 ตาสองดวงในความมืด → กะพริบ → กลายเป็นตัวอักษรแรก |
| J — NAV | `____` | J1 บาร์บาง + overlay หนวดเป็นปุ่ม |
| K — SOCIAL PROOF | `____` | K1 marquee เลข + เทรนด์ตายที่ถูกขีดฆ่า |
| L — CURSOR | `____` | L1 เคอร์เซอร์ภาษากายแมว |

> ⚠️ ถ้าเลือก **M1 (ขาวดำล้วน)** ให้รู้ไว้ว่ามันไม่มี `--ac1` เลย → ทุก “moment สีทอง” ในสเปกจะหายไป ต้องให้ FINALIZE ออกแบบตัวแทน (นี่คือ S5)
> ⚠️ ถ้าเลือก **M4 (ขาว+teal+coral)** มันเป็น light-first ซึ่งชนกับ D4/H1 ที่เอนไปทางมืด — FINALIZE ต้องรายงานให้เห็น

---

## ก๊อปตั้งแต่บรรทัดล่างนี้ลงไป

```
FINALIZE — apply my ballot and produce BUILD-BRIEF-FINAL.md.
Work from the files you already wrote in Z:\Claude Code\planc0\research\
(BUILD-BRIEF.md, component-map.md, copy-draft.md, DECISIONS.md).
This is the last pass before a coding agent builds from your output, so
resolve everything in ONE go — do not ask me questions, log assumptions
instead.

## 1. MY BALLOT (this is the decision — you apply it, you don't revisit it)
- A (HERO): ____
- B (SCROLL EXPERIENCE): ____
- C (WORDPLAY): ____
- D (SECTION TRANSITIONS): ____
- M (COLOR WORLD): ____
- E (MANIFESTO): ____
- F (SERVICES): ____
- G (FOUNDER): ____
- H (CTA + FOOTER): ____
- I (PRELOADER): ____
- J (NAV): ____
- K (SOCIAL PROOF): ____
- L (CURSOR/TOUCH): ____
- Note to builder (global): ____
- Font pairing: keep your recommendation unless the chosen palette
  changes the reasoning — if it does, say so and re-recommend.

Anything marked "auto" = use your ★. Anything I named = use MY pick even
if it scored lower; your job is to make it work, not to re-argue it.

## 2. COHERENCE PASS — run this BEFORE writing the final file
Check my chosen SET as a whole, not option by option. Specifically:
  a) light-first vs dark-first clashes between M and D/H/I
  b) any component whose signature effect depends on an accent colour the
     chosen M world does not have
  c) two components competing for the same moment (e.g. C1 vs L2 both
     wanting the "hidden layer" reveal — only one may own it)
  d) motion-grammar collisions: two chosen components asking for
     different durations/easings at the same boundary
  e) mobile-390px survival of the combination (not of each part)
For every clash: state it plainly, then propose the SMALLEST fix and
implement that fix in the final file. Do not silently obey me and do not
silently override me — every adjustment you make must appear in a short
"COHERENCE ADJUSTMENTS" section at the top of BUILD-BRIEF-FINAL.md with
one line each: what clashed → what you changed → what I lose.
If a clash has no small fix, say so and give me the two real options
instead of inventing a compromise.

## 3. REQUIRED CORRECTIONS (found by an independent re-check — apply all)

S3 · the brief's own specs violate its "tokens only" rule
  BUILD-BRIEF.md:27 and hard rule 10 at :174 say "must use ONLY these
  tokens", but raw millisecond values appear at :57 (600ms), :63 (120ms),
  :64 (500ms, 200ms), :69 (200ms, ~2.4s), :80 (40px/s), :99 (120ms,
  300ms), :132 (600ms). The DoD at :194 tells the builder to audit that
  "every animation uses §3 tokens" — the reference spec itself fails that
  audit, so the builder either invents tokens or ignores the rule.
  Fix (pick one and apply it consistently everywhere):
    add to §3.2 → --t-tick:120ms · --t-strike:200ms · --t-ripple:300ms
    --t-settle:600ms  (plus tokens for any remaining literal)
  OR reword rule 10 to "easing and stagger must always be tokens; any
  duration outside §3.2 must be declared in the THEME block."
  Whichever you choose, no raw ms may remain in the final file.

S4 · two colour roles have nowhere to get a value
  --fg-inverse is used at BUILD-BRIEF.md:94 (footer type) and in the
  DECISIONS.md:56 audit table, but the THEME role list at :178 declares
  only --bg --bg-2 --fg --fg-soft --ac1 --ac2. Separately --fg-soft is
  declared but NO M world defines a hex for it (component-map.md M gives
  bg/text/accent only).
  Fix: (a) add --fg-inverse to the §10 role list; (b) define concrete
  --fg-soft and --fg-inverse values for MY chosen world, and add their
  contrast rows to the injected WCAG table — computed, not estimated.
  After injection, zero roles may be undefined.

S5 · no swap notes for M1–M4
  §6 carries 27 swap notes covering every alternate EXCEPT the four
  palette alternates, and line 2 lists the reference set as 12 components
  with M omitted entirely.
  Fix: add 4 swap notes (3-5 lines each) for the M options I did not
  choose, and amend line 2 to state M's status explicitly. Call out
  specifically that M1 has no --ac1 at all — which silently kills the
  sanctioned accent moments at :63 (preloader eyes) and :94 (CTA) — and
  that M4 is light-first and DECISIONS.md:67 flags it as clashing with
  dark-leaning D4/H1.

S6 · leftover B&W-era literals the palette audit missed (cheap, do it)
  BUILD-BRIEF.md:121 "12vw 8%-ink type" → should be "8% --fg"
  BUILD-BRIEF.md:129 "behind 90% ink" → should be "--bg-2 at 90%"
  component-map.md:360 "90% ink overlay" (same J3 spec)
  options-gallery.html:79 D3 card "หมึกซึม … แบบ B&W" → drop the B&W
  Leave alone: :4 (ink/paper as role names), :116 ("ink-bleed" is the
  option's proper name), component-map A2/G1 (describing source sites),
  M1's own name.

S7 · footer nav points at a section that doesn't exist
  copy-draft.md:60 footer nav lists ผลงาน; the page structure at
  BUILD-BRIEF.md:16-22 has no portfolio section, and the top nav at
  copy-draft.md:65 uses a different set. Align the footer nav to the four
  real anchors.

S8 · unhonored cross-reference
  component-map.md:433 claims bruno-simon.com is "kept as the GAME DNA
  tone reference in BUILD-BRIEF" — BUILD-BRIEF never mentions it. Either
  add a one-line tone reference to §3 or delete the claim.

## 4. WRITE THE FILE — and prove it landed
Write Z:\Claude Code\planc0\research\BUILD-BRIEF-FINAL.md
If this session has no write access to that folder, STOP and tell me the
first line of your answer must be "NO FOLDER ACCESS" — do NOT fall back
to attaching a download, and do NOT write it into the chat only. I lost
a full delivery that way already.
After writing, re-list the directory and paste the actual result:
  | file | bytes | modified |
and confirm BUILD-BRIEF-FINAL.md is in it. If any file you claim to have
written is absent, say so plainly rather than describing it as done.

BUILD-BRIEF-FINAL.md must be SELF-CONTAINED — the builder reads this file
and nothing else. Carry over from BUILD-BRIEF.md everything still true,
with my picks resolved in place (no "if you chose X…" branches left in
the body — those live only in the §6 swap-note appendix):
  · page structure + per-section spec (content / layout / motion /
    transition into the next section)
  · motion grammar + the complete token table, post-S3
  · the THEME block with MY palette's real hex values injected into every
    role, post-S4, plus the WCAG table for the pairs actually used
  · Thai-safe effects whitelist
  · hard rules (100% original code, zero copied assets or hotlinks,
    Google Fonts Thai+Latin only, ≤1.5MB, transform/opacity only,
    390px-first, real HTML text, reduced-motion fallback)
  · easy-edit architecture: one CONTENT block, one THEME block, named
    image slots with dimensions
  · SEO basics + Definition of Done checklist

## 5. SELF-AUDIT — show it ticked at the end of the file
[ ] all 13 of my picks applied; none quietly substituted
[ ] COHERENCE ADJUSTMENTS section present (or "no clashes found" stated)
[ ] S3 applied — zero raw ms values remain
[ ] S4 applied — every declared role has a value; WCAG rows computed
[ ] S5 applied — 4 M swap notes added; line 2 amended
[ ] S6/S7/S8 applied
[ ] no colour literal anywhere outside the THEME block
[ ] every section boundary still has a transition spec
[ ] file written to disk and verified by directory listing
```
