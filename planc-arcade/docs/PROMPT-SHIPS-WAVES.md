# Prompt for a new Cowork chat — research "influencer ship classes + wave design" for planc-arcade

> Copy the entire block below into a new Cowork chat.

---

You are taking on a research sub-task for the planc-arcade project — a new website
built around a playable Galaga-style vertical space shooter. This is a SEPARATE
website from planc-web (the Mario scrollytelling site). Never modify or delete
anything inside planc-web. The project owner is Mat; work language for this task
is English, but see the Thai-data rule below.

== READ FIRST, IN THIS ORDER ==
1. Z:\Claude Code\planc-arcade\CLAUDE.md — all hard rules + the agreed game structure
2. Z:\Claude Code\PlanCBIz\ — especially BMC-plan-c-v2.md, PLAN-C-ERRATA.md,
   PLAN-C-LANDSCAPE-RESEARCH.md, PLAN-C-ถามตอบ.md — ground truth about the
   business and its customers
3. Z:\Claude Code\planc-arcade\docs\GAME-REFERENCES.md — game design context (skim)

== CONTEXT YOU MUST INTERNALIZE ==
Plan C is a 1:1 identity-and-algorithm consultancy for Thai micro-influencers
(core segment: 10k–100k followers with plateaued views). Brand stance: "we make
you more yourself, fighting on your own turf." The game's narrative: an
influencer's problems fly in as swarms; one ship provably cannot shoot them all;
at the near-loss moment Plan C docks alongside as a 2nd, then 3rd ship, and the
screen clears. Game flow: boot screen (logo/motto) → ship-select screen (pick
your influencer type) → enemy "gnat" waves, each wave translated from a real
problem sentence → near-loss → Plan C joins.

== YOUR JOB: produce docs/SHIPS-AND-WAVES.md (a proposal menu, not decisions) ==

TASK 1 — Ship-class menu (influencer types)
Propose 3 alternative SETS of ship classes for Mat to choose from (e.g., a tight
3-class set / a standard 4-class set / a detailed 5–6-class set). Each class needs:
- Thai name + short English HUD label
- one-line definition
- evidence that this type genuinely exists in the Thai creator market AND that
  Plan C's target segment lives in it (cite PlanCBIz files or real Thai sources —
  do NOT invent a taxonomy)
- gimmick ideas at 2 depth levels: (a) cosmetic only — ship look + class-specific
  enemies/sentences; (b) mechanical — what stat/behavior changes (propose, don't
  balance numbers)

TASK 2 — Real-pain sentence bank → wave charts
- Collect at least 25 sentences Thai influencers actually say about their
  problems, each with a traceable source. Sources: Thai Facebook influencer-gig
  groups, Pantip, Thai X/TikTok, Thai articles/news, and the research files
  already in PlanCBIz. NEVER fabricate a sentence. If you must shorten one to
  fit a game screen, tag it [reworded] and keep the original verbatim next to it.
- CRITICAL THAI-DATA RULE: keep every collected sentence in its original Thai,
  verbatim — these are raw copy material for the game. Add a short English gloss
  after each for your own analysis. Analysis/structure of the doc itself is
  English.
- Cluster the sentences into problem categories (e.g., rush jobs/brief revisions ·
  money/contracts · algorithm/view drops · drama/comments — examples only; let
  categories emerge from the data).
- Propose 2–3 alternative wave charts: which category powers which wave, ordered
  light→heavy so the story arc lands: "coping → drowning → near-loss → Plan C
  docks → clear."
- Per wave, specify: the wave banner sentence · gnat enemy symbol concept (e.g.,
  alarm clock, envelope — describe, don't draw) · relative weight (light/medium/
  heavy). Do NOT specify exact enemy counts or spawn rates (λ) — real numbers
  will come from bot-measured clear rates (μ) in the main chat. Your job is
  narrative and content, not balance.

TASK 3 — End the doc with a decision table for Mat: which class set / which wave
chart / which gimmick depth, with short pros/cons per option.

== HARD RULES ==
- Every design decision belongs to Mat. Your document is a menu plus evidence;
  present options and ask in plain chat text. NEVER use the AskUserQuestion tool
  with Mat.
- Every claim must have a traceable source. Tag guesses [guess]. Money/rate
  figures must NOT be sourced from the web — use only the field-work data already
  in PlanCBIz.
- This task is distinct from CONTENT-MAP (another chat extracts website copy from
  the BMC). If CONTENT-MAP.md already exists, use it as input; do not duplicate it.
- Deliver: write the file to Z:\Claude Code\planc-arcade\docs\SHIPS-AND-WAVES.md,
  then report in chat: your single strongest class set + strongest wave chart with
  reasoning, and the open questions awaiting Mat's decision. Final chat summary
  in Thai; the collected Thai sentences stay verbatim as instructed.
