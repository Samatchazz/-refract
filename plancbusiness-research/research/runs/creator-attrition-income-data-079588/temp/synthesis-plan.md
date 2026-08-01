# Synthesis plan

## Core thesis (1–2 sentences)

Content creation as an occupation has been measured far less than the volume of
published statistics suggests: the four quantities the query asks about resolve
into a small set of real measurements that do not share a unit of analysis, plus
three audited absences — no platform-scale survival telemetry, no calendar-time-
to-income distribution, and no instrument anywhere that has asked a departed
creator why they left. Where measurement does exist it converges: the mean is
4–21x the median on every platform measured, and the share reaching a living
wage is a fraction of one percent of everyone who registered, against survey
figures an order of magnitude or two higher that describe a pre-filtered
population and must never be presented as the same quantity.

## The strongest argumentative beats

1. **The gap is scope arithmetic, not disagreement** — from Draft A and Draft C.
   Two studies demonstrate this inside their own data: Regner's paper reports the
   same ~250 creators as both "top 1% of active campaigns" and "0.18% of all
   registered" (a 5.75x denominator effect), and Rieder's tier table moves by
   roughly an order of magnitude when only the income threshold changes. This is
   the report's most useful single insight and it must appear early.

2. **Three absences, and they are different in kind** — from Draft A and Draft B.
   The attrition absence is a *data* absence (platforms hold it and do not
   publish; TubeCensus documents why external reconstruction fails). The
   time-to-income absence is a *construct* absence (elapsed time is the wrong
   variable — tenure does not separate successful channels from unsuccessful
   ones). The quit-reasons absence is a *population* absence (every instrument
   samples people who have not quit). Do not merge them into one caveat.

3. **The two provenance chains, judged by one standard** — from Draft B. The
   Western population figure traces SignalFire venture blog to Zippia listicle to
   Goldman 2023 and 2025 to global press, with the professional count held flat
   at 2.0 million while the total grows, and the definition of "professional"
   silently changing from ">$100,000/year" to self-identification. The Southeast
   Asian figure, chased to its primary, turned out to have a real survey
   underneath it. The symmetry resolves *against* the Western figure — a
   surprising result that should be stated plainly.

4. **Southeast Asia is not one condition** — from Draft C. One instrument, one
   fielding window, nine countries, a 51-point spread: Thailand 36%, Philippines
   40%, Cambodia 56%, Indonesia 63%, Singapore 68%, Myanmar 73% (n=26), Malaysia
   80%, Vietnam 83%, Laos 87%. The intra-regional variation exceeds the gap
   between several of these countries and Western benchmarks.

5. **Two opposing biases, both measured, neither applied silently** — from Draft
   C. Off-platform income undercounting pushes the true share up (UK IPO: audio
   streaming is 6% of the average music creator's income, all digital 14%, live
   performance 31%). Registration-denominator inflation pushes it down (McGrady's
   random sample: 0.21% of videos monetized, median posting-channel subscriber
   count 4; YPP enrolment ~45–50% of eligible). YouTube's own 2018 disclosure
   caps the second — 99% of expelled creators had earned under $100/year despite
   clearing the older, looser bar.

6. **Income does not predict who continues; structural access does** — from all
   three. Zhao's Cox model finds affiliation significant and hours streamed not;
   Wollborn's difference-in-differences finds a threshold effect at partner
   status; and the Adpocalypse natural experiment (n=11,371 Patreon creators)
   found creators *reallocated* to another channel rather than exiting, with the
   population growing around the shock.

7. **The field's information environment is itself a finding** — from Draft B.
   Two fabricated sources were caught during this research: a phantom "Creator
   Economy Research Institute" credited with two separate studies, and a 2025
   Indonesian journal article whose entire reference list is unrelated STEM
   material. Report as a finding about the field, not as housekeeping.

## Section structure

The six required H2 headings from the decomposition, verbatim and in order. No
additional H2s. An unlabelled opening paragraph before heading 1 carries the
direct answer.

## Per-section commitments

### 1. Attrition and Survival Rates of Creators and Channels
- Evidence: Zhao (n=1,923 VTubers, median career 24 months, >50% stopped within
  three years), Regner (82.6% of 139,366 campaigns never funded), El-Komboz
  (~46% of an established German cohort exited within three years), Kässi
  (8.6% of 163M accounts ever worked), Houssard (elite ranking flux).
- Beat: absence #1, stated as a first-order finding with the investor-filing
  channel named as checked. Wikipedia (35.7% to 11.3%) and Debian (121 of 216
  active at 6.5 years) as the closest measured analogues, with their unpaid-
  population caveat.
- Do not cite the disqualified vendor survival study as evidence.

### 2. Income Distribution: Median vs Mean and the Living-Wage Share
- Evidence: the full telemetry set plus the survey layer, in separate tables.
- Beat: beat 1 (scope arithmetic) and beat 5 (two opposing biases). The
  non-comparability crosswalk lives here.
- Binding: the 0.43% figure must be written in the inference shape — see
  `synthesis-conflicts.md`, Conflict 1. This is the highest-risk sentence in the
  report.

### 3. Time from Starting to First Meaningful Income
- Evidence: platform-disclosed gates, the $100 payout floor, vidIQ's threshold
  cohort (89% under 5,000 monthly views), Rieder's constant days-active finding.
- Beat: absence #2, stated as a construct absence with the reframing supplied.
  The advice-blog 3–18 month figures are reported as having no measured basis,
  with that verdict stated rather than the figures repeated.

### 4. Documented Reasons Creators Give for Quitting
- Evidence: the four burnout instruments named individually with their samples,
  Törhönen's significance results, Zhao's and Wollborn's models.
- Beat: absence #3 (population mismatch) stated BEFORE any figure, then beat 6.
  Sounds Profitable reaches the right population and never asks the question;
  Kingsley recruited former creators and never mentions quitting.

### 5. Geographic Scope and Southeast Asia
- Evidence: the nine-country chart, the three national studies (Indonesia n=98,
  Malaysia n=489, Thailand n=9), ADBI living-wage denominators, the RPM gap, the
  53.6% no-country-flag finding, the Vietnam/Philippines documented absences.
- Beat: beat 4. Also the untested prediction (worse structural access implies
  higher attrition, with no SEA attrition data to test it) labelled as an
  inference.

### 6. Evidence Quality and Measurement Caveats
- Evidence: both provenance chains, the recirculation arithmetic, the two
  fabrications, the ILO measurement-infrastructure finding (40 of 133 countries;
  no standard before ICLS 2028).
- Beat: beat 3 and beat 7.

## Where drafts disagreed

- **Whether a single headline living-wage number may be printed.** Draft A and B
  print one; Draft C argues any single number is structurally misleading.
  **Commit to a hybrid:** the matrix is primary and appears first, and exactly one
  headline sentence is permitted — but it must carry its denominator, threshold
  and evidence type inline in the same sentence. A bare "under 2% of creators
  earn a living wage" is forbidden.
- **How harshly to treat the Indonesian figure.** Draft B's angle pushed toward
  dismissal; the recovered primary shows the 63% rests on a real instrument.
  **Commit to the corrected reading:** the 63% is citable with its caveats, the
  8-million headcount is an orphan, and the merger of the two is the failure.
- **No factual conflicts.** See `synthesis-conflicts.md` for the four items
  checked and their verdicts.

## Length target

- response_format: `structured` (band 2,000–5,000 words)
- **Pass 1 target: ~4,600 words.** Pass 2 target: **3,800–4,200 words, and under
  4,500 in all cases.** All three input drafts run ~5,000–5,500 words; pass 2
  must cut, not grow. The ship gate fails anything materially over target, so
  length discipline here is cheaper than rework later.
- Tables carry a large share of the content and are the right device for the
  four-field requirement. Prefer cutting prose over cutting table rows.
