# Backlog — what is left (corrected 28 Sep 2026, measured on the live site)

**Correction.** The 17 Sep version of this file counted every month from Jun 2022 to Aug 2024 as "not started" (≈1,993 rows, 27 months).
That was wrong: it compared against Slack only. The live site already has posts for most of those months, published by the site's
original process before the backfill existed. Cowork pointed this out on 28 Sep; the table below is the check against the site.

Method: public REST API, posts per calendar month (`x-wp-total`), status publish. "backfill" = posts containing the `kn-record`
table that only the backfill generator writes.

| months | Slack rows | posts on site | backfill posts | status |
|---|---|---|---|---|
| Jun 2022 – Mar 2023 | 778 | 890 | 0 | covered by the original site — not backlog |
| **Apr – Dec 2023** | **628** | **1** | **0** | **the real gap** |
| Jan – Jun 2024 | 407 | 548 | 0 | covered by the original site — not backlog |
| Jul 2024 → Sep 2026 | — | — | yes | backfilled by Cowork (e.g. Jul 2024 70, Aug 2024 88, May 2025 86 on page 56069) |

Per month in the gap (Slack rows): Apr 82 · May 83 · Jun 76 · Jul 67 · Aug 55 · Sep 65 · Oct 75 · Nov 71 · **Dec 54**.
Cowork also lists **cooking: 356 rows** — not yet checked here.

**Total remaining ≈ 984 rows** (628 + 356).

## Do not trust `work/*-items.tsv` for "done"
Those queue files are a snapshot of 17 Sep and some were never updated by Cowork (May/Jun 2025 show 0 done; the site has them).
`kn/node/run-set.mjs` now refuses to open a set in any month that already has backfill posts it did not create itself (month guard,
tested in kn/test/bridge.test.mjs). Always check the site, not the queue file.

## First month to run through the new pipeline
**Dec 2023** (54 rows, smallest of the gap; Cowork's suggestion, confirmed: 0 posts on the site). Posters: Ked, Nooknik, Baifern —
Baifern has left the channel, so her folders must be checked first (≈13 rows).

## Cost of what is left (estimates)
Per row: Cowork ≈58K Sonnet tokens (Oct 2024) or ≈49K (Jul 2024, after D27); new pipeline ≈19K at start, ≈9–12K after slimming prompts.
| | Cowork | new pipeline |
|---|---|---|
| 984 rows | ≈48–57M | ≈18M at start → ≈9–12M |
