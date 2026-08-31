# [Week 1] Application — relay's weekly report claims work nobody shipped

**Pedagogy:** Application · **Milestone:** Week 1
**Prerequisite:** Week 1 Knowledge issue complete.
**Capstone class:** debug — capstone step 4 (the done-2 bug was the guided rep; this bug is yours).

## The Problem

A relay user writes in: "Our Friday report says we shipped 11 tasks this week. We
shipped 6. Some weeks the count is nearly double, and nobody can say why."

In a fresh session on the gym repo, run the full loop on this ticket: reproduce it
first, find the full cause, fix it, and prove the fix with a regression test — claim
done only when `node --test` passes. Then annotate your own session beat by beat
(gather / act / verify) using the autopsy template, and hand the write-up to your
audit partner: reading it cold, they must answer (a) what the bug was, (b) which beat
found the cause, (c) what closed the loop.

## Constraints

- Gym repo (`~/relay-gym`), fresh session; the capstone's done-2 session doesn't carry over.
- Reproduce before fixing; the fix stays in the files the cause lives in.
- The verify signal is `node --test`.
- Autopsy per `weeks/week-1/data/loop-autopsy-template.md`, one row per tool call, beat-tagged.

## If nobody is available right now

The three-question test needs a reader who was not there. A **fresh Claude Code session**
is genuinely one: it has never seen your session, your repo history, or your reasoning.

Start a new session, give it your autopsy write-up and nothing else, and ask it the same
three questions. Where it answers wrongly or hedges, your write-up has a gap. A human
partner is still the better test, because a human will tell you when a sentence is
confusing rather than guessing well. Post on the swap board if you want one.

## Evidence Required

Upload on this issue before closing:

- [ ] The annotated autopsy
- [ ] Test output: failing before the fix, passing after
- [ ] Your partner's three answers, and one line on what you rewrote if they stumbled

## Success Criteria

- [ ] The session reproduced the bug before fixing it
- [ ] The regression test would catch this bug if it returned next month
- [ ] A cold reader passed the three-question test
- [ ] Evidence uploaded, `<name>:done` label added

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

**At the keyboard:** ~1.5 hours.
**Elapsed:** one sitting solo; longer if you wait for a partner.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
