# Debugging loop — the five-stage capture sheet

One sheet per bug. Fill it as you go, not afterwards. The point is to notice which stage
you are in while you are in it, because that is what stops a session drifting back into
guessing.

The five stages, in order:

```
reproduce → hypothesise → instrument → fix → regression-test
```

A move that is not one of those five is a **guess**: a move whose outcome cannot tell you
that you were wrong. Restarting the service, reading files hoping something looks off, and
changing a value to see what happens are all guesses.

---

## The bug

**Symptom, in one sentence, with no theories in it:**

**Reported by / found how:**

**Date:**

---

## 1 · Reproduce

A reproduction is a recipe, not a description. Do these things in this order and it
breaks, every time, on any machine.

**The recipe:**

**How many of 10 runs failed:** ___ / 10

Anything under 10 is not a reproduction yet. A bug that happens twice in ten looks fixed
after eight quiet runs.

**Conditions that turned out not to matter:**

*Shrink it before you theorise. Remove one condition and run again. If it still fails,
that condition was never needed. A two-step recipe points almost directly at the cause.*

**Written as a failing test at:**

*This is the trick of the stage. Your regression test now exists before the fix does.*

---

## 2 · Hypothesise

A hypothesis is a statement specific enough to be wrong.

| # | Hypothesis (one sentence) | How it would be ruled out | Verdict |
|---|---|---|---|
| 1 | | | ruled out / confirmed |
| 2 | | | |
| 3 | | | |

One at a time. Do not open a second theory while the first is still unresolved.

---

## 3 · Instrument

What you added so you could see the thing the hypothesis is about.

**What you added, and where:**

**What you expected to see, written before you ran it:**

**What you actually saw:**

*Writing the expectation first is what makes this a measurement rather than a look.*

---

## 4 · Fix

**The cause, in one sentence:**

**The change:**

**Why this change stops the bug:**

If you cannot answer that last line, you have changed a symptom.

---

## 5 · Regression test

**Test path:**

**It fails when the fix is reverted:** yes / not checked

*Revert the fix and watch the test go red. A regression test you have not seen fail is a
regression test you have not finished writing.*

**Instrumentation removed and `/verify` green afterwards:** yes / no

---

## Afterwards

**Guesses made before the reproduction existed:** ___

**Share of the session spent on the reproduce stage:** ___ %

Most people find reproduce was the longest stage and the one they used to skip.

**Which gate should have caught this before it reached a branch:**

That answer is a line for your friction log, and probably a signal worth building.
