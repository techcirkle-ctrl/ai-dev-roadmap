# [Week 4] Application — Your architecture document has been quietly wrong for a month

**Pedagogy:** Application · **Milestone:** Week 4 · **Due:** Sunday EOD
**Prerequisite:** Week 4 Knowledge issue complete.
**Capstone class:** keeping DESIGN.md honest (Act 4's drift habit, capstone step 5 run across a month of accumulated change)

## The Problem

Nobody has edited your `DESIGN.md` since you wrote it. Meanwhile the repo has moved. No
single commit felt like it invalidated a document, so nobody updated one, and the file now
describes a system that partly does not exist.

That matters more than it sounds. Missing information sends a reader to look at the code.
Wrong information sends them off confidently in the wrong direction. Your sessions read
this file too, so every wrong line becomes a wrong assumption in every session that
starts in that repo.

Find what has gone stale and fix it. Pay particular attention to the lines that are only
false in combination: one commit contradicts nothing on its own and becomes a problem once
a later one lands. That pairing is how real drift happens, and single-commit review misses
it every time.

The capstone had you fix one line prospectively, as part of shipping. This is the audit
for when that habit has not been running.

## Constraints

- Your own repo's `DESIGN.md`, audited against at least the last month of commits.
- No `DESIGN.md` yet, or a repo too young to have drifted? Write one first from week 2's
  guidance, or use `weeks/week-4/data/design-drift-samples.md`, which ships two documents
  and their commit logs. Say in your evidence which route you took.
- Ask only for contradictions. Asking a session to improve the document produces a rewrite
  you cannot check.
- The fix ships as a pull request, not as an uncommitted local edit.

## Evidence Required

Upload on this issue before closing:

- [ ] The audit output: each stale line quoted, the commit that made it stale, and what is
      true instead
- [ ] At least one line that was only false in combination, with both commits named
- [ ] The pull request fixing them
- [ ] One line: the habit you are adopting so this does not recur, stated concretely
      enough that you would notice breaking it

## Success Criteria

- [ ] Every stale line is quoted with the commit that made it stale
- [ ] At least one combination case is identified, or you argue why none exists
- [ ] The document now describes the system as it actually is
- [ ] The fix is raised as a pull request
- [ ] Evidence uploaded, `<name>:done` label added

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

~50 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
