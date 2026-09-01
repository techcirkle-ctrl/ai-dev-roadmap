# Mutation catalogue — the shapes to plant, and what should catch each one

A **mutation** is one small change to working code that should make at least one check
fail. If nothing fails, that mutation **survived**, and a surviving mutation is a proven
hole in your safety net.

This is the list you plant from. Work on a branch, plant one at a time, run your gate,
then undo it before planting the next one.

> Plant these on a scratch branch and delete the branch afterwards. A planted bug merged
> by accident is a memorable way to learn the lesson.

---

## How to run the drill

1. Pick the module you would be most nervous to change.
2. Plant one mutation from the table below.
3. Run `/verify`. Record which check went red, or record that nothing did.
4. Undo the mutation. Plant the next one.
5. Count. Your score is catches out of attempts.

Three mutations is enough to learn something. Six tells you where the holes cluster.

## The shapes

| # | Shape | What it looks like | Should be caught by | Usually caught by |
|---|---|---|---|---|
| 1 | Flip a comparison | `===` becomes `!==`, `>` becomes `<` | tests | tests, loudly |
| 2 | Move a boundary by one | `i <= max` becomes `i < max` | tests | nothing |
| 3 | Remove an `await` | `await write(row)` becomes `write(row)` | lint | lint, if the rule is on |
| 4 | Swap two arguments of the same type | `f(orderId, ref)` becomes `f(ref, orderId)` | tests | nothing |
| 5 | Delete a condition | remove the `if (seen.has(key))` guard | tests | nothing |
| 6 | Return the wrong branch | `return a` becomes `return b` in an if/else | tests | tests |
| 7 | Change a default | `retries = 3` becomes `retries = 0` | tests | nothing |
| 8 | Widen a type | a named type becomes `any` or `object` | typecheck | nothing, which is the point |
| 9 | Swallow an error | add `catch (e) {}` around a real call | lint | nothing, usually |
| 10 | Off-by-one on a slice | `slice(0, n)` becomes `slice(0, n - 1)` | tests | nothing |

The right-hand column is the honest one. Shapes 2, 4, 5, 7, 8 and 10 survive most real
test suites, and they are the shapes real bugs actually take.

## The two that teach the most

**Swap two arguments of the same type** (shape 4). Nothing is wrong on the page. Same
types, both present, both spelled correctly. No check that reads your code rather than
running it can object. This is the shape behind a great many production incidents.

**Move a boundary by one** (shape 2). A retry that runs four times instead of three, a
page that returns 99 rows instead of 100. It passes every check and reconciles wrong.

## Reading your score

**Caught 3 of 3.** Either your suite is genuinely good, or your mutations were too loud.
Try shapes 4 and 5 before you celebrate.

**Caught 1 or 2.** Normal, and useful. Look at what survived and name the test that would
have killed it. That name is the first line of your regression suite.

**Caught 0 of 3.** You have learned the most valuable thing available this week. Every
green run you have ever trusted in this module meant nothing. Write it down.

## After the drill

For each surviving mutation, write one line: what you changed, and the test that would
have caught it. That list is the work, and the weekend's regression-suite issue is where
you do it.

Tools exist that do this automatically: **Stryker** for JavaScript and TypeScript,
**PIT** for Java, **mutmut** for Python. They generate hundreds of mutations and report a
mutation score. They are slow, so teams run them occasionally on the modules that matter
rather than on every commit. Doing it by hand three times gets you most of the value in
about fifteen minutes.
