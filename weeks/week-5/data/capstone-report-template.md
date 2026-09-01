# Week 5 capstone report — one feature, test-gated, reviewed before a human saw it

The paper fallback. The deck assembles this for you from its capture boxes, so use this
file only if you lost the captures, prefer writing by hand, or want to see the shape
before you start.

Paste the finished report as a comment on your **Week 5 Knowledge issue**.

---

## The gate: what it runs, what it found on main, how long it takes

- Command:
- Checks it runs:
- Result on a clean main branch:
- Total run time:

## Planted bug: the mutation, and whether the gate caught it

- The mutation, and where you planted it:
- Gate result: caught by which check, or survived everything:
- Time to red, if it went red:

## The hunt: the five stages, and which one actually found it

- The reproduction, and how many of ten runs failed:
- Hypotheses ruled out before the right one:
- The stage that actually found it:
- Stages the session tried to skip:

## The feature, TDD'd: red-green-refactor cycles and the gate at each step

- Cycle 1: behaviour, red at, green at, what the refactor changed:
- Cycle 2:
- Cycle 3:
- Test-file diff at the end: clean, or the unexpected lines you found:

## The review rubric: the named checks, including the ADR check

- Path:
- Number of checks:
- What the ADR check reads:
- Checks you added from your own incident history:

## Three PRs reviewed: harness findings against the human review

- Your own PR: findings, and what you fixed before asking anyone to look:
- PR 2:
- PR 3:

## Misses both ways

- Only the harness found:
- Only the human found:
- What that tells you about the rubric:

## Verdict

- **The gate that turned out to be decoration:**
- **How you know:**
- **The one signal you are adding this week:**
- **Where it goes, and what it will catch that nothing catches today:**

---

Your report should contain at least one number you did not like. A week where every check
passed and every gate caught everything measured nothing.
