# Four under-specified tickets

Use these when you have no suitable real feature this week, and as fresh material for the
Application issues. Each one is written the way tickets actually arrive: a symptom or a
wish, with the decisions left out.

Every one of them hides at least four decisions. None of them tells you what is out of
scope. That is the point — your job is to find what is missing, not to be handed it.

Pick the one closest to work you actually do. Do not pick the one that looks easiest.

---

## T-1 · "Make the export less painful"

> Customers keep emailing support about the CSV export. Sarah says it's the top complaint
> this quarter. Can we sort it out before the renewal conversations start?

Filed by: Head of Support. No acceptance criteria. No mention of what "painful" means.

---

## T-2 · "We need audit logging"

> Compliance asked for audit logging before the security review in six weeks. They want
> to know who changed what. Ideally we'd have it for everything.

Filed by: Engineering Manager. "Ideally for everything" is doing a lot of work in that
sentence.

---

## T-3 · "The dashboard is slow"

> The dashboard takes ages to load for our bigger accounts. One customer said 30 seconds.
> Can someone look at caching it?

Filed by: Account Manager. Note that the ticket already contains a proposed solution,
which is the trap. Strip it out before you brainstorm.

---

## T-4 · "Let people undo things"

> We keep getting tickets from people who deleted something by accident. Can we add an
> undo? Or a trash folder, or something like that.

Filed by: Product. Two different features are named in one sentence, and they have very
different costs.

---

## How to use these

**For the deck's Hands-on 02:** pick one, run the brainstorm prompt from
`brainstorm-brief-template.md`, and produce a brief. No code, no file names.

**For the Application issues:** these are fresh problems of the same class the capstone
rehearsed. Nothing here has a worked answer anywhere in this repo, which is deliberate.

**A warning about T-3.** It names a solution ("caching") before it names the problem.
Roughly half of real tickets do this, and the instinct is to start on the named solution.
Ask what would still be true if caching turned out to be the wrong answer.
