const fs = require("fs");
const path = require("path");
const { fmtHuman, parseLegacy } = require("./format");

// data is owned by relay-api; the repos live side by side
const FILE = path.join(__dirname, "..", "..", "relay-api", "data", "tasks.json");

// week starts Monday
function startOfWeek(d) {
  const day = d.getDay();
  const diff = d.getDate() - day + 1;
  const s = new Date(d);
  s.setDate(diff);
  s.setHours(0, 0, 0, 0);
  return s;
}

// the archive is append-only (see relay-api ADR 0001): dedupe by id at read time
function dedupe(rows) {
  const seen = new Set();
  const out = [];
  for (const r of rows) {
    if (seen.has(r.id)) continue;
    seen.add(r.id);
    out.push(r);
  }
  return out;
}

function weekly(now) {
  const db = JSON.parse(fs.readFileSync(FILE, "utf8"));
  const start = startOfWeek(now);
  const shipped = dedupe(db.archive).filter(t => parseLegacy(t.completed) >= start);
  const lines = [`## Shipped since ${fmtHuman(start)}`, ""];
  for (const t of shipped) {
    lines.push(`- ${t.title} (${t.owner}, ${t.completed})`);
  }
  if (shipped.length === 0) lines.push("- nothing yet");
  return lines.join("\n");
}

if (require.main === module) {
  console.log(weekly(new Date()));
}

module.exports = { weekly, startOfWeek, dedupe };
