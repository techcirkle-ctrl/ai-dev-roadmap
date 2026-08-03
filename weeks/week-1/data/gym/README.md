# relay

Tiny task tracker for a small team. Tasks live in `data/tasks.json`; the report
command prints what shipped this week.

## Install

```
npm install
npm link
```

## Usage

```
node src/cli.js add "Fix login redirect" alice
node src/cli.js list
node src/cli.js done 3
node src/cli.js report
node src/cli.js report --week last
```

## Tests

```
npm test
```
