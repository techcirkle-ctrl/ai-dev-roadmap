# relay-harness

A task tracker. Tasks live in `data/tasks.json` and are only ever written through
`src/store.js`.

- Tests run with `node --test`. Run them before saying a change is done.
- Dates are YYYY-MM-DD everywhere: storage, output and tests.
- The archive is append-only. Rows are never deleted or rewritten.

Read `guardrails.md` before changing anything under `db/` or any file whose name
contains `generated`.
