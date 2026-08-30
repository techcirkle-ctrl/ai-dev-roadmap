# [Week 3] Application — A skill that never fires and a skill that fires constantly are the same bug

**Pedagogy:** Application · **Milestone:** Week 3
**Prerequisite:** Week 3 Knowledge issue complete.
**Capstone class:** relevance-loaded knowledge (capstone step 4, evaluated in both directions)

## The Problem

You wrote a skill. It holds knowledge that matters in some sessions and is noise in the
rest, and the whole promise is that it arrives when the work needs it and waits quietly
otherwise.

That promise rests entirely on one line: the description. Everything else in the file is
invisible until the description wins. A description that reads beautifully and names no
trigger is the expensive failure, because it looks finished.

Evaluate it properly, in both directions. A skill that never fires taught nobody anything.
A skill that fires on every session is just a slow CLAUDE.md.

## Constraints

- A real skill from your own harness, carrying knowledge you genuinely have.
- Build a set of at least ten prompts: some that should fire it, some that should not, and
  at least two that sit near the boundary and could go either way.
- The near-boundary cases are the point. Ten obvious cases prove nothing.
- Use `weeks/week-3/data/skill-trigger-eval-template.md`.
- Predict each outcome **before** running it. Being wrong is the finding.

## Evidence Required

Upload on this issue before closing:

- [ ] The skill, and its description line called out separately
- [ ] The evaluation set, with your prediction for each prompt before running
- [ ] The actual results, and where prediction and reality differed
- [ ] The revised description, and which failure each change fixes
- [ ] One paragraph: the boundary case you got wrong, and what it taught you about how the
      description is read

## Success Criteria

- [ ] At least ten prompts, covering should-fire, should-not-fire, and boundary
- [ ] Predictions written before running
- [ ] Both failure directions tested, not just the happy one
- [ ] The description was revised against a real miss, not polished on instinct
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
