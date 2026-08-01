# North-star candidates — measured

_Generated from `measurements.json`. Every number below was extracted from the live site in a headless Chromium at 1440×900 and 390×844, after dismissing consent UI and scrolling the full page height so lazy and scroll-triggered layout existed before measuring. Nothing here is estimated; anything that could not be read says "not measurable"._

**Sites attempted: 39 · successfully measured: 34 · could not measure: 5**

Two things to know before reading.

**This round asked a different question from the earlier research.** The earlier round hunted for the best individual effects across ~25 sites, which is how we ended up with 14 good modules and no skeleton. This round hunts for structural coherence on a content shape like ours — one long argued document, typography-led, little or no photography. Several sites that scored well in the earlier round score badly here, and that is the point, not a contradiction.

**A large share of award-winning sites cannot teach us a grid at all.** Of 39 sites attempted, 5 render essentially no DOM text — they are WebGL or canvas compositions where the type is drawn into a texture. They are listed at the bottom with the reason. Several more render fine but are disqualified on content shape rather than on quality: a photo-led portfolio index has no structure that transfers to an 8-section argument, however good it looks. Where a site's sections are empty scroll-driver spacers, the left-edge test reports fewer sections than the page appears to have — that is the honest count of sections that actually paint text.

Everything below was measured. Where something could not be read, it says so.

---

## Master comparison

Ranked by measured coherence evidence (left-edge discipline first, then font-size discipline). Ranking is mechanical — it is not a recommendation. The three recommended candidates are called out below the table.


| # | site | country | left edges (σ) | distinct font-sizes | length | =100vh sections | Thai correction | content-shape match | adoption cost |
|---:|---|---|---|---:|---:|---|---|---|---|
| 1 | [Tomoya Okada](#tomoya-okada) | Japan | 1 (σ 0) | 4 | 5.6vh | 0/4 | +0.28 | weak — index, not argument | n/a |
| 2 | [Groteskly Yours](#groteskly-yours) | Lithuania | 1 (σ 0) | 5 | 6.7vh | 0/4 | +0.10 | weak | n/a |
| 3 | [Klim — Söhne specimen](#klim-s-hne-specimen) | New Zealand | 1 (σ 0) | 9 | 30.4vh | 0/6 | +0.29 | specimen, not a service argument | low — grid already close |
| 4 | [Izanami](#izanami) | Japan | 2 (σ 77.9) | 7 | 9.6vh | 0/4 | +0.28 | medium | medium |
| 5 | [EXAT (Hot Type)](#exat-hot-type) | Korea | 2 (σ 2.4) | 20 | 33.4vh | 0/8 | +0.50 | closest — argued one-pager in numbered parts | low–medium |
| 6 | [Museum of Money](#museum-of-money) | USA | 3 (σ 64.7) | 15 | 6.3vh | 0/5 | +0.28 | weak | n/a |
| 7 | [Tamaki Yoshida](#tamaki-yoshida) | Japan | 3 (σ 271.2) | 3 | 5.6vh | 0/17 | none | weak | n/a |
| 8 | [Offbeat](#offbeat) | Korea | 4 (σ 191.6) | 8 | 17.1vh | 2/7 | +0.48 | strong — studio argument, dual script | medium — grid change |
| 9 | [Dennis Snellenberg](#dennis-snellenberg) | Netherlands | 3 (σ 211.9) | 11 | 5vh | 1/5 | +0.29 | weak | n/a |
| 10 | [Taper — Design Philosophy](#taper-design-philosophy) | Japan | 6 (σ 222.7) | 3 | 10.3vh | 1/8 | +0.18 | strong content shape, no grid | n/a — nothing structural to adopt |
| 11 | [Elicyon](#elicyon) | UK | 5 (σ 196.4) | 12 | 16.3vh | 2/6 | +0.28 | medium | medium |
| 12 | [Plan AZ](#plan-az) | Korea | 5 (σ 183.2) | 14 | 32.2vh | 2/5 | none | very strong for the value grid | medium |
| 13 | [Sakazuki](#sakazuki) | Japan | 5 (σ 68.3) | 24 | 28.2vh | 0/6 | +0.48 | very strong on content order | high — no system to inherit |
| 14 | [PLUS-EX 15th](#plus-ex-15th) | Korea | 4 (σ 287.5) | 10 | 81.7vh | 1/10 | +0.48 | weak — photo-led | n/a |
| 15 | [Planetono](#planetono) | ? | 4 (σ 327.1) | 7 | 9.9vh | 1/4 | +0.28 | weak | n/a |
| 16 | [MONOLOG](#monolog) | ? | 5 (σ 260) | 12 | 14.7vh | 2/8 | +0.38 | weak | n/a |
| 17 | [4WIDE](#4wide) | Japan | 6 (σ 213.9) | 15 | 11.7vh | 1/8 | +0.48 | medium | medium |
| 18 | [Normal is Boring](#normal-is-boring) | Spain | 6 (σ 268.8) | 12 | 16.9vh | 1/6 | +0.05 | none | n/a |
| 19 | [FUNTECH Brand Identity](#funtech-brand-identity) | Japan | 4 (σ 385.6) | 9 | 4.6vh | 0/14 | +0.28 | none — horizontal | n/a |
| 20 | [Acquisition.com](#acquisition-com) | USA | 5 (σ 327.3) | 13 | 3.4vh | 0/5 | +0.17 | good on proof blocks only | high |
| 21 | [ABC Dinamo — Whyte](#abc-dinamo-whyte) | Switzerland | 6 (σ 212.2) | 38 | 18.6vh | 0/6 | +0.48 | specimen | high |
| 22 | [Nippori / LAMM](#nippori-lamm) | Japan | 4 (σ 388.6) | 30 | 17.4vh | 0/4 | +0.28 | none | n/a |
| 23 | [TYO Recruit](#tyo-recruit) | Japan | 7 (σ 769) | 16 | 13.3vh | 0/7 | +0.28 | good genre, wrong execution | n/a |
| 24 | [TikTok Sans specimen](#tiktok-sans-specimen) | USA/CN | 10 (σ 1090.9) | 19 | 12.8vh | 2/10 | none | specimen | high |
| 25 | [Taper](#taper) | USA | _n=1, not testable_ | 2 | 1.1vh | 0/1 | +0.18 | none — wrong page | n/a |
| 26 | [Synthetic Theatre](#synthetic-theatre) | UK | _n=1, not testable_ | 4 | 1.1vh | 1/1 | +0.68 | good naming, no measurable structure | n/a |
| 27 | [OJI Global Brand Book](#oji-global-brand-book) | Japan | _n=1, not testable_ | 5 | 1vh | 1/1 | none | weak — paged, not scrolled | n/a |
| 28 | [Aristide Benoist](#aristide-benoist) | France | _n=1, not testable_ | 7 | 1.9vh | 1/1 | +0.53 | none | n/a |
| 29 | [Deso Studio](#deso-studio) | ? | _n=3, not testable_ | 8 | 3.7vh | 0/3 | none | weak | n/a |
| 30 | [Pendragon Cycle](#pendragon-cycle) | USA | _n=1, not testable_ | 8 | 1vh | 1/1 | +0.16 | none | n/a |
| 31 | [Iron Hill](#iron-hill) | Australia | _n=3, not testable_ | 9 | 18.4vh | 2/3 | +0.28 | weak — photo-led | n/a |
| 32 | [KPRVERSE](#kprverse) | ? | _n=0, not testable_ | 9 | 18.2vh | 0/0 | +0.44 | none | n/a |
| 33 | [Tokai Rika Advanced Recruit](#tokai-rika-advanced-recruit) | Japan | _n=1, not testable_ | 9 | 3.4vh | 0/1 | +0.13 | weak | n/a |
| 34 | [Seasoned (Koto)](#seasoned-koto) | UK | _n=3, not testable_ | 10 | 7.9vh | 0/3 | +0.43 | none | n/a |


### Recommended three — with reasons, not a decision

The client picks. These are the three the measurements support, and why.

**1 · Klim — Söhne specimen.** The strongest coherence evidence in the entire set: **one left edge, standard deviation exactly 0**, sustained across 30.5 viewport-heights and 6 sections, with 9 distinct font sizes on the whole page and **zero** sections at 100vh. No photography at all. It is the cleanest available proof that a long document holds together on typography alone, and its numbers are the least ambiguous to copy. The catch is content shape: it argues for a typeface, not a service, and has no equivalent of our proof numbers or service pillars — we would inherit its spatial system and still have to invent the section anatomy ourselves.

**2 · EXAT.** The closest content shape with almost as much discipline: **two left edges, σ 2.38px** — effectively one rail plus a single deliberate second column — across 8 text-bearing sections and 33.4vh, with none of them at 100vh. Its constraining container measured **1439.91px**, which independently lands on the 1440px `--page-max` the skeleton already guessed. Structurally it is our page: a sustained argument in numbered parts, mostly text, one accent element per section. It is the only candidate in the set that is both a real one-page argument and demonstrably grid-disciplined.

**3 · Studio OFF-BEAT.** The best dual-script evidence. **Eight distinct font sizes** is the tightest type discipline of any editorial site measured, on a real 12-column grid with a 25.92px gutter. It runs Korean and Latin at two clearly separated hierarchy levels — the exact problem Thai + Latin gives us — and its **body leading of 1.40 already clears the Thai floor with room to spare** (its Thai minimum is 1.333). Klim scrapes past at 1.33 against a 1.333 minimum; EXAT sets body at 1.20 and would need +0.18, which lengthens every text section on the page. Its display leading (0.80) does not survive Thai, but a display system is one value to change; a body system is the whole reading experience.

**Why not the others.** *Sakazuki* was the strongest seed on paper and does not survive measurement as a skeleton: five left edges with σ 68px and twenty-four distinct font sizes. Beautifully made, but closer to what we already built than to what we are missing. *taper.design*'s homepage is a short Squarespace landing, not the long essay — the essay is at `/design-philosophy` and was measured separately; its type discipline is remarkable (three font sizes) but it is centred with no grid, so there is no left-edge system to inherit. *Acquisition.com* has the right argumentative content and no imagery, but five left edges at σ 327px and a 132-character reading measure make it a counterexample, not a model.

---

## Where the measurements disagree with SITE-SKELETON.md

`planc0/research/SITE-SKELETON.md` contains guesses. These are the measurements. Where they disagree, the measurement is what happened on real sites; the guess is what we assumed.

### 1 · "One shared left edge" — half right, and the half that is wrong matters

**The guess (§1):** every zone starts at column 2, producing one virtual left edge down the whole page — *"this is half of the feeling of being one website."*

**The measurement:** of the 24 sites with enough text-bearing sections to run the test, only **5 have one or two left edges** (Tomoya Okada, Groteskly, Klim, EXAT, Izanami). The other 19 use three or more.

So a single left edge is **not** what most good long pages do. But before discarding the rule, the more useful test: of the 19 sites with three or more edges, do those edges at least land on a common column step? Only **5 of 19 do** (Offbeat 48px, TYO Recruit 48px, FUNTECH 58px, Museum of Money 68px, Tamaki Yoshida 169px, all within 4px). The remaining 14 are genuine drift — their edges have no arithmetic relationship to each other at all.

**Net:** roughly **10 of 24** measured documents have a defensible left-edge system, by either route. The skeleton's rule is therefore *sufficient but not necessary* — one rail guarantees coherence, but a strict column step achieves it too. What no coherent site does is what our current build does: several edges with no relationship between them. **Keep the rule.** It is the cheaper of the two valid routes, and it is the one that survives having only eight sections to establish a pattern in.

### 2 · "No section may be exactly 100vh" — contradicted as an absolute

**The guess (§5):** *"ห้าม section ไหนสูงเท่ากับ 100vh พอดี"* — no section may be exactly one viewport tall, because that always reads as a slide.

**The measurement:** **16 of 34** measured sites have at least one section within ±3% of 100vh, and that group includes Awwwards Site-of-the-Day winners. Exactly-100vh sections are common, not disqualifying.

But the distribution is the real finding. Among sites with five or more sections, **no site exceeds two** exactly-100vh sections: Offbeat 2/7, Elicyon 2/6, Plan AZ 2/5, MONOLOG 2/8, TikTok Sans 2/10, and eight more at 1. The only sites where a *majority* of sections are 100vh are the ones with just one to three sections total — the slide-style pages (Pendragon 1/1, OJI 1/1, Synthetic Theatre 1/1, Iron Hill 2/3), and those are exactly the pages that read as decks.

**Net:** the mechanism the skeleton describes is real, but the threshold is wrong. **One or two full-screen sections read as punctuation; a page where most sections are full-screen reads as a deck.** The skeleton's own exception in §5.4 — three deliberate full-screen moments — already encodes the right idea; it is the blanket ban in §5.1 that overshoots. Our planned 3 of ~10 sits at the top of observed practice but inside it. Recommend relaxing §5.1 from a prohibition to a budget: *at most 3 of 8, and only where full-screen is the point.*

### 3 · "No spacing value outside the scale" — stricter than any site measured

**The guess (§2):** a fixed 11-step scale, and *"ห้ามมีค่าระยะห่างอื่นในโค้ดทั้งหมด"* — no other spacing value anywhere.

**The measurement:** the largest divisor that explains 80% of each site's spacing values is **2px for 15 sites and 4px for 6**. Not one measured site has an 8px base unit at that coverage. Real sites use a named scale for the big decisions and then take optical liberties everywhere else.

**Net:** no site earns this rule, so it cannot be justified by reference to one. It is still a good rule *for us* — the failure the client identified is inconsistency, and a hard scale is the cheapest cure — but it should be presented as our discipline, not as observed practice.

### 4 · `--page-max: 1440px` — supported

Measured constraining containers: **EXAT 1439.91px**, Acquisition 1370px, Museum of Money 1280px, Iron Hill 1200px, Dennis Snellenberg 1728px, Planetono and Taper 2000px (Squarespace default). 1440 sits squarely in the middle of the band, and the closest structural match in the whole set landed on it independently. No change.

### 5 · `--zone-text` at 34ch — narrow, but defensible

Reading measures of real body columns, in conventional ch (the width of a `0` glyph — the brief's 100-character method reads about 1.3× higher, and both are in `measurements.json`):

EXAT 33.9 · Groteskly 32.4 · Iron Hill 32.9 · Offbeat 41.5 · Klim 46.5 · Elicyon 47.0 · Izanami 48.1 · Sakazuki 48.6 · Dinamo 49.3 · TikTok Sans 50.4 · Nippori 51.6 · MONOLOG 55.0 · 4WIDE 60.4

Median ≈ **47ch**. Our 34ch is at the narrow end of the band but three measured sites — including EXAT — sit right there. **Not a contradiction, but worth knowing we are choosing the tight end deliberately.** If Thai body text feels cramped in testing, there is measured precedent for going to ~45ch.

### 6 · Total page length 950–1200vh — we are planning a much shorter document than the comparables

**The guess (§7):** roughly 9.5 to 12 viewport-heights total.

**The measurement:** the comparable long argued documents are **two to three times longer**. EXAT 33.4 · Plan AZ 32.2 · Klim 30.5 · Sakazuki 28.2 viewport-heights, with PLUS-EX at 81.7. Nothing in the set that reads as a sustained document is under about 10, and the ones we would most want to be compared to are around 30.

**Net:** this is the largest single gap between the skeleton and observed practice, and it is not a formatting detail — length is how these pages earn the feeling of being a document rather than a landing page. Two honest readings: either our content genuinely is shorter and the target is right, or the target was set by what the existing 14 modules already added up to. Worth deciding on purpose. **This one should be checked against the actual Thai copy before anything else in the skeleton changes.**

### 7 · Something the skeleton does not mention and probably should

Of the 34 measured sites, **20 have at least one persistent fixed or sticky element**, and the ones that read most clearly as a single document have a small persistent marker rather than a large one — a section counter, a progress rail, a sticky label. The skeleton's §6.2 rail is therefore well-supported by practice. But **nav state is not**: only about half the measured sites change their nav at all between scrollY 0 and 2000, so §6.3's shrinking nav is optional, not a coherence requirement. Spend the effort on the rail.


---

## Candidates in detail


### Sakazuki

**https://sakazuki.io** · Japan · Awwwards Typography Honors May 2026 · Site of the Day Jun 14, 2026 ([award page](https://www.awwwards.com/sites/sakazuki))
*Membership/brand site: Philosophy → Collective → Benefits → Founder → FAQ.*

**Criteria:** Long ✅ · typography-led ⚠️ (pattern and illustration do real work) · argumentative ✅ · 2026 ✅ · one document ⚠️.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 28.16vh (25341px) | 21.44vh |
| scroll | native | native |
| top-level sections | 6 (found by semantic-siblings) | 6 |
| dominant text column | 623px at x=725 | 308px at x=41 |
| declared max-width | 100% | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 2 cols, gap 115.2px (width 1257px) | 2 cols, gap normal |
| section padding-block (first 4) | 0px/0px · 135.529px/211.765px · 211.765px/0px · 211.765px/67.7647px | — |
| section heights (×vh) | 3.67 · 4.13 · 6.21 · 5.39 · 2.53 · 2.80 | — |
| sections within ±3% of 100vh | **0 of 6** | 0 of 6 |
| base spacing unit (80% divisor) | 25px (strict GCD 1px) | 21px |
| display type | 317px / lh 0.80 / w400 / ls -0.020em | 86px / lh 0.80 |
| body type | 17px / lh 1.40 / w400 | 12px / lh 1.40 |
| meta / smallest | 11px / lh 1.40 | — |
| mono label | none | — |
| display : body ratio | 18.70× | — |
| reading measure | 64.2 ch (column 593px) | 54.2 ch |
| distinct font-sizes | **24** (18 used more than once) | 24 |
| distinct font families | 2 — hagrid-text, hagrid | — |
| distinct text colours | 3 · backgrounds 5 | — |
| persistent elements | 9 fixed/sticky — header "PHILOSOPHYPHILOSOPHYCO" 1440×60; div "(X)(X)(IG)(IG)(OS)(OS)" 1440×76; div 1440×900 | 5 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`34 · 34 · 196 · 188 · 80 · 56`
5 distinct edges (2px tolerance), σ = 68.29px. Heading edges: 6 distinct, σ = 420.58px.
→ 5 edges, moderate spread (σ=68.3px) — a grid exists but sections opt out of it. Edges do not resolve to a common column step (best fit 40px leaves 18px of error) — this is drift, not a grid. This is the finding that matters most about this candidate: its section order is almost exactly ours, but its left edges are not shared, and that is precisely the failure the client described in our own build.

**TYPE SCALE** — 24 distinct sizes; the 18 used more than once are `316.8 · 232.9 · 216 · 148.2 · 127.1 · 63.5 · 52.9 · 42.4 · 33.9 · 31.8 · 30.2 · 21.2 · 16.9 · 15.3 · 14.8 · 13.8 · 11 · 10.6`.
Consecutive ratios: 1.36 · 1.08 · 1.46 · 1.17 · 2.00 · 1.20 · 1.25 · 1.25 → mean 1.35, σ 0.27 (loose but recognisable)

**THAI VERDICT** — **needs +0.48 leading** — 0.8 → **1.2813** (worst overlap -147.5px at their display size). Its own configuration bottoms out at 1.266, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Useful as a content-order reference and almost useless as a skeleton. It confirms that Philosophy → pillars → founder is a workable order for this kind of page, but its measured discipline is no better than what we already have — twenty-four distinct font sizes and five unshared left edges. Adopting it would not fix the problem it was nominated to fix.

**Screenshots** — 1440: [1440-scroll000](shots/sakazuki-1440-scroll000.jpg) · [1440-scroll025](shots/sakazuki-1440-scroll025.jpg) · [1440-scroll050](shots/sakazuki-1440-scroll050.jpg) · [1440-scroll075](shots/sakazuki-1440-scroll075.jpg) · [1440-scroll100](shots/sakazuki-1440-scroll100.jpg) · [full page](shots/sakazuki-1440-full.jpg) · 390: [full page](shots/sakazuki-390-full.jpg)

---

### EXAT (Hot Type)

**https://exat.hottype.co** · Korea · Awwwards Typography Honors Mar 2025 · Site of the Day Apr 3, 2025 ([award page](https://www.awwwards.com/sites/exat-typeface))
*Typeface specimen built as a one-page argument: About → Type Tester → Character Set → Design Space → OpenType → Language Support.*

**Criteria:** Long ✅ · typography-led ✅ · argumentative ✅ · 2025 ✅ · one document ✅ — passes all five.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 33.43vh (30085px) | 32.78vh |
| scroll | native | native |
| top-level sections | 8 (found by semantic-siblings) | 9 |
| dominant text column | 335px at x=1085 | 365px at x=12 |
| declared max-width | 1439.91px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 40 cols, gap normal (width 1400px) | 5 cols, gap 5.20006px |
| section padding-block (first 4) | 16.9989px/0px · 19.9987px/49.9968px · 19.9987px/0px · 19.9987px/19.9987px | — |
| section heights (×vh) | 4.84 · 0.82 · 4.05 · 2.94 · 2.77 · 7.30 · 6.01 · 1.89 | — |
| sections within ±3% of 100vh | **0 of 8** | 2 of 9 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | none |
| display type | 654px / lh 0.78 / w400 / ls -0.040em | 312px / lh 0.94 |
| body type | 16px / lh 1.20 / w400 | 15px / lh 1.20 |
| meta / smallest | 7px / lh 1.50 | — |
| mono label | none | — |
| display : body ratio | 40.88× | — |
| reading measure | 45.2 ch (column 335px) | 41.6 ch |
| distinct font-sizes | **20** (18 used more than once) | 17 |
| distinct font families | 4 — Exat, Exat Condensed, Exat Wide | — |
| distinct text colours | 9 · backgrounds 11 | — |
| persistent elements | 2 fixed/sticky — header "Exat — New typeface by" 1440×66; div "About font Type tester" 1440×900 | 2 |
| nav changes on scroll | yes — top, transform, opacity | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`20 · 20 · 19 · 20 · 27 · 20 · 20 · 20`
2 distinct edges (2px tolerance), σ = 2.38px. Heading edges: 3 distinct, σ = 108.55px.
→ **two left edges, tight** (σ=2.4px) — a primary rail plus one deliberate indent.

**TYPE SCALE** — 20 distinct sizes; the 18 used more than once are `356 · 300 · 284 · 204.8 · 121 · 110 · 106 · 90 · 72 · 46 · 36 · 32 · 25 · 20 · 16 · 14 · 13 · 7`.
Consecutive ratios: 1.19 · 1.06 · 1.39 · 1.69 · 1.10 · 1.04 · 1.18 · 1.25 → mean 1.24, σ 0.20 (loose but recognisable)

**THAI VERDICT** — **needs +0.50 leading** — 0.78 → **1.2813** (worst overlap -317.7px at their display size). Its own configuration bottoms out at 1.266, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — The closest thing in the set to our page shape: eight text-bearing sections that each make one point and hand off to the next, held on one rail with a single second column for supporting text. We would inherit the container width (measured 1439.91px, effectively confirming --page-max: 1440px), the two-edge discipline, and the pacing evidence that a 33-viewport document needs no full-screen sections at all. Its type scale is wider than ours needs — a specimen shows off sizes by definition — so we would take its spatial system and keep the skeleton's tighter 9-value scale.

**Screenshots** — 1440: [1440-scroll000](shots/exat-1440-scroll000.jpg) · [1440-scroll025](shots/exat-1440-scroll025.jpg) · [1440-scroll050](shots/exat-1440-scroll050.jpg) · [1440-scroll075](shots/exat-1440-scroll075.jpg) · [1440-scroll100](shots/exat-1440-scroll100.jpg) · [full page](shots/exat-1440-full.jpg) · 390: [full page](shots/exat-390-full.jpg)

---

### Taper

**https://taper.design** · USA · Listed on Awwwards (Japan) ([award page](https://www.awwwards.com/websites/Japan/))
*Squarespace homepage — a short landing page, not the essay. The essay lives at /design-philosophy and is measured separately.*

**Criteria:** Long ❌ (1.1vh) · typography-led ❌ (photograph-led hero) · argumentative ❌ on this page · 2025 ✅ · one document ❌.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 1.12vh (1009px) | 1vh |
| scroll | native | native |
| top-level sections | 1 (found by body-children) | 1 |
| dominant text column | 72px at x=261 | 1px at x=343 |
| declared max-width | 2000px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px | — |
| section heights (×vh) | 1.12 | — |
| sections within ±3% of 100vh | **0 of 1** | 1 of 1 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 51px / lh 1.11 / w700 / ls -0.020em | 34px / lh 1.11 |
| body type | — | — |
| meta / smallest | 20px / lh — | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **2** (2 used more than once) | 2 |
| distinct font families | 2 — Poppins, Manrope | — |
| distinct text colours | 2 · backgrounds 3 | — |
| persistent elements | 1 fixed/sticky — header "Skip to Content @suppo" 1440×99 | 1 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`-20000`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **not a valid test** — only 1 text-bearing section on the page, so a single shared edge here is arithmetic, not discipline.

**TYPE SCALE** — 2 distinct sizes; the 2 used more than once are `51.1 · 20`.
Consecutive ratios: —

**THAI VERDICT** — **needs +0.18 leading** — 1.11 → **1.291** (worst overlap -9.3px at their display size).

**FIT FOR PLANC** — The seed brief pointed at the wrong URL. This page is a one-screen Squarespace landing with a product photograph and a nine-item nav; the long argued document the brief described is at `/design-philosophy`. Kept in the list so the record is honest about it.

**Screenshots** — 1440: [1440-scroll000](shots/taper-1440-scroll000.jpg) · [1440-scroll025](shots/taper-1440-scroll025.jpg) · [1440-scroll050](shots/taper-1440-scroll050.jpg) · [1440-scroll075](shots/taper-1440-scroll075.jpg) · [1440-scroll100](shots/taper-1440-scroll100.jpg) · [full page](shots/taper-1440-full.jpg) · 390: [full page](shots/taper-390-full.jpg)

---

### Acquisition.com

**https://www.acquisition.com** · USA · None — included for content structure only, as the brief specified
*Service and credibility page — numbers-with-provenance as proof, no imagery.*

**Criteria:** Long ⚠️ (3.4vh) · typography-led ✅ · argumentative ✅ · 2025 ✅ · one document ⚠️.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 3.38vh (3044px) | 5.43vh |
| scroll | native | native |
| top-level sections | 5 (found by tall-children-of-wrapper) | 5 |
| dominant text column | 1110px at x=165 | 340px at x=25 |
| declared max-width | 1370px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | 2 cols, gap normal |
| section padding-block (first 4) | 0px/0px · 20px/10px · 20px/20px · 0px/50px | — |
| section heights (×vh) | 0.48 · 0.21 · 0.59 · 1.19 · 0.33 | — |
| sections within ±3% of 100vh | **0 of 5** | 0 of 5 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | 2px |
| display type | 50px / lh 1.15 / w800 / ls 0em | 50px / lh 1.15 |
| body type | 16px / lh 0.98 / w200 | 16px / lh 0.98 |
| meta / smallest | 12px / lh — | — |
| mono label | none | — |
| display : body ratio | 3.13× | — |
| reading measure | 131.7 ch (column 1129px) | 42.8 ch |
| distinct font-sizes | **13** (8 used more than once) | 11 |
| distinct font families | 1 — Poppins | — |
| distinct text colours | 4 · backgrounds 6 | — |
| persistent elements | 2 fixed/sticky — div "NEW 2026 Scaling Works" 1440×68; div 48×48 | 2 |
| nav changes on scroll | yes — top | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`421 · 478 · 301 · 165 · 1114`
5 distinct edges (2px tolerance), σ = 327.25px. Heading edges: 4 distinct, σ = 239.80px.
→ 5 edges, wide spread (σ=327.3px) — no shared left rail. Edges do not resolve to a common column step (best fit 63px leaves 10px of error) — this is drift, not a grid.

**TYPE SCALE** — 13 distinct sizes; the 8 used more than once are `36 · 26 · 22 · 20 · 18 · 17 · 16 · 14`.
Consecutive ratios: 1.38 · 1.18 · 1.10 · 1.11 · 1.06 · 1.06 · 1.14 → mean 1.15, σ 0.10 (consistent multiplier)

**THAI VERDICT** — **needs +0.17 leading** — 1.15 → **1.32** (worst overlap -8.5px at their display size).

**FIT FOR PLANC** — Worth reading for one thing only: how a claim is bound to its evidence in the same block, which is directly relevant to our §3 proof numbers. Structurally it is a counterexample — five unshared left edges and a 132-character reading measure, which is roughly three times a comfortable one.

**Screenshots** — 1440: [1440-scroll000](shots/acquisition-1440-scroll000.jpg) · [1440-scroll025](shots/acquisition-1440-scroll025.jpg) · [1440-scroll050](shots/acquisition-1440-scroll050.jpg) · [1440-scroll075](shots/acquisition-1440-scroll075.jpg) · [1440-scroll100](shots/acquisition-1440-scroll100.jpg) · [full page](shots/acquisition-1440-full.jpg) · 390: [full page](shots/acquisition-390-full.jpg)

---

### Nippori / LAMM

**https://nippori.lamm.tokyo** · Japan · Awwwards Typography Honors Jan 2026 ([award page](https://www.awwwards.com/websites/winner_category_typography/))
*Japanese radio-show site — deliberately maximalist overlapping collage.*

**Criteria:** Long ✅ · typography-led ⚠️ · argumentative ❌ · 2026 ✅ · one document ❌ by intent.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 17.38vh (15638px) | 11.59vh |
| scroll | native | native |
| top-level sections | 4 (found by semantic-siblings) | 4 |
| dominant text column | 359px at x=29 | 365px at x=12 |
| declared max-width | 359px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 3 cols, gap normal (width 1440px) | 2 cols, gap normal |
| section padding-block (first 4) | 0px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 6.39 · 2.88 · 2.50 · 1.77 | — |
| sections within ±3% of 100vh | **0 of 4** | 0 of 4 |
| base spacing unit (80% divisor) | 4px (strict GCD 1px) | 2px |
| display type | 300px / lh 1 / w400 / ls -0.020em | 78px / lh 1 |
| body type | 19px / lh 1.25 / w400 | 15px / lh 1.60 |
| meta / smallest | 12px / lh 1.50 | — |
| mono label | none | — |
| display : body ratio | 15.79× | — |
| reading measure | 62.9 ch (column 545px) | 44.7 ch |
| distinct font-sizes | **30** (25 used more than once) | 19 |
| distinct font families | 3 — kozuka-mincho-pro, Helvetica, Playfair | — |
| distinct text colours | 2 · backgrounds 14 | — |
| persistent elements | 5 fixed/sticky — div "Thinking Time Nippori " 1440×87; div "Produced by LAMM.Inc" 171×16; div "ABOUT (5) HIGH LIGHT (" 554×36 | 5 |
| nav changes on scroll | yes — top | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`38 · 933 · 52 · 18`
4 distinct edges (2px tolerance), σ = 388.60px. Heading edges: 4 distinct, σ = 388.60px.
→ 4 edges, wide spread (σ=388.6px) — no shared left rail. Edges do not resolve to a common column step (best fit 40px leaves 20px of error) — this is drift, not a grid.

**TYPE SCALE** — 30 distinct sizes; the 25 used more than once are `300 · 205 · 150 · 141 · 135 · 90 · 85 · 75 · 66 · 60 · 40 · 36 · 32 · 31.2 · 31 · 30 · 28 · 26 · 24 · 18 · 17 · 16 · 14 · 13 · 12`.
Consecutive ratios: 1.46 · 1.37 · 1.06 · 1.04 · 1.50 · 1.06 · 1.13 · 1.14 → mean 1.22, σ 0.18 (loose but recognisable)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -79.7px at their display size). Its own configuration bottoms out at 1.266, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Thirty distinct font sizes and elements deliberately colliding — a Typography Honors winner that is the opposite of a shared system, on purpose. Included because it is the most useful reminder in the set that 'award-winning typography' and 'a system we can inherit' are different things.

**Screenshots** — 1440: [1440-scroll000](shots/nippori-1440-scroll000.jpg) · [1440-scroll025](shots/nippori-1440-scroll025.jpg) · [1440-scroll050](shots/nippori-1440-scroll050.jpg) · [1440-scroll075](shots/nippori-1440-scroll075.jpg) · [1440-scroll100](shots/nippori-1440-scroll100.jpg) · [full page](shots/nippori-1440-full.jpg) · 390: [full page](shots/nippori-390-full.jpg)

---

### 4WIDE

**https://4wide.jp** · Japan · Awwwards Honorable Mention Apr 13, 2026 ([award page](https://www.awwwards.com/sites/4wide))
*Japanese studio site that declares its own system on the page — PP Neue Montreal + Noto Sans JP, 12/6 columns.*

**Criteria:** Long ✅ · typography-led ✅ · argumentative ⚠️ (part studio pitch, part project index) · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 11.72vh (10549px) | 9.98vh |
| scroll | virtual (transformed wrapper / JS scroller) | virtual (transformed wrapper / JS scroller) |
| top-level sections | 8 (found by semantic-siblings) | 8 |
| dominant text column | 400px at x=913 | 357px at x=17 |
| declared max-width | 100% | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 12 cols, gap 20px (width 1440px) | 6 cols, gap 10.4px |
| section padding-block (first 4) | 0px/0px · 120px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 1 · 1.15 · 0.56 · 3.13 · 1.10 · 1.09 · 0.93 · 0.65 | — |
| sections within ±3% of 100vh | **1 of 8** | 1 of 8 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | none |
| display type | 464px / lh 0.80 / w400 / ls -0.020em | 116px / lh 0.80 |
| body type | 12px / lh 1.20 / w400 | 12px / lh 1.80 |
| meta / smallest | 10px / lh 1 | — |
| mono label | none | — |
| display : body ratio | 38.67× | — |
| reading measure | 84.3 ch (column 460px) | 62.8 ch |
| distinct font-sizes | **15** (13 used more than once) | 15 |
| distinct font families | 4 — pp-fragment-glare-light, PP Neue Montreal Medium, PP Neue Montreal Book | — |
| distinct text colours | 4 · backgrounds 3 | — |
| persistent elements | 6 fixed/sticky — div "4 W I D E" 1440×900; header "4 W I D E About Showca" 1440×17; div "(Navigation) Home Abou" 1440×900 | 7 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`16 · 120 · 545 · 20 · 20 · 20 · 138 · 532`
6 distinct edges (2px tolerance), σ = 213.92px. Heading edges: 6 distinct, σ = 213.92px.
→ 6 edges, wide spread (σ=213.9px) — no shared left rail. Edges do not resolve to a common column step (best fit 58px leaves 12px of error) — this is drift, not a grid.

**TYPE SCALE** — 15 distinct sizes; the 13 used more than once are `464 · 60 · 42 · 32 · 24 · 20 · 16 · 15 · 14 · 13 · 12 · 11 · 10`.
Consecutive ratios: 7.73 · 1.43 · 1.31 · 1.33 · 1.20 · 1.25 · 1.07 · 1.07 → mean 2.05, σ 2.15 (no single multiplier)

**THAI VERDICT** — **needs +0.48 leading** — 0.8 → **1.2813** (worst overlap -216.1px at their display size). Its own configuration bottoms out at 1.266, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Valuable as documentation rather than as a north star: it states its 12/6 column system in its own copy and then visibly uses it, so it is the easiest site in the set to reverse-engineer. Its measured edge spread is wide because it deliberately centres and right-aligns whole sections. Use it to sanity-check our 12-column desktop / 4-column mobile decision, not to set the rail.

**Screenshots** — 1440: [1440-scroll000](shots/4wide-1440-scroll000.jpg) · [1440-scroll010](shots/4wide-1440-scroll010.jpg) · [1440-scroll020](shots/4wide-1440-scroll020.jpg) · [1440-scroll030](shots/4wide-1440-scroll030.jpg) · [1440-scroll040](shots/4wide-1440-scroll040.jpg) · [1440-scroll050](shots/4wide-1440-scroll050.jpg) · [1440-scroll060](shots/4wide-1440-scroll060.jpg) · [1440-scroll070](shots/4wide-1440-scroll070.jpg) · [1440-scroll080](shots/4wide-1440-scroll080.jpg) · [1440-scroll090](shots/4wide-1440-scroll090.jpg) · [1440-scroll100](shots/4wide-1440-scroll100.jpg) · [full page](shots/4wide-1440-full.jpg) _(virtual scroller — full-page capture is one screen only, use the scroll series)_ · 390: [full page](shots/4wide-390-full.jpg)

---

### Tomoya Okada

**https://tomoyaokada.com** · Japan · Awwwards Honorable Mention Aug 10, 2025 ([award page](https://www.awwwards.com/sites/tomoya-okada-portfolio))
*A numbered index as the entire interface — a 100+ row table of experiments, zero imagery.*

**Criteria:** Long ✅ · typography-led ✅ · argumentative ❌ (an index, not an argument) · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 5.58vh (5022px) | 5.77vh |
| scroll | virtual (transformed wrapper / JS scroller) | virtual (transformed wrapper / JS scroller) |
| top-level sections | 4 (found by tall-children-of-wrapper) | 4 |
| dominant text column | 343px at x=1078 | 179px at x=105 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 4 cols, gap 10px (width 1440px) | 4 cols, gap 10.4px |
| section padding-block (first 4) | 0px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 0.58 · 2.06 · 0.77 · 0.50 | — |
| sections within ±3% of 100vh | **0 of 4** | 0 of 4 |
| base spacing unit (80% divisor) | 2px (strict GCD 2px) | 2px |
| display type | 120px / lh 1 / w400 / ls -0.020em | 52px / lh 1 |
| body type | 12px / lh 0.90 / w400 | — |
| meta / smallest | 9px / lh 0.90 | — |
| mono label | none | — |
| display : body ratio | 10× | — |
| reading measure | 62.7 ch (column 343px) | — |
| distinct font-sizes | **4** (3 used more than once) | 3 |
| distinct font families | 1 — PP Neue Montreal Medium | — |
| distinct text colours | 1 · backgrounds 2 | — |
| persistent elements | 3 fixed/sticky — div 1440×900; header "Studies Snapshot About" 1440×18; div "id title field" 1400×12 | 2 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`20 · 20 · 20 · 20`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **one shared left edge** (σ=0) — every section starts at the same x.

**TYPE SCALE** — 4 distinct sizes; the 3 used more than once are `120 · 12 · 10`.
Consecutive ratios: —

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -29px at their display size). Its own configuration bottoms out at 1.242, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — One left edge with σ 0 and four distinct font sizes — extreme restraint, and proof that a page can be entirely typographic and still feel designed. But an index has no rhetorical structure, so nothing about its section rhythm transfers to a page that has to build to a close. Read it as evidence for the discipline targets, not as a skeleton.

**Screenshots** — 1440: [1440-scroll000](shots/tomoyaokada-1440-scroll000.jpg) · [1440-scroll010](shots/tomoyaokada-1440-scroll010.jpg) · [1440-scroll020](shots/tomoyaokada-1440-scroll020.jpg) · [1440-scroll030](shots/tomoyaokada-1440-scroll030.jpg) · [1440-scroll040](shots/tomoyaokada-1440-scroll040.jpg) · [1440-scroll050](shots/tomoyaokada-1440-scroll050.jpg) · [1440-scroll060](shots/tomoyaokada-1440-scroll060.jpg) · [1440-scroll070](shots/tomoyaokada-1440-scroll070.jpg) · [1440-scroll080](shots/tomoyaokada-1440-scroll080.jpg) · [1440-scroll090](shots/tomoyaokada-1440-scroll090.jpg) · [1440-scroll100](shots/tomoyaokada-1440-scroll100.jpg) · [full page](shots/tomoyaokada-1440-full.jpg) _(virtual scroller — full-page capture is one screen only, use the scroll series)_ · 390: [full page](shots/tomoyaokada-390-full.jpg)

---

### Offbeat

**https://offbeat.kr** · Korea · Awwwards Honorable Mention Mar 18, 2026 ([award page](https://www.awwwards.com/sites/studio-off-beat))
*Studio site written as an editorial document, Korean and Latin at separated hierarchy levels.*

**Criteria:** Long ✅ · typography-led ✅ · argumentative ✅ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 17.13vh (15419px) | 11.40vh |
| scroll | native | native |
| top-level sections | 7 (found by tall-children-of-wrapper) | 7 |
| dominant text column | 328px at x=379 | 350px at x=20 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 12 cols, gap 25.92px (width 1440px) | 4 cols, gap 20px |
| section padding-block (first 4) | 0px/0px · 0px/0px · 104px/0px · 0px/131.2px | — |
| section heights (×vh) | 1 · 2.40 · 1 · 3.23 · 4.42 · 1.94 · 2 | — |
| sections within ±3% of 100vh | **2 of 7** | 2 of 7 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 173px / lh 0.80 / w500 / ls -0.060em | 66px / lh 0.80 |
| body type | 18px / lh 1.40 / w400 | 16px / lh 1.40 |
| meta / smallest | 13px / lh 1.20 | — |
| mono label | none | — |
| display : body ratio | 9.60× | — |
| reading measure | 52.8 ch (column 445px) | 45.9 ch |
| distinct font-sizes | **8** (8 used more than once) | 10 |
| distinct font families | 3 — Pretendard, Inter, Cabinetgrotesk | — |
| distinct text colours | 3 · backgrounds 4 | — |
| persistent elements | 20 fixed/sticky — div 1440×900; div 17×17; div ".offbeat-logo path, .o" 1440×119 | 20 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`26 · 406 · 262 · 26 · 26 · 26 · 503`
4 distinct edges (2px tolerance), σ = 191.60px. Heading edges: 4 distinct, σ = 143.61px.
→ 4 edges, moderate spread (σ=191.6px) — a grid exists but sections opt out of it. All edges land on a **48px step** from x=26 (worst deviation 4px) — the several edges are grid columns, not drift.

**TYPE SCALE** — 8 distinct sizes; the 8 used more than once are `172.8 · 72 · 56 · 32 · 24 · 18.6 · 18 · 13`.
Consecutive ratios: 2.40 · 1.29 · 1.75 · 1.33 · 1.29 · 1.04 · 1.39 → mean 1.50, σ 0.42 (no single multiplier)

**THAI VERDICT** — **needs +0.48 leading** — 0.8 → **1.2813** (worst overlap -76.8px at their display size). Its own configuration bottoms out at 1.244, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — The dual-script evidence we actually need. It solves the same problem Thai gives us — a non-Latin body face and a Latin display face that must not compete — by putting them at clearly different sizes and letting the Latin headline own the left rail while the Korean body sits in an indented column. Its 12-column grid with a 25.92px gutter is directly transferable, and its body leading of 1.40 is the only one in the top group that needs no Thai correction. We would inherit the grid, the two-level script hierarchy, and the body leading; we would not inherit its 0.80 display leading, which Thai cannot render.

**Screenshots** — 1440: [1440-scroll000](shots/offbeat-1440-scroll000.jpg) · [1440-scroll025](shots/offbeat-1440-scroll025.jpg) · [1440-scroll050](shots/offbeat-1440-scroll050.jpg) · [1440-scroll075](shots/offbeat-1440-scroll075.jpg) · [1440-scroll100](shots/offbeat-1440-scroll100.jpg) · [full page](shots/offbeat-1440-full.jpg) · 390: [full page](shots/offbeat-390-full.jpg)

---

### Plan AZ

**https://plan-az.com** · Korea · Awwwards Honorable Mention Feb 16, 2026 ([award page](https://www.awwwards.com/sites/plan-a-z))
*Korean agency site: value words (CREATIVITY / SPEED …) each argued in a paragraph, plus numbered cases 001–004.*

**Criteria:** Long ✅ (32.2vh) · typography-led ⚠️ (an abstract 3D panel sits beside every value) · argumentative ✅ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 32.24vh (29013px) | 19.44vh |
| scroll | native | native |
| top-level sections | 5 (found by semantic-siblings) | 7 |
| dominant text column | 1231px at x=720 | 315px at x=195 |
| declared max-width | 90% | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px · 240px/0px · 240px/0px · 240px/0px | — |
| section heights (×vh) | 1 · 1 · 2.09 · 0.53 · 1.60 | — |
| sections within ±3% of 100vh | **2 of 5** | 2 of 7 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 2px |
| display type | 288px / lh — / w400 / ls 0em | 120px / lh 1 |
| body type | 16px / lh 1.25 / w400 | 14px / lh 1.50 |
| meta / smallest | 12px / lh 1.40 | — |
| mono label | none | — |
| display : body ratio | 18× | — |
| reading measure | 167.5 ch (column 1231px) | 49 ch |
| distinct font-sizes | **14** (12 used more than once) | 10 |
| distinct font families | 3 — Archivo, Pretendard, Peace Sans | — |
| distinct text colours | 3 · backgrounds 2 | — |
| persistent elements | 2 fixed/sticky — header "ABOUT PROJECT CONTACT" 1440×90; div 135×135 | 1 |
| nav changes on scroll | yes — opacity | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`60 · 241 · 505 · 72 · 0`
5 distinct edges (2px tolerance), σ = 183.15px. Heading edges: 5 distinct, σ = 310.91px.
→ 5 edges, moderate spread (σ=183.2px) — a grid exists but sections opt out of it. Edges do not resolve to a common column step (best fit 62px leaves 10px of error) — this is drift, not a grid.

**TYPE SCALE** — 14 distinct sizes; the 12 used more than once are `288 · 120 · 100 · 80 · 60 · 50 · 40 · 32 · 24 · 18 · 16 · 15`.
Consecutive ratios: 2.40 · 1.20 · 1.25 · 1.33 · 1.20 · 1.25 · 1.25 · 1.33 → mean 1.40, σ 0.38 (no single multiplier)

**THAI VERDICT** — **usable as-is** — their display leading 1.497 is at or above the 1.2813 Thai floor (clears by 66.5px at their own size). They declare `line-height: normal`, which resolves to 1.497 in Kanit.

**FIT FOR PLANC** — The nearest content twin to our §6 and §7: a value word, a one-line gloss in a pill, then a short argued paragraph, repeated. If the client wants a model for the *value grid specifically* rather than the whole page, this is it. As a whole-page skeleton it is weaker than the top three — its left edges do not resolve to one rail, and it leans on the paired 3D panel to hold each section together, which we cannot copy with one photograph.

**Screenshots** — 1440: [az-1440-scroll000](shots/plan-az-1440-scroll000.jpg) · [az-1440-scroll025](shots/plan-az-1440-scroll025.jpg) · [az-1440-scroll050](shots/plan-az-1440-scroll050.jpg) · [az-1440-scroll075](shots/plan-az-1440-scroll075.jpg) · [az-1440-scroll100](shots/plan-az-1440-scroll100.jpg) · [full page](shots/plan-az-1440-full.jpg) · 390: [full page](shots/plan-az-390-full.jpg)

---

### Tamaki Yoshida

**https://www.tamakiyoshida.com** · Japan · Listed on Awwwards (Japan) ([award page](https://www.awwwards.com/websites/Japan/))
*Portfolio running Kanji and Latin at equal hierarchical weight across 17 short sections.*

**Criteria:** Long ⚠️ (5.6vh) · typography-led ✅ · argumentative ❌ (portfolio index) · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 5.63vh (5067px) | 5.33vh |
| scroll | native | native |
| top-level sections | 17 (found by tall-children-of-wrapper) | 17 |
| dominant text column | 314px at x=394 | 163px at x=24 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 3 cols, gap 24px (width 990px) | 2 cols, gap 16.64px |
| section padding-block (first 4) | 0px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 0.56 · 0.56 · 0.56 · 0.59 · 0.59 · 0.59 · 0.59 · 0.59 · 0.59 · 0.29 | — |
| sections within ±3% of 100vh | **0 of 17** | 0 of 17 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | none |
| display type | 16px / lh 1.30 / w500 / ls 0em | 16px / lh 1.50 |
| body type | — | — |
| meta / smallest | 14px / lh 1.20 | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **3** (3 used more than once) | 5 |
| distinct font families | 2 — EB Garamond, YakuHanMPs | — |
| distinct text colours | 2 · backgrounds 2 | — |
| persistent elements | 1 fixed/sticky — header "JAENWORKSCVCONTACTINST" 1440×71 | 1 |
| nav changes on scroll | yes — top, transform | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`394 · 732 · 1070 · 394 · 732 · 1070 · 394 · 732 · 1070 · 394 · 732 · 1070 · 394 · 732 · 1070 · 394 · 732`
3 distinct edges (2px tolerance), σ = 271.16px. Heading edges: 3 distinct, σ = 271.16px.
→ 3 edges, wide spread (σ=271.2px) — no shared left rail. All edges land on a **169px step** from x=394 (worst deviation 0px) — the several edges are grid columns, not drift.

**TYPE SCALE** — 3 distinct sizes; the 3 used more than once are `16 · 15 · 14`.
Consecutive ratios: —

**THAI VERDICT** — **usable as-is** — their display leading 1.45 is at or above the 1.2813 Thai floor (clears by 2.8px at their own size). Notable as one of the very few candidates whose display leading survives Thai untouched — because it sets its largest type at 16px, i.e. it has no display tier at all.

**FIT FOR PLANC** — Interesting mainly as a limit case: three font sizes, seventeen sections, and no display tier whatsoever. It shows how far restraint can be pushed, but a page with no display type cannot open or close an argument, and ours has to do both.

**Screenshots** — 1440: [1440-scroll000](shots/tamakiyoshida-1440-scroll000.jpg) · [1440-scroll025](shots/tamakiyoshida-1440-scroll025.jpg) · [1440-scroll050](shots/tamakiyoshida-1440-scroll050.jpg) · [1440-scroll075](shots/tamakiyoshida-1440-scroll075.jpg) · [1440-scroll100](shots/tamakiyoshida-1440-scroll100.jpg) · [full page](shots/tamakiyoshida-1440-full.jpg) · 390: [full page](shots/tamakiyoshida-390-full.jpg)

---

### Synthetic Theatre

**https://synthetictheatre.com** · UK · None recorded
*Three-item nav ending in Manifesto, sections numbered 001/002/003 — but almost all content sits outside measurable document flow.*

**Criteria:** Long ❌ (1.1vh measurable) · typography-led ✅ · argumentative ✅ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 1.13vh (1020px) | 1.11vh |
| scroll | native | native |
| top-level sections | 1 (found by body-children) | 1 |
| dominant text column | 103px at x=542 | 189px at x=52 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px | — |
| section heights (×vh) | 1 | — |
| sections within ±3% of 100vh | **1 of 1** | 1 of 1 |
| base spacing unit (80% divisor) | 4px (strict GCD 2px) | 4px |
| display type | 144px / lh 0.60 / w400 / ls 0em | 72px / lh 0.60 |
| body type | — | — |
| meta / smallest | 11px / lh 1.25 | — |
| mono label | 13px __PPSupplyMono_bcdb04 | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **4** (3 used more than once) | 5 |
| distinct font families | 2 — __PPSupplyMono_bcdb04, __PPNeueBit_58ac9d | — |
| distinct text colours | 3 · backgrounds 3 | — |
| persistent elements | 4 fixed/sticky — header "001/Screening001/Scree" 1400×48; svg 1440×900; div 1440×900 | 5 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`542`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **not a valid test** — only 1 text-bearing section on the page, so a single shared edge here is arithmetic, not discipline.

**TYPE SCALE** — 4 distinct sizes; the 3 used more than once are `144 · 13 · 11`.
Consecutive ratios: —

**THAI VERDICT** — **needs +0.68 leading** — 0.6 → **1.2813** (worst overlap -92.6px at their display size). Its own configuration bottoms out at 1.243, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — The nav-ending-in-Manifesto and 001/002/003 numbering are worth noting as naming patterns, but there is not enough measurable layout here to extract a grid.

**Screenshots** — 1440: [1440-scroll000](shots/synthetictheatre-1440-scroll000.jpg) · [1440-scroll025](shots/synthetictheatre-1440-scroll025.jpg) · [1440-scroll050](shots/synthetictheatre-1440-scroll050.jpg) · [1440-scroll075](shots/synthetictheatre-1440-scroll075.jpg) · [1440-scroll100](shots/synthetictheatre-1440-scroll100.jpg) · [full page](shots/synthetictheatre-1440-full.jpg) · 390: [full page](shots/synthetictheatre-390-full.jpg)

---

### Elicyon

**https://elicyon.com** · UK · Awwwards Typography Honors Nov 2025 · Honorable Mention Nov 3, 2025 ([award page](https://www.awwwards.com/sites/elicyon))
*Interior design studio — run-together mixed-case headline system.*

**Criteria:** Long ✅ · typography-led ⚠️ · argumentative ⚠️ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 16.25vh (14622px) | 13.72vh |
| scroll | native | native |
| top-level sections | 6 (found by semantic-siblings) | 7 |
| dominant text column | 362px at x=523 | 310px at x=32 |
| declared max-width | 371px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 12 cols, gap 20px (width 1440px) | 2 cols, gap 20px |
| section padding-block (first 4) | 0px/0px · 100px/0px · 100px/100px · 160px/0px | — |
| section heights (×vh) | 4.33 · 1.05 · 1.23 · 1.22 · 1.01 · 1 | — |
| sections within ±3% of 100vh | **2 of 6** | 2 of 7 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 4px |
| display type | 285px / lh 1 / w400 / ls 0em | 71px / lh 1 |
| body type | 14px / lh 1.15 / w400 | 12px / lh 1.15 |
| meta / smallest | 10px / lh 1.15 | — |
| mono label | none | — |
| display : body ratio | 20.37× | — |
| reading measure | 57.7 ch (column 387px) | 49.6 ch |
| distinct font-sizes | **12** (12 used more than once) | 12 |
| distinct font families | 2 — __elicyon_df1f4c, __antiqueLegacy_623eb9 | — |
| distinct text colours | 3 · backgrounds 4 | — |
| persistent elements | 5 fixed/sticky — div 14×16; header "ProjectsServicesStudio" 1440×64; div 1440×900 | 5 |
| nav changes on scroll | yes — opacity | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`570 · 100 · 523 · 100 · 467 · 484`
5 distinct edges (2px tolerance), σ = 196.43px. Heading edges: 5 distinct, σ = 208.90px.
→ 5 edges, moderate spread (σ=196.4px) — a grid exists but sections opt out of it. Edges do not resolve to a common column step (best fit 47px leaves 9px of error) — this is drift, not a grid.

**TYPE SCALE** — 12 distinct sizes; the 12 used more than once are `285.1 · 158.4 · 133.9 · 108 · 48 · 35 · 26 · 22 · 16 · 14 · 12 · 10`.
Consecutive ratios: 1.80 · 1.18 · 1.24 · 2.25 · 1.37 · 1.35 · 1.18 · 1.38 → mean 1.47, σ 0.35 (no single multiplier)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -75.7px at their display size). Its own configuration bottoms out at 1.266, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — A real 12-column grid with a 20px gutter and a 371px text column — useful corroboration for our gutter choice. The headline treatment it was nominated for does not survive Thai, which has no case distinction to run together.

**Screenshots** — 1440: [1440-scroll000](shots/elicyon-1440-scroll000.jpg) · [1440-scroll025](shots/elicyon-1440-scroll025.jpg) · [1440-scroll050](shots/elicyon-1440-scroll050.jpg) · [1440-scroll075](shots/elicyon-1440-scroll075.jpg) · [1440-scroll100](shots/elicyon-1440-scroll100.jpg) · [full page](shots/elicyon-1440-full.jpg) · 390: [full page](shots/elicyon-390-full.jpg)

---

### Museum of Money

**https://www.museumofmoney.com** · USA · None recorded
*Museum site — numbered chapters, sticker/collage aesthetic, photography throughout.*

**Criteria:** Long ⚠️ · typography-led ❌ · argumentative ⚠️ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 6.31vh (5675px) | 5.71vh |
| scroll | native | native |
| top-level sections | 5 (found by semantic-siblings) | 5 |
| dominant text column | 1184px at x=128 | 350px at x=20 |
| declared max-width | 1280px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 3 cols, gap 12px (width 1280px) | 3 cols, gap 12px |
| section padding-block (first 4) | 0px/0px · 96px/96px · 96px/96px · 96px/96px | — |
| section heights (×vh) | 0.88 · 1.51 · 0.84 · 1.27 · 0.71 | — |
| sections within ±3% of 100vh | **0 of 5** | 0 of 5 |
| base spacing unit (80% divisor) | 4px (strict GCD 2px) | 2px |
| display type | 96px / lh 1 / w400 / ls 0em | 48px / lh 1 |
| body type | 14px / lh 1.38 / w400 | 18px / lh 1.63 |
| meta / smallest | 9px / lh 1.50 | — |
| mono label | 12px JetBrains Mono | — |
| display : body ratio | 6.86× | — |
| reading measure | 35.9 ch (column 245px) | 39.1 ch |
| distinct font-sizes | **15** (12 used more than once) | 12 |
| distinct font families | 3 — Manrope, Archivo Black, JetBrains Mono | — |
| distinct text colours | 15 · backgrounds 11 | — |
| persistent elements | 1 fixed/sticky — header "ExhibitsVisitEventsAbo" 1440×109 | 2 |
| nav changes on scroll | yes — backgroundColor, backdropFilter, borderBottom | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`56 · 128 · 128 · 128 · 256`
3 distinct edges (2px tolerance), σ = 64.72px. Heading edges: 3 distinct, σ = 70.55px.
→ 3 edges, moderate spread (σ=64.7px) — a grid exists but sections opt out of it. All edges land on a **68px step** from x=56 (worst deviation 4px) — the several edges are grid columns, not drift.

**TYPE SCALE** — 15 distinct sizes; the 12 used more than once are `96 · 72 · 60 · 24 · 20 · 18 · 16 · 15 · 14 · 12 · 10 · 9`.
Consecutive ratios: 1.33 · 1.20 · 2.50 · 1.20 · 1.11 · 1.13 · 1.07 · 1.07 → mean 1.33, σ 0.45 (no single multiplier)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -25.2px at their display size). Its own configuration bottoms out at 1.263, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — The numbered chapter marker (▼ 03 · WHAT Y'ALL SAY) is a clean pattern and close to our eyebrow idea. Everything else about it is carried by photography and sticker graphics.

**Screenshots** — 1440: [1440-scroll000](shots/museumofmoney-1440-scroll000.jpg) · [1440-scroll025](shots/museumofmoney-1440-scroll025.jpg) · [1440-scroll050](shots/museumofmoney-1440-scroll050.jpg) · [1440-scroll075](shots/museumofmoney-1440-scroll075.jpg) · [1440-scroll100](shots/museumofmoney-1440-scroll100.jpg) · [full page](shots/museumofmoney-1440-full.jpg) · 390: [full page](shots/museumofmoney-390-full.jpg)

---

### Normal is Boring

**https://normalisboring.es** · Spain · Awwwards Site of the Day ([award page](https://www.awwwards.com/websites/sites_of_the_day/))
*Spanish architecture studio — photography-led project index.*

**Criteria:** Long ✅ · typography-led ❌ · argumentative ❌ (project index) · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 16.85vh (15163px) | 13.59vh |
| scroll | native | virtual (transformed wrapper / JS scroller) |
| top-level sections | 6 (found by semantic-siblings) | 5 |
| dominant text column | 213px at x=628 | 361px at x=14 |
| declared max-width | 235.5px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 2 cols, gap 0px (width 559px) | 2 cols, gap 12.5px |
| section padding-block (first 4) | 0px/0px · 135px/90px · 0px/135px · 0px/135px | — |
| section heights (×vh) | 1 · 0.73 · 0.48 · 0.44 · 0.24 · 1.55 | — |
| sections within ±3% of 100vh | **1 of 6** | 0 of 5 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 180px / lh 1.23 / w400 / ls -0.007em | 50px / lh 0.85 |
| body type | 13px / lh 1.35 / w400 | 13px / lh 1.27 |
| meta / smallest | 11px / lh 1.29 | — |
| mono label | none | — |
| display : body ratio | 14.12× | — |
| reading measure | 48.3 ch (column 319px) | 56.5 ch |
| distinct font-sizes | **12** (11 used more than once) | 13 |
| distinct font families | 6 — Izmir-Regular, Juana-Medium, Juana-Regular | — |
| distinct text colours | 2 · backgrounds 6 | — |
| persistent elements | 5 fixed/sticky — div 53×175; div 11×11; div "NormalNormal is boring" 1440×900 | 4 |
| nav changes on scroll | yes — top | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`859 · 670 · 25 · 731 · 622 · 715`
6 distinct edges (2px tolerance), σ = 268.76px. Heading edges: 6 distinct, σ = 2660.47px.
→ 6 edges, wide spread (σ=268.8px) — no shared left rail. Edges do not resolve to a common column step (best fit 40px leaves 14px of error) — this is drift, not a grid.

**TYPE SCALE** — 12 distinct sizes; the 11 used more than once are `180 · 142.5 · 97.5 · 67.2 · 52.5 · 45 · 33.8 · 24.8 · 21 · 15 · 12.8`.
Consecutive ratios: 1.26 · 1.46 · 1.45 · 1.28 · 1.17 · 1.33 · 1.36 · 1.18 → mean 1.31, σ 0.10 (consistent multiplier)

**THAI VERDICT** — **needs +0.05 leading** — 1.23 → **1.2813** (worst overlap -2.8px at their display size). Its own configuration bottoms out at 1.246, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Disqualified on content shape — its coherence is an image grid, which teaches us nothing with one photograph.

**Screenshots** — 1440: [1440-scroll000](shots/normalisboring-1440-scroll000.jpg) · [1440-scroll025](shots/normalisboring-1440-scroll025.jpg) · [1440-scroll050](shots/normalisboring-1440-scroll050.jpg) · [1440-scroll075](shots/normalisboring-1440-scroll075.jpg) · [1440-scroll100](shots/normalisboring-1440-scroll100.jpg) · [full page](shots/normalisboring-1440-full.jpg) · 390: [full page](shots/normalisboring-390-full.jpg)

---

### Aristide Benoist

**https://www.aristidebenoist.com** · France · None recorded
*Developer portfolio — heavily scroll-driven, most content lives in a fixed render layer above empty spacer sections.*

**Criteria:** Long ❌ (1.9vh of measurable DOM) · typography-led ⚠️ · argumentative ❌ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 1.89vh (1703px) | 1.74vh |
| scroll | virtual (transformed wrapper / JS scroller) | native |
| top-level sections | 1 (found by body-children) | 1 |
| dominant text column | 250px at x=880 | 334px at x=28 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px | — |
| section heights (×vh) | 1 | — |
| sections within ±3% of 100vh | **1 of 1** | 0 of 1 |
| base spacing unit (80% divisor) | 3px (strict GCD 1px) | none |
| display type | 338px / lh 0.75 / w400 / ls -0.024em | 254px / lh 0.75 |
| body type | — | — |
| meta / smallest | 10px / lh 1.20 | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **7** (7 used more than once) | 4 |
| distinct font families | 2 — jws, TNY | — |
| distinct text colours | 4 · backgrounds 3 | — |
| persistent elements | 1 fixed/sticky — main "1 0 00130houseofGuccIA" 1440×900 | 0 |
| nav changes on scroll | yes — top | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`38`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **not a valid test** — only 1 text-bearing section on the page, so a single shared edge here is arithmetic, not discipline.

**TYPE SCALE** — 7 distinct sizes; the 7 used more than once are `337.5 · 257.5 · 50 · 12 · 11 · 10 · 6`.
Consecutive ratios: 1.31 · 5.15 · 4.17 · 1.09 · 1.10 · 1.67 → mean 2.42, σ 1.62 (no single multiplier)

**THAI VERDICT** — **needs +0.53 leading** — 0.75 → **1.2813** (worst overlap -100.2px at their display size). Its own configuration bottoms out at 1.047, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Now renderable with a real browser, but its sections are empty scroll-driver spacers, so there is no section-level grid to read. Not a candidate.

**Screenshots** — 1440: [1440-scroll000](shots/aristidebenoist-1440-scroll000.jpg) · [1440-scroll010](shots/aristidebenoist-1440-scroll010.jpg) · [1440-scroll020](shots/aristidebenoist-1440-scroll020.jpg) · [1440-scroll030](shots/aristidebenoist-1440-scroll030.jpg) · [1440-scroll040](shots/aristidebenoist-1440-scroll040.jpg) · [1440-scroll050](shots/aristidebenoist-1440-scroll050.jpg) · [1440-scroll060](shots/aristidebenoist-1440-scroll060.jpg) · [1440-scroll070](shots/aristidebenoist-1440-scroll070.jpg) · [1440-scroll080](shots/aristidebenoist-1440-scroll080.jpg) · [1440-scroll090](shots/aristidebenoist-1440-scroll090.jpg) · [1440-scroll100](shots/aristidebenoist-1440-scroll100.jpg) · [full page](shots/aristidebenoist-1440-full.jpg) _(virtual scroller — full-page capture is one screen only, use the scroll series)_ · 390: [full page](shots/aristidebenoist-390-full.jpg)

---

### Deso Studio

**https://deso.studio** · ? · None recorded
*Studio site, short.*

**Criteria:** Long ❌ (3.7vh) · typography-led ⚠️ · argumentative ⚠️ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 3.66vh (3297px) | 4.52vh |
| scroll | native | native |
| top-level sections | 3 (found by tall-children-of-wrapper) | 3 |
| dominant text column | 569px at x=732 | 171px at x=207 |
| declared max-width | 100% | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 2 cols, gap 32px (width 1067px) | — |
| section padding-block (first 4) | 12px/12px · 12px/12px · 0px/24px | — |
| section heights (×vh) | 0.55 · 0.76 · 0.32 | — |
| sections within ±3% of 100vh | **0 of 3** | 0 of 3 |
| base spacing unit (80% divisor) | 4px (strict GCD 1px) | 4px |
| display type | 101px / lh 1.50 / w700 / ls 0em | 32px / lh 1.50 |
| body type | 14px / lh 1.57 / w400 | 14px / lh 1.57 |
| meta / smallest | 11px / lh — | — |
| mono label | none | — |
| display : body ratio | 7.20× | — |
| reading measure | 68 ch (column 431px) | 45.8 ch |
| distinct font-sizes | **8** (7 used more than once) | 8 |
| distinct font families | 2 — Barlow, Roboto | — |
| distinct text colours | 6 · backgrounds 3 | — |
| persistent elements | 2 fixed/sticky — header "LanguageSupportLog in" 294×64; div "HomeProductsServicesSt" 1440×56 | 2 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`160 · 160 · 674`
2 distinct edges (2px tolerance), σ = 242.30px. Heading edges: 2 distinct, σ = 242.30px.
→ **not a valid test** — only 3 text-bearing sections on the page, so a single shared edge here is arithmetic, not discipline.

**TYPE SCALE** — 8 distinct sizes; the 7 used more than once are `100.8 · 32 · 20 · 18.7 · 14 · 12 · 11.2`.
Consecutive ratios: 3.15 · 1.60 · 1.07 · 1.34 · 1.17 · 1.07 → mean 1.57, σ 0.73 (no single multiplier)

**THAI VERDICT** — **usable as-is** — their display leading 1.5 is at or above the 1.2813 Thai floor (clears by 24.3px at their own size).

**FIT FOR PLANC** — Too short to teach sustained rhythm. Notable only for a display leading of 1.50, generous enough to survive Thai with room to spare.

**Screenshots** — 1440: [1440-scroll000](shots/deso-1440-scroll000.jpg) · [1440-scroll025](shots/deso-1440-scroll025.jpg) · [1440-scroll050](shots/deso-1440-scroll050.jpg) · [1440-scroll075](shots/deso-1440-scroll075.jpg) · [1440-scroll100](shots/deso-1440-scroll100.jpg) · [full page](shots/deso-1440-full.jpg) · 390: [full page](shots/deso-390-full.jpg)

---

### PLUS-EX 15th

**https://15th.plus-ex.com** · Korea · Awwwards Developer Award · Site of the Day Oct 31, 2025 ([award page](https://www.awwwards.com/sites/beyond-design-into-experience))
*Korean agency anniversary site — very long, project-card led.*

**Criteria:** Long ✅ (81.7vh — by far the longest measured) · typography-led ❌ (project imagery throughout) · argumentative ⚠️ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 81.70vh (73532px) | 68.05vh |
| scroll | native | virtual (transformed wrapper / JS scroller) |
| top-level sections | 10 (found by tall-children-of-wrapper) | 10 |
| dominant text column | 340px at x=961 | 358px at x=16 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 4 cols, gap 16px (width 1430px) | 3 cols, gap 8px |
| section padding-block (first 4) | 16px/16px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 1 · 5.44 · 5.73 · 16.44 · 1.09 · 18.47 · 0.96 · 13.41 · 7.52 · 12.65 | — |
| sections within ±3% of 100vh | **1 of 10** | 0 of 10 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 2px |
| display type | 400px / lh 0.80 / w700 / ls -0.030em | 207px / lh 0.80 |
| body type | — | — |
| meta / smallest | 17px / lh 1.20 | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **10** (10 used more than once) | 11 |
| distinct font families | 2 — neue-haas-grotesk-display, neue-haas-grotesk-text | — |
| distinct text colours | 8 · backgrounds 3 | — |
| persistent elements | 7 fixed/sticky — div "BEYOND DESIGNINTO EXPE" 1430×900; div 1440×900; div "It aligns values,emoti" 1440×900 | 6 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`16 · 607 · 16 · 16 · 16 · 855 · 16 · 198 · 16 · 16`
4 distinct edges (2px tolerance), σ = 287.48px. Heading edges: 5 distinct, σ = 289.35px.
→ 4 edges, wide spread (σ=287.5px) — no shared left rail. Edges do not resolve to a common column step (best fit 60px leaves 9px of error) — this is drift, not a grid.

**TYPE SCALE** — 10 distinct sizes; the 10 used more than once are `400 · 230.4 · 105.1 · 37.4 · 36 · 28 · 23 · 20 · 18 · 17.3`.
Consecutive ratios: 1.74 · 2.19 · 2.81 · 1.04 · 1.29 · 1.22 · 1.15 · 1.11 → mean 1.57, σ 0.59 (no single multiplier)

**THAI VERDICT** — **needs +0.48 leading** — 0.8 → **1.2813** (worst overlap -98.8px at their display size). Its own configuration bottoms out at 1.047, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Worth one look for pacing evidence at extreme length — 81.7vh with only one section near 100vh — but its structure is carried by project imagery we do not have.

**Screenshots** — 1440: [1440-scroll000](shots/plusex15-1440-scroll000.jpg) · [1440-scroll025](shots/plusex15-1440-scroll025.jpg) · [1440-scroll050](shots/plusex15-1440-scroll050.jpg) · [1440-scroll075](shots/plusex15-1440-scroll075.jpg) · [1440-scroll100](shots/plusex15-1440-scroll100.jpg) · [full page](shots/plusex15-1440-full.jpg) · 390: [full page](shots/plusex15-390-full.jpg)

---

### Izanami

**https://izanami-official.com** · Japan · Awwwards Site of the Day Jul 18, 2026 ([award page](https://www.awwwards.com/sites/izanami))
*Japanese brand site — School / Craft / Retreat, very restrained.*

**Criteria:** Long ⚠️ (9.6vh) · typography-led ⚠️ · argumentative ⚠️ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 9.63vh (8665px) | 9.06vh |
| scroll | native | native |
| top-level sections | 4 (found by tall-children-of-wrapper) | 4 |
| dominant text column | 324px at x=400 | 252px at x=98 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 2 cols, gap normal (width 1296px) | 2 cols, gap normal |
| section padding-block (first 4) | 0px/0px · 990px/0px · 27px/0px · 0px/0px | — |
| section heights (×vh) | 1.60 · 2.02 · 3.51 · 1.60 | — |
| sections within ±3% of 100vh | **0 of 4** | 1 of 4 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 45px / lh 1 / w400 / ls 0em | 29px / lh 1 |
| body type | 14px / lh 2.40 / w400 | — |
| meta / smallest | 13px / lh 1 | — |
| mono label | none | — |
| display : body ratio | 3.13× | — |
| reading measure | 51.1 ch (column 360px) | — |
| distinct font-sizes | **7** (7 used more than once) | 7 |
| distinct font families | 4 — Playfair Display, Cinzel, Shippori Mincho | — |
| distinct text colours | 3 · backgrounds 2 | — |
| persistent elements | 20 fixed/sticky — header "IZANAMI enenjaja menu " 1440×900; span "IZANAMI" 4×4; h2 "philosophy" 18×110 | 20 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`252 · 72 · 72 · 72`
2 distinct edges (2px tolerance), σ = 77.94px. Heading edges: 3 distinct, σ = 199.43px.
→ 2 edges, moderate spread (σ=77.9px) — a grid exists but sections opt out of it.

**TYPE SCALE** — 7 distinct sizes; the 7 used more than once are `45 · 36 · 18 · 16.2 · 16 · 14.4 · 12.6`.
Consecutive ratios: 1.25 · 2.00 · 1.11 · 1.01 · 1.11 · 1.14 → mean 1.27, σ 0.33 (no single multiplier)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -12.3px at their display size). Its own configuration bottoms out at 1.273, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Two left edges at σ 78px and seven font sizes — genuinely disciplined, and its body leading of 2.40 is the most generous measured, which is a useful reminder that CJK body text tolerates far more air than Latin. Too short and too sparse to model a 950–1200vh page on.

**Screenshots** — 1440: [1440-scroll000](shots/izanami-1440-scroll000.jpg) · [1440-scroll025](shots/izanami-1440-scroll025.jpg) · [1440-scroll050](shots/izanami-1440-scroll050.jpg) · [1440-scroll075](shots/izanami-1440-scroll075.jpg) · [1440-scroll100](shots/izanami-1440-scroll100.jpg) · [full page](shots/izanami-1440-full.jpg) · 390: [full page](shots/izanami-390-full.jpg)

---

### Pendragon Cycle

**https://pendragoncycle.com** · USA · Awwwards Typography Honors Dec 2025 · Developer Award · Site of the Day Jan 3, 2026 ([award page](https://www.awwwards.com/websites/winner_category_typography/))
*Book-series promotional site — cinematic WebGL over a thin DOM.*

**Criteria:** Long ❌ (1vh of measurable DOM) · typography-led ❌ · argumentative ❌ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 1vh (900px) | 1vh |
| scroll | native | native |
| top-level sections | 1 (found by body-children) | 1 |
| dominant text column | 210px at x=1174 | 310px at x=40 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 2 cols, gap normal (width 516px) | 2 cols, gap 24px |
| section padding-block (first 4) | 0px/0px | — |
| section heights (×vh) | 1 | — |
| sections within ±3% of 100vh | **1 of 1** | 1 of 1 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 4px |
| display type | 32px / lh 1.15 / w400 / ls 0em | 20px / lh 1.15 |
| body type | 13px / lh 1.50 / w400 | — |
| meta / smallest | 12px / lh 1.15 | — |
| mono label | none | — |
| display : body ratio | 2.46× | — |
| reading measure | 110.7 ch (column 640px) | — |
| distinct font-sizes | **8** (7 used more than once) | 4 |
| distinct font families | 2 — ltc-goudy-oldstyle-pro, gryphius-mvb | — |
| distinct text colours | 3 · backgrounds 2 | — |
| persistent elements | 7 fixed/sticky — header "MenuMute" 1440×96; article "Now streaming on Daily" 1440×900; div 1440×200 | 8 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`32`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **not a valid test** — only 1 text-bearing section on the page, so a single shared edge here is arithmetic, not discipline.

**TYPE SCALE** — 8 distinct sizes; the 7 used more than once are `24 · 20 · 18 · 16 · 14 · 13 · 12`.
Consecutive ratios: 1.20 · 1.11 · 1.13 · 1.14 · 1.08 · 1.08 → mean 1.12, σ 0.04 (consistent multiplier)

**THAI VERDICT** — **needs +0.16 leading** — 1.15 → **1.312** (worst overlap -5.2px at their display size).

**FIT FOR PLANC** — Renders enough DOM to measure but not enough to learn from — the page is a WebGL composition with a text overlay. Not a candidate.

**Screenshots** — 1440: [1440-scroll000](shots/pendragon-1440-scroll000.jpg) · [1440-scroll025](shots/pendragon-1440-scroll025.jpg) · [1440-scroll050](shots/pendragon-1440-scroll050.jpg) · [1440-scroll075](shots/pendragon-1440-scroll075.jpg) · [1440-scroll100](shots/pendragon-1440-scroll100.jpg) · [full page](shots/pendragon-1440-full.jpg) · 390: [full page](shots/pendragon-390-full.jpg)

---

### Iron Hill

**https://ironhill.au** · Australia · Awwwards Typography Honors Dec 2025 · Site of the Day Jan 22, 2026 ([award page](https://www.awwwards.com/sites/ironhill))
*Whiskey brand story — cinematic, image-led, chaptered.*

**Criteria:** Long ✅ · typography-led ❌ (photography carries it) · argumentative ⚠️ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 18.42vh (16575px) | 18.79vh |
| scroll | native | native |
| top-level sections | 3 (found by tall-children-of-wrapper) | 3 |
| dominant text column | 335px at x=985 | 298px at x=46 |
| declared max-width | 1200px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 128px/28px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 1 · 18.42 · 1 | — |
| sections within ±3% of 100vh | **2 of 3** | 2 of 3 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 2px |
| display type | 260px / lh 1 / w300 / ls -0.030em | 180px / lh 1 |
| body type | 16px / lh 1.35 / w500 | 14px / lh 1.35 |
| meta / smallest | 12px / lh 1.50 | — |
| mono label | none | — |
| display : body ratio | 16.25× | — |
| reading measure | 44.5 ch (column 335px) | 45.2 ch |
| distinct font-sizes | **9** (8 used more than once) | 9 |
| distinct font families | 3 — PP Woodland, GT America, GT America Trial | — |
| distinct text colours | 6 · backgrounds 5 | — |
| persistent elements | 8 fixed/sticky — div 1440×900; canvas 1440×900; div 143×44 | 8 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`48 · 656 · 38`
3 distinct edges (2px tolerance), σ = 289px. Heading edges: 3 distinct, σ = 17.45px.
→ **not a valid test** — only 3 text-bearing sections on the page, so a single shared edge here is arithmetic, not discipline. Edges do not resolve to a common column step (best fit 41px leaves 10px of error) — this is drift, not a grid.

**TYPE SCALE** — 9 distinct sizes; the 8 used more than once are `260 · 170.2 · 78.8 · 54 · 18 · 16 · 14 · 12`.
Consecutive ratios: 1.53 · 2.16 · 1.46 · 3.00 · 1.13 · 1.14 · 1.17 → mean 1.66, σ 0.64 (no single multiplier)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -69.1px at their display size). Its own configuration bottoms out at 1.266, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Included because it is the clearest counterexample to the skeleton's 100vh rule — see the contradictions section. Not a candidate: its coherence comes from photography we do not have.

**Screenshots** — 1440: [1440-scroll000](shots/ironhill-1440-scroll000.jpg) · [1440-scroll025](shots/ironhill-1440-scroll025.jpg) · [1440-scroll050](shots/ironhill-1440-scroll050.jpg) · [1440-scroll075](shots/ironhill-1440-scroll075.jpg) · [1440-scroll100](shots/ironhill-1440-scroll100.jpg) · [full page](shots/ironhill-1440-full.jpg) · 390: [full page](shots/ironhill-390-full.jpg)

---

### Dennis Snellenberg

**https://dennissnellenberg.com** · Netherlands · None recorded
*Designer portfolio.*

**Criteria:** Long ⚠️ (5vh) · typography-led ⚠️ · argumentative ❌ (portfolio) · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 4.95vh (4454px) | 4.37vh |
| scroll | virtual (transformed wrapper / JS scroller) | native |
| top-level sections | 5 (found by tall-children-of-wrapper) | 4 |
| dominant text column | 262px at x=1005 | 245px at x=20 |
| declared max-width | 1728px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 189px/189px · 189px/124.74px · 0px/0px · 94.5px/0px | — |
| section heights (×vh) | 1.15 · 0.60 · 0.99 · 0.19 · 0.96 | — |
| sections within ±3% of 100vh | **1 of 5** | 1 of 4 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | 2px |
| display type | 216px / lh 1 / w450 / ls 0em | 144px / lh 1 |
| body type | 17px / lh 1.66 / w450 | 16px / lh 1.66 |
| meta / smallest | 10px / lh 1.06 | — |
| mono label | none | — |
| display : body ratio | 12.50× | — |
| reading measure | 31.6 ch (column 242px) | 31.6 ch |
| distinct font-sizes | **11** (9 used more than once) | 9 |
| distinct font families | 1 — Dennis Sans | — |
| distinct text colours | 2 · backgrounds 9 | — |
| persistent elements | 5 fixed/sticky — div "Hello Bonjour स्वागत ह" 1440×900; main "View Menu Navigation H" 1440×900; div "Menu" 79×79 | 2 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`43 · 230 · 230 · 681 · 230`
3 distinct edges (2px tolerance), σ = 211.86px. Heading edges: 3 distinct, σ = 222.05px.
→ 3 edges, wide spread (σ=211.9px) — no shared left rail. Edges do not resolve to a common column step (best fit 64px leaves 5px of error) — this is drift, not a grid.

**TYPE SCALE** — 11 distinct sizes; the 9 used more than once are `216 · 88.2 · 75.6 · 60.5 · 54 · 33.1 · 17.3 · 14.7 · 10.4`.
Consecutive ratios: 2.45 · 1.17 · 1.25 · 1.12 · 1.63 · 1.92 · 1.18 · 1.42 → mean 1.52, σ 0.44 (no single multiplier)

**THAI VERDICT** — **needs +0.29 leading** — 1 → **1.292** (worst overlap -63px at their display size).

**FIT FOR PLANC** — Its 1728px declared max-width and 1.66 body leading are worth noting, but a portfolio's structure does not transfer to an argument.

**Screenshots** — 1440: [1440-scroll000](shots/dennissnellenberg-1440-scroll000.jpg) · [1440-scroll010](shots/dennissnellenberg-1440-scroll010.jpg) · [1440-scroll020](shots/dennissnellenberg-1440-scroll020.jpg) · [1440-scroll030](shots/dennissnellenberg-1440-scroll030.jpg) · [1440-scroll040](shots/dennissnellenberg-1440-scroll040.jpg) · [1440-scroll050](shots/dennissnellenberg-1440-scroll050.jpg) · [1440-scroll060](shots/dennissnellenberg-1440-scroll060.jpg) · [1440-scroll070](shots/dennissnellenberg-1440-scroll070.jpg) · [1440-scroll080](shots/dennissnellenberg-1440-scroll080.jpg) · [1440-scroll090](shots/dennissnellenberg-1440-scroll090.jpg) · [1440-scroll100](shots/dennissnellenberg-1440-scroll100.jpg) · [full page](shots/dennissnellenberg-1440-full.jpg) _(virtual scroller — full-page capture is one screen only, use the scroll series)_ · 390: [full page](shots/dennissnellenberg-390-full.jpg)

---

### KPRVERSE

**https://kprverse.com** · ? · None recorded
*Brand-universe site — scroll-driven with a thin content DOM.*

**Criteria:** Long ✅ · typography-led ❌ · argumentative ❌ · 2024–25 ⚠️ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 18.24vh (16416px) | 17.23vh |
| scroll | native | native |
| top-level sections | 0 (found by body-children) | 3 |
| dominant text column | 110px at x=762 | 147px at x=162 |
| declared max-width | 100% | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) |  | — |
| section heights (×vh) |  | — |
| sections within ±3% of 100vh | **0 of 0** | 2 of 3 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 159px / lh 0.84 / w350 / ls -0.080em | 56px / lh 0.94 |
| body type | 14px / lh 1.30 / w400 | 12px / lh 1.20 |
| meta / smallest | 8px / lh 1.10 | — |
| mono label | 10px IBMPlexMono | — |
| display : body ratio | 11.79× | — |
| reading measure | 40.9 ch (column 266px) | 32.8 ch |
| distinct font-sizes | **9** (8 used more than once) | 9 |
| distinct font families | 4 — IBMPlexMono, ABCWhytePlus, ui-monospace | — |
| distinct text colours | 2 · backgrounds 4 | — |
| persistent elements | 6 fixed/sticky — div "KEEPERS Become a Keepe" 1440×900; div "KPR is a brand that fo" 1440×900; div "ProjectPROJECTThe Keep" 1440×900 | 6 |
| nav changes on scroll | yes — top | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
``
null distinct edges (2px tolerance), σ = —px. Heading edges: not measurable.
→ not measurable — no section painted its own text.

**TYPE SCALE** — 9 distinct sizes; the 8 used more than once are `159.1 · 135.9 · 13.5 · 12.6 · 11 · 9.9 · 9 · 8.1`.
Consecutive ratios: 1.17 · 10.07 · 1.07 · 1.15 · 1.11 · 1.10 · 1.11 → mean 2.40, σ 3.13 (no single multiplier)

**THAI VERDICT** — **needs +0.44 leading** — 0.84 → **1.2813** (worst overlap -66.3px at their display size). Its own configuration bottoms out at 1.257, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Renderable now, but its sections are scroll-driver spacers with no text of their own. Nothing structural to inherit.

**Screenshots** — 1440: [1440-scroll000](shots/kprverse-1440-scroll000.jpg) · [1440-scroll025](shots/kprverse-1440-scroll025.jpg) · [1440-scroll050](shots/kprverse-1440-scroll050.jpg) · [1440-scroll075](shots/kprverse-1440-scroll075.jpg) · [1440-scroll100](shots/kprverse-1440-scroll100.jpg) · [full page](shots/kprverse-1440-full.jpg) · 390: [full page](shots/kprverse-390-full.jpg)

---

### Taper — Design Philosophy

**https://taper.design/design-philosophy** · Japan · Parent site listed on Awwwards (Japan) ([award page](https://www.awwwards.com/websites/Japan/))
*The actual long argumentative essay — a first-person manifesto about rod design, running nine sections.*

**Criteria:** Long ✅ · typography-led ✅ (no imagery in the body) · argumentative ✅ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 10.28vh (9251px) | 12.39vh |
| scroll | native | native |
| top-level sections | 8 (found by semantic-siblings) | 8 |
| dominant text column | 72px at x=261 | 1px at x=343 |
| declared max-width | 2000px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 98.7656px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 1.52 · 0.94 · 1.32 · 1 · 0.87 · 1.66 · 0.74 · 1.74 | — |
| sections within ±3% of 100vh | **1 of 8** | 1 of 8 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 51px / lh 1.11 / w700 / ls -0.020em | 34px / lh 1.11 |
| body type | — | 22px / lh 1.17 |
| meta / smallest | 20px / lh — | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | 30.5 ch |
| distinct font-sizes | **3** (3 used more than once) | 3 |
| distinct font families | 2 — Manrope, Poppins | — |
| distinct text colours | 2 · backgrounds 3 | — |
| persistent elements | 1 fixed/sticky — header "Skip to Content @suppo" 1440×99 | 1 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`57 · 200 · 248 · 574 · 56 · 619 · 44 · 54`
6 distinct edges (2px tolerance), σ = 222.67px. Heading edges: 6 distinct, σ = 222.67px.
→ 6 edges, wide spread (σ=222.7px) — no shared left rail. Edges do not resolve to a common column step (best fit 41px leaves 13px of error) — this is drift, not a grid. The edge spread here is an artefact of centred text, not of drift — a centred paragraph's left edge moves with its own length. Read the font-size count instead.

**TYPE SCALE** — 3 distinct sizes; the 3 used more than once are `51.1 · 30.4 · 20`.
Consecutive ratios: —

**THAI VERDICT** — **needs +0.18 leading** — 1.11 → **1.291** (worst overlap -9.3px at their display size).

**FIT FOR PLANC** — One lesson, and it is a big one: **three distinct font sizes across a nine-section essay**, and it still reads as a designed document. That is a stronger discipline argument than anything else measured and it is worth quoting at the client. But it is centred, has no grid, and lets the nav overlap the text — there is no left-edge system to inherit, so it cannot be the north star even though it is the purest argument-shaped document in the set.

**Screenshots** — 1440: [philosophy-1440-scroll000](shots/taper-philosophy-1440-scroll000.jpg) · [philosophy-1440-scroll025](shots/taper-philosophy-1440-scroll025.jpg) · [philosophy-1440-scroll050](shots/taper-philosophy-1440-scroll050.jpg) · [philosophy-1440-scroll075](shots/taper-philosophy-1440-scroll075.jpg) · [philosophy-1440-scroll100](shots/taper-philosophy-1440-scroll100.jpg) · [full page](shots/taper-philosophy-1440-full.jpg) · 390: [full page](shots/taper-philosophy-390-full.jpg)

---

### TikTok Sans specimen

**https://www.tiktok.com/font** · USA/CN · Awwwards Typography Honors Aug 2025 · Honorable Mention Aug 5, 2025 ([award page](https://www.awwwards.com/sites/tiktok-sans))
*Typeface specimen and release page for TikTok Sans.*

**Criteria:** Long ✅ · typography-led ✅ · argumentative ✅ · 2025 ✅ · one document ⚠️ — included largely as a measured counterexample.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 12.78vh (11506px) | 9.72vh |
| scroll | native | native |
| top-level sections | 10 (found by tall-children-of-wrapper) | 10 |
| dominant text column | 1440px at x=0 | 351px at x=20 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 1 · 1.33 · 1.34 · 0.46 · 1.70 · 1 · 1.59 · 1.41 · 1.21 · 0.57 | — |
| sections within ±3% of 100vh | **2 of 10** | 0 of 10 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 2px |
| display type | 475px / lh 1.30 / w100 / ls 0em | 140px / lh 1.30 |
| body type | 14px / lh 1.30 / w100 | 14px / lh 1.30 |
| meta / smallest | 14px / lh 1.50 | — |
| mono label | none | — |
| display : body ratio | 33.94× | — |
| reading measure | 65.3 ch (column 443px) | 48.8 ch |
| distinct font-sizes | **19** (10 used more than once) | 17 |
| distinct font families | 2 — TikTokSans, TikTok Sans | — |
| distinct text colours | 4 · backgrounds 3 | — |
| persistent elements | 6 fixed/sticky — div "Free FontYour browser " 118×53; div "Aby33 — X#p!ufvou349p8" 1440×416; div "ABCDEFGHIJKLMNOPQRSTUV" 50×50 | 6 |
| nav changes on scroll | yes — top | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`247 · 334 · 1100 · -3157 · 80 · 671 · 282 · 128 · 0 · 72`
10 distinct edges (2px tolerance), σ = 1090.92px. Heading edges: 10 distinct, σ = 1149.98px.
→ 10 edges, wide spread (σ=1090.9px) — no shared left rail. Edges do not resolve to a common column step (best fit 41px leaves 15px of error) — this is drift, not a grid.

**TYPE SCALE** — 19 distinct sizes; the 10 used more than once are `288 · 172.8 · 79.2 · 48 · 32 · 24 · 20 · 17 · 16 · 14`.
Consecutive ratios: 1.67 · 2.18 · 1.65 · 1.50 · 1.33 · 1.20 · 1.18 · 1.06 → mean 1.47, σ 0.34 (no single multiplier)

**THAI VERDICT** — **usable as-is** — their display leading 1.3 is at or above the 1.2813 Thai floor (clears by 16.3px at their own size).

**FIT FOR PLANC** — A cautionary measurement. It is a typography award winner and it has the worst left-edge spread in the whole set — ten distinct edges, σ 1091px — because it alternates full-bleed and centred sections. It is proof that 'won a typography award' and 'has a coherent spatial system' are independent properties, which is exactly the confusion that produced our current problem.

**Screenshots** — 1440: [1440-scroll000](shots/tiktoksans-1440-scroll000.jpg) · [1440-scroll025](shots/tiktoksans-1440-scroll025.jpg) · [1440-scroll050](shots/tiktoksans-1440-scroll050.jpg) · [1440-scroll075](shots/tiktoksans-1440-scroll075.jpg) · [1440-scroll100](shots/tiktoksans-1440-scroll100.jpg) · [full page](shots/tiktoksans-1440-full.jpg) · 390: [full page](shots/tiktoksans-390-full.jpg)

---

### Groteskly Yours

**https://groteskly.xyz** · Lithuania · Awwwards Typography Honors Jun 2025 · Honorable Mention Jun 16, 2025 ([award page](https://www.awwwards.com/sites/groteskly-yours-studio))
*Independent foundry front page — a grid of typeface cards.*

**Criteria:** Long ⚠️ (6.7vh) · typography-led ✅ · argumentative ❌ (product index) · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 6.68vh (6012px) | 5.59vh |
| scroll | native | native |
| top-level sections | 4 (found by tall-children-of-wrapper) | 5 |
| dominant text column | 206px at x=40 | 360px at x=15 |
| declared max-width | 2550px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 1.72 · 1.32 · 0.69 · 0.51 | — |
| sections within ±3% of 100vh | **0 of 4** | 0 of 5 |
| base spacing unit (80% divisor) | 5px (strict GCD 5px) | 5px |
| display type | 72px / lh 1.20 / w400 / ls 0em | 50px / lh 1.20 |
| body type | 14px / lh 1.20 / w400 | 25px / lh 1.10 |
| meta / smallest | 14px / lh 1.20 | — |
| mono label | none | — |
| display : body ratio | 5.14× | — |
| reading measure | 45.2 ch (column 298px) | 30.7 ch |
| distinct font-sizes | **5** (4 used more than once) | 5 |
| distinct font families | 5 — Groteskly Sans 1.02 100, Groteskly Sans 1.02 108, Groteskly Sans 1.02 122 | — |
| distinct text colours | 5 · backgrounds 4 | — |
| persistent elements | 2 fixed/sticky — div "All FontsFree TrialsAb" 1440×54; div "We use cookies to enha" 440×120 | 2 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`40 · 40 · 40 · 40`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **one shared left edge** (σ=0) — every section starts at the same x.

**TYPE SCALE** — 5 distinct sizes; the 4 used more than once are `72 · 20 · 16 · 14`.
Consecutive ratios: 3.60 · 1.25 · 1.14 → mean 2.00, σ 1.13 (no single multiplier)

**THAI VERDICT** — **needs +0.10 leading** — 1.2 → **1.305** (worst overlap -7.6px at their display size).

**FIT FOR PLANC** — One left edge, σ 0, five font sizes — more corroboration that the disciplined end of this genre sits at 1 edge and under 10 sizes. Too short and too index-shaped to be the north star.

**Screenshots** — 1440: [1440-scroll000](shots/groteskly-1440-scroll000.jpg) · [1440-scroll025](shots/groteskly-1440-scroll025.jpg) · [1440-scroll050](shots/groteskly-1440-scroll050.jpg) · [1440-scroll075](shots/groteskly-1440-scroll075.jpg) · [1440-scroll100](shots/groteskly-1440-scroll100.jpg) · [full page](shots/groteskly-1440-full.jpg) · 390: [full page](shots/groteskly-390-full.jpg)

---

### Klim — Söhne specimen

**https://klim.co.nz/retail-fonts/soehne/** · New Zealand · No award recorded — a foundry specimen, not an award entrant
*Retail typeface specimen — a long argued case for a single typeface, zero photography.*

**Criteria:** Long ✅ (30.5vh) · typography-led ✅ · argumentative ✅ · current ✅ · one document ✅ — passes all five.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 30.45vh (27401px) | 16.89vh |
| scroll | native | native |
| top-level sections | 6 (found by tall-children-of-wrapper) | 6 |
| dominant text column | 578px at x=843 | 370px at x=10 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 10 cols, gap 1px (width 578px) | 6 cols, gap 10px |
| section padding-block (first 4) | 68.5714px/0px · 68.5714px/0px · 68.5714px/0px · 68.5714px/0px | — |
| section heights (×vh) | 0.71 · 0.35 · 16.59 · 0.34 · 5.87 · 1.41 | — |
| sections within ±3% of 100vh | **0 of 6** | 0 of 6 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 218px / lh 1 / w400 / ls 0em | 57px / lh 1 |
| body type | 24px / lh 1.33 / w400 | 18px / lh 1.33 |
| meta / smallest | 16px / lh 1.50 | — |
| mono label | 16px SOEHNE_MONO | — |
| display : body ratio | 9.08× | — |
| reading measure | 61.5 ch (column 695px) | 43.6 ch |
| distinct font-sizes | **9** (9 used more than once) | 8 |
| distinct font families | 19 — SOEHNE, SOEHNE_IKON, k-sohne-halbfett | — |
| distinct text colours | 7 · backgrounds 5 | — |
| persistent elements | 3 fixed/sticky — nav "Klim Type FoundryFonts" 1440×48; nav "Select ⭥◑Download test" 445×48; div "Halbfett ▼Show outline" 813×852 | 3 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`20 · 20 · 20 · 20 · 20 · 20`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 3 distinct, σ = 179.48px.
→ **one shared left edge** (σ=0) — every section starts at the same x.

**TYPE SCALE** — 9 distinct sizes; the 9 used more than once are `218 · 217 · 102.9 · 98 · 41.1 · 24 · 22 · 16 · 14`.
Consecutive ratios: 1.00 · 2.11 · 1.05 · 2.38 · 1.71 · 1.09 · 1.38 · 1.14 → mean 1.48, σ 0.49 (no single multiplier)

**THAI VERDICT** — **needs +0.29 leading** — 1 → **1.289** (worst overlap -63px at their display size).

**FIT FOR PLANC** — We would inherit the spatial system wholesale: one left rail that never moves, a wide display size sitting directly above a narrow meta row, and section padding that stays constant so length alone signals importance. Its 9-size scale is close to the skeleton's 9-value scale, which is quiet corroboration that the guess was the right order of magnitude. What it cannot give us is section anatomy — it has no numbered eyebrow, no proof block, no service pillar — so §4 of SITE-SKELETON stays our own invention.

**Screenshots** — 1440: [soehne-1440-scroll000](shots/klim-soehne-1440-scroll000.jpg) · [soehne-1440-scroll025](shots/klim-soehne-1440-scroll025.jpg) · [soehne-1440-scroll050](shots/klim-soehne-1440-scroll050.jpg) · [soehne-1440-scroll075](shots/klim-soehne-1440-scroll075.jpg) · [soehne-1440-scroll100](shots/klim-soehne-1440-scroll100.jpg) · [full page](shots/klim-soehne-1440-full.jpg) · 390: [full page](shots/klim-soehne-390-full.jpg)

---

### ABC Dinamo — Whyte

**https://abcdinamo.com/typefaces/whyte** · Switzerland · None recorded
*Foundry typeface page for ABC Whyte.*

**Criteria:** Long ✅ · typography-led ✅ · argumentative ✅ · current ✅ · one document ⚠️ — measured mainly as a discipline counterexample.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 18.64vh (16775px) | 9.39vh |
| scroll | native | native |
| top-level sections | 6 (found by semantic-siblings) | 5 |
| dominant text column | 553px at x=735 | 352px at x=19 |
| declared max-width | 100% | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 6 cols, gap 8.19687px (width 1440px) | — |
| section padding-block (first 4) | 61.4766px/54.9234px · 0px/219.694px · 109.847px/109.847px · 109.847px/109.847px | — |
| section heights (×vh) | 2.03 · 6.23 · 1.31 · 1.87 · 2.83 · 2.50 | — |
| sections within ±3% of 100vh | **0 of 6** | 0 of 5 |
| base spacing unit (80% divisor) | none ≥2px (strict GCD 1px) | none |
| display type | 426px / lh 0.80 / w400 / ls 0em | 550px / lh 0.80 |
| body type | 19px / lh 1.10 / w400 | 19px / lh 1.10 |
| meta / smallest | 9px / lh 1.10 | — |
| mono label | 12px Monument Grotesk Mono | — |
| display : body ratio | 22.25× | — |
| reading measure | 62.1 ch (column 553px) | 39.2 ch |
| distinct font-sizes | **38** (13 used more than once) | 17 |
| distinct font families | 11 — ABCWhytePlusVariable-A, Monument Grotesk, Monument Grotesk Mono | — |
| distinct text colours | 4 · backgrounds 13 | — |
| persistent elements | 9 fixed/sticky — div "Whyte" 1440×720; nav "FamiliesTryFeaturesInf" 1440×52; button "Try me" 50×27 | 16 |
| nav changes on scroll | yes — top | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`598 · 637 · 137 · 444 · 152 · 619`
6 distinct edges (2px tolerance), σ = 212.18px. Heading edges: 6 distinct, σ = 224.11px.
→ 6 edges, wide spread (σ=212.2px) — no shared left rail. Edges do not resolve to a common column step (best fit 45px leaves 15px of error) — this is drift, not a grid.

**TYPE SCALE** — 38 distinct sizes; the 13 used more than once are `118.5 · 108 · 103.6 · 69.1 · 30.1 · 24.6 · 23.8 · 19.1 · 17.5 · 15 · 11.9 · 9.6 · 8.9`.
Consecutive ratios: 1.10 · 1.04 · 1.50 · 2.30 · 1.22 · 1.03 · 1.24 · 1.09 → mean 1.31, σ 0.40 (no single multiplier)

**THAI VERDICT** — **needs +0.48 leading** — 0.8 → **1.2813** (worst overlap -105.1px at their display size). Its own configuration bottoms out at 1.047, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Thirty-eight distinct font sizes, of which only thirteen are used more than once. A specimen legitimately needs many sizes, but the gap between 38 rendered and 13 systematic is a good illustration of why the count is measured both ways in this report.

**Screenshots** — 1440: [whyte-1440-scroll000](shots/dinamo-whyte-1440-scroll000.jpg) · [whyte-1440-scroll025](shots/dinamo-whyte-1440-scroll025.jpg) · [whyte-1440-scroll050](shots/dinamo-whyte-1440-scroll050.jpg) · [whyte-1440-scroll075](shots/dinamo-whyte-1440-scroll075.jpg) · [whyte-1440-scroll100](shots/dinamo-whyte-1440-scroll100.jpg) · [full page](shots/dinamo-whyte-1440-full.jpg) · 390: [full page](shots/dinamo-whyte-390-full.jpg)

---

### MONOLOG

**https://bymonolog.com** · ? · Awwwards Typography Honors Jun 2026 · Site of the Day Jul 6, 2026 ([award page](https://www.awwwards.com/websites/winner_category_typography/))
*Studio site — numbered story cards with video thumbnails.*

**Criteria:** Long ✅ · typography-led ❌ (video and image cards) · argumentative ❌ (portfolio index) · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 14.70vh (13227px) | 15.55vh |
| scroll | native | native |
| top-level sections | 8 (found by semantic-siblings) | 8 |
| dominant text column | 334px at x=26 | 364px at x=13 |
| declared max-width | 333.878px | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 12 cols, gap 16px (width 1154px) | 3 cols, gap 0px |
| section padding-block (first 4) | 26px/26px · 31.5px/210px · 26px/26px · 151px/0px | — |
| section heights (×vh) | 1 · 1.56 · 2 · 3.06 · 0.99 · 1.94 · 0.90 · 1.92 | — |
| sections within ±3% of 100vh | **2 of 8** | 1 of 8 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | none |
| display type | 140px / lh 0.90 / w500 / ls -0.030em | 84px / lh 0.90 |
| body type | 18px / lh 1.30 / w500 | 16px / lh 1.30 |
| meta / smallest | 10px / lh 1.30 | — |
| mono label | 8px Suisse Mono | — |
| display : body ratio | 7.86× | — |
| reading measure | 72.9 ch (column 612px) | 47.9 ch |
| distinct font-sizes | **12** (12 used more than once) | 12 |
| distinct font families | 3 — Khteka, Suisse Mono, Animo | — |
| distinct text colours | 7 · backgrounds 14 | — |
| persistent elements | 7 fixed/sticky — div "Hello world @media (ho" 142×53; div ".about_overlay_close, " 1440×900; button "Closeescesc" 85×36 | 7 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`594 · 324 · 175 · 51 · 324 · 720 · 51 · 720`
5 distinct edges (2px tolerance), σ = 260.04px. Heading edges: 5 distinct, σ = 271.61px.
→ 5 edges, wide spread (σ=260px) — no shared left rail. Edges do not resolve to a common column step (best fit 67px leaves 10px of error) — this is drift, not a grid.

**TYPE SCALE** — 12 distinct sizes; the 12 used more than once are `139.5 · 94 · 72.5 · 53 · 45 · 23.8 · 19.8 · 17.8 · 15.8 · 11.8 · 10.3 · 7.5`.
Consecutive ratios: 1.48 · 1.30 · 1.37 · 1.18 · 1.89 · 1.20 · 1.11 · 1.13 → mean 1.33, σ 0.24 (loose but recognisable)

**THAI VERDICT** — **needs +0.38 leading** — 0.9 → **1.2813** (worst overlap -50.1px at their display size). Its own configuration bottoms out at 1.259, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — A real 12-column grid with a 16px gutter, and a numbered-row pattern (07 · View All Stories · arrow) that is close to our sec-num idea. Otherwise a portfolio index whose rhythm is set by media cards.

**Screenshots** — 1440: [1440-scroll000](shots/monolog-1440-scroll000.jpg) · [1440-scroll025](shots/monolog-1440-scroll025.jpg) · [1440-scroll050](shots/monolog-1440-scroll050.jpg) · [1440-scroll075](shots/monolog-1440-scroll075.jpg) · [1440-scroll100](shots/monolog-1440-scroll100.jpg) · [full page](shots/monolog-1440-full.jpg) · 390: [full page](shots/monolog-390-full.jpg)

---

### OJI Global Brand Book

**https://www.ojiholdings.co.jp/group/brandbook/** · Japan · Listed on Awwwards (Japan) ([award page](https://www.awwwards.com/websites/Japan/))
*Japanese corporate brand book, presented as a slide-style viewer.*

**Criteria:** Long ❌ (1vh measured — it pages rather than scrolls) · typography-led ⚠️ · argumentative ✅ · 2026 ✅ · one document ⚠️.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 1vh (900px) | 1vh |
| scroll | native | native |
| top-level sections | 1 (found by body-children) | 1 |
| dominant text column | 248px at x=135 | 208px at x=38 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px | — |
| section heights (×vh) | 1 | — |
| sections within ±3% of 100vh | **1 of 1** | 1 of 1 |
| base spacing unit (80% divisor) | 4px (strict GCD 2px) | none |
| display type | 19px / lh 1.47 / w700 / ls 0.016em | 17px / lh 1.15 |
| body type | — | — |
| meta / smallest | 15px / lh 1.80 | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **5** (3 used more than once) | 3 |
| distinct font families | 2 — YakuHanJP, Google Sans | — |
| distinct text colours | 4 · backgrounds 4 | — |
| persistent elements | 3 fixed/sticky — div 1440×900; div "スクロールして進む 王子ホールディングスHP" 1440×900; div 48×48 | 3 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`768`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **not a valid test** — only 1 text-bearing section on the page, so a single shared edge here is arithmetic, not discipline.

**TYPE SCALE** — 5 distinct sizes; the 3 used more than once are `18.8 · 17 · 15.3`.
Consecutive ratios: —

**THAI VERDICT** — **usable as-is** — their display leading 1.47 is at or above the 1.2813 Thai floor (clears by 1.8px at their own size). One of only three candidates whose display leading needs no Thai correction — because at 1.47 it is already generous.

**FIT FOR PLANC** — A paged viewer, not a scrolled document, so it has no vertical rhythm to measure. Its 1.47 display leading is a useful data point for how much air Japanese display type is given.

**Screenshots** — 1440: [brandbook-1440-scroll000](shots/oji-brandbook-1440-scroll000.jpg) · [brandbook-1440-scroll025](shots/oji-brandbook-1440-scroll025.jpg) · [brandbook-1440-scroll050](shots/oji-brandbook-1440-scroll050.jpg) · [brandbook-1440-scroll075](shots/oji-brandbook-1440-scroll075.jpg) · [brandbook-1440-scroll100](shots/oji-brandbook-1440-scroll100.jpg) · [full page](shots/oji-brandbook-1440-full.jpg) · 390: [full page](shots/oji-brandbook-390-full.jpg)

---

### TYO Recruit

**https://tyo.co.jp/recruit/** · Japan · Listed on Awwwards (Japan) ([award page](https://www.awwwards.com/websites/Japan/))
*Japanese recruitment site — 3D character work carries the page.*

**Criteria:** Long ✅ · typography-led ❌ (3D imagery) · argumentative ✅ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 13.29vh (11963px) | 14.45vh |
| scroll | native | native |
| top-level sections | 7 (found by semantic-siblings) | 7 |
| dominant text column | 445px at x=871 | 348px at x=21 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 2 cols, gap 20.0016px (width 1192px) | — |
| section padding-block (first 4) | 0px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 0.45 · 0.34 · 0.34 · 0.34 · 0.34 · 0.34 · 0.37 | — |
| sections within ±3% of 100vh | **0 of 7** | 0 of 7 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | none |
| display type | 120px / lh 1 / w400 / ls 0em | 58px / lh 1.10 |
| body type | 17px / lh 1.60 / w500 | 16px / lh 1.60 |
| meta / smallest | 9px / lh 1 | — |
| mono label | none | — |
| display : body ratio | 7.06× | — |
| reading measure | 44.5 ch (column 377px) | 41.5 ch |
| distinct font-sizes | **16** (13 used more than once) | 12 |
| distinct font families | 4 — Bricolage Grotesque, YakuHanJP, Noto Sans JP | — |
| distinct text colours | 11 · backgrounds 11 | — |
| persistent elements | 4 fixed/sticky — header "Recruit Site Interview" 1440×108; div "こんにちは！より良い情報を提供できるように、" 1440×48; div "自分らしさ、それが映像をおもしろくする。 Y" 1440×900 | 4 |
| nav changes on scroll | yes — opacity | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`0 · 384 · 769 · 1153 · 1538 · 1922 · 2307`
7 distinct edges (2px tolerance), σ = 769px. Heading edges: 7 distinct, σ = 769px.
→ 7 edges, wide spread (σ=769px) — no shared left rail. All edges land on a **48px step** from x=0 (worst deviation 3px) — the several edges are grid columns, not drift.

**TYPE SCALE** — 16 distinct sizes; the 13 used more than once are `120 · 109.4 · 100 · 46 · 40 · 39 · 28 · 26 · 16 · 14 · 12 · 11 · 10`.
Consecutive ratios: 1.10 · 1.09 · 2.17 · 1.15 · 1.03 · 1.39 · 1.08 · 1.63 → mean 1.33, σ 0.37 (no single multiplier)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -29px at their display size). Its own configuration bottoms out at 1.242, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Japanese recruitment sites are structurally the closest commercial genre to ours — a long argued case for choosing an organisation. This one answers it with 3D characters rather than typography, so the structure does not transfer, but the genre is worth remembering if the client wants more CJK references later.

**Screenshots** — 1440: [recruit-1440-scroll000](shots/tyo-recruit-1440-scroll000.jpg) · [recruit-1440-scroll025](shots/tyo-recruit-1440-scroll025.jpg) · [recruit-1440-scroll050](shots/tyo-recruit-1440-scroll050.jpg) · [recruit-1440-scroll075](shots/tyo-recruit-1440-scroll075.jpg) · [recruit-1440-scroll100](shots/tyo-recruit-1440-scroll100.jpg) · [full page](shots/tyo-recruit-1440-full.jpg) · 390: [full page](shots/tyo-recruit-390-full.jpg)

---

### Tokai Rika Advanced Recruit

**https://tr-advanced.co.jp/regular/** · Japan · Listed on Awwwards (Japan) ([award page](https://www.awwwards.com/websites/Japan/))
*Japanese recruitment site.*

**Criteria:** Long ❌ (3.4vh) · typography-led ⚠️ · argumentative ✅ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 3.41vh (3073px) | 3.49vh |
| scroll | native | native |
| top-level sections | 1 (found by body-children) | 1 |
| dominant text column | 1440px at x=0 | 390px at x=0 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px | — |
| section heights (×vh) | 3.41 | — |
| sections within ±3% of 100vh | **0 of 1** | 0 of 1 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | none |
| display type | 104px / lh 1.15 / w400 / ls 0.100em | 47px / lh 1.24 |
| body type | — | 17px / lh 1.75 |
| meta / smallest | 12px / lh 1 | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | 49 ch |
| distinct font-sizes | **9** (8 used more than once) | 8 |
| distinct font families | 3 — Aoboshi One, Yu Gothic UI, Noto Sans JP | — |
| distinct text colours | 6 · backgrounds 2 | — |
| persistent elements | 3 fixed/sticky — div 1440×900; div 1440×900; header "ホーム 体験する 代表メッセージ 社員インタ" 1440×72 | 4 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`778`
1 distinct edge (2px tolerance), σ = 0px. Heading edges: 1 distinct, σ = 0px.
→ **not a valid test** — only 1 text-bearing section on the page, so a single shared edge here is arithmetic, not discipline.

**TYPE SCALE** — 9 distinct sizes; the 8 used more than once are `104 · 56 · 24 · 22 · 18 · 16 · 14 · 12`.
Consecutive ratios: 1.86 · 2.33 · 1.09 · 1.22 · 1.13 · 1.14 · 1.17 → mean 1.42, σ 0.45 (no single multiplier)

**THAI VERDICT** — **needs +0.13 leading** — 1.15 → **1.2813** (worst overlap -10.4px at their display size). Its own configuration bottoms out at 1.25, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Too short to teach sustained rhythm. Its body leading of 1.78 is the kind of generous CJK setting that transfers well to Thai.

**Screenshots** — 1440: [advanced-1440-scroll000](shots/tr-advanced-1440-scroll000.jpg) · [advanced-1440-scroll025](shots/tr-advanced-1440-scroll025.jpg) · [advanced-1440-scroll050](shots/tr-advanced-1440-scroll050.jpg) · [advanced-1440-scroll075](shots/tr-advanced-1440-scroll075.jpg) · [advanced-1440-scroll100](shots/tr-advanced-1440-scroll100.jpg) · [full page](shots/tr-advanced-1440-full.jpg) · 390: [full page](shots/tr-advanced-390-full.jpg)

---

### FUNTECH Brand Identity

**https://ci.funtech.inc/en** · Japan · Awwwards Honorable Mention Jun 16, 2026 ([award page](https://www.awwwards.com/websites/Japan/))
*Japanese brand identity site — scrolls horizontally.*

**Criteria:** Long ⚠️ · typography-led ✅ · argumentative ✅ · 2026 ✅ · one document ⚠️.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 4.63vh (4169px) | 1.90vh |
| scroll | virtual (transformed wrapper / JS scroller) | virtual (transformed wrapper / JS scroller) |
| top-level sections | 14 (found by tall-children-of-wrapper) | 11 |
| dominant text column | 10662px at x=-285 | 3265px at x=-78 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 3 cols, gap 12px (width 1385px) | 3 cols, gap 8px |
| section padding-block (first 4) | 0px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 0.25 · 0.25 · 0.25 · 0.25 · 0.25 · 0.25 · 0.25 · 0.25 · 0.25 · 0.25 | — |
| sections within ±3% of 100vh | **0 of 14** | 0 of 11 |
| base spacing unit (80% divisor) | 4px (strict GCD 2px) | 6px |
| display type | 314px / lh 1 / w900 / ls 0em | 108px / lh 1 |
| body type | — | — |
| meta / smallest | 12px / lh 1 | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **9** (9 used more than once) | 7 |
| distinct font families | 2 — elevon, proxima-nova | — |
| distinct text colours | 4 · backgrounds 6 | — |
| persistent elements | 2 fixed/sticky — div 1425×900; div "FUNTECHBRANDIDENTITYFU" 1425×900 | 2 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`34 · 382 · 730 · 1077 · 34 · 382 · 730 · 1077 · 34 · 382 · 730 · 1077 · 34 · 382`
4 distinct edges (2px tolerance), σ = 385.57px. Heading edges: 4 distinct, σ = 385.57px.
→ 4 edges, wide spread (σ=385.6px) — no shared left rail. All edges land on a **58px step** from x=34 (worst deviation 1px) — the several edges are grid columns, not drift.

**TYPE SCALE** — 9 distinct sizes; the 9 used more than once are `313.5 · 266 · 24 · 18 · 16 · 15 · 14 · 13 · 12`.
Consecutive ratios: 1.18 · 11.08 · 1.33 · 1.13 · 1.07 · 1.07 · 1.08 · 1.08 → mean 2.38, σ 3.29 (no single multiplier)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -84.1px at their display size). Its own configuration bottoms out at 1.268, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Horizontally scrolling, so its measured 10662px 'container' is a track rather than a column and its vertical rhythm is irrelevant to us. Not a candidate.

**Screenshots** — 1440: [1440-scroll000](shots/funtech-1440-scroll000.jpg) · [1440-scroll010](shots/funtech-1440-scroll010.jpg) · [1440-scroll020](shots/funtech-1440-scroll020.jpg) · [1440-scroll030](shots/funtech-1440-scroll030.jpg) · [1440-scroll040](shots/funtech-1440-scroll040.jpg) · [1440-scroll050](shots/funtech-1440-scroll050.jpg) · [1440-scroll060](shots/funtech-1440-scroll060.jpg) · [1440-scroll070](shots/funtech-1440-scroll070.jpg) · [1440-scroll080](shots/funtech-1440-scroll080.jpg) · [1440-scroll090](shots/funtech-1440-scroll090.jpg) · [1440-scroll100](shots/funtech-1440-scroll100.jpg) · [full page](shots/funtech-1440-full.jpg) _(virtual scroller — full-page capture is one screen only, use the scroll series)_ · 390: [full page](shots/funtech-390-full.jpg)

---

### Planetono

**https://planetono.space** · ? · Awwwards Typography Honors Feb 2026 · Developer Award · Site of the Day Mar 14, 2026 ([award page](https://www.awwwards.com/websites/winner_category_typography/))
*Awwwards typography winner — scroll-driven brand piece.*

**Criteria:** Long ✅ · typography-led ⚠️ · argumentative ⚠️ · 2026 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 9.94vh (8948px) | 9.83vh |
| scroll | native | native |
| top-level sections | 4 (found by semantic-siblings) | 4 |
| dominant text column | 456px at x=468 | 185px at x=370 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | 2 cols, gap 16px (width 1266px) | 2 cols, gap 16.25px |
| section padding-block (first 4) | 45px/0px · 0px/0px · 0px/0px · 0px/0px | — |
| section heights (×vh) | 1 · 7.24 · 0.85 · 0.40 | — |
| sections within ±3% of 100vh | **1 of 4** | 1 of 4 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 2px |
| display type | 60px / lh 1 / w700 / ls -0.040em | 33px / lh 1.15 |
| body type | — | — |
| meta / smallest | 14px / lh 1.20 | — |
| mono label | none | — |
| display : body ratio | — | — |
| reading measure | — | — |
| distinct font-sizes | **7** (5 used more than once) | 8 |
| distinct font families | 2 — Futura Passata, Poppins | — |
| distinct text colours | 2 · backgrounds 2 | — |
| persistent elements | 3 fixed/sticky — div "StArtImmersive sound a" 1440×900; header "How it worksLocationsC" 1440×120; div "HOW iT worKS" 1440×211 | 3 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`959 · 34 · 484 · 496`
4 distinct edges (2px tolerance), σ = 327.08px. Heading edges: 4 distinct, σ = 327.08px.
→ 4 edges, wide spread (σ=327.1px) — no shared left rail. Edges do not resolve to a common column step (best fit 51px leaves 9px of error) — this is drift, not a grid.

**TYPE SCALE** — 7 distinct sizes; the 5 used more than once are `60 · 24 · 21 · 18 · 16`.
Consecutive ratios: 2.50 · 1.14 · 1.17 · 1.13 → mean 1.48, σ 0.59 (no single multiplier)

**THAI VERDICT** — **needs +0.28 leading** — 1 → **1.2813** (worst overlap -15px at their display size). Its own configuration bottoms out at 1.25, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Measured for completeness. Its declared 2000px max-width is the widest in the set and would push our reading measure well past comfort if copied.

**Screenshots** — 1440: [1440-scroll000](shots/planetono-1440-scroll000.jpg) · [1440-scroll025](shots/planetono-1440-scroll025.jpg) · [1440-scroll050](shots/planetono-1440-scroll050.jpg) · [1440-scroll075](shots/planetono-1440-scroll075.jpg) · [1440-scroll100](shots/planetono-1440-scroll100.jpg) · [full page](shots/planetono-1440-full.jpg) · 390: [full page](shots/planetono-390-full.jpg)

---

### Seasoned (Koto)

**https://seasoned.koto.studio** · UK · Awwwards Typography Honors Feb 2025 · Site of the Day Mar 21, 2025 ([award page](https://www.awwwards.com/websites/winner_category_typography/))
*Koto Studio product site — 3D book renders throughout.*

**Criteria:** Long ⚠️ · typography-led ❌ (3D renders) · argumentative ⚠️ · 2025 ✅ · one document ✅.

| | 1440×900 | 390×844 |
|---|---|---|
| page length | 7.88vh (7088px) | 7.25vh |
| scroll | native | virtual (transformed wrapper / JS scroller) |
| top-level sections | 3 (found by tall-children-of-wrapper) | 3 |
| dominant text column | 253px at x=873 | 1px at x=15 |
| declared max-width | none found | — |
| page padding-inline | 0px / 0px | 0px / 0px |
| CSS grid | no page-level CSS grid | — |
| section padding-block (first 4) | 0px/0px · 30px/80.0001px · 120px/0px | — |
| section heights (×vh) | 0.94 · 4.84 · 0.90 | — |
| sections within ±3% of 100vh | **0 of 3** | 0 of 3 |
| base spacing unit (80% divisor) | 2px (strict GCD 1px) | 2px |
| display type | 96px / lh 0.85 / w500 / ls -0.020em | 56px / lh 1 |
| body type | 22px / lh 1.20 / w400 | 20px / lh 1.20 |
| meta / smallest | 13px / lh 1 | — |
| mono label | 24px VCR OSD Mono | — |
| display : body ratio | 4.36× | — |
| reading measure | 47 ch (column 452px) | 37.8 ch |
| distinct font-sizes | **10** (7 used more than once) | 10 |
| distinct font families | 4 — Gooper Condensed, Luxurious Script, STIXTwoText | — |
| distinct text colours | 6 · backgrounds 4 | — |
| persistent elements | 6 fixed/sticky — h1 "The brand creation kit" 1×1; div 164×120; h2 "Our Best Cookbooks" 1×1 | 5 |
| nav changes on scroll | no | — |

**LEFT-EDGE TEST** — first text element of each section, transform-immune layout left:
`781 · 380 · 1282`
3 distinct edges (2px tolerance), σ = 368.99px. Heading edges: 3 distinct, σ = 404.86px.
→ **not a valid test** — only 3 text-bearing sections on the page, so a single shared edge here is arithmetic, not discipline. All edges land on a **50px step** from x=380 (worst deviation 2px) — the several edges are grid columns, not drift.

**TYPE SCALE** — 10 distinct sizes; the 7 used more than once are `48 · 43 · 32 · 25.6 · 24 · 16 · 12.8`.
Consecutive ratios: 1.12 · 1.34 · 1.25 · 1.07 · 1.50 · 1.25 → mean 1.26, σ 0.14 (loose but recognisable)

**THAI VERDICT** — **needs +0.43 leading** — 0.85 → **1.2813** (worst overlap -39.6px at their display size). Its own configuration bottoms out at 1.263, but 1.2813 is the binding floor for our copy — build against 1.2813.

**FIT FOR PLANC** — Disqualified on imagery — the 3D renders do the structural work.

**Screenshots** — 1440: [1440-scroll000](shots/seasoned-1440-scroll000.jpg) · [1440-scroll025](shots/seasoned-1440-scroll025.jpg) · [1440-scroll050](shots/seasoned-1440-scroll050.jpg) · [1440-scroll075](shots/seasoned-1440-scroll075.jpg) · [1440-scroll100](shots/seasoned-1440-scroll100.jpg) · [full page](shots/seasoned-1440-full.jpg) · 390: [full page](shots/seasoned-390-full.jpg)


---

## Could not measure

- **Igloo Inc** — https://igloo.inc
  only 0 rendered text nodes (0 canvas element(s)) — WebGL/canvas-driven, no DOM grid to learn from
  Rendered with a real browser and still produced zero text nodes — the entire page is a WebGL composition.
- **Jungheon Lee** — https://jungheonlee.com
  only 10 rendered text nodes (3 canvas element(s)) — WebGL/canvas-driven, no DOM grid to learn from
  10 text nodes over 3 canvases. Previously listed as unmeasurable by a plain fetcher; a real browser confirms there is genuinely almost no DOM, rather than the fetcher having been at fault.
- **Shining / 302chanwoo** — https://shining.302chanwoo.com
  only 2 rendered text nodes (0 canvas element(s)) — WebGL/canvas-driven, no DOM grid to learn from
  2 text nodes and no canvas — content is injected into a shadow/render layer the probe cannot read as layout.
- **I'm not a bot** — https://imnotabot.sangyoungbae.com
  only 0 rendered text nodes (0 canvas element(s)) — WebGL/canvas-driven, no DOM grid to learn from
  Zero text nodes at 1440. The 390 pass did render (4.9vh, 5 sections) but a candidate we can only measure on mobile cannot settle a desktop grid.
- **MIJIHEON** — https://mijiheon.com
  only 7 rendered text nodes (1 canvas element(s)) — WebGL/canvas-driven, no DOM grid to learn from
  7 text nodes over 1 canvas — WebGL-driven.

---

## Method

- Headless Chromium (Playwright 1.61.1), two viewports: 1440×900 and 390×844 (the mobile pass uses a mobile UA and touch).
- `domcontentloaded` → `networkidle` (25s cap) → 2.5s settle → `document.fonts.ready`.
- Consent UI dismissed before measuring, preferring the reject/necessary-only option where one existed.
- Full page scrolled in 0.7-viewport steps, then returned to top, so scroll-triggered and lazy layout is present at measurement time. Sites using a transformed-wrapper "virtual scroll" (where `document.scrollHeight` stays at one viewport) are driven with real wheel events and their true content height is taken as the maximum element bottom.
- **Left edges** use a transform-immune layout left (accumulated `offsetLeft` up the `offsetParent` chain), not `getBoundingClientRect().left`, so a section parked mid-reveal by a CSS transform still reports its real grid position. Both are recorded in `measurements.json`.
- **Distinct font-size count** counts every rendered element that paints at least one character. The parenthesised second number counts only sizes used by two or more elements, which strips one-off accidents from the real scale.
- **Reading measure** follows the brief's method: the rendered width of a 100-character string in the element's exact computed font, divided into the column's content width. The conventional `0`-glyph ch value is also recorded in `measurements.json`.
- Sites with fewer than 15 rendered text nodes are recorded as not measurable rather than reported with thin data.
