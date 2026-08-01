# Thai stress test — do these type systems survive Thai?

Every candidate's **measured** display and body type system was re-applied to PlanC's real Thai copy in PlanC's real fonts — **Kanit 700** for display, **Anuphan 400** for body — not the reference site's own fonts. The question is only whether the *proportions* (size, leading, tracking, column width) hold up when Thai glyphs are poured into them.

## Method

Consecutive baselines in a block of text sit exactly `line-height` apart. So for any two adjacent lines:

```
gap = lineHeightPx − inkDescent(upper line) − inkAscent(lower line)
```

Ink extents come from canvas `measureText` `actualBoundingBoxAscent`/`actualBoundingBoxDescent` on **the actual text of each rendered line**, so a line containing ปุ๋ย or กุ๊กกิ๊ก is measured with its full stacked mark height, not an average. `gap < 0` means the upper vowel of one line touches the lower vowel of the line above.

Test strings:

```
สร้างตัวตนที่เป็นของคุณ ไม่ใช่ของเทรนด์
เทรนด์มาแล้วก็ไป ตัวตนอยู่ต่อ
คุณคือครีเอเตอร์ที่รู้ว่าตัวเองคือใคร
เปี่ยม ปุ๋ย หญิง ปฏิญาณ ฟื้นฟู เรื่อง ที่ กุ๊กกิ๊ก
```

A single line cannot collide with anything, so where a string did not wrap at the candidate's own column width, the column was narrowed until it did. The leading under test is therefore always genuinely exercised. Where this happened it is flagged in `thai/thai-results.json` as `widthOverridden`.

## Control — PlanC's own current system

Kanit 700 at 64px, no tracking, 700px column. This is a check on the harness, not on any candidate:

| line-height | verdict | worst gap |
|---|---|---|
| 1.00 | ❌ collides | -18.00px |
| 1.10 | ❌ collides | -11.59px |
| 1.20 | ❌ collides | -5.20px |
| 1.25 | ❌ collides | -2.00px |
| 1.30 | ✅ clears | 1.20px |
| 1.40 | ✅ clears | 7.59px |
| 1.50 | ✅ clears | 14.00px |

**This independently confirms the `line-height: 1.30` already in the build — and shows it has less margin than it looks.** Interpolating the sweep, the collision threshold is **1.2813**. So 1.25 still collides (by 2.00px) and 1.30 clears by only **1.20px** at 64px. 1.30 is not a conservative choice; it is the first round value above the floor. Do not reduce it, and treat any candidate's leading below ~1.29 as unusable rather than borderline.

Note which string drives the number. At 1.20 the ordinary headline strings are already clear or nearly so, while `เปี่ยม ปุ๋ย หญิง ปฏิญาณ ฟื้นฟู เรื่อง ที่ กุ๊กกิ๊ก` — the deliberate stacked-mark stress list — is still 5.20px into collision. A type system tested only on ordinary Thai copy will look safe and then break on a real headline containing ปุ๋ย or กุ๊กกิ๊ก.

**A note on how this number was reached.** The first run of this harness produced a threshold about 0.05 lower, because `document.fonts.load()` without a text argument only requests the Latin unicode-range subset of a Google font — Thai text was silently measured against a fallback face with different vertical metrics. The harness now passes the Thai sample to both `load()` and `check()` and asserts all four faces resolve before measuring. Anyone reusing this technique should do the same; the failure is silent and the numbers look plausible.

## Per-candidate results

| site | their display lh | Thai-safe minimum | correction | collides as-is? | their body lh | body Thai-safe |
|---|---:|---:|---:|---|---:|---:|
| Sakazuki | 0.80 | 1.281 | **+0.48** | yes (-147.5px) | 1.40 | 1.298 |
| EXAT (Hot Type) | 0.78 | 1.281 | **+0.50** | yes (-317.7px) | 1.20 | 1.375 |
| Taper | 1.11 | 1.291 | **+0.18** | yes (-9.3px) | — | — |
| Acquisition.com | 1.15 | 1.320 | **+0.17** | yes (-8.5px) | 0.98 | 1.375 |
| Nippori / LAMM | 1 | 1.281 | **+0.28** | yes (-79.7px) | 1.25 | 1.316 |
| 4WIDE | 0.80 | 1.281 | **+0.48** | yes (-216.1px) | 1.20 | 1.200 |
| Tomoya Okada | 1 | 1.281 | **+0.28** | yes (-29px) | 0.90 | 1.416 |
| Offbeat | 0.80 | 1.281 | **+0.48** | yes (-76.8px) | 1.40 | 1.333 |
| Plan AZ | 1.50 | 1.281 | none needed | no (+66.5px clear) | 1.25 | 1.375 |
| Tamaki Yoshida | 1.45 | 1.281 | none needed | no (+2.8px clear) | — | — |
| Synthetic Theatre | 0.60 | 1.281 | **+0.68** | yes (-92.6px) | — | — |
| Elicyon | 1 | 1.281 | **+0.28** | yes (-75.7px) | 1.15 | 1.357 |
| Museum of Money | 1 | 1.281 | **+0.28** | yes (-25.2px) | 1.38 | 1.357 |
| Normal is Boring | 1.23 | 1.281 | **+0.05** | yes (-2.8px) | 1.35 | 1.333 |
| Aristide Benoist | 0.75 | 1.281 | **+0.53** | yes (-100.2px) | — | — |
| Deso Studio | 1.50 | 1.281 | none needed | no (+24.3px clear) | 1.57 | 1.357 |
| PLUS-EX 15th | 0.80 | 1.281 | **+0.48** | yes (-98.8px) | — | — |
| Izanami | 1 | 1.281 | **+0.28** | yes (-12.3px) | 2.40 | 1.319 |
| Pendragon Cycle | 1.15 | 1.312 | **+0.16** | yes (-5.2px) | 1.50 | 1.383 |
| Iron Hill | 1 | 1.281 | **+0.28** | yes (-69.1px) | 1.35 | 1.375 |
| Dennis Snellenberg | 1 | 1.292 | **+0.29** | yes (-63px) | 1.66 | 1.331 |
| KPRVERSE | 0.84 | 1.281 | **+0.44** | yes (-66.3px) | 1.30 | 1.333 |
| Taper — Design Philosophy | 1.11 | 1.291 | **+0.18** | yes (-9.3px) | — | — |
| TikTok Sans specimen | 1.30 | 1.281 | none needed | no (+16.3px clear) | 1.30 | 1.357 |
| Groteskly Yours | 1.20 | 1.305 | **+0.10** | yes (-7.6px) | 1.20 | 1.357 |
| Klim — Söhne specimen | 1 | 1.289 | **+0.29** | yes (-63px) | 1.33 | 1.333 |
| ABC Dinamo — Whyte | 0.80 | 1.281 | **+0.48** | yes (-105.1px) | 1.10 | 1.359 |
| MONOLOG | 0.90 | 1.281 | **+0.38** | yes (-50.1px) | 1.30 | 1.295 |
| OJI Global Brand Book | 1.47 | 1.373 | none needed | no (+1.8px clear) | — | — |
| TYO Recruit | 1 | 1.281 | **+0.28** | yes (-29px) | 1.60 | 1.353 |
| Tokai Rika Advanced Recruit | 1.15 | 1.281 | **+0.13** | yes (-10.4px) | — | — |
| FUNTECH Brand Identity | 1 | 1.281 | **+0.28** | yes (-84.1px) | — | — |
| Planetono | 1 | 1.281 | **+0.28** | yes (-15px) | — | — |
| Seasoned (Koto) | 0.85 | 1.281 | **+0.43** | yes (-39.6px) | 1.20 | 1.318 |

## What this means structurally

Three findings that outlive this particular decision.

**1 · The Thai-safe floor is a property of the script, not of the site.** Across every candidate measured, the minimum collision-free display leading in Kanit 700 lands in a narrow band of **1.28 to 1.37**, almost regardless of what the reference site does. The number is set by the tallest upper-vowel stack meeting the deepest lower-vowel stack, and those extents belong to the font, not to the layout. Practically: no reference site can license a display leading below about 1.28, and the 1.30 already in the build sits just above that floor rather than comfortably above it.

**2 · Tight display leading is the most common structurally hostile decision.** Read down the display column: 0.60, 0.75, 0.78, 0.80, 0.80, 0.80, 0.84, 0.85, 0.90. Sub-1.0 leading on very large headlines is close to a house style in this genre — it is how a two-line headline is made to read as one dense block. **Thai cannot do it at any size.** A site whose display identity depends on lines nearly touching does not have a display identity we can borrow; we would keep its proportions and lose the thing that made it look like that. This disqualifies more candidates on aesthetics than any grid measurement does.

**3 · Body leading is where candidates genuinely differ.** Display leading is cheap to override — one value. Body leading is the reading experience across the whole page, and the spread there is real: sites at 1.15–1.25 need a correction that visibly lengthens every text section, while sites already at 1.40 or above cost nothing. When two candidates are otherwise equal, **prefer the one whose body leading already clears the Thai floor**, because that is the number that changes how tall the page becomes.

**What this test does not prove.** It measures ink collision only — whether glyphs physically touch. It does not measure whether the result reads well. A leading that clears by 1px is legal and still cramped. The control sweep is the useful reference: at 64px, 1.30 clears by 1.2px and 1.40 by 7.6px. Both "pass", and they do not look the same on screen. If a section reads as cramped in Thai, the fix is more leading, not a smaller size.

Raw per-line ink measurements for every candidate are in `thai/thai-results.json`; the control sweep is in `thai/control-kanit.json`.
