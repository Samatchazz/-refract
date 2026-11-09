# Fill review spec — {MON_EN} {YEAR} (kinnom.co Thai snack reviews)

You fill the TODO fields of ONE set's `spec.json` so it PASSES the `mkset.py` gate. The set already has brand/store/price/photos/body-captions filled by an earlier step — you only write the review text fields. This is real published review content for a Thai food blog: pick the author's best sentences and write engaging titles.

## Files (cwd = {WORK})
- Your set dir: `{MONTH_DIR}/<SET>/` (given in your task) — contains `spec.json` (rows to fill) + `caps.json` (full captions, keyed like `nr0`).
- Builder: `queue/mkset.py` (run from inside `queue/`). Tag helper: `queue/mkset.py <dir> --suggest`. Dedupe: `dedupe.py` (in cwd).
- Do NOT touch other sets, the browser, WordPress, or any file outside your set dir.

## What each row already has (do not change): k, date, name, brand, brandSrc, store, price, cat, cover, body (fid+alt+cap), dropped, labelPic, dev, total.
- `brand` is the canonical name from Mat's brand canon (e.g. `ยามาซากิ (Yamazaki)`, `คัดสรร (Kudsan)`, `EZY Sweet`) — copy it as-is into the title; NEVER respell it. mkset will auto-add the brand tag (an `ℹ … เติมแท็กแบรนด์` line is normal). If mkset prints `R4b`, do not edit the brand yourself — report it.
- `store`: if the 📍 line has trailing chatter (e.g. `Tops น้าาา`, `7-11 เลยน้า`), trim it to the store name only (`Tops`, `7-11`) — this is the one exception where you may edit an existing field.
## What YOU fill per row: `verdict`, `intro`, `title`, `yt`, `yd`, `roman`, `slug`, `tags`.

## The hard rules the gate checks (mkset R1–R7)
- **R1 — verdict & intro MUST be exact verbatim substrings of that row's caption.** Copy real spans of the author's text character-for-character (you may cut/trim at sentence boundaries, but NEVER paraphrase, reorder words, fix typos, or add words). The body `cap` fields are already verbatim — leave them.
- **R7 — trace ≥90%.** The gate normalizes (strips spaces/emoji/ๆ/ฯ) `verdict + intro + each body cap` and slides a 6-char window; ≥90% of those windows must be found in the normalized caption, and the pieces must sit in caption order. Practical recipe that works:
  1. `verdict` = ONE strong opinion/hook sentence the author wrote (often near the top): the reaction, the verdict, the "อร่อย/เริ่ด/คุ้ม" line.
  2. `intro` = a LONGER **contiguous** span of the caption that describes taste/texture/experience — ideally a single unbroken stretch copied straight from the caption (this maximizes trace). It's fine for intro to be several sentences as long as they are contiguous in the caption.
  3. Then run `python3 dedupe.py {MONTH_DIR}/<SET>` — it blanks body caps that duplicate verdict/intro or carry 📍💸 markers.
  4. Run mkset. If R7 still fails on a row, make `intro` a longer contiguous caption span, and/or blank the body caps that sit out of order. Body caps that remain must appear in the same order as in the caption.
- **R3 — tags ≥3, must be valid.** Run `cd queue && python3 mkset.py ../{MONTH_DIR}/<SET> --suggest` to list allowed tags per row as `id:name`. Put the **numeric ids** (≥3, pick the most relevant to the product) into the row's `tags` array. Only ids from that row's suggest list are valid.
- **R5 — price** already set; don't touch.
- **R6** — `yd` ≤160 chars; NO en-dash/em-dash `–`/`—` anywhere; `slug` is `a-z0-9-` only and unique within the set; every fill field non-empty.

## The authored fields (write these well — they face readers)
- **title / yt**: the post title. Write ONE engaging Thai title and use it for BOTH `title` and `yt`. Format like the house style: `<product> <brand in ()> <2-3 key qualities>`. Example: `ไดฟูกุชาเขียว แซงเอตวล (ยามาซากิ) ไส้แน่น แป้งนุ่มหนึบ หอมชาเขียว`. Include the brand. Keep it appetizing and specific, pulled from what the caption actually praises. No `–`/`—`.
- **yd**: a ≤160-char Thai description summarizing the taste/verdict (search-snippet style). Appetizing, specific, no `–`/`—`.
- **roman**: romanized product name (ascii), e.g. `Matcha Daifuku Saint Etoile`. Short.
- **slug**: descriptive ascii, brand-product-quality, lowercase-hyphen, e.g. `kitkat-cookie-dough-tops`. Unique within the set.

## Loop until green
1. Read `spec.json` + `caps.json`. For each row, read its full caption, then fill the 8 fields.
2. `python3 dedupe.py {MONTH_DIR}/<SET>`
3. `cd queue && python3 mkset.py ../{MONTH_DIR}/<SET>` — read the ❌ lines, fix those rows, repeat. IGNORE the `ℹ ... sheet:` lines (those are fine). Success = it prints it created the files / no ❌ lines / exits without listing failures.
4. Re-run once more to confirm 0 failures.

Write the filled fields back into `{MONTH_DIR}/<SET>/spec.json` (keep every other field intact; keep it valid JSON, ensure_ascii=False).

## Return
A short summary: set name, rows filled, final mkset result (pass), and any row where you had to blank body caps or stretch intro for R7. Do NOT paste full captions or full specs — just the confirmation and notable notes.