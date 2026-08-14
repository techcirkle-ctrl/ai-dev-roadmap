#!/usr/bin/env node
// output contract: plain text, no colour codes, one record per line, exit 0/1.
// the standup script and two cron jobs parse this output; do not decorate it.
const store = require("@relay/core");
const { isoDate } = require("@relay/core/src/dates");

const [, , cmd, ...args] = process.argv;

function usage() {
  console.log("relay <add|list|done> [args]");
  process.exitCode = 1;
}

function main() {
  const db = store.load();
  switch (cmd) {
    case "add": {
      const [title, owner] = args;
      if (!title) return usage();
      const id = db.tasks.length + 1;
      db.tasks.push({ id, title, owner: owner || "unassigned", done: false, created: isoDate(new Date()) });
      store.save(db);
      console.log(`added #${id} ${title}`);
      break;
    }
    case "list": {
      for (const t of db.tasks) {
        if (!t.done) console.log(`#${t.id}\t${t.owner}\t${t.title}`);
      }
      break;
    }
    case "done": {
      const id = parseInt(args[0], 10);
      const task = db.tasks.find(t => t.id === id);
      if (!task) { console.log(`no task ${id}`); process.exitCode = 1; return; }
      task.done = true;
      task.completed = isoDate(new Date());
      db.archive.push(task);
      store.save(db);
      console.log(`done: ${task.title}`);
      break;
    }
    default:
      usage();
  }
}

main();
