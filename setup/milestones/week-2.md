# Milestone — Week 2

## Name

Week 2 — Context engineering: what the model sees, at the right scope

## Pace

Self-paced. There is no due date. Work through it at whatever speed real work allows,
and ask for the next week when you are done with this one.

## Learning Objectives

- Read the context window as a budget: what occupies it, what attention it costs, and why
  context is spend rather than free storage.
- Use `/context` to take an honest reading of a real session, and explain each band of it.
- Write a CLAUDE.md whose rules actually get followed: short, imperative, and specific
  enough to act on.
- Place every document at its correct scope — global, workspace, project, directory,
  local — and argue the placement rather than defaulting to project.
- Scope the two architectures correctly: a microservices workspace needs docs at the
  folder spanning the repos, a monorepo needs root plus per-package files that fire only
  in their package.
- Symlink AGENTS.md to CLAUDE.md so the layer travels to other agents.
- Author the documentation layer (CONTEXT.md, DESIGN.md, guardrails.md) and know what each
  file is for.
- Run session hygiene deliberately: `/clear` when history is spent, focused `/compact` at
  breakpoints, and a written handoff when work outlives the window.
- Recognise a poisoned session and recover it with hygiene alone, without restarting the
  work.
- Prove the layer works by measuring it: the same task suite, before and after.

## Deck

`weeks/week-2/Knowledge.html` (5 acts, 6 hands-ons, 5-step capstone, fully narrated). All
week materials live in `weeks/week-2/`: two practice repos (`data/relay-workspace` for the
microservices case, `data/relay-mono` for the monorepo case) and four templates.

## Issues (in order)

1. **Knowledge** — work through the deck (acts → hands-ons → capstone). → `01-knowledge.md`
2. **Application ×6** (rep parity: each a fresh ticket-shaped problem of a capstone
   class) — cold repo swap · microservices scoping audit · monorepo per-package drill ·
   AGENTS.md interop check · context-poisoning recovery · handoff a session someone else
   resumes. → `02..07-application-*.md`
3. **Reinforcement** — CLAUDE.md ideology paragraph. → `08-reinforcement.md`

## Success Metrics

- All 8 issues carry every learner's `<name>:done` label with evidence, and are closed by
  the trainer.
- Every learner's capstone shows measured A/B differences on a five-task suite, not a
  claim that it felt better.
- Every learner authored a CLAUDE.md for someone else's repo and was graded by its owner
  on that owner's suite.
- Every learner can name the scope of every document they wrote, and defend it.

## Gate/Prerequisites

Week 1 complete: the wired environment, the friction log running, and one shipped
automation. The repo swap needs a partner, so it gets booked first.

## Resources

- Deck: `weeks/week-2/Knowledge.html`
- Practice repos: `weeks/week-2/data/relay-workspace` (microservices),
  `weeks/week-2/data/relay-mono` (monorepo)
- Templates: `weeks/week-2/data/task-suite-template.md`, `peer-swap-rubric.md`,
  `handoff-template.md`, `poisoning-drill-template.md`, `capstone-report-template.md`
- Optional deeper dives (search by name): Anthropic's Claude Code documentation on memory
  and settings.
