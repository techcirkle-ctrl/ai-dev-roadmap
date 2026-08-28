# [Week 4] Application — Work out where your planning was wrong on something you already shipped

**Pedagogy:** Application · **Milestone:** Week 4 · **Due:** Sunday EOD
**Prerequisite:** Week 4 Knowledge issue complete.
**Capstone class:** divergence analysis (capstone step 5, run backwards on work that had no plan)

## The Problem

You shipped something in the last month without a spec. It worked, it merged, and you
have no idea whether it went the way you expected, because you never wrote down what you
expected.

Reconstruct it. Work out what you would have planned on the morning you started, honestly,
without letting hindsight tidy it up. Then compare that against what actually happened and
classify every difference by cause: the spec would have been wrong, the plan would have
been wrong, the world changed under you, or you changed your mind.

The classification is the whole exercise. The differences themselves tell you very little.
The pattern in their causes tells you which artifact you write badly, and that is a finding
you carry into week 5 and beyond.

Reconstructing a plan you never wrote is harder than logging against one you did, and it is
the honest version of this skill. Most of your past work has no plan to compare against.

## Constraints

- A feature you shipped in the last month, that went through no spec and no written plan.
- Reconstruct the plan **before** you look at the commit history in detail. Writing it
  afterwards produces a plan that conveniently predicted everything.
- Every divergence gets exactly one cause from the four. If one genuinely has two, say so
  and argue it.
- Use `weeks/week-4/data/divergence-log-template.md`.

## Evidence Required

Upload on this issue before closing:

- [ ] The reconstructed plan, written before you examined what happened
- [ ] The divergence log: planned, actual, cause, and cost for each row
- [ ] The count by cause
- [ ] One paragraph: what the dominant cause says about which artifact you write badly,
      and what you will do differently on the next feature

## Success Criteria

- [ ] The reconstruction was written before the detailed comparison, and you say so
- [ ] Every divergence carries one of the four causes
- [ ] The causes are counted, not just listed
- [ ] You name the artifact your count implicates, and what changes as a result
- [ ] Evidence uploaded, `<name>:done` label added

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

~45 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
