# Handoff — where things stand (9 Nov 2026, written before Mat moved to a new PC)

Read `CLAUDE.md` (rules, layout) and `docs/BACKLOG.md` (what is really left) first. This file is the short "where were we".

## Done
- **Pipeline moved off Cowork** (18 Sep): toolkit v4.1.11 runs unchanged; selftest 56/56; `tools/mkset.py` ≡ Cowork original on 153/153 sets.
- **Transport = bridge through Mat's logged-in Chrome tab** (no application password, Mat's choice). `kn/node/bridge.mjs` + `bridge-page.js`.
  Mat's bookmarklet never worked; the tab is attached via Claude in Chrome: open kinnom.co/wp-admin, fetch
  `http://127.0.0.1:47321/page.js?token=<state/bridge-token>` and eval it, while a desk process is running.
- **Captions from Google Docs with no login** (`kn/node/caps.mjs`): Oct 2024 85/85 checksum-identical, 8.7 s, 0 tokens.
- **Recategorisation of 1,490 posts — LIVE, finished 22 Sep.** Rule approved by Mat: one product category (Snack 11 / Food 15 / Drinks 3655)
  + 7-11 (3540, tag 21) + Cafe 12 only for independent cafés (chains like Starbucks / Café Amazon are NOT Cafe — Mat's definition).
  Verified 1,490/1,490 against the live API. Rollback: `node kn/recat/apply.mjs --rollback` (needs `recat/apply-log.jsonl` — keep it).
- **Month guard** in `kn/node/run-set.mjs` (28 Sep): refuses a set in a month that already has backfill posts this pipeline didn't start.
  Added after I wrongly proposed May 2025 (already published by Cowork). Tests 11/11.

## Not done — waiting on Mat
1. Fix the source bug `categories:[12]` (tools/mkset.py line ~248, kn/node/bridge-page.js line ~51, and Cowork's own mkset). Mat has not said go.
2. Decide who uploads Dec 2023 (Cowork or this pipeline). They must not run at the same time (one toolkit per Chrome).

## Not built yet (needed before this pipeline can upload a month)
Slack intake for a month · folder map + photo listing script (URLs verified, no login) · contact-sheet generator + slim photo-plan prompt ·
Brand Sheet for the month (reuse Cowork's mkrows/mkhtml in work/) · month-page creation + hub anchor jobs. Estimate: half to one day, offline.

## Real backlog
Apr–Dec 2023: 628 Slack rows, site has 1 post. Cooking: 356 rows (Cowork's figure, unchecked). First test month: **Dec 2023** (54 rows;
≈13 rows by Baifern, who left — check her folders first). Never pick a month from `work/*-items.tsv` (stale since 17 Sep); count on the site.

## New PC checklist
- Node ≥ 24, Python 3.10+ with Pillow; run Python tools with `PYTHONUTF8=1`.
- Copy this whole `kinnom/` folder (incl. `state/` and `recat/`). Keep the same path `Z:\Claude Code\kinnom` if possible.
- Copy Claude's memory folder `C:\Users\<user>\.claude\projects\Z--Claude-Code\memory\` (folder name is derived from the project path).
- Chrome logged in to kinnom.co/wp-admin; toolkit lives in that Chrome's localStorage `kntk` — a new Chrome profile does NOT have it.
  If missing: build it with `node kn/node/build-toolkit.mjs` and load `kn/node/toolkit/kntk-4.1.11.js` into localStorage `kntk` (sha256 next to it).
- `kn/node/secret.mjs` (DPAPI) is unused and its store cannot move between PCs anyway.
- Smoke test: `node kn/node/selftest.mjs` (56/56) and `node --test "kn/test/*.test.mjs"` (11/11), then `node kn/node/preflight.mjs` with the tab attached.
