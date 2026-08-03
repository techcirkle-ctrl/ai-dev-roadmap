# Loop autopsy — annotate one real session

Subject: one Claude Code session on the gym repo (`weeks/week-1/data/gym`). Give it a
real task, let it finish, then annotate the transcript. The bar: a teammate who wasn't
there can follow your annotation cold.

## The session

- Task given (paste your exact prompt): …
- Repo state before (branch, dirty files): …
- Duration and model: …

## Stage annotation

Walk the transcript top to bottom. Tag every tool call with its stage.

| Step | Tool call (what Claude ran/read) | Stage: gather / act / verify | Your note |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

Add rows as needed.

## The verify signal

- What closed the loop (test run, typecheck, output check, nothing): …
- Was "done" claimed before the signal ran? Where: …
- If nothing machine-checked the work: what would have, in this repo: …

## Findings

- One place Claude gathered too little (or too much): …
- One place you would have trusted a wrong "done": …
- The bug or smell it found (or missed) in the gym code: …
