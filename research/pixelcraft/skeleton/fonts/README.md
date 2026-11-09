# Plan C — type foundation

**Kanit** (display) + **Anuphan** (text). Chosen 2026-07-31. Both by Cadson Demak, both **SIL OFL 1.1**
— free for commercial use, redistributable, no purchase and no renewal. Self-hosted, no CDN request.

```
fonts/
├── type.css                  ← the only place a font-family is declared
├── files/*.woff2             6 files, 116 KB total
├── specimen.html             open this to see real Plan C copy at real sizes
├── LICENSE-Kanit.txt
└── LICENSE-Anuphan.txt
```

## Use

```html
<link rel="stylesheet" href="fonts/type.css">
```

Then only ever reference the two custom properties:

```css
h1 { font-family: var(--font-display); }   /* Kanit  */
p  { font-family: var(--font-text); }      /* Anuphan */
```

Never write a raw `font-family` anywhere else — swapping a font later must be a two-line change.

## Measured metrics (fontTools, read from the font files — not opinion)

| | Kanit | Anuphan |
|---|---|---|
| ascender / descender | 1100 / −395 | 1025 / −275 |
| **minimum line-height** | **1.495** | **1.300** |
| cap height | 644 | 698 |
| x-height | 474 | **570** |
| weights shipped | 500, 700 (static) | 100–700 (variable, one file) |
| size, Thai + Latin | 65 KB | 53 KB |

Two consequences, both already encoded in `type.css`:

**Kanit needs room.** Its glyphs occupy 1.495em, so any line-height below 1.50 clips tone marks and
lower vowels. `--lh-tight: 1.50` is the floor; `--lh-display: 1.15` is only safe at large display
sizes where the em box is physically big. Check with `specimen.html` — drag the line-height slider
down and watch the stress line (`ปุ๋ยญี่ปุ่น อั๊ยย่ะ กรุ๊ป`) start to clip.

**They aren't the same optical size.** Anuphan's x-height is 570 against Kanit's 474, so at identical
px Anuphan reads about 20% larger. `--optical-anuphan: 0.83` compensates.

## What this closes

The Thai font decision was open in `HANDOFF-plan-c.md` §4, and commercial fonts were item 2 of the §5
"someone else's material" list. Both are now resolved for anything built on this foundation: OFL costs
nothing and permits commercial use, so there is no font licence left to buy.

Kanit ships 9 weights plus italics upstream; only 500 and 700 are included here to keep the payload
small. Add more from `@fontsource/kanit` if a design needs them.
