# Coverage report — step 2.5

Run: `creator-attrition-income-data-079588` · gear `full` · tier `full`

## Corpus size

| Metric | Value | Target |
|---|---|---|
| Live (non-deprecated) notes | **146** | 55–80 |
| Deprecated | 6 | — |
| Claims files | **138** | — |
| Structured claims ingested | **726** | — |
| Retracted sources found | **0** | must be 0 |
| DOI-scored sources | 11 (8 arXiv preprints have no DOI — expected) | — |

Corpus is well above the gear's 55–80 target. Overshoot came from Phase 2
citation-chasing, which is the good kind of overshoot: the extra notes are
primary sources recovered from repository mirrors, not additional web
commentary.

## Coverage by atomic item

| Atomic item | Claims | Distinct sources | Status |
|---|---|---|---|
| Sub-Q1/2 — attrition (persons) + survival (channels) | 178 | 91 | **Well-covered** |
| Sub-Q3 — income distribution, median vs mean | 274 | 106 | **Well-covered** |
| Sub-Q4 — living-wage share | 64 | 44 | **Well-covered** |
| Sub-Q5 — time to first meaningful income | 271 | 95 | **Well-covered** |
| Sub-Q6 — documented quit reasons | 66 | 42 | **Well-covered** |
| Sub-Q7 — US/Western-only scope flag | 299 | 112 | **Well-covered** |
| Sub-Q8 — Southeast Asia evidence | 170 | 68 | **Well-covered** |

**Zero uncovered items. Zero thin items.** No wave-3 fetch required on coverage
grounds.

## Coverage is not the same as evidence quality — three qualified warnings

Raw source counts pass, but three items are covered by weaker evidence than the
counts suggest. These are not fetch gaps (more searching will not fix them);
they are properties of the literature, and the report must state them.

**1. Sub-Q1/2 attrition — the strongest sub-question by source count, the
weakest by evidence type.** Batch 2 ran three targeted OpenAlex sweeps for
large-scale channel-survival or streamer-churn cohort telemetry and found
**nothing**. No peer-reviewed study tracks "N creators started, M remained after
t months" at platform scale. The corpus's real attrition evidence reduces to
four measurements:

- Zhao et al. 2025 — n=1,923 VTubers, YouTube, 2017–Jul 2023, survival analysis
- Regner 2021 — n=139,366 Patreon campaigns, complete transaction record 2013–15
- Kässi/Lehdonvirta/Stephany 2021 — 163M online-labour accounts, activity observed on only 7 platforms
- Houssard et al. 2023 — Twitch ranking-flux, elite churn only

Everything else in the 91 sources is commentary, aggregation, or an
attrition-adjacent proxy. **The absence of platform-scale survival telemetry is
itself a required finding**, not a gap to paper over.

**2. Sub-Q6 quit reasons — 42 sources, but far fewer instruments.** See the
redundancy audit: the burnout cluster collapses to roughly four independent
studies. Additionally, every one of them measures *intention to quit among
still-active creators*, which cannot by construction sample anyone who already
left. No exit survey of former creators was found in any batch.

**3. Sub-Q8 Southeast Asia — 68 sources, but the good ones are institutional
gig-work studies, not creator studies.** The ILO / World Bank / UNDP / ADBI
layer is high-authority and genuinely SEA-specific, but it measures *platform
gig work* (ride-hailing, delivery, freelancing marketplaces), which is a
different population from content creators. The distinction is recorded on every
claim from batch 4. Genuine SEA *creator* quantitative evidence reduces to:

- The Indonesian 8 million / 63%-above-UMR figure — now traced (see below)
- ADBI's developing-Asia living-wage denominators (USD 254.28 / 414.88 per month)
- Vero's ~90% brand-sponsorship income-composition finding for Indonesia
- Rieder et al.'s geographic RPM and monetization-link differentials
- PIDS on Philippine/Indonesian online-workforce composition

## Resolved during cleanup — the Indonesian figure

The highest-value SEA datapoint has been traced and it is **not** what it appeared
to be. The "8 million creators, 63% earning above UMR" statistic that the
Minister of Creative Economy (Menekraf Teuku Riefky Harsya) stated publicly
originates in **TikTok Indonesia's own testimony to DPR Komisi I on 15 July 2025**
(Hilmi Adrianto), and describes creators monetizing *via TikTok specifically* —
not a national population. No methodology was disclosed by either party, and
TikTok declined to disclose its Indonesia revenue when pressed at the same
hearing.

The apparently-contradictory "only 14% earn" figure is a *different measurement
entirely* — a Linktree vendor survey of uncertain (likely global) scope, cited by
a 2023 Liputan6 article that also attributes an unverifiable creator-count figure
to the IMF. **63% and 14% are not reconcilable and must not be averaged or
presented as competing estimates of one quantity.**

Separately confirmed: **BPS publishes no official content-creator count.** Its
only relevant series is "creative economy workforce" (27.4M in 2025, 26.48M in
2024), a much broader category. BPS has stated that the 2026 Economic Census
(SE2026) will be the *first* instrument to make content-creator business actors
visible. Until then, no methodologically-disclosed national count exists for
Indonesia — an audited absence that the report must state plainly.

## Escalation queue

2 items queued (Cloudflare / bot walls). Highest-value unrecovered sources:

| Source | Why it matters | Barrier |
|---|---|---|
| ~~WSJ analysis of the Twitch leak~~ | **RESOLVED in step 5** — see below | ~~DataDome~~ recovered via Wayback Machine |
| Rieder et al., *Making a Living in the Creator Economy* | Large-scale YouTube monetization-linking study, 55 citations | SAGE Cloudflare; 4 repository mirrors also blocked |
| Huang & Ye, Douyin full-time creators (n=19) | Genuine creator-side China data | Closed access, no OA copy on Unpaywall/OpenAlex/S2 |
| PSA Philippines gig-worker measurement paper | SEA administrative material | Cloudflare |
| BPS press release + DPR RI hearing record | Primary sourcing for the Indonesian figure | Cloudflare / Akamai |

## RESOLVED in step 5 — the Twitch percentile figures are now citable

Step 2 concluded that the `$120` / `$28` / `0.06%` figures had no traceable
source and should be excluded. **That conclusion is superseded.** A step 5
fetcher recovered the primary source through the Wayback Machine after direct
fetches hit DataDome and archive.today mirrors returned HTTP 429:

> Bentley, Elliot and Kyle Kim, *Twitch Streamer Earnings Increase for Top
> Gamers, Data From Hack Shows*, Wall Street Journal, 9 October 2021.
> Vault note `twitch-streamer-earnings-increase-for-top-gamers-data-from-hack-shows-wsj`.

The recovered figures, with the denominator the secondary coverage omitted:

| Figure | Value |
|---|---|
| Total payouts Jan–Sep 2021 | $889 million (up from $517m in the same 2020 period) |
| Accounts in the leak | approximately 4.9 million |
| **Zero / negative-revenue accounts excluded** | **896,261** |
| Share of *earning* accounts under $120 | 75% |
| Share of *earning* accounts under $28 | 50% |
| Share above US median household income ($67,521) | 0.06% |
| Share above $1,000 | 5% |
| Top 1% share of all payouts | over half |
| Top 1,000 accounts | $220m of $889m (top 100 = $82m, next 900 = $138m) |
| Best-paid single account | over $5 million |

**The denominator correction is the load-bearing part.** Every percentile above
is computed over *earning* accounts only, after 896,261 zero-revenue accounts
were removed. Secondary coverage dropped that exclusion, which is why the same
percentages circulate attached to inconsistent denominators. Any use of these
figures must state the base.

WSJ's own stated caveats, which the report should carry: the figures exclude
sponsorships, tips and publisher payments; Twitch pays out only once a balance
reaches $100, which censors the low tail; and the leak is unverified — WSJ
cross-checked one streamer's pay stubs and matched to within 25 cents, but could
not verify the dataset as a whole.

## Verdict

Exit criterion met: source count far above minimum, zero uncovered atomic items,
zero retracted sources. Proceed to step 3.
