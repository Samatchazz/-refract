# Coverage Matrix — query phrase → atomic item mapping

Run: `creator-attrition-income-data-079588`
Source of truth: `research/runs/creator-attrition-income-data-079588/query.md`

## Pass 1

| Query phrase (verbatim) | Mapped atomic item(s) | Scope check | Gap? |
|---|---|---|---|
| "Quantitative evidence" | scope_conditions[0] — quantitative only | OK — forecloses qualitative padding | No |
| "content creation" | entities: content creators (persons); platform entities YouTube / TikTok / Twitch / Instagram-Facebook / Patreon-Substack / OnlyFans | OK — broad reading preserved (video, short-form, live, written, audio, UGC). Guarded against YouTube-only collapse by scope_conditions[4] | No |
| "as an occupation" | scope_conditions[1] | AMBIGUOUS REFERENT — could mean (a) full-time job or (b) any income-seeking creative work. **Both readings encoded**; decomposition explicitly forbids narrowing to full-time | No |
| "measurable findings" | scope_conditions[0] | OK | No |
| "attrition ... rates" | sub_questions[0] | OK — person-level | No |
| "survival rates" | sub_questions[1] | OK — account-level | No |
| "of creators and channels" | entities: "content creators (persons)" AND "channels / accounts"; scope_conditions[2] | OK — two distinct units of analysis, both required, conflation explicitly forbidden | No |
| "over time" | sub_questions[0], [1] — cohort/longitudinal framing; time_horizons recency note | OK — survival curves, not point-in-time snapshots | No |
| "(how many stop, how soon)" | sub_questions[0] (magnitude) + [1] (timing) | OK — both the rate and the latency are demanded | No |
| "income distribution across creators" | sub_questions[2] | OK — distribution shape, not just a central value | No |
| "median vs mean" | sub_questions[2]; required_formats[3] | OK — both statistics required side by side | No |
| "what share earns a living wage" | sub_questions[3]; entity "living wage" | OK — and the operational-definition + country-threshold requirement is captured as a required field | No |
| "time from starting to first meaningful income" | sub_questions[4]; entity "meaningful income" | OK — three candidate operationalizations enumerated (monetization eligibility / first payout / income floor) so no single narrow reading dominates | No |
| "documented reasons creators give for quitting" | sub_questions[5] | OK — "documented" + "creators give" pins this to self-report instruments with a stated sample, not analyst speculation | No |
| "Report every figure with sample size, year, platform, and country" | required_formats[0], [1]; scope_conditions[3] | OK — four-field contract, plus an explicit rule for figures that cannot satisfy it | No |
| "Explicitly flag" | required_section_headings[4]; required_formats[2] | OK — both a dedicated section and a per-finding annotation | No |
| "which findings are US/Western-only" | sub_questions[6]; entity "United States / Western economies" | OK — "Western" read broadly (US, Canada, UK, EU, ANZ), not US-only | No |
| "may not generalize to Southeast Asia" | sub_questions[6], [7]; entity "Southeast Asia" | OK — full ASEAN enumeration, explicitly guarded against single-country collapse; positive SEA evidence sought, not just an absence disclaimer | No |

## Scope-narrowing audit (the specific failure mode this matrix exists to catch)

| Phrase at risk | Natural (broad) scope | Would a narrow reading be wrong? | Where the broad reading is pinned |
|---|---|---|---|
| "content creation" | all monetizable UGC formats and platforms | Yes — YouTube-only would misrepresent the occupation | `scope_conditions[4]`, six platform entities |
| "creators" | professionals AND part-timers/aspirants | Yes — sampling only full-timers is the survivorship trap the query is implicitly probing | `scope_conditions[1]`, entity scope_note |
| "as an occupation" | income-generating work at any intensity | Yes | `scope_conditions[1]` |
| "Southeast Asia" | 11 ASEAN-region countries | Yes — Indonesia-only or Singapore-only is not SEA | entity scope_note |
| "living wage" | country-specific, PPP-aware threshold | Yes — a US$ threshold applied to SEA is a category error | entity required_fields |
| "meaningful income" | any of three operationalizations | Yes — "monetization eligibility" alone is not income | entity required_fields |
| "channels" | account-level unit, distinct denominator | Yes — merging into creator-level inflates or deflates attrition | `scope_conditions[2]` |

## Verdict

**Zero `Gap? = YES` rows.** Every significant noun phrase in the verbatim query maps to at least one atomic item, and every phrase with multiple plausible referents has both readings encoded. Proceed to step 2.
