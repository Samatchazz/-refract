# Brand classification — {MONTH_EN} {YEAR} rows (kinnom.co backfill)

You classify the BRAND (maker of the product) for each review row, using ONLY the text given: `menu` (the poster's short menu name from Slack) and `caption` (the full Facebook caption). Do not browse, do not guess from world knowledge beyond recognising a brand name that is actually present in the text.

Input: `{WORK}/{MONTH_DIR}/classify_input.json` — `{ "nrK": {date, menu, poster, caption} }` ({N_ROWS} rows).
Output: write `{WORK}/{MONTH_DIR}/brand_classify.json` with exactly this shape:

```json
{
 "confident": { "nrK": {"brand": "...", "rule": "A|B|C|D", "evidence": "menu '...'; cap '...'", "store": "..."} },
 "askmat":    { "nrK": {"ai_guess": "", "conf": "low|med", "seen": "menu '...'; cap '...'", "reason": "...", "store": "..."} }
}
```
Every one of the {N_ROWS} keys must appear in exactly one of the two maps.

## Rules for `confident`
- **A** — the brand name appears explicitly in `menu` or `caption` as the product's maker (e.g. "KitKat", "Haribo", "คัดสรร", "EZY Sweet", "ยามาซากิ").
- **B** — the caption says the product is *of/from* a brand ("ของ X", "จาก X", "X ออกใหม่", "เมนูใหม่ของ X") — the author names the maker.
- **C** — D20 bakery-chain rule: the product comes from ซันมูลัน / Sun Moulin, แซงเอตวล / Saint Etoile, or Flavor Field / เฟเวอร์ฟิลด์ → brand is "ยามาซากิ (Yamazaki)" and put the chain name in `store`.
- **D** — the shop's own product: a café / bakery / restaurant chain selling its own menu item (After You, Bao Cafe, Café Amazon, พันธุ์ไทย, อินทนิล, Starbucks, ดองกิ house brand, All Café, Lawson own items, Muji, MK…). Brand = that shop.
- 7-11 is a STORE, never a brand. If the caption only says "มาใหม่ในเซเว่น / 📍 7-11" with no maker → `askmat`.
- Tops, Villa Market, Makro, Gourmet Market, Lawson108, Shopee = stores. Makro house brand "aro" is a brand.
- Collabs: write "X x Y" (e.g. "Sanrio (Hello Kitty) x 7-11", "ยามาซากิ (x Donki collab)").
- Do NOT put a brand in `confident` when it only appears as a comparison or as another product mentioned in passing.

## Spelling — use the canonical brand names
The site has a canonical brand list (`{WORK}/{MONTH_DIR}/canon_names.txt`, format "ไทย (English)" for bilingual brands). When the brand you found is one of these, write it EXACTLY as listed (e.g. "คัดสรร (Kudsan)", "ยามาซากิ (Yamazaki)", "EZY Sweet", "คัสตาร์ดนากามูระ (Custard Nakamura)", "พันธุ์ไทย (Punthai)", "คาเฟ่อเมซอน (Café Amazon)", "หมีเนย (Butter Bear)", "เฮาส์แบรนด์ดองกิ (Donki)"). Brands not on the list: write the name as it appears in the text (proper capitalisation).

## `askmat`
Rows with no maker in the text. `ai_guess` may hold a cautious guess ONLY when there is a real clue in the text (e.g. a product-line name strongly tied to one maker); otherwise leave `ai_guess` empty and `conf` = "low". `reason` = one short Thai sentence why it can't be decided from text. Never invent a brand.

## `store`
The place of purchase from the 📍 line or context ("7-11", "Tops", "ดองกิ", "Lawson108 สีลม", "After You", "Shopee (online)"…). Empty string if none.

## `evidence` / `seen`
Quote the exact fragments (short) from `menu` and `caption` that support the decision, in the form `menu '…'; cap '…'`. Evidence must be copied from the text, not paraphrased.

Work through all {N_ROWS} rows. Write the JSON file with `ensure_ascii=False`, indent 1. Then reply with one line: counts of confident by rule (A/B/C/D) and askmat count, and list the askmat keys that have a non-empty ai_guess.
