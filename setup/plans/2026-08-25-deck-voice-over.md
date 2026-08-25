# Deck voice-over implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every `weeks/week-N/Knowledge.html` a speaker toggle and an autoplay toggle in the top right, so the deck reads each slide aloud and can advance itself.

**Architecture:** One self-contained block per deck. It adds `.vobar` CSS, a two-button control cluster next to the existing `.progress` bar, and a `VO` closure inside the deck's existing IIFE. `show()` gains one call to `VO.onSlide()`. Narration text lives in a `data-vo` attribute on each `<section class="slide">`. Nothing is fetched and nothing is added outside the single HTML file.

**Tech Stack:** Plain ES5-style JavaScript in the deck's existing IIFE, the browser `speechSynthesis` API, `localStorage`, and Node for `check-deck.js`.

**Spec:** `setup/specs/2026-08-25-deck-voice-over-design.md`

## Global constraints

- Every deck stays one self-contained HTML file. No network requests, no sibling assets, no build step.
- All colours come from the `setup/DESIGN.md` tokens already declared in the deck. Do not introduce new hex values.
- JavaScript stays in the deck's existing single `<script>` IIFE, in the same ES5-flavoured style. No arrow functions, no `let`/`const`, no template literals, no optional chaining.
- `data-vo` holds plain text only. No HTML tags, and no double-quote characters, because the value lives inside a double-quoted attribute.
- Narration never carries teaching the slide does not already show. It restates the slide.
- British English throughout, in both narration and documentation.
- The localStorage prefix is per deck: `dw1.` for week 1, `dw2.` for week 2, `dw3.` for week 3.
- Do not drive the browser preview to verify UI. Ask Shekhar to look once, per his standing rule.

---

### Task 1: Verifier rule and playbook clause

**Files:**
- Modify: `.claude/skills/content-builder/check-deck.js`
- Modify: `.claude/skills/content-builder/DECK-PLAYBOOK.md`
- Test fixture: `/private/tmp/claude-501/-Users-alanshore-Documents-Projects-ai-dev-roadmap/a7f2ec4e-d3d4-4976-ac63-313142e922d4/scratchpad/vo-fixture.html`

**Interfaces:**
- Consumes: nothing.
- Produces: a `check-deck.js` that rejects an empty `data-vo` and a `data-vo` containing markup, and prints a scripted-slide count. Tasks 2, 3 and 4 all verify against this.

- [ ] **Step 1: Write the failing fixture**

Create the fixture file with two deliberately broken slides and one good one:

```html
<section class="slide" data-vo="This one is fine. It has two sentences.">
  <div class="keep">a</div>
</section>
<section class="slide" data-vo="">
  <div class="keep">b</div>
</section>
<section class="slide" data-vo="This one has <b>markup</b> in it.">
  <div class="keep">c</div>
</section>
```

- [ ] **Step 2: Run the verifier to confirm it does not yet catch anything**

```bash
node .claude/skills/content-builder/check-deck.js "/private/tmp/claude-501/-Users-alanshore-Documents-Projects-ai-dev-roadmap/a7f2ec4e-d3d4-4976-ac63-313142e922d4/scratchpad/vo-fixture.html"
```

Expected: the output mentions sections and keep bands but says nothing about voice-over. No `✗` lines about `data-vo`.

- [ ] **Step 3: Add the rule to check-deck.js**

Insert this block immediately after the duplicate-ids block (the one ending `else console.log("duplicate ids: none");`):

```js
// voice-over: data-vo is plain, non-empty narration text when present
const vos = [...html.matchAll(/data-vo="([^"]*)"/g)].map(m => m[1]);
vos.forEach((v, i) => {
  if (!v.trim()) bad(`data-vo ${i + 1}: empty (drop the attribute instead)`);
  if (/<[a-z/!]/i.test(v)) bad(`data-vo ${i + 1}: contains markup (plain text only)`);
});
if (!vos.length) console.log("voice-over: no slides scripted");
else if (vos.length === secOpen) console.log(`voice-over: all ${vos.length} slides scripted`);
else console.log(`voice-over: ${vos.length}/${secOpen} slides scripted (partial — autoplay stops on the rest)`);
```

- [ ] **Step 4: Run the verifier again**

```bash
node .claude/skills/content-builder/check-deck.js "/private/tmp/claude-501/-Users-alanshore-Documents-Projects-ai-dev-roadmap/a7f2ec4e-d3d4-4976-ac63-313142e922d4/scratchpad/vo-fixture.html"
```

Expected: exactly two new failures, `data-vo 2: empty (drop the attribute instead)` and `data-vo 3: contains markup (plain text only)`, plus the line `voice-over: 3/3 slides scripted`.

- [ ] **Step 5: Confirm the three shipped decks still pass**

```bash
for f in weeks/week-*/Knowledge.html; do echo "== $f"; node .claude/skills/content-builder/check-deck.js "$f"; done
```

Expected: each deck prints `voice-over: no slides scripted` and its existing result is unchanged.

- [ ] **Step 6: Add the playbook clause**

In `.claude/skills/content-builder/DECK-PLAYBOOK.md` §1, insert this bullet directly after the `.soon` bullet, at the same indent level:

```markdown
  - **Voice-over is a reading of the glass.** Every slide may carry a `data-vo`
    attribute: two to four plain-text sentences that say what the slide already says,
    in speakable form. It is spoken by the browser's own speech engine, so it costs no
    bytes and works offline. It must never carry teaching the eye does not get — a
    learner who never switches the speaker on loses nothing. No markup and no double
    quotes inside the attribute. A slide without `data-vo` is silent, and autoplay
    stops there rather than advancing past it. Autoplay also stops on any slide holding
    a `.hobadge`, a `.lab` or a `.steppanel`, because the learner is working in a
    terminal or a step sequence the deck cannot see.
```

- [ ] **Step 7: Commit**

```bash
git add .claude/skills/content-builder/check-deck.js .claude/skills/content-builder/DECK-PLAYBOOK.md
git commit -m "Voice-over canon: data-vo contract in the playbook, plain-text rule in the verifier

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 2: The voice-over engine in the week 1 deck

**Files:**
- Modify: `weeks/week-1/Knowledge.html`

**Interfaces:**
- Consumes: the verifier from Task 1.
- Produces: a `VO` object exposing `onSlide()` and `cancel()`, a `.vobar` with element ids `voToggle`, `voAuto`, `voGlyph`, `voLabel`, `voCount`, and a `show()` that calls `VO.onSlide()`. Task 4 copies this block verbatim into weeks 2 and 3, changing only the storage prefix.

- [ ] **Step 1: Add the CSS**

In `weeks/week-1/Knowledge.html`, find the comment `/* chrome / progress / helpbar */` and insert this block immediately before it:

```css
/* voice-over bar */
.vobar{position:fixed;top:14px;right:20px;z-index:45;display:flex;align-items:center;gap:8px;font-family:ui-sans-serif,system-ui,sans-serif}
.vobtn{display:flex;align-items:center;gap:6px;border:1px solid var(--line);background:var(--paper);color:var(--muted);border-radius:999px;padding:6px 12px;font-family:inherit;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}
.vobtn:hover{border-color:var(--accent);color:var(--accent)}
.vobtn[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}
.vobtn[disabled]{opacity:.4;cursor:default}
.vobtn:disabled:hover{border-color:var(--line);color:var(--muted)}
.vobtn .glyph{font-size:13px;line-height:1}
.vocount{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11.5px;font-weight:700;color:var(--muted);min-width:86px;text-align:right}
```

- [ ] **Step 2: Hide the bar in print**

In the same file, find this line inside the `@media print` block:

```css
  .chrome,.helpbar,.progress,.promptblock .copy{display:none!important}
```

Replace it with:

```css
  .chrome,.helpbar,.progress,.vobar,.promptblock .copy{display:none!important}
```

- [ ] **Step 3: Add the control markup**

Find this line in the body:

```html
<div class="progress"><i id="pbar"></i></div>
```

Insert directly after it:

```html
<div class="vobar">
  <button class="vobtn" id="voToggle" type="button" aria-pressed="false" aria-label="Voice-over on or off"><span class="glyph" id="voGlyph">&#128263;</span><span id="voLabel">Voice off</span></button>
  <button class="vobtn" id="voAuto" type="button" aria-pressed="false" aria-label="Autoplay on or off" disabled>Auto</button>
  <span class="vocount" id="voCount"></span>
</div>
```

- [ ] **Step 4: Add the engine**

In the `<script>` IIFE, find these two lines:

```js
var cur=0;
slides.forEach(function(s,i){if(s.classList.contains("active"))cur=i;});
```

Insert the whole block below directly after them. It must come before `function show`, because `VO` is a `var` and is not hoisted.

```js
/* ── voice-over: the deck reads the glass aloud ──────────── */
var VO=(function(){
  var synth=window.speechSynthesis;
  var bar=document.querySelector(".vobar");
  if(!bar)return {onSlide:function(){},cancel:function(){}};
  if(!synth||typeof window.SpeechSynthesisUtterance!=="function"){
    bar.style.display="none";
    return {onSlide:function(){},cancel:function(){}};
  }
  var VOPFX="dw1.vo.";            /* per deck: dw1. / dw2. / dw3. */
  var GRACE=10;                   /* seconds the learner gets before the deck moves */
  var bToggle=document.getElementById("voToggle");
  var bAuto=document.getElementById("voAuto");
  var elGlyph=document.getElementById("voGlyph");
  var elLabel=document.getElementById("voLabel");
  var elCount=document.getElementById("voCount");
  var on=false,auto=false,armed=false,timer=null,left=0,voice=null,queue=[],qi=0,gen=0;

  function save(k,v){try{localStorage.setItem(VOPFX+k,v?"1":"0");}catch(_){}}
  function load(k){try{return localStorage.getItem(VOPFX+k)==="1";}catch(_){return false;}}

  /* the voice list arrives asynchronously in Chrome, so re-pick when it lands */
  function pickVoice(){
    var vs=[];
    try{vs=synth.getVoices()||[];}catch(_){return null;}
    var want=["Samantha","Daniel","Google UK English Female","Google US English","Microsoft Aria Online (Natural) - English (United States)"];
    var i,j;
    for(i=0;i<want.length;i++){for(j=0;j<vs.length;j++){if(vs[j].name===want[i])return vs[j];}}
    for(j=0;j<vs.length;j++){if(/^en/i.test(vs[j].lang))return vs[j];}
    return null;
  }
  voice=pickVoice();
  if(synth.addEventListener)synth.addEventListener("voiceschanged",function(){voice=pickVoice();});

  /* autoplay hands control back wherever the learner is the one working */
  function held(s){return !!(s.querySelector(".lab")||s.querySelector(".hobadge")||s.querySelector(".steppanel"));}
  function script(s){return (s.getAttribute("data-vo")||"").trim();}

  /* Chrome cuts utterances past roughly 15 seconds, so speak sentence by sentence */
  function chunks(txt){
    var out=[],buf="";
    txt.split(/\s+/).forEach(function(w){
      buf=buf?buf+" "+w:w;
      if(/[.!?]$/.test(w)){out.push(buf);buf="";}
    });
    if(buf)out.push(buf);
    return out;
  }

  function clearCount(){if(elCount)elCount.textContent="";}
  function stopTimer(){
    if(timer){clearInterval(timer);timer=null;clearCount();}
  }
  /* the generation bump fences off any utterance callback still in flight */
  function cancel(){
    gen++;stopTimer();clearCount();queue=[];qi=0;
    try{synth.cancel();}catch(_){}
  }
  function paint(){
    bToggle.setAttribute("aria-pressed",on?"true":"false");
    elGlyph.innerHTML=on?"&#128266;":"&#128263;";
    elLabel.textContent=on?"Voice on":"Voice off";
    bAuto.setAttribute("aria-pressed",(on&&auto)?"true":"false");
    bAuto.disabled=!on;
  }

  function finished(){
    stopTimer();
    if(!on||!auto)return;
    if(cur>=slides.length-1)return;
    if(held(slides[cur])){elCount.textContent="held · your move";return;}
    left=GRACE;
    elCount.textContent="next in "+left+"…";
    timer=setInterval(function(){
      left--;
      if(left<=0){stopTimer();next();return;}
      elCount.textContent="next in "+left+"…";
    },1000);
  }
  function speakNext(g){
    if(g!==gen||!on)return;
    if(qi>=queue.length){finished();return;}
    var u=new SpeechSynthesisUtterance(queue[qi++]);
    if(voice)u.voice=voice;
    u.rate=0.95;u.pitch=1;
    u.onend=function(){speakNext(g);};
    u.onerror=function(){speakNext(g);};
    try{synth.speak(u);}catch(_){}
  }
  function speakCurrent(){
    cancel();
    if(!on||!armed)return;
    var txt=script(slides[cur]);
    if(!txt)return;
    queue=chunks(txt);qi=0;
    speakNext(gen);
  }

  /* Chrome refuses to speak before the first gesture, so a saved "on" only arms.
     A keydown arms silently, because it is nearly always navigation and the slide
     change speaks a moment later anyway. */
  function armQuiet(){
    if(armed)return;
    armed=true;
    var c0=cur;
    setTimeout(function(){if(cur===c0&&!queue.length)speakCurrent();},0);
  }
  function armAndSpeak(e){
    if(armed)return;
    if(e&&e.target&&e.target.closest&&e.target.closest(".vobar"))return;
    armed=true;
    if(on)speakCurrent();
  }
  document.addEventListener("keydown",armQuiet);
  document.addEventListener("click",armAndSpeak);

  bToggle.addEventListener("click",function(){
    on=!on;armed=true;save("on",on);paint();
    if(on)speakCurrent();else cancel();
  });
  bAuto.addEventListener("click",function(){
    if(!armed){armed=true;if(on)speakCurrent();}
    auto=!auto;save("auto",auto);paint();
    if(!auto){stopTimer();clearCount();}
  });
  /* any deliberate action outside the bar cancels a pending advance */
  document.addEventListener("click",function(e){
    if(e.target.closest&&e.target.closest(".vobar"))return;
    stopTimer();
  });
  document.addEventListener("keydown",function(){stopTimer();});
  window.addEventListener("beforeprint",function(){cancel();});

  on=load("on");auto=load("auto");paint();
  return {onSlide:speakCurrent,cancel:cancel};
})();
```

- [ ] **Step 5: Hook it into slide changes**

In `function show(i)`, find this line:

```js
  refreshConf();
```

Insert directly after it:

```js
  VO.onSlide();
```

- [ ] **Step 6: Check the file still parses and still passes the verifier**

```bash
sed -n '/^<script>$/,/^<\/script>$/p' weeks/week-1/Knowledge.html | sed '1d;$d' > /tmp/vo-check.js && node --check /tmp/vo-check.js && node .claude/skills/content-builder/check-deck.js weeks/week-1/Knowledge.html
```

Expected: no syntax error, no `✗` lines, and the line `voice-over: no slides scripted`.

- [ ] **Step 7: Ask Shekhar to look**

Do not open the preview yourself. Ask him to open `weeks/week-1/Knowledge.html` and confirm four things: the two buttons sit top right without overlapping anything, `Auto` is dimmed until `Voice` is on, nothing speaks yet because no slide has a script, and print preview hides the bar.

- [ ] **Step 8: Commit**

```bash
git add weeks/week-1/Knowledge.html
git commit -m "Week 1 deck: voice-over engine, silent until slides carry data-vo

Speaker and autoplay toggles top right, browser speechSynthesis, both
states persisted. Autoplay holds on .hobadge, .lab and .steppanel panels.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 3: Narration script for all 34 week 1 slides

**Files:**
- Modify: `weeks/week-1/Knowledge.html`

**Interfaces:**
- Consumes: the engine from Task 2 and the verifier rule from Task 1.
- Produces: a `data-vo` attribute on every one of the 34 `<section class="slide">` elements.

Write each script by reading the finished slide and restating its argument aloud. Rules for every one of them:

- Two to four sentences. Under 25 words each, averaging under 15, per `~/.claude/VOICE.md`.
- Say what the slide says. Add nothing the eye cannot already get.
- Speak file paths, flags and command names exactly as written. Never simplify them.
- No double quotes and no HTML inside the attribute.
- Never refer to the deck's own furniture. Do not say "the box below" or "as you can see".
- On a hands-on or widget slide, close by naming the task, because autoplay hands control back there.

The attribute goes on the opening tag, after `data-mv`:

```html
<section class="slide" data-act="Act 1 · The agentic loop" data-mv="Chat vs agent" data-vo="Chat gives you an answer you then act on. An agent acts, checks its own work, and comes back with a result. That difference is the whole week.">
```

- [ ] **Step 1: Script the six front-matter slides**

Slides 1 to 6: Title, The week, Agenda, How this works, What is, The promise.

- [ ] **Step 2: Verify and commit**

```bash
node .claude/skills/content-builder/check-deck.js weeks/week-1/Knowledge.html
```

Expected: no `✗` lines, and `voice-over: 6/34 slides scripted (partial — autoplay stops on the rest)`.

```bash
git add weeks/week-1/Knowledge.html
git commit -m "Week 1 narration: front matter

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

- [ ] **Step 3: Script acts 1 and 2**

Slides 7 to 16: the five Act 1 slides on the agentic loop, then the five Act 2 slides on wiring day.

- [ ] **Step 4: Verify and commit**

```bash
node .claude/skills/content-builder/check-deck.js weeks/week-1/Knowledge.html
```

Expected: no `✗` lines, and `voice-over: 16/34 slides scripted (partial — autoplay stops on the rest)`.

```bash
git add weeks/week-1/Knowledge.html
git commit -m "Week 1 narration: acts 1 and 2

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

- [ ] **Step 5: Script acts 3 and 4**

Slides 17 to 26: the four Act 3 slides on token economics, then the six Act 4 slides on the four disciplines.

- [ ] **Step 6: Verify and commit**

```bash
node .claude/skills/content-builder/check-deck.js weeks/week-1/Knowledge.html
```

Expected: no `✗` lines, and `voice-over: 26/34 slides scripted (partial — autoplay stops on the rest)`.

```bash
git add weeks/week-1/Knowledge.html
git commit -m "Week 1 narration: acts 3 and 4

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

- [ ] **Step 7: Script the capstone and the close**

Slides 27 to 34: the capstone opener, its five steps, then the two closing slides.

- [ ] **Step 8: Verify the deck is fully scripted**

```bash
node .claude/skills/content-builder/check-deck.js weeks/week-1/Knowledge.html
```

Expected: no `✗` lines, and `voice-over: all 34 slides scripted`.

- [ ] **Step 9: Confirm no attribute broke the markup**

```bash
grep -c '<section class="slide' weeks/week-1/Knowledge.html && grep -o 'data-vo="[^"]*"' weeks/week-1/Knowledge.html | wc -l
```

Expected: both print 34.

- [ ] **Step 10: Ask Shekhar to listen**

Do not drive the preview. Ask him to open the deck, switch the speaker on, walk a few slides, then switch autoplay on and confirm three things: the countdown appears and reaches zero, the deck stops on the first hands-on or widget panel showing `held · your move`, and a keypress cancels a running countdown.

- [ ] **Step 11: Commit**

```bash
git add weeks/week-1/Knowledge.html
git commit -m "Week 1 narration: capstone and close — deck fully scripted

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 4: Port the silent engine to weeks 2 and 3

**Files:**
- Modify: `weeks/week-2/Knowledge.html`
- Modify: `weeks/week-3/Knowledge.html`

**Interfaces:**
- Consumes: the finished engine in `weeks/week-1/Knowledge.html`.
- Produces: nothing later tasks depend on.

Repeat every edit from Task 2 steps 1 to 5 in each file, verbatim, with one change per deck. In `weeks/week-2/Knowledge.html` set `var VOPFX="dw2.vo.";` and in `weeks/week-3/Knowledge.html` set `var VOPFX="dw3.vo.";`.

Both decks stay silent, because neither carries any `data-vo` yet. The buttons appear and the speaker toggle works, but nothing speaks and autoplay stops on every slide. That is the intended state until the narration pass for those weeks.

- [ ] **Step 1: Apply the five edits to week 2**

CSS block before `/* chrome / progress / helpbar */`, `.vobar` added to the print hide list, control markup after the `.progress` div, the `VO` block after the `slides.forEach` line with `VOPFX` set to `dw2.vo.`, and `VO.onSlide();` after `refreshConf();` inside `show()`.

- [ ] **Step 2: Apply the same five edits to week 3**

Identical, with `VOPFX` set to `dw3.vo.`.

- [ ] **Step 3: Verify both decks**

```bash
for f in weeks/week-2/Knowledge.html weeks/week-3/Knowledge.html; do echo "== $f"; node .claude/skills/content-builder/check-deck.js "$f"; done
```

Expected: no `✗` lines in either, and both print `voice-over: no slides scripted`.

- [ ] **Step 4: Confirm the three prefixes are distinct**

```bash
grep -h 'var VOPFX' weeks/week-*/Knowledge.html
```

Expected: three lines, reading `dw1.vo.`, `dw2.vo.` and `dw3.vo.`.

- [ ] **Step 5: Commit**

```bash
git add weeks/week-2/Knowledge.html weeks/week-3/Knowledge.html
git commit -m "Weeks 2 and 3: voice-over engine ported, silent until scripted

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

## Follow-up, not in this plan

Weeks 2 and 3 need their 71 slides scripted. Do that only after Shekhar has heard week 1 and decided the system voice is good enough to be worth it.
