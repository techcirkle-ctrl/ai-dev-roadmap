# ADR-<NNNN> · <the decision, as a short statement>

Status: proposed | accepted | superseded by ADR-<NNNN>
Date: <YYYY-MM-DD>
Deciders: <names>

An ADR is written once, at the time of the decision, and never edited afterwards. When
a decision is reversed you write a new ADR and mark this one superseded. The history is
the point: the fact that you once thought differently is worth keeping.

Keep it under a page. If it runs longer, you are describing how the code works rather
than why you chose it. The code already shows how it works.

---

## Context

What was true when you decided. Constraints, pressures, and what you did not know yet.

Write what you knew **at the time**, including what you were unsure about. You now know
how it turned out, so the trap is making it sound inevitable. A record that admits
uncertainty is more useful than one that sounds confident.

## Decision

What you decided, in one or two sentences, stated plainly.

## Alternatives considered

The part people skip, and the part that pays off. For each option a reasonable engineer
would have picked instead:

**<Option>** — rejected because <reason>.

**<Option>** — rejected because <reason>.

If a competent colleague would have chosen one of these, the reason it lost is the
single most valuable line in this file. It is what stops someone spending a day
rediscovering why the obvious answer fails here.

## Consequences

What this makes easy, what it makes hard, and what it rules out.

- Easier: <...>
- Harder: <...>
- Ruled out: <...>

## Cost of reversal

Concrete. Not "some work". Name the migration, the coordinated deploy, the customer
conversation, or say plainly that it is a rename.

---

## Cold check before committing

Ask a fresh session, and patch what it finds:

1. What would you still need to ask before defending this to someone who disagrees?
2. Which alternative would a reasonable engineer have picked, and does this explain why
   it was rejected?
3. Does this say what reversing it would cost? Quote the line, or say it is missing.

Then send it to the person who lived through the decision with you, and ask one question:
does this match what we actually knew at the time?
