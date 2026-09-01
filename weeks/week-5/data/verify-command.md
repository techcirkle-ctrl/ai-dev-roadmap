# The gate — one command that runs every closing signal

Copy this into your repo at `.claude/commands/verify.md` and replace the commands with
your own. The slash-command mechanics are week 3's; this file is only about what goes
inside.

A gate is one command that runs every machine check you own and fails if any of them
fails. It exists so that "done" stops being something anyone says and starts being
something a machine confirms.

---

## The file

```markdown
---
description: Run every closing signal and report pass or fail per check
---

Run each of these in order and stop at the first failure:

1. `<your typecheck command>`
2. `<your lint command>`
3. `<your test command>`
4. `<your build command>`

Report a one-line result per check: the command, PASS or FAIL, and the time
it took. If any check failed, print its output in full and do nothing else.
Never fix anything in this command. Reporting is the whole job.
```

## Three rules for what goes in it

**Order them fastest first.** A typecheck that fails in two seconds should never wait
behind a four-minute test suite. You run this dozens of times a day, so the ordering is
worth ten seconds of thought.

**Keep the failure output short.** One line per check, then the full output of whichever
check failed. A gate that prints four screens of green before the failure gets skipped
within a week.

**Never let it fix anything.** The moment the gate can repair what it finds, you stop
being able to trust its verdict. Reporting and fixing are separate jobs, run by separate
commands, in that order.

## Commands by stack

Replace with whatever your repo actually uses. If a row is missing from your project,
delete the line rather than inventing one.

| Check | Node / TypeScript | Python | Go | Rust |
|---|---|---|---|---|
| Typecheck | `npx tsc --noEmit` | `mypy .` or `pyright` | included in `go build` | included in `cargo check` |
| Lint | `npx eslint .` | `ruff check .` | `golangci-lint run` | `cargo clippy -- -D warnings` |
| Tests | `npm test` | `pytest -q` | `go test ./...` | `cargo test` |
| Build | `npm run build` | `python -m build` | `go build ./...` | `cargo build --release` |

## If your repo has fewer than four

Wire what you have. A typecheck and a build is a real gate, and it is a great deal more
than nothing. Note the gap and treat the missing check as this week's finding rather
than as a reason to stop.

Two lint rules are worth adding on day one if your stack has them, because both catch
real production bugs rather than style preferences:

- **Floating promises.** In TypeScript this is `@typescript-eslint/no-floating-promises`.
  It catches a database write nobody waited for.
- **Swallowed errors.** Most linters have a rule for an empty catch block. Turn it on and
  point it at your guardrails file.

## Timing it

Write down how long a full run takes. That number decides how the gate gets used.

- **Under 30 seconds.** You will run it after every change, which is where it helps most.
- **30 seconds to 2 minutes.** You will run it before every commit.
- **Over 2 minutes.** You will run it once, at the end, which is when it helps least.
  Split it: a fast gate for every change, and a full gate before you push.

## The check that matters

A gate you have never seen fail has told you nothing. Before you trust it, break the code
on purpose and watch it go red. `mutation-catalogue.md` in this folder lists the shapes to
try and what should catch each one.
