# kinnom — backfill pipeline for kinnom.co

kinnom.co is the WordPress site of the Thai Facebook food page กินหนม. The job: republish the team's Facebook snack reviews as
WordPress posts, month by month, walking backward to mid-2022, so the site becomes a permanent snack encyclopedia.
Owner: Mat. This folder replaces the Cowork cloud sandbox + claude.ai Project + Drive archive that ran the work until 17 Sep 2026.

**Start every session with `docs/BACKLOG.md`** (what is really left, checked against the live site). `kn/status.py` only shows Cowork's queue files as exported on 17 Sep — several are stale. The site is the source of truth: before picking a month, count its posts on the site. `run-set.mjs` enforces this with a month guard.

## Mat's iron rules (non-negotiable; do not reinterpret)

1. **No AI-written review text.** Every sentence in a post is a verbatim substring of the team's caption. Cutting/splitting is allowed; paraphrasing, fixing typos or adding words is not. A photo with no supporting sentence gets an empty caption. The only authored text is the title and the ≤160-char meta description.
2. **Brand comes from the caption or from Mat**, never from AI world knowledge. Caption doesn't name the maker → the row goes on the Brand Sheet for Mat. Spelling follows `tools/brand-canon.json` ("ไทย (English)").
3. **Price only from the caption** (never from a shelf tag). 7-Eleven is a store, not a brand.
4. **Cover = first photo in filename order** unless it is a menu board / shelf shot / blurry / a different product; every skip is logged with a reason (Mat audits).
5. **Never** delete content, change the publish status of an existing post, touch settings/plugins/theme/users, or delete anything in Google Drive. (`kn/node/runtime.mjs` enforces this at the transport: see `guard()`.)
6. **Advice is separate from decisions**: AI proposes, Mat decides. Every number reported is measured and traceable; mark estimates as estimates.
7. **Time is a cost like tokens**: independent subagents run in parallel, never serially.
8. New brand tags only once the brand has ≥3 posts.
9. **Quality is enforced by code, not by reading.** `tools/mkset.py` (gates R1–R7) and the toolkit (`__vgate`, selftest 56 checks) decide what may be published. Never weaken, bypass or "temporarily" edit a gate. A gate rejects a row → drop the row from the set and list it for Mat.

Also standing: no blind-check agent (decision D22, 4 Sep 2026 — Brand Sheet + gates are the only checkpoint); the supervisor never opens photos (photo-plan subagents do, once).

## Layout

```
CLAUDE.md            this file
tools/               the Cowork scripts, unchanged: mkset.py (builder+gates) plan2spec.py dedupe.py closeset.py canon.py tlog.py …
                     + side files mkset needs next to it: tags.json/tags.pk, brand-canon.json, final_brand.json, decisions.tsv, sets/final_brand-YYYY-MM.json
kn/node/             the browser toolkit running under Node
  toolkit/           toolkit.pack.src.js + official patches → kntk-4.1.11.js (= localStorage.kntk in Mat's Chrome). Generated: build-toolkit.mjs
  runtime.mjs        shims (window, file-backed localStorage, guarded fetch) + the two transport overrides (__api, __up1) — used by tests/selftest
  selftest.mjs       runs the toolkit's own __selftest() offline
  bridge.mjs         THE TRANSPORT (Mat's choice, 18 Sep 2026): job desk on 127.0.0.1 that his logged-in wp-admin tab long-polls. No credential exists.
  bridge-page.js     glue served into the tab by the bookmarklet: fixed allow-list of toolkit calls; jobs are data, never code
  run-set.mjs        UPLOAD-RUNBOOK as code (one set through the desk; every STOP condition kept; __runPub at most once per set, ever)
  caps.mjs           captions straight from Google Docs (no login needed; team docs are link-shared) — 0 tokens
  mockwp.mjs / fakepage.mjs   test doubles: in-memory WordPress + a stand-in for the tab (real toolkit + real glue)
  secret.mjs         WordPress credential: entered by Mat in a Windows dialog, stored DPAPI-encrypted in %APPDATA%\kinnom\ (outside this folder).
                     There is no plaintext .env on purpose. Never decrypt it for display, never print it, never pass it on a command line.
kn/prompts.py        render subagent prompts from prompts/*.tmpl.md (no more sed-copied file per month)
kn/status.py         where every month stands
kn/test/             safety.test.mjs (guard, no-retry-on-write, negative control) · secrets.test.mjs (no leak to journal/errors/other hosts; DPAPI store) · regress_mkset.py (tools/ vs Cowork original, 153 sets)
prompts/             fill-spec.tmpl.md, classify.tmpl.md
months/YYYY-MM/      one folder per month from now on (items, captions, plan/, spec sets, journal, report)
state/               runtime state: localStorage.json (toolkit __ST = which sets are open/closed + post ids), journal.jsonl (every request)
docs/                BACKLOG.md (what is left, measured) · PHASES.md (migration plan and status)
work/                READ-ONLY export of the Cowork sandbox (17 Sep 2026): every past month's captions, plans, specs, logs. Never edit; copy out.
```

## Commands

```
python kn/status.py [YYYY-MM]                  where things stand
node kn/node/selftest.mjs                      must print "✅ ผ่านทั้งหมด 56 ข้อ" before any upload work in a session
node --test "kn/test/*.test.mjs"               safety + secrets + bridge end-to-end (mock WordPress, real toolkit, real glue)
node kn/node/bridge.mjs bookmarklet            writes state/kinnom-bridge-bookmarklet.html (Mat drags it to the bookmarks bar once)
node kn/node/bridge.mjs                        start the desk and wait for the tab
node kn/node/run-set.mjs <setdir> --page <id>  publish one set through the connected tab (starts its own desk)
node kn/node/caps.mjs verify|fetch …           captions from Google Docs
python kn/test/regress_mkset.py                tools/mkset.py ≡ Cowork original on all 153 historical sets
python kn/prompts.py render fill-spec 2024-08  ready-to-send subagent prompt
node kn/node/build-toolkit.mjs                 rebuild kntk-4.1.11.js from source + patches (sha256 is written next to it)
PYTHONUTF8=1 python tools/mkset.py <setdir> [--suggest]
```

Windows: always run the Python tools with `PYTHONUTF8=1` (the console codepage cannot print Thai/ℹ and mkset crashes mid-run without it).

## How the toolkit runs here

Production path (bridge): the toolkit keeps running INSIDE Mat's wp-admin tab exactly as before (cookie + nonce, admin, author = Mat);
`run-set.mjs` sends data jobs to it through the desk and reads results back. No LLM in the loop, no 1,000-char tool limit, no file_upload trick,
no Claude-in-Chrome extension during runs. Requirements are the old ones: PC on, Chrome open with the tab (own window is best — background tabs
get throttled), Mat logged in. Chrome ≥142 asks once for "Local Network Access" for kinnom.co.
Test path (runtime.mjs): the same toolkit text evaluated under Node with a guarded transport and fixtures — for the selftest and the test suite.
Fallback kept but unused: application password via `secret.mjs` (DPAPI). Mat rejected creating a new credential; do not push it.

The STOP property (from the operators' UPLOAD-RUNBOOK): any deviation halts the set and reports; `__runPub` runs once per set, ever;
before creating anything, look the slug up (`posts?slug=…&status=publish,draft,pending,future`) — a hit means STOP, not overwrite.
On resume, reconcile by slug first. Toolkit state (`state/localStorage.json`) survives restarts the same way `localStorage.knst` did.

## Working agreements

- `work/` is evidence. Do not modify it, do not run tools with a `work/…` set folder as the output dir (mkset rewrites open.js/build.js) — copy the set out first.
- This folder sits inside another git repo (`Z:\Claude Code`). Do not `git add` it there. If it becomes its own repo: `.gitignore` already excludes `state/`, the tarball and `work/`.
- Secrets never enter the conversation, a prompt, a log or a commit. If a credential shows up in tool output, stop and tell Mat.
- Reports to Mat: Thai, plain language, measured numbers with their source file; list what was skipped and why.
- Subagents: Sonnet for photo-plan / fill-spec / classify (try Haiku only against the ~900 audited plans in `work/*/plan/` and report the agreement rate first).
