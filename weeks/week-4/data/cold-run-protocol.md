# Cold-run protocol — counting what your spec fails to say

A **cold run** hands your spec to a reader who has never seen your conversation, and counts
what they still have to ask. The count is the measurement. Driving it towards zero is the
skill.

Referenced by Week 4's Act 3, its capstone step 2, and two Application issues.

---

## The two numbers

**Questions.** Things the reader must have answered before starting. Each one is a moment
you would have been interrupted.

**Silent assumptions.** Decisions the reader announces it will make on your behalf. These
count against you more heavily than questions do. A question is one you would have got to
answer; an assumption is a decision going past you.

Record both, before and after patching. The pair is the evidence.

## The run

Use a genuinely fresh session. Continuing an existing one gives you a false zero, because
that session already knows the answers you typed into it.

```
Read <path to your spec> and this repository. Do not write any code.

You are about to implement this spec with no further access to its author.
List every question you would need answered first, numbered, most blocking first.
Then separately list every assumption you would otherwise make silently.
If you have none of either, say READY.
```

Write down both counts. Fix nothing yet.

## Patching

**Patch the file, never the chat.** This is the rule people break under time pressure, and
breaking it means the spec never actually improves. Answering in chat fixes nothing for the
next reader.

Map each question to one of the spec's six sections and edit that section. Then open
**another** new session and run the prompt again.

Stop when it says READY, or when every remaining question is about something you genuinely
have not decided. Record those as open questions in the spec rather than pretending they
are settled.

## Recording it

```
Spec: <path, at the commit you ran>
Run 1: N questions, M silent assumptions
Run 2: N questions, M silent assumptions
Run 3: …
Section most questions pointed at: <this is your pattern>
Remaining open questions, and why they are genuinely undecided:
```

The section that collects the most questions is the one you habitually under-write. It
will be the same section next time unless you name it.

## One-shot mode

Some exercises call for a **one-shot** run: one attempt, no patching, no re-running. That
is the version used when a spec has been handed over for real, because handing over means
living with the version you sent.

Run the prompt once, record both lists, and stop. The gaps you find are findings rather
than a to-do list.

## Reading the result

**The count will not fall below three or four.** Those questions are probably about your
repo rather than your spec: test runner, logging library, directory conventions. They
belong in week 2's documentation layer. Add them once and every future spec gets shorter.

**READY on the first run.** Your spec is probably too vague to disagree with. Ask the
session to challenge the spec rather than implement it.

**The same question twice after patching.** You wrote the answer somewhere it does not
look, or you wrote it in a way that reads as optional.

**Counts that barely moved.** You were answering questions rather than fixing sections.
The two counts should differ by more than half.
