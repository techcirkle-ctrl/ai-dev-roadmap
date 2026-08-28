# [Week 4] Reinforcement — No code before the spec is executable

**Pedagogy:** Reinforcement · **Milestone:** Week 4 · **Due:** Sunday EOD
**Prerequisite:** Week 4 Knowledge issue complete.

## Why

Weeks 1 to 3 taught habits that hold because you built infrastructure for them. This week's
habits are different: nothing in the tool stops you opening the editor before you have
thought. The only guard is a standing instruction that makes Claude push back.

So you write that instruction into your global `~/.claude/CLAUDE.md`, where every session
you ever start will read it. The point is repetition across months, not a note you read
once.

## The Task

Add a paragraph to `~/.claude/CLAUDE.md` (global scope, not the project file) that makes
Claude surface this week's ideology unprompted, in every future session.

It should cause Claude to:

- **Name the stage.** Say which of brainstorm, spec, plan or execute the current work is
  in, and flag when a question belongs to a stage you have already left.
- **Refuse to start early.** Push back when asked to write code for something whose spec
  would still raise questions, and say which of the six sections is thin.
- **Flag decisions worth recording.** When a decision is expensive to reverse and its
  reason is not obvious from the code, say so and offer to draft the ADR.
- **Catch drift.** When a change makes a line in `DESIGN.md` untrue, say which line.

Write it in your own words. Copying the bullets above verbatim produces something that
reads like a checklist and gets ignored. Keep it short: a long paragraph competes for
attention with everything else in the file.

## Evidence Required

Upload on this issue before closing:

- [ ] The paragraph you added, exactly as it appears in your global `~/.claude/CLAUDE.md`
- [ ] A transcript excerpt where it fired **unprompted** in real work, after you added it
- [ ] One line: what it caught that you would otherwise have missed

## Success Criteria

- [ ] The paragraph is in the **global** file, not a project one, and you can say why that
      scope is right
- [ ] It is in your own words
- [ ] You have evidence of it firing unprompted on real work
- [ ] Evidence uploaded, `<name>:done` label added

## Time Estimate

~20 minutes, plus waiting for it to fire naturally.

## Status

- [ ] Not Started
- [ ] In Progress
- [ ] Review
- [ ] Complete
