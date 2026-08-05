#!/usr/bin/env python3
"""Assemble staged public-service listings from verification results.

Reads docs/research/vetting/public-verifications/*.json (written by the
verification agents), validates each drafted row against the Business schema
rules in src/lib/directory-data.ts, and writes:

  docs/research/vetting/public-track-batch1-STAGED.json
      publish-ready rows (verified orgs, valid rows only), in the exact
      shape businesses.json expects
  docs/research/vetting/public-track-batch1-REVIEW.md
      Ragini's approval sheet: one section per org with the draft listing
      text, the intake call to make, and anything flagged

Nothing touches src/lib/data/businesses.json. Publishing is a human step:
after Ragini approves (and makes the intake calls), the approved rows are
copied into businesses.json and committed.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VERIF = ROOT / "docs" / "research" / "vetting" / "public-verifications"
STAGED = ROOT / "docs" / "research" / "vetting" / "public-track-batch1-STAGED.json"
REVIEW = ROOT / "docs" / "research" / "vetting" / "public-track-batch1-REVIEW.md"

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

ALLOWED_CITIES = {
    "Toronto", "Mississauga", "Brampton", "Oshawa", "Whitby", "Ajax",
    "Pickering", "Markham", "Vaughan", "Richmond Hill", "Newmarket",
    "Aurora", "Oakville", "Burlington", "Hamilton", "London", "Ottawa",
}


def clean(s):
    """Normalize agent text: unescape stray HTML entities, strip em dashes."""
    if not isinstance(s, str):
        return s
    s = s.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
    return s.replace("—", ", ").replace("  ", " ").strip()


def validate_row(row, org):
    problems = []
    cat = row.get("category", "")
    if cat not in CATEGORY_NAMES:
        problems.append(f"unknown category slug '{cat}'")
    tier = row.get("tier")
    cities = row.get("cities", [])
    if tier not in ("national", "provincial", "city"):
        problems.append(f"bad tier '{tier}'")
    if tier == "city" and not cities:
        problems.append("tier=city but no cities")
    if tier != "city" and cities:
        problems.append(f"tier={tier} but cities listed (must be empty)")
    for c in cities:
        if c not in ALLOWED_CITIES:
            problems.append(f"city '{c}' not in allowed vocabulary")
    for field in ("id", "name", "phone", "description"):
        if not row.get(field):
            problems.append(f"missing {field}")
    if not row.get("provinces"):
        problems.append("missing provinces")
    desc = row.get("description", "")
    if "—" in desc:
        problems.append("em dash in description")
    return problems


def to_business(row, verdict):
    """Map an agent row to the Business shape in businesses.json."""
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
    note = clean(verdict.get("intakeNote") or "")
    if note:
        b["intakeNote"] = note
    return b


def main():
    files = sorted(VERIF.glob("*.json"))
    staged, sections, problems_all = [], [], []
    counts = {"verified": 0, "issues": 0, "failed": 0}
    for f in files:
        v = json.loads(f.read_text())
        status = v.get("status", "failed")
        counts[status] = counts.get(status, 0) + 1
        org = clean(v.get("org", f.stem))
        rows, row_notes = [], []
        for row in v.get("rows", []):
            probs = validate_row(row, org)
            if probs:
                problems_all.append(f"{org} / {row.get('id')}: " + "; ".join(probs))
                row_notes.append(f"  - SKIPPED {row.get('id')}: " + "; ".join(probs))
            else:
                rows.append(to_business(row, v))
        ok_to_stage = status == "verified" and rows
        if ok_to_stage:
            staged.extend(rows)
        sec = [f"## {org}  [{status.upper()}]"]
        sec.append(f"- Org type: {v.get('orgType')} | charity/BN: {v.get('charityOrBN') or 'n/a'}")
        sec.append(f"- Intake call to confirm: **{v.get('intakePhone') or 'NONE FOUND'}**")
        sec.append(f"- How to start: {clean(v.get('intakeNote') or '')}")
        if v.get("issues"):
            sec.append("- Flags:")
            for i in v["issues"]:
                sec.append(f"  - {clean(i)}")
        sec.append(f"- Drafted rows ({len(rows)} valid):")
        for b in rows:
            sec.append(f"  - **{b['name']}** ({b['category']}, {b['tier']}"
                       + (", " + "/".join(b["cities"]) if b["cities"] else "")
                       + f") tel {b['phone']}")
            sec.append(f"    - {b['description']}")
        sec.extend(row_notes)
        sec.append("- Decision: [ ] publish   [ ] hold   [ ] drop")
        sections.append("\n".join(sec))

    STAGED.write_text(json.dumps(staged, indent=2, ensure_ascii=False) + "\n")

    header = [
        "# Public-service batch 1: approval sheet (2026-08-05)",
        "",
        f"Verification results: {counts.get('verified', 0)} verified, "
        f"{counts.get('issues', 0)} with issues, {counts.get('failed', 0)} failed, "
        f"from {len(files)} organizations checked.",
        f"Staged rows ready to publish on your yes: {len(staged)} "
        "(in public-track-batch1-STAGED.json).",
        "",
        "Your part, per the vetting doc's hospital-affiliated track:",
        "1. Skim each section below (the evidence logs are the .md files in",
        "   public-verifications/ if you want depth).",
        "2. Make the intake calls: dial each bolded number, confirm a human",
        "   answers for the right program. A batch of 20 is about an hour.",
        "3. Tick publish/hold/drop and tell Claude; approved rows go into",
        "   businesses.json and the directory goes live the same day.",
        "",
    ]
    if problems_all:
        header.append("Rows skipped by the validator (not staged):")
        header.extend(f"- {p}" for p in problems_all)
        header.append("")
    REVIEW.write_text("\n".join(header) + "\n\n" + "\n\n".join(sections) + "\n")
    print(f"{len(files)} orgs -> {len(staged)} staged rows; "
          f"{len(problems_all)} row(s) skipped. Wrote:\n  {STAGED}\n  {REVIEW}")


if __name__ == "__main__":
    sys.exit(main())
