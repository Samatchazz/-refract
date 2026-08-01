# Corpus-critic results — step 8

Seven gaps identified, all seven attempted, four fetchers dispatched. Three
committed positions changed. One changed substantially.

---

## Gap 4 — Indonesian methodology · **VERDICT PARTIALLY OVERTURNED**

**Searched:** the full "The TikTok Effect" PDF, Kadence technical appendices, ByteDance regulatory disclosures, Kemenparekraf publications, BPS SE2026 methodology.

**Found:** the primary report itself, recovered through the Wayback Machine CDX index after the live host (seaimpactforum.com) was Cloudflare-blocked and the bit.ly redirect failed. 36 pages, 7,847 words, now in the vault as `the-tiktok-effect` with the raw PDF at `research/raw/the-tiktok-effect.pdf`.

**What it changes.** Page 10 carries a nine-country chart titled "creators earning more than minimum wage." The fetcher reconstructed the value-to-country pairing from the PDF's raw text coordinates — necessary because linear extraction scrambles chart labels — and validated the reconstruction against the report's own footnote ("Low base (<n=30): Myanmar (n=26)"), which matched exactly.

| Country | Share of creators earning above minimum wage |
|---|---|
| Laos | 87% |
| Vietnam | 83% |
| Malaysia | 80% |
| Myanmar | 73% *(n=26, low base — report's own flag)* |
| Singapore | 68% |
| **Indonesia** | **63%** |
| Cambodia | 56% |
| Philippines | 40% |
| Thailand | 36% |

Survey fielded August–September 2022; Indonesia n=540 total respondents, with the sub-base for the income question undisclosed.

**Revised verdict, replacing step 6's:**

- **The 63% is traceable to a real instrument.** It is a thin, self-selected survey of active TikTok users, three-plus years old, but it exists, has a stated fielding window and a stated country base. It is no longer correct to call it a figure with no methodology behind it.
- **The 8 million is still an orphan.** It appears nowhere in the primary report, which contains only percentages among respondents and no headcount for any country. Kompas.id (10 July 2024) confirms TikTok Indonesia's communications director attributed it separately to TikTok's own unaudited internal count as of December 2023.
- **The two figures were never one statistic.** They were merged into "8 million / 63%" later, at the DPR hearing and by the Menekraf. That merger is the actual provenance failure, and it is a smaller and more precise claim than the one step 6 committed to.

**Caveats that survive and must travel with the 63%:** undisclosed sub-n for the income question; self-selection to active TikTok users; a single blended US$216/month minimum-wage benchmark that erases Indonesia's provincial UMR variation; and data now three-plus years old.

**Bonus, and it is substantial.** This single recovery supplies per-country figures for nine Southeast Asian countries where step 6 had almost nothing. Thailand at 36% and the Philippines at 40% against Vietnam at 83% and Laos at 87% is a spread the report can actually discuss — with the instrument's weaknesses stated.

**BPS check:** a 13 July 2026 Kompas article confirms SE2026 now explicitly enumerates home-based content creators, but the census closes 31 August 2026 and was 45.17% complete in Jakarta at the article's date. No national count exists yet. The absence hardens rather than resolves.

---

## Gaps 1 and 2 — the two critical opposing biases · **BOTH REAL, NET DIRECTION UPWARD**

### Gap 1 — off-platform income undercounting (pushes the true share UP)

**Found, and it is the cleanest coverage ratio in the corpus:** the UK IPO music study, already in the vault but never read for this specific question, reconciles single-channel income against total income for the same population. **Audio streaming royalties are 6% of the average UK music creator's income; all digital sources combined are 14%; live performance alone is 31%.**

Supporting:
- Rieder et al. 2023 state explicitly that they cannot distinguish channels monetizing solely off-platform from those with mixed income — a methodological absence acknowledged by the source behind the headline 0.043% figure.
- Houssard et al. find sponsorship and affiliate link density of 3.7 against 2.2 for top-2,000 versus external samples, so off-platform income concentrates at the top and the Twitch leak understates top-tier income disproportionately.
- Indonesia's roughly 90% brand-sponsorship income composition remains the regional anchor.

**No source anywhere gives an individual-level platform-to-total ratio for YouTube, Twitch or Patreon specifically.** Only music has one. That is a documented absence the report should state.

### Gap 2 — registration-denominator validity (pushes the true share DOWN, but less than expected)

**Found, two new primaries:**
- **McGrady et al. 2023, "Dialing for Videos"** — the only genuinely random sample of YouTube content. Hand-coded n=1,000 videos: **0.21% showed agreed monetization signals** (2.98% upper bound). Median subscriber count of the posting channel: **4**, against a mean of 55,100. The authors conclude that questions about monetization frequency "are simply not applicable to most videos in a sample like this."
- **Abou El-Komboz, Kerkhof & Loh 2023 (CESifo WP 10363)** — a regression-discontinuity study of YouTube's 2018 Partner Program threshold tightening (n=484 German creators). It surfaces YouTube's own disclosure: of creators expelled for missing the new bar, **99% had earned under $100/year and 90% under $2.50/month** — despite already having cleared the older, looser 10,000-lifetime-views threshold.
- **YouTube Partner Program enrolment:** 2 million members (August 2021) against Rieder's 4.4 million channels with 1,000+ subscribers — roughly **45–50% of eligible channels actually enrol**, a genuine 2x denominator inflation that Rieder flags in a footnote without correcting for.

**Net reading.** Gap 2 is real but bounded: YouTube's own disclosure shows that narrowing the denominator to already-monetized creators does not remove the near-zero-earnings mass — it was already 99% near-zero at a looser threshold. Gap 1 has no precisely measured multiplier for the telemetry platforms, but the one clean analogue implies platform revenue is roughly 14–20% of total income, a potential 5–7x correction if it generalises.

**Consequence for the report: the sub-2% headline must be presented with both corrections named and neither applied silently.** The honest statement is that the true living-wage share among genuine occupational attempts is probably higher than sub-2%, that the magnitude is not precisely known, and that both bias directions have been measured — one at roughly 2x downward on the denominator, one at a plausible but unverified 5–7x upward on the numerator.

---

## Gap 3 — causal income effect on exit · **POSITION STRENGTHENED**

**Found the exact study the gap predicted would exist**, and it points the pipeline's way:

**Andres, Rossi & Tremblay (ZEW Discussion Paper 23-059, December 2023)** — a difference-in-differences quasi-experiment on the 2017–18 YouTube "Adpocalypse" demonetization shock. n=11,371 Patreon creators, 131,006 creator-months, August 2017 to August 2018; treated group is the 85% multi-homing on YouTube and Patreon, controls are Patreon-only. After the income shock, affected creators shifted effort **toward** Patreon — more paid content, more patrons — and the Patreon creator population **grew** around the shock rather than shrinking.

That is evidence against a simple income-shock-causes-exit model and for the structural-access framing: creators with an alternate monetization channel absorbed the shock by reallocating, not by quitting.

Supporting: El-Komboz, Kerkhof & Loh's regression discontinuity finds losing monetization access causally cut uploads by roughly 87% and content diversity by roughly 61% — **a real causal income effect on output, not on exit**. It also yields a bonus attrition datapoint: roughly **46% of an established German creator cohort exited within three years**.

**Notable secondary finding.** Two rigorous gig-economy income-shock natural experiments were found and read — Li, Liu & Sundararajan on a Lyft transparency rollout (47 million rides) and Binns et al. on an Uber UK dynamic-pricing shock (1.5 million trips, 258 drivers). **Neither measures exit.** Both measure hours, take rate and utilisation. Even the best-identified causal designs in the adjacent literature do not test attrition — which is itself worth reporting.

Hall & Krueger's Uber tenure data (n=11,267: 11% inactive within one month, 70% active at six months, over 50% at one year) is descriptive only and carries an Uber-authorship conflict; usable solely as an attrition-shape comparator alongside the Wikipedia and Debian analogues.

---

## Gap 5 — non-English survival telemetry · **ABSENCE SURVIVES, with two valuable proxies**

Searched Chinese (抖音, B站, 快手), Korean (아프리카TV, KCI/DBpia) and Japanese (ニコニコ動画, J-Stage) sources plus English transliterations. **No per-creator survival curve or hazard model exists in any of these literatures either.**

Two near-misses worth citing:
- **Igarashi, Tanaka & Koyama (DiGRA JAPAN, February 2022)** on Niconico — uses the platform's own public quarterly posting and view telemetry, 2007–2021, plus an original Dynata viewer survey (n=3,328 screened, n=1,356 main). Posting-count decline precedes view-count decline by roughly five years, and "creators moved to other services" is the top-cited reason for quitting in every demographic cell (29–42%). Platform-level aggregate telemetry, not individual survival data, but the closest non-English equivalent found anywhere in this run — and it attributes the exodus explicitly to insufficient revenue sharing.
- **Zhang (Cardiff, 2024)** on the 2023 Chinese 停更 ("stop updating") wave on Bilibili — textual analysis of n=1,176 comments, delivering named, dated, quantified quit reasons from creators with millions of followers ("unable to make ends meet financially"; "not profitable, even leading to losses").

---

## Gap 7 — Southeast Asian academic repositories · **THREE GENUINE FINDS, ONE FABRICATION**

Ran local-language repository sweeps across five countries.

**Found:**
- **Thammasat University master's thesis (2024)** on Thai YouTubers — qualitative, n=9 in-depth interviews, with a 2023 rate card by follower tier (5,000–800,000 THB per post, nano through mega) and testimony that channel abandonment is routine. 22,997 words; flagged for source-analyst delegation.
- **UPN Veteran Jawa Timur (2023)**, Indonesia — n=98 top Indonesian YouTube channels sampled via Slovin's formula from N=4,561 SocialBlade-registered channels. RPM range IDR 3,682–58,920 per 1,000 views, roughly 650x income spread **within this elite subsample alone**, and a clean result that views rather than subscriber count drive income (R²=0.950, p=0.001 against p=0.387).
- **MYCreator Pulse Report 2026** (VoxEureka/Vase.ai), n=489 Malaysian creators, tier-stratified — the only Malaysia-specific creator quantitative data found in the entire run. 34% file income tax; in-kind income exceeds cash (46% against 43%); tax compliance rises steeply by tier (18% at nano against 83% at 500k+). Vendor survey, labelled as such.

**Absence confirmed precisely for Vietnam and the Philippines** — zero academic hits despite named repositories (National Economics University, Foreign Trade University, VNU; UP Diliman Iskomunidad, Ateneo, DLSU) and local-language query strings. This null result is auditable and goes into the report.

**One fabrication flagged.** A 2025 Indonesian journal article superficially met every evidence criterion — n=60, stated fielding dates, five-city sample, a full income-distribution table — but its entire 24-item reference list is unrelated STEM material, two in-text-cited comparison studies are absent from its own bibliography, and its two named case-study creators cannot be found on the platforms under their stated handles. Recorded as evidence of paper-mill contamination in the regional creator-economy literature. This is the **second** fabricated source caught in this run, after the phantom "Creator Economy Research Institute."

---

## Gap 6 — recency of core telemetry · **FIGURES ARE DATED, ONE MATERIALLY**

- **TikTok Creator Fund → Creativity Program → Creator Rewards**: dates pinned from TikTok's own newsroom — beta 20 February 2023, US general eligibility 3 May 2023, full replacement of the Creator Fund in the US, UK, France and Germany on **16 December 2023**. Confound worth noting: Creator Rewards requires content over one minute, so pre- and post-cohorts differ in format eligibility as well as rate.
- **YouTube Shorts 45/55 split and Twitch Partner Plus (70/30, effective 1 October 2023)** — already documented in the vault, verified, no change.
- **Substack**: flat 10% platform cut, unchanged; the only dated change is Stripe's recurring-billing fee rising 0.5% to 0.7% effective July 2024, grandfathered to 30 June 2025. Immaterial.

**Answer to the report's framing question:** TikTok's shift is a 10–40x per-view rate change and is large enough to plausibly move the living-wage share. Twitch's Partner Plus and YouTube's Shorts split are meaningful but bounded reallocations among an already-elite subset. Substack's change is noise. The report must date-label its core figures — Regner 2013–2015, Rieder 2019, Twitch leak 2019–2021 — and state that TikTok's economics are not comparable across the December 2023 boundary.

---

## Summary of position changes

| Position | Before step 8 | After step 8 |
|---|---|---|
| Under 2% reach a living wage | committed, medium-high | **qualified** — two measured biases in opposite directions; state both, apply neither silently |
| No platform-scale survival telemetry | medium-high | **high** — investor filings and three non-English literatures now also checked |
| Income does not predict continuation | medium-high | **strengthened** — a DiD on the Adpocalypse finds reallocation, not exit |
| Time to first income is malformed | high | unchanged |
| Indonesian 8M/63% is a marketing claim | committed | **partially overturned** — 63% traces to a real if thin instrument; only the 8M is an orphan; the merger of the two is the actual failure |
| No SEA country meets the evidence floor | committed | **overturned in part** — nine-country TikTok survey data recovered, plus Indonesian (n=98), Malaysian (n=489) and Thai (n=9) studies |
