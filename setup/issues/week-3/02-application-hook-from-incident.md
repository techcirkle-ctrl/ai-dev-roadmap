# [Week 3] Application — The same mistake has reached review twice, and you caught it both times

**Pedagogy:** Application · **Milestone:** Week 3
**Prerequisite:** Week 3 Knowledge issue complete.
**Capstone class:** guarantees (capstone step 4, built from your own history rather than a chosen example)

## The Problem

Go through your own incident history: the near-misses, the things caught at review, the
thing that got merged and had to be reverted. Find one that keeps happening, and that keeps
being caught by somebody paying attention.

Attention is not a guardrail. It works while people are fresh and present, and it stops
working quietly when they are not. Make that specific mistake impossible in your repo, in a
way that holds when you are on leave and when a new joiner has never heard your speech
about it.

Then try to make the mistake on purpose. A guard you have not attacked is a guard you are
guessing about.

## Constraints

- The mistake must come from your team's real history, not from a list of common footguns.
  No history to draw on? `weeks/week-3/data/incident-briefs.md` ships real-shaped incidents.
- Whatever the guard enforces must be written down in `guardrails.md` first. A hook with no
  stated rule behind it is a surprise, not a guardrail.
- It must **refuse**, not warn. A message the model can talk past is not this exercise.
- The refusal has to explain itself. A silent block looks like a bug and gets worked around.
- You must attempt the blocked thing deliberately and show the refusal.

## Evidence Required

Upload on this issue before closing:

- [ ] The incident it comes from, and how many times it has happened
- [ ] The line in `guardrails.md` that states the rule
- [ ] The hook, and the scope you put it at with your argument
- [ ] A transcript of you asking for the blocked thing and being refused
- [ ] One paragraph: what it does **not** block, and why you drew the line there

## Success Criteria

- [ ] The mistake is one that genuinely happened, more than once
- [ ] The rule exists in `guardrails.md` before the hook enforces it
- [ ] The guard refuses rather than warns, and says why
- [ ] You attacked it deliberately and it held
- [ ] The limits of the guard are stated, not left implicit
- [ ] Evidence uploaded, `<name>:done` label added

Note: a guard you had to loosen after meeting real work is a pass, not a failure. Say what
you loosened and why.

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

~60 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
