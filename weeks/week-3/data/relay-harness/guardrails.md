# Guardrails

Never-do rules for this repo. Each one is here because it has already gone wrong once.

1. Never edit a file whose name contains `generated`. Change `openapi.yaml` and re-run
   the generator.
2. Never change a migration that has already been applied. Applied migrations are
   listed in `db/applied.txt`. Corrections go in a new migration file.
3. Never write a real credential into a file in this repo. Secrets are read from the
   environment at run time.
4. Never delete or rewrite a row in `data/archive.json`. It is append-only.

Week 3 note: rules 1 to 3 are exactly the kind of sentence that keeps being ignored
when it lives only in prose. Turning one of them into a hook is Hands-on 04.
