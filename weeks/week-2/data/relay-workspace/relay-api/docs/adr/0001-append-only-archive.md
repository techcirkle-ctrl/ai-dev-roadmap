# ADR 0001: the archive is append-only and ids are never reused

Date: 2026-05-11. Status: accepted.

## Context

The finance export and the standup bot both key on task ids. A reused id once
double-billed a client project. The archive feeds the quarterly report, and rows have
been silently lost twice by well-meant "cleanup" scripts.

## Decision

The `archive` array in `data/tasks.json` is append-only. No process may delete,
rewrite or dedupe archive entries in the file. Task ids increase monotonically and are
never reused, even after a task is deleted.

## Consequences

Duplicate rows in the archive are expected and tolerated. Consumers dedupe by id at
read time (relay-report does this). A bad archive row is fixed by appending a
correcting row, never by editing history.
