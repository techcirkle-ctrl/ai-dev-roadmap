# Cold-read swap board — post here when you need a second pair of eyes

**Standing issue.** No milestone, never closed. Pinned.

## What this is for

Eight Application issues across the programme ask another person to read or run something
of yours cold: your environment, your CLAUDE.md, your command, your handoff, your spec,
your harness PR, your ADR, your loop autopsy.

This programme is self-paced, so the person you need may be three weeks behind you or two
weeks ahead. Waiting for them to arrive at the same issue would stall you for no good
reason. This board decouples the two: you post what needs a cold read, and anybody picks
it up whenever they have twenty minutes, whatever week they are on.

Reading someone else's artifact cold is useful at any point in the programme. You do not
need to have done that week to run a spec and write down what you had to ask.

## How to post

Comment on this issue, in this shape:

```
REQUEST · <your name> · Week <N> · <what it is>
Repo / artifact:  <link, or attached file>
What I need:      <run it cold and list your questions | drive the 10 checks |
                   resume this work | review this PR | answer these 3 questions>
Time it should take you: <your honest estimate>
Reciprocal: <what you can pick up in return, or "nothing yet">
```

## How to claim one

Reply `CLAIMED by <your name>` under the request, then do it and post what you found as a
further reply. Two rules, both of which are the whole point:

- **Say nothing to the author while you run it.** Every question you have to ask is their
  finding, not a conversation. Write the questions down instead of asking them.
- **Report what you had to guess**, not only what you had to ask. A silent assumption is
  worth more to them than a question, because a question at least reaches them.

The author then copies your reply onto their own issue as evidence.

## If nothing gets claimed

Every one of the eight issues now carries an **If nobody is available right now** section
with a solo route, usually a fresh Claude Code session standing in as the cold reader. Use
it, finish the issue, and post here anyway. When somebody claims it later you get the
stronger version of the same test, and you will have your solo result to compare it
against.

Do not sit blocked waiting for a partner. That is the failure this board exists to
prevent.

## The eight issues that use this board

| Week | Issue | What a reader does |
| --- | --- | --- |
| 1 | Your environment, audited cold by a peer | Drives your machine against the 10 checks |
| 1 | relay's weekly report claims work nobody shipped | Answers three questions from your autopsy |
| 2 | Write the standing rules for a repo you have never worked in | Swaps repos and grades on their own suite |
| 2 | You run out of window at 6pm | Resumes your live work from the handoff alone |
| 3 | Your workflow only works when you are the one running it | Runs your command cold |
| 3 | Ask a colleague to accept your rules into a repo they also work in | Reviews the harness PR |
| 4 | Another learner's session has to build from your spec | Executes your spec, one attempt |
| 4 | Somebody is about to undo a decision you made months ago | Checks your ADR against what was known |
