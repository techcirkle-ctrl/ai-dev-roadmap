# Planted-bug briefs — fresh problems for the signal-strength drill

Six briefs. Each one names a **shape** of mutation and the kind of module to plant it in.
None of them tells you the specific line, because working that out is the exercise.

Use these for the "which of your gates is decoration" Application issue. Pick three you
have not already run in Hands-on 01, and pick them in a module you did not use on Monday.

> Plant on a scratch branch. Delete the branch afterwards.

---

## Brief 1 · The invisible swap

Find a function taking two or more parameters of the same type, next to each other, where
both are usually populated. Swap two of them at a call site.

**What should catch it:** a test that asserts on the distinct meaning of each argument.
**What usually catches it:** nothing.

## Brief 2 · The boundary

Find a loop, a slice, a pagination offset or a retry counter. Move the boundary by one.

**What should catch it:** a test that exercises the exact edge, not the middle.
**What usually catches it:** nothing.

## Brief 3 · The missing wait

Find an asynchronous call whose result nobody uses: a write, a publish, a cache
invalidation. Remove the `await`.

**What should catch it:** your linter, if the floating-promise rule is on.
**What usually catches it:** the linter, or nothing at all. Note that tests often stay
green here, because they finish before the write does.

## Brief 4 · The deleted guard

Find a defensive check that rarely fires: a duplicate guard, a null check, a permission
test, an empty-array short circuit. Delete it entirely.

**What should catch it:** a test that supplies the case the guard exists for.
**What usually catches it:** nothing, because that case is exactly what nobody tested.

## Brief 5 · The widened type

Find a value with a named or narrow type crossing a boundary. Widen it to `any`, `object`,
`dict`, `interface{}` or your language's equivalent.

**What should catch it:** the typecheck, if your settings forbid the escape hatch.
**What usually catches it:** nothing, which is the finding.

## Brief 6 · The quiet catch

Find a call that can fail inside a path that matters. Wrap it in a catch that logs at debug
level and continues.

**What should catch it:** your linter, or the review harness reading `guardrails.md`.
**What usually catches it:** nothing, and this is the shape that hides bugs for days.

---

## Recording it

For each brief you run, three lines are enough:

```
Brief N · <shape> · planted in <path>
Gate result: caught by <check> in <time> / survived every check
The test that would have killed it: <name it, even if you have not written it>
```

That third line is the deliverable. A surviving mutation with a named test is a finding.
A surviving mutation with a shrug is a story.

## If everything gets caught

Your mutations were probably too loud. Briefs 1, 2 and 4 are the subtle ones, and if all
three of those are caught in a module you were nervous about, you have a genuinely good
suite and that is worth saying out loud in your evidence.
