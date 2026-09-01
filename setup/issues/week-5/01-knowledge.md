# [Week 5] Knowledge — Loop engineering I: the verified loop

**Pedagogy:** Knowledge · **Milestone:** Week 5

## Deck

`weeks/week-5/Knowledge.html` on `main`. Open it in a browser. It is self-contained and
narrated: press the voice button to have it taught aloud, or read it in silence and lose
nothing but the examples.

Everything the week needs is in `weeks/week-5/`. Two things get picked before Day 1 ends:
a feature small enough to build in an afternoon, and one module you would be nervous to
change.

## Instructions (in order)

1. **Read through the acts.** Make sure you know the following topics covered in the deck:
   - Act 1 — Never trust "done": the four closing signals, what each is blind to, and how
     to find out whether your gate catches anything
   - Act 2 — TDD with an agent: why red comes first, and the four ways a failing test gets
     weakened
   - Act 3 — Debugging as a loop: the five stages, and why a reproduction is a recipe
   - Act 4 — Claude as first reviewer: what makes a finding actionable, and automating the
     recall humans are worst at
2. **Do the hands-on exercises** embedded in each act, on your own system:
   - [ ] Hands-on 01 — Wire the gate, then break the code to prove it works
   - [ ] Hands-on 02 — One real red-green-refactor, with the test file locked
   - [ ] Hands-on 03 — Drive one real bug through all five stages
   - [ ] Hands-on 04 — Build the review command and run it on a reviewed PR
3. **Drive every widget** and read its score line. Eight of them: the catch matrix, the
   mutation board, the two-lane trace, the cheat detector, the stage tracker, the
   reproduction builder, the findings sorter, the compliance check.
4. **Build the capstone project** as guided at the end of the deck: one feature, gated at
   every step, reviewed before a human saw it.

## Proof of Work

Press **Copy the capstone report** on the final capstone step and paste the markdown as a
comment on this issue. It must carry:

- The gate: what it runs, what it found on a clean main, and its total run time
- The planted bug: the mutation, and whether the gate caught it or it survived
- The hunt: the reproduction, hypotheses ruled out, and which stage actually found it
- The red-green-refactor cycles, and the test-file diff at the end
- The rubric path, its checks, and the one that reads your ADRs
- Three PRs, with the harness findings against the human review on each
- Misses in both directions
- Your two verdict lines: the gate that turned out to be decoration, and the one signal
  you are adding

If you lost your captures, `weeks/week-5/data/capstone-report-template.md` rebuilds the
report from your artifacts in about ten minutes.

## Success Criteria

- [ ] All four acts read; the topics above understood
- [ ] All four hands-on exercises completed on own system
- [ ] Capstone completed: one feature built test-first, every change through the gate
- [ ] The gate command, the review rubric and the regression test are committed in the repo
- [ ] The report contains at least one number you did not like
- [ ] Capstone report pasted as a comment on this issue

## Assigned To

[Learner]

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
