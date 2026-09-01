# Design language — AI Dev Roadmap

The program-wide visual canon. Every HTML artifact (roadmap, decks, data templates)
defers to this so the program reads as **one thing**, not a pile of files. Tokens are
shared verbatim with the sister repo (`ai-pm-roadmap`); the two programs are visibly
siblings. Reference implementation: `ai-pm-roadmap/weeks/week-1/Knowledge.html` until
this repo ships its own week 1 — then the newest shipped deck here. Match it; don't
reinvent it.

> Authoring engine: the `content-builder` skill reads this before building any visual artifact.

---

## Tokens (single source of truth)

Inline these CSS custom properties verbatim in every file. Do not introduce new colours
without adding them here first.

```css
:root{
  --ink:#16202b;        /* primary text */
  --muted:#5c6b7a;      /* secondary text, status-quo register */
  --line:#e4e8ec;       /* hairline borders */
  --paper:#ffffff;      /* card surface */
  --wash:#f6f8fa;       /* page background */
  --accent:#0b6e6e;     /* teal — the program's signature; the "lifted" register */
  --accent-soft:#e2f0ef;
  --warn:#b06a00;       /* ceilings, cautions, Method track */
  --warn-soft:#fdf3e3;
  --good:#1c7a4a;       /* success, "done", Real Repo track */
  --good-soft:#e5f2ea;
  --bad:#b23b3b;        /* wrong, failure mode */
  --deep:#5b4a9e;       /* violet — mechanism depth ("Under the hood" folds) */
  --deep-soft:#eceaf6;
}
```

## Type

- **Body / reading:** serif — `ui-serif, Georgia, "Iowan Old Style", Palatino, serif`.
- **UI, kickers, labels, widgets:** sans — `ui-sans-serif, system-ui, sans-serif`.
- **Code:** mono — `ui-monospace, Menlo, Consolas, monospace`. This cohort reads code
  constantly; mono blocks are first-class furniture, not decoration.
- **Kicker** convention: 600 weight, `letter-spacing:.14em`, uppercase, `--accent`, ~12px.
  Every section/slide opens with one.

## Component vocabulary

Reuse these named patterns; don't invent parallel ones.

| Component | Class | When to use |
|---|---|---|
| Card | `.card` | A bounded unit of content — rounded 14px, hairline border, faint shadow. |
| Why-box | `.why` | "Why this matters to you" — accent-soft panel opening a section. |
| Lab shell | `.lab` | An interactive widget's container. |
| Kicker | `.kicker` | The uppercase teal eyebrow above a title. |
| Tag | `.tag` | Small uppercase metadata chip (track, duration). Variants: default=Craft, `.method`, `.repo`, `.team`. |
| Fold | `details.fold` | Optional-depth collapsible strip; core teaching never lives inside one. Colour-coded by the question it answers: `.plain` "In plain words" (teal, `--accent`), `.hood` "Under the hood" (violet, `--deep`), `.industry` "How industry does it" (green, `--good`), `.btw` "By the way" (slate, `--muted`), `.dyk` "Did you know" (amber, `--warn`), `.trouble` "Stuck?" (slate, dashed — replaces the old `.bank`). Body in `.fbody`; a beforeprint handler opens all folds so print carries the layer. |
| Goal strip | `.goalstrip` | One-line goal atop every movement and capstone-step panel (movements have no divider slides — v2 grammar, 2026-08-14). |
| Coach cues | `.cuebar` + `.cueall` | The in-widget coach: current operating cue shown inside the lab shell, advanced by the learner's own actions; final cue carries the watch-for. `.cueall` is the hidden full list revealed in print. Replaces the retired `.drive` box. |
| Inline check | `.wcheck` | One self-check question inside a reveal/simulator widget; its verdict writes the widget's `.scoreline`. Sorter widgets self-check per click instead. Every widget ends self-checking. |
| Check your read | `.notice` | Hands-on panels only (terminal work the deck cannot observe). This exact label — never "What you just saw" / "What good looks like" (retired 2026-08-14). At most one; may absorb a short What-you-decide mini-lead. Never on widget panels. |
| What you decide | `.read` | The decision the learner owns. Only where genuine; concrete decisions prefer a persisted micro-capture (confidence-box pattern). |
| Taught-later chip | `.soon` | Inline grey chip marking a term previewed now and taught in a later act ("taught in Act 4"). Kills the am-I-supposed-to-know-this moment on forward references. |
| Teach list | `.teach ul` / `.fbody ul` | The default shape for teach prose that makes more than one point (spoken-English bar, 2026-08-24): one point per `li`, each a full sentence. Style matches teach paragraphs: `.teach ul,.fbody ul{margin:9px 0 9px 22px}` `.teach li,.fbody li{margin:6px 0;font-size:1.03rem}` (`.fbody li` at `.98rem`). Paragraphs are reserved for narrative — one point, ≤ 75 words, verifier-enforced. |

## The two registers (Sparkline rule)

The program tells a **What Is → What Could Be** story. The two poles are colour-coded
the *same way everywhere* so the contrast is felt, not just read:

- **What Is** — chat-driven development, the painful present. Cool/muted: `--wash`
  ground, `--muted` ink, no teal. Restrained, a little flat. The status quo should feel inert.
- **What Could Be** — the engineered loop. Lifted: `--accent` teal, `--paper` surfaces,
  more light and saturation. The future should feel like the room warms up.

Any future persuasion artifact (team pitch, methodology doc rendering) **must** code its
two poles this way.

## Two layouts, one palette

The palette is shared; the layout is not. Pick by artifact:

- **Reading column** (roadmap, data templates) — narrow `--maxw:820px`, dense serif
  text, scroll nav. Built for self-paced study on a laptop.
- **Full-bleed slide** (decks) — one viewport = one slide, keyboard nav. Same tokens,
  same fonts, inverted information density.

## Hard rules (inherited from the skill)

1. **Self-contained** — inline CSS + vanilla JS. No network, no build step, no CDN.
   Opens with a single `open <path>`.
2. **Print-friendly** — a `@media print` block that flattens interactive state to a
   readable static document.
3. **Local only** — any persisted state goes to `localStorage` on the device; nothing is
   sent anywhere.

## Voice-over chrome

Two elements, both token-only, both hidden in print.

`.vobar` pins top right at `z-index:45`. It is icon-only, because it sits over the slide
and must not compete with it. Each control is a 28px round button holding a plain line
SVG that inherits `currentColor`. With the voice off the bar shows one speaker icon; the
rest carry `.vohide` and only appear once the voice is on. Turned on it reads: speaker,
previous block, play or pause, next block, autoplay, and the speed cycle, which is the
one button with a text label. A live-region counter sits at the end. Colours come from
`--paper`, `--line` and `--muted`, switching to `--accent` and `--accent-soft` when a
control is on. The bar hides itself entirely on a deck that carries no narration.

`.vohl` marks the block currently being narrated: `--accent-soft` fill, a 3px `--accent`
left rule, padding, and a negative left margin so the rule sits in the margin rather than
shifting the line. On `.slide.act` and `.slide.dark` the fill becomes a white 10% wash so
it reads against the dark register.
