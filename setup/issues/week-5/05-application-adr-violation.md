# [Week 5] Application — A merged change quietly broke a decision you recorded

**Pedagogy:** Application · **Milestone:** Week 5
**Capstone class:** ADR compliance (capstone step 4, run backwards through history)

## The Problem

Somewhere in your repository's history is a change that contradicts a decision your team
wrote down. It passed review. Nobody noticed, because the reviewer had not read that record,
or had read it four months earlier.

Find it. Then build the check that would have caught it.

This is the failure mode decision records have always had. They are written once, carefully,
and then nobody rereads them. Six months later there are eleven and your reviewer has read
two. Human review is good at judgement and bad at recall, and every process depending on
human recall fails slowly and quietly.

Prove your check actually works. Plant a fresh violation of the same record, on a branch, and
watch the harness catch it.

## Constraints

- A real violation already merged into your repo, found by you, with the commit link.
- The check goes in your committed rubric, not in a prompt you typed once.
- The check must name the record by number in its finding, along with the file, the line and
  what goes wrong.
- Verify in both directions: it fires on the real violation, and it stays silent on the
  compliant code around it. A check that flags everything is not a check.
- Plant the fresh violation on a scratch branch and delete the branch afterwards.

## If your ADRs are too young to have been violated

Likely, if week 4 was your first one. Do the harder version, which is better anyway.

Write the record for a decision your codebase **already made and enforces inconsistently**.
There is always one. Look at error handling, money, time zones, identifier types, retry
policy, or logging levels: pick any of those and you will find two files disagreeing about
it.

Then the "violation already merged" is whichever side of the inconsistency lost. Same
exercise, same evidence, and you end the week with a record your team actually needed.

## Evidence Required

Upload on this issue before closing:

- [ ] The decision record, with a link
- [ ] The violating change: the commit, the file and line, and what it broke
- [ ] The rubric check you wrote
- [ ] Harness output catching the historical violation
- [ ] Harness output catching the fresh violation you planted, and staying quiet on the
      compliant code beside it
- [ ] One paragraph: why the reviewer at the time did not catch it, stated without blame

## Success Criteria

- [ ] A real violation identified, with its commit
- [ ] The check is committed in the rubric and names the record in its finding
- [ ] It fires on the real violation and on a planted one
- [ ] It does not fire on compliant code
- [ ] Evidence uploaded, `<name>:done` label added

Note: a violation that follows the letter of the record while breaking its reason is the best
possible answer here. Say so if you found one, and say what your check does and does not
catch about it.

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

**At the keyboard:** ~75 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
