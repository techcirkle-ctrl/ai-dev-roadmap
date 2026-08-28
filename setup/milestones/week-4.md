# Milestone — Week 4

## Name

Week 4 — Planning: spec-driven development

## Duration

One week. **Due: end of day Sunday** (all issues inherit this date).

## Learning Objectives

- Name the pipeline stage a question belongs to (brainstorm, spec, plan, execute) and
  explain why answering it early is guessing and answering it late is rework.
- Use both planning controls Claude Code ships with: the session thinking toggle
  (`Option+T` / `Alt+T`), the standing default in `/config`, and the `ultrathink` keyword
  for one turn. Know that "think hard" and similar phrases are not recognised keywords.
- Describe plan mode accurately: it blocks edits until you approve the plan, and allows
  reading and exploration throughout. It is a permission mode, not a read-only mode.
- Write a six-part spec (context, behaviour, scope, constraints, decisions, acceptance)
  that a cold session executes without asking anything, and drive its question count down
  by patching the file rather than answering in chat.
- Decide which decisions earn an ADR: expensive to reverse **and** non-obvious. Write one
  at decision time, and keep it immutable when it is superseded.
- Keep DESIGN.md honest, and recognise that a stale design document is worse than none.
- Review a plan against six checks before any code exists, and send it back with reasons
  rather than instructions.

## Deck

`weeks/week-4/Knowledge.html` (5 acts, 5 hands-ons, 5-step capstone, 10 driveable
widgets, fully narrated). All week materials live in `weeks/week-4/`: eight templates and
practice files in `data/`, and the rendered narration in `audio/`.

Spine example throughout: per-team rate limiting on the `relay` API.

## Issues (in order)

1. **Knowledge** — work through the deck (acts → hands-ons → capstone). → `01-knowledge.md`
2. **Application ×6** (rep parity: each a fresh ticket-shaped problem of a capstone
   class) — cold spec swap · ADR for a lived decision · plan review on work you did not
   scope · DESIGN.md honesty audit · divergence log on a shipped feature · vague ticket
   to executable spec. → `02..07-application-*.md`
3. **Reinforcement** — CLAUDE.md ideology paragraph. → `08-reinforcement.md`

## Success Metrics

- All 8 issues carry every learner's `<name>:done` label with evidence, and are closed by
  the trainer.
- Every learner has a spec that another learner's cold session executed, with the question
  count recorded before and after patching.
- Every learner sent at least one plan back with named failing checks, and can say what
  changed in the revision.
- Every learner has one ADR reviewed by the teammate who lived through that decision.
- Every learner has a divergence log with causes counted, and can name which artifact
  their count says they write badly.

## Gate/Prerequisites

Week 3 complete. Learners need week 2's documentation layer, week 3's harness living in a
real repo, and a real medium-sized feature to ship this week. Two issues need another
person's time (the cold spec swap and the ADR review), so those get booked first.

Learners with no suitable real feature use `weeks/week-4/data/vague-tickets.md`.

## Resources

- Deck: `weeks/week-4/Knowledge.html`
- Templates: `weeks/week-4/data/spec-template.md`, `adr-template.md`,
  `plan-review-rubric.md`, `divergence-log-template.md`, `brainstorm-brief-template.md`,
  `capstone-report-template.md`
- Practice material: `weeks/week-4/data/vague-tickets.md`,
  `design-drift-samples.md`, `cold-run-protocol.md`
- Optional deeper dives (search by name): Michael Nygard's 2011 article on documenting
  architecture decisions; Anthropic's Claude Code documentation on permission modes and
  model configuration.
