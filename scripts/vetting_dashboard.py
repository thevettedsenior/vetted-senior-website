#!/usr/bin/env python3
"""Vetting pipeline tracker for The Vetted Senior.

Data lives in docs/research/vetting/vetting-tracker.json (gitignored, private).
This script regenerates docs/research/vetting/dashboard.html, a self-contained
page: open it in any browser, no server needed.

Usage:
  python3 scripts/vetting_dashboard.py              # rebuild the dashboard
  python3 scripts/vetting_dashboard.py queue "Exact Business Name"
      # copy a candidate from candidate-tracker.csv into the vetting queue
      # (status shortlisted); then rebuild

Record schema (one per business in vetting-tracker.json "businesses"):
  name, category, tier, cities, priority   copied from the candidate tracker
  track    "standard" | "hospital"         hospital rows use the lighter track
  status   shortlisted | in_vetting | passed | conditional_pass | failed |
           declined_prescreen | withdrawn | removed
  stages   eight keys (see STAGES below), each {"done": bool, "date": "YYYY-MM-DD",
           "notes": str}
  criteria five keys (see CRITERIA), each {"score": null|"pass"|"marginal"|"fail",
           "notes": str}
  conditional_improvement, blocker, notes  free text
  decision_date, published_date, insurance_expiry, licence_expiry,
  next_review_override                     "YYYY-MM-DD" or null

Next review is computed: decision date + 12 months (6 for conditional_pass),
pulled earlier by insurance/licence expiry, overridden by next_review_override.
"""

import csv
import json
import sys
from datetime import date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RESEARCH = ROOT / "docs" / "research"
VETDIR = RESEARCH / "vetting"
DATA = VETDIR / "vetting-tracker.json"
TRACKER = RESEARCH / "candidate-tracker.csv"
OUT = VETDIR / "dashboard.html"

STAGES = [
    ("prescreen", "Pre-screen"),
    ("invited", "Invited"),
    ("documents", "Documents"),
    ("verification", "Verification"),
    ("interview", "Interview"),
    ("references", "References"),
    ("determination", "Determination"),
    ("published", "Published"),
]
CRITERIA = [
    ("legitimacy", "Legitimacy"),
    ("honesty", "Honesty"),
    ("competence_safety", "Competence & safety"),
    ("reliability", "Reliability"),
    ("accountability", "Accountability"),
]
ACTIVE = {"shortlisted", "in_vetting"}
DECIDED = {"passed", "conditional_pass", "failed", "declined_prescreen", "withdrawn", "removed"}


def load_data():
    if DATA.exists():
        return json.loads(DATA.read_text())
    return {"businesses": []}


def save_data(data):
    VETDIR.mkdir(parents=True, exist_ok=True)
    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")


def load_candidates():
    with open(TRACKER, newline="") as f:
        return list(csv.DictReader(f))


def blank_record(name, category, tier, cities, priority, track="standard"):
    return {
        "name": name,
        "category": category,
        "tier": tier,
        "cities": cities,
        "priority": priority,
        "track": track,
        "status": "shortlisted",
        "stages": {k: {"done": False, "date": None, "notes": ""} for k, _ in STAGES},
        "criteria": {k: {"score": None, "notes": ""} for k, _ in CRITERIA},
        "conditional_improvement": "",
        "blocker": "",
        "notes": "",
        "decision_date": None,
        "published_date": None,
        "insurance_expiry": None,
        "licence_expiry": None,
        "next_review_override": None,
        "date_queued": date.today().isoformat(),
    }


def add_months(d, months):
    y, m = d.year, d.month + months
    y += (m - 1) // 12
    m = (m - 1) % 12 + 1
    try:
        return date(y, m, d.day)
    except ValueError:
        return date(y, m, 28)


def next_review(rec):
    """Returns (iso_date or None, reason)."""
    if rec.get("next_review_override"):
        return rec["next_review_override"], "manual override"
    if rec["status"] not in ("passed", "conditional_pass"):
        return None, ""
    if not rec.get("decision_date"):
        return None, "missing decision date"
    d = date.fromisoformat(rec["decision_date"])
    months = 6 if rec["status"] == "conditional_pass" else 12
    due = add_months(d, months)
    reason = "6-month conditional re-review" if months == 6 else "annual re-review"
    for field, label in (("insurance_expiry", "insurance expires"),
                         ("licence_expiry", "licence expires")):
        if rec.get(field):
            exp = date.fromisoformat(rec[field])
            if exp < due:
                due, reason = exp, label
    return due.isoformat(), reason


def cmd_queue(name):
    data = load_data()
    if any(b["name"] == name for b in data["businesses"]):
        sys.exit(f"Already in vetting tracker: {name}")
    cands = load_candidates()
    match = [r for r in cands if r["name"] == name]
    if not match:
        near = [r["name"] for r in cands if name.lower() in r["name"].lower()]
        hint = ("; close matches: " + "; ".join(near[:5])) if near else ""
        sys.exit(f"Not found in candidate-tracker.csv: {name}{hint}")
    # one vetting record per business even if it holds rows in several categories
    r = match[0]
    rec = blank_record(r["name"], r["category"], r["tier"],
                       r["cities_served"], r["priority"])
    if len(match) > 1:
        rec["notes"] = ("Also holds tracker rows in: "
                        + ", ".join(m["category"] for m in match[1:]))
    data["businesses"].append(rec)
    save_data(data)
    print(f"Queued for vetting: {name}")


def esc(s):
    return (str(s or "").replace("&", "&amp;").replace("<", "&lt;")
            .replace(">", "&gt;"))


def build():
    data = load_data()
    recs = data["businesses"]
    for r in recs:
        r["_next_review"], r["_review_reason"] = next_review(r)
        r["_stages_done"] = sum(1 for k, _ in STAGES if r["stages"][k]["done"])
    queued_names = {r["name"] for r in recs}
    pool = [
        {"name": r["name"], "category": r["category"], "tier": r["tier"],
         "cities": r["cities_served"], "priority": r["priority"]}
        for r in load_candidates() if r["name"] not in queued_names
    ]
    payload = {
        "generated": date.today().isoformat(),
        "stages": STAGES,
        "criteria": CRITERIA,
        "businesses": recs,
        "pool": pool,
    }
    html = TEMPLATE.replace("/*__DATA__*/null", json.dumps(payload, ensure_ascii=False))
    VETDIR.mkdir(parents=True, exist_ok=True)
    OUT.write_text(html)
    print(f"Wrote {OUT.relative_to(ROOT)}  "
          f"({len(recs)} in pipeline, {len(pool)} in candidate pool)")


TEMPLATE = r"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vetting Tracker | The Vetted Senior (private)</title>
<style>
  :root { --ink:#1f2a24; --sub:#5c6b62; --line:#dfe5e0; --bg:#f7f6f2;
          --card:#ffffff; --green:#2e7d4f; --amber:#b07d18; --red:#b3402e;
          --blue:#2c5d8f; --chip:#eef1ee; }
  * { box-sizing:border-box; }
  body { margin:0; font:15px/1.5 -apple-system, "Segoe UI", Roboto, sans-serif;
         color:var(--ink); background:var(--bg); padding:24px; }
  h1 { font-size:22px; margin:0 0 2px; }
  h2 { font-size:16px; margin:28px 0 10px; border-bottom:1px solid var(--line);
       padding-bottom:6px; }
  .sub { color:var(--sub); font-size:13px; }
  .cards { display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; }
  .card { background:var(--card); border:1px solid var(--line); border-radius:8px;
          padding:10px 16px; min-width:110px; }
  .card b { display:block; font-size:22px; }
  .card span { font-size:12px; color:var(--sub); }
  table { width:100%; border-collapse:collapse; background:var(--card);
          border:1px solid var(--line); border-radius:8px; overflow:hidden; }
  th, td { text-align:left; padding:7px 10px; border-top:1px solid var(--line);
           font-size:13.5px; vertical-align:top; }
  th { background:#eef0ec; border-top:none; font-size:12px;
       text-transform:uppercase; letter-spacing:.04em; color:var(--sub); }
  .pill { display:inline-block; padding:1px 8px; border-radius:10px;
          font-size:11.5px; font-weight:600; }
  .pill.green { background:#e3f0e8; color:var(--green); }
  .pill.amber { background:#f7edd8; color:var(--amber); }
  .pill.red   { background:#f7e2de; color:var(--red); }
  .pill.blue  { background:#e2ecf6; color:var(--blue); }
  .pill.grey  { background:var(--chip); color:var(--sub); }
  .dots { white-space:nowrap; }
  .dot { display:inline-block; width:11px; height:11px; border-radius:50%;
         background:#d7ddd7; margin-right:3px; }
  .dot.on { background:var(--green); }
  .crit { display:inline-block; width:20px; height:20px; border-radius:4px;
          text-align:center; font-size:11px; font-weight:700; line-height:20px;
          margin-right:3px; color:#fff; background:#cfd6cf; }
  .crit.pass { background:var(--green); }
  .crit.marginal { background:var(--amber); }
  .crit.fail { background:var(--red); }
  .empty { color:var(--sub); font-style:italic; padding:14px;
           background:var(--card); border:1px dashed var(--line); border-radius:8px; }
  input, select { padding:6px 9px; border:1px solid var(--line); border-radius:6px;
                  font-size:13.5px; background:var(--card); }
  .filters { display:flex; gap:8px; margin:8px 0; flex-wrap:wrap; }
  .note { font-size:12.5px; color:var(--sub); }
  .name { font-weight:600; }
</style>
</head>
<body>
<h1>Vetting tracker <span class="sub">The Vetted Senior (private, not deployed)</span></h1>
<div class="sub">Generated <span id="gen"></span>. Rebuild with:
<code>python3 scripts/vetting_dashboard.py</code></div>
<div class="cards" id="cards"></div>

<h2>Re-review schedule</h2>
<div id="reviews"></div>

<h2>In vetting now</h2>
<div id="active"></div>

<h2>Waiting for vetting (shortlisted queue)</h2>
<div id="waiting"></div>

<h2>Decided</h2>
<div id="decided"></div>

<h2>Candidate pool (researched, not yet queued)</h2>
<div class="filters">
  <input id="q" placeholder="Search name or city" size="26">
  <select id="fcat"><option value="">All categories</option></select>
  <select id="fpri"><option value="">All priorities</option>
    <option>H</option><option>M</option><option>L</option></select>
  <span class="sub" id="poolcount"></span>
</div>
<div id="pool"></div>

<script>
const D = /*__DATA__*/null;
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>]/g,
  c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const today = new Date().toISOString().slice(0,10);
$("gen").textContent = D.generated;

const STATUS_PILL = {
  passed:["Passed","green"], conditional_pass:["Conditional pass","amber"],
  in_vetting:["In vetting","blue"], shortlisted:["Waiting","grey"],
  failed:["Failed","red"], declined_prescreen:["Declined at pre-screen","red"],
  withdrawn:["Withdrawn","grey"], removed:["Removed","red"] };
const pill = st => { const [t,c] = STATUS_PILL[st] || [st,"grey"];
  return `<span class="pill ${c}">${t}</span>`; };
const dots = r => '<span class="dots">' + D.stages.map(([k,label]) =>
  `<span class="dot ${r.stages[k].done?"on":""}" title="${label}${r.stages[k].date?" "+r.stages[k].date:""}"></span>`
  ).join("") + "</span>";
const crits = r => D.criteria.map(([k,label]) => {
  const s = r.criteria[k].score;
  return `<span class="crit ${s||""}" title="${label}: ${s||"not scored"}${r.criteria[k].notes?" | "+esc(r.criteria[k].notes):""}">${label[0]}</span>`;
}).join("");
const stageNow = r => {
  for (const [k,label] of D.stages) if (!r.stages[k].done) return label;
  return "Complete"; };
const tbl = (heads, rows) => rows.length
  ? `<table><tr>${heads.map(h=>`<th>${h}</th>`).join("")}</tr>${rows.join("")}</table>`
  : null;
const show = (id, heads, rows, emptyMsg) => {
  $(id).innerHTML = tbl(heads, rows) || `<div class="empty">${emptyMsg}</div>`; };

const B = D.businesses;
const live = B.filter(r => ["passed","conditional_pass"].includes(r.status));
const active = B.filter(r => r.status === "in_vetting");
const waiting = B.filter(r => r.status === "shortlisted");
const decided = B.filter(r => ["failed","declined_prescreen","withdrawn","removed"].includes(r.status));
const overdue = live.filter(r => r._next_review && r._next_review < today);

$("cards").innerHTML = [
  [live.length, "Live listings"],
  [B.filter(r=>r.status==="conditional_pass").length, "Conditional"],
  [active.length, "In vetting"],
  [waiting.length, "Waiting"],
  [decided.length, "Failed / declined"],
  [D.pool.length, "Not yet queued"],
  [overdue.length, "Overdue reviews"],
].map(([n,l],i) => `<div class="card"${i===6&&n?' style="border-color:var(--red)"':""}><b>${n}</b><span>${l}</span></div>`).join("");

const soon = d => { const dd=(new Date(d)-new Date(today))/864e5;
  return d < today ? '<span class="pill red">overdue</span>'
       : dd <= 60 ? '<span class="pill amber">due soon</span>' : ""; };
show("reviews", ["Business","Category","Status","Next review","Trigger",""],
  live.filter(r=>r._next_review)
      .sort((a,b)=>a._next_review.localeCompare(b._next_review))
      .map(r=>`<tr><td class="name">${esc(r.name)}</td><td>${esc(r.category)}</td>
        <td>${pill(r.status)}</td><td>${r._next_review}</td>
        <td class="note">${esc(r._review_reason)}</td><td>${soon(r._next_review)}</td></tr>`),
  "No listings are live yet, so nothing is scheduled for re-review.");

show("active", ["Business","Category","Stage progress","Current stage","Criteria","Blocker / notes"],
  active.map(r=>`<tr><td class="name">${esc(r.name)}<div class="note">${esc(r.cities)}</div></td>
    <td>${esc(r.category)}</td><td>${dots(r)} <span class="note">${r._stages_done}/8</span></td>
    <td>${stageNow(r)}</td><td>${crits(r)}</td>
    <td class="note">${esc(r.blocker || r.notes)}</td></tr>`),
  "Nothing is mid-vetting right now.");

show("waiting", ["Business","Category","Tier","Cities","Priority","Queued","Notes"],
  waiting.sort((a,b)=>(a.priority||"Z").localeCompare(b.priority||"Z"))
    .map(r=>`<tr><td class="name">${esc(r.name)}</td><td>${esc(r.category)}</td>
      <td>${esc(r.tier)}</td><td>${esc(r.cities)}</td><td>${esc(r.priority)}</td>
      <td>${esc(r.date_queued||"")}</td><td class="note">${esc(r.notes)}</td></tr>`),
  "The queue is empty. Add businesses with: python3 scripts/vetting_dashboard.py queue \"Business Name\"");

show("decided", ["Business","Category","Outcome","Decision date","Criteria","Notes"],
  B.filter(r=>[...Object.keys(STATUS_PILL)].includes(r.status) &&
              !["shortlisted","in_vetting"].includes(r.status))
   .sort((a,b)=>(b.decision_date||"").localeCompare(a.decision_date||""))
   .map(r=>`<tr><td class="name">${esc(r.name)}</td><td>${esc(r.category)}</td>
     <td>${pill(r.status)}</td><td>${esc(r.decision_date||"")}</td>
     <td>${crits(r)}</td><td class="note">${esc(r.conditional_improvement||r.notes)}</td></tr>`),
  "No decisions recorded yet.");

const cats = [...new Set(D.pool.map(p=>p.category))].sort();
$("fcat").innerHTML += cats.map(c=>`<option>${c}</option>`).join("");
function renderPool() {
  const q = $("q").value.toLowerCase(), c = $("fcat").value, p = $("fpri").value;
  const rows = D.pool.filter(r =>
    (!q || r.name.toLowerCase().includes(q) || (r.cities||"").toLowerCase().includes(q)) &&
    (!c || r.category === c) && (!p || r.priority === p));
  $("poolcount").textContent = rows.length + " of " + D.pool.length;
  show("pool", ["Business","Category","Tier","Cities","Priority"],
    rows.slice(0,400).map(r=>`<tr><td class="name">${esc(r.name)}</td>
      <td>${esc(r.category)}</td><td>${esc(r.tier)}</td>
      <td class="note">${esc(r.cities)}</td><td>${esc(r.priority)}</td></tr>`),
    "No candidates match the filters.");
  if (rows.length > 400) $("pool").insertAdjacentHTML("beforeend",
    `<div class="note" style="padding:6px">Showing first 400 of ${rows.length}; narrow the filters to see the rest.</div>`);
}
["q","fcat","fpri"].forEach(id=>$(id).addEventListener("input", renderPool));
renderPool();
</script>
</body>
</html>
"""


if __name__ == "__main__":
    args = sys.argv[1:]
    if args and args[0] == "queue":
        if len(args) < 2:
            sys.exit('Usage: vetting_dashboard.py queue "Exact Business Name"')
        cmd_queue(args[1])
    build()
