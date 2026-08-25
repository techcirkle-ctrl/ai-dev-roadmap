# Incident briefs

Six things that have actually gone wrong in repos like yours. Use one when you need a
mistake to guard against and your own history is thin. Each is written as a colleague
would tell it to you, and each names the rule it should have had.

## 1. The generated client, patched by hand

The API client is generated from an OpenAPI file. A build broke on a type error, and
the fastest fix was to edit the generated file directly. It went green, shipped, and
survived until the next generator run wiped it. The bug came back in production three
weeks later, with nobody left who remembered the patch.

The rule it needed: generated files are never edited by hand. Change the source and
re-run the generator.

## 2. The migration that had already run

A column rename was corrected in place, in a migration file that had already been
applied on staging and production. Local databases rebuilt fine. Staging did not, and
the two schemas drifted for a week before anyone noticed.

The rule it needed: an applied migration is immutable. Corrections go in a new file.

## 3. The lock file resolved by hand

A merge conflict in the lock file was resolved by picking lines that looked right. The
install succeeded locally and produced a different dependency tree in CI, which failed
in a way nobody could reproduce for two days.

The rule it needed: lock file conflicts are resolved by re-running the package manager,
never by editing the file.

## 4. The test that was deleted to make the build green

A flaky test blocked a release. It was removed with a note to reinstate it later. The
note was in a commit message. The behaviour it covered broke four months later.

The rule it needed: a test is never deleted in the same change that makes the build
green. Quarantine it with an issue number instead.

## 5. The secret that reached the history

A service token was pasted into a config file to get a local script working, then
committed with everything else. It was found in a routine scan eleven days later, and
rotating it took a morning across three services.

The rule it needed: secrets are read from the environment at run time, never written
into a file in the repo.

## 6. The production database URL in a scratch script

A cleanup script written for a local database was run with the wrong environment
loaded. It deleted 40,000 rows that had to be restored from a nightly backup, losing
half a day of writes.

The rule it needed: destructive commands are refused outright unless the environment is
explicitly named as local.
