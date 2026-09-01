# [Week 5] Application — "It fails sometimes" and nobody can make it happen

**Pedagogy:** Application · **Milestone:** Week 5
**Capstone class:** the five stages (capstone step 2, on a bug nobody planted for you)

## The Problem

You have one of these. Everyone does. A failure somebody reported, that nobody has managed to
see on purpose, that gets closed as "cannot reproduce" and reopened six weeks later.

Make it happen on demand, then close it properly.

The deliverable is three things: a recipe that fails ten times out of ten, a fix that changes
the cause rather than the symptom, and the regression test that fails when the fix is
reverted. Two out of three is not a pass, and the middle one is the easiest of the three.

Nine failures in ten runs is not a reproduction. It is a coincidence with good manners, and
it is exactly what convinces people they fixed something. Get to ten, then shrink the recipe:
remove one condition and run again, and if it still fails that condition was never needed.
Keep going until every remaining step is load-bearing. A two-step recipe points almost
directly at the cause, and a nine-step recipe hides it.

## Constraints

- Propose no fix until the reproduction fails every time. This is the rule the whole exercise
  is built on, and breaking it means you are guessing with extra steps.
- One hypothesis at a time, each stated as a sentence that could turn out to be wrong. Do not
  open a second theory while the first is unresolved.
- Instrument before you conclude, and write down what you expect to see **before** you run
  it. That is what makes it a measurement rather than a look.
- The regression test must be proven: revert the fix, watch the test go red, restore the fix.
- Remove your instrumentation and confirm the gate is green afterwards.
- Capture it on `weeks/week-5/data/debug-loop-template.md` as you go, not afterwards.

## If your backlog has no live bug

Go into your closed issues and find a bug that was fixed **without** a regression test. Every
repo has several, and this version is harder than the live one.

- Check out the commit before the fix.
- Reproduce the bug there, to ten out of ten.
- Write the test, and confirm it fails on that commit and passes on main.
- Open the pull request adding it.

You end up with a regression test your repo was missing for a bug it has already had once.
That is worth more than most live bugs you could have picked.

## Evidence Required

Upload on this issue before closing:

- [ ] The five-stage sheet, filled in as you went
- [ ] The reproduction, and the count: how many of ten runs failed
- [ ] The shrunk recipe, and the conditions you removed because they did not matter
- [ ] Every hypothesis you ruled out, not only the one that was right
- [ ] The regression test, with output showing it fails when the fix is reverted
- [ ] One line: which gate should have caught this before it ever reached a branch

## Success Criteria

- [ ] The reproduction failed ten times out of ten, and was shrunk
- [ ] No fix was proposed before the reproduction existed
- [ ] You can name the cause in one sentence and say why the change stops it
- [ ] The regression test is committed and has been seen to fail
- [ ] Instrumentation removed and the gate green afterwards
- [ ] Evidence uploaded, `<name>:done` label added

Note: the ruled-out hypotheses are evidence, not clutter. A session that got it right first
time either had a very easy bug or was not really testing anything.

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

**At the keyboard:** ~75 minutes.
**Elapsed:** longer if the bug needs a real environment to reproduce in.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
