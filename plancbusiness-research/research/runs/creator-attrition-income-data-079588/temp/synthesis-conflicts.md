# Synthesis conflicts — orchestrator verdicts

Cross-draft numeric audit run over all three drafts, then contested values checked
against the claims table and source note bodies. **No draft contradicts another on
a sourced figure.** One real problem was found, plus three apparent conflicts that
are regex artefacts and need no action.

---

## Conflict 1: the 0.43% living-wage figure is derived, not sourced — MUST BE LABELLED

- **Draft A says:** Rieder's own table moves 0.043% to 0.43% by swapping the threshold alone, a 10x threshold effect isolated inside one study.
- **Draft B says:** 0.43% of 36,142,711 YouTube channels reached roughly subsistence income.
- **Source check:** the claims table contains the 0.043% figure verbatim and attributed — *"only about 15,500 of roughly 36.1 million YouTube channels — 0.043% — average above a US median wage from advertising, and 31.7 million channels (88% of the platform) earn nothing at all"*, supported by the quoted passage *"only a small fraction of channels can expect to earn a living wage from advertising income."* **The literal string 0.43 appears nowhere in the claims corpus.**
- **Verdict:** 0.043% is sourced and may be asserted. **0.43% is a derived figure** — the result of re-reading Rieder's tier table at a lower income threshold. It is a legitimate and useful derivation, but it is the synthesiser's arithmetic, not Rieder's published number.

  **Binding instruction:** wherever 0.43% appears, it must be written in the inference shape the run directives require — naming that it is derived, from which table, and by changing which parameter. Something of the form: *"Reading the same tier table against a minimum-wage rather than median-wage threshold raises that share by roughly an order of magnitude — an arithmetic re-cut of Rieder's published tiers, not a figure Rieder states."* An unlabelled 0.43% will be caught by the citation checker at step 14.5 and is the single most likely factual-accuracy failure in this report.

---

## Conflict 2 (resolved, no action): two different Rieder channel counts

- Drafts variously cite **36,336,861** and **36,142,711** channels.
- **Source check:** these come from two different papers by the same team. 36,336,861 is the 2020 *First Monday* platform census; roughly 36.1 million is the denominator in the 2023 *Social Media + Society* payout analysis. Both are correct for their own study.
- **Verdict:** not a conflict. The synthesiser must keep each number attached to its own study and year, and must not treat them as a discrepancy or reconcile them.

---

## Conflict 3 (resolved, no action): median monthly income figures

- Values of $31, $42, $67, $70, $72, $77 and $127 appear across drafts and looked inconsistent to the scan.
- **Source check:** they belong to different studies and different populations. Zhao et al. report *"On average, the monthly income for all VTubers is $2,667. Yet the income distribution is highly skewed, such that the median monthly income is only $127."* Strauss, Yang & Mazzucato report median monthly Patreon earnings of **$42 to $77** across platforms and years 2018–2024, after excluding everyone earning under $10 a month. Regner's Patreon median peak among active campaigns is **$31**, with a floor of greater than $0 rather than greater than $10.
- **Verdict:** not a conflict — a floor difference. The Regner and Strauss medians differ partly because their inclusion floors differ ($0 versus $10 per month), and that is exactly the kind of detail the report's comparability discipline exists to surface. Keep all three, each with its floor stated.

---

## Conflict 4 (resolved, no action): Southeast Asia percentages

- The scan flagged Indonesia at 60% and 63%, Thailand at 36% and 87%.
- **Source check:** the 60% is TikTok's separate claim that 60% of promotional content supports local products, unrelated to earnings. The 87% is Laos, not Thailand — a window artefact of the scan.
- **Verdict:** not a conflict. The nine-country chart is internally consistent across all three drafts: Laos 87%, Vietnam 83%, Malaysia 80%, Myanmar 73% (n=26), Singapore 68%, Indonesia 63%, Cambodia 56%, Philippines 40%, Thailand 36%.

---

## Citation coverage note for the synthesiser

- **33 sources are cited by all three drafts** — this is the load-bearing core.
- **102 distinct sources are cited across the three drafts combined.**
- **Draft B carries 38 sources neither other draft cites**, almost all of them provenance-chain and recirculation material (Zippia, SignalFire, the Goldman re-baselining, the Awin waves, the burnout recirculation cluster, the DPR hearing record). These are what make heading 6 possible and should not be dropped in synthesis merely because only one draft used them.
- **Draft A uniquely carries** the platform-disclosed layer (YouTube impact report, Substack pricing, TikTok Creator Rewards dates) and the Thai thesis.
- **Draft C uniquely carries** the Uber tenure comparator and the ILO flagship report.
