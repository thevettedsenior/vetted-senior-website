#!/usr/bin/env python3
"""Assemble the government-services pass from verification results.

Reads docs/research/vetting/gov-verifications/*.json (written by the
research agents), validates each drafted row against the Business schema
rules in src/lib/directory-data.ts, and writes:

  docs/research/vetting/gov-pass-STAGED.json   publish-ready rows
  docs/research/vetting/gov-pass-REVIEW.md     flagged items for Ragini

Owner direction 2026-08-05: verified government rows publish directly;
only "issues"/"failed" families and validator-skipped rows wait for review.

  python3 scripts/assemble_gov_listings.py            stage + review sheet
  python3 scripts/assemble_gov_listings.py --publish  also merge staged rows
                                                      into businesses.json
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERIF = ROOT / "docs" / "research" / "vetting" / "gov-verifications"
STAGED = ROOT / "docs" / "research" / "vetting" / "gov-pass-STAGED.json"
REVIEW = ROOT / "docs" / "research" / "vetting" / "gov-pass-REVIEW.md"
BUSINESSES = ROOT / "src" / "lib" / "data" / "businesses.json"

CATEGORY_NAMES = {
    "home-care": "Home Care & Nursing",
    "doctors-pharmacy-medication": "Doctors, Pharmacy & Medication",
    "mobility-equipment": "Mobility, Physio & Falls Prevention",
    "hearing-vision": "Vision, Hearing, Dental & Foot Care",
    "medical-alert-safety": "Medical Alert & Safety",
    "dementia-memory-support": "Dementia & Memory Support",
    "mental-health-counselling": "Mental Health & Counselling",
    "palliative-hospice-care": "Palliative & Hospice Care",
    "legal-financial": "Legal & Financial",
    "funeral-estate-planning": "Funeral & Estate Planning",
    "transportation": "Transportation",
    "home-maintenance": "Home Maintenance",
    "companion-social": "Companion & Social",
    "meals-nutrition": "Meals & Nutrition",
    "downsizing-moving": "Downsizing & Moving",
    "retirement-residences": "Retirement Residences",
}

ALL_PROVINCES = ["AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC",
                 "SK", "NT", "NU", "YT"]

ALLOWED_CITIES = {
    "Toronto", "Mississauga", "Brampton", "Oshawa", "Whitby", "Ajax",
    "Pickering", "Markham", "Vaughan", "Richmond Hill", "Newmarket",
    "Aurora", "Oakville", "Burlington", "Hamilton", "London", "Ottawa",
}

PROGRAMS = ["Meals on Wheels", "Friendly Visiting", "Adult Day Program"]


def clean(s):
    if not isinstance(s, str):
        return s
    s = s.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
    return s.replace("—", ", ").replace("  ", " ").strip()


def validate_row(row, existing_ids, staged_ids):
    problems = []
    cat = row.get("category", "")
    if cat not in CATEGORY_NAMES:
        problems.append(f"unknown category slug '{cat}'")
    tier = row.get("tier")
    cities = row.get("cities", [])
    provinces = row.get("provinces", [])
    if tier not in ("national", "provincial", "city"):
        problems.append(f"bad tier '{tier}'")
    if tier == "city" and not cities:
        problems.append("tier=city but no cities")
    if tier != "city" and cities:
        problems.append(f"tier={tier} but cities listed (must be empty)")
    if tier == "national" and sorted(provinces) != sorted(ALL_PROVINCES):
        problems.append("tier=national must list all 13 province/territory codes")
    for c in cities:
        if c not in ALLOWED_CITIES:
            problems.append(f"city '{c}' not in allowed vocabulary")
    for p in provinces:
        if p not in ALL_PROVINCES:
            problems.append(f"unknown province code '{p}'")
    for field in ("id", "name", "phone", "description", "website"):
        if not row.get(field):
            problems.append(f"missing {field}")
    if not provinces:
        problems.append("missing provinces")
    if "—" in row.get("description", ""):
        problems.append("em dash in description")
    rid = row.get("id")
    if rid in existing_ids:
        problems.append(f"id '{rid}' already exists in businesses.json")
    if rid in staged_ids:
        problems.append(f"duplicate id '{rid}' within this pass")
    return problems


def to_business(row, verdict):
    b = {
        "id": row["id"],
        "name": clean(row["name"]),
        "category": CATEGORY_NAMES[row["category"]],
        "tier": row["tier"],
        "provinces": row["provinces"],
        "cities": row.get("cities", []),
        "phone": row["phone"],
        "description": clean(row["description"]),
        "listingType": "public-service",
        "verifiedDate": verdict.get("checkedDate", "2026-08-05"),
    }
    if row.get("brandGroup"):
        b["brandGroup"] = row["brandGroup"]
    if row.get("website"):
        b["website"] = row["website"]
    note = clean(row.get("intakeNote") or verdict.get("intakeNote") or "")
    if note:
        b["intakeNote"] = note
    raw_name = clean(row["name"]).lower()
    for prog in PROGRAMS:
        if prog.lower() in raw_name:
            b["program"] = prog
            b["runBy"] = clean(verdict.get("org", "")) or b["name"]
            break
    return b


def main():
    publish = "--publish" in sys.argv
    existing = json.loads(BUSINESSES.read_text())
    existing_ids = {b["id"] for b in existing}

    files = [f for f in sorted(VERIF.glob("*.json"))]
    staged, sections, problems_all = [], [], []
    staged_ids = set()
    counts = {"verified": 0, "issues": 0, "failed": 0}
    for f in files:
        v = json.loads(f.read_text())
        status = v.get("status", "failed")
        counts[status] = counts.get(status, 0) + 1
        org = clean(v.get("org", f.stem))
        rows, row_notes = [], []
        for row in v.get("rows", []):
            probs = validate_row(row, existing_ids, staged_ids)
            if probs:
                problems_all.append(f"{org} / {row.get('id')}: " + "; ".join(probs))
                row_notes.append(f"  - HELD {row.get('id')}: " + "; ".join(probs))
            else:
                rows.append(to_business(row, v))
                staged_ids.add(row["id"])
        if rows and status == "verified":
            staged.extend(rows)
        sec = [f"## {org}  [{status.upper()}]"]
        sec.append(f"- Intake: **{v.get('intakePhone') or 'NONE FOUND'}** | "
                   f"{clean(v.get('intakeNote') or '')}")
        if v.get("issues"):
            sec.append("- Flags:")
            for i in v["issues"]:
                sec.append(f"  - {clean(i)}")
        sec.append(f"- Rows ({len(rows)} valid, "
                   f"{'PUBLISHED' if status == 'verified' else 'HELD for your call'}):")
        for b in rows:
            sec.append(f"  - **{b['name']}** ({b['category']}, {b['tier']}"
                       + (", " + "/".join(b["cities"]) if b["cities"] else "")
                       + f") tel {b['phone']}")
            sec.append(f"    - {b['description']}")
        sec.extend(row_notes)
        sections.append("\n".join(sec))

    STAGED.write_text(json.dumps(staged, indent=2, ensure_ascii=False) + "\n")

    header = [
        "# Government-services pass (2026-08-05)",
        "",
        f"{counts.get('verified', 0)} program families verified, "
        f"{counts.get('issues', 0)} with issues held for Ragini, "
        f"{counts.get('failed', 0)} failed, from {len(files)} files.",
        f"Staged rows: {len(staged)} (gov-pass-STAGED.json).",
        "",
        "Per owner direction, verified rows publish directly. Sections marked",
        "ISSUES below are waiting on your judgment; tell Claude publish/drop.",
        "",
    ]
    if problems_all:
        header.append("Rows held by the validator (not staged):")
        header.extend(f"- {p}" for p in problems_all)
        header.append("")
    REVIEW.write_text("\n".join(header) + "\n\n" + "\n\n".join(sections) + "\n")
    print(f"{len(files)} files -> {len(staged)} staged rows; "
          f"{len(problems_all)} held. Wrote:\n  {STAGED}\n  {REVIEW}")

    if publish and staged:
        merged = existing + staged
        merged.sort(key=lambda b: b["id"])
        BUSINESSES.write_text(
            json.dumps(merged, indent=2, ensure_ascii=False) + "\n")
        print(f"Published: businesses.json now has {len(merged)} rows "
              f"({len(existing)} existing + {len(staged)} new).")


if __name__ == "__main__":
    sys.exit(main())
