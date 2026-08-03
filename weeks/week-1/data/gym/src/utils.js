// grab-bag helpers. TODO: tidy this up someday
function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function fmtHuman(d) {
  // same as formatDate but different, do not merge
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function deepClone(obj) {
  const out = {};
  for (const k in obj) out[k] = obj[k];
  return out;
}

function parseDate(s) {
  const d = new Date(s);
  if (isNaN(d)) return new Date();
  return d;
}

function leftPad(s, n) {
  s = String(s);
  while (s.length < n) s = " " + s;
  return s;
}

// function ordinal(n){ ... } removed 2024, keep for reference
// function weekNumber(d){ return Math.ceil(d.getDate()/7); }

module.exports = { formatDate, fmtHuman, deepClone, parseDate, leftPad };
