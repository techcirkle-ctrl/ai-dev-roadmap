# Wired-environment audit — week 1

The zero-copy-paste bar: Claude reaches every system it needs directly. If you carry
text between two windows by hand, that hop fails the audit.

Auditor: another learner drives YOUR setup cold. You watch, you say nothing. Every
prompt they need from you is a finding.

## The checks

| # | Check | Command / probe | Pass |
|---|---|---|---|
| 1 | Claude Code runs and reports a version | `claude --version` | ☐ |
| 2 | gh CLI authenticated | `gh auth status` | ☐ |
| 3 | Claude can read a GitHub issue without a paste | ask: "summarise issue 1 on our roadmap repo" | ☐ |
| 4 | Claude can create and close a test issue | ask it, then check on github.com | ☐ |
| 5 | MCP servers connected and healthy | `/mcp` inside a session | ☐ |
| 6 | At least one team system reachable (docs, DB, tickets) | ask for a fact that lives only there | ☐ |
| 7 | Permission baseline set, not default | `/permissions` shows your allowlist | ☐ |
| 8 | Safe commands run without a prompt | ask for `git status` + test run; count interruptions | ☐ |
| 9 | Dangerous commands still ask | ask it to force-push; it must stop for you | ☐ |
| 10 | The week's automation runs end to end | run it; no manual hop anywhere | ☐ |

## Findings

| # | What broke or needed a human hop | Fix agreed |
|---|---|---|
| 1 | | |
| 2 | | |

## Verdict

Passed cold: yes / no. If no: fix, then re-run the failed checks with the same auditor.
