# Review rubric — the checks Claude answers about every diff

Copy this into your repo, next to `guardrails.md`. A good home is `docs/review-rubric.md`.
Then edit it, because a rubric copied unchanged is somebody else's rubric.

A **rubric** is the list of questions a reviewer must answer about every piece of work,
written down in advance so that two reviewers reach the same verdict. It is the difference
between a review and an impression.

---

## The rule that makes it work

Every check is a **question with a yes-or-no answer about a named path**. Not a value, not
a principle.

- Checkable: "Does any file under `src/fx/` do arithmetic on a non-integer amount?"
- Not checkable: "Money must be handled correctly."

Every finding must name three things. Strip any one of them and the finding is noise.

1. **A place** — a file and a line.
2. **A rule** — the guardrail, ADR, spec line or convention it breaks.
3. **A consequence** — what goes wrong if nobody changes it.

## The checks

Delete what does not apply. Add two from your own incident history, because those are the
ones that will actually fire.

### 1 · Recorded decisions
Does any change in this diff contradict a decision in `docs/adr/`? Read every file there.
Name the ADR by number.

*This is the check no human reviewer reliably performs, and the reason the rubric exists.*

### 2 · Guardrails
Does any change break a rule in `guardrails.md`? Quote the rule.

### 3 · Closing signals
Does every behaviour change in this diff have a test that fails without it? If a test was
added, would it fail if the change were reverted?

### 4 · Test integrity
Were any files under the test directory modified? For each change, say whether it
strengthens or weakens the assertion. Flag any skipped test, widened tolerance, changed
fixture that removes a case, or mock of the thing under test.

### 5 · Error handling
Is any error caught and not logged with context, or logged below warning level, or
swallowed entirely?

### 6 · Shared code
Does this diff change a file that other modules or services import? Name them.

### 7 · Rollback
If this were merged and had to be reversed, would reverting the commit be enough? Name
anything that would survive the revert: migrations, backfills, published messages, written
state.

### 8 · Leftovers
Any debug logging, commented-out code, `TODO` without an issue link, or temporary
instrumentation from a debugging session?

---

## What the rubric must forbid

Put these lines in the command that runs it, not just here:

- Report nothing that is not a violation of a written rule. No style opinions.
- If you cannot name the file and line, do not raise it.
- End with the single most serious finding, and say why it is the worst.

Without those, you get polite, plausible, unusable prose. "Consider adding error handling"
is what an unrubriced review is good at.

## Where a rubric cannot reach

A machine check reads the letter of a rule and cannot see its purpose. A diff can obey
every word of an ADR and break the reason it was written.

State the **reason** next to each rule, the way ADR-0003 does in the deck's Act 4. That
narrows the gap. It does not close it, and closing it is your human reviewer's job.

## Growing the rubric

Two habits, both cheap:

**Every miss becomes a check.** When a human catches something the harness did not, write
the check for it that day. That is how a rubric gets good, one real miss at a time.

**Every repeat becomes a lint rule.** When a check keeps flagging the same thing, promote
it out of the rubric and into the linter. A rule a machine enforces automatically is
cheaper than one a reviewer looks for.
