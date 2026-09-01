# [Week 5] Application — Nobody wants to touch the payments module, and it changes next sprint

**Pedagogy:** Application · **Milestone:** Week 5
**Capstone class:** tests that lock behaviour (capstone step 3, retrofitted onto code that
already exists)

## The Problem

Every repo has one. The module people route around in stand-up. The one where changes get
made carefully, by the person who wrote it, on a Tuesday, with everyone watching.

A change is coming to yours. Make it safe to change.

Write the regression suite that lets somebody who has never opened that file modify it with
confidence. The suite has to lock the behaviour the module has **today**, including the
behaviour nobody documented and the behaviour somebody depends on by accident.

The hard part is that the code already exists, so red first is not available to you. A test
you write against working code passes on its first run, which proves nothing at all. So
every test in this suite has to be earned another way: write it, watch it pass, then break
the function on purpose and confirm that this test fails. Undo the break. A test you never
saw fail does not go in the suite.

## Constraints

- A real module in a repo you work in, one that genuinely has thin or no coverage.
- Every test proven by a mutation. Untested tests do not count towards the suite.
- No refactoring the module while you write the suite. The suite locks what is there now,
  including the parts you dislike. Change it afterwards, under the net you just built.
- Record the module's mutation score before and after: how many planted mutations survived
  at the start, and how many survive now. `weeks/week-5/data/mutation-catalogue.md` has the
  ten shapes to draw from.
- If the module is too large to cover in ninety minutes, take the part that is about to
  change and say in your evidence where you drew the line.

## Evidence Required

Upload on this issue before closing:

- [ ] The module, and one paragraph on why people avoid it
- [ ] The test suite, as a commit or file link
- [ ] The mutation proof: for each test, the break you made and the failure it produced
- [ ] The mutation score before and after, from the same set of shapes both times
- [ ] One paragraph: the behaviour you found that nobody had written down anywhere

## Success Criteria

- [ ] The suite is committed and runs inside your gate
- [ ] Every test in it has been seen to fail, with the break recorded
- [ ] The mutation score improved, measured on the same shapes both times
- [ ] The module was not refactored while the suite was being written
- [ ] Evidence uploaded, `<name>:done` label added

Note: the surprising behaviour in your last paragraph is usually the real deliverable. A
module people avoid is a module carrying an undocumented contract, and finding it is the
thing that makes the next change safe.

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

**At the keyboard:** ~90 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
