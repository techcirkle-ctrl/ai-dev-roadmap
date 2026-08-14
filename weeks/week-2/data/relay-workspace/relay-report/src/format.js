const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmtHuman(d) {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// the 2024 CSV export wrote DD/MM/YYYY; a few archive rows imported from it still do
function parseLegacy(s) {
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(s)) {
    const [day, m, y] = s.split("/");
    return new Date(`${y}-${m}-${day}`);
  }
  return new Date(s);
}

module.exports = { fmtHuman, parseLegacy };
