# Milestone — Week 5

## Name

Week 5 — Loop engineering I: the verified loop

## Pace

Self-paced. There is no due date. Work through it at whatever speed real work allows,
and ask for the next week when you are done with this one.

## Learning Objectives

- Name what each of the four closing signals can and cannot see: typecheck catches shape,
  lint catches banned patterns, tests catch behaviour, build catches assembly. Explain why
  three of the four never run your code, and what falls through all three.
- Wire those checks into one gate command that stops at the first failure, and know its run
  time, because that number decides how often the gate actually gets used.
- Run a mutation drill by hand: plant a deliberate change that should make a check fail, and
  read a surviving mutation as a proven hole rather than a style warning.
- Explain why coverage and mutation survival measure different things, and why a fully
  covered function can survive most mutations.
- Run red-green-refactor with an agent, and state why a test written after the code proves
  nothing about the code.
- Recognise the four ways a failing test gets weakened (assertion, input, skip, mock) and
  apply the rule that catches all four: if the test file changed while the test was failing,
  look again.
- Drive a bug through five named stages (reproduce, hypothesise, instrument, fix,
  regression-test), and identify a move that belongs to none of them as a guess.
- Build a reproduction that fails ten times out of ten, shrink it, and write it as the
  failing test so the regression test exists before the fix does.
- Write a review rubric whose every finding names a place, a rule and a consequence, and
  know that a rubric reading your ADRs automates recall, which is what human review is worst
  at.

## Deck

`weeks/week-5/Knowledge.html` (4 acts, 4 hands-ons, 5-step capstone, 8 driveable widgets,
fully narrated). All week materials live in `weeks/week-5/`: seven templates and practice
files in `data/`, and the rendered narration in `audio/`.

Spine example throughout: an order-sync service that pulls supplier orders, dedupes them,
converts currency and writes to a database.

## Issues (in order)

1. **Knowledge** — work through the deck (acts → hands-ons → capstone). → `01-knowledge.md`
2. **Application ×5** (rep parity: each a fresh ticket-shaped problem of a capstone class)
   — planted-bug drill on a fresh module · regression suite for a module nobody touches ·
   review swap against code you did not write · ADR violation already merged · an
   intermittent bug made deterministic. → `02..06-application-*.md`
3. **Reinforcement** — CLAUDE.md ideology paragraph. → `07-reinforcement.md`

## Success Metrics

- All 7 issues carry every learner's `<name>:done` label with evidence, and are closed by
  the trainer.
- Every learner has a gate command in a real repo, with its run time recorded and at least
  one mutation drill run against it.
- Every learner has killed a previously surviving mutation with a test they wrote, proven by
  re-running the drill.
- Every learner has a regression suite on a module that had none, where every test was
  proven by breaking the code.
- Every learner has run their review rubric on three pull requests in a codebase they did
  not write, with misses recorded in both directions.
- Every learner has one reproduction that failed ten times out of ten, and a regression test
  proven by reverting the fix.

## Gate/Prerequisites

Week 4 complete. Learners need week 3's harness and `guardrails.md` in a real repo, at least
one ADR from week 4, and a feature small enough to build in an afternoon. They also pick,
before Day 1 ends, one module they would be nervous to change.

One issue wants another person's time (the review swap), so it gets booked first. It also
carries a solo route against an open-source repo, and nobody is blocked waiting.

Learners whose repo has no test suite wire the checks they do have and treat the missing
suite as the week's finding. Act 1's hands-on works from a typecheck and a build alone.

## Resources

- Deck: `weeks/week-5/Knowledge.html`
- Templates: `weeks/week-5/data/verify-command.md`, `review-rubric.md`,
  `debug-loop-template.md`, `capstone-report-template.md`
- Practice material: `weeks/week-5/data/mutation-catalogue.md`, `planted-bug-briefs.md`,
  `review-swap-protocol.md`
- Optional deeper dives (search by name): Kent Beck's book on test-driven development; the
  Stryker mutation testing documentation; Anthropic's Claude Code documentation on slash
  commands and hooks.
