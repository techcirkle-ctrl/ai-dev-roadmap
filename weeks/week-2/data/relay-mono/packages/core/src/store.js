const fs = require("fs");
const path = require("path");

// data lives at the repo root; core is the only package that reads or writes it
const FILE = path.join(__dirname, "..", "..", "..", "data", "tasks.json");

function load() {
  return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

function save(db) {
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

module.exports = { load, save };
