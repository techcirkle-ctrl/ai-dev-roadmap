#!/usr/bin/env bash
# Render a week's voice-over from its deck.
#
#   .claude/skills/content-builder/render-voice.sh 1          # whole deck
#   .claude/skills/content-builder/render-voice.sh 1 07 12     # only those slides
#
# Reads every data-vo from weeks/week-N/Knowledge.html and writes
# weeks/week-N/audio/NN.m4a, then stamps data-vo-audio onto each slide.
#
# Engine: edge-tts, Microsoft's neural voices. Free, no key, no account.
# Voice:  override with EDGE_VOICE=en-GB-SoniaNeural ./render-voice.sh 1

set -uo pipefail
ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
cd "$ROOT"

WEEK="${1:-}"
[ -n "$WEEK" ] || { echo "usage: render-voice.sh <week-number> [slide ...]"; exit 2; }
shift || true
ONLY="$*"

DECK="weeks/week-$WEEK/Knowledge.html"
OUT="weeks/week-$WEEK/audio"
VOICE="${EDGE_VOICE:-en-GB-RyanNeural}"
TMP="${TMPDIR:-/tmp}/rv-$WEEK"

[ -f "$DECK" ] || { echo "no deck at $DECK"; exit 1; }
command -v uvx >/dev/null || { echo "uvx is needed: brew install uv"; exit 1; }

mkdir -p "$OUT" "$TMP"

# pull each slide's script out to its own file
python3 - "$DECK" "$TMP" <<'PY'
import re,sys,pathlib
deck,tmp=pathlib.Path(sys.argv[1]),pathlib.Path(sys.argv[2])
h=deck.read_text()
vos=re.findall(r'<section class="slide[^"]*"[^>]*\sdata-vo="([^"]*)"',h)
for i,v in enumerate(vos,1):
    (tmp/f"{i:02d}.txt").write_text(v.strip())
print(f"{len(vos)} scripts extracted")
PY

fail=0
for f in "$TMP"/*.txt; do
  n=$(basename "$f" .txt)
  [ -z "$ONLY" ] || echo "$ONLY" | tr ' ' '\n' | grep -qx "$n" || continue
  uvx edge-tts --voice "$VOICE" --file "$f" --write-media "$TMP/$n.mp3" >/dev/null 2>&1 \
    || { echo "  $n FAILED"; fail=1; continue; }
  # HE-AAC at 32k: speech-tuned, roughly half the size of plain AAC
  afconvert -f m4af -d aach -b 32000 "$TMP/$n.mp3" "$OUT/$n.m4a" 2>/dev/null \
    || afconvert -f m4af -d aac -s 3 -b 32000 "$TMP/$n.mp3" "$OUT/$n.m4a" 2>/dev/null
  echo "  $n ok"
done

# stamp data-vo-audio onto every slide that now has a file
python3 - "$DECK" "$OUT" <<'PY'
import re,sys,pathlib
deck,out=pathlib.Path(sys.argv[1]),pathlib.Path(sys.argv[2])
h=deck.read_text(); week=deck.parent.name.split("-")[-1]
n=[0]
def stamp(m):
    n[0]+=1
    tag=m.group(0)
    if not (out/f"{n[0]:02d}.m4a").exists(): return tag
    tag=re.sub(r'\sdata-vo-audio="[^"]*"','',tag)
    return tag.replace(' data-vo="',f' data-vo-audio="audio/{n[0]:02d}.m4a" data-vo="',1)
h2=re.sub(r'<section class="slide[^"]*"[^>]*\sdata-vo="[^"]*"',stamp,h)
if h2!=h: deck.write_text(h2)
print(f"stamped {len(re.findall(chr(100)+'ata-vo-audio=',h2))} slides")
PY

echo
du -sh "$OUT" | awk '{print "audio total: "$1}'
exit $fail
