# [Week 5] Application — Your suite is green on code you have not tested

**Pedagogy:** Application · **Milestone:** Week 5
**Prerequisite:** Week 5 Knowledge issue complete.
**Capstone class:** signal strength (capstone step 2, run on a module you did not choose)

## The Problem

A bug shipped last quarter and every check was green the whole way. Nobody on the team can
say which of your gates would have caught it, because nobody has ever seen those gates
fail.

Find out which of them is decoration.

Pick a module you did not use in Hands-on 01 and did not use in the capstone. Plant three
mutations in it, one at a time, and run your gate after each. Use the subtle shapes rather
than the loud ones: `weeks/week-5/data/planted-bug-briefs.md` has six briefs, and briefs 1,
2 and 4 are the ones that survive real test suites.

Then close one hole. Take a mutation that survived, write the test that kills it, and run
the drill again to prove it now dies. A named test you did not write is a finding; a test
that provably kills the survivor is the work.

## Constraints

- A real module in a repo you actually work in, and not the one you used on Monday.
- Plant on a scratch branch. Delete the branch afterwards. A planted bug merged by accident
  is a memorable way to learn this lesson.
- One mutation at a time. Undo each before planting the next, or your results confound.
- The gate is the one you built, unchanged. Tuning it mid-drill invalidates the count.
- If all three are caught, your mutations were probably too loud. Try brief 1 or brief 4
  before you record a clean sweep.

## Evidence Required

Upload on this issue before closing:

- [ ] The catch table: three mutations, what you changed, which check caught each or that
      nothing did, and the time to red where it went red
- [ ] The surviving mutations, each with the test that would have killed it, named
- [ ] The test you actually wrote, as a commit or file link
- [ ] The re-run: the same mutation planted again, now caught, with the output
- [ ] One paragraph: which of your four checks you had been over-trusting, and how you know

## Success Criteria

- [ ] Three mutations planted in a module you had not drilled before
- [ ] A catch count recorded, with the check named for each catch
- [ ] At least one previously surviving mutation now dies, proven by re-running
- [ ] Every planted mutation was undone and the scratch branch deleted
- [ ] Evidence uploaded, `<name>:done` label added

Note: a gate that caught nothing is a pass, not a failure. The finding is the deliverable.
A clean sweep with three obvious mutations is worth less than one honest survivor.

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

**At the keyboard:** ~60 minutes.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
