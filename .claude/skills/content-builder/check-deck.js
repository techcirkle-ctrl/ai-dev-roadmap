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

// v2 grammar: the coach lives inside the widget; every widget self-checks
sections.forEach((body, i) => {
  const isLab = body.includes('class="lab"');
  if (isLab) {
    if (!body.includes('class="cuebar"')) bad(`section ${i + 1}: .lab without a .cuebar coach`);
    if (!body.includes('class="cueall"')) bad(`section ${i + 1}: .lab without a .cueall print list`);
    if (!body.includes('class="scoreline"')) bad(`section ${i + 1}: .lab without a .scoreline (widgets must self-check)`);
    if (body.includes('class="notice"')) bad(`section ${i + 1}: notice band on a widget panel (v2: hands-on panels only)`);
  }
  // movement + capstone-step panels open with a goal strip
  if ((isLab || body.includes('class="hobadge"')) && !body.includes('class="goalstrip"'))
    bad(`section ${i + 1}: movement/step panel without a .goalstrip`);
});
console.log(`labs: ${(html.match(/class="lab"/g) || []).length} · cuebars: ${(html.match(/class="cuebar"/g) || []).length} · scorelines: ${(html.match(/class="scoreline"/g) || []).length} · notices (hands-on only): ${(html.match(/class="notice"/g) || []).length}`);

// presenter-era remnants must never return; .drive retired in v2
for (const rem of ['class="script"', 'class="note"', "scriptpanel", "script-open", "@@MORE@@", 'class="bank"', 'class="drive"'])
  if (html.includes(rem)) bad("presenter-era remnant / stray marker: " + rem);

// v2: no movement/step divider slides — the dark register belongs to act openers only
const darkCount = (html.match(/class="slide dark"/g) || []).length;
if (darkCount) bad(`movement/step divider slides present: ${darkCount} × 'slide dark' (v2 retired them; dark register = act openers only)`);

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

// voice-over: data-vo is plain, non-empty narration text when present
const vos = [...html.matchAll(/data-vo="([^"]*)"/g)].map(m => m[1]);
vos.forEach((v, i) => {
  if (!v.trim()) bad(`data-vo ${i + 1}: empty (drop the attribute instead)`);
  if (/<[a-z/!]/i.test(v)) bad(`data-vo ${i + 1}: contains markup (plain text only)`);
});
if (!vos.length) console.log("voice-over: no slides scripted");
else if (vos.length === secOpen) console.log(`voice-over: all ${vos.length} slides scripted`);
else console.log(`voice-over: ${vos.length}/${secOpen} slides scripted (partial — autoplay stops on the rest)`);

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

// ---- Writing canon gate: spoken-English bar (DECK-PLAYBOOK §2.8c) ----
// (a) paragraph cap: one point per <p>, ≤ 75 words, on all learner-facing prose
const proseHtml = cutByClass(
  html.replace(/<script>[\s\S]*?<\/script>/g, " ")
      .replace(/<style>[\s\S]*?<\/style>/g, " ")
      .replace(/<pre\b[\s\S]*?<\/pre>/gi, " ")
      .replace(/<code\b[\s\S]*?<\/code>/gi, " "), "promptblock");
const longPs = [...proseHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)]
  .map(m => m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
  .map(t => ({ t, n: t.split(/\s+/).filter(w => /[a-z]/i.test(w)).length }))
  .filter(p => p.n > 75);
if (longPs.length) {
  bad(`paragraph walls: ${longPs.length} × <p> over 75 words — split into bullets or shorter paragraphs`);
  longPs.slice(0, 5).forEach(p => console.log(`    ${p.n} words: "${p.t.split(/\s+/).slice(0, 8).join(" ")}…"`));
} else console.log("paragraph cap (≤ 75 words): clean");

// (b) jargon banlist: trade shorthand that is not curriculum never reaches the learner
const JARGON = /\b(spike[sd]?|probes?|probed|probing|deltas?|ante|shards?|dogfood(?:ing)?|greenfield)\b/gi;
const jargonHits = {};
for (const m of toProse(html).matchAll(JARGON)) {
  const w = m[0].toLowerCase();
  jargonHits[w] = (jargonHits[w] || 0) + 1;
}
const jargonWords = Object.keys(jargonHits);
if (jargonWords.length)
  bad("banned trade jargon in prose (§2.8c — use the everyday word): " +
      jargonWords.map(w => `${w} ×${jargonHits[w]}`).join(", "));
else console.log("jargon banlist: clean");

// (c) sentence cap: no learner-facing sentence over 25 words (~/.claude/VOICE.md)
// Per-element so a title without a full stop can't run into the paragraph after it.
const BLOCK = /<(p|li|h1|h2|h3|summary)\b[^>]*>([\s\S]*?)<\/\1>/g;
const plain = h => h.replace(/<[^>]+>/g, " ")
                    .replace(/&nbsp;/gi, " ")
                    .replace(/&[a-z]+;|&#x?[0-9a-f]+;/gi, "")
                    .replace(/\s+/g, " ").trim();
const wordsIn = t => t.split(/\s+/).filter(w => /[a-z]/i.test(w)).length;
const sentencesIn = t => t.split(/[.!?]+(?:[\s"')\]]|$)/).filter(Boolean);
const longSents = [];
for (const m of proseHtml.matchAll(BLOCK))
  for (const sent of sentencesIn(plain(m[2]))) {
    const n = wordsIn(sent);
    if (n > 25) longSents.push({ n, sent });
  }
if (longSents.length) {
  bad(`sentences over 25 words: ${longSents.length} — split them (VOICE.md hard cap)`);
  longSents.sort((a, b) => b.n - a.n).slice(0, 8)
    .forEach(s => console.log(`    ${s.n} words: "${s.sent.trim().slice(0, 90)}…"`));
} else console.log("sentence cap (≤ 25 words): clean");

// (d) keep band cap: one thought, ≤ 25 words (DECK-PLAYBOOK §1)
const fatKeeps = [...proseHtml.matchAll(/<span class="keep">([\s\S]*?)<\/span>/g)]
  .map(m => plain(m[1]).replace(/^Keep this\s*/i, ""))
  .map(t => ({ t, n: wordsIn(t) }))
  .filter(k => k.n > 25);
if (fatKeeps.length) {
  bad(`keep bands over 25 words: ${fatKeeps.length} — one thought per keep`);
  fatKeeps.slice(0, 8).forEach(k => console.log(`    ${k.n} words: "${k.t.slice(0, 90)}…"`));
} else console.log("keep band cap (≤ 25 words): clean");

console.log(fail ? "RESULT: FAIL" : "RESULT: CLEAN");
process.exit(fail ? 1 : 0);
