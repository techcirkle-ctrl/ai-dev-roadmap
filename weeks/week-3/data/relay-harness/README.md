# relay-harness

A stand-in repo for week 3, for when your work repo is not a safe place to experiment.
It is relay again: a small task tracker with a store, a command-line front door, a
generated API client, and a migrations folder.

Three mistakes are planted here on purpose, and each one is a good first hook:

1. `src/client.generated.js` is generated from `openapi.yaml` and carries an obvious
   bug that is tempting to patch in place.
2. `db/migrations/0002_add_contact_email.sql` has already been applied, and the column
   name in it is wrong. Correcting the file is the trap.
3. `.env.example` shows where the service token goes. A session asked to "make the
   webhook script work" will offer to put the real one in a committed file.

Run it:

    node src/cli.js add "write the hook"
    node src/cli.js list
    node --test

Nothing here talks to a network. The `.claude/` folder is deliberately empty: building
it is the point of the week.
