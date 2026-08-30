# Milestone — Week 3

## Name

Week 3 — Harness engineering: encode it, don't repeat it

## Duration

One week. **Due: end of day Sunday** (all issues inherit this date).

## Learning Objectives

- Apply the rule of twice: any instruction given twice is a missing piece of
  infrastructure, and the friction log is the shopping list.
- Route a repeated instruction to the right artifact using two questions — must it be
  impossible to skip, and is it needed always or only sometimes.
- Name when each part of the harness acts: session start, when you type, before a tool
  call, after a tool call, session end. Know that only permission rules and hooks run
  outside the model's reasoning and can actually refuse.
- Read the three settings files and the order they resolve in, at user, project and local
  scope.
- Buy safe autonomy with a permission allowlist: allow what you never refuse, deny what
  would genuinely hurt.
- Write slash commands that a stranger can run, including argument handling.
- Write hooks that make a mistake impossible rather than discouraged, enforcing
  guardrails.md.
- Write skills that load only when relevant, and understand that the description is the
  only part deciding whether one ever fires.
- Decide what gets committed and what stays local, and know that secrets belong in
  neither.
- Prove the harness works by having somebody clone it cold.

## Deck

`weeks/week-3/Knowledge.html` (5 acts, 6 hands-ons, 5-step capstone, fully narrated). All
week materials live in `weeks/week-3/`: a stand-in repo (`data/relay-harness`) with three
planted mistakes, and five templates.

The real-repo thread starts this week. The gym repo retires.

## Issues (in order)

1. **Knowledge** — work through the deck (acts → hands-ons → capstone). → `01-knowledge.md`
2. **Application ×6** (rep parity: each a fresh ticket-shaped problem of a capstone
   class) — hook from your own incident history · command another learner runs cold ·
   skill-trigger evaluation · approval audit at argued scopes · scope-classification
   memo · harness PR merged by a teammate. → `02..07-application-*.md`
3. **Reinforcement** — CLAUDE.md ideology paragraph. → `08-reinforcement.md`

## Success Metrics

- All 8 issues carry every learner's `<name>:done` label with evidence, and are closed by
  the trainer.
- Every learner's harness lives in a repo they genuinely work in, and was reviewed and
  merged by a real teammate.
- Every learner has a hook that provably refuses an edit they asked for on purpose.
- Every learner's skill is shown both firing when it should and staying silent when it
  should not.
- Every learner counted their approvals before and after, with real numbers.

## Gate/Prerequisites

Week 2 complete: the scoped documentation layer, and the friction log running since week 1.
Learners need a repo they can open a pull request on, with a teammate who can review it.
Two issues need another person's time (the cold command run and the harness PR), so those
get booked first.

Learners whose work repo is off limits for experiments use
`weeks/week-3/data/relay-harness` for the hands-ons. The capstone still wants the real
repo.

## Resources

- Deck: `weeks/week-3/Knowledge.html`
- Stand-in repo: `weeks/week-3/data/relay-harness` (three planted mistakes)
- Templates: `weeks/week-3/data/harness-inventory-template.md`,
  `command-cold-run-rubric.md`, `skill-trigger-eval-template.md`, `scope-memo-template.md`,
  `incident-briefs.md`, `capstone-report-template.md`
- Optional deeper dives (search by name): Anthropic's Claude Code documentation on
  settings, slash commands, hooks and skills.
