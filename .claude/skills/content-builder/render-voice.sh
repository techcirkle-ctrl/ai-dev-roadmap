#!/usr/bin/env bash
# Render a week's voice-over from its deck, one file per narrated block.
#
#   .claude/skills/content-builder/render-voice.sh 1        # whole deck
#   .claude/skills/content-builder/render-voice.sh 1 04     # only slide 4
#
# Every element carrying data-vo becomes weeks/week-N/audio/SS-BB.m4a, where SS is
# the slide number and BB the block's position within it. The script then stamps
# data-vo-audio onto each element, so the deck plays block by block and highlights
# whichever block is speaking.
#
# Engine: edge-tts, Microsoft's neural voices. Free, no key, no account.
# Voice:  EDGE_VOICE=en-GB-SoniaNeural ./render-voice.sh 1
# Only re-renders a block whose script changed, so a reword costs one file.

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
BITRATE="${EDGE_BITRATE:-16000}"
TMP="${TMPDIR:-/tmp}/rv-$WEEK"

[ -f "$DECK" ] || { echo "no deck at $DECK"; exit 1; }
command -v uvx >/dev/null || { echo "uvx is needed: brew install uv"; exit 1; }

mkdir -p "$OUT" "$TMP"

# one text file per narrated block, named SS-BB.txt
python3 - "$DECK" "$TMP" <<'PY'
import re,sys,pathlib,html
deck,tmp=pathlib.Path(sys.argv[1]),pathlib.Path(sys.argv[2])

# the speech engine mispronounces some words; respell them for audio only
RULES=[]
d=pathlib.Path(".claude/skills/content-builder/pronounce.tsv")
if d.exists():
    for line in d.read_text().splitlines():
        line=line.strip()
        if not line or line.startswith("#") or "\t" not in line: continue
        a,b=line.split("\t",1)
        RULES.append((re.compile(r"\b"+re.escape(a)+r"\b"),b))
def respell(t):
    for rx,rep in RULES: t=rx.sub(rep,t)
    return t
for f in tmp.glob("*.txt"): f.unlink()
h=deck.read_text()
secs=re.findall(r'<section class="slide.*?</section>',h,re.S)
n=0
for si,body in enumerate(secs,1):
    for bi,vo in enumerate(re.findall(r'\sdata-vo="([^"]*)"',body),1):
        vo=html.unescape(vo).strip()
        if not vo: continue
        (tmp/f"{si:02d}-{bi:02d}.txt").write_text(respell(vo)); n+=1
print(f"{n} blocks across {len(secs)} slides")
PY

fail=0; made=0; kept=0
for f in "$TMP"/*.txt; do
  [ -e "$f" ] || break
  n=$(basename "$f" .txt)
  slide=${n%%-*}
  [ -z "$ONLY" ] || echo "$ONLY" | tr ' ' '\n' | grep -qx "$slide" || continue
  # skip when the script has not changed since the last render
  sum=$(shasum -a 1 "$f" | cut -c1-12)
  if [ -f "$OUT/$n.m4a" ] && [ "$(cat "$OUT/.$n.sha" 2>/dev/null)" = "$sum" ]; then
    kept=$((kept+1)); continue
  fi
  uvx edge-tts --voice "$VOICE" --file "$f" --write-media "$TMP/$n.mp3" >/dev/null 2>&1 \
    || { echo "  $n FAILED"; fail=1; continue; }
  afconvert -f m4af -d aach -b "$BITRATE" "$TMP/$n.mp3" "$OUT/$n.m4a" 2>/dev/null \
    || afconvert -f m4af -d aac -s 3 -b "$BITRATE" "$TMP/$n.mp3" "$OUT/$n.m4a" 2>/dev/null \
    || { echo "  $n ENCODE FAILED"; fail=1; continue; }
  echo "$sum" > "$OUT/.$n.sha"
  made=$((made+1))
done
echo "  rendered $made, unchanged $kept"

# stamp data-vo-audio onto every block that now has a file
python3 - "$DECK" "$OUT" <<'PY'
import re,sys,pathlib
deck,out=pathlib.Path(sys.argv[1]),pathlib.Path(sys.argv[2])
h=deck.read_text()
secs=list(re.finditer(r'<section class="slide.*?</section>',h,re.S))
new=[];last=0;stamped=0
for si,m in enumerate(secs,1):
    body=m.group(0); bi=[0]
    def stamp(mm):
        bi[0]+=1
        tag=mm.group(0)
        f=out/f"{si:02d}-{bi[0]:02d}.m4a"
        tag=re.sub(r'\sdata-vo-audio="[^"]*"','',tag)
        if not f.exists(): return tag
        globals()['stamped']=globals().get('stamped',0)
        return tag.replace(' data-vo="',f' data-vo-audio="audio/{si:02d}-{bi[0]:02d}.m4a" data-vo="',1)
    body2=re.sub(r'<[a-zA-Z][^>]*\sdata-vo="[^"]*"[^>]*>',stamp,body)
    new.append(h[last:m.start()]); new.append(body2); last=m.end()
new.append(h[last:])
out_html="".join(new)
if out_html!=h: deck.write_text(out_html)
print(f"stamped {len(re.findall('data-vo-audio=',out_html))} blocks")
PY

echo
du -sh "$OUT" 2>/dev/null | awk '{print "audio total: "$1}'
exit $fail
