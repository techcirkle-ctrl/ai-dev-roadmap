# Week 4 capstone report — one feature shipped spec-first, with its ADR

The paper fallback. The deck assembles this for you from its capture boxes, and that
state lives in one browser only. Use this if you lost it, or if you would rather write by
hand. Paste the finished thing as a comment on your Week 4 Knowledge issue.

---

## The feature, and why it earns the pipeline

What it does, who needs it, and which decision inside it is genuinely arguable.

## Brainstorm brief (no code written)

The problem in one sentence. At least three things out of scope. Every decision the
feature forces, marked decided or deferred.

## The spec, and the question count before and after

Path: `docs/specs/____`

| | Questions | Silent assumptions |
|---|---|---|
| Before patching | | |
| After patching | | |

Section most questions pointed at: ____ — that is the section you habitually under-write.

## Plan review: what I rejected, and what changed

Six verdicts, including the passes:

1. Matches the spec:
2. Touches anything shared:
3. Every step really one step:
4. Says how you will know it worked:
5. Contradicts a recorded decision:
6. Rollback:

Sent back because: ____
What changed in the second plan: ____

## Cold execution: what the fresh session still had to ask

Every question it asked, and which upstream artifact should have answered each one.
Every point where you intervened, and why.

## The ADR this feature forced

Path: `docs/adr/____`

Decided: ____
Rejected: ____ because ____
Reversing it would cost: ____

## Divergence log: predicted against actual

| Planned | Actually happened | Cause | Cost |
|---|---|---|---|
| | | | |

Causes: spec was wrong · plan was wrong · the world changed · you changed your mind.

## DESIGN.md lines the feature made untrue

Which lines your architecture document claimed that the feature falsified, and what you
changed them to. If nothing needed changing, say so and say why the feature left every
line true. This ships in the same pull request as the feature.

## Verdict

- **The divergence that surprised me most:** ____
- **One planning rule I carry to every feature:** ____

---

Someone should be able to reconstruct your reasoning from this report without opening the
diff. If they would still need the code to follow what you did, the spec and the record
are carrying less than they should.
