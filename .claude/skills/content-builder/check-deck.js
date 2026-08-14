// Structural verifier for weeks/week-N/Knowledge.html (self-teaching deck canon).
// Usage: node check-deck.js <path-to-Knowledge.html>
// Exit 0 = clean; exit 1 = violations printed with ✗.
const fs = require("fs");
const vm = require("vm");

const file = process.argv[2];
if (!file) { console.error("usage: node check-deck.js <Knowledge.html>"); process.exit(2); }
const html = fs.readFileSync(file, "utf8");
let fail = false;
const bad = msg => { fail = true; console.log("  ✗ " + msg); };

const secOpen = (html.match(/<section\b/g) || []).length;
const secClose = (html.match(/<\/section>/g) || []).length;
console.log(`sections: ${secOpen} open / ${secClose} close`);
if (secOpen !== secClose) bad("unbalanced <section> tags");

const sections = html.split(/<section\b/).slice(1).map(s => s.split("</section>")[0]);

// every slide: exactly one visible Keep-this band; data-act present
sections.forEach((body, i) => {
  const k = (body.match(/class="keep"/g) || []).length;
  if (k !== 1) bad(`section ${i + 1}: keep bands = ${k} (want 1)`);
});
console.log(`keep bands: ${(html.match(/class="keep"/g) || []).length}`);

// every widget (.lab) slide carries a visible Drive-it box
sections.forEach((body, i) => {
  if (body.includes('class="lab"') && !body.includes('class="drive"'))
    bad(`section ${i + 1}: has a .lab widget but no Drive-it box`);
});
console.log(`drive boxes: ${(html.match(/class="drive"/g) || []).length} · notices: ${(html.match(/class="notice"/g) || []).length}`);

// presenter-era remnants must never return; class="bank" retired in favour of fold.trouble
for (const rem of ['class="script"', 'class="note"', "scriptpanel", "script-open", "@@MORE@@", 'class="bank"'])
  if (html.includes(rem)) bad("presenter-era remnant / stray marker: " + rem);

// fold layer: every fold declares a known type and carries a summary + .fbody; print expander wired
const FOLD_TYPES = ["plain", "hood", "industry", "btw", "dyk", "trouble"];
const foldTypes = [...html.matchAll(/<details class="fold ([a-z]+)">/g)].map(m => m[1]);
const badFold = [...new Set(foldTypes.filter(t => !FOLD_TYPES.includes(t)))];
if (badFold.length) bad("fold with unknown type: " + badFold.join(", "));
const detOpen = (html.match(/<details\b/g) || []).length;
const detClose = (html.match(/<\/details>/g) || []).length;
if (detOpen !== detClose) bad(`unbalanced <details>: ${detOpen} open / ${detClose} close`);
if (detOpen !== foldTypes.length) bad(`details without a "fold <type>" class: ${detOpen} details / ${foldTypes.length} typed`);
const sumCount = (html.match(/<summary>/g) || []).length;
if (sumCount !== detOpen) bad(`details/summary mismatch: ${detOpen} details / ${sumCount} summaries`);
const fbodyCount = (html.match(/class="fbody"/g) || []).length;
if (fbodyCount !== detOpen) bad(`details/.fbody mismatch: ${detOpen} details / ${fbodyCount} fbody`);
if (detOpen && !html.includes("beforeprint")) bad("folds present but no beforeprint expander in the JS");
const foldCounts = {};
foldTypes.forEach(t => foldCounts[t] = (foldCounts[t] || 0) + 1);
console.log(`folds: ${foldTypes.length} (${FOLD_TYPES.filter(t => foldCounts[t]).map(t => t + " " + foldCounts[t]).join(" · ") || "none"})`);

// duplicate ids
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const dup = [...new Set(ids.filter((v, i) => ids.indexOf(v) !== i))];
if (dup.length) bad("duplicate ids: " + dup.join(", "));
else console.log("duplicate ids: none");

// steppers: within each slide, snode count must equal steppanel count
sections.forEach((body, i) => {
  const sn = (body.match(/class="snode/g) || []).length;
  const sp = (body.match(/class="steppanel/g) || []).length;
  if (sn !== sp) bad(`section ${i + 1}: snodes ${sn} ≠ steppanels ${sp}`);
});

// every export field id used in the JS must be backed by a persisted input
const persist = [...html.matchAll(/data-persist="([^"]+)"/g)].map(m => m[1]);
const exportIds = [...html.matchAll(/g\("([^"]+)"\)/g)].map(m => m[1]);
const missing = exportIds.filter(id => !persist.includes(id));
if (missing.length) bad("export ids with no data-persist field: " + missing.join(", "));
console.log(`persist fields: ${persist.length} · export refs: ${exportIds.length}`);

// div balance
const divOpen = (html.match(/<div\b/g) || []).length;
const divClose = (html.match(/<\/div>/g) || []).length;
console.log(`divs: ${divOpen} open / ${divClose} close`);
if (divOpen !== divClose) bad("unbalanced <div> tags");

// inline JS must parse
const js = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).join("\n");
try { new vm.Script(js); console.log(`inline JS: ${js.length} chars — parses OK`); }
catch (e) { bad("inline JS syntax error: " + e.message); }

// ---- Writing canon gate: Flesch reading ease on teach prose (DECK-PLAYBOOK §2.9) ----
// Strip non-prose (scripts, styles, code, promptblocks), then score. Fail < 60.
function cutByClass(src, cls) {
  const re = new RegExp(`<([a-z0-9]+)\\b[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>`, "i");
  let m;
  while ((m = re.exec(src))) {
    const tag = m[1];
    const open = new RegExp(`<${tag}\\b`, "g"), close = new RegExp(`</${tag}>`, "g");
    let depth = 1, pos = m.index + m[0].length;
    while (depth > 0) {
      open.lastIndex = close.lastIndex = pos;
      const o = open.exec(src), c = close.exec(src);
      if (!c) { pos = src.length; break; }
      if (o && o.index < c.index) { depth++; pos = o.index + o[0].length; }
      else { depth--; pos = c.index + c[0].length; }
    }
    src = src.slice(0, m.index) + " " + src.slice(pos);
  }
  return src;
}
const toProse = s => cutByClass(
  s.replace(/<script>[\s\S]*?<\/script>/g, " ")
   .replace(/<style>[\s\S]*?<\/style>/g, " ")
   .replace(/<pre\b[\s\S]*?<\/pre>/gi, " ")
   .replace(/<code\b[\s\S]*?<\/code>/gi, " "), "promptblock")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z]+;|&#x?[0-9a-f]+;/gi, " ");
function syllables(word) {
  let w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  w = w.replace(/[^laeiouy]e$/, "").replace(/^y/, "");
  return (w.match(/[aeiouy]{1,2}/g) || [""]).length || 1;
}
function flesch(text) {
  const words = text.split(/\s+/).filter(t => /[a-z]/i.test(t));
  const sents = text.split(/[.!?]+(?:[\s"')\]]|$)/)
    .filter(s => s.split(/\s+/).filter(t => /[a-z]/i.test(t)).length >= 2);
  if (words.length < 40 || !sents.length) return null;
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  return 206.835 - 1.015 * (words.length / sents.length) - 84.6 * (syl / words.length);
}
const deckScore = flesch(toProse(html));
if (deckScore === null) console.log("flesch: too little prose to score");
else {
  console.log(`flesch reading ease: ${deckScore.toFixed(1)} (gate: ≥ 60; target band 60–70)`);
  if (deckScore < 60) {
    bad(`flesch ${deckScore.toFixed(1)} < 60 — teach prose too dense; shorten sentences, use commoner words`);
    sections.map((b, i) => ({ i: i + 1, f: flesch(toProse(b)) }))
      .filter(s => s.f !== null).sort((a, b) => a.f - b.f).slice(0, 5)
      .forEach(s => console.log(`    section ${s.i}: ${s.f.toFixed(1)}`));
  } else if (deckScore > 70) {
    console.log("  note: above the 60–70 band — fine, but check the prose isn't underwritten");
  }
}

console.log(fail ? "RESULT: FAIL" : "RESULT: CLEAN");
process.exit(fail ? 1 : 0);
