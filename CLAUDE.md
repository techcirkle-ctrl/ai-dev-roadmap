# AI Dev Roadmap

Learning program for developers: ad hoc prompting → engineering with Claude Code across
the whole SDLC. Sister repo to `ai-pm-roadmap` — same machinery, different cohort. This
file is the repo's ideology in brief; the full operating contract is
`setup/METHODOLOGY.md` — read it before building anything.

## Repo layout

- `README.md` — the learner's front door: how to navigate, how a week runs, how to submit
  evidence, and a status table of the nine weeks. Update it whenever a week goes live.
- `START-HERE.html` — the same onboarding at length, in the program's visual language,
  with a persisted setup checklist. Kept in sync with `README.md`; both carry the
  nine-week status table.
- `roadmap.html` — the curriculum contract. Self-contained HTML timeline: one entry per
  week (topics, track tags, description). Learner-facing; tracks exist ONLY here as tags.
- `weeks/week-N/` — everything the learner needs for week N: the deck
  (`Knowledge.html`), data/repos for projects (week 1 ships the gym repo). One week,
  one folder — never make a learner hunt across the repo.
- `setup/` — operational, not learner-facing: `METHODOLOGY.md` (operating contract),
  `DESIGN.md` (visual canon for all HTML artifacts), `templates/` (typed issue +
  milestone templates), and fallback copies of issues / milestones / learner-progress.
- `.claude/skills/content-builder/` — the week-building engine: gated build workflow
  (`SKILL.md`), deck canon (`DECK-PLAYBOOK.md`), structural verifier, GitHub publisher.

## The ideology

- **The audience already codes.** Working developers, daily Claude users, stuck at
  chat-driven development. No LLM-101 padding; the gap is method, never syntax.
- **One tool.** Claude Code only, for the whole program. Mastery over sampling.
- **Four disciplines are the spine:** harness engineering (wk 3), context engineering
  (wk 2), loop engineering (wk 5–6), graph engineering (wk 7); all four surveyed as
  one-hour mini-reps in wk 1. Name them constantly; learners should leave speaking this
  vocabulary.
- **Setup first:** wk 1 wires gh CLI, MCP connectors and permissions to a
  zero-copy-paste bar. Token economics on the Max 5x plan is curriculum (wk 1, wk 6).
- **Scope everything:** documents and harness artifacts live at their correct scope —
  global / workspace / project / directory / local. The documentation layer (CONTEXT.md,
  DESIGN.md, guardrails.md, ADR philosophy) is taught in wk 2 and wk 4; AGENTS.md is
  symlinked to CLAUDE.md for cross-agent portability.
- **Industry before own:** wk 8 runs named industry methodologies (Superpowers, Matt
  Pocock, Harper Reed, Ralph, Kiro-style, Anthropic's explore → plan → code → commit);
  wk 9 merges the steal list with the friction log into the learner's own methodology.
- **Three pedagogies, in order, every week:** Knowledge (work through the deck) →
  Application (5–6 guided projects with uploaded evidence) → Reinforcement (a paragraph
  the learner adds to their global `~/.claude/CLAUDE.md` that makes Claude re-surface the
  week's ideology as TIL lines forever after).
- **Two things never compressed:** verification loops (wk 5–6) and real-repo reps
  (wk 3 onward).
- **Week = GitHub milestone**, due Sunday EOD. All the week's issues belong to it.
- **Deck ideology:** one self-contained HTML deck per week on `main`; acts (one act =
  one topic) with embedded hands-on exercises run in Claude Code on real repos; a
  capstone project after the final act.
- **GitHub Issues + Milestones are the source of truth** for all tracking; `setup/`
  copies are fallback only.

## Rules for Claude in this repo

- Never contradict `roadmap.html` (the curriculum contract) or `setup/METHODOLOGY.md`.
- All HTML artifacts follow `setup/DESIGN.md` tokens — self-contained, inline CSS/JS,
  no network, print-friendly, local-only state.
- New issues come from `setup/templates/` (Knowledge / Application / Reinforcement).
- British English throughout (this repo's canon; the sister repo is American).
- Keep the root clean: only `README.md`, `START-HERE.html`, `CLAUDE.md`, `roadmap.html`,
  `weeks/`, `.claude/`, `setup/`.
