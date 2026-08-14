# relay (monorepo)

One repo, three packages:

- `packages/core` owns storage: the only code allowed to touch `data/tasks.json`
- `packages/cli` is the terminal front door; its output is consumed by shell scripts
- `packages/report` renders the weekly report; pure functions, data passed in

## Run

```
npm install
node packages/cli/src/cli.js list
node packages/report/src/print.js
```
