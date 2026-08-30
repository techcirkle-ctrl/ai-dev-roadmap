# [Week 2] Application — Your context layer only works for one tool, and your team uses three

**Pedagogy:** Application · **Milestone:** Week 2
**Prerequisite:** Week 2 Knowledge issue complete.
**Capstone class:** portability of the layer (Hands-on 04's class, run against a real second reader)

## The Problem

You have spent a week writing standing rules for your repo, and every one of them lives in
a file named for one tool. A teammate using a different agent gets none of it, and the
repo silently has two standards: the written one and the one everybody else works to.

Make the layer portable, then check that the portability is real rather than theoretical.
A symlink that exists is not the same as a symlink another tool actually reads, and the
difference only shows up when you test it.

Then decide what happens next time the file changes. A symlink keeps two names pointing at
one file, which is the point, and it also means anyone editing either name edits both.
Write down what that means for your team.

## Constraints

- A real repo, and the symlink committed rather than left local.
- The interop check must involve a genuinely different reader: another agent, another
  tool, or at minimum a teammate's environment that does not have your setup.
- If your platform or repo cannot carry a symlink, say so and solve it another way, then
  explain the trade-off you accepted.
- Check what your `.gitignore` and your repo's tooling do with it. A symlink that gets
  ignored is a symlink that does not travel.

## Evidence Required

Upload on this issue before closing:

- [ ] The committed symlink, and evidence it survives a fresh clone
- [ ] The interop check: a different reader picking the content up
- [ ] What you found about how your tooling treats it (ignore rules, editors, CI)
- [ ] One paragraph: what your team should do when the file changes, and who owns it

## Success Criteria

- [ ] The link is committed and survives a clone, not just present on your machine
- [ ] A genuinely different reader is shown picking up the content
- [ ] Any platform or tooling problem is named and solved, or the trade-off is argued
- [ ] Evidence uploaded, `<name>:done` label added

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

~40 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
