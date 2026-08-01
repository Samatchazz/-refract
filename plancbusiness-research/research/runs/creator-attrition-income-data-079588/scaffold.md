# Scaffold — creator-attrition-income-data-079588

*Private planning document. MUST NOT appear anywhere in the final report.*

## User Prompt (VERBATIM — gospel)

> Quantitative evidence on content creation as an occupation. Cover only measurable findings: attrition and survival rates of creators and channels over time (how many stop, how soon), income distribution across creators (median vs mean, what share earns a living wage), time from starting to first meaningful income, and documented reasons creators give for quitting. Report every figure with sample size, year, platform, and country. Explicitly flag which findings are US/Western-only and may not generalize to Southeast Asia.

## Run config

| Field | Value |
|---|---|
| vault_tag | `creator-attrition-income-data-079588` |
| query_file_path | `research/runs/creator-attrition-income-data-079588/query.md` |
| run_dir | `research/runs/creator-attrition-income-data-079588/` |
| scale gear | `full` (55–80 sources, ~1.5–2.5 h) |
| modality | **collect** (secondary: compare) |
| tier | *filled in after step 1* |
| final report path | `research/notes/final_report_creator-attrition-income-data-079588.md` |

## Modality classification rationale

**collect.** The query is explicitly enumerative: it names four measurable domains
(attrition/survival, income distribution, time-to-first-income, documented quit
reasons) and demands per-figure metadata fields (sample size, year, platform,
country). The instruction "Cover only measurable findings" forecloses the
speculative/argumentative register — the deliverable is a well-fielded evidence
inventory, not a defended thesis.

Secondary **compare** element: the final requirement ("flag which findings are
US/Western-only and may not generalize to Southeast Asia") asks for an explicit
geographic-generalizability contrast. This is a per-finding annotation plus a
consolidated section, not a full comparative treatment.

Drafting consequence: prefer tables with named fields over prose paragraphs.
Every numeric claim carries its provenance inline. Where evidence is absent
(e.g. no SEA-specific survival curve exists), say so explicitly rather than
substituting a Western proxy silently.

## Coverage domains (pre-decomposition sketch — step 1 owns the authoritative version)

1. **Attrition / survival** — channel and account survival curves, dormancy
   rates, cohort persistence, upload-cessation rates; by platform (YouTube,
   TikTok, Twitch, Instagram, Substack, Patreon), by cohort year.
2. **Income distribution** — median vs mean earnings, Gini / top-decile share,
   share earning above a living-wage threshold, share earning $0; platform payout
   program data, survey data, tax/administrative data.
3. **Time-to-first-meaningful-income** — months/uploads to monetization
   threshold, time to first payout, time to a defined income floor.
4. **Documented quit reasons** — survey-elicited reasons (burnout, income
   insufficiency, algorithm change, harassment, time cost), with instrument and
   sample described.
5. **Geographic scope audit** — which of the above rest on US/Western samples;
   what SEA-specific evidence (Indonesia, Philippines, Thailand, Vietnam,
   Malaysia, Singapore) exists; where PPP / living-wage thresholds differ enough
   to break transfer.

## Evidence-quality posture

- Prefer administrative / platform-disclosed / peer-reviewed panel data over
  vendor marketing surveys (Influencer Marketing Hub, NeoReach, etc.). Vendor
  surveys may be cited but MUST be labelled as such with sample size and
  self-selection caveat.
- Every figure needs: **sample size, year, platform, country**. A figure that
  cannot be given all four is either annotated as incomplete or dropped.
- Distinguish *survey self-report* from *measured platform telemetry* — they
  disagree systematically on income.

## Wrapper requirements

None. No `research/prompt.txt`, no `research/wrapper_contract.json`.
Default save path and citation format apply.

## Tier rationale

**`full` tier, `structured` response format, `survey` register, `deep` inference depth.**

Tiered up to `full` because the query spans four measurable domains plus a
geographic-transferability audit, over a literature where the two dominant
evidence types — platform telemetry and self-selected creator surveys —
systematically disagree on the same quantities. Without adversarial review the
predictable failure is laundering vendor marketing survey numbers as
measurements; the critic suite exists precisely to catch that. `light` would
produce a fast answer built almost entirely from the vendor-survey layer that
ranks highest in web search.

Format is `structured` rather than `argumentative` because the prompt is
explicitly enumerative ("Cover only measurable findings"; "Report every figure
with sample size, year, platform, and country") and requests no verdict.
Coverage and per-figure provenance beat argumentative density here — hence the
same reasoning sets `register: survey` at high confidence.

`inference_depth: deep` because two required deliverables have no ready answer
on the clear web: the living-wage share (requires joining an income distribution
to a country-specific, PPP-aware threshold) and Southeast Asian creator
statistics (gray literature, national statistics offices, non-English sources).
Reporting the shape of the absence is part of the deliverable, not a failure.
