# [Week 2] Application — One repo, eight packages, and rules that fire in the wrong ones

**Pedagogy:** Application · **Milestone:** Week 2 · **Due:** Sunday EOD
**Prerequisite:** Week 2 Knowledge issue complete.
**Capstone class:** scope placement (capstone step 3, on the monorepo case)

## The Problem

A monorepo puts everything in one tree, which makes it tempting to put every rule in one
file at the root. That file then loads for every session in every package, whether the
work is in the payments package or the docs site.

The cost is real and quiet. Rules that matter in one package are noise in the other seven,
and they compete for attention with the rules that do apply. Meanwhile the specific
guidance a package genuinely needs gets left out, because the root file is already long.

Split it. Work out what is genuinely true across the whole repo and what belongs to one
package, then place each accordingly. Then prove that a package-level file loads when you
work in that package and stays out of the way everywhere else.

## Constraints

- A real monorepo you work in. No suitable one? Use `weeks/week-2/data/relay-mono`.
- At least two packages get their own directory-level file, and both must be shown firing
  only in their own package.
- The root file must get shorter. If it did not, you moved nothing.
- Show the negative case as well as the positive one: a session in package A must not pick
  up package B's file.

## Evidence Required

Upload on this issue before closing:

- [ ] The tree: which file sits at which level, after your change
- [ ] Evidence that each package-level file loads inside its own package
- [ ] Evidence that it does **not** load in a sibling package
- [ ] Before and after line counts for the root file, and what you moved out of it
- [ ] One line: a rule you found at root that turned out to be true for only one package

## Success Criteria

- [ ] At least two packages carry their own directory-level file
- [ ] Each is shown loading in its package and staying silent in a sibling
- [ ] The root file is shorter, and you can say what left it
- [ ] The negative case is evidenced, not assumed
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
