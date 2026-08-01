# Cross-locus comparisons

Run `creator-attrition-income-data-079588` · six depth investigators, six committed positions.

These five dynamics are the argumentative spine of the report. Each must become a
visible beat in the draft — a paragraph or section that engages the relationship
explicitly, not a one-line gesture.

---

## Tension 1: Whether the report may print a single living-wage number at all

- **Locus `living-wage-share-magnitude`** ([[interim-report-living-wage-share-magnitude]]) commits: the 100–1000× survey-versus-telemetry gap decomposes almost entirely into denominator (5.75×, from Regner's own paired cut), threshold (10×, from Rieder's own table on identical data) and sampling frame — leaving little genuine residual — and the defensible headline for "content creation as an occupation" is **under 2%** of all people who register an account, falling under 0.1% at a US median-household bar.
- **Locus `unit-of-analysis-and-comparability`** ([[interim-report-unit-of-analysis-and-comparability]]) commits: the living-wage figures spanning 0.043% to 63% are **five to six distinct, individually-scoped findings, never a range**, and any single table row implying comparability would be "factually cited but structurally misleading."

- **The cross-locus dynamic:** This is a direct conflict about the report's single most consequential presentational choice, and notably *not* a conflict about facts. Both investigators agree the denominator drives the spread; both identify the same mechanism. They disagree about what a reader can be trusted to do with a headline figure. Locus 1 argues that once the denominator is fixed to "everyone who tried," the question becomes answerable and the answer is under 2%. Locus 6 argues that fixing the denominator is exactly the act that erases the information explaining the disagreement. The tie-breaker is inside Locus 1's own position: its first sentence recommends a matrix and offers the headline only conditionally.

- **How the draft should engage this:** Lead heading 2 with the matrix and the non-comparability crosswalk as the primary device, then permit exactly one headline sentence — but only if it carries its denominator, threshold, and evidence type inline in the same sentence. A bare "under 2% of creators earn a living wage" is forbidden; "across four telemetry datasets, under 2% of all people who registered an account reached roughly US$15,000/year" is required.

- **Calibration:** Locus 1 is medium-high (high on the denominator and threshold arithmetic, which it computed directly from primary data; medium on the sampling-bias component). Locus 6 is high on the crosswalk requirement. **Both name the same condition that would change their minds: a single instrument that harmonises "active monetized creator" across two or more platforms under one definition. None exists in this corpus.** That is a genuine open question and should be flagged as such.

---

## Tension 2: Two of the four deliverables have no answer — but for different reasons

- **Locus `attrition-telemetry-absence`** ([[interim-report-attrition-telemetry-absence]]) commits: no platform-scale creator survival telemetry exists in citable form; creatormap.io is disqualified by an internal sample-size contradiction (97,601 versus 105,891 channels for one cohort), absent methodology and absent authorship; the answer must be assembled from four measurements that measure four different units.
- **Locus `time-to-income-reframe-tenure-vs-output`** ([[interim-report-time-to-income-reframe-tenure-vs-output]]) commits: "time from starting to first meaningful income" is **not a well-posed quantity**; the report should print no number of months and instead give the eligibility-gate / payout-gate / living-wage-floor structure, since three independent measurements find output volume and threshold-crossing, not elapsed tenure, to be operative.

- **The cross-locus dynamic:** Convergence by independent paths — two investigators, different methods, both concluding a required deliverable is unanswerable. But the two absences are **different in kind, and conflating them would be a real error.** Locus 4's is a *data* absence: the quantity is well-defined and the platforms hold the data, they simply do not publish it, and TubeCensus documents precisely why external reconstruction fails (no historical YouTube API, Social Blade capped at top-5,000 and three years). Locus 5's is a *construct* absence: even with perfect data, elapsed time would be the wrong variable, because tenure does not separate successful channels from unsuccessful ones.

- **How the draft should engage this:** Headings 1 and 3 must state their absences in different language. Heading 1 says the measurement is withheld and names who holds it. Heading 3 says the question is malformed and supplies the reframing. Do not merge them into a single "the data doesn't exist" caveat — that would lose the more interesting of the two findings.

- **Calibration:** Locus 4 is high on the creatormap verdict (the internal contradiction is dispositive) and medium-high on the broader absence, explicitly noting it had not exhausted the investor-filing and S-1 angle.

  **UPGRADE — that angle has since been exhausted, and the absence survives it.** A follow-up fetcher checked every plausible disclosure: Bilibili's 20-F reports a twelfth-month retention rate for *users* but not for up-hosts; Kuaishou's Hong Kong prospectus gives monetization and GMV metrics with no creator retention figure; Roblox's S-1 and 10-K give registered-developer counts and DevEx payouts as year-over-year headline growth with no cohort framing; Patreon's *State of Create* is a cross-sectional survey of 1,000 creators, not cohort tracking. One genuine hit exists and it proves the point rather than undermining it: Spotify's *Loud & Clear* discloses that "eight in ten artists who crossed the $100K threshold in 2022 have remained above it every year since" — 80% three-year retention, but of an **earnings tier among already-successful artists**, not of participation among everyone who started. **Locus 4's absence claim should therefore be stated at high confidence in the report**, and the report can say the investor-disclosure channel was checked and named what it found.

  Locus 5 is high on the advice-blog timelines having zero measured basis (verified by direct primary-text inspection) and medium-high on the tenure claim, which rests on two platforms.

  The same follow-up recovered hard numbers for the two closest methodological analogues, which the report should use as comparison cases while stating that both populations are unpaid and therefore have different exit mechanics: English Wikipedia good-faith newcomer survival fell from **35.7% (H1 2004) to 11.3% (H2 2010)** (n=100 newcomers per six-month cohort, 2001–2011); and Debian maintainer cohort tracking found **121 of 216 (55.8%) still active 6.5 years on**, implying a half-life near 7.5 years. These are what a real creator survival curve would look like if anyone published one.

---

## Tension 3: The survival mechanism, applied to Southeast Asia, generates an untestable prediction

- **Locus `quit-driver-money-vs-motivation`** ([[interim-report-quit-driver-money-vs-motivation]]) commits: income level does **not** predict continuation; what predicts persistence is structural, categorical access to monetization infrastructure — agency affiliation in Zhao's Cox model, partner tier in Wollborn's difference-in-differences.
- **Locus `sea-evidence-provenance-and-breadth`** ([[interim-report-sea-evidence-provenance-and-breadth]]) commits: Southeast Asian creators face systematically worse structural access — roughly 90% dependence on brand sponsorship rather than platform ad revenue, a measured 5–6× revenue-per-view gap, and over-representation among channels carrying no monetization link at all — while no SEA attrition data exists in any form.

- **The cross-locus dynamic:** A complication, not a conflict. Locus 2's mechanism combined with Locus 3's context yields a sharp, plausible prediction — if structural access drives survival, and SEA creators have systematically worse structural access, SEA attrition should exceed Western attrition — and the corpus contains **no data capable of testing it**. Neither investigator could have seen this alone: Locus 2 has no SEA evidence and Locus 3 has no attrition evidence. The prediction exists only in the cross-section.

- **How the draft should engage this:** State it explicitly as a labelled inference with its evidentiary status attached, in heading 5. Do not present it as a finding, and do not omit it — an inference this direct, flagged as untested, is more useful to a reader than silence. It also identifies the highest-value study nobody has run.

- **Calibration:** Locus 2 is medium-high that income does not predict continuation (four converging designs, two quasi-causal, none finding a strong direct income effect) but explicitly **low** on what the true distribution of exit reasons looks like, because no instrument samples that population. Locus 3 is high on the Indonesia provenance conclusion and medium-high on the Thailand/Vietnam/Malaysia absence. The inference therefore inherits medium confidence at best and must be worded accordingly.

---

## Tension 4: One evidentiary standard, or two?

- **Locus `sea-evidence-provenance-and-breadth`** commits: Indonesia's 8-million / 63% figure should be reported as **a case study in provenance failure, not cited as an income data point** — traced from TikTok's own June 2023 marketing report, through its communications director in July 2024, to parliamentary testimony in July 2025 where the same official admitted on record he lacked the underlying revenue data, and finally to the Minister of Creative Economy repeating it as a national statistic. The vendor's own methodology summary does not contain the numbers.
- **Locus `living-wage-share-magnitude`** commits: the Western survey figures (Linktree, NeoReach, Goldman Sachs, TikTok Indonesia) are **"not wrong on their own terms"** — they answer a narrower but legitimate question about self-identified full-time creators.

- **The cross-locus dynamic:** An asymmetry of treatment that the report must resolve rather than inherit. The Goldman Sachs chain traced in step 2 — SignalFire venture-capital blog circa 2020, to Zippia SEO listicle in 2023, to Goldman Sachs in 2023 and again 2025, with the professional count held flat at 2.0 million across three years of population growth and the "3% take 90%" statistic being a views-to-revenue transformation error — is **structurally identical** to the TikTok chain. Applying Locus 3's forensic standard uniformly disqualifies Goldman on the same grounds. The only real difference is that the Indonesian chain was traced to completion in this run while the Western ones are more familiar and therefore less interrogated.

- **How the draft should engage this:** Apply one standard. Present both chains side by side in heading 6, and let the symmetry carry the argument — the point is not that Indonesian statistics are unreliable, it is that the entire field's headline figures share a provenance pathology, and familiarity is not evidence. Locus 1's charity toward the Western surveys should be narrowed to what it can support: those surveys are usable as descriptions of their own self-selected samples, and only where they disclose a sample size and fielding date.

- **Calibration:** Locus 3 is high confidence on the Indonesian trace. Step 2's redundancy audit independently traced the Goldman chain to Zippia via Goldman's own exhibit source line. Two independent traces reaching the same structural conclusion make the uniform standard well-supported rather than a rhetorical move.

---

## Tension 5: The quit-reasons evidence samples the wrong population entirely

- **Locus `quit-driver-money-vs-motivation`** commits: what exists is burnout-severity rankings among people who have **not** quit — which disagree with each other, since the "financial instability first" finding comes from one of four instruments and the other three rank a different cause first or do not rank financial causes at all — plus persistence models saying income is not the predictor. **No instrument anywhere has asked a departed creator why they left.**
- **Locus `unit-of-analysis-and-comparability`** commits: every figure must carry a mandatory unit-of-analysis and denominator-scope column, and rows in different comparability classes must never be pooled.

- **The cross-locus dynamic:** Locus 6's discipline, applied to Locus 2's evidence, sharpens the problem from a caveat into a disqualification. The burnout figures do not merely use a different denominator from the one the query asks about — they sample a **different population**. The query asks why creators quit; the instruments sample creators who have not quit and ask them to introspect about a hypothetical. Under Locus 6's crosswalk rules these figures cannot occupy the same table as anything describing actual exit, because there is nothing to compare them to.

- **How the draft should engage this:** Heading 4 must open by naming the population mismatch before presenting a single figure, then report the burnout instruments accurately as what they are — prevalence and severity self-reports among active creators, four instruments, disagreeing — and close with the documented absence, including the near-miss: Sounds Profitable's *The Creators 2025* (n=5,034, census-weighted, US, December 2025) reaches a genuinely lapsed creator population but never asks it why it lapsed, and the authors list that as an open question themselves. Kingsley et al. 2022 recruited both current and former YouTube creators and contains no mention of quitting at all.

- **Calibration:** Locus 2 is medium-high that income does not predict continuation, and explicitly **low** on the distribution of actual exit reasons. That asymmetry should be visible in the draft's language: confident about what does not drive exit, openly ignorant about what does.

---

## Convergence worth naming (not a tension, but load-bearing)

Four of six investigators independently arrived at the same meta-finding by
different routes: **the field's headline statistics are systematically weaker than
their circulation suggests.** Locus 1 found the survey-telemetry gap is mostly
scope artefact; Locus 3 traced a national statistic to a marketing PDF; Locus 4
disqualified the only claimed survival study on an internal contradiction; Locus 5
found the standard monetization timeline has no measured basis whatsoever.
Convergence from four independent paths is stronger evidence than any one of them,
and it justifies heading 6 existing as a section rather than a footnote.

---

# Step 8 revisions — adversarial gap-fill outcomes

Seven gaps attempted. Three committed positions changed. Full log in
`temp/corpus-critic-results.md`.

## Tension 1 revision — the headline figure is now qualified, not overturned

Two opposing biases were hunted and **both were found real**, which means the
sub-2% figure must be published with both named and neither applied silently.

- **Off-platform income undercounting pushes the true share UP.** The UK IPO
  study, re-read for this specific question, reconciles single-channel against
  total income for the same people: audio streaming royalties are **6%** of the
  average UK music creator's income, all digital sources **14%**, live
  performance alone **31%**. Rieder et al. state outright that they cannot
  distinguish channels monetizing solely off-platform. Houssard finds sponsorship
  link density of 3.7 against 2.2 for top-2,000 versus external samples, so
  off-platform income concentrates at the top. If the music ratio generalises,
  the correction is 5–7x. **No individual-level platform-to-total ratio exists
  for YouTube, Twitch or Patreon** — only music has one.
- **Registration-denominator inflation pushes it DOWN, but is bounded.**
  McGrady et al. 2023's genuinely random YouTube sample (hand-coded n=1,000)
  finds **0.21% of videos show monetization signals**, median posting-channel
  subscriber count **4**. YPP enrolment is only ~45–50% of eligible channels.
  But YouTube's own disclosure caps this: of creators expelled by the 2018
  threshold change, **99% had earned under $100/year** despite having cleared
  the older, looser bar. Narrowing the denominator does not remove the
  near-zero mass.

**Engagement guidance unchanged but sharpened:** the matrix remains primary, and
the single permitted headline sentence must now also carry the statement that
both bias directions are known and unquantified for these platforms.

## Tension 2 revision — the attrition absence is upgraded to high confidence

The investor-filing channel and three non-English literatures have now been
checked and the absence survives both. Two proxies worth citing were recovered:
Igarashi et al.'s Niconico study (platform posting/view telemetry 2007–2021 plus
a viewer survey, n=1,356, with "creators moved to other services" cited by
29–42% as the reason for quitting) and Zhang's analysis of the 2023 Bilibili
停更 wave (n=1,176 comments with named, dated quit reasons from
million-follower creators). Neither is a survival curve; both are the closest
non-English equivalents that exist. **State the absence at high confidence.**

A genuine new attrition datapoint also arrived: El-Komboz, Kerkhof & Loh find
roughly **46% of an established German YouTube creator cohort exited within
three years**.

## Tension 3 revision — the SEA prediction is now partly testable

Step 6 recorded that Locus 2's mechanism plus Locus 3's context generated a
prediction with no data to test it. **That is no longer entirely true.** The
recovered TikTok survey supplies above-minimum-wage shares for nine Southeast
Asian countries, and the spread is wide enough to be interesting: Thailand 36%
and the Philippines 40% against Vietnam 83%, Malaysia 80% and Laos 87%, with
Indonesia at 63%. This is not attrition data and does not test the survival
prediction directly, but it does show that "Southeast Asia" is not one
condition — the intra-regional variation exceeds the gap between several of
these countries and Western benchmarks. **The draft must stop treating SEA as a
single case.**

Three national studies also arrived: Indonesia (n=98 top channels, RPM range
IDR 3,682–58,920 per 1,000 views, roughly 650x income spread *within* the elite
subsample, views rather than subscribers driving income at R²=0.950), Malaysia
(MYCreator Pulse 2026, n=489, 34% file income tax, in-kind income exceeding cash
at 46% against 43%), and Thailand (Thammasat thesis, n=9 interviews, with a 2023
rate card by follower tier).

## Tension 4 revision — the symmetry resolved asymmetrically

Step 6 argued both provenance chains should be judged by one standard. That
still holds, but the outcome is now the reverse of what was expected: chasing
the Southeast Asian chain to its primary found **a real survey underneath it**,
while the Goldman chain terminates in a venture-capital blog with no instrument
at any depth. Applying one standard uniformly therefore leaves the Western
figure in worse condition than the Indonesian one. The report should say so —
it is a sharper and more surprising point than the original framing.

The precise charge against the Indonesian figure narrows accordingly: not that
it is marketing, but that **two figures from different sources, years and
methods were merged into one statistic** at the DPR hearing and then repeated
as national statistics.

## Tension 6 revision — the money-versus-motivation position is strengthened

Adversarial search for a causal income effect on exit found the study it
predicted would exist, and it points the other way. Andres, Rossi & Tremblay
(ZEW WP 23-059) run a difference-in-differences on the 2017–18 Adpocalypse
demonetization shock across n=11,371 Patreon creators and 131,006
creator-months: after the shock, affected creators **shifted effort toward
Patreon and the creator population grew rather than shrank**. Creators with
structural access to an alternate channel reallocated instead of quitting.

Also notable and worth a line in the report: two rigorous gig-economy
income-shock natural experiments were located — a Lyft transparency rollout
(47 million rides) and an Uber UK pricing shock (1.5 million trips, 258
drivers) — and **neither measures exit**. Even the best-identified causal
designs in the adjacent literature do not test attrition.

## New standing caution — a second fabricated source was caught

A 2025 Indonesian journal article matched every evidence criterion on its face
(n=60, stated fielding dates, five-city sample, full income-distribution table)
but its entire 24-item reference list is unrelated STEM material, two in-text
citations are absent from its own bibliography, and its named case-study
creators do not exist under their stated handles. This is the **second**
fabrication caught in this run, after the phantom "Creator Economy Research
Institute." The draft should treat this as a finding about the field's
information environment, not merely as a note-keeping detail.
