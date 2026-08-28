# DESIGN.md drift · practice material

For the drift audit when your own repo has no DESIGN.md yet, or when you want a second
rep before you audit something real.

A design document describes what the system is **now**. It goes wrong quietly, one merged
commit at a time, because no single commit feels like it invalidates a document.

Stale is worse than absent. Missing information sends people to look at the code. Wrong
information sends them off confidently in the wrong direction — and your sessions read it
as truth too, so a wrong line becomes a wrong assumption in every session that starts.

---

## Sample A · relay (the deck's example, extended)

```markdown
## relay · DESIGN.md

1. All traffic enters through gateway/router.ts.
2. Rate limiting is per API key, in process memory.
3. There is no shared cache; services own their state.
4. Auth runs once, in the gateway, before routing.
5. Every endpoint is versioned under /v1.
6. Background jobs run in-process on a 60s timer.
```

Commits merged since it was last edited, newest last:

1. `feat: switch rate limits to per-team`
2. `feat: add Redis for rate counters`
3. `refactor: move auth into per-service middleware`
4. `feat: add /v2 endpoints for the new client`
5. `chore: extract jobs into a separate worker process`
6. `fix: route /webhooks/* directly, bypassing the gateway`

Which lines are now false? Which are false only in combination? Commit 3 contradicts
nothing on its own — it becomes a problem once commit 4 lands, and that is how real drift
happens. Single-commit review misses it every time.

---

## Sample B · a document that is subtly wrong

```markdown
## billing · DESIGN.md

1. Invoices are generated nightly at 02:00 UTC.
2. We never store card numbers; the provider holds them.
3. Refunds are manual, raised by support through the admin panel.
4. All money values are integers, in the smallest currency unit.
```

Commits merged since:

1. `feat: generate invoices on demand as well as nightly`
2. `feat: automatic refunds under £10`
3. `feat: store last-four digits for receipt display`
4. `perf: batch the nightly run into 4 shards at 02:00, 02:15, 02:30, 02:45`

Every line here is still *partly* true, which is the harder case. Line 2 in particular
is now the dangerous kind of wrong: technically defensible, and it will stop someone
asking a question they should ask.

---

## The audit

Ask only for contradictions. Asking a session to "improve" the document produces a
rewrite you cannot check.

```
Read DESIGN.md and the commit log for the last month.

List only the lines in DESIGN.md that the commits contradict. For each one:
quote the line, name the commit, and say what is now true instead.
Do not rewrite the document. Do not suggest improvements.
If a line is only contradicted by two commits in combination, say so explicitly.
```

The fix is a habit rather than a tool: a change that makes a line untrue updates that line
in the same pull request, so reviewers see both together. The audit is for when the habit
slips.
