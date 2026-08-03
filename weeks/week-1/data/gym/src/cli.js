#!/usr/bin/env node
const store = require("./store");
const report = require("./report");
const { formatDate, parseDate } = require("./utils");

const [, , cmd, ...args] = process.argv;

function usage() {
  console.log("relay <add|list|done|report> [args]");
  console.log("  add <title> <owner>   add a task");
  console.log("  list                  list open tasks");
  console.log("  done <n>              mark task n done");
  console.log("  report                what shipped this week");
}

function main() {
  const db = store.load();
  switch (cmd) {
    case "add": {
      const [title, owner] = args;
      if (!title) return usage();
      const id = db.tasks.length + 1;
      db.tasks.push({ id, title, owner: owner || "unassigned", done: false, created: formatDate(new Date()) });
      store.save(db);
      console.log(`added #${id} ${title}`);
      break;
    }
    case "list": {
      db.tasks.forEach((t, i) => {
        if (!t.done) console.log(`${i + 1}. [${t.owner}] ${t.title}`);
      });
      break;
    }
    case "done": {
      const n = parseInt(args[0], 10);
      const task = db.tasks[n];
      if (!task) return console.log(`no task ${n}`);
      task.done = true;
      task.completed = formatDate(new Date());
      db.archive.push(task);
      store.save(db);
      console.log(`done: ${task.title}`);
      break;
    }
    case "report": {
      const when = args[0] === "--last" ? parseDate(args[1]) : new Date();
      console.log(report.weekly(db, when));
      break;
    }
    default:
      usage();
  }
}

main();
