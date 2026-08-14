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
| Taught-later chip | `.soon` | Inline grey chip marking a term previewed now and taught in a later act ("taught in Act 4"). Kills the am-I-supposed-to-know-this moment on forward references. |

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
