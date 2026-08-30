# [Week 4] Application — Turn the worst-written ticket you own into something buildable

**Pedagogy:** Application · **Milestone:** Week 4
**Prerequisite:** Week 4 Knowledge issue complete.
**Capstone class:** scoping into cold-executability (capstone steps 1 and 2, starting from somebody else's ambiguity)

## The Problem

Somewhere in your backlog is a ticket that says something like "make the export less
painful" or "we need audit logging". It was written by someone who is not an engineer,
it names a wish rather than a problem, and it hides at least four decisions nobody has
made.

Take it all the way to a spec a cold session can execute. No code at any point, and no
file names until you are past the brainstorm.

The hard part is the beginning. A brainstorm that ends in an implementation sketch has
skipped two stages, and the instinct to start designing is strong when the ticket is
vague. Widen first, then narrow deliberately. The widening feels like wasted time and it
is where the hidden decisions live.

Watch for tickets that name a solution before they name a problem. Roughly half of real
tickets do this, and starting on the named solution is the trap. Ask what would still be
true if that solution turned out to be the wrong answer.

## Constraints

- The vaguest real ticket you own. No suitable one? Use `weeks/week-4/data/vague-tickets.md`,
  which ships four. Do not pick the one that looks easiest.
- No code and no file names anywhere in the brief.
- The brief stays under one page. Longer means you started designing.
- The spec must pass the cold-run check in `weeks/week-4/data/cold-run-protocol.md`.
- Patch the file, never the chat.

## Evidence Required

Upload on this issue before closing:

- [ ] The original ticket text, unedited
- [ ] The brief: the problem in one sentence, at least three things cut from scope, every
      decision the ticket forces marked as decided or deferred
- [ ] The spec, and the question count before and after patching
- [ ] One paragraph: which decision you almost deferred because it was hard rather than
      because it belonged to a later stage

## Success Criteria

- [ ] The problem is one sentence and names who suffers today
- [ ] At least three items are cut from scope, and each is something a lazy reading of the
      ticket would have included
- [ ] Every decision the ticket forces is written down and marked
- [ ] No file name or code appears in the brief
- [ ] Both question counts are recorded, and the spec reached READY or has honest open
      questions written into it
- [ ] Evidence uploaded, `<name>:done` label added

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

~75 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
