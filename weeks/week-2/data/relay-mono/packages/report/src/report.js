// pure module: everything comes in as arguments, nothing here touches fs or network.
// print.js is the shell that loads data (via core) and calls this.
const { humanDate } = require("@relay/core/src/dates");

// week starts Monday
function startOfWeek(d) {
  const day = d.getDay();
  const diff = d.getDate() - day + 1;
  const s = new Date(d);
  s.setDate(diff);
  s.setHours(0, 0, 0, 0);
  return s;
}

function weekly(db, now) {
  const start = startOfWeek(now);
  const shipped = db.archive.filter(t => new Date(t.completed) >= start);
  const lines = [`## Shipped since ${humanDate(start)}`, ""];
  for (const t of shipped) {
    lines.push(`- ${t.title} (${t.owner}, ${t.completed})`);
  }
  if (shipped.length === 0) lines.push("- nothing yet");
  return lines.join("\n");
}

module.exports = { weekly, startOfWeek };
