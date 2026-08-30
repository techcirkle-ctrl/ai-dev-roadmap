# AI Dev Roadmap — start here

Read this once, then live in the Issues tab. This repo is a nine-week programme that
takes you from prompting Claude Code ad hoc to engineering with it across the whole
SDLC. You already code; nothing here teaches syntax.

Each week gives you three things: a deck to work through, four to six projects to ship
with evidence, and a paragraph to paste into your own `~/.claude/CLAUDE.md`. GitHub
Issues track all of it. Projects arrive ticket-shaped — a problem to navigate, at the
difficulty the deck's capstone rehearsed with you. Stuck, run `/guide-me` with the
issue link: it coaches step by step and never solves.

Prefer the long version? Clone the repo and open `START-HERE.html` in a browser — same
guidance with a prerequisite checklist you can tick off.

## Your first 30 minutes

1. **Clone the repo.** You have Triage access, so you can label and comment but not
   push. That is deliberate — your work lives in your own repos, and you link to it.

   ```bash
   git clone https://github.com/techcirkle-ctrl/ai-dev-roadmap.git && cd ai-dev-roadmap
   ```

2. **Read the plan.** Open `roadmap.html` in a browser (GitHub shows HTML as source, so
   open the local file, not the GitHub page).

   ```bash
   open roadmap.html
   ```

3. **Open the current week's deck** the same way — `weeks/week-1/Knowledge.html`. The
   deck is the teaching. It is self-contained, works offline, and remembers your progress
   in that browser.

   ```bash
   open weeks/week-1/Knowledge.html
   ```

4. **Open the milestone** for the current week on GitHub and read its issues top to
   bottom: [Milestones](https://github.com/techcirkle-ctrl/ai-dev-roadmap/milestones).

5. **Check your prerequisites** before the deck's first hands-on: node 20+, git, a
   GitHub account, and Claude Code on the Max 5x plan.

## How a week runs

The week is one GitHub milestone. There is no due date and no deadline. This programme is
self-paced, so you move at whatever speed your real work allows. The milestone is one place
holding every issue for that week. Work the issues in number order, because they are built
to be done in sequence.

When you finish a week, say so. The next one gets built and pushed to `main`, and you pick
it up from there.

**Issue #1 is Knowledge.** Work through the deck: read each act, do the hands-on exercise
inside it on your own machine, then build the capstone at the end. Nothing else in the
week makes sense until this is done.

**Issues #2 to #6 are Application.** One guided project each, on a real repo. Each issue
lists what to build and what evidence to upload.

**The last issue is Reinforcement.** It hands you a paragraph for your global
`~/.claude/CLAUDE.md`. Paste it in and leave it there. It makes Claude re-surface that
week's ideology in your daily work, long after the week closes. These accumulate over the
nine weeks.

## How to submit work

Every issue is shared by the whole cohort. Nobody is assigned an issue, and nobody gets a
personal copy. Your state is a label.

1. Do the work.
2. Comment on the issue with your evidence — links to your repo or PR, session
   transcripts, harness files, screenshots, output artifacts. Drag and drop attachments
   straight into the comment box.
3. Add your own label to the issue: `shubham:done`, `akash:done`, or `atishay:done`.
4. Wait for review. If the evidence is thin, the trainer removes your label and comments
   on what is missing. Fix it and re-add the label.

Only the trainer closes issues, once every learner's label is on and accepted. So an open
issue does not mean you are behind — check your own label, not the milestone bar. To see
everything you have cleared:

```bash
gh issue list --state all --label "shubham:done"
```

## Where things live

| Path | What it is |
| --- | --- |
| `START-HERE.html` | This page, longer, with a setup checklist. Open in a browser. |
| `roadmap.html` | The nine-week plan. Open in a browser. |
| `weeks/week-N/Knowledge.html` | That week's deck — acts, hands-ons, capstone. |
| `weeks/week-N/data/` | Everything the week's projects need: repos, templates, data. |
| `CLAUDE.md` | The repo's own instructions to Claude. Worth reading as an example. |
| `setup/` | Trainer machinery. You never need it, but nothing is hidden. |

One rule: if week N needs it, it is inside `weeks/week-N/`. You never hunt across the
repo.

## The nine weeks

Full detail is in `roadmap.html`. A week is live once its deck is on `main`; until then
the folder may not exist yet.

| Week | Topic | Status |
| --- | --- | --- |
| 1 | Setup + the map: wire everything | Live |
| 2 | Context engineering: what the model sees, at the right scope | Live |
| 3 | Harness engineering: encode it, don't repeat it | Live |
| 4 | Planning: spec-driven development | Live |
| 5 | Loop engineering I: the verified loop | Not open yet |
| 6 | Loop engineering II: autonomy | Not open yet |
| 7 | Graph engineering + tracking | Not open yet |
| 8 | Industry methodologies: run the famous processes | Not open yet |
| 9 | The merge and the proof | Not open yet |

Four disciplines run through the whole programme: context engineering, harness
engineering, loop engineering, graph engineering. Week 1 gives you an hour on each. Learn
the names now; you will use them every week.

## When you are stuck

- Confused about what an issue wants? Comment on the issue. That is the channel.
- Deck won't open or a hands-on fails on your machine? Comment on the Knowledge issue
  with the error.
- Stuck for more than 20 minutes? Say so in the issue rather than going quiet.
- Something in the repo contradicts something else? `roadmap.html` and
  `setup/METHODOLOGY.md` win. Flag the contradiction.
