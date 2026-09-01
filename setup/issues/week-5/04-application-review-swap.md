# [Week 5] Application — Your rubric has only ever met code you wrote

**Pedagogy:** Application · **Milestone:** Week 5
**Capstone class:** harness against human (capstone step 4, on a codebase you did not write)

## The Problem

Your review rubric grew up inside your own repo. It knows your conventions because you wrote
them, it finds your ADR violations because you wrote the ADRs, and it has never once been
wrong about anything in a way you noticed.

None of that is evidence. A rubric that works on the codebase it was born in is the easy
case, and it is the only case you have tested.

Run it against three pull requests in a repo you did not write, each one already reviewed by
a human. Read the harness findings before you read the review threads, because reading them
the other way round marks your own homework with the answers in front of you.

Then fix the rubric with what you learn. The list of things only the human caught is the
list of checks you are missing.

## Constraints

- Three pull requests, all with real human review conversation on them. Merged beats open,
  because you may also know what broke afterwards.
- Your rubric goes across unchanged. Editing it to suit their code destroys the measurement,
  which is the whole point of running it somewhere unfamiliar.
- Harness first, review threads second, every time.
- Record false alarms as carefully as findings, and name the check that produced each one. A
  check that cries wolf is ignored within a fortnight, and a rubric people ignore is worse
  than no rubric because it looks like coverage.
- Swap both ways if you have a partner: your rubric on their PRs, theirs on yours.

`weeks/week-5/data/review-swap-protocol.md` has the full run sheet and the recording format.

## If nobody is available right now

The cohort is self-paced, so nobody is guaranteed to be on week 5 when you are. Run the solo
version, which tests the same thing.

- Pick any active open-source repo in your stack, and three merged pull requests carrying
  real review conversation.
- Copy your rubric across unchanged and run it on all three, before you read a single
  comment.
- Compare exactly as the protocol sets out.

You lose one thing: a rubric author who can tell you *why* a check missed something. You keep
the entire measurement, including the category that matters most, which is rules the rubric
could not check because nobody ever wrote them down.

Post on the cold-read swap board (#34) if you also want a learner run. It is not a blocker.

## Evidence Required

Upload on this issue before closing:

- [ ] The three pull request links, and the repo
- [ ] Your rubric at the version you ran, unedited
- [ ] Per PR: harness findings, human findings, and the both / harness-only / human-only lists
- [ ] Every false alarm, with the check that produced it
- [ ] The checks you added or deleted afterwards, as a commit
- [ ] One paragraph: something the rubric could not catch because the rule was never written
      down anywhere

## Success Criteria

- [ ] Three PRs run in a codebase you did not write
- [ ] The rubric was unedited during the run
- [ ] The harness-only list is not empty, or you can say why your rubric only duplicates
      human judgement
- [ ] False alarms recorded and traced to specific checks
- [ ] At least one new check written from the human-only list
- [ ] Evidence uploaded, `<name>:done` label added

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

**At the keyboard:** ~90 minutes.
**Elapsed:** one sitting solo; a swap depends on your partner.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
