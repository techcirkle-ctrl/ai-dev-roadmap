# Plan review rubric · six checks

Run these in order. Write a verdict for **every** check, including the ones that pass.
Writing the passes is what makes the failures visible, and the whole pass takes about
four minutes.

Reviewing a plan means hunting for specific problems with a list, the same way you review
code. What you hunt for differs: in code review you hunt for bugs, in plan review you
hunt for the wrong approach, the missed dependency, and the step that is really three.

---

| # | Check | What failure looks like | Verdict |
|---|---|---|---|
| 1 | **Does it match the spec?** | Solves a nearby problem competently. Everything looks correct except what it is for. | |
| 2 | **Does it touch anything shared?** | Changes a file, table or endpoint other services, teams or repos depend on, without saying so. | |
| 3 | **Is every step really one step?** | "Update the API layer." Anything you cannot picture finishing in an hour is hiding work and probably a decision. | |
| 4 | **Does it say how you will know it worked?** | Ends in "ship it and monitor". No step that fails if the feature is broken. | |
| 5 | **Does it contradict a recorded decision?** | Reasonable on its own terms, and against an ADR you already wrote. | |
| 6 | **What is the rollback?** | "Revert the commit" — which does not un-backfill a table or un-send an email. | |

---

## Sending it back

Name the failing checks and the reason each one failed. Do **not** tell it what to do
instead: that gives you your own plan back, and you cannot review your own plan honestly.

> Checks 2 and 6 fail. The plan changes `shared/middleware/auth.ts`, which billing and
> search also use, and the rollback line says revert the commit even though step 3 runs
> a backfill. Revise the plan.

Then read the second plan beside the first and write down what actually changed.
Sometimes very little changes, and that is worth knowing too: either the first plan was
genuinely good, or your reasons were too vague to act on.

## Making it a habit

You have now read these six checks more than twice. By week 3's rule, that means they
belong in a file rather than in your head. A slash command holding this rubric turns the
review into one word. A hook can make accepting a plan without running it impossible.

Claude Code can also write plans to disk rather than leaving them in the scroll-back —
the `plansDirectory` setting decides where. A plan you can only scroll back to is a plan
you will skim.
