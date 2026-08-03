# Methodology — the GitHub ideology

How a week of this program runs on GitHub. This is the operating contract; templates in
`setup/templates/` implement it. Deck authoring + the gated build workflow defer to
`.claude/skills/content-builder/` (`SKILL.md` + `DECK-PLAYBOOK.md`); visual canon defers
to `setup/DESIGN.md`.

**Repo layout rule:** the root stays learner-facing only — `CLAUDE.md`, `roadmap.html`,
`weeks/`, `.claude/`. Everything operational (this file, DESIGN, templates, fallback
copies of issues/milestones/progress) lives under `setup/`.

---

## The three pedagogies

Every week moves the learner through the same three stages, in order:

| Stage | What it is | GitHub artifact |
|---|---|---|
| **Knowledge** | Absorb the week's concepts by reading + doing inside the deck. | Issue #1 (the deck issue) |
| **Application** | Apply the concepts on real guided projects, with evidence. | Issues #2–#k (5–6 project issues) |
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
- Milestone due date = **end of day Sunday** of that week. Every issue in the milestone
  inherits that due date.
- The week's issues all belong to its milestone; the milestone closes when all issues close.

## The deck — shipped on `main`

The trainer authors **one self-contained HTML deck per week** and commits it to `main`
before the week opens. Deck ideology:

- **Acts** — the deck is divided into acts; **one act = one topic**.
- **Hands-on inside acts** — each act embeds hands-on exercises the learner performs on
  their own system as they read. In this program that means: in Claude Code, in a
  terminal, on a real repo.
- **Capstone last** — after the final act, the deck closes with a **capstone project**:
  a guided build the learner follows end-to-end on their own system, synthesising the
  week's acts.
- Self-contained HTML (inline CSS/JS, no network), per the content-builder skill's
  `DECK-PLAYBOOK.md` and `DESIGN.md`. Self-teaching: all teaching on the glass — the
  learner navigates alone.

## The issues

### Issue #1 — Knowledge (the deck issue)

Created when the deck lands. Instructions, in order:

1. **Read through the acts** — the listed topics the deck covers.
2. **Do the hands-on exercises** embedded in each act, on your own system.
3. **Build the capstone project** as guided at the end of the deck.

Success criteria checklist mirrors those three. → `setup/templates/ISSUE_KNOWLEDGE.md`

### Issues #2–#k — Application (project issues)

Once the deck issue is complete, **5–6 project issues** open. Each one:

- Gives **detailed instructions** for one project applying the week's concepts.
- Requires the learner to **upload evidence** of completion (repo/PR links, session
  transcripts, harness files, screenshots, output artifacts) on the issue before closing.

→ `setup/templates/ISSUE_APPLICATION.md`

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
   2. Milestone "Week N" created            (due Sunday EOD)
   3. Issue #1 Knowledge opened             (read acts → hands-ons → capstone)
   4. Learner completes #1
   5. Issues #2–#k Application opened       (5–6 projects, evidence uploaded)
   6. Final issue Reinforcement opened      (CLAUDE.md paragraph added)
   7. Every learner labels each issue `<name>:done` + uploads evidence
   8. Trainer accepts evidence → closes issues → milestone closed → Week N+1
```

## Tracking — GitHub is the source of truth

**GitHub Issues and GitHub Milestones are the single source of truth** for issue state,
completion, due dates, and evidence. The repo folders are **fallback copies only**:

- `setup/issues/` — fallback markdown copies of created issues.
- `setup/milestones/` — fallback milestone definitions.
- `setup/learner-progress/` — fallback per-learner tracking + metrics across weeks.

Every issue carries: milestone, **due date (Sunday EOD)**, per-learner labels — on GitHub.

### Multiple learners share one issue

An issue is written **once** and serves the whole cohort. It is never duplicated per
learner and never assigned to one. Per-learner state lives in **labels**:

| Label | Set by | Means |
| --- | --- | --- |
| `alex:done` | Alex | evidence uploaded in a comment, ready for review |
| `sam:done` | Sam | evidence uploaded in a comment, ready for review |

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
gh issue list --milestone "Week 1 — …" --label "alex:done" --state all
```

**Between cohorts.** Delete the `<name>:done` labels and republish issues from
`setup/issues/`. Nothing in the working tree needs unwinding.
