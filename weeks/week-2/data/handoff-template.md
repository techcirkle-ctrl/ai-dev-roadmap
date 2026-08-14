# Handoff — session state for whoever picks this up

Written by the outgoing session (you plus Claude), read by the incoming one. The test
of a good handoff: the next session's first prompt is "read handoff.md and continue",
and it does, with no archaeology.

## State

What is done and verified, what is half-done, what is untouched. One line each.

## Decisions made

Choices taken this session that the next session must not relitigate, each with its
one-line reason. (Anything that should outlive the week belongs in an ADR instead;
this file is for the working set.)

## Next step

The single next action, concrete enough to start cold. Include the command or file to
open first.

## Gotchas

Anything that will waste the next session's first twenty minutes: the test that fails
for an unrelated reason, the file that looks canonical but is generated, the flag that
must stay off.

## Verify

The command(s) that prove the current state still holds before new work starts.
