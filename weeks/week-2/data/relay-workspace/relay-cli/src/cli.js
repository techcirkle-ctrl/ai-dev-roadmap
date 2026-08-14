#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// the team keeps the three relay repos as siblings; data belongs to the api
const FILE = path.join(__dirname, "..", "..", "relay-api", "data", "tasks.json");

const [, , cmd, ...args] = process.argv;

function loadDb() {
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

function saveDb(db) {
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

function today() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function usage() {
  console.log("relay <add|list|done> [args]");
  console.log("  add <title> <owner>   add a task");
  console.log("  list                  list open tasks");
  console.log("  done <id>             mark a task done");
}

function main() {
  const db = loadDb();
  switch (cmd) {
    case "add": {
      const [title, owner] = args;
      if (!title) return usage();
      const id = db.tasks.length + 1;
      db.tasks.push({ id, title, owner: owner || "unassigned", done: false, created: today() });
      saveDb(db);
      console.log(`added #${id} ${title}`);
      break;
    }
    case "list": {
      for (const t of db.tasks) {
        if (!t.done) console.log(`#${t.id} [${t.owner}] ${t.title}`);
      }
      break;
    }
    case "done": {
      const id = parseInt(args[0], 10);
      const task = db.tasks.find(t => t.id === id);
      if (!task) return console.log(`no task ${id}`);
      task.done = true;
      task.completed = today();
      db.archive.push(task);
      saveDb(db);
      console.log(`done: ${task.title}`);
      break;
    }
    default:
      usage();
  }
}

main();
