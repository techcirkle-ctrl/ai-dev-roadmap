const { fmtHuman } = require("./utils");

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
  const shipped = [];
  for (const t of db.tasks) {
    if (t.done && new Date(t.completed) >= start) shipped.push(t);
  }
  for (const t of db.archive) {
    if (new Date(t.completed) >= start) shipped.push(t);
  }
  const lines = [`Shipped since ${fmtHuman(start)}: ${shipped.length}`];
  for (const t of shipped) {
    lines.push(`  - ${t.title} (${t.owner}, ${t.completed})`);
  }
  return lines.join("\n");
}

module.exports = { weekly, startOfWeek };
