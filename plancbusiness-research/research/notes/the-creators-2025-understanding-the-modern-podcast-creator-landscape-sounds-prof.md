---
title: 'The Creators 2025: Understanding the Modern Podcast Creator Landscape (Sounds
  Profitable / Signal Hill Insights, full report PDF)'
id: the-creators-2025-understanding-the-modern-podcast-creator-landscape-sounds-prof
tags:
- creator-attrition-income-data-079588
- locus-quit-driver-money-vs-motivation
- lapsed-creator-survey
- podcast-creators
- exit-survey-candidate
created: '2026-07-27T17:27:39.399829Z'
updated: '2026-07-27T17:52:27.144708Z'
source: https://soundsprofitable.com/wp-content/uploads/2025/11/TheCreators2025FinalReport.pdf
status: evergreen
type: note
tier: practitioner
content_type: dataset
deprecated: false
summary: Nationally weighted US survey of 5,034 podcast consumers (Signal Hill Insights,
  Dec 2025) explicitly measures a lapsed/quit-creator subpopulation (6% of base, 50%
  the size of active creators, 32% overall churn rate) cross-tabbed by demographics
  -- the closest instrument found to a genuine already-quit creator survey -- but
  the report does not present directly-elicited reasons for quitting; its 'format
  friction' explanation is inferred from demographic-proxy matching and the authors
  explicitly flag 'what specific factors drive creator abandonment' as unanswered.
---

Suggested by [[the-creators-2025-sounds-profitable]] fetcher note (landing page teaser); full downloadable report PDF linked from that page (creator-attrition-income-data-079588).

# The Creators: Understanding the Modern Podcast Creator Landscape — U.S. 2025

Sounds Profitable, sponsored research report, published December 10, 2025. Full report PDF: https://soundsprofitable.com/wp-content/uploads/2025/11/TheCreators2025FinalReport.pdf (landing page: https://soundsprofitable.com/research/the-creators-2025/). Presenter/author credited: Tom Webster.

Note on provenance: the hyperresearch crawler could not render the PDF (it triggers a forced-download response and a bare `HTTP 403` on the automated browser path); the file downloaded cleanly via direct curl with a standard browser user-agent (41 pages, 2.53MB, PDF 1.7) and its text was extracted with pypdf, then filed manually via `hyperresearch note new`.

## Methodology (verbatim from report, page 2)

"In 2025, Sounds Profitable partnered with Signal Hill Insights to field an online study of 5,034 Americans aged 18+ — the largest public study of podcast creators in the United States. Respondents were asked about their podcast creation experience, including format choices (audio-only, video-only, or multi-format), consumption patterns, and reasons for starting or stopping. The sample was weighted to the most recent census data to be representative of the US population. This research expands on the original 2022 'The Creators' study with deeper demographic analysis. All Creator questions were asked to respondents who had ever consumed a podcast, representing 75% of the US population 18+."

**This is the single instrument found in this search that most closely resembles the missing exit-survey instrument**: it explicitly recruits and quantifies a population of self-identified LAPSED (already-quit) podcast creators as part of a nationally weighted sample, not merely active creators asked hypothetically. See "critical caveat" section below, however — the reasons data is NOT reported in the published deck.

## Key quantitative findings (verbatim numbers)

- Overall creator landscape: 17% of respondents (base: have ever consumed a podcast, 75% of US 18+) have podcast creation experience. Of these: 12% Active Creators, 6% Lapsed Creators (i.e., 12% active + 6% lapsed of the base population; lapsed = "50% of the active creator base" — for every two active creators, one has quit).
- Overall churn/retention: 32% churn rate (1 in 3 who started have stopped), 68% retention rate, among everyone who has ever created a podcast.
- Churn rate varies sharply by demographic (Full Data Table, p.40): Asian 23%, Black 27%, ages 35-54 27%(reported as 31% in one table)/31%, Female 31%, Overall 32%, White 33%, Male 33%, Hispanic 35%, ages 55+ 40%, LGBTQ+ 40%.
- Retention rate (inverse): Asian 77%, Black 73%, Female 69%, Overall 68%, Male 67%, Hispanic 66%, ages 55+ 60%, LGBTQ+ 60%.
- Format: 71% of active creators now incorporate video, 65% incorporate audio; format distribution among active creators is 29% audio-only, 35% video-only, 36% multi-format — "no single approach dominates."
- Gender gap concentrated at entry not retention: 15% of men vs. 8% of women are active creators (entry gap), but retention rates are comparable/better for women (67% male vs. 69% female retention).
- Full churn/retention data table (p.40, "Base: Podcast Consumers"): Male: Active 15%, Lapsed 8%, Total 23%, Churn 33%, Retention 67%. Female: Active 8%, Lapsed 4%, Total 12%, Churn 31%, Retention 69%. Age 18-34: Active 17%, Lapsed 8%, Total 25%, Churn 32%, Retention 68%. Age 35-54: Active 13%, Lapsed 6%, Total 19%, Churn 31%, Retention 69%. Age 55+: Active 4%, Lapsed 3%, Total 7%, Churn 40%, Retention 60%. Hispanic: Active 18%, Lapsed 10%, Total 28%, Churn 35%, Retention 66%. Black: Active 16%, Lapsed 6%, Total 22%, Churn 27%, Retention 73%. Asian: Active 12%, Lapsed 4%, Total 16%, Churn 23%, Retention 77%. White: Active 9%, Lapsed 4%, Total 13%, Churn 33%, Retention 67%. LGBTQ+ Yes: Active 12%, Lapsed 8%, Total 20%, Churn 40%, Retention 60%. LGBTQ+ No: Active 11%, Lapsed 5%, Total 16%, Churn 32%, Retention 68%.

## The report's causal hypothesis for quitting: "format friction" (inferential, NOT directly measured)

The report's central explanatory narrative for why creators quit is a "Format Mismatch Hypothesis" (p.23-27): lapsed creators' demographic profile closely resembles video creators (matching in 9 of 12 demographic segments; "36% weighted similarity to video vs. 26% to audio"), but lapsed creators' media-CONSUMPTION behavior over-indexes on audio formats (7 of 8 audio media types), and 51% of lapsed creators say they listen to YouTube podcasts as audio-only, while only 0.8% of lapsed creators expect a podcast to be "video-only." The report's inferred narrative: lapsed creators likely tried to produce video content (which is more production-intensive) despite preferring to consume audio, creating "format friction" — "higher production demands of video, creating content they would not consume, disconnect between effort and reward" — leading to burnout and abandonment.

**Critical caveat, explicitly flagged by the report itself (p.11, footnote) and directly relevant to the fetcher task's exit-survey hunt**: "Format data for lapsed creators was not captured directly; this analysis infers likely production format from demographic patterns." In other words, despite the methodology stating respondents were asked "reasons for starting or stopping," **the published report does not present any directly-elicited self-reported reasons for quitting** (no income/money-vs-motivation/burnout breakdown by first-person response is shown anywhere in the deck) — the "format friction" explanation is a demographic-proxy inference, not a quote or coded response from lapsed creators themselves. The report's own final slide (p.34, "Questions for Further Research") explicitly lists as an OPEN, UNANSWERED question: "What specific factors drive creator abandonment?" alongside "What would bring lapsed creators back?" and "How does monetization affect sustainability?" — confirming the underlying reasons-for-quitting data, even though it may have been collected in the raw survey instrument, was not analyzed or published in this report.

Scope note: this is a survey of AMERICAN PODCAST creators/consumers specifically (not YouTube, Twitch, or general influencers), fielded by a for-profit podcast-ad-tech research outfit (Sounds Profitable) with a "Sponsored by" tag on every slide (sponsor not named in extracted text), which is a conflict-of-interest / methodology-transparency flag for the vault (industry vendor research, not peer-reviewed).

## Bottom line for the exit-survey hunt

This is the closest thing found in this search to a genuine "surveyed people who already quit" instrument — a nationally weighted 5,034-person US sample that explicitly measures and cross-tabs a lapsed/quit creator subpopulation (6% of the base, 50% the size of the active creator base) by demographics, format, and consumption behavior. However, it does NOT deliver self-reported reasons for quitting (specifically no income-vs-motivation breakdown); its "format friction" mechanism is inferred from demographic-proxy matching, not measured directly, and the authors flag "what specific factors drive creator abandonment" as an open research question they could not answer with this data.
