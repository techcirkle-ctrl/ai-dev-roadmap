# Brief · <ticket or feature>

The output of brainstorm, and nothing more. No file names, no code, no implementation
sketch anywhere in it. A brief that ends in a sketch has skipped two stages.

Keep it under one page. If it runs longer, you started designing.

The test: a colleague should be able to argue with your scope without knowing anything
about your codebase. If they need file names to disagree with you, this is doing the
plan's job.

---

## The problem, in one sentence

Name who suffers today, and what happens to them.

> <one sentence>

## Out of scope

At least three items. Fewer than three usually means you have not cut anything, and
scope you did not cut on purpose is scope that grows on Friday afternoon.

- <a thing a lazy reading of the ticket might wrongly include>
- <a thing>
- <a thing>

## Decisions this forces

Every decision, including the ones that look obvious. Mark each one.

| Decision | Decided now | Deferred to |
|---|---|---|
| <question> | <answer, or —> | <spec / plan / —> |

The deferred ones are safe only if they genuinely belong to a later stage. A decision
deferred because it is hard is not deferred, it is avoided, and it will surface during
execution at twenty times the cost.

## What I still do not know

Honest list. Uncertainty recorded here is cheap. Uncertainty discovered in execution is
not.

- <...>

---

## The prompt that produced this

```
I want to brainstorm this ticket, not solve it: "<paste your ticket>"

Do not propose an implementation, name any file, or write any code.
Instead:
1. Ask me the questions you would need answered to know what problem this solves.
2. List what a reasonable person might assume this includes, and flag which of
   those I probably do NOT want.
3. Name every decision this feature forces, even the ones that look obvious.
4. Tell me which of those decisions can safely wait until later.

Ask me your questions one at a time and wait for my answer.
```

If it keeps proposing solutions, your ticket already contains one. Strip the solution out
and paste only the symptom.
