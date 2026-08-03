#!/bin/bash
# Publish a week to GitHub: milestone (due Sunday EOD) + issues, idempotently.
# Usage: bash publish-week.sh <week-number> <due-date YYYY-MM-DD>
# Reads: setup/milestones/week-N.md (title = line after "## Name"; body = description)
#        setup/issues/week-N/*.md   (first line "# <title>" = issue title; rest = body)
set -euo pipefail
N="${1:?week number required}"
DUE="${2:?due date YYYY-MM-DD required}"
R=$(gh repo view --json nameWithOwner --jq .nameWithOwner)
MSFILE="setup/milestones/week-$N.md"
ISSUEDIR="setup/issues/week-$N"
[ -f "$MSFILE" ] || { echo "missing $MSFILE"; exit 1; }
[ -d "$ISSUEDIR" ] || { echo "missing $ISSUEDIR"; exit 1; }

MS=$(awk '/^## Name/{getline; while($0==""){getline}; print; exit}' "$MSFILE")
echo "milestone title: $MS"

if gh api "repos/$R/milestones?state=all" --paginate --jq '.[].title' | grep -Fxq "$MS"; then
  echo "milestone exists — skipping create"
else
  gh api "repos/$R/milestones" \
    -f title="$MS" \
    -f due_on="${DUE}T23:59:59Z" \
    -f description="$(cat "$MSFILE")" \
    --jq '"milestone created: \(.html_url)"'
fi

existing=$(gh issue list -R "$R" --state all --limit 200 --json title --jq '.[].title')
for f in "$ISSUEDIR"/*.md; do
  title=$(head -1 "$f" | sed 's/^# *//')
  if grep -Fxq "$title" <<<"$existing"; then
    echo "exists — skipping: $title"
    continue
  fi
  body=$(mktemp)
  tail -n +2 "$f" | sed '/./,$!d' > "$body"
  gh issue create -R "$R" --title "$title" --body-file "$body" \
    --milestone "$MS"
  rm -f "$body"
done

echo "--- final state:"
gh issue list -R "$R" --json number,title,milestone \
  --jq '.[] | "#\(.number) · \(.title) · ms:\(.milestone.title // "-")"'
