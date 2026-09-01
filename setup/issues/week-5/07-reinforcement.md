# [Week 5] Reinforcement — Done is a claim until something checks it

**Pedagogy:** Reinforcement · **Milestone:** Week 5
**Prerequisite:** Week 5 Knowledge issue complete.

## Why

This week's habits are the easiest in the programme to drop. Nothing in the tool stops you
accepting "all tests pass" without running them. Nothing stops a session editing a test to
get past it. Nothing flags a fix that shipped with no regression test.

The pressure is always in the same direction, and it is strongest on the afternoons when
these habits matter most. So you write the guard into your global `~/.claude/CLAUDE.md`,
where every session you ever start will read it.

## The Task

Add a paragraph to `~/.claude/CLAUDE.md` (global scope, not the project file) that makes
Claude surface this week's ideology unprompted, in every future session.

It should cause Claude to:

- **Refuse to say done.** Never report work as complete without naming the check that proves
  it and showing that check's actual output from after the last edit.
- **Name the stage while debugging.** Say which of reproduce, hypothesise, instrument, fix or
  regression-test the current move belongs to, and say so when a move belongs to none of them.
- **Leave failing tests alone.** Never modify a test while it is failing. If the test looks
  wrong, stop and say why rather than changing it.
- **Treat a fix without a regression test as unfinished,** and say which test is missing.

Write it in your own words. Copying the bullets above verbatim produces something that reads
like a checklist and gets ignored. Keep it short: a long paragraph competes for attention
with everything else in the file.

## Evidence Required

Upload on this issue before closing:

- [ ] The paragraph you added, exactly as it appears in your global `~/.claude/CLAUDE.md`
- [ ] A transcript excerpt where it fired **unprompted** in real work, after you added it
- [ ] One line: what it caught that you would otherwise have missed

## Success Criteria

- [ ] The paragraph is in the **global** file, not a project one, and you can say why that
      scope is right
- [ ] It is in your own words
- [ ] You have evidence of it firing unprompted on real work
- [ ] Evidence uploaded, `<name>:done` label added

## Time Estimate

~20 minutes, plus waiting for it to fire naturally.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
