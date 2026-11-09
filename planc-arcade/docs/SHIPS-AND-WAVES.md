# SHIPS-AND-WAVES — ship classes & wave content for planc-arcade

**Status: PROPOSAL MENU. Nothing here is decided.** Every option below is for Mat to
pick, mix, or reject. Research/analysis language is English; **all collected Thai
sentences are verbatim and must stay verbatim** — they are raw copy material.

**Written:** 20 Aug 2026 · **Scope:** TASK 1 ship classes · TASK 2 pain-sentence bank →
wave charts · TASK 3 decision table.
**Not in scope:** λ / spawn rates / enemy counts / any balance number. Those come from
bot-measured μ in the main chat. **Nothing in this file specifies a quantity.**

## Evidence tags used in this file

| Tag | Meaning |
|---|---|
| `[ยืนยัน]` | I opened the source page myself or a sub-agent opened it and I re-verified the exact string |
| `[BMC]` | From the PlanCBIz corpus (already vetted in `PLAN-C-ERRATA.md`) |
| `[งานวิจัย]` | Peer-reviewed, quoted via the PlanCBIz corpus |
| `[vendor]` | Published by a company with a stake in the number |
| `[guess]` | My inference. Not sourced. Treat as a design opinion, not a fact |
| `[reworded]` | Shortened to fit a game screen — **original verbatim always printed next to it** |

## Rules I worked under

- **No money/rate figures from the web.** Every price, rate or income figure in this file
  comes from `PlanCBIz/` field-work only. Where a web source published a rate table I
  noted its existence and did **not** carry the number across.
- **No fabricated sentences.** Every Thai sentence in §2 was read on a page that was
  actually fetched. Sentences that failed verification are listed in §2.6 (rejected), not
  silently dropped.
- **Not a duplicate of CONTENT-MAP.** `PlanCBIz/CONTENT-MAP.md` already maps obstacles →
  services for the *scrollytelling* site. I used it as input (§2.4 cross-check) and did
  not re-derive it. Where this research **contradicts or extends** CONTENT-MAP, I say so
  explicitly — see §2.5.

---
---

# 0. The one design constraint that outranks everything here

From `CLAUDE.md`: the near-loss is **provable**, not felt — `μ < λ < 2μ`, one ship
mathematically drowns, two clear it. That means:

> **A ship class must never change whether the player survives.**
> Classes change *flavour, texture and which sentences you read on the way down.*
> Every class loses wave 5. Every class is saved by Plan C.

If a class buff were strong enough to let one ship clear the final wave, the whole
narrative collapses. So all mechanical gimmicks proposed in §1 are **lateral** (trade one
capability for another), never **additive**. Flagging this up front because it kills a
whole family of otherwise-fun ideas.

Second constraint from `CLAUDE.md`: **ขาว-ดำล้วน ห้ามใส่สี.** All enemy symbols below are
described as 1-bit silhouettes readable at ~16–24px on a 390px screen. Nothing relies on
colour, and nothing relies on Thai text small enough to need per-glyph breaking.

---
---

# 1. TASK 1 — SHIP CLASS MENU

## 1.0 What the Thai market actually publishes (the evidence floor)

Before proposing any taxonomy, here is what the Thai creator market **actually
publishes** about creator types. I did not invent a category that has no source.

### 1.0.a The creator-population split — the strongest single dataset

**iCreator Report 2025** (RAiNMaker × Wisesight × Tellscore × คณะนิเทศศาสตร์ จุฬาฯ;
61,716 creator accounts + 468 survey respondents) — share of Thai creators by category.
Corroborated across four independent outlets that each report the same split: `[ยืนยัน]`

| Category (published in English by the report) | Share of Thai creators |
|---|---|
| **Lifestyle** | **19%** |
| **Beauty & Fashion** | **17%** |
| Travel | 8–10% |
| Entertainment | 8% |
| Gaming | 7% |
| Food, Drink & Cafe | 6–7% |
| News & Reporter | 4–5% |
| Parenting & Kids | 3–4% |
| Art & Literature | 2% |
| Pets | 2% |
| Education / Comedy | ~2% each |

Sources (all four fetched): bangkokbiznews.com/lifestyle/1200422 (25 Sep 2025) ·
marketthink.co/65404 (26 Sep 2025) · springnews.co.th/digital-tech/technology/859923
(25 Sep 2025) · workpointtoday.com/creator-trends-768068-2 (8 Jul 2025).

**The top six categories = 62% of all Thai creators** (marketeeronline.co/archives/389798,
26 Nov 2024, citing the same report). `[ยืนยัน]`

⚠️ **Caveat carried forward:** the report publishes these labels **in English only**. Thai
names for this exact taxonomy could not be verified. The Thai names I use below come from
the separate sources in §1.0.d.

### 1.0.b Wisesight Influencer Directory — the tool that actually screens people

This is the load-bearing one for Plan C's whole thesis (`BMC-plan-c-v2.md` §3):

> "Influencer ใน Influencer Directory ถูกแบ่งออกเป็น 38 หมวดหมู่ (Cluster) ตามประเภทเนื้อหาคอนเทนต์"
> — wisesight.com/news/5_technic_choose_influencer_directory/ `[ยืนยัน]`

**The 38 cluster names are NOT published anywhere public.** Verified across six Wisesight
pages; only Food, Pet, Travel, Beauty and Fashion, Tech, Lifestyle appear as scattered
examples. Likely visible only inside the logged-in product.

An **earlier 13-cluster Wisesight taxonomy IS fully published** (Thailand Influencer
Performance Report, Q2 2019 data, positioningmag.com/1246722) `[ยืนยัน]`:

> Beauty & Fashion · Financial · Food & Dining · Gaming · Health & Fitness · IT & Digital ·
> Kids · Lifestyle · Online Program · Pets · Promotion · Social News · Travel

That the 13 are the parent set of the 38 is **`[guess]`** — plausible, unproven.

### 1.0.c Tellscore's award categories — the best public proxy for its taxonomy

**Thailand Influencer Awards 2025 by Tellscore — 32 influencer categories** `[ยืนยัน]`
(marketingoops.com/campaigns/award/thailand-influencer-awards-2025-by-tellscore/,
3 Oct 2025). Two are directly relevant to Plan C:

- **Best Silver Content Creator** — institutional recognition of the older-creator segment
- **Best Wonders & Wisdom** — the มู / spiritual vertical has its own award

Tellscore's own registration category list is **not** public (th.tellscore.com/th/influencer
returns 403).

### 1.0.d Thai-language creator-type vocabulary — what is actually citable

I only list `สาย…` terms I could find on a real Thai page. Terms Mat might expect that I
could **not** verify as exact strings are in the "could not verify" line below.

| Verbatim Thai term | Source (fetched) | Date |
|---|---|---|
| Influencer **สายความงาม** · **สายอาหาร** · **สาย IT** · **สายอสังหาฯ** · **สายเกม** | kollective.one/collection-of-all-influencer-lists/ | 26 Jun 2025 |
| **สาย Lifestyle** · **สาย Fashion** · **สาย Beauty** · **สายท่องเที่ยว** · **สายอาหาร** · **สายเทคโนโลยี เกมเมอร์** · **สายอสังหา** | nocnoc.com/blog/what-is-influencer/ | 18 Aug 2025 |
| **สายความงาม** · **สาย lifestyle** | wisesight.com/th/articles/ai-influencer-marketing | 7 Aug 2026 |
| Influencer **สายมู** · **สายดวง** · **สายไพ่** · **สายฮวงจุ้ย** · **สายเยียวยาใจ** | auroealis.com/technology/internet-social/1743/ | 18 Apr 2026 |
| **KOLs สายแม่และเด็ก** · **อินฟลูเอนเซอร์สายแม่และเด็ก** | th.theasianparent.com/recommended-mommy-kol | 25 Apr 2022 |
| **ไลฟ์ขายของ** | prachachat.net/business/news-2040873 | 22 Jul 2026 |
| ท่องเที่ยว · ไอที-เทคโนโลยี · อสังหาริมทรัพย์ · รถ-มอเตอร์ไซค์ · อาหาร · บันเทิง · การตลาด-ธุรกิจ · กีฬาและสุขภาพ · ภาพยนตร์ · ครอบครัว-แม่และเด็ก · ความงาม | dataxet.co/media-landscape/2020-th/influencer | 2020, upd 2023 |

**Could NOT verify as exact strings:** สายกิน · สายเที่ยว · สายรีวิว · สายตลก · สายมูเตลู ·
สายสัตว์เลี้ยง · สายการเงิน · สายสุขภาพ · แม่ค้าออนไลน์. The *verticals* are all
well-evidenced; those particular spellings are not. **Do not present them as sourced
vocabulary** — if Mat likes a spelling, that's a brand choice, not a citation.

### 1.0.e Demand ≠ supply — the asymmetry that should drive class design

**Brand budget share by category, Thailand** (AnyMind IM Report via marketingoops.com/
reports/industry-insight/anymind-influencer-marketing-thailand-trend/, 6 Feb 2026)
`[vendor]` — *this is budget share by category, not a creator rate; no rate figure is
carried across:*

- อาหารและเครื่องดื่ม (Food & Drink) — **39.4%**
- แฟชั่นและความงาม (Fashion & Beauty) — **15.0%**
- Business 9.6% · Lifestyle & Home 7.4%
- AnyMind explicitly labels Food & Drink and Beauty a **"Red Ocean"**, and names
  **Home, Gadget, การเงิน (Finance)** as less-saturated.

Put next to §1.0.a: **Lifestyle is 19% of creators but ~7% of budget. Food is ~7% of
creators but 39% of budget.** Beauty is 17% of creators for 15% of budget. `[guess — the
juxtaposition is mine; each number is separately sourced]`

**Category-level CPM spread** (already vetted in `PLAN-C-LANDSCAPE-RESEARCH.md` line 392,
Retention Rabbit, 10,000+ clips) `[vendor, via BMC]`: Making Money Online $22.00 ·
Digital Marketing $12.52 · Personal Finance $12.00 · **Lifestyle $3.47 · Fashion $3.13 ·
Gaming $1.40 · Comedy $1.00** — a 13× spread, with lifestyle at the bottom. The BMC's own
warning applies: this is **category** data, not **clarity** data. A perfectly clear comedy
creator still gets $1.00 CPM.

### 1.0.f The two segments Plan C has already flagged

- **The 45–50 career-change cohort.** bangkokbiznews.com/business/business/1202018
  (7 Oct 2025), data from Tellscore, CEO สุวิตา จรัญวงศ์ — headline:
  **"วัย 45-50 ปี ผันตัวสู่อินฟลูเอนเซอร์ อาชีพอิสระ ทางเลือกหลังตกงาน"** `[ยืนยัน]`.
  Categories this cohort enters: **เล่าข่าว, pets, longevity/wellness, agriculture.**
  BMC has an open proposal: รับเซสชันฟรี ไม่ขายต่อ. **If that policy holds, this cohort
  arguably should not be a selectable ship class** — see §3 open question 4.
- **The uncategorisable lifestyle creator.** `PLAN-C-หลังคำตอบ-และก้าวต่อไป.md` `[BMC]`:
  *"อินฟูลไลฟ์สไตล์ที่ไม่อยู่ในหมวดชัดเจน"* … *"อินฟูลไลฟ์สไตล์ส่วนใหญ่ตกรอบตั้งแต่ตัวกรอง
  เพราะไม่อยู่ในหมวดไหนชัด"*. **⚠️ No Thai public source states this as a market problem** —
  I searched. The supporting numbers exist (Lifestyle is both the biggest and the vaguest
  bucket); the framing is Plan C's own field observation `[BMC]` plus `[guess]`.

---

## 1.1 The design principle behind all three sets

Plan C's mechanism sentence `[BMC]`:

> **คอนเทนต์ที่จัดหมวดไม่ได้ → ไม่โผล่ในเครื่องมือที่เอเจนซีใช้คัด → ไม่มีใครประเมินคุณ → ไม่ได้งาน**
> **คุณไม่ได้แพ้ในการแข่งขัน — คุณไม่เคยเข้าไปอยู่ในการแข่งขัน**

So the ship-select screen is not decoration. **It is the first time the site asks the
visitor to categorise themselves** — which is exactly the thing Plan C says the market
will do to them whether they like it or not. Each set below is built so that at least one
class is the *"I don't fit any of these"* class, because that player is the core customer.

`[guess, but load-bearing]` I'd suggest the ship-select screen carries a small line like
*"เลือกไม่ถูก? — นั่นคือปัญหาที่เราคุยกัน"*. Mat writes the actual copy.

---

## 1.2 SET A — "สามลำ" (3 classes) — the tight set

Built on the three **structural positions** in the Thai market rather than on content
verticals. This set answers "what is your relationship to the screening tool?"

### A1 · สายไลฟ์สไตล์ — HUD: `LIFESTYLE`
**One line:** ทำหลายอย่าง ไม่มีหมวดชัด — คนดูรู้จักคุณ แต่เครื่องมือคัดไม่รู้จะวางคุณไว้ตรงไหน

**Evidence this type exists and is Plan C's segment:**
- Largest published bucket: **19% of Thai creators** (iCreator 2025) `[ยืนยัน]`
- Lowest-CPM bracket ($3.47) `[vendor, via BMC]` and only ~7.4% of brand budget `[vendor]`
- Named directly in Plan C's own field notes as the group that fails the filter `[BMC]`
- The 38-cluster tool sorts by "ประเภทเนื้อหาคอนเทนต์ที่โพสต์บ่อยที่สุด" — a creator with no
  most-frequent type is the failure case by construction `[ยืนยัน]`

**(a) Cosmetic:** ship is a loose cluster of small hulls flying in formation that never
quite locks — silhouette reads as "several things at once". HUD icon: an outline that keeps
switching between three shapes on a slow cycle. Class-specific gnats: the **mirror gnat**
(a small copy of your own ship). Class sentences: the identity-loss cluster (§2.3 cat. F).

**(b) Mechanical (lateral, propose only):** **widest shot spread, weakest per-hit.** Covers
the most screen, kills the slowest. Literally "you're everywhere and nowhere". Optional:
the ship's own hitbox is slightly indistinct/soft-edged. **Do not** give it a compensating
buff — the weakness *is* the message.

### A2 · สายรีวิวของ — HUD: `REVIEW`
**One line:** สายกิน-ของสวย-ของใช้ — หมวดที่แบรนด์จ่ายเยอะที่สุด และที่คนแย่งกันเยอะที่สุด

**Evidence:**
- Beauty & Fashion **17%** + Food **6–7%** of creators (iCreator 2025) `[ยืนยัน]`
- Those two verticals take **>50% of Thai influencer budget** (Food & Drink 39.4% +
  Fashion & Beauty 15.0%), and AnyMind itself calls them a **"Red Ocean"** `[vendor]`
- Thai vocabulary verified: **สายความงาม · สายอาหาร · สาย Beauty · สาย Food** `[ยืนยัน]`
- Barter compensation is the normal form at the bottom of this vertical, and **nobody has
  ever measured how common it is** — a documented absence in `[BMC]`

**(a) Cosmetic:** sleek, polished, over-decorated hull — the best-looking ship on the
select screen. Class gnats: the **gift-box gnat** (barter) and the **brief-bubble gnat**.
Class sentences: money/barter + brief-creep clusters (§2.3 cat. B, C).

**(b) Mechanical:** **highest fire rate, narrowest spread; enemies arrive in dense
identical clusters** (crowding made literal). Signature: **gift-box gnats explode into
"ของ" pickups that add nothing to score.** You spend shots, you get paid in product. This
is the single strongest mechanic-as-argument in the whole document `[guess, mine]`.

### A3 · สายรู้จริง — HUD: `SPECIALIST`
**One line:** การเงิน/เทค/สุขภาพ/รถ — คนน้อย งานแพง แต่พูดผิดครั้งเดียวจบ

**Evidence:**
- Finance, Health, Automotive, Parenting are the **fastest-growing** categories, each small
  in population (marketeeronline.co/archives/389798) `[ยืนยัน]`
- AnyMind names **Home, Gadget, การเงิน** as the **less-saturated** opportunities `[vendor]`
- Highest CPM brackets by a wide margin `[vendor, via BMC]`
- **This is the class the BMC's research says actually survives:** Wang, Macy & Nee
  (*PLOS ONE* 2023, 1,504 groups, Cox survival) — narrowness alone predicts *worse*
  outcomes (retention −1.65pp); what predicts survival is **technical exclusivity**
  (+4.31pp) `[งานวิจัย, via BMC]`

**(a) Cosmetic:** small, angular, instrument-heavy hull; HUD icon a caliper/gauge.
Class gnats: **rulebook gnat** (armoured, must be hit repeatedly) — sourced to the
copyright/legal-vacuum pain (§2.3 cat. G).

**(b) Mechanical:** **slow fire rate, piercing shot** — one shot through a whole column.
Fewer enemies, each armoured. Trade-off: **misses are punished** (a missed shot costs
something) because in this vertical, being wrong in public is the risk.

> **Why Set A is my recommendation** — see §3. Three classes is the fewest that still
> encodes the BMC argument: *illegible / crowded / defensible.* Every extra class after
> that adds art, sentences and QA without adding argument.

---

## 1.3 SET B — "สี่ลำ" (4 classes) — the standard set

Set A, but splits the "REVIEW" ship into the two verticals the market actually names
separately, because they behave differently (Beauty = supply-heavy; Food = demand-heavy).

| # | Thai name | HUD | One line | Evidence |
|---|---|---|---|---|
| **B1** | **สายไลฟ์สไตล์** | `LIFESTYLE` | ทำหลายอย่าง ไม่มีหมวดชัด | = A1. 19% of creators `[ยืนยัน]` |
| **B2** | **สายความงาม** | `BEAUTY` | ความงาม-แฟชั่น — คนเยอะที่สุดรองจากไลฟ์สไตล์ | 17% of creators, 15.0% of budget — supply exceeds demand `[ยืนยัน]`+`[vendor]`; Thai term verified 3 sources |
| **B3** | **สายกิน-เที่ยว** | `FOOD/TRAVEL` | อาหาร-คาเฟ่-ทริป — งบเยอะที่สุด แต่ต้นทุนต่องานสูงที่สุด | Food 6–7% + Travel 8–10% of creators; Food & Drink **39.4%** of budget `[ยืนยัน]`+`[vendor]` |
| **B4** | **สายรู้จริง** | `SPECIALIST` | การเงิน/เทค/สุขภาพ/รถ | = A3 |

**Why the Beauty/Food split earns its place:** they are opposite economic problems.
Beauty = *too many of you*. Food/Travel = *the money is here but each job costs you a trip,
a meal, a shoot day and a week of edits* — and this is the vertical where the deadline and
backstage-workload sentences (§2.3 cat. A) are literally sourced from a travel creator.

**Cosmetic:** B2 = the polished hull from A2; B3 = a bulkier ship with visible cargo/gear
strapped on (the "งานหลังบ้าน" made visible on the silhouette).

**Mechanical:**
- **B2 (Beauty):** highest fire rate, narrowest spread, densest identical enemy clusters.
- **B3 (Food/Travel):** starts each wave **carrying cargo** — slightly slower until it
  "delivers", then speeds up. Gift-box/zero-point pickups belong here too.
- B1, B4 as A1, A3.

---

## 1.4 SET C — "หกลำ" (6 classes) — the detailed set

Every class here clears the bar of *published Thai category + meaningful population*.

| # | Thai name | HUD | One line | Population evidence |
|---|---|---|---|---|
| **C1** | **สายไลฟ์สไตล์** | `LIFESTYLE` | ไม่มีหมวดชัด | 19% `[ยืนยัน]` |
| **C2** | **สายความงาม** | `BEAUTY` | ความงาม-แฟชั่น | 17% `[ยืนยัน]` |
| **C3** | **สายกิน-เที่ยว** | `FOOD/TRAVEL` | อาหาร-คาเฟ่-ทริป | ~15% combined; 39.4% of budget `[ยืนยัน]`+`[vendor]` |
| **C4** | **สายเกม-บันเทิง** | `GAMING` | เกม-สตรีม-บันเทิง | Gaming 7% + Entertainment 8% `[ยืนยัน]`; #1 category on YouTube `[ยืนยัน]` |
| **C5** | **สายเล่าข่าว** | `NEWS` | เล่าข่าว-คอมเมนต์สังคม | News & Reporter 4–5%; **top category on both Facebook and TikTok** `[ยืนยัน]`; the 45–50 cohort's main entry `[ยืนยัน]` |
| **C6** | **สายรู้จริง** | `SPECIALIST` | การเงิน/เทค/สุขภาพ/รถ | fastest-growing + least saturated `[ยืนยัน]`+`[vendor]` |

**Cosmetic per class (all 1-bit silhouettes):**
- C4 GAMING: the most "arcade" hull — reads as a classic fighter. HUD icon: a d-pad/stick.
- C5 NEWS: a broad flat hull like a desk or a broadcast tower lying on its side. HUD icon:
  a microphone.

**Mechanical per class:**
- **C4 GAMING:** fastest movement, but **a decaying stat between waves** — the views-drop
  debuff, sourced directly (§2.3 cat. E). Fast and always sliding backwards.
- **C5 NEWS:** shot has splash damage, but **each kill spawns a comment-swarm gnat from
  behind/off-axis** — you get reach, and reach brings the comments. This class is the one
  where the drama sentences (§2.3 cat. D) play.
- C1/C2/C3/C6 as above.

### 1.4.a Two optional extra classes (not in the core six)

| Option | Thai name | Why it's tempting | Why I left it out of the core six |
|---|---|---|---|
| **+1** | **สายวัยเก๋า** `SILVER` | Real, named cohort: Tellscore's "Best Silver Content Creator" award `[ยืนยัน]` + the 45–50 headline `[ยืนยัน]` | **Policy conflict:** BMC's open proposal is *รับเซสชันฟรี ไม่ขายต่อ* for this group `[BMC]`. Putting them on a select screen for a marketing site implies you sell to them. **This is a business decision, not an art one** — §3 Q4 |
| **+2** | **สายมู** `MYSTIC` | Verified Thai vocabulary (สายมู · สายดวง · สายไพ่ · สายฮวงจุ้ย) `[ยืนยัน]`; has its own Tellscore award category `[ยืนยัน]`; named as growing `[ยืนยัน]` | Small population, and a black-and-white arcade about "the algorithm is a lottery" (`PLAN-C-LANDSCAPE-RESEARCH.md`: *"สมัยก่อนคือบันได ตอนนี้คือหวย"* `[BMC]`) plus a มู class may read as a joke Plan C doesn't intend. **Tonal call for Mat** |

**Also considered and rejected:** สายแม่และเด็ก (3–4%, verified Thai term, but its pain
sentences overlap almost entirely with LIFESTYLE) · สายสัตว์เลี้ยง (2%, too small) ·
ไลฟ์ขายของ / E-commerce creator (verified and growing, but it is a *business model*, not a
content vertical — it would need its own economics, not its own ship).

---

## 1.5 Gimmick depth — the two levels, stated plainly

| | **(a) COSMETIC ONLY** | **(b) MECHANICAL** |
|---|---|---|
| What changes | Ship silhouette · HUD icon · which enemy symbols appear · which Thai sentences appear on wave banners | All of (a), **plus** one lateral stat/behaviour trade per class |
| Build cost | 1 sprite + 1 icon + 1 sentence set per class | + per-class tuning, + bot playtest run per class to re-measure μ |
| Balance risk | **None.** μ is measured once | **Real.** μ must be measured **per class**, and every class must still satisfy μ < λ < 2μ. `playtest.mjs` runs multiply by the class count |
| Argument delivered | "The market sorts you into a box" | "…and the box changes what you can and can't do" |
| Replay value | Low — one run shows you everything | High — a REVIEW run and a SPECIALIST run feel different |

`[guess]` My read: **(b) is worth it only if the mechanic is an argument, not a stat.**
The gift-box-pays-zero-points mechanic teaches barter economics in three seconds and no
sentence on the website does that as well. A "+10% fire rate" does nothing for the brand.
So: *mechanical, but only where the mechanic says something.* That's option **(c)** in §3 —
a hybrid where 1–2 classes carry a signature mechanic and the rest are cosmetic.

---
---

# 2. TASK 2 — THE PAIN-SENTENCE BANK

## 2.0 How this was collected, and what it cost

**Method:** four parallel research passes over (1) the PlanCBIz corpus, (2) Thai news and
long-form interview media, (3) Thai social/creator-community platforms, (4) Thai taxonomy
sources. Every sentence below was read on a page that was actually fetched. A verification
pass re-fetched a sample with deliberately fabricated decoy strings mixed in; the decoys
correctly came back negative, and **one real candidate failed and was removed** (§2.6).

**Sources that could NOT be reached, and it matters:**

| Source | What happened |
|---|---|
| **Pantip.com** | Every `/topic/` URL 302-redirects to a "not allowed / use our Official API" page. **Zero Pantip content in this file.** |
| **Facebook groups** | robots.txt disallowed. The FB influencer-gig groups named in the brief are unreachable from here. |
| **TikTok / X / Instagram** | robots.txt disallowed. |
| **YouTube** | Persistent HTTP 429 on every watch page. |
| brandbuffet.in.th, thailandinfluencerawards.com, th.tellscore.com/th/influencer | HTTP 403 |

**⚠️ The single most important caveat in this document:** the brief named Thai Facebook
influencer-gig groups and Pantip as primary sources, and **both are hard-blocked**. What I
could reach instead is **Lemon8** (Thai creators posting long-form, unusually candid) and
**Thai news + long-form interviews**. That means the bank is skewed toward (i) the March
2025 unpaid-agency scandal and (ii) creators willing to speak publicly under their own
name — i.e. **it under-samples the ordinary, unglamorous, day-to-day griping that lives in
FB groups**, which is exactly Plan C's channel. `[BMC]`'s own instruction —
*"เข้ากลุ่ม FB อ่านอย่างเดียว 5–7 วัน จดหัวข้อที่คนเจ็บจริงตอนนี้"* — is still the
highest-value next step and **this file does not replace it.**

**Total entries below: 62** (vs. the 25 minimum), across 9 categories — of which **56 are
Thai creators' own verbatim words**, 5 are clearly-labelled industry-survey headings
(S17, S41, S60, S61, S62) and 1 is a third party describing creators (S47).

---

## 2.1 Notation

Each entry: `ID · TH verbatim · EN gloss · speaker · source · date · category`.
Where a sentence is too long for a wave banner I give a `[reworded]` short form **and keep
the original verbatim above it**. Nothing is shortened silently.

---

## 2.2 THE BANK

### Cluster A — งานหลังบ้าน / เดดไลน์ (backstage workload & deadlines)

**S01** — `สิ่งที่ทำให้เหนื่อยแบบไม่ทันตั้งตัวคือเดดไลน์และความคาดหวังค่ะ`
EN: *What tires me out without warning is the deadlines and the expectations.*
𝙖𝙢𝙢𝙧𝙞𝙨𝙨 (travel influencer) · Lemon8 `lemon8-app.com/@ammriss/7538423319491396103` ·
14 Aug 2025 · `[ยืนยัน — I re-fetched this page and confirmed the exact string]`

**S02** — `งานถ่ายหนึ่งทริปไม่ได้จบแค่กดชัตเตอร์ แต่ต่อด้วยคัดรูป แต่งรูป ตัดต่อคลิป เขียนแคปชั่น`
EN: *One shoot trip doesn't end at the shutter — then comes culling, editing, cutting clips, writing captions.*
𝙖𝙢𝙢𝙧𝙞𝙨𝙨 · same source · `[ยืนยัน]`
→ `[reworded]` for a banner: **`ทริปไม่ได้จบแค่กดชัตเตอร์`**

**S03** — `บางช่วงรู้สึกเหมือนใช้ชีวิตเพื่อคอนเทนต์มากกว่าตัวเอง`
EN: *Sometimes it feels like I live for the content more than for myself.*
𝙖𝙢𝙢𝙧𝙞𝙨𝙨 · same source · `[ยืนยัน]`

**S04** — `ส่วนผมใช้เวลาที่เหลือจากชีวิตประจำวันไปทำยูทูบ ซึ่งไอ้ที่เหลือมันคือ เวลานอน`
EN: *I spend whatever's left over from daily life on YouTube — and what's left over is my sleep.*
SOMMARKZ (Sommark Ponkrid), Thai YouTuber, column "ชีวิตยูทูบเบอร์ไม่ง่าย" ·
`rainmaker.in.th/youtuber-no-stories-0/` · 8 Nov 2018 · `[ยืนยัน]`
→ `[reworded]`: **`เวลาที่เหลือ คือเวลานอน`**

**S05** — `เราทำงานกันหนักมาก บางวันต้องทำทั้งวัน ตั้งแต่เช้ายันดึก`
EN: *We work incredibly hard — some days the whole day, morning till late night.*
เซียนหรั่ง (creator) · `marketingoops.com/news/viral-update/influencer-2/` · 27 Mar 2025 · `[ยืนยัน]`

**S06** — `เราทำทันสู้คนอื่นเขาไม่ไหว คนเราน้อยครับ คนเราน้อย`
EN: *We can't keep up with the others — we're short-staffed.*
แชมป์, video creator, เพจ Echo · `rainmaker.in.th/uncensored-interview-echo/` · 15 Dec 2018 · `[ยืนยัน]`

**S07** — `กลัวครับ เพราะว่าคนเราถึงจะโตมาแล้ว 24 ปี แต่ก็ไม่ได้หมายความว่าจะเจอเรื่องทุกๆ ชั่วโมง`
EN: *Yes I'm scared — I may have lived 24 years, but that doesn't mean something happens to me every hour [to make content from].*
ไนท์, streamer, ช่อง Gssspotted · `thematter.co/entertainment/gssspotted/79773` · 29 Jun 2019 · `[ยืนยัน]`

**S08** — `จริงๆ TikTok ความยากมันคือความสั้นนะ`
EN: *Honestly, the hard thing about TikTok is the shortness.*
แซม—พลสัน นกน่วม, TikTok creator · `thematter.co/social/pain-point-creators/189962` · 5 Nov 2022 · `[ยืนยัน]`

---

### Cluster B — บรีฟ / แก้งาน / ขอบเขตงานบานปลาย (brief creep, revisions, scope)

**S09** — `ไม่มีบัจเจท แต่มีบรีฟให้ถ่ายเก็บผลด้วย ให้ฟีตแบค จะนำรูปไปใช้อีก บางทีก็เกินไปปปป!!! ก่อนหน้านี้ลงให้ตลอด อย่าเอาความใจดีมาเอาเปรียบสิไม่แฟร์เลย`
EN: *No budget, but there's a brief, shoot progress results, give feedback, and they'll reuse the photos too — sometimes it's just too muchhh!!! I've always posted for them before. Don't take advantage of my kindness, it's not fair.*
แอมมี่ กิตติยา (influencer) · `today.line.me/th/v3/article/7NlgKvr` · 26 Jun 2025 · `[ยืนยัน]`
**⚠️ Source spelling kept verbatim** (`บัจเจท`, `ฟีตแบค`, `เกินไปปปป`) — do not correct it.
→ `[reworded]` for a banner: **`ไม่มีบัจเจท แต่มีบรีฟ`** ← this is arguably the best single
line in the whole bank for a wave banner.

**S10** — `ต้องถ่ายรุปฟีตแบค 7-14 วัน ขอเอารุปไปใช้ต่อ งานนี้ไม่มีบัจเจท`
EN: *I have to shoot feedback photos at 7–14 days, they want to reuse the photos, and this job has no budget.*
แอมมี่ กิตติยา · same source · `[ยืนยัน]` · source spellings `รุป`, `ฟีตแบค`, `บัจเจท` kept.

**S11** — `ต้องอ่านรายละเอียดดี ๆ เช่น ส่งงานกี่ชิ้น, ส่งไฟล์แบบไหน, แก้ได้กี่รอบ, และจ่ายเงินกี่วันหลังโพสต์`
EN: *You have to read the details carefully — how many deliverables, what file type, how many revision rounds, and how many days until payment after posting.*
@bebua.b (review influencer) · `lemon8-app.com/@bebua.b/7396717483639603713` · 28 Jul 2024 · `[ยืนยัน]`
→ `[reworded]`: **`แก้ได้กี่รอบ — เคยอ่านไหม`**

**S12** — `ถ้าเป็นงานแลกสินค้าแต่ใช้เวลาทำเยอะ หรือเงื่อนไขหนักเกิน`
EN: *If it's a barter job that eats a lot of time, or the conditions are too heavy…*
Bearbykim (@bearbykim) · `lemon8-app.com/@bearbykim/7488962592690700808` · 3 Apr 2025 · `[ยืนยัน]`

---

### Cluster C — เรท / โดนกดราคา (rate anxiety & haggling)

**S13** — `รับงานอินฟลูแล้วใจสั่นทุกครั้งที่ต้องบอกราคา`
EN: *Every time I have to state my rate on an influencer job my heart races.*
bearbykim · `lemon8-app.com/@bearbykim/7587776577811923463` · 25 Dec 2025 · `[ยืนยัน]`
**This is the strongest rate sentence in the bank** — it is about fear, not about a number,
so it carries no money figure and needs no caveat.

**S14** — `กลัวแพงไป กลัวลูกค้าหาย หรือโดนต่อจนเหลือไม่คุ้มแรง`
EN: *Scared it's too expensive, scared of losing the client, or getting haggled down until it's not worth the effort.*
bearbykim · same source · `[ยืนยัน]`

**S15** — `ถ้าใครกำลังปวดหัวกับคำว่า "ขอเรทหน่อย" หรือเจอประโยคฮิตอย่าง "ลดได้ไหม/แลกสินค้าได้ไหม"`
EN: *If you're getting headaches from "send me your rate", or that classic line "can you lower it / can we barter?"*
bearbykim · `lemon8-app.com/@bearbykim/7488962592690700808` · 3 Apr 2025 · `[ยืนยัน]`
→ `[reworded]` — the two quoted phrases inside it are usable **on their own** as enemy
labels: **`ขอเรทหน่อย`** and **`ลดได้ไหม / แลกสินค้าได้ไหม`**

**S16** — `มือใหม่มักกดราคาตัวเองเพื่อให้ได้งานไว ๆ แต่สุดท้ายเหนื่อยฟรีจริงค่ะ`
EN: *Newbies undercut their own price to land jobs fast, but end up exhausted for free.*
@bebua.b · `lemon8-app.com/@bebua.b/7396717483639603713` · 28 Jul 2024 · `[ยืนยัน]`
→ `[reworded]`: **`สุดท้ายเหนื่อยฟรี`**

**S17** — `โดนกดราคา เพราะขาดเรตมาตรฐานอุตสาหกรรม`
EN: *Getting price-squeezed because there's no industry standard rate.*
**⚠️ EDITORIAL, NOT A CREATOR QUOTE** — RAiNMaker's own heading for pain point #4 of
"5 Pain Points of Thai Creators in 2026", from the iCreator Report 2026 survey ·
`rainmaker.in.th/5-pain-points-of-thai-creator-in-2026/` · **19 Aug 2026** (yesterday) ·
`[ยืนยัน — I fetched this page myself]`

---

### Cluster D — เงินไม่เข้า / โดนเบี้ยว / สแกม (unpaid, credit terms, scams)

> **Context for this whole cluster:** March 2025, an ad agency left dozens of Thai
> creators unpaid, ~20M baht total. The vetted version of this case is in
> `PLAN-C-ERRATA.md` — **use the vetted version, not the news version, in any public copy.**
> `[BMC]` The sentences below are the creators' own words as printed.

**S18** — `ไม่หนี ไม่หาย แต่ว่าเขาไม่จ่าย`
EN: *They don't run off, they don't disappear — they just don't pay up.*
Affected influencer, ข่าวสด interview · `today.line.me/th/v3/article/vX950xE` · 3 Mar 2025 · `[ยืนยัน]`
**The single best "unkillable enemy" line in the bank** — see the enemy concept in §2.4.
*(A spaced variant `ไม่หนีไม่หายแต่ไม่จ่าย` appears at `amarintv.com/news/social/507926`.)*

**S19** — `ผมโดนเอเจนซี่เจ้าหนึ่งไม่จ่ายตังค์ตอนนี้จะครบ 1 ปีแล้วครับ ผู้เสียหายเยอะมาก ๆ ผมทำไงกับเหตุการณ์นี้ได้บ้างครับ`
EN: *One agency hasn't paid me — it's nearly a year now. There are so many victims. What can I do about this?*
เซียนหรั่ง (โน่), influencer · `khaosod.co.th/breaking-news/news_9692509` · 27 Mar 2025 · `[ยืนยัน]`
→ `[reworded]`: **`ไม่จ่ายตังค์ ตอนนี้จะครบ 1 ปีแล้ว`**

**S20** — `เงินคืนกูเหอะ`
EN: *Just give me my damn money back.*
โน่ เซียนหรั่ง, at the press conference · `mgronline.com/entertainment/detail/9680000029347` · 27 Mar 2025 · `[ยืนยัน — two independent passes]`
**⚠️ Register warning:** `กู` is rough. Powerful, and a tonal decision for Mat — Plan C's
voice is *"เพื่อนที่เก่ง ไม่ใช่โบรชัวร์"* `[BMC]`, which this could fit or overshoot.

**S21** — `พลอยก็ตัดคลิปโน่นนี่นั่นโพสต์เสร็จแล้ว แต่เงินก็ยังไม่ได้`
EN: *I edited the clips, did all of it, posted already — and still haven't been paid.*
พลอย Pigkaploy (travel creator) · same source · 27 Mar 2025 · `[ยืนยัน]`
→ `[reworded]`: **`โพสต์เสร็จแล้ว แต่เงินก็ยังไม่ได้`**

**S22** — `ครบกำหนดเครดิต 90 วันแล้วก็ยังไม่ได้เงิน`
EN: *The 90-day credit term is up and I still haven't been paid.*
โน่ เซียนหรั่ง · `hilight.kapook.com/view/246523` · 27 Mar 2025 · `[ยืนยัน]`
*(Related, same page: `พอผ่านไป 90 วัน เราก็ไม่เห็นวี่แววว่าจะจ่าย`)*

**S23** — `เมื่อทวงถามผ่านพนักงานของเอเจนซี่ เขาก็อ้างว่าไม่มีอำนาจตัดสินใจจ่ายเงิน`
EN: *When we chased it with the agency staff, they claimed they had no authority to approve payment.*
Affected creator · `hilight.kapook.com/view/246523` · 27 Mar 2025 · `[ยืนยัน]`

**S24** — `มันเหมือนเป็นการบังคับให้เรายอมรับหนี้ที่เกิดขึ้น ทั้งที่เราไม่ได้ตกลงอะไรเลย`
EN: *It's like forcing us to accept the debt when we never agreed to anything.*
นกฮูก (creator) · `marketingoops.com/news/viral-update/influencer-2/` · 27 Mar 2025 · `[ยืนยัน]`

**S25** — `ทำงานเพื่อเอาเงิน ไม่ได้มาเป็นเจ้าหนึ่คุณ`
EN: *I worked to get paid, not to become your creditor.*
Affected influencer, press conference · `mgronline.com/entertainment/detail/9680000029347` · 27 Mar 2025 · `[ยืนยัน]`
**⚠️ Source typo `เจ้าหนึ่คุณ` (for เจ้าหนี้คุณ) kept verbatim as printed.** If used on
screen, either keep it and accept it, or use `[reworded]` **`ทำงานเพื่อเอาเงิน ไม่ได้มาเป็นเจ้าหนี้คุณ`**.

**S26** — `ที่ผ่านมาเราเงียบเพราะหวังว่าจะได้รับเงินคืน แต่ตอนนี้ถึงเวลาที่ต้องออกมาพูดแล้ว`
EN: *We stayed quiet all this time hoping to get the money back, but now it's time to speak up.*
Affected influencer · `marketingoops.com/news/viral-update/influencer-2/` · 27 Mar 2025 · `[ยืนยัน]`

**S27** — `ไม่ว่าคุณจะเป็นใครหรือเป็นประธานบริษัทมันก็ไม่ใช่ข้ออ้างในการที่คุณจะมาเบี้ยวเงินค่าจ้างของเรา`
EN: *No matter who you are, even a company chairman, that's no excuse to stiff us on our fee.*
นายเลิศฤทธิ์, influencer, ช่อง "ภูเขา ชาแนล" · `amarintv.com/news/crime/508485` · 10 Mar 2025 · `[ยืนยัน]`

**S28** — `ทางช่องได้มีการร่วมงานกับเอเจนซี่เจ้านี้มากกว่า 2-3 ปี ซึ่งที่ร่วมงานด้วยเพราะว่ามีความน่าเชื่อถือและตลอดการทำงานที่ผ่านมาไม่เคยมีปัญหาในลักษณะนี้มาก่อน`
EN: *We worked with this agency for 2–3 years because they seemed credible, and we'd never had a problem like this before.*
น.ส.จิดาภา วรรธนะฐิติกุล, ช่อง SPD · `khaosod.co.th/breaking-news/news_9693001` · 27 Mar 2025 · `[ยืนยัน]`
**Directly supports the BMC's "สะพานเชือกเส้นเดียว" / single-intermediary risk** `[BMC]`

**S29** — `เปิดเพจมาเข้าปีที่ 7 เพิ่งโดนเจ้านี้แหละค่ะ`
EN: *I've run my page for 7 years — this is the first outfit that's ever done this to me.*
Affected influencer · `amarintv.com/news/social/507926` · 3 Mar 2025 · `[ยืนยัน]`

**S30** — `ไม่คิดเลยว่าตัวเองจะต้องมาลงเรื่องอะไรแบบนี้ในเพจเลยค่ะทุกคนนน`
EN: *I never thought I'd have to post something like this on my own page, everyone.*
Affected influencer · `amarintv.com/news/social/507926` · 3 Mar 2025 · `[ยืนยัน]`

**S31** — `เตือนภัย! มิจฉาชีพ วงการครีเอเตอร์ เริ่มเพิ่มมากขึ้น โดยให้เราจ่ายมัดจำก่อนทำคลิป`
EN: *Warning! Scammers in the creator scene are increasing — making us pay a deposit before making the clip.*
a/TPK (@atpk.meta), creator · `lemon8-app.com/@atpk.meta/7404030443210768897` · 17 Aug 2024 · `[ยืนยัน]`
*(Same post, also usable: `ไม่มีงานไหนที่เราต้องจ่ายมัดจำก่อนทำคลิป`)*

**S32** — `อยากให้ทุกคนระวังตัวกันไว้ไม่มีงานอะไรให้เราโอนเงินให้ก่อนแน่นอนค่ะ`
EN: *I want everyone to be careful — there's definitely no job that makes us transfer money first.*
ยม (@fahsaibutsayamat) · `lemon8-app.com/@fahsaibutsayamat/7411508284722545168` · 6 Sep 2024 · `[ยืนยัน]`

**S33** — `ยูทูบสำหรับผมก็ไม่ได้มั่นคง มั่งคั่ง ยั่งยืนอะไร`
EN: *For me YouTube isn't stable, isn't rich, isn't sustainable at all.*
SOMMARKZ · `rainmaker.in.th/youtuber-no-stories-0/` · 8 Nov 2018 · `[ยืนยัน]`

---

### Cluster E — ยอดวิวตก / อัลกอริทึม (views collapse & the algorithm)

**S34** — `ตอนนี้ช่องของเราประสบปัญหาหนัก กำลังจะไปต่อไม่ไหว สาเหตุไม่ใช่เพราะเราอยากเลิกทำช่อง ไม่ใช่เพราะเราหมดไอเดีย แต่เราท้อกับการที่ต้องต่อสู้กับอัลกอริทึม`
EN: *Our channel is in serious trouble and can barely go on — not because we want to quit, not because we're out of ideas, but because we're worn down by fighting the algorithm.*
หวาย—วิภาวดี สฤษฏ์พงศ์, ช่อง VIPS Station · `thematter.co/brief/youtuber-algorithm-disruption/199717` · 23 Mar 2023 · `[ยืนยัน — I re-fetched and confirmed]`
→ `[reworded]`: **`เราท้อกับการที่ต้องต่อสู้กับอัลกอริทึม`**

**S35** — `ล้านคนที่กดซับฯ เห็นคลิปเราแค่สองพันจริงเหรอ มันลดฮวบจนเราอยากถามยูทูบว่าเขายังอยากให้เราทำคลิปอยู่มั้ย`
EN: *A million subscribers and only two thousand see the clip, really? It dropped so hard I want to ask YouTube whether they even still want us making videos.*
หวาย, VIPS Station · same source · `[ยืนยัน — re-fetched, full sentence confirmed]`
→ `[reworded]`: **`เขายังอยากให้เราทำคลิปอยู่มั้ย`**

**S36** — `ยอดวิวจะตกเกิน10000% ทุกครั้งที่ไลฟ์ในแพลตฟอร์มอื่น`
EN: *My views crash by over 10,000% every time I livestream on another platform.*
กัสจัง จิรันธนิน, YouTuber announcing the end of his channel · `daradaily.com/news/150414/read/` · 20 May 2025 · `[ยืนยัน]`
**⚠️ "10000%" is the creator's own hyperbole, not a measurement.** Fine as a *quoted
feeling* on a wave banner; **must never appear as a Plan C data claim.** `[BMC]` rules.

**S37** — `ช่องปิดกั้นผู้ติดตามแม้กระทั่งครอบครัวก็ไม่เห็น`
EN: *The channel is throttled from followers — even my own family doesn't see it.*
กัสจัง จิรันธนิน · same source · `[ยืนยัน]`

**S38** — `ช่วงที่ทำคอนเทนต์ไปสักพักแล้วเริ่ม "ท้อ" เป็นเรื่องปกติมาก โดยเฉพาะเวลายอดวิวไม่ขึ้น`
EN: *After doing content for a while, getting discouraged is totally normal — especially when the views don't move.*
ไอซ์ (@ice.storyselling) · `lemon8-app.com/@ice.storyselling/7463309162567926273` · 24 Jan 2025 · `[ยืนยัน]`

**S39** — `จะมีเทคนิคยังไงให้คนหยุดดูคลิปในตอนแรก แล้วดูจนจบแถมมาดูวนได้อีก`
EN: *What technique makes people stop on the clip at the start, watch to the end, then loop it?*
เฟิร์น, creator · `thematter.co/social/pain-point-creators/189962` · 5 Nov 2022 · `[ยืนยัน]`
**⚠️ Note for the main chat:** this creator names *rewatch/loop* as a signal. The BMC
explicitly lists **rewatch/loop as folklore that Plan C must never teach** `[BMC]`. So this
sentence is excellent **as an enemy** (a thing creators chase) and must never be a Plan C
claim. That tension is itself good material.

---

### Cluster F — ตัวตนหาย (identity loss) — **the cluster that lands on Plan C's promise**

**S40** — `บางช่วงจะรู้สึกสูญเสียตัวตน—ทำคอนเทนต์ตามอัลกอริทึมจนลืมว่าเราชอบอะไรจริง ๆ`
EN: *Sometimes I lose my identity — making content for the algorithm until I forget what I actually like.*
𝙖𝙢𝙢𝙧𝙞𝙨𝙨 · `lemon8-app.com/@ammriss/7538423319491396103` · 14 Aug 2025 · `[ยืนยัน — re-fetched myself]`
**⭐ This is the most valuable sentence in the entire bank.** Plan C's brand stance is
*"we make you more yourself, fighting on your own turf."* This sentence is a real Thai
creator naming exactly the wound that stance answers, in her own words, unprompted.
→ `[reworded]`: **`ทำคอนเทนต์ตามอัลกอริทึม จนลืมว่าเราชอบอะไรจริงๆ`**

**S41** — `ตกเป็นทาส Algorithm จนเสียตัวตน และ Burnout`
EN: *Enslaved to the Algorithm until you lose your identity, and burn out.*
**⚠️ EDITORIAL heading, not a creator quote** — RAiNMaker pain point #2 of 5, from the
iCreator Report 2026 survey · `rainmaker.in.th/5-pain-points-of-thai-creator-in-2026/` ·
**19 Aug 2026** · `[ยืนยัน]`
**Significance:** an independent, survey-backed Thai industry source published *yesterday*
naming identity-loss as the #2 pain of Thai creators. That is external corroboration of
Plan C's entire positioning, dated after the BMC was written.

**S42** — `คนดูอาจจะมองว่าเราเป็นคนที่ขยันมาก ชอบออกไปทำอะไรใหม่ๆ มันก็เป็นความกดดันสำหรับเราเหมือนกัน เพราะจริงๆ ก็มีวันที่ฉันเฉื่อยๆ ดูซีรีส์ อยู่บ้านทั้งวัน แต่ฉันแค่ไม่ได้โชว์ให้ทุกคนดู สิ่งที่เห็นไม่ใช่เราทั้งหมด`
EN: *Viewers may see me as super hardworking — that's pressure too, because there are days I'm sluggish, watching series at home all day. I just don't show it. What you see isn't all of me.*
Grace Maneerat, YouTuber · `thematter.co/social/should-we-trust-the-youtuber/199591` · date not clearly printed (quote attributed to 2022) · `[ยืนยัน]`
→ `[reworded]`: **`สิ่งที่เห็นไม่ใช่เราทั้งหมด`**

---

### Cluster G — คอมเมนต์ / ภาพลักษณ์ / ดราม่า (comments, image pressure, drama)

**S43** — `ช่วงทำคอนเทนต์เราเลี่ยงคอมเมนต์แย่ๆไม่ได้เลย`
EN: *While doing content, there's no way to avoid the nasty comments.*
@maxphira, content creator · `lemon8-app.com/@maxphira/7395980783359541777` · 26 Jul 2024 · `[ยืนยัน]`

**S44** — `พอคนเริ่มจำเราได้ เราจะเริ่มกลัวภาพ "หลุด" กลัวไม่สวย กลัวคอนเทนต์ไม่ปัง`
EN: *Once people recognise you, you start fearing an unflattering photo leaking, fearing looking ugly, fearing content that flops.*
𝙖𝙢𝙢𝙧𝙞𝙨𝙨 · `lemon8-app.com/@ammriss/7538423319491396103` · 14 Aug 2025 · `[ยืนยัน — re-fetched]`
→ `[reworded]`: **`กลัวไม่สวย กลัวคอนเทนต์ไม่ปัง`**

**S45** — `บทบาทการเป็น Bay Riffer อาจจะยากที่ต้องเอาใจคนนับล้าน`
EN: *Playing the role of Bay Riffer is hard — you have to please a million people.*
เบย์, Bay Riffer, gamecaster · `adaymagazine.com/a-life-bay-riffer/` · 26 Feb 2020 · `[ยืนยัน]`

**S46** — `ผมว่าโลกออนไลน์โกลาหลเกินที่จะตัดสินถูกหรือผิดไปนานแล้ว`
EN: *I think the online world has long been too chaotic to judge right from wrong.*
RedremasteRed, creator · `themomentum.co/theframe-redremastered/` · 18 Jun 2021 · `[ยืนยัน]`

**S47** — `เจอคนที่โห เปิดเข้ามาปุ๊บ ยิ้มแย้มแจ่มใส แต่พอกล้องปิดปุ๊บ เหนื่อย ดีเพรส ซึมเศร้า`
EN: *You meet people who beam the moment the camera's on, but the second it's off — exhausted, depressed.*
เอม—นภพัฒน์จักษ์ อัตตนนท์, บก. WorkpointTODAY · `thematter.co/social/pain-point-creators/189962` · 5 Nov 2022 · `[ยืนยัน]`
**⚠️ Not a creator complaining about his own job** — an editor describing creators he meets.
Label accordingly if used; it is testimony *about* the segment, not *from* it.

---

### Cluster H — หมดไฟ / อยากเลิก (burnout & quitting)

**S48** — `เรากำลังจะเลิกทำ มันทำให้เรารู้สึกกดดันเหมือนกัน`
EN: *I'm about to quit, and that in itself makes me feel pressured.*
โมจิโกะ (MOJIKO), YouTuber quitting after 10 years · `thairath.co.th/news/society/2768239` · 5 Mar 2024 · `[ยืนยัน — two passes]`

**S49** — `เวลาเครียด มีกล้องมาก็ต้องยิ้ม`
EN: *Even when I'm stressed, the camera comes out and I have to smile.*
โมจิโกะ (MOJIKO) · same source · `[ยืนยัน — two passes]`
**Short, brutal, fits a banner with no rewording.**

**S50** — `เรารักทีมมาก เราไม่อยากให้ทีมนี้มาล้มเหลวเพราะเรา`
EN: *I love my team so much; I don't want this team to fail because of me.*
โมจิโกะ (MOJIKO) · same source · `[ยืนยัน — two passes]`

**S51** — `เมื่อรายได้ของการเป็นอินฟลูฯ มันเท่าเดิมและลดลง ถ้าเรายังฝืนทำตรงนี้ต่อ เราจะหาเงินที่ไหนมาขึ้นเงินเดือน`
EN: *When influencer income stays flat then falls, if I force myself to keep going, where do I find money for raises?*
โมจิโกะ (MOJIKO) · same source · `[ยืนยัน — single pass, slightly lower confidence]`

**S52** — `ทำให้เริ่มหมดกำลังใจ`
EN: *It's started to drain all my motivation.*
กัสจัง จิรันธนิน · `daradaily.com/news/150414/read/` · 20 May 2025 · `[ยืนยัน]`

**S53** — `ช่วงที่หายไปหลายเดือนเพราะทั้ง burn out และ reading slump`
EN: *I disappeared for months because of both burnout and a reading slump.*
แมวป่วนชวนอ่าน (@readbooks_l), book creator · `lemon8-app.com/@readbooks_l/7551743109017797136` · 19 Sep 2025 · `[ยืนยัน]`

**S54** — `ถ้าวันไหนBurnout ต้องรีบฮึบให้ไวที่สุดแล้วลุยต่อ!`
EN: *On the days you burn out, force yourself up as fast as possible and push on!*
@jamsaiiim · `lemon8-app.com/@jamsaiiim/7516394165249786375` · 16 Jun 2025 · `[ยืนยัน]`
**⚠️ Tonal note:** this one *endorses* pushing through burnout. Powerful as an enemy
banner (it is the trap), risky if read as advice. `[guess]` If used, it belongs on the
enemy side, never in Plan C's voice.

**S55** — `ผมทิ้งความฝันจากอาชีพแรกที่ทำลงไป ซึ่งผมลังเลโคตรๆ ทะเลาะกับความคิดตัวเองทุกคืน`
EN: *I threw away the dream of my first career — I hesitated like hell, arguing with my own thoughts every night.*
SOMMARKZ · `rainmaker.in.th/youtuber-no-stories-0/` · 8 Nov 2018 · `[ยืนยัน]`

**S56** — `อยากรู้ว่ามันจะไหวไหม ออกมาเป็นยังไง สรุป เหนื่อยมากกกกกก`
EN: *I wanted to know if I could handle it and how it'd turn out — conclusion: exhaustingggggg.*
พิม (@pimpiktx), creator with a day job · `lemon8-app.com/@pimpiktx/7509502876722430471` · 28 May 2025 · `[ยืนยัน]`
**Relevant:** 62.2% of Thai creators keep a main job (iCreator 2025) `[ยืนยัน]`.

**S57** — `จะเลิกเล่น lemon8 ถ้ายังเป็นแบบนี้`
EN: *I'll quit Lemon8 if it stays like this.*
JiejieJiali (@gmtpcptkk14) · `lemon8-app.com/@gmtpcptkk14/7458693876036207105` · 12 Jan 2025 · `[ยืนยัน]`

---

### Cluster I — ไม่มีระบบรองรับ / สู้อยู่คนเดียว (no protection, no community)

**S58** — `pain point จริงๆ ก็น่าจะเป็นเรื่องกฎหมายที่ยังไม่รองรับ เราก็ต้องมาคิดว่า เราจะสื่อสารออกไปยังไงให้คนเข้าใจได้มากที่สุด`
EN: *The real pain point is that the law still doesn't cover us, so we have to work out how to communicate so people understand.*
จุ๊กจิ๊ก—นรรณพร แสนใจวุฒิ, เพจ Echo · `thematter.co/social/pain-point-creators/189962` · 5 Nov 2022 · `[ยืนยัน]`

**S59** — `เราลงคอนเทนต์แล้วโดนละเมิดไป 2 รอบ บางทีเราโพสไป 3-4 วัน ก็โดนอีก`
EN: *I posted content and got hit with violations twice; sometimes 3–4 days after posting it happens again.*
Janenyrubyjane (@janenynattawan) · `lemon8-app.com/@janenynattawan/7591054998461497873` · n/a · `[ยืนยัน]`

**S60** — `ปัญหาเยอะ แต่ไม่มี Community หรือแหล่งอ้างอิงให้ปรึกษา`
EN: *Lots of problems, but no community or reference source to consult.*
**⚠️ EDITORIAL heading** — RAiNMaker pain point #5 · `rainmaker.in.th/5-pain-points-of-thai-creator-in-2026/` · 19 Aug 2026 · `[ยืนยัน]`
**This is Plan C's market gap, stated by an industry publication, yesterday.**

**S61** — `รายได้สูงแต่ขอกู้ยาก ไม่มีสวัสดิการรองรับ`
EN: *High income but hard to get a loan, and no benefits or safety net.*
**⚠️ EDITORIAL heading** — RAiNMaker pain point #1 · same source · 19 Aug 2026 · `[ยืนยัน]`

**S62** — `เสี่ยงโดนละเมิดผลงาน เพราะกฎหมาย AI ยังไม่คุ้มครอง`
EN: *At risk of your work being infringed, because AI law still doesn't protect you.*
**⚠️ EDITORIAL heading** — RAiNMaker pain point #3 · same source · 19 Aug 2026 · `[ยืนยัน]`
**This is the only AI-competition-adjacent item I could source in Thai.** See §2.6.

---

## 2.3 The categories that emerged

I did not impose the brief's example categories. These are what the 62 sentences actually
formed, ordered by **how many independent speakers** produced them:

| # | Category | Thai working name | Sentences | Independent speakers | Weight `[guess]` |
|---|---|---|---|---|---|
| **A** | Backstage workload & deadlines | **งานหลังบ้าน / เดดไลน์** | S01–S08 | 6 | light |
| **B** | Brief creep, revisions, scope | **บรีฟ / แก้ไม่จบ** | S09–S12 | 3 | light–medium |
| **C** | Rate anxiety & haggling | **เรท / โดนกดราคา** | S13–S17 | 3 + industry survey | medium |
| **D** | Unpaid, credit terms, scams | **เงินไม่เข้า / โดนเบี้ยว** | S18–S33 | 10+ | **heavy** |
| **E** | Views collapse & algorithm | **ยอดวิวตก / อัลกอริทึม** | S34–S39 | 5 | **heavy** |
| **F** | Identity loss | **ตัวตนหาย** | S40–S42 | 2 + industry survey | **heaviest** |
| **G** | Comments, image pressure, drama | **คอมเมนต์ / ภาพลักษณ์** | S43–S47 | 5 | medium |
| **H** | Burnout & quitting | **หมดไฟ / อยากเลิก** | S48–S57 | 7 | **heavy** |
| **I** | No protection, no community | **ไม่มีใครรองรับ** | S58–S62 | 2 + industry survey | medium |

**Three observations worth Mat's attention:**

1. **Category D (money) has by far the most speakers (10+)** — but they nearly all come
   from one March 2025 news event. Volume ≠ breadth. Treat it as *one loud source*, not
   eleven independent confirmations.
2. **Category F (identity loss) has the fewest speakers but the highest strategic value** —
   it is the only category that Plan C's product *directly* answers, and it was
   independently named as Thailand's #2 creator pain by an industry survey **on 19 Aug 2026**.
3. **Category A (deadlines) contradicts CONTENT-MAP** — see §2.5.

---

## 2.4 Enemy symbol concepts (describe, don't draw)

All 1-bit, readable at ~16–24px, monochrome only per `CLAUDE.md`. **No counts, no rates.**

| Cat. | Gnat symbol concept | Behaviour idea (narrative, not balance) |
|---|---|---|
| **A** งานหลังบ้าน | **Alarm clock / hourglass** — a small round body with two bells, or a pinched hourglass silhouette | Ordinary. The tutorial enemy. Dies easily; there are simply always more |
| **B** บรีฟ/แก้งาน | **Speech bubble with a numeral badge** | **Each time you hit it, the numeral increments instead of dying** — it takes several hits and *shows you the round count going up*. Ties to CONTENT-MAP's existing "แก้รอบที่ 8" motif without duplicating it |
| **C** เรท | **Price tag with unreadable digits** — a tag outline where the number is a scribble/blur | Wobbles; hard to lock onto. You can't aim at a number you don't know |
| **C/B** แลกของ | **Gift box with a ribbon** | Dies easily and **drops a pickup worth zero.** The player learns barter economics without a single word of copy |
| **D** เงินไม่เข้า | **Envelope / invoice sheet** | **⭐ The signature enemy: it cannot be destroyed.** It absorbs shots, drifts calmly to the top of the screen and exits. Sourced verbatim: **`ไม่หนี ไม่หาย แต่ว่าเขาไม่จ่าย`** (S18). The first genuinely unfair moment in the game |
| **D** สแกม | **Envelope with a hook/barb** | Looks like the normal envelope. Moves *toward* the player instead of away |
| **E** อัลกอริทึม | **A downward-stepping line/graph**, or a broken arrow pointing down | Doesn't attack. **Drains something passively** while on screen — fire rate, or the player's shots get slower. The enemy that punishes you for nothing you did |
| **F** ตัวตนหาย | **⭐ A small mirror-copy of the player's own ship** | Mimics the player's movement on a delay. Shooting it feels wrong. **This is the wave immediately before Plan C docks** — you are shooting versions of yourself |
| **G** คอมเมนต์ | **A cluster of tiny speech bubbles** flying as one blob | Swarms; individually trivial; arrives from off-axis/behind. Volume, not threat |
| **H** หมดไฟ | **A heavy, slow, solid-filled shape** (the only mostly-filled silhouette in the set) | Slow, large, absorbs a lot. Doesn't chase. Just makes everything harder while present |
| **I** ไม่มีใครรองรับ | **An open bracket / an unclosed frame** — a shape with a missing side | Doesn't attack. It *removes* something — e.g. temporarily hides part of the HUD |

`[guess]` — every behaviour above is a narrative proposal. None of it is balanced, and the
envelope-cannot-die enemy in particular needs a bot playtest before anyone trusts it.

---

## 2.5 ⚠️ Where this research CONTRADICTS an existing document

`PlanCBIz/CONTENT-MAP.md` §2 contains this row:

> ⚠️ **ป้าย DEADLINE** … `[MISSING]` — BMC **ไม่มี**ความเจ็บเรื่องเส้นตาย/deadline ของครีเอเตอร์ ·
> ความเจ็บที่ใกล้สุดคือ "แก้ไม่จบ" … → เสนอ**ตัดทิ้ง**

**That gap is now closed by field evidence.** Deadline pain is real, named, and Thai:

- **S01** `สิ่งที่ทำให้เหนื่อยแบบไม่ทันตั้งตัวคือเดดไลน์และความคาดหวังค่ะ` — a travel
  influencer naming deadlines **first**, ahead of everything else `[ยืนยัน]`
- **S02, S04, S05, S06** — four more speakers on the same workload/time axis

**Recommendation to the main chat / to Mat:** the DEADLINE sign in CONTENT-MAP should
probably **not** be cut. This is not my decision to make and I have not touched
CONTENT-MAP.md.

## 2.6 Rejected, and why — the honest ledger

| Candidate | Why it is NOT in the bank |
|---|---|
| `เอาล่ะ อัลกอริทึมเล่นฉันอีกแล้ว` (attributed to VIPS Station) | **FAILED VERIFICATION.** I re-fetched thematter.co/brief/youtuber-algorithm-disruption/199717 specifically to check. The page confirms the other two VIPS quotes and returns **NO** for this one — it is the article's paraphrase of *other* YouTubers, not a direct quote. **Removed.** This is why the verification pass exists |
| `มันเป็นงานที่ไม่มีวันหยุด ตั้งแต่ตื่นจนเข้านอน…` | Real quote, but the speaker is **Hannah Williams, a US creator**, rendered into Thai by THE STANDARD. Not a Thai creator's own Thai words |
| `ทุกอย่างเปลี่ยนแปลงเร็วมาก ไม่มีอะไรคงที่เกิน 6 เดือน…` | Same problem — **Leslie Mosier (Doug the Pug)**, foreign creator, Thai rendering |
| `ตอนนี้ตนเองคิดว่าไม่น่าได้เงินคืนแล้ว` (นกฮูก) | Uses reported-speech `ตนเอง` — the outlet's rendering, not clean first person |
| กัสจัง's full quote about the two-year view decline | **The verbatim original contains the creator's personal medical detail.** It is on a public news page, but putting a named real person's health condition on a game screen is not something Plan C should do. **Use S52 `ทำให้เริ่มหมดกำลังใจ` instead** — same speaker, same feeling, no intrusion |
| Any Thai creator's own words about **competing with AI content** | **Could not find a single one.** Manychat 2026 (n=1,000) reports "competing with AI content" displaced "algorithm changes" as the #1 creator challenge `[vendor, via BMC]`, and RAiNMaker's Aug-2026 pain point #3 is AI-adjacent (S62) — but **no Thai creator quoted in their own words**. If Mat wants an AI wave, the sentence has to come from Mat or from the FB groups |
| Any rate/income figure from a web source | **Excluded by rule.** NocNoc publishes per-post rate bands by follower tier; I noted its existence and carried **no number** across. Money figures come only from `PlanCBIz/` field work |

---
---

# 3. TASK 2b — WAVE CHARTS (3 alternatives)

Shared spine required by `CLAUDE.md`: **coping → drowning → near-loss → Plan C docks →
clear.** All three charts use five waves plus the dock. No chart specifies counts or λ.

## 3.1 CHART 1 — "ชีวิตของงานหนึ่งชิ้น" (one deal's lifecycle)

The most legible and most heavily sourced. Follows a single job from brief to non-payment.

| Wave | Category | Banner sentence (verbatim unless tagged) | Gnat symbol | Weight |
|---|---|---|---|---|
| **1** | A งานหลังบ้าน | `[reworded]` **`ทริปไม่ได้จบแค่กดชัตเตอร์`** ← S02 *(orig: งานถ่ายหนึ่งทริปไม่ได้จบแค่กดชัตเตอร์ แต่ต่อด้วยคัดรูป แต่งรูป ตัดต่อคลิป เขียนแคปชั่น)* | alarm clock | light |
| **2** | B บรีฟ/แก้งาน | `[reworded]` **`ไม่มีบัจเจท แต่มีบรีฟ`** ← S09 *(orig printed in full at S09, spelling kept)* | speech bubble w/ incrementing numeral | light–medium |
| **3** | C เรท | **`รับงานอินฟลูแล้วใจสั่นทุกครั้งที่ต้องบอกราคา`** (S13, verbatim, fits as-is) | blurred price tag + gift box | medium |
| **4** | D เงินไม่เข้า | `[reworded]` **`โพสต์เสร็จแล้ว แต่เงินก็ยังไม่ได้`** ← S21 | envelope (killable) → envelope (**unkillable**) mid-wave | heavy |
| **5** | D+H จมทั้งกอง | **`ไม่หนี ไม่หาย แต่ว่าเขาไม่จ่าย`** (S18, verbatim, perfect length) | unkillable envelopes + burnout mass | **heaviest — near-loss** |
| **DOCK** | — | Plan C's line — Mat writes it | — | screen clears |

**Pro:** every wave is a step in a process the player recognises; the unkillable envelope
lands at exactly the moment the game says "one ship is not enough".
**Con:** it is a *money* story. It ends where the BMC's product B lives (contracts,
payment terms) rather than where product A lives (identity) — so the dock has to carry the
whole identity argument by itself.

## 3.2 CHART 2 — "ความเจ็บที่ไต่ระดับ" (escalating pain)

Ordered by how deep the wound goes rather than by chronology.

| Wave | Category | Banner sentence | Gnat symbol | Weight |
|---|---|---|---|---|
| **1** | A งานหลังบ้าน | **`สิ่งที่ทำให้เหนื่อยแบบไม่ทันตั้งตัวคือเดดไลน์และความคาดหวังค่ะ`** (S01, verbatim) | alarm clock | light |
| **2** | G คอมเมนต์ | **`ช่วงทำคอนเทนต์เราเลี่ยงคอมเมนต์แย่ๆไม่ได้เลย`** (S43, verbatim) | speech-bubble swarm | light–medium |
| **3** | E อัลกอริทึม | `[reworded]` **`เขายังอยากให้เราทำคลิปอยู่มั้ย`** ← S35 | downward graph line (drains) | medium–heavy |
| **4** | D เงินไม่เข้า | **`ไม่หนี ไม่หาย แต่ว่าเขาไม่จ่าย`** (S18) | unkillable envelope | heavy |
| **5** | H หมดไฟ | **`เวลาเครียด มีกล้องมาก็ต้องยิ้ม`** (S49, verbatim, short) | slow heavy filled mass | **heaviest — near-loss** |
| **DOCK** | — | Mat's line | — | clears |

**Pro:** the emotional curve is the cleanest of the three; S49 at the near-loss moment is
devastating and needs no rewording.
**Con:** it ends on *burnout*, which Plan C does not sell a solution to. Risk: the dock
reads as "we'll cheer you up" rather than "we make you legible to the people who pay."

## 3.3 CHART 3 — "อาชีพ" (the career) — ⭐ my recommendation

Chart 1's spine for waves 1–4, then **swaps the final wave to identity loss**, so the
near-loss moment is the exact wound Plan C's brand stance answers.

| Wave | Category | Banner sentence | Gnat symbol | Weight |
|---|---|---|---|---|
| **1** | A งานหลังบ้าน | `[reworded]` **`เวลาที่เหลือ คือเวลานอน`** ← S04 *(orig: ส่วนผมใช้เวลาที่เหลือจากชีวิตประจำวันไปทำยูทูบ ซึ่งไอ้ที่เหลือมันคือ เวลานอน)* | alarm clock / hourglass | light |
| **2** | B+C บรีฟ+เรท | `[reworded]` **`ไม่มีบัจเจท แต่มีบรีฟ`** ← S09 · enemy labels use S15's own phrases **`ขอเรทหน่อย`** / **`ลดได้ไหม`** | speech bubble w/ numeral · blurred price tag · gift box (zero-point drop) | light–medium |
| **3** | D เงินไม่เข้า | **`ไม่หนี ไม่หาย แต่ว่าเขาไม่จ่าย`** (S18, verbatim) | envelope — **cannot be destroyed** | medium–heavy |
| **4** | E อัลกอริทึม | `[reworded]` **`เราท้อกับการที่ต้องต่อสู้กับอัลกอริทึม`** ← S34 | downward graph line — drains fire rate | heavy |
| **5** | **F ตัวตนหาย** | ⭐ `[reworded]` **`ทำคอนเทนต์ตามอัลกอริทึม จนลืมว่าเราชอบอะไรจริงๆ`** ← S40 *(orig: บางช่วงจะรู้สึกสูญเสียตัวตน—ทำคอนเทนต์ตามอัลกอริทึมจนลืมว่าเราชอบอะไรจริง ๆ)* | **mirror-copies of the player's own ship** | **heaviest — near-loss** |
| **DOCK** | — | Mat's line | Plan C docks as ship 2, then 3 | screen clears |

**Why this is the strongest:**

1. **The last thing the player fights is a copy of themselves**, while reading a real Thai
   creator saying she made content for the algorithm until she forgot what she liked. The
   next thing that happens is Plan C arriving and the screen clearing. That is *"we make
   you more yourself"* delivered as a mechanic, not as a slogan.
2. Waves 1–4 keep Chart 1's concrete, sourced, recognisable job problems — so the game
   earns the emotional wave rather than opening on it.
3. The escalation is also an escalation in **what kind of thing is attacking you**: chores →
   paperwork → an enemy you can't kill → an enemy that drains you → yourself.
4. It uses the two best-sourced clusters (D, E) as the middle and reserves the
   strategically decisive one (F) for the moment of rescue.
5. It is corroborated by an outside authority: RAiNMaker/iCreator 2026 ranks
   *"ตกเป็นทาส Algorithm จนเสียตัวตน"* as Thai creators' **#2** pain, published 19 Aug 2026 `[ยืนยัน]`.

**Con, stated honestly:** wave 5's enemy (mirror ships) is the hardest to build and the
hardest to read at 1-bit/24px. If it can't be made legible, Chart 3 degrades to Chart 1.

### 3.4 Class → wave interaction (only if gimmick depth = mechanical)

`[guess]` If Mat picks mechanical gimmicks, the cheapest high-value tie-in is: **each class
swaps ONE wave's sentence set for a class-specific one**, leaving structure identical.

| Class | Swaps wave | For sentences from |
|---|---|---|
| LIFESTYLE | 5 | F ตัวตนหาย (S40, S42) — the class most exposed to it |
| REVIEW / BEAUTY | 2 | B+C, weighted to barter (S09, S10, S12, S15) |
| FOOD/TRAVEL | 1 | A งานหลังบ้าน (S01, S02) — sourced from a travel creator |
| SPECIALIST | 3 | I ไม่มีใครรองรับ (S58, S59, S62) — copyright/legal exposure |
| GAMING | 4 | E อัลกอริทึม (S36, S37) |
| NEWS | — | G คอมเมนต์ (S43, S45, S46) added as an off-axis harassment layer |

---
---

# 4. TASK 3 — DECISION TABLE FOR MAT

**Nothing below is decided. Pick one per row, or reject the row.**

## 4.1 Which ship-class set?

| Option | Pros | Cons | Build cost |
|---|---|---|---|
| **SET A — 3 classes** ⭐ *my pick* | Fewest classes that still carry the BMC argument (illegible / crowded / defensible) · every class has a distinct *economic* story, not just a different hat · 3 sprites, 3 sentence sets · μ measured 3× at most | "สายรู้จริง" merges finance/tech/health/auto — a specialist may not see themselves · no travel/gaming/news representation at all | **Low** |
| **SET B — 4 classes** | Splits the two verticals the market actually names separately, and they are genuinely opposite problems (Beauty = oversupply; Food = high demand, high cost-per-job) · still small enough to QA | The Beauty/Food split is an *industry* distinction; a visitor may not care · 4th class adds art + μ run for one extra argument | **Medium** |
| **SET C — 6 classes** | Best coverage of the published Thai taxonomy · highest replay value · GAMING and NEWS unlock two strong mechanics (decay debuff; comment swarm) | 6 sprites, 6 sentence sets, 6 μ measurements · **real risk that classes 5 and 6 feel like reskins** · ship-select becomes a menu screen, which fights "อ่านจบใน 3 วินาที" | **High** |
| *+ SILVER / + MYSTIC add-ons* | Both are real, published Thai categories with their own Tellscore award | SILVER conflicts with the *ฟรี ไม่ขายต่อ* policy proposal `[BMC]`; MYSTIC risks reading as a joke | — |

## 4.2 Which wave chart?

| Option | Pros | Cons |
|---|---|---|
| **CHART 1 — ชีวิตของงานหนึ่งชิ้น** | Most legible · most heavily sourced (cluster D has 11 speakers) · reads as a process anyone recognises | Ends on money → the dock must carry the identity argument alone |
| **CHART 2 — ความเจ็บที่ไต่ระดับ** | Cleanest emotional curve · S49 needs no rewording and is devastating | Ends on burnout, which Plan C **does not sell a fix for** — the dock risks over-promising |
| **CHART 3 — อาชีพ** ⭐ *my pick* | Near-loss = shooting copies of yourself while reading a real creator's identity-loss sentence, then Plan C docks · brand stance delivered as mechanic · corroborated by an industry survey published 19 Aug 2026 | Wave-5 mirror enemy is the hardest asset to build and to read at 1-bit · degrades to Chart 1 if it fails |

## 4.3 Which gimmick depth?

| Option | Pros | Cons |
|---|---|---|
| **(a) Cosmetic only** | Zero balance risk — μ measured once · ships weeks earlier · classes still do their real job (making the visitor categorise themselves) | Low replay value · class choice has no consequence, which some players read as fake |
| **(b) Fully mechanical** | Every class plays differently · the gift-box and unkillable-envelope mechanics argue better than copy does | **μ must be re-measured per class**, and *every* class must still satisfy μ < λ < 2μ · playtest runs multiply by class count · a balance bug breaks the narrative proof, not just the fun |
| **(c) Hybrid** ⭐ *my pick* | 1–2 classes carry a signature mechanic (the ones where the mechanic **is** an argument); the rest are cosmetic · most of (b)'s payoff at a fraction of (a)→(b)'s cost | Asymmetric — players may notice some classes are "flat" |

## 4.4 Smaller decisions bundled here

| # | Question | Options |
|---|---|---|
| 1 | Does the ship-select screen carry a *"เลือกไม่ถูก?"* line? | yes / no / Mat's own wording |
| 2 | Is `เงินคืนกูเหอะ` (S20) usable, given `กู`? | use as-is / soften / drop |
| 3 | Keep source typos verbatim on screen (`บัจเจท`, `เจ้าหนึ่คุณ`)? | keep (authentic) / correct via `[reworded]` |
| 4 | Should the 45–50 SILVER cohort be a selectable class at all, given *ฟรี ไม่ขายต่อ*? | yes / no / defer |
| 5 | Does the unkillable envelope get a *later* payoff (killable once Plan C docks)? | yes / no |

---
---

# 5. OPEN QUESTIONS — I could not answer these, and shouldn't

1. **The FB-group sentences are missing.** Facebook and Pantip are both hard-blocked from
   this environment. The BMC's own instruction —
   *"เข้ากลุ่ม FB อ่านอย่างเดียว 5–7 วัน จดหัวข้อที่คนเจ็บจริงตอนนี้"* — remains the highest-value
   next step, and this file does not substitute for it. **Anything Mat copies out of those
   groups slots straight into §2.2 and probably outranks half of it.**
2. **The AI-competition wave has no Thai creator sentence.** Manychat 2026 says it is now
   the #1 creator challenge globally `[vendor]`; RAiNMaker's Aug-2026 list has an AI-law
   item (S62). But **no Thai creator's own words.** Either Mat supplies one, or that wave
   doesn't exist.
3. **Which class does Mat's actual first customer belong to?** The whole ship-select screen
   is a guess until there is one real session. F1/F2 in the BMC will answer this cheaper
   than any research pass.
4. **Brand decision still open** (`CLAUDE.md` item 1): planc* / Plan C second site / a
   separate brand. That governs whether the dock ship carries the Plan C mark at all.
5. **The 38 Wisesight cluster names are not public.** If Mat has access to the logged-in
   product, that list is the single best sanity-check on any class set here.

---

*Compiled 20 Aug 2026. Ship classes: §1. Sentence bank: §2.2 (62 entries — 56 creator
verbatim, 5 labelled industry-survey headings, 1 third-party). Wave charts: §3. Decisions: §4. Every Thai sentence is verbatim from a fetched
page; rewordings are tagged and printed next to their originals; rejects are logged in §2.6.*

---
---

# 6. DECISION LOG

| Date | Decision | By |
|---|---|---|
| 21 Aug 2026 | **Ship-class set = SET B (4 classes):** สายไลฟ์สไตล์ `LIFESTYLE` · สายความงาม `BEAUTY` · สายกิน-เที่ยว `FOOD/TRAVEL` · สายรู้จริง `SPECIALIST` | **Mat** |
| — | Wave chart (1/2/3) | **open** |
| — | Gimmick depth (cosmetic / mechanical / hybrid) | **open** |
| — | §4.4 small items (เลือกไม่ถูก line · S20 กู · verbatim typos · SILVER class · envelope payoff) | **open** |

Everything added below (§7–§9) is again a **menu**, requested by Mat on 21 Aug 2026:
international (non-Thai) obstacles per wave, and the 2-ship / 3-ship combined-power
design for the Plan C dock.

---
---

# 7. INTERNATIONAL OBSTACLE BANK (non-Thai sources)

## 7.0 Why this section exists, and how to use it

The Thai sentence bank (§2) supplies the **wave banners** — the voice. This section
supplies **obstacles**: hazards, enemy behaviours and mid-wave events, sourced from
non-Thai evidence (US/EU/global surveys, peer-reviewed studies, journalism). Two reasons
to look outside Thailand: (1) the strongest *measured* evidence about creator pain is
published in English; (2) obstacles are mechanics, not copy — they don't need a Thai
sentence to be true, they need a citation.

**Rules kept:** no money figures carried from the web (problem *descriptions* only) ·
each obstacle names its strongest source with n/year · `[analysis]` marks my design
inference. **The Thai-first rule still holds for on-screen text:** these obstacles get
Thai banners from §2 (or from Mat); the international evidence justifies the *behaviour*.

## 7.1 The bank, grouped and ranked by evidence strength

### Group 1 — THE ALGORITHM (strongest-evidenced family; boss-tier)

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **ALGORITHM SHIFT** | Rules change without warning; what worked stops working | Awin survey n>300 (US/UK/FR/DE) 2024: #1 cited cause of burnout (70%) · Patreon "State of Create" n=1,007 (2024): 78% say the algorithm dictates what they create `[vendor]` — prweb.com/releases/…awin-group-survey… · stateofcreate.co |
| **SHADOWBAN** | Invisible reach-suppression, no explanation, no appeal | Duffy et al., *Social Media + Society* 2021, n=30 (academic): "perceived algorithmic punishments without formal recourse" · Vibely 2021 n=150: 65% cite it `[งานวิจัย]`+`[vendor]` |
| **REACH ROT** | Followers stop seeing you at all | Patreon 2025 n=1,007: 53% say reaching followers is harder than 5 yrs ago; only 24% of IG users actively use the follow feed `[vendor]` — stateofcreate.co |
| **DEMONETIZATION FLAG** | Opaque "advertiser-unfriendly" strikes cut income algorithmically | *PACM HCI* (CSCW) 2021, NSF-funded qualitative study `[งานวิจัย]` — par.nsf.gov/biblio/10337609 |
| **PLATFORM DEATH** | The account — or the whole platform — can vanish (Vine; TikTok-ban scare) | Duffy et al. 2021 ("If you don't have a backup plan, you're done") · CNBC Mar 2024, named creators `[งานวิจัย]`+`[ยืนยัน]` |

### Group 2 — BURNOUT & THE TREADMILL (best-measured single obstacle in the bank)

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **BURNOUT MASS** | Chronic exhaustion as the job's default state | Vibely 2021 n=150: 90% experienced burnout, 71% considered quitting · Kit/ConvertKit 2024 n>1,000: 59% of full-timers in past yr · Manychat 2026 n=2,028: 51% considered quitting `[vendor ×3, mutually corroborating]` |
| **NEVER-OFF TREADMILL** | Pausing is punished; rest costs reach | Patreon 2025: **75% say platforms punish creators who aren't constantly publishing** `[vendor]` · matches Nguyen & Duffy 2026 in the BMC (`"ถ้าฉันพัก ฉันจะโดนอัลกอริทึมลงโทษ"`) `[งานวิจัย]` |
| **DREAM-JOB GAG** | Can't admit exhaustion publicly — audiences see a dream job | Nguyen & Duffy, *New Media & Society* 2026 (Cornell), 78 interviews: burnout is "unspeakable" `[งานวิจัย]` — quote in coverage: *"If my mental health was a priority, I wouldn't be as successful."* — MrBeast |
| **SHORT-FORM SQUEEZE** | Forced pivot to short vertical video against audience value | Patreon 2025: fans are fed 61% short-form but 52% say long-form is worth more `[vendor]` |

### Group 3 — MONEY PRECARITY

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **INCOME ROULETTE** | Earnings swing unpredictably month to month | Patreon 2025: 81% of IG-primary creators call income unpredictable · CreatorIQ 2026 **n=5,095 creators, 100 regions**: ~2/3 can't rely on creation as primary income `[vendor]` |
| **INVOICE CHASE** | Net-60/90 terms, then still late; months of chasing | Lumanu survey n=500+ (2024): 48% paid late in past yr; of those 38.5% >1 month late `[vendor]` · Digiday 2024, named creator: *"You really wait another net 30 because you're still having to chase them for your money."* — **directly corroborates Thai cluster D** |
| **NO SAFETY NET** | Contractor status: no insurance, sick leave, loans | Nguyen & Duffy 2026 `[งานวิจัย]` · **matches RAiNMaker's Thai pain #1 (S61) almost word for word** |

### Group 4 — HATE & HARASSMENT

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **COMMENT SWARM** | Pile-ons and unsolicited abuse as "part of the job" | *Eur. J. Criminal Policy & Research* 2023, n=76 influencers + 260-account ethnography (Spain): **>70% harassed; only 7.9% reported no victimization** `[งานวิจัย]` — link.springer.com/article/10.1007/s10610-023-09542-0 |
| **GENDERED HATE TAX** | Women/LGBTQ+ creators face sexualized attacks with financial fallout | Same study: 89.1% avoided certain brand collabs to prevent harassment; 19.6% suffered financial losses `[งานวิจัย]` |
| **VICTIM-BLAME SHIELD** | "Too lucky to be a victim" — abuse goes unreported | Same study, perpetrator rationale documented `[งานวิจัย]` |

### Group 5 — BRAND-DEAL TRAPS

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **FOREVER CLAUSE** | Perpetual usage rights, bundled whitelisting, buried AI-training clauses | Netinfluencer expert roundup 2026, 23 named industry sources: "Perpetual usage rights are essentially a full buyout" `[vendor]` — **extends Thai S09/S10 (รูปถูกเอาไปใช้ต่อ) with the contract mechanism behind it** |
| **AUTHENTICITY BIND** | Brands say "be authentic," pay for reach; brand demands fight audience wants | CreatorIQ 2026 n=5,095, 100 regions: 42% report the conflict (53% at 500k+) `[vendor]` |

### Group 6 — AI INVASION (2024–2026; the newest faction)

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **SLOP FLOOD** | Feeds fill with cheap AI channels competing for the same slots | Manychat 2026 n=1,000 creators: **competing with AI content = #1 challenge for 2026** `[vendor]` · Guardian/Kapwing analyses via searchenginejournal.com/…/567297 |
| **REPLACEMENT DREAD** | Fear AI devalues human work and erodes audience trust | Awin 2024 n>300: 42% see AI as a business threat · Raptive n=3,000 US adults: trust drops ~50% for AI-perceived content `[vendor]` |
| **DEEPFAKE DOPPELGÄNGER** | Your face/voice cloned into ads and scams you never approved | Rolling Stone Mar 2026, named creators: *"It's personality theft."* — Emy Brookins `[ยืนยัน]` |

### Group 7 — THEFT, HIJACK & MIDDLEMEN

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **FREEBOOT VAMPIRE** | Your work re-uploaded by strangers who take the views | Hank Green 2015 (landmark): 725 of FB's top-1,000 videos were stolen re-uploads `[ยืนยัน]` — medium.com/@hankgreen |
| **FAKE-SPONSOR PHISH** | "Brand deal" email carries account-stealing malware | Bitdefender write-up Jan 2025 `[vendor]` — **international twin of Thai S31/S32 (มิจฉาชีพให้โอนมัดจำ)** |
| **MCN SHACKLE** | Agency locks you in; exit penalty exceeds everything you earned | Global Times investigation Aug 2025 (China; minors sued by MCNs) `[ยืนยัน — state media]` — non-Western; rhymes with Thai cluster D's agency dependence |

### Group 8 — HEAD GAMES

| Obstacle | What it is | Strongest evidence |
|---|---|---|
| **COMPARISON MIRROR** | Measuring yourself against other creators' numbers | Awin 2024: **64% say comparing themselves to others drives their burnout** `[vendor]` |
| **PLATEAU DREAD** | Stalled follower growth reads as failure | Vibely 2021: 51% follower-count anxiety `[vendor]` — **this is Plan C's core segment definition (ยอดนิ่ง) `[BMC]`** |
| **DM AVALANCHE** | Unmanageable parasocial interaction load | Manychat 2026: up to ~100 DMs/week on ~20 hrs unpaid-adjacent workload `[vendor]` |

## 7.2 What the international bank changes about the Thai picture

1. **Thai cluster D (เงินไม่เข้า) is not a local scandal — it's the global norm.** Lumanu:
   48% of surveyed influencers paid late in the past year. The March-2025 Thai case is the
   loud version of a structural problem. The unkillable envelope is safe to build the game
   around: it will not age out.
2. **The identity-loss near-loss (Chart 3 wave 5) gets outside reinforcement:** Patreon's
   78%-algorithm-dictates-creation and the Cornell "unspeakable burnout" study say the
   same thing S40 says in Thai. Same wound, three methods, three countries.
3. **The AI faction now has evidence but still no Thai voice** (§2.6 stands). If Mat wants
   an AI obstacle, Group 6 justifies the *behaviour*; the *banner* still needs a Thai
   sentence from Mat or the FB groups.
4. **Two Thai-international twin pairs** worth exploiting on screen: S31/S32 ↔
   FAKE-SPONSOR PHISH, and S09/S10 ↔ FOREVER CLAUSE. Same enemy, two hemispheres.

---
---

# 8. WAVE-BY-WAVE OBSTACLE PROPOSAL (for SET B, 4 ships)

Built on the **Chart 3 "อาชีพ" spine** (still Mat's to confirm — if Chart 1 or 2 wins,
the obstacle layers transplant with small edits noted at the end). Structure per wave:
**base gnats** (from §2.4) + **one international-obstacle hazard** + **one class twist**
per SET B ship. As always: behaviours, not numbers.

## Wave 1 — งานหลังบ้าน (light) · banner S04/S01

- **Base gnats:** alarm-clock / hourglass gnats (§2.4-A). Tutorial texture, dies easily.
- **International hazard — NEVER-OFF TREADMILL** (Patreon 75%): a metronome strip at the
  screen edge ticks; if the player *stops moving/shooting* for a beat, a small extra gnat
  spawns. Rest is punished — taught in wave 1, gently. `[analysis]`
- **Class twists:**
  - `LIFESTYLE` — clocks drift in from *all four* edges (no single lane = no single niche)
  - `BEAUTY` — clocks arrive in tight mirrored pairs (the crowded-market texture starts early)
  - `FOOD/TRAVEL` — ship starts "carrying cargo" (§1.3), slightly heavy until first delivery
  - `SPECIALIST` — fewer clocks, each slightly armoured

## Wave 2 — บรีฟ/เรท (light–medium) · banner S09 `ไม่มีบัจเจท แต่มีบรีฟ`

- **Base gnats:** brief-bubble (hit-count increments), blurred price tag, gift box
  (zero-point drop) — §2.4-B/C.
- **International hazard — FOREVER CLAUSE:** one slow "contract sheet" gnat trails a long
  tail of small print; destroying the head is easy, but the *tail segments keep flying on*
  after the head dies (perpetuity, literally). They expire on their own — annoying, not
  lethal. `[analysis]`
- **Class twists:**
  - `LIFESTYLE` — price-tag gnats wobble hardest for this class (rate anxiety without a niche benchmark)
  - `BEAUTY` — gift boxes noticeably more frequent (barter economy of the beauty tier `[BMC]`)
  - `FOOD/TRAVEL` — brief-bubbles arrive mid-wave *replacing* clocks (the brief changes while you're already shooting)
  - `SPECIALIST` — one AUTHENTICITY BIND gnat: a two-faced tag that flips between "เป็นตัวเอง" and a brand logo shape; only vulnerable on one face `[analysis]`

## Wave 3 — เงินไม่เข้า (medium–heavy) · banner S18 `ไม่หนี ไม่หาย แต่ว่าเขาไม่จ่าย`

- **Base gnats:** killable envelopes early, then the **unkillable envelope** (§2.4-D).
- **International hazard — FAKE-SPONSOR PHISH:** among normal envelopes, occasional
  barbed envelopes that *home toward the player* — visually near-identical until close
  (S31/S32's scam, Bitdefender's malware email). Teaches the player to distrust the very
  thing they were shooting for. `[analysis]`
- **Class twists:**
  - `LIFESTYLE` — mixed envelope types, hardest to tell apart
  - `BEAUTY` — envelopes sometimes burst into gift boxes when shot (paid in product again)
  - `FOOD/TRAVEL` — the INVOICE CHASE hazard: one envelope flies a slow full-screen circuit before exiting (net-90 as a flight path) `[analysis]`
  - `SPECIALIST` — MCN SHACKLE mini-event: a chain link briefly tethers the ship, damping movement until shot (agency lock-in) `[analysis]`

## Wave 4 — อัลกอริทึม (heavy) · banner S34 `เราท้อกับการที่ต้องต่อสู้กับอัลกอริทึม`

- **Base gnats:** downward-graph drains (§2.4-E).
- **International hazards (pick 1–2, not all):**
  - **SHADOWBAN** — the player's *shots intermittently turn invisible* for a beat (they
    still work; you just can't see them land). Opaque punishment, felt directly. `[analysis]`
  - **REACH ROT** — the visible playfield edges creep inward slightly (your reach shrinks)
  - **SLOP FLOOD** — waves of identical, faceless copy-gnats drift past *ignoring the
    player entirely*, crowding the lanes without attacking (AI content doesn't fight you;
    it takes your space). **No Thai banner exists for this — behaviour only, or Mat writes the line.**
- **Class twists:**
  - `LIFESTYLE` — DEMONETIZATION FLAG: random gnats become worth 0 points for a spell (yellow-icon logic, monochrome-safe: the gnat turns hollow) `[analysis]`
  - `BEAUTY` — COMPARISON MIRROR: a rival ship silhouette crosses the top scoring visibly (64% Awin stat made visible)
  - `FOOD/TRAVEL` — SHORT-FORM SQUEEZE: the wave's rhythm chops into short bursts with hard cuts
  - `SPECIALIST` — least affected by the drain (defensible knowledge) but faces the densest armoured rulebook gnats — its trade stays honest

## Wave 5 — ตัวตนหาย (heaviest — the provable near-loss) · banner S40

- **Base gnats:** mirror-copies of the player's own ship (§2.4-F).
- **International hazard — DEEPFAKE DOPPELGÄNGER** stacks straight onto the mirror
  enemy: some copies fire *your own shot pattern back at you* ("personality theft" —
  Rolling Stone 2026). The strongest possible texture for "you are fighting yourself." `[analysis]`
- **Class twists:** each class's mirrors inherit that class's silhouette and quirk —
  BEAUTY fights polished clones, FOOD/TRAVEL fights cargo-carrying clones, SPECIALIST's
  clones are armoured, LIFESTYLE's clones keep *shifting shape* between the other three
  classes (the class that never resolved into anything meets every self it almost was). `[analysis]`
- λ exceeds one-ship μ here **by design and by measurement** — this wave is lost alone.

**If Mat picks Chart 1 instead:** move the FAKE-SPONSOR PHISH and INVOICE CHASE hazards
into waves 4–5 and drop the mirror wave; SLOP FLOOD then has no natural home (Chart 1 has
no algorithm wave — a point in Chart 3's favour). **Chart 2:** hazards map 1:1 except
FOREVER CLAUSE, which loses its brief-wave anchor.

---
---

# 9. THE DOCK — 2-SHIP AND 3-SHIP COMBINED POWER

Mat asked for the รวมพลัง design. The genre already solved this; below are the verified
precedents, then three assembly options. **All precedent claims were source-checked.**

## 9.1 Verified precedents (what the classics actually did)

| Game | Mechanic (verified) | Lesson for us |
|---|---|---|
| **Galaga (1981, Namco)** | Boss Galaga's tractor beam captures your fighter; rescue it by shooting that boss *while diving* (shooting your own captured ship destroys it); freed ship docks **side-by-side = dual fighter, up to 4 shots** — and a **larger hitbox** (confirmed on Wikipedia; power has a real cost). Designer Yokoyama originally made the captured ship a mere extra life and changed it *during development* so it fights alongside you | The canonical side-by-side dock. Doubled fire ↔ doubled target width — an honest trade. Our μ→2μ story in mechanical form |
| **Galaga '88 (1987)** | Dual fighter can itself be captured and re-rescued → **triple fighter with wide, fast shots** — a *different fire pattern*, not just a third gun | The 2nd→3rd escalation exists as canon: same verb, higher stakes, and each tier telegraphs itself through the fire pattern |
| **Gaplus (1984)** | The player gets a tractor beam and **captures enemies as wingmen**: they fly in formation and fire when you fire | The "ally echoes your inputs" model — cheap to build, instantly readable |
| **Gradius (1985, Konami)** | Up to 4 "Options" trail your flight path, mirror all fire, **cannot be hit** (no hitbox cost); cost is paid through difficulty rank & loss-on-death | The ghost-ally model: power with no hitbox tax |
| **TwinBee (1985, Konami)** | Lose both arms → an **ambulance flies in *because you are crippled***; dock with it to be repaired; it only comes back once | **State-triggered rescue** — help arrives at provable weakness, requires an active dock, can't be farmed. The closest existing thing to the Plan C moment |
| **R-Type (1987, Irem)** | The Force pod: indestructible companion that attaches front/back (changing your weapon) or detaches to fight ahead | The richest post-dock control if the ally should be positionable |
| **Raiden V (2016, MOSS)** | "Cheer Call": help from *other people* fills a gauge → **cancels all enemy bullets on screen + short weapon surge** | Verified modern grammar for **"help arrives = the screen clears"** — exactly our beat |
| **Sky Force Reloaded** (co-op reality check) | Second ship with no cost and no scaling simply flattens difficulty | The cautionary tale: a free ally kills tension. The dock must *change* play, not just add DPS |

Sources: en.wikipedia.org/wiki/Galaga · /Galaga_%2788 · /Gaplus · /Gradius_(video_game) ·
/TwinBee · /R-Type · /Raiden_V · strategywiki.org/wiki/Galaga/Gameplay ·
/Gaplus/Gameplay · /Gradius/Gameplay · gradius.fandom.com/wiki/Option ·
kokutech.com/blog/gamedev/design-patterns/flow-state/galaga ·
co-optimus.com/…/sky-force-reloaded-co-op-review · all fetched 21 Aug 2026.
Not verifiable, therefore **not used**: Jamestown co-op revival details; Gaplus ally-death
behaviour; any Darius fleet-rescue event.

## 9.2 The trigger — when does Plan C arrive?

**TwinBee's ambulance logic, adapted** `[analysis]`: the dock triggers on a *provable*
near-loss state, not a timer — e.g. the gnat line crossing a threshold row, or player at
last sliver. This matches the project's math contract: the bot has *measured* that one
ship cannot clear wave 5, so the trigger condition will provably occur every run. The
"ไม่มีแพ้จริง" rule (CLAUDE.md pending item 4) is implemented right here.

Telegraph before the dock `[analysis]`: a beat of radio-static text at screen edge —
Plan C hailing — so the arrival reads as *an answer*, not a random powerup. Copy = Mat's.

## 9.3 Three assembly options for the combined form

### Option D1 — "Galaga แท้" (side-by-side hard dock) ⭐ my pick
- **Ship 2:** Plan C hull docks flush on the player's wing, Galaga dual-fighter style.
  Combined fire = double volley. **Hitbox honestly widens** (the Galaga trade, verified).
  On dock: a **partial bullet/gnat cancel** in a radius (small Raiden-V moment).
- **Ship 3:** second Plan C hull docks the other wing → **triple fighter, Galaga '88
  style: wider, faster fire pattern** — visually a new weapon, not "more of the same."
  On dock: **full-screen clear** (the Raiden V Cheer Call beat) → the wave dissolves.
- **Why:** it is *literally the Galaga lineage* the whole site invokes; the doubled
  hitbox keeps the two-ship phase tense instead of trivially safe; and side-by-side
  formation is the strongest possible image of "เข้าประกบ" — an equal fighting beside
  you, not an accessory orbiting you. Brand statement and mechanic coincide.
- **Cost:** trickiest movement code (three hulls, one drag input, edge clamping widens).

### Option D2 — "Gradius เงา" (trailing options)
- Plan C ships trail the player's finger-path with a delay, mirroring every shot;
  invulnerable, no hitbox change. Ship 3 = second trailing option + full-screen clear.
- **Why:** cheapest to build (replay position history); feels great with drag controls.
- **Against:** an invulnerable ghost behind you reads as "a tool I picked up," not
  "someone came for me" — weakest narrative fit of the three. The Sky-Force lesson also
  bites: no new cost, no new tension.

### Option D3 — "R-Type โล่" (positionable shield-partner)
- Ship 2 = a Plan C hull that sits *in front*, absorbing gnats on contact (indestructible
  Force-pod logic) while adding forward fire; ship 3 docks the rear → fire both ways.
- **Why:** "Plan C takes the hits meant for you" is a strong consultancy metaphor; most
  distinctive feel.
- **Against:** an invincible front shield risks making wave 5's mirror enemies trivial —
  the near-loss must stay believable until the *third* ship; needs the most careful μ work.

### 9.4 What all three options share (fixed, per the math contract)
1. Dock order is scripted: near-loss → ship 2 → short fighting-together beat (the player
   must *feel* 2μ > λ) → ship 3 → full clear. Never simultaneous — two rescues, two beats.
2. Combined throughput must *measurably* exceed λ (bot-verified per option, per class if
   gimmicks are mechanical). No feel-based tuning — `CLAUDE.md` rule.
3. The cleared screen resolves into the site's next section (services), because the game
   is the argument and the argument ends: หนึ่งลำไม่พอ ไม่ใช่เพราะคุณอ่อน — เพราะโจทย์มันเกินหนึ่งลำ.
4. Class identity survives the dock: the player's SET B hull stays centre; Plan C hulls
   are visually *plainer* than the player's (the consultant is not the star). `[analysis]`

## 9.5 Decision rows added for Mat

| # | Question | Options |
|---|---|---|
| 6 | Dock mechanic | **D1 Galaga side-by-side** ⭐ / D2 Gradius trail / D3 R-Type shield |
| 7 | Ship-2 arrival effect | radius cancel (recommended) / no cancel / slow-mo beat |
| 8 | Ship-3 arrival effect | full-screen clear (recommended — Raiden V precedent) / rapid sweep |
| 9 | Does the unkillable envelope die when ship 3 docks? | yes — the one enemy only the full formation can kill (recommended; closes §4.4-5) / no — it exits forever |
| 10 | Wave-4 hazard pick | SHADOWBAN / REACH ROT / SLOP FLOOD (max 2) |
| 11 | Do international hazards appear in wave 1–2 at all, or start clean? | as proposed / cleaner early waves |

