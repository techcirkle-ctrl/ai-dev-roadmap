# Divergence log · <feature>

Filled in after the work ships, comparing what you planned against what happened. The
cause is the useful column, not the difference itself.

---

| # | Planned | Actually happened | Cause | Cost |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

## The four causes

**Spec was wrong** — usually a constraint you only discovered by building. Fix: the
constraints section is where you habitually under-write.

**Plan was wrong** — usually a step that turned out to be three. Fix: check 3 in the
review rubric.

**The world changed** — someone merged something while you worked. Nobody's fault, and
still worth counting: a high count here says something about how you branch.

**You changed your mind** — watch these. A mind changed mid-execution is usually a
decision that belonged three stages earlier. If most of your divergences are this kind,
your brainstorm is finishing too early.

---

## Reading your own log

Count the causes. Whichever cause dominates tells you which artifact you write badly, and
that is the finding worth carrying forward:

- Mostly "spec was wrong" → your constraints and scope sections are thin.
- Mostly "plan was wrong" → you accept plans without applying check 3.
- Mostly "changed my mind" → you leave brainstorm before it is finished.
- Mostly "world changed" → your branches live too long, which weeks 6 and 7 address.

**The divergence that surprised you most** is the one to write a sentence about. Why did
you not see it coming?
