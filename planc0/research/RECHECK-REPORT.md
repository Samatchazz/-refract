# RECHECK-REPORT — PlanC0 pre-build inspection

- Inspector role: read-only pre-build verification
- Target: `Z:\Claude Code\planc0\research\`
- Run: 2026-07-25 22:1x (supersedes the 21:46 run, which found an empty folder — the 6 deliverables landed at 21:55)
- Files written by this pass: `RECHECK-REPORT.md` (this file) + `gallery-check.png` (required by item 7). **No existing file was modified.**

---

## SUMMARY VERDICT: 🔴 **BLOCKED** — but only by you, not by the research

The research itself is **strong and, on every mechanical check I could run, honest** — 13 components, 44 options, all 6 rubric axes on every option, 16/16 WCAG ratios independently recomputed and **exact**, 12/12 cited URLs live, gallery renders with zero console errors. Nothing here needs re-research.

It is BLOCKED on the two ballot-chain conditions:

1. **`SELECTION.md` is 100% blank** — 0 of 57 boxes ticked, 0 of 13 note lines filled. Every component A–M has no selection.
2. **`BUILD-BRIEF-FINAL.md` does not exist** — and cannot, until (1) is done.

`PROMPTS.md` line 176 makes PROMPT B read **only** `BUILD-BRIEF-FINAL.md`. Pasting PROMPT B now would hand the builder a file that isn't there.

### สิ่งที่คุณต้องทำ (exact)

1. **กาบัตร `SELECTION.md` ให้ครบ 13 ช่อง** — A, B, C, D, **M**, E, F, G, H, I, J, K, L
   (แต่ละช่องเลือก 1 ตัว หรือกา `auto` เพื่อใช้ ★ ของ research — `auto` ก็นับว่าตัดสินใจแล้ว)
   ตัวที่กระทบทุกอย่างที่เหลือมากสุด: **A (hero) · B (scroll) · M (สีทั้งเว็บ)**
2. ใส่ note-to-builder เท่าที่อยากสั่ง (ปล่อยว่างได้)
3. **ส่ง SELECTION.md กลับแชท research ให้รัน FINALIZE** → ได้ `BUILD-BRIEF-FINAL.md`
   ตอนส่ง แปะ 3 fix นี้ไปด้วย (S3/S4/S5 ข้างล่าง) ให้แก้ใน FINAL รอบเดียวจบ
4. เรียกผมกลับมา re-check → แล้วค่อยวาง PROMPT B

**อย่าให้ FINALIZE ข้าม S4** — ถ้าไม่ใส่ค่า `--fg-soft` / `--fg-inverse` ตอน inject palette คนสร้างจะต้องเดาสีเอง ซึ่งผิดกติกา "zero color literals outside THEME"

---

## PER-ITEM RESULTS

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | INVENTORY | ⚠️ **PASS (6/6) — but FINAL missing** | All 6 present: component-map 54,886B · options-gallery 35,259B · SELECTION 6,738B · BUILD-BRIEF 28,030B · copy-draft 10,620B · DECISIONS 10,554B. **`BUILD-BRIEF-FINAL.md` absent.** +1 undeclared extra: `capture.mjs` (Playwright capture script, not a deliverable) |
| 2 | COMPLETENESS | ✅ **PASS** | 13 components, 44 options (A4 B4 C4 D4 **M5** E3 F3 G3 H3 I3 J3 K2 L3 = 44 ✓). 44 `**Scores:**` lines, **every one carries all 6 axes** (regex-checked, zero misses). 44 TWIST-M + 44 TWIST-B. 13 `RECOMMENDED ★` + 13 `Why ★` = exactly one per component. 25 unique URLs. Component M = 5 worlds, each with a full system + computed WCAG table |
| 2b | M's WCAG ratios are *real* | ✅ **PASS (verified)** | I recomputed 16 claimed pairs with the WCAG 2.x luminance formula: **16/16 exact** (e.g. gold `#F0B32E` on ivory `#FFFDDB` → 1.82 ✗ as claimed; `#ff3928`/`#1a1a1a` → 4.86; `#FFDA59`/`#000818` → 14.72). Not padded numbers |
| 3 | BALLOT STATE | ❌ **FAIL — blocking** | `grep -c '\- \[[xX]\]'` → **0 ticked**; 57 unticked; 0 note lines filled. **No selection in any of: A, B, C, D, M, E, F, G, H, I, J, K, L** (all 13) |
| 4 | CONSISTENCY | ⚠️ **PARTIAL** | **Passes:** zero hex codes anywhere in BUILD-BRIEF (grep → no matches) ✓ · all 6 section boundaries have a transition spec ([BUILD-BRIEF.md:65](planc0/research/BUILD-BRIEF.md:65), :70, :76, :81, :86, :91) ✓ · motion grammar tables §3.1–3.3 ✓ · Thai-safe whitelist §7 with live-verified segmentation ✓ · §3.4 color-shift machinery present ([:50](planc0/research/BUILD-BRIEF.md:50)) ✓. **Fails:** 3 sub-items → S3, S4, S6 |
| 5 | CROSS-FILE | ⚠️ **PARTIAL** | Every option cited in BUILD-BRIEF §6 exists in component-map ✓ · copy-draft covers all 7 sections + nav + voice-pairs + SEO, bodies ≤60 คำ ✓ · DECISIONS **"Palette correction"** audit table present ([DECISIONS.md:51-64](planc0/research/DECISIONS.md:51)) ✓. **Gaps:** M1–M4 have no swap notes (S5); footer-nav item ผลงาน has no section (S7); bruno-simon claim unhonored (S8); headline คำ-counts optimistic (S9) |
| 6 | SPOT-CHECK URLs | ✅ **PASS (12/12 live)** | exoape 200 · minhpham.design 200 · henriheymans 200 · nikolaradeski 200 · cuberto 200 · unseen.co 200 — plus igloo.inc 200 · zajno 200 · chungiyoo 200 · deso.studio 200 · **dennissnellenberg.com 200** · **kprverse.com 200**. **Zero dead links.** Note: the two sites DECISIONS flagged as fetch-blocked both load fine from your machine — see S10 |
| 7 | RENDER | ✅ **PASS** | Headless Chromium, `file://` load: **13 sections · 44 cards · 13 ★ badges · 43 links · 18 swatch chips · 0 console errors · 0 page errors**, full page 1440×8099. Screenshot → [gallery-check.png](planc0/research/gallery-check.png) (625 KB). Thai renders correctly; M row's 5 cards wrap to 4+1 (cosmetic only) |

---

## FIX LIST (ranked by severity)

### 🔴 S1 — BLOCKER · ballot unfilled
**File:** [SELECTION.md](planc0/research/SELECTION.md) — lines 9-13, 17-21, 25-29, 33-37, **41-46 (M)**, 52-55, 59-62, 66-69, 73-76, 82-85, 89-92, 96-98, 102-105
**Fix:** tick exactly one box per component (or `auto`). 13 ticks minimum. Nothing downstream can start until this file has ≥1 `[x]` per component.

### 🔴 S2 — BLOCKER · `BUILD-BRIEF-FINAL.md` missing
**File:** `planc0\research\BUILD-BRIEF-FINAL.md` (does not exist)
**Fix:** produced by the research chat's FINALIZE protocol ([DECISIONS.md:72-73](planc0/research/DECISIONS.md:72)) after S1. It is the **only** file PROMPT B reads.

### 🟠 S3 — MEDIUM · the brief's own specs violate its "tokens only" rule
**Where:** [BUILD-BRIEF.md:27](planc0/research/BUILD-BRIEF.md:27) ("must use ONLY these tokens") and hard rule 10 at [:174](planc0/research/BUILD-BRIEF.md:174) — versus raw millisecond values at **:57** (600ms), **:63** (120ms), **:64** (500ms, 200ms), **:69** (200ms, ~2.4s), **:80** (40px/s), **:99** (120ms, 300ms), **:132** (600ms).
**Why it matters:** the DoD at [:194](planc0/research/BUILD-BRIEF.md:194) tells the builder to audit that "every animation uses §3 tokens" — the reference spec itself would fail that audit, so the builder either invents tokens or ignores the rule.
**Fix (choose one, at FINALIZE):** add to §3.2 → `--t-tick: 120ms` · `--t-strike: 200ms` · `--t-ripple: 300ms` · `--t-settle: 600ms`; **or** reword rule 10 to "easing and stagger must always be tokens; any duration outside §3.2 must be declared in the THEME block."

### 🟠 S4 — MEDIUM · two color roles have nowhere to get a value
**Where:** `--fg-inverse` is used at [BUILD-BRIEF.md:94](planc0/research/BUILD-BRIEF.md:94) (footer type) and in the audit table at [DECISIONS.md:56](planc0/research/DECISIONS.md:56), but the THEME role list at [BUILD-BRIEF.md:178](planc0/research/BUILD-BRIEF.md:178) declares only `--bg --bg-2 --fg --fg-soft --ac1 --ac2`. Separately, **`--fg-soft` is declared but no M world (M0–M4) specifies a hex for it** — component-map M gives bg/text/accent values only ([component-map.md:173](planc0/research/component-map.md:173), :186, :197, :208, :219).
**Why it matters:** at FINALIZE the palette gets injected into THEME. Two roles would arrive empty, and the DoD requires "every text/bg pair passes AA per the world's WCAG table" — there is no `--fg-soft` pair in any table to check.
**Fix:** (a) add `--fg-inverse` to the §10 role list; (b) at FINALIZE, define `--fg-soft` and `--fg-inverse` for the chosen world and add their contrast rows to the injected WCAG table.

### 🟠 S5 — MEDIUM · no swap notes for M1–M4
**Where:** [BUILD-BRIEF.md:106-132](planc0/research/BUILD-BRIEF.md:106) — §6 carries 27 swap notes covering every alternate **except** the four palette alternates. The brief's own promise at [:2](planc0/research/BUILD-BRIEF.md:2) is "a swap note per alternate option", and that same line lists the reference set as 12 components with **M omitted entirely**.
**Why it matters:** the palette-dependent consequences live only in DECISIONS prose — e.g. M1 has **no `--ac1` at all**, which silently kills the sanctioned accent moments at [:63](planc0/research/BUILD-BRIEF.md:63) (preloader eyes) and [:94](planc0/research/BUILD-BRIEF.md:94) (CTA); M4 is light-first and [DECISIONS.md:67](planc0/research/DECISIONS.md:67) flags it as clashing with dark-leaning D4/H1.
**Fix:** add 4 swap notes to §6 (3-5 lines each), and amend line 2 to state M's status explicitly.

### 🟡 S6 — LOW · leftover B&W-era literals the palette audit missed
The audit table at [DECISIONS.md:51-64](planc0/research/DECISIONS.md:51) covers BUILD-BRIEF §4 and component-map, but **never inspected BUILD-BRIEF §6 swap notes**. Four survivors — the first two are *values a builder would implement*, not metaphors:
- [BUILD-BRIEF.md:121](planc0/research/BUILD-BRIEF.md:121) — `12vw 8%-ink type` → should be `8% --fg`
- [BUILD-BRIEF.md:129](planc0/research/BUILD-BRIEF.md:129) — `behind 90% ink` → should be `--bg-2 at 90%`
- [component-map.md:360](planc0/research/component-map.md:360) — `90% ink overlay` (same J3 spec)
- [options-gallery.html:79](planc0/research/options-gallery.html:79) — D3 card: `หมึกซึม … แบบ B&W` — the gallery header note at [:51](planc0/research/options-gallery.html:51) covers the *ink* metaphor but not an explicit "B&W" direction
*Correctly kept (judged palette-neutral, no action):* [BUILD-BRIEF.md:4](planc0/research/BUILD-BRIEF.md:4) defines ink/paper as roles · :116 "ink-bleed" is the option's proper name · [component-map.md:34](planc0/research/component-map.md:34) A2 "B&W only" and [:278](planc0/research/component-map.md:278) G1 "#000/#fff" describe the *source sites* · M1 "Ink & Paper" is a palette option's name · the gallery's own mono styling is document styling.

### 🟡 S7 — LOW · footer nav points at a section that doesn't exist
**Where:** [copy-draft.md:60](planc0/research/copy-draft.md:60) — footer nav `เรื่องราว · บริการ · ผลงาน · ติดต่อ`. The page structure at [BUILD-BRIEF.md:16-22](planc0/research/BUILD-BRIEF.md:16) has no portfolio section, and the top nav at [copy-draft.md:65](planc0/research/copy-draft.md:65) uses a different set (`เรื่องราว · สามขั้น · ตัวจริง · ทักมา`).
**Fix:** drop ผลงาน, or align the footer nav to the four real anchors.

### 🟡 S8 — LOW · unhonored cross-reference
**Where:** [component-map.md:433](planc0/research/component-map.md:433) says bruno-simon.com is "Kept as the **GAME DNA tone reference** in BUILD-BRIEF" — BUILD-BRIEF never mentions it (grep: 0 hits).
**Fix:** either add a one-line tone reference to §3, or delete the claim.

### 🟡 S9 — LOW · headline word-counts are labelled optimistically
**Where:** [copy-draft.md:12](planc0/research/copy-draft.md:12) labels `สร้างตัวตนที่เป็นของคุณ ไม่ใช่ของเทรนด์` as "7 คำ"; under the `Intl.Segmenter('th',{granularity:'word'})` counting that BUILD-BRIEF §7 mandates it segments to 9. Same pattern at :29 ("5 คำ" → 9) and :44 ("6 คำ" → 9).
**Judgment:** counted as compound phrases the labels are defensible, and the ≤8 คำ rule is editorial, not technical — but if you want the rule enforced literally, these three headlines need trimming. No effect on the build.

### ⚪ S10 — INFO (no action)
- `capture.mjs` is a 7th file in the folder — a Playwright screenshot harness. Harmless, but note it sits next to [DECISIONS.md:6](planc0/research/DECISIONS.md:6)'s claim that headless capture was impossible in that sandbox; the script exists, its output doesn't.
- **dennissnellenberg.com and kprverse.com both return 200 from your machine.** DECISIONS flags them as fetch-blocked/unreachable. The *observation* caveat still stands (nobody watched them move), but you can open D4 / J1 / KPR yourself before ticking those boxes — which [DECISIONS.md:16](planc0/research/DECISIONS.md:16) already invites.
- The single biggest honesty caveat in this delivery is self-declared and worth reading before you tick: [DECISIONS.md:25](planc0/research/DECISIONS.md:25) — **no site was ever visually observed in motion.** Opening the 13 ★ links during your 10-minute skim is the cheapest possible insurance.

---

## RE-CHECK WHEN

- [ ] `SELECTION.md` has ≥1 `[x]` for each of A, B, C, D, M, E, F, G, H, I, J, K, L
- [ ] `BUILD-BRIEF-FINAL.md` exists, with S3 + S4 + S5 applied
- [ ] FINAL's THEME block carries the chosen world's hexes **including `--fg-soft` and `--fg-inverse`** + its WCAG table as comments

Then PROMPT B is safe to paste.
