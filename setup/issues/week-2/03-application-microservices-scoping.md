# [Week 2] Application — Six repos, one team, and the same context pasted into every session

**Pedagogy:** Application · **Milestone:** Week 2
**Prerequisite:** Week 2 Knowledge issue complete.
**Capstone class:** scope placement (capstone step 3, on a workspace rather than one repo)

## The Problem

Your team owns several services in separate repositories. They share conventions, a
deployment story, and a set of things nobody is allowed to do. Right now each of those
lives either in one repo's CLAUDE.md, where the other five never see it, or in your head,
where you re-type it every session.

Fix the placement. Some of that knowledge belongs to a single service, and some of it spans
all of them and needs to sit at the folder above. Work out which is which, put each piece
where it belongs, and then prove the placement changed how a session behaves.

The proof is the part people skip. A document at a new scope is a claim. A session that
picks up workspace-level guidance while working inside one service is evidence.

## Constraints

- A real multi-repo workspace you work in. No suitable one? Use
  `weeks/week-2/data/relay-workspace`, which ships the microservices case.
- At least one document must sit at **workspace** scope, spanning the repos, and at least
  one must stay repo-local. Both placements get an argument.
- The behaviour change has to be shown, not asserted: the same request in one service,
  before and after, with the difference visible.
- Nothing that belongs to one service may end up at workspace scope for convenience.

## Evidence Required

Upload on this issue before closing:

- [ ] The workspace layout: which file sits where, with the argument for each placement
- [ ] The before-and-after evidence for at least one request, showing the workspace file
      taking effect inside a service
- [ ] One paragraph: something you nearly placed at workspace scope and did not, and why
- [ ] The cost you removed, in concrete terms: what you no longer paste or re-type

## Success Criteria

- [ ] At least one workspace-level document exists and demonstrably loads inside a service
- [ ] At least one document is deliberately kept repo-local, with a reason
- [ ] The behaviour change is evidenced by a before-and-after, not described
- [ ] Every placement carries an argument in your own words
- [ ] Evidence uploaded, `<name>:done` label added

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
