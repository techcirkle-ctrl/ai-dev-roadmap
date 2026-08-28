# Spec · <the change, in a few words>

Status: draft | ready | superseded by <link>
Author: <you> · Date: <YYYY-MM-DD>

A spec says what must be true of the finished change. It never names files and never
orders the work. Both of those belong in the plan, which is written against the repo as
it is today and regenerated whenever the repo moves.

The bar: a session that has never seen your conversation reads this plus the repo, and
starts work without asking you anything.

---

## 1. Context

Why this change exists, and who is hurting today. One paragraph.

- What happens now that should not.
- Who notices, and how often.
- What made this urgent enough to do now.

## 2. Behaviour

What the system must do afterwards, in terms someone could write a test against.

- <observable behaviour, stated as a fact about the finished system>
- <observable behaviour>
- Edge cases, and what happens in each.

## 3. Scope

What is deliberately excluded. Write at least three items. This section is skipped most
often and regretted most often.

Out of scope:
- <thing a reasonable reading might include, that you do not want>
- <thing>
- <thing>

## 4. Constraints

What must not break, and what the change must live within.

- Must not change: <existing behaviour other things depend on>
- Must live within: <latency, memory, deployment, compatibility>
- Depends on: <anything shared with another service, team or repo>

## 5. Decisions

Calls already made, and the reason for each. Anything left open goes under Open, honestly.

| Decision | Chosen | Because |
|---|---|---|
| <the question> | <the answer> | <one line> |

Open (genuinely undecided, and safe to decide later):
- <question> — decide during <stage>

Anything here that is expensive to reverse and non-obvious also earns an ADR. See
`adr-template.md`.

## 6. Acceptance

How anyone can tell it worked. Written so that "done" is not a matter of opinion.

- [ ] <checkable statement>
- [ ] <checkable statement>
- [ ] Verification command or steps: <what you run, and what you expect to see>

---

## The cold-run check

Run `cold-run-protocol.md` against this file before you call it ready. Record both counts.

Questions before patching: ___
Questions after patching: ___
Section most questions pointed at: ___
