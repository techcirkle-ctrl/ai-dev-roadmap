const fs = require("fs");
const path = require("path");
const { deepClone } = require("./utils");

const FILE = path.join(__dirname, "..", "data", "tasks.json");

let cache = null;

function load() {
  if (cache) return cache;
  const raw = fs.readFileSync(FILE, "utf8");
  const db = JSON.parse(raw);
  // hand callers a copy so they can't corrupt the store
  cache = deepClone(db);
  return cache;
}

function save(db) {
  // keep the file tidy: newest first
  db.tasks.sort((a, b) => (a.created < b.created ? 1 : -1));
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
  cache = db;
}

module.exports = { load, save };
