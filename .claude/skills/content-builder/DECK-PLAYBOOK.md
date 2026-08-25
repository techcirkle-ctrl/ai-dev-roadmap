# DECK-PLAYBOOK — authoring a week's self-teaching deck

The contract for `weeks/week-N/Knowledge.html` — the one deck per week that IS the
Knowledge pedagogy. **Reference implementation: the sister repo's
`ai-pm-roadmap/weeks/week-1/Knowledge.html`** until this repo ships its own week 1; from
then on, the newest shipped deck here. When this file and the reference disagree, open
the file and copy how it does the thing, then record the correction here. Visual canon
defers to `setup/DESIGN.md`; operating mechanics to `setup/METHODOLOGY.md`; the
curriculum (acts, capstone, tags per week) to `roadmap.html`. **Prose style defers to
`~/.claude/registers/learner.md`**, which overlays `~/.claude/VOICE.md`. Rules 8b and
8c below are the structural half of the same doctrine; where the register and this
file disagree on how a sentence is written, the register wins.

---

## 1. The one rule everything else serves

**This program is self-paced. There is no presenter, no room, no live session.** The
learner navigates alone, so the deck must say everything, on the glass:

- Every slide is a **mini-lesson the learner reads** — full second-person prose, never a
  cue that assumes a voice-over. If a slide only makes sense with someone talking, it's
  under-written.
- **Never hide teaching behind a key or a layer.** No presenter scripts, no
  hidden speaker notes. The only keys are navigation (`→ ← Home End F`).
- Guidance a workshop would put in a trainer's mouth goes in **visible furniture** —
  but in its self-serve-native form, never the presenter-ported one (v2 grammar,
  2026-08-14). **One name per band, forever**; bands conditional, not ritual:
  - **Movement = one panel.** No movement or capstone-step divider slides — a slide
    that previews the next slide is presenter residue. The dark register marks act
    openers (and the capstone opener) only. Each panel opens with a `.goalstrip`:
    kicker, then one line naming the movement's goal.
  - **The coach lives inside the widget.** Every `.lab` carries a `.cuebar`: the
    current operating cue (one at a time), advanced by the learner's own actions via
    the shared coach engine; the final cue carries the watch-for. A hidden `.cueall`
    list makes print carry all cues. No `.drive` box — a manual under a game is not
    how games teach.
  - **Every widget self-checks.** Sorter-family widgets grade per click and close
    with their `.scoreline` (the debrief lives there). Reveal/simulator widgets end
    with one inline `.wcheck` question whose verdict writes the scoreline. The
    "Check your read" `.notice` band is therefore retired on widget panels.
  - `.notice` — **Check your read** (this exact label): hands-on panels only, where
    the work happens in a terminal the deck cannot observe. At most one; may absorb
    a short What-you-decide as a second bold mini-lead.
  - `.read` — the **What you decide** band: only where a genuine decision exists.
    When the decision is concrete (a number, a default, a rule), prefer a persisted
    micro-capture (the confidence-box pattern) over rhetorical prose.
  - `.keep` — a visible **Keep this** band closing every slide (read top-to-bottom
    they form the week's glossary). Hard cap: one line — a single thought, ≤ 25
    words; two short sentences only when the second is the action.
  - `details.fold` — the **optional-depth layer**: collapsible, colour-coded strips
    (see DESIGN.md for the six types). `.plain` "In plain words" unpacks the concept
    with an analogy or worked example; `.hood` "Under the hood" gives the mechanism;
    `.industry` "How industry does it" grounds the practice in what real teams do;
    `.btw` "By the way" holds the practical tangent; `.dyk` "Did you know" the memorable
    fact; `.trouble` "Stuck?" the troubleshooting (this replaces the old `.bank` div —
    the verifier now rejects `class="bank"`). Hard rule: **core teaching never lives
    inside a fold** — a learner who opens none still gets the full lesson. Facts in
    `.dyk`/`.industry` must be ones the builder is certain of; no invented numbers.
  - `.soon` — the **taught-later chip**: inline grey chip ("taught in Act 4") on any
    term used before its act teaches it, so a learner never mistakes a forward
    reference for assumed knowledge.
  - **Voice-over is a teacher, not a reader.** (Trainer correction, 25 Aug 2026.) Every
    slide may carry a `data-vo` attribute holding the narration script: plain text, six
    to ten sentences, 100 to 160 words. It is not the slide read aloud. It is what a good
    trainer says while the slide is up — the essence first, then the reasoning, with a
    concrete example wherever one makes the idea land. Reach for an example even when the
    slide itself did not need to print one. A learner who hears it should feel taught,
    not recited to.
    - **The line that still holds: illustrate freely, require nothing new.** The narration
      may add analogies, worked examples, asides and the why-this-matters a slide has no
      room for. It may never introduce a fact, command or instruction the learner is
      *required* to know that is not on the glass. The speaker gives a better lesson, never
      a different syllabus, so a silent learner loses richness and never loses the
      curriculum.
    - Sentence rules from `~/.claude/VOICE.md` still bind: one idea per sentence, average
      under 15 words, never over 25. Longer narration means more sentences, never longer ones.
    - No markup and no double quotes inside the attribute. Speak a file path, a flag or a
      command name exactly as written, unless the literal string reads as noise aloud — a
      long path, or a chain of four commands. Then say it in shortened form, and only where
      the exact string is on the glass for the eye to read.
    - Never name the deck's own furniture. No "the box below", no "as you can see".
    - A slide without `data-vo` is silent, and autoplay stops there rather than advancing
      past it. Autoplay also stops on any slide holding a `.hobadge`, a `.lab` or a
      `.steppanel`, because the learner is working in a terminal the deck cannot see, or
      stepping through a panel by hand where step changes never call `show()`.
    - **Audio ships as files.** `data-vo-audio` on the same slide points at
      `weeks/week-N/audio/NN.m4a`, rendered by `render-voice.sh`. The file wins where it
      exists and the browser's speech engine is the fallback, so a deck works before its
      audio is rendered. `data-vo` stays the source of truth for both.

## 2. Doctrine (adapted for the dev cohort)

1. **Teach a little, do a lot.** Hands-on blocks outnumber reading blocks; the week-plan
   slide proves it. Time estimates are visible per hands-on and capstone step.
2. **Learning by visualising.** One act = one topic; each concept teaches through a
   **driveable widget** (the interaction is the teaching, never a passive reveal). Widgets
   are invented fresh per concept — a context-window meter, a loop tracer, a DAG you drag
   into parallel lanes — self-checking where it helps.
3. **Measure, don't trust.** The deck's register: sessions are probed, harnesses are
   A/B'd, loops are graded on what they catch. "It felt faster" is replaced by "same
   task suite, before and after, here's the delta."
4. **Use before explain. No false simplifications.** Plain-English analogies are allowed
   but must survive an expert's eye — this cohort will poke them.
5. **Dev altitude on code; zero altitude on agent vocabulary.** They code daily — skip
   capability tourism, no toy fizzbuzz; every hands-on runs in Claude Code, in a
   terminal, on a repo (gym repo weeks 1–2, real repo from week 3). But do NOT assume
   the agent domain's vocabulary (token, context window, MCP, harness, hook, headless):
   the 2026-08-14 cohort feedback proved they don't have it. Every term of art gets a
   plain-words definition at first use — the keyword stays (they must learn to speak
   it), the explainer backs it.
6. **One spine example per week** — one codebase/scenario threaded through widgets,
   prompts, and probes — recognition carries the learner.
7. **Every movement ends in a judgement the learner owns** — the `.read` band.
8. **Mnemonics where a list must stick.**
8b. **Self-explanatory bar** (from the 2026-08-14 cohort feedback: learners were
   decoding slides with another LLM — that is the failure state). Four mechanics:
   - **Takeaway then expansion.** The title asserts the point in one line; the prose
     below re-explains it in plain English, at whatever length it needs, with a
     concrete example. Verbose-and-clear beats compressed-and-clever in teach prose.
   - **Keyword kept, explainer backed.** First use of any term of art: bold the term,
     define it in plain words in the same sentence, put the longer version in a fold.
   - **No idiom-carried meaning.** A metaphor may open a point, never carry it alone —
     follow it with the literal statement ("a colleague you can only reach by post:
     every message travels by hand, one exchange at a time").
   - **Punchlines state their chain.** Never just the conclusion ("briefs are token
     economics"); include the middle ("every missing part becomes a question, every
     question re-sends the conversation, and re-sending is what you pay for").
   Forward references carry a `.soon` chip; optional depth goes to the fold layer.
8c. **Spoken-English bar** (from the 2026-08-24 cohort feedback: learners were STILL
   pasting slides into another LLM after the 8b fixes — the survivors were paragraph
   walls, compressed phrasing, and trade jargon). Three mechanics, the first two
   machine-gated by `check-deck.js`:
   - **Points go in bullets.** When a stretch of teach prose makes more than one point,
     it becomes a list: one point per bullet, a full sentence per bullet. A paragraph
     holds ONE point and caps at 75 words (verifier-enforced on all learner-facing
     prose, folds included); two short paragraphs beat one long one. Paragraphs are for
     narrative (a story, a worked example); enumerable content is never prose.
   - **Sentences, never compressed phrases.** No telegram constructions: "two
     assumptions, one decision", "one block, three costs: space, attention, spend".
     Write the sentence a person would say aloud: "Here you make two assumptions, but
     only one decision." A colon-led list may summarise a point only after the sentence
     form has been said. This applies with full force to `.keep` bands and titles — an
     aphorism that needs unpacking has failed.
   - **Workplace words, not trade jargon.** Two vocabularies exist. Curriculum terms
     (token, context window, MCP, harness, hook, headless) are KEPT and defined at
     first use — rule 5. Trade shorthand that is not curriculum (spike, probe, delta,
     ante, shard, dogfood, greenfield) is BANNED: say "experiment" or "test run", "the
     difference between the two runs", "starting point". Test: if you wouldn't use the
     word in an email to a colleague outside engineering, and it isn't a keyword the
     week teaches, use the everyday word. The verifier scans a banlist on teach prose.
9. **Writing canon** — the trainer's writing ideology, encoded at project scope so it
   binds every builder and every headless run; partly machine-enforced by
   `check-deck.js`:
   - **British English** (matches `roadmap.html`; the sister repo is American).
   - **Flesch reading ease 60–70 on teach prose** — the verifier fails a deck below 60
     (code, promptblocks and pre/code blocks are excluded from scoring). Plain
     sentences: one idea per sentence, average under 20 words, active voice,
     contractions welcome, the shorter commoner word (use not utilise, help not
     facilitate).
   - **No sentence over 25 words** in learner-facing prose, and no `.keep` band over
     25 words. Both are verifier-gated per element. A sentence that needs a comma-spliced
     list or a colon-led tail to fit is two sentences.
   - **Answer first.** Slide titles and `.keep` bands are full assertions, never
     topics: "Hooks make guarantees the model can't skip", never "Hooks overview".
   - **Banned in prose:** puffery and significance inflation (stands as, serves as,
     plays a vital role, marks a turning point); trailing participial clauses
     (", ensuring X" / ", reflecting Y"); default triads (vary to two, or four); vague
     attribution (experts note, studies show — name the source or drop the claim);
     editorial insertions (it's important to note, notably, crucially); negative
     parallelism (not X, but Y); end-of-section recaps; elegant variation (same thing,
     same name, every time); consulting jargon (unlock value, best-in-class, at scale).
   - **Em dashes:** none in teach prose — use colons, commas, full stops. Structural
     furniture (band labels, kickers, chrome) is exempt.
   - Sentence-case headings; no emoji; straight quotes.

## 3. Structure (the fixed skeleton)

```
Front matter   1 Title (incl. "how this deck works" + keys)
               2 Week plan (day rows, hands-on tags, "if a day slips" triage)
               3 Mini-agenda (id="agenda" — Home jumps here; acts × movements + capstone)
               4 How this works (posture · setup · the GitHub loop · support)
               5 Cold open — What Is (muted register: chat-driven development, the
                 status-quo tension)
               6 Cold open — What Could Be (+ the confidence read: 1–10, persisted,
                 re-read at the close)
Acts 1..K      per roadmap.html topics. Each act: an .act divider (orientation: the act's
               one idea + movement list), then movements — ONE panel each, no dividers.
                 concept movement = paper panel (.goalstrip → teach prose → widget with
                 .cuebar coach → per-click verdicts or .wcheck → .scoreline → optional
                 .read or micro-capture → keep)
                 hands-on movement = panel (.goalstrip → hobadge + time chip + why-prose
                 → numbered steps with copy-ready .promptblock prompts/commands → checks
                 → trouble fold → one Check-your-read notice → keep)
Capstone       .act opener (shape + what carries forward + storage note) then 5 steps,
               each = ONE panel (.goalstrip with step number + time → teach/steps →
               capture). Canonical shape: set up → baseline → core work → A/B or
               cross-check → verdict + one-click markdown export. Capture fields
               persist to localStorage; export assembles them; the report is pasted
               on the Knowledge issue.
Back matter    Stuck-or-curious (support = the Knowledge issue thread; optional deeper
               dives named here) · Close (re-read the confidence number, one-sentence
               commit, hand-off to Application issues / standing habits / next week)
```

Every `<section>` carries `data-act` + `data-mv` (feeds the chrome label). Movement
numbers (M1…) appear only beside their titles (agenda, kickers) — reference prior content
**by name**, never by slide/movement number.

## 4. Engine + canon (reuse, don't reinvent)

- Tokens, four registers (paper / `.isnow` / `.dark` / `.act`), and named components:
  copy them from the reference deck. New colours go to `setup/DESIGN.md` first.
- **Keyboard-only slide nav** (`→ ← Space PgUp/PgDn Home End F`); clicks NEVER change
  slides — the mouse is for widgets, copy buttons, text, capture boxes. In-slide steppers:
  `→` advances sub-steps first; `.snode` chips are clickable.
- Chrome: act · movement · `cur / tot` + top progress bar. Helpbar lists the keys.
- Copy buttons on every `.promptblock` (clipboard API + execCommand fallback). For this
  cohort promptblocks carry shell commands and Claude Code invocations as often as
  prompts — mark which is which.
- **Persistence:** every capture field has `data-persist`; state goes to `localStorage`
  only (key prefix `dwN.`, and `dwN.vo.` for the voice-over). Say so on the glass, and
  name the paper fallback template in `weeks/week-N/data/`.
- **Voice-over:** every deck carries the engine, whether or not it is scripted yet. It
  needs four things: the `.vobar` control markup after the progress bar, the `VO` engine
  block in the script, the `VO.onSlide()` call inside `show()`, and a `VOPFX` equal to
  that deck's `PFX` plus `vo.` (so `dw4.` gives `dw4.vo.`). Port the block from the newest
  shipped deck, never from a plan file, and change only the `VOPFX` line.
- Self-contained (inline CSS + vanilla JS, no network), `@media print` flattens registers
  to white, expands steppers, drops chrome/copy; widgets in defensive IIFEs
  (`if(!el)return;`), state derived from the DOM.

## 5. Build routine

1. Read the week's `roadmap.html` entry + spec row (acts, capstone, ante) — the contract.
2. Plan acts → movements → capstone steps; every roadmap topic gets a movement; the
   capstone produces the artifact the Knowledge issue asks for.
3. Scaffold from the reference deck's skeleton (engine + furniture), then write each
   movement **content-first**: teach prose → widget mechanism → Drive it (with the
   widget's actual data) → notice → read → keep.
4. Widgets: invent per concept; exercise every path; two-register rule on controls
   (status-quo = muted, lifted = teal).
5. Verify: run the bundled verifier — `node .claude/skills/content-builder/check-deck.js
   weeks/week-N/Knowledge.html` — until CLEAN (one `.keep` per section, `.drive` on every
   widget, no presenter remnants, no duplicate ids, persist/export wired, JS parses,
   Flesch reading ease ≥ 60 on teach prose).
   The browser pass (0 console errors, keys, steppers, copy, export, print) is the
   user's review at the deck gate — don't drive the preview yourself.
6. Issues quote the deck: act names in the Knowledge issue, hands-on names in checklists,
   capstone artifact as proof-of-work.

## 6. Reflection loop

After each week ships, corrections become one-line rules here (replace vaguer ones; the
bar only goes up), and the newest shipped deck becomes the reference implementation.

**Log:**
- 2026-08-04 · Repo founded as sister to `ai-pm-roadmap`; playbook inherited with the
  founding correction already applied (self-teaching on the glass, no presenter layer).
  Dev-cohort adaptations: dev altitude (rule 5), commands as first-class promptblocks,
  British English.
- 2026-08-04 · Writing canon encoded at project scope (§2 rule 9). It was ambient in
  the trainer's global CLAUDE.md, which never reaches other builders or headless runs —
  the scoping doctrine applied to ourselves. `check-deck.js` now gates Flesch reading
  ease ≥ 60 on teach prose; style-copying from the sister reference deck no longer
  carries its American, em-dash-heavy prose register.
- 2026-08-04 · Week 1 trainer correction: time estimates ran 3–4× over. This cohort
  codes daily and moves fast — acts are 30–45 min, hands-ons 10–20 min, capstones
  ≤ 1.5 h. Estimate for a working dev, never pad.
- 2026-08-04 · Week 1 trainer correction: Max subscriptions expose no dollar costs and
  no token counts — only opaque rate limits. Teach `/usage` (percentages + reset times)
  and relative pressure; never present `/cost` dollars as observable. Frame the topic
  "usage", not "cost", programme-wide.
- 2026-08-14 · Cohort correction (Shubham, Akash, Atishay): week 1 deck read "like a
  tech spec, not a learning module" — learners decoded slides with another LLM. Flesch
  passed (~71); the failures were undefined terms of art, idiom-carried meaning, and
  conclusion-only punchlines. Fixes now canon: rule 5 rewritten (zero altitude on agent
  vocabulary), rule 8b added (self-explanatory bar), fold layer + `.soon` chip added to
  the furniture (§1, DESIGN.md), `.bank` retired into `fold.trouble`, verifier extended
  (fold types, summary/fbody pairing, beforeprint expander, bank remnant). Reference
  implementation: the revised week 1 deck.
- 2026-08-14 · Trainer correction (v2 grammar — the deep cut): the first furniture pass
  stopped at band labels; the trainer pushed further and was right. Movement divider
  slides are presenter section-breaks (a slide previewing the next slide, prose paid
  twice, clicks doubled) — retired; movement = one panel with a .goalstrip, dark
  register at act openers only. The Drive-it box is a demo script externalised —
  replaced by the in-widget coach (.cuebar advancing on the learner's own actions,
  .cueall for print). Every widget now self-checks (.wcheck on reveal widgets), so
  the notice band survives only on hands-on panels, where the deck cannot observe
  the work. Concrete decisions prefer persisted micro-captures over rhetorical read
  bands. Slide counts fell ~40% with zero teaching lost; the duplication WAS the
  presenter. Verifier enforces the v2 contract (cuebar+scoreline per lab, no .drive,
  no notice on widget panels, goalstrip on movement/capstone panels).
- 2026-08-14 · Trainer correction (furniture grammar): the band stack had drifted into
  presenter-era ritual — the debrief band wore three labels ("What you just saw" /
  "What good looks like" / "What to expect"), every slide carried every band, and
  notice/read/keep often said one idea three ways. Now canon: one name per band
  (`.notice` = "Check your read"); bands conditional, never ritual; self-checking
  widgets debrief via their own score line and carry no notice band; short notice +
  read merge into one box with two mini-leads; keeps capped at one line (≤ 25 words).
  Load lives in label variants, redundancy and verbosity — never in the existence of
  the safety net (the 2026-08-14 cohort correction pushed scaffolding UP; do not
  respond to density complaints by deleting functions).
- 2026-08-24 · Cohort correction (second comprehension failure): learners were still
  copying slide text into another LLM for "explain in simpler terms" — after the 8b
  fixes. The three surviving failure modes: paragraph walls where a bulleted list was
  the natural shape; compressed phrase-pairs ("two assumptions, one decision") where a
  plain sentence was needed; and trade jargon that is not curriculum (spike, probe,
  delta, ante). Rule 8c added (spoken-English bar); verifier now gates the 75-word
  paragraph cap and a jargon banlist; weeks 1–2 decks rewritten under it. The lesson:
  Flesch and defined keywords are not sufficient — the prose must read like a colleague
  explaining aloud, point-wise, in everyday words.
- 2026-08-25 · Trainer correction (voice mandate): prose style now defers to
  `~/.claude/registers/learner.md` over `~/.claude/VOICE.md`, and week 3 was rewritten
  under it. The rules 8b/8c decks still carried three habits the mandate forbids.
  Sentences ran to 49 words, act openers packed their movement list into one middot-joined
  paragraph, and `.keep` bands drifted past the 25-word cap into aphorism. Now canon: no
  sentence over 25 words in learner-facing prose, an act opener's movement list is a
  bulleted `ul.sub`, and a keep band is checked against the cap. `check-deck.js` gates
  both caps per element, and weeks 1 and 2 were rewritten under them the same day.

- 2026-08-14 · Trainer correction (rep parity): the capstone is the programme's only
  hand-held rep — deliberately over-guided, because every Application issue re-runs its
  problem classes solo at the same difficulty. Author each capstone step as the worked
  example of a nameable problem class, and seed the week's gym/data with fresh problems
  of each class for the issues to draw on (week 1's gym already carries spare seeded
  bugs; keep that pattern). Issue doctrine lives in METHODOLOGY + SKILL.md; the deck's
  job is the guided rep and the class naming.
