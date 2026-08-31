# [Week 4] Application — Somebody is about to undo a decision you made months ago

**Pedagogy:** Application · **Milestone:** Week 4
**Prerequisite:** Week 4 Knowledge issue complete.
**Capstone class:** decision record (capstone step 4, reconstructed rather than recorded live)

## The Problem

Somewhere in your repo is a choice that looks wrong to a newcomer. You rejected the
obvious option, or you took a path a reasonable engineer would not have picked, and the
reason lives nowhere except your memory and possibly a pull request thread nobody reads.

Sooner or later somebody will try to "fix" it, spend a day rediscovering why the obvious
answer fails, and either revert their work or ship the mistake. Write the record that
stops that day happening.

Then take it to the person who lived through the decision with you and ask them one
question: does this match what we actually knew at the time? Their correction is the part
that matters. You know how the decision turned out, and that knowledge makes the record
come out sounding inevitable when it never was.

## Constraints

- A real decision from your repo, ideally in the last three months.
- Choose one where you rejected something a reasonable engineer would have chosen. A
  decision nobody would question does not need a record and will not teach you anything.
- The record is committed in the repo, not written in a wiki or a document tool.
- Under one page. Longer means you are describing how the code works rather than why you
  chose it.
- It must be reviewed by a human who was there. Book their time early.

## If nobody is available right now

The reviewer's job is to check your account against what was actually known at the time,
so if the person is unreachable, reconstruct that from the record instead:

- Read the pull request thread, the commit messages, and any issue or chat around the
  decision.
- Quote at least one line from that record that either supports or contradicts your
  account.
- Write down explicitly what you could **not** verify without them, and mark the record
  `Status: proposed` rather than `accepted` until somebody confirms it.

That last step matters. An ADR nobody has checked is a draft, and saying so is more useful
than pretending it is settled.

## Evidence Required

Upload on this issue before closing:

- [ ] The committed ADR (file link)
- [ ] The cold-check output: what a fresh session said it would still need to ask
- [ ] Your reviewer's response, in their words
- [ ] What you changed after their review, and what you deliberately did not change
- [ ] One line: why this decision cleared the threshold, in terms of reversal cost and
      non-obviousness

## Success Criteria

- [ ] At least one rejected option is named, with the reason it lost
- [ ] The cost of reversing the decision is stated concretely, not as "some work"
- [ ] It reads as what you knew then, including what you were unsure about
- [ ] Reviewed by someone who was present for the decision, and their input is visible in
      the final version
- [ ] Committed in the repo
- [ ] Evidence uploaded, `<name>:done` label added

## Stuck?

Run `/guide-me` with this issue's link (or paste its text). It coaches you through the
problem one step at a time; it won't solve it for you. If you used it, say "guided" in
your evidence comment — using the net is fine, hiding it isn't.

## Time Estimate

**At the keyboard:** ~60 minutes.
**Elapsed:** depends on your reviewer; the record-only route runs in one sitting.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
