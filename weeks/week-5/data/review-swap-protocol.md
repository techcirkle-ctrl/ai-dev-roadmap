# Review swap protocol — your harness on their code

The swap answers one question a solo run cannot: does your rubric work on a codebase you
did not write? Your own repo is the easy case, because your rubric grew up inside it.

Run it both ways. You review theirs, they review yours.

---

## Before you start

Both sides need:

- A review rubric committed in the repo, not text in a prompt.
- At least one ADR the rubric reads.
- A `guardrails.md`.
- Three pull requests a human has already reviewed. Merged ones are better than open ones,
  because you may also know what broke afterwards.

Read nothing about their PRs before you run the harness. The whole value is in the harness
meeting the code cold.

## The run

1. **Clone their repo and check out the first PR.** Do not read the human comments yet.
2. **Run your rubric against their diff,** not theirs. You are testing your rubric.
3. **Write down every finding** before you look at anything else.
4. **Now read the human review** on that PR.
5. **Repeat for all three PRs.**
6. **Swap the results and compare.**

## What to record, per PR

```
PR: <link>
Findings from my rubric: <numbered, each with path:line, rule, consequence>
Findings from the human review: <numbered>
Both found: <list>
Only the harness found: <list>
Only the human found: <list>
False alarms from my rubric: <list, and which check produced each>
```

## Reading the result

**Only the harness found.** This list justifies the whole exercise. If it is empty, your
rubric is restating what humans already do well and skipping the recall work they do
badly. Add an ADR check.

**Only the human found.** This is where your next rubric edits come from. Take one item
and write the check for it that day.

**False alarms.** Note which check produced each one. A check that cries wolf gets ignored
within a fortnight, so rewrite it or delete it. A rubric people ignore is worse than no
rubric, because it looks like coverage.

**Rules the rubric could not check because they were never written down.** This is the
most useful category and the easiest to miss. If the harness could not catch something
because your team never recorded the decision, the fix is an ADR, not a rubric check.

## If nobody is available right now

The cohort is self-paced, so nobody is guaranteed to be on this week when you are. Run
the solo version, which is genuinely close.

**Use a repository you did not write.** Any active open-source project works, and one in
your own stack works best. Pick three merged PRs that carry real review conversation.

1. Copy your rubric across, unchanged. Change nothing to suit their code, because that is
   the thing being tested.
2. Run it on the three PRs, before reading the review threads.
3. Read the review threads and compare.

What you lose is a rubric author who can tell you *why* a check missed something. What you
keep is the whole measurement: findings both ways, false alarms, and the checks that could
not fire because the rules only ever existed in someone's head.

Post on the **cold-read swap board** (the pinned standing issue) if you want a learner run
as well. It is not a blocker, and the solo run is a complete answer on its own.
