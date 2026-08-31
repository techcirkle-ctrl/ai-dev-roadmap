# Methodology — the GitHub ideology

How a week of this program runs on GitHub. This is the operating contract; templates in
`setup/templates/` implement it. Deck authoring + the gated build workflow defer to
`.claude/skills/content-builder/` (`SKILL.md` + `DECK-PLAYBOOK.md`); visual canon defers
to `setup/DESIGN.md`.

**Repo layout rule:** the root stays learner-facing only — `README.md`,
`START-HERE.html`, `CLAUDE.md`, `roadmap.html`, `weeks/`, `.claude/`. Everything operational (this file, DESIGN, templates, fallback
copies of issues/milestones/progress) lives under `setup/`.

---

## The three pedagogies

Every week moves the learner through the same three stages, in order:

| Stage | What it is | GitHub artifact |
|---|---|---|
| **Knowledge** | Absorb the week's concepts by reading + doing inside the deck. | Issue #1 (the deck issue) |
| **Application** | Solve fresh problems of the capstone's classes, solo, with evidence. | Issues #2–#k (4–6 project issues) |
| **Reinforcement** | Internalise the ideology so it compounds after the week ends. | Final issue (the CLAUDE.md issue) |

## The curriculum contract — `roadmap.html`

Before any week is built, the week-wise curriculum is agreed and recorded in
**`roadmap.html`** (repo root) — a self-contained HTML timeline, not markdown, because
learners read it. One entry per week: topics covered, track tags, general description.
It is the contract: which weeks exist, what each week teaches, what its capstone is.
Nothing ships that contradicts it.

**Tracks live here only.** Tracks are recorded in `roadmap.html` as tags on weeks
(`Craft` / `Method` / `Real Repo` / `Team`) — never as folder structure. The learner
never navigates by track; they navigate by week.

## The week folder — `weeks/week-N/`

One folder per week; **everything the learner needs for the week lives inside it**:

- The week's deck (`Knowledge.html`).
- Any data files / repos the projects use (`data/`, `assets/`). Week 1 ships the gym
  repo here — the deliberately flawed practice codebase used for drills until the
  real-repo thread starts in week 3.
- Anything else the learner must use or produce guidance from within the week.

Rule: if it's needed during week N, it's in `weeks/week-N/`. The learner never hunts
across the repo — one week, one folder.

## Week = milestone

- One week of the curriculum = **one GitHub milestone**.
- Milestones carry **no due date**. The programme is self-paced: a handful of learners
  moving at the speed their real work allows, not a taught cohort on a shared clock. The
  milestone is a bucket that groups a week's issues, nothing more.
- The week's issues all belong to its milestone; the milestone closes when all issues close.
- **Standing issues** sit outside every milestone and never close. There is one today: the
  cold-read swap board (#34, pinned), where a learner posts an artifact needing a cold read
  and anybody claims it regardless of which week they are on. Self-pacing makes the cohort
  asynchronous, so peer exercises cannot assume a partner is at the same point. Every issue
  that wants a second person therefore also carries an **If nobody is available right now**
  section with a solo route, usually a fresh session standing in as the cold reader. A
  learner is never blocked on somebody else's pace.

## The deck — shipped on `main`

The trainer authors **one self-contained HTML deck per week** and commits it to `main`
before the week opens. Deck ideology:

- **Acts** — the deck is divided into acts; **one act = one topic**.
- **Hands-on inside acts** — each act embeds hands-on exercises the learner performs on
  their own system as they read. In this program that means: in Claude Code, in a
  terminal, on a real repo.
- **Capstone last** — after the final act, the deck closes with a **capstone project**:
  a guided build the learner follows end-to-end on their own system, synthesising the
  week's acts. The capstone is the week's **worked example** — the one place the
  learner's hand is held through each problem class. It is deliberately over-guided,
  because it is the last guidance the learner gets: Application issues re-run the same
  classes solo (the rep-parity rule, below).
- Self-contained HTML (inline CSS/JS, no network), per the content-builder skill's
  `DECK-PLAYBOOK.md` and `DESIGN.md`. Self-teaching: all teaching on the glass — the
  learner navigates alone.
- **Self-explanatory or failed** (the two-altitude rule, cohort correction 14 Aug
  2026). The learner is senior at code and novice in the agent domain, so teach prose
  runs takeaway → plain-English expansion → concrete example. Every term of art is
  kept (vocabulary is curriculum) and defined in plain words at first use; forward
  references carry a taught-later chip; optional depth lives in the deck's
  colour-coded fold layer (In plain words / Under the hood / How industry does it /
  By the way / Did you know / Stuck?). The acceptance test for every learner-facing
  artifact is the **another-LLM test**: a learner who needs a second LLM to decode a
  slide means the artifact failed, not the learner.

## The issues

### Issue #1 — Knowledge (the deck issue)

Created when the deck lands. Instructions, in order:

1. **Read through the acts** — the listed topics the deck covers.
2. **Do the hands-on exercises** embedded in each act, on your own system.
3. **Build the capstone project** as guided at the end of the deck.

Success criteria checklist mirrors those three. → `setup/templates/ISSUE_KNOWLEDGE.md`

### Issues #2–#k — Application (project issues)

Once the deck issue is complete, **4–6 project issues** open. They obey the
**rep-parity rule**, the pedagogy's core doctrine:

- **The capstone hand-holds; issues don't.** The capstone walked the learner through
  one real problem per class and built the acumen. Each Application issue is a fresh
  problem of one of those classes, at comparable difficulty, navigated from the issue
  text alone. That derivation — reading a ticket and working out what the problem
  actually is — is itself the skill being trained.
- **Ticket-shaped, problem first.** The body opens with the problem as a real ticket
  would state it — a symptom or a goal — then constraints, evidence required, success
  criteria. It never walks the solution; the walk lived in the capstone and lives on
  in `/guide-me`.
- **Evidence is a by-product of solving, never the task.** Learners upload proof
  (repo/PR links, session transcripts, harness files, output artifacts) on the issue
  before closing. An issue whose only work is logging, annotating or writing up other
  work is not an Application issue — fold it into another issue's evidence or drop it.
- **Count follows reps.** One issue per problem class the capstone taught, 4–6 total.
  Never pad to a number.

The test before any Application issue opens: *does the learner solve a fresh problem
here, at capstone difficulty, without the deck holding their hand?* If not, rewrite it.

→ `setup/templates/ISSUE_APPLICATION.md`

### The safety net — `/guide-me`

Issues stay lean because help is opt-in. A learner who can't navigate an issue runs
the **`guide-me` skill** (`.claude/skills/guide-me/`) with the issue link, pasted text
or a tagged file. It restates the problem, maps the steps and coaches one step at a
time — the learner does each step in their own work session and reports back with
evidence before it advances. It refuses to produce any part of the deliverable, and
its close asks the learner to note "guided" in their evidence comment. Scaffolding
lives in the skill, never in issue text.

The skill ships in this repo, so it works in any session opened inside the clone;
learners may copy it to `~/.claude/skills/` to invoke it anywhere — a harness artifact
promoted to user scope, in week 3's vocabulary.

### Final issue — Reinforcement (the CLAUDE.md issue)

The week's last issue hands the learner a **paragraph to add to their global
`~/.claude/CLAUDE.md`**. The paragraph encodes the week's ideology as a standing
instruction — modelled on the trainer's own TIL pattern:

- **Who I am** — the identity the learner is building (e.g. AI-first engineer).
- **Who I want to be** — the aspiration the week advanced.
- **Reinforcement rule (TIL)** — instructs Claude to append a **TIL** line whenever the
  week's ideology genuinely shows up in a future conversation — so the learning is
  re-surfaced organically, forever, in the learner's daily Claude use.

Week over week these paragraphs accumulate: the ideology is infused slowly and steadily,
reinforced in every Claude discussion the learner has. There is a second-order effect
unique to this cohort: the reinforcement paragraphs are themselves context engineering,
so the learner's own CLAUDE.md becomes a worked example of week 2's craft.
→ `setup/templates/ISSUE_REINFORCEMENT.md`

## The weekly lifecycle

```
roadmap.html agreed (once, up front)
└─ Week N opens
   1. Trainer ships deck to main            (acts + hands-ons + capstone)
   2. Milestone "Week N" created            (no due date — a bucket, not a deadline)
   3. Issue #1 Knowledge opened             (read acts → hands-ons → capstone)
   4. Learner completes #1
   5. Issues #2–#k Application opened       (4–6 fresh problems, evidence uploaded)
   6. Final issue Reinforcement opened      (CLAUDE.md paragraph added)
   7. Every learner labels each issue `<name>:done` + uploads evidence
   8. Trainer accepts evidence → closes issues → milestone closed → Week N+1
```

## The front door — `README.md` + `START-HERE.html`

Two documents written for a learner who has just been given repo access and does not know
where to look. Same content, two lengths:

- **`README.md`** — the short version, so it renders on the GitHub landing page. First 30
  minutes (clone, open `roadmap.html`, open the current deck, open the milestone), how a
  week runs, how to submit evidence, where things live, the nine-week status table.
- **`START-HERE.html`** — the long version in the program's visual language (`DESIGN.md`
  tokens, reading-column layout, self-contained, print-friendly). Adds the four
  disciplines, the ground rules, a FAQ, and a `localStorage` setup checklist. Opened
  locally after cloning, like every other HTML artifact here.

**Both are updated every time a week goes live**: flip that week's row from *Not open
yet* to *Live* and point the deck-opening command at the current week. Nothing else in
either changes week to week — if a week needs the front door rewritten, the week has
broken the contract.

## Tracking — GitHub is the source of truth

**GitHub Issues and GitHub Milestones are the single source of truth** for issue state,
completion, due dates, and evidence. The repo folders are **fallback copies only**:

- `setup/issues/` — fallback markdown copies of created issues.
- `setup/milestones/` — fallback milestone definitions.
- `setup/learner-progress/` — fallback per-learner tracking + metrics across weeks.

Every issue carries: milestone and per-learner labels — on GitHub. No due dates anywhere.

### Multiple learners share one issue

An issue is written **once** and serves the whole cohort. It is never duplicated per
learner and never assigned to one. Per-learner state lives in **labels**.

**Current cohort: Shubham, Akash, Atishay.** Their labels exist on the repo:

| Label | Set by | Means |
| --- | --- | --- |
| `shubham:done` | Shubham | evidence uploaded in a comment, ready for review |
| `akash:done` | Akash | evidence uploaded in a comment, ready for review |
| `atishay:done` | Atishay | evidence uploaded in a comment, ready for review |

One label per learner. Add a new learner → add one label, change nothing else.

**Flow**

1. Learner does the work and uploads evidence as an **issue comment** (drag-and-drop
   attachments or links; no push access needed).
2. Learner adds their own `<name>:done` label.
3. Trainer reviews. Weak evidence → **remove the label** and comment what's missing;
   the learner reworks and re-adds it.
4. **Only the trainer closes issues**, once every learner's label is on and accepted.

**Learners get the `Triage` repo role** — enough to apply labels and comment, and
structurally unable to push to this repo. Learner state is labels and comments only,
never commits. (Their real work lives in their own repos; evidence links point there.)

**Reading progress.** Because an issue closes at cohort-slowest, the milestone progress
bar reflects the cohort, not the individual. Per-learner progress comes from label counts:

```bash
gh issue list --milestone "Week 1 — …" --label "shubham:done" --state all
```

**Between cohorts.** Delete the `<name>:done` labels and republish issues from
`setup/issues/`. Nothing in the working tree needs unwinding.
