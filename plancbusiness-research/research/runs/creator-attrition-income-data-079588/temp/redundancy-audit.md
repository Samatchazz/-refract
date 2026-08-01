# Evidence redundancy audit — step 2.6

Run: `creator-attrition-income-data-079588` · 726 claims across 138 claims files

**Why this step matters more here than usual.** The creator-economy literature
is dominated by a small number of surveys recirculated by a very large number of
outlets. Naïve source-counting would report 42 sources on quit reasons; the real
figure is closer to four instruments. Every headline statistic in this corpus had
to be traced to its instrument before it could be counted as evidence.

## Method

Two passes. (1) Numeric fingerprinting — claims sharing distinctive numbers were
clustered, on the reasoning that independent studies do not report identical
percentages. (2) Provenance tracing by the cleanup fetchers, which read each
article for a named instrument, sample size, fielding date, and commissioning
body.

Numeric fingerprints that flagged clusters:

| Number | Appears in | Belongs to |
|---|---|---|
| `52%` | 10 sources | Censuswide / Billion Dollar Boy, Jul 2025 |
| `37%` | 9 sources | same |
| `55%` | 10 sources | same |
| `59%` | 8 sources | Linktree Creator Report (fielded 2021) |
| `90%` | 13 sources | split: Vibely 2021 burnout **and** the corrupted Bärtl "90% of wealth" |

## Cluster 1 — Burnout / quit reasons (14 notes → 4 instruments)

| Instrument | N | Fielded | Countries | Notes recirculating it |
|---|---|---|---|---|
| **Censuswide, commissioned by Billion Dollar Boy** | 1,000 creators (500 US / 500 UK) + 1,000 marketers + 4,000 consumers | Jul 2025 | US, UK | **7** |
| **Awin / ShareASale** | wave 1 N undisclosed; wave 2 n>300 micro-influencers | 2022, 2024 | US, UK, FR, DE | 2 |
| **Vibely** (Ian Borthwick) | 150 established creators, skewed 100k–500k followers | Nov 2021 | undisclosed | 1 |
| **Creators 4 Mental Health / Lupiani Insights** | 542 | published Nov 2025 | North America | 2 |

Canonical upstream: Censuswide/BDB. The other six notes in the cluster are
derivative and tagged as such. **Adjusted independent source count for Sub-Q6:
4, not 42.**

Two integrity findings inside this cluster:

- **Awin contradicts itself.** Its 2024 release restates its own 2022 baseline as
  87%, but Awin's 2022 headline was 78%. Flagged in both claims files.
- **The widely-repeated "73% of creators quit within their first year" is a
  corruption.** It is a garbled restatement of Awin's burnout-*frequency* figure.
  It measures nobody quitting. Recorded as a refuting claim.

## Cluster 2 — Creator population estimates (the provenance chain)

Not redundancy in the ordinary sense — a citation chain that laundered a venture-capital
blog estimate into a Goldman Sachs research figure:

```
SignalFire (VC blog, ~2020)
    └─> Zippia (SEO careers listicle, 2023)
            └─> Goldman Sachs (2023, and again 2025)
                    └─> global press
```

Three consequences, all recorded as claims:

1. **The "2 million professional creators" figure has never been re-measured.**
   SignalFire's ~2M (c. 2020) is Goldman's 2.0M for 2022 *and* 2.0M for 2025,
   held flat while the total grew 50.0M → 66.6M. Every net entrant over three
   years is classified an amateur by arithmetic, not by measurement.
2. **The "3% of channels take 90% of the wealth" statistic is a transformation
   error.** Bärtl (2018) measured 85% of **views** going to 3% of channels.
   Zippia rendered attention as revenue. Goldman then cited Zippia.
3. **Goldman's own definition is unstable.** The 2023 article defines
   professionals as earning >$100,000/year; the 2025 exhibit footnote says the
   split is "based on self-definitions (e.g. full-time vs. part-time)" with no
   income threshold at all. The famous "4% earn over $100k" therefore rests on no
   income measurement.

**Adjusted independent source count for global creator population: 1 traceable
lineage plus Linktree's separate desk exercise — not the eight-plus sources that
appear to report it.**

## Cluster 3 — Linktree Creator Report (5 notes → 1 instrument)

TechCrunch, Music Ally, Tubefilter, and two aggregators all report the same
survey: n=9,576, ~95% completion, **fielded 2021** (not 2022 as usually stated),
country composition never disclosed, creator defined by intent ("if you produce
and seek to monetize content, you're a creator"). The primary PDF is in the
vault; the rest are derivative.

The separate "200 million creators" figure inside that report is **not** survey
output — it is a desk exercise bucketing platform users by follower count from
Statista/Omnicore/Global Media Insight, with Douyin excluded. Recorded distinctly
so the two are never conflated.

## Cluster 4 — Twitch 2021 payout leak (8+ notes → 1 dataset)

PC Gamer, TechCrunch, Dot Esports, TechTimes, Inverse, Washington Post, Dexerto
and van Dreunen all analyse one leaked dataset. Not independent corroboration.
Two structural problems recorded as claims:

- **The denominator is quoted six incompatible ways** — 2.4M, 4.9M, 7M monthly,
  8.1M, 8.8M, 9M. Every headline percentage (0.01%, 0.015%, 0.06%, 0.1%) is a
  different divisor, not a different finding. Pooling them produces nonsense.
- **The observation window is stated five incompatible ways** (Jul/Aug/Sep/Oct
  2019 starts; 24/26/36-month spans), so cumulative→annual conversion is unsound.
  Dexerto additionally found the leaked tables contradict each other internally.

Canonical treatment: van Dreunen (NYU Stern) for aggregates, Washington Post for
distribution, Twitch's own primary documentation for monetization gates.

## Cluster 5 — Statistics aggregators (audit tier, non-citable)

A large low-authority layer (Zippia, Gitnux, WiFiTalents, Backlinko, Uscreen,
Photutorial, amraandelma and similar) recirculates figures with no traceable
methodology. Retained in the vault deliberately — the report needs to *discredit*
these figures explicitly rather than ignore them, since any reader will encounter
them. All are tagged low confidence with `evidence_type: anecdotal`.

**One fabrication confirmed.** `the-creator-burnout-epidemic-why-62-of-full-time-creators…`
attributes a full statistical battery to a "**Creator Economy Research Institute**
Q1 2026 study of 2,400 full-time creators." No such organisation is findable
anywhere. Its headline 62% exactly matches the real n=542 Creators 4 Mental Health
study published three months earlier. Tagged `do-not-cite` / `low-reliability`.
A near-identical pattern appeared in the TikTok batch, where the same phantom
"institute" was credited with an audit of 14,200 creators across 11 countries.

## Independent-source counts after discounting

| Atomic item | Raw sources | Independent instruments | Below floor of 2? |
|---|---|---|---|
| Sub-Q1/2 attrition + survival | 91 | **4** (Zhao, Regner, Kässi, Houssard) | No |
| Sub-Q3 income distribution | 106 | **9+** (Rieder ×2, Regner, Zhao, Strauss, UK IPO, Houssard, Twitch leak, Törhönen) | No |
| Sub-Q4 living-wage share | 44 | **6** (Regner, UK IPO, Linktree, BLS/NEA, ADBI, TikTok-Indonesia) | No |
| Sub-Q5 time to first income | 95 | **5** (Rieder 2020, UK IPO, Twitch docs, YouTube docs, Zhihu) | No |
| Sub-Q6 quit reasons | 42 | **4** (Censuswide, Awin, Vibely, C4MH) + 2 academic (Törhönen, Ivors/MU) | No |
| Sub-Q8 Southeast Asia | 68 | **5** (TikTok-DPR, ADBI, Vero, PIDS, World Bank/SAKERNAS) | No |

**No atomic item falls below the floor of 2 independent sources. Wave 3 is not
triggered.**

## Standing instruction carried into drafting

Where a figure originates in a single instrument, the report must say so and give
that instrument's N — never cite the outlet that repeated it as if it were
corroboration. Seven articles reporting 52% is n=1,000, once.
