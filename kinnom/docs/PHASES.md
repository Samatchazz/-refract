# Migration plan: Cowork → Claude Code on Mat's PC

## Phase 1 — offline foundation ✅ (18 Sep 2026; no credentials, no network writes, nothing on the site touched)

| deliverable | proof |
|---|---|
| Cowork `~/work` tree imported read-only into `work/` (9,071 files; 115 symlinks skipped — shortcuts only) | `tar` listing vs `find` |
| Toolkit v4.1.11 rebuilt from `toolkit.pack.src.js` + patches 4.1.9/10/11 | `node kn/node/build-toolkit.mjs` → 60,093 chars; source sha256 `82df25f6cc1ca961` = the value recorded in RESUME.md |
| The unchanged toolkit runs under Node | `node kn/node/selftest.mjs` → `✅ ผ่านทั้งหมด 56 ข้อ`, 0 real network requests (tag names + `users/me` answered from local fixtures) |
| The pass is real, not vacuous | `kn/test/safety.test.mjs`: with `__vtrace` neutered the selftest fails |
| Rule 5 enforced in the transport; writes never retried; HTML reply on a write = hard stop | `node --test "kn/test/*.test.mjs"` → 3/3 |
| `tools/mkset.py` ≡ Cowork original | `python kn/test/regress_mkset.py` → 153/153 sets agree on exit code, gate errors, build.js, open.js |
| One prompt template per kind | `python kn/prompts.py check` → renders Oct/Nov/Dec 2024 FILL-SPEC and Oct/Nov CLASSIFY byte-for-byte |
| Month status without RESUME/DELTA docs | `python kn/status.py` |

Finding worth knowing: 101 of the 153 historical sets are rejected by *today's* gates (48 still reproduce their historical
build.js byte-for-byte, 4 pass with a different build.js). The Cowork original rejects them identically — the gates were tightened on 12 Sep 2026
(brand canon R4b, automatic brand tag R3b) after those sets were published. Not a migration problem; it does mean old
specs cannot be replayed as-is, and ~100 sets of already-published posts carry pre-canon brand spellings (brand canon debt, brief §5).

Not yet built (deliberately, needs phase-2 access to test honestly): the set runner that replaces the operators' runbook, the image
adapter (`__up1`), Drive/Docs fetch, contact-sheet generator.

## Measured 18 Sep 2026 — Google needs NO credential from Mat's PC

The team shares docs/folders as "anyone with the link". From this PC, without any login or cookie:
`docs.google.com/document/d/<id>/mobilebasic`, `drive.google.com/embeddedfolderview?id=<folder>`, `lh3.googleusercontent.com/d/<fid>=w1600`
and `drive.google.com/thumbnail?id=<fid>&sz=w400` all answer 200. `node kn/node/caps.mjs verify work/oct2024/docpairs.json work/oct2024/checks.tsv`
→ 85/85 captions checksum-identical to Cowork's, 8.7 s, 0 LLM tokens (Cowork: 5.5 min, 0.42M tokens). **Google OAuth is dropped from the plan.**
(Cowork could not do this only because its sandbox proxy blocked Google.)

## WordPress transport — DECIDED 18 Sep 2026: B, the bridge through Mat's logged-in Chrome tab

Mat: the old pipeline also kept Chrome open all night without trouble; he does not want a new credential. So: no application password, no new user.
Built and tested the same day (`kn/node/bridge.mjs`, `bridge-page.js`, `run-set.mjs`, `mockwp.mjs`, `fakepage.mjs`, `kn/test/bridge.test.mjs`):
- the toolkit keeps running inside the wp-admin tab, unchanged; the desk on 127.0.0.1 hands it data jobs; no LLM, no extension during runs
- end-to-end offline proof on the real Oct 2024 set `oca` (9 rows / 50 images) against an in-memory WordPress: 9 posts, 50 media, month page
  links all 9, set closed; re-run publishes nothing; an HTML reply on the 3rd publish → STOP with 8/9, nothing finalized, no duplicate, a re-run
  refuses to publish again and reports what is on the site by slug
- the desk refuses wrong Origin / wrong token; jobs are data; `__runPub` at most once per set
- images: unchanged (`__up1` fetches lh3 inside Chrome) → no image adapter to build
- fallback A (application password, DPAPI) stays in the tree unused

## Phase 2 — read-only against the real services (needs Mat)

Mat does, himself (once): `node kn/node/bridge.mjs bookmarklet` → open `state/kinnom-bridge-bookmarklet.html` → drag the button to the bookmarks bar.
Per session: open kinnom.co/wp-admin (logged in), click the bookmark, allow Chrome's one-time "local network" prompt.

Then, all read-only: `node kn/node/preflight.mjs` → toolkit in the tab identical to kn/node/toolkit/kntk-4.1.11.js, selftest in the real tab,
__ST summary (sets/open/post ids — this is the live knst, so the Drive knst.json export is not needed), hub 42102 readable.
- Drive fetch layer: captions done (`caps.mjs`); folder listing + thumbnails next (same no-login URLs).
- check whether ex-posters' folders still open (docs/BACKLOG.md risk).
- contact-sheet generator (Pillow) + slim photo-plan prompt; measure tokens/row; compare a Haiku run with the audited Sonnet plans.

## Phase 3 — first live month, drafts first

- month-page creation + hub anchor as desk jobs (runbook steps 5 and 7; not yet written)
- first live set: a real, small set of a month with NO posts on the site — Dec 2023 (54 rows). NOT May 2025: it was published by Cowork on 10 Sep (86 posts, page 56069); the run-set month guard now refuses such months. Mat watching; the toolkit is the one that
  published ~2,000 posts, only the transport is new and it is exercised read-only first. Measure time/tokens against Cowork's Oct–Dec 2024 numbers.

## Phase 4 — routine

Monthly run on Sonnet end to end (`kn run YYYY-MM`), expensive model only when a set STOPs.
