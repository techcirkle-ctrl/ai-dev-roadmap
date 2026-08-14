# DECK-PLAYBOOK — authoring a week's self-teaching deck

The contract for `weeks/week-N/Knowledge.html` — the one deck per week that IS the
Knowledge pedagogy. **Reference implementation: the sister repo's
`ai-pm-roadmap/weeks/week-1/Knowledge.html`** until this repo ships its own week 1; from
then on, the newest shipped deck here. When this file and the reference disagree, open
the file and copy how it does the thing, then record the correction here. Visual canon
defers to `setup/DESIGN.md`; operating mechanics to `setup/METHODOLOGY.md`; the
curriculum (acts, capstone, tags per week) to `roadmap.html`.

---

## 1. The one rule everything else serves

**This program is self-paced. There is no presenter, no room, no live session.** The
learner navigates alone, so the deck must say everything, on the glass:

- Every slide is a **mini-lesson the learner reads** — full second-person prose, never a
  cue that assumes a voice-over. If a slide only makes sense with someone talking, it's
  under-written.
- **Never hide teaching behind a key or a layer.** No presenter scripts, no
  hidden speaker notes. The only keys are navigation (`→ ← Home End F`).
- Guidance a workshop would put in a trainer's mouth goes in **visible furniture**.
  Furniture discipline (2026-08-14 trainer correction): **one name per band, forever**;
  bands are conditional, not ritual — a band with nothing non-redundant to say is
  omitted, and the typical widget slide shows at most two tinted bands after the widget:
  - `.drive` — the **Drive it** box on every widget: numbered steps (≤ 4), exact
    controls in order, a "watch for" line carrying the widget's baked-in data and
    expected outputs. The learner never drives blind. Needed MORE in self-serve, not
    less — an interactive without operating cues is a toy.
  - `.notice` — the **Check your read** band (this exact label, never variants): the
    self-assessment after a widget or hands-on — expected values, common misreads,
    "if it didn't fail, that's a finding too." **Self-checking widgets (per-click
    verdicts + score line) carry no notice band**: their score line absorbs the one
    non-redundant insight; feedback lives inside the interaction.
  - `.keep` — a visible **Keep this** band closing every slide (read top-to-bottom
    they form the week's glossary). Hard cap: one line — a single thought, ≤ 25
    words; two short sentences only when the second is the action.
  - `.read` — the **What you decide** band: the decision the learner now owns. Only
    where a genuine decision exists — never manufactured. When both it and Check
    your read are short (≤ 3 sentences combined), merge them into ONE `.notice` box
    with the two bold mini-leads.
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
9. **Writing canon** — the trainer's writing ideology, encoded at project scope so it
   binds every builder and every headless run; partly machine-enforced by
   `check-deck.js`:
   - **British English** (matches `roadmap.html`; the sister repo is American).
   - **Flesch reading ease 60–70 on teach prose** — the verifier fails a deck below 60
     (code, promptblocks and pre/code blocks are excluded from scoring). Plain
     sentences: one idea per sentence, average under 20 words, active voice,
     contractions welcome, the shorter commoner word (use not utilise, help not
     facilitate).
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
               one idea + movement list), then movements.
                 concept movement = .dark divider (Goal + You'll decide + 1–2 sentence
                 setup) → paper panel (teach prose → widget → Drive it → notice → read →
                 keep)
                 hands-on movement = .dark divider → panel (hobadge + time chip + why-prose
                 → numbered steps with copy-ready .promptblock prompts/commands → checks →
                 bank → notice → read → keep)
Capstone       .act opener (shape + what carries forward + storage note) then 5 steps,
               each = .dark divider (goal, time) + panel. Canonical shape: set up →
               baseline → core probes (stepper, one sub-panel per probe) → second
               opinion / cross-check → verdict + one-click markdown export. Capture
               fields persist to localStorage; export assembles them; the report is
               pasted on the Knowledge issue.
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
  only (key prefix `wN.`). Say so on the glass, and name the paper fallback template in
  `weeks/week-N/data/`.
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
- 2026-08-14 · Trainer correction (rep parity): the capstone is the programme's only
  hand-held rep — deliberately over-guided, because every Application issue re-runs its
  problem classes solo at the same difficulty. Author each capstone step as the worked
  example of a nameable problem class, and seed the week's gym/data with fresh problems
  of each class for the issues to draw on (week 1's gym already carries spare seeded
  bugs; keep that pattern). Issue doctrine lives in METHODOLOGY + SKILL.md; the deck's
  job is the guided rep and the class naming.
