#!/usr/bin/env bash
# Independently re-check every website URL in a staged listings JSON.
# Usage: scripts/check_staged_urls.sh docs/research/vetting/gov-pass-STAGED.json
set -uo pipefail
FILE="${1:?usage: check_staged_urls.sh <staged.json>}"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
python3 -c "
import json,sys
for b in json.load(open('$FILE')):
    if b.get('website'): print(b['id'] + '\t' + b['website'])
" | while IFS=$'\t' read -r id url; do
  code=$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 25 -A "$UA" "$url")
  echo "$code  $id  $url"
done | sort
