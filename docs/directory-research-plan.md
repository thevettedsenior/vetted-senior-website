# Directory Research Plan: National, Provincial, City

Internal ops document. Not published on the site. Governs how candidate
providers are researched before vetting. Research produces a CANDIDATE LIST,
never a live listing: nothing enters BUSINESSES in directory-data.ts until it
passes the full vetting process.

## 1. Principles

- Tiers are additive, not exclusive. A category like meal delivery has
  national chains (Heart to Home Meals), provincial companies, and city-only
  kitchens at the same time. All are captured, each tagged with its actual
  coverage.
- One row per company, ever. A national chain discovered again during a city
  search updates the existing row's coverage notes, it never creates a new row.
- Registries beat search engines. Where a regulator or association publishes a
  member/licensee list (RHRA, BAO, ADP vendor lists, Home Care Ontario), pull
  from the registry first and use web search only to fill gaps.
- Research is cheap, vetting is expensive (6 to 9 hours per provider). The
  candidate list will always be longer than the vetting queue; the tracker's
  priority column is what feeds vetting.

## 2. Candidate tracker schema

One spreadsheet (or CSV per category) with these columns:

| Column | Notes |
|---|---|
| name | Legal/trade name |
| category | One of the 16 category slugs (multi-category = one row per category, cross-referenced) |
| tier | national / provincial / city |
| provinces_served | Comma list of codes, or "all" |
| cities_served | Comma list, blank if tier is national/provincial |
| website | |
| phone | |
| email | If publicly listed |
| hq_city, hq_province | |
| years_operating | If discoverable |
| licence_or_registry_ref | e.g. RHRA licence #, BAO licence #, ADP vendor # |
| source_urls | Where found (registry page, search result) |
| red_flags | Lawsuits, CBC/Marketplace stories, unresolved BBB patterns, door-knocker sales model |
| notes | Anything a vetter should know going in |
| priority | H/M/L for the vetting queue |
| status | candidate / shortlisted / in-vetting / passed / failed / removed |
| date_found, found_by | Model/person and date |

## 3. Categories (16)

Updated July 2026: the taxonomy is now 16 categories. Three existing
categories were renamed/broadened (slugs unchanged), and six were added
(meals-nutrition and downsizing-moving from the original plan, plus four
more from the July taxonomy rebuild). Categories stay flat in routing; they
are grouped visually in the Find Help nav under "Medical & Health" and
"Practical & Legal".

Medical & Health:

1. home-care (renamed: Home Care & Nursing)
2. **doctors-pharmacy-medication** (new: family doctors, walk-in alternatives, pharmacy, medication management)
3. mobility-equipment (broadened: Mobility, Physio & Falls Prevention)
4. hearing-vision (broadened: Vision, Hearing, Dental & Foot Care)
5. medical-alert-safety
6. **dementia-memory-support** (new: memory clinics, day programs, dementia home care)
7. **mental-health-counselling** (new: late-life depression, grief counselling, isolation)
8. **palliative-hospice-care** (new: hospice, palliative home care; complements funeral-estate-planning, does not duplicate it)

Practical & Legal:

9. legal-financial
10. funeral-estate-planning
11. transportation
12. home-maintenance (tech-help articles live here, not their own category)
13. companion-social
14. **meals-nutrition** (new: meal delivery, Meals on Wheels, grocery help, dietitians)
15. **downsizing-moving** (new: senior move managers, downsizing, estate sales, junk removal)
16. retirement-residences

A standalone "specialist clinics" category was considered and rejected:
memory clinics belong to dementia-memory-support, falls clinics to
mobility-equipment.

### Category search vocabulary

`{TERMS}` in the query templates expands to each phrase below, one query per
phrase. `{REGISTRIES}` are checked before any web search.

| Category | Search terms ({TERMS}) | Key registries / structured sources ({REGISTRIES}) |
|---|---|---|
| home-care | "home care agency", "personal support workers", "in-home senior care", "private nursing care" | Home Care Ontario member list; CARP partner lists; provincial home & community care support services |
| medical-alert-safety | "medical alert system", "fall detection pendant seniors", "personal emergency response system" | Mostly national brands; CSA-certified device lists |
| mobility-equipment | "mobility equipment store", "home medical equipment", "stairlift installer", "wheelchair ramp installer", "grab bar installation", "physiotherapy seniors", "falls prevention program" | Ontario ADP registered vendor list (gold source); March of Dimes home modification providers; College of Physiotherapists of Ontario register |
| doctors-pharmacy-medication | "family doctor accepting patients", "walk-in clinic seniors", "pharmacy blister packs", "medication review pharmacist", "home visit doctor" | CPSO doctor search (ON); Health Care Connect; Ontario College of Pharmacists pharmacy search |
| dementia-memory-support | "memory clinic", "dementia day program", "dementia home care", "Alzheimer support program" | Alzheimer Society local chapters and First Link; regional geriatric programs; 211 |
| mental-health-counselling | "geriatric psychiatry", "seniors counselling", "grief counselling", "seniors mental health services" | CRPO registered psychotherapist directory; College of Psychologists directory; CMHA branches; 211 |
| palliative-hospice-care | "hospice", "palliative care at home", "residential hospice", "end of life doula" | Hospice Palliative Care Ontario member directory; provincial hospice associations |
| retirement-residences | "retirement residence", "assisted living", "memory care residence", "independent living seniors" | RHRA public register (every licensed ON retirement home, with inspection history); ORCA member directory; comparable provincial regulators (BC assisted living registrar, AB continuing care) |
| legal-financial | "wills and estates lawyer seniors", "elder law lawyer", "power of attorney lawyer", "senior financial planner" | Law Society of Ontario referral service / paralegal directory; FP Canada planner directory; provincial law society directories |
| transportation | "senior transportation service", "medical transportation non-emergency", "accessible transportation seniors", "volunteer driver program" | 211 Ontario transportation listings; municipal para-transit pages; community support service agencies |
| hearing-vision | "hearing clinic", "audiologist", "hearing aids", "optometrist home visits", "low vision services", "mobile dental hygienist seniors", "foot care nurse", "chiropodist" | ADP vendor lists (hearing devices); CASLPO register (ON audiologists); College of Optometrists directory; CNIB service locations; College of Chiropodists of Ontario register; CDHO dental hygienist register |
| funeral-estate-planning | "funeral home", "funeral pre-planning", "cremation services", "estate executor services" | Bereavement Authority of Ontario licensee search (every licensed ON funeral establishment); provincial equivalents |
| home-maintenance | "handyman service seniors", "snow removal service", "lawn care service seniors", "home maintenance for seniors" | Municipal snow-angel / seniors maintenance programs; 211; local business licensing where searchable |
| companion-social | "senior companion service", "friendly visiting program", "adult day program" | 211 Ontario community support listings; local CSS agencies; Alzheimer Society day programs |
| meals-nutrition | "meal delivery seniors", "frozen meal delivery", "Meals on Wheels", "senior meal program" | Meals on Wheels chapter directories; 211; Heart to Home coverage map |
| downsizing-moving | "senior move manager", "downsizing service seniors", "estate sale company", "decluttering service seniors" | NASMM (National Association of Senior Move Managers) member directory, Canada chapter |

## 4. Query templates by tier

Written to be handed verbatim to the executing model. Placeholders:
`{TERM}` = one phrase from the category vocabulary; `{PROVINCE}` = full
province name; `{CITY}` = city name; `{REGION}` = colloquial region name where
one exists ("GTA", "Durham Region", "York Region").

### National tier

```
1. {TERM} Canada national
2. {TERM} "across Canada" OR "nationwide"
3. largest {TERM} companies Canada
4. {TERM} Canada locations OR franchises
5. best {TERM} Canada  (comparison/roundup articles; harvest every company named)
```

Stop rule: stop after these 5 when the last 2 queries produced no new company
names; otherwise continue with brand-specific follow-ups ("{BRAND} locations
Canada") until coverage per brand is confirmed.

### Provincial tier

```
1. {TERM} {PROVINCE}
2. {TERM} serving {PROVINCE}
3. {TERM} {PROVINCE} association OR directory OR registry
4. {TERM} "{PROVINCE}" -{LARGEST_CITY}  (surfaces companies not concentrated in the biggest city)
5. [registry pull] {REGISTRIES} for this category, filtered to {PROVINCE}
```

Classification rule: a company found here is tier=provincial only if it serves
multiple cities in the province but not multiple provinces. If it turns out to
be national, tag national; if it serves one city, tag city.

### City tier

```
1. {TERM} {CITY}
2. {TERM} near {CITY}
3. {TERM} {REGION}          (when the city belongs to a named region)
4. best {TERM} {CITY}       (roundups, local news "best of" lists)
5. {TERM} {CITY} reviews    (surfaces operating businesses via review platforms)
6. site:211ontario.ca {TERM} {CITY}   (Ontario only; other provinces use their 211)
7. {CITY} seniors services {CATEGORY_PLAIN_NAME}   (municipal seniors directories)
```

Stop rule per city cell: stop when 2 consecutive queries yield no new names,
or at 10 queries, whichever comes first.

### Extraction instructions (same for every tier)

For every company surfaced, capture the tracker columns from its website or
registry entry, in one visit where possible. Do not editorialize; record red
flags only with a source URL. If coverage is ambiguous (e.g. "serving the GTA
and beyond"), record what the site literally claims in notes and tag the most
conservative tier that is certain. Skip: pure lead-gen sites, directories,
franchises' individual sales pages when the parent row already exists (add the
location to cities_served instead), and anything with no Canadian operations.

## 5. Sequencing and priority

Ontario and the GTA are the launch market; national research is done first
because national brands would otherwise be rediscovered in every subsequent
regional search.

**Phase 0: Pilot (1 to 2 days of effort).** One category (home-care), run all
three tiers: national + Ontario + Toronto. Calibrate templates, stop rules,
and the tracker before scaling. Fix whatever is awkward.

**Phase 1: National sweep.** All 16 categories at the national tier. Small
(roughly 16 x 5 queries) and it seeds the dedupe base. Categories in any order.

**Phase 2: Ontario provincial tier.** All 16 categories. Registry pulls (RHRA,
BAO, ADP, law society) do most of the work here.

**Phase 3: GTA cities.** City order matches the site's public promise
("starting with Toronto, Mississauga, and Durham Region"):
1. Toronto
2. Mississauga
3. Durham Region (Oshawa, Whitby, Ajax, Pickering — run as one {REGION} pass plus per-city spot checks)
4. Brampton
5. York Region (Vaughan, Markham, Richmond Hill)
6. Oakville / Burlington

Category order within each city, by how local the supply actually is (local-
heavy categories benefit most from city research; national-heavy ones are
mostly done after Phase 1):
1. home-care
2. home-maintenance
3. retirement-residences (registry-driven, filter RHRA by city)
4. transportation
5. companion-social
6. meals-nutrition
7. funeral-estate-planning
8. downsizing-moving
9. legal-financial
10. mobility-equipment
11. hearing-vision
12. medical-alert-safety (mostly national; city pass is a quick gap check)

**Phase 4: Rest of Ontario.** Ottawa, Hamilton, London, Kitchener-Waterloo,
Windsor, Niagara. Same category order.

**Phase 5: Other provinces, by market size.** BC (provincial + Vancouver,
Victoria), AB (Calgary, Edmonton), QC (Montreal, Quebec City — flag: research
and eventual listings need French), then MB/SK/Atlantic/territories as
provincial-tier-only passes (national coverage plus 211 fills most gaps in
small markets).

**Ongoing:** re-run city templates quarterly for launch-market cells;
new-candidate discovery is also fed by /get-vetted applications.

## 6. Who runs what (model recommendation)

- **Bulk search-and-extract (Phases 1 to 5 cell runs): Claude Haiku 4.5**
  (`claude-haiku-4-5`), run as background subagents, one per category x region
  cell, each given: the tier template, the category vocabulary row, the
  extraction schema, and the current dedupe list for that category. This work
  is high-volume, repetitive, and template-driven; Haiku is fast and cheap and
  the templates remove the judgment.
- **Merge, dedupe, QA, ambiguous calls: Claude Sonnet 5.** After each phase,
  one pass to merge cell outputs, resolve duplicate/parent-franchise
  questions, sanity-check coverage claims, and assign vetting priority.
- **Planning, template changes, red-flag adjudication: the frontier model in
  the main session** (currently Fable 5). Spend it on the pilot calibration
  and on anything a Haiku run marks "uncertain", not on the volume searches.

Practical loop per cell: Haiku agent runs the queries, appends candidate rows
to the category CSV, marks uncertainties; Sonnet QA pass at phase end; human
(Ragini) skims only shortlist + red flags.

### Runner prompt template (hand this to the executing model)

```
You are researching candidate providers for The Vetted Senior's directory.
Category: {CATEGORY} (search terms: {TERMS list}; plain name: {CATEGORY_PLAIN_NAME})
Tier: {national|provincial|city}   Region: {PROVINCE or CITY, REGION}
Registries to pull first: {REGISTRIES}

Run the {tier} query template below, one search per line, substituting each
search term. {PASTE TIER TEMPLATE FROM SECTION 4}

Known companies already captured (do not re-add; if you find new coverage
info for one, output an UPDATE line instead): {DEDUPE LIST}

For each NEW company found, output one CSV row with columns:
name, category, tier, provinces_served, cities_served, website, phone, email,
hq_city, hq_province, years_operating, licence_or_registry_ref, source_urls,
red_flags, notes, priority, status=candidate, date_found, found_by

Rules: follow the extraction instructions exactly (record only what the
source states, red flags need a URL, skip lead-gen sites and directories,
franchise locations roll up to the parent row). Apply the stop rule. Mark any
row you are unsure about with UNCERTAIN in notes. Output only CSV rows and
UPDATE lines, no commentary.
```

## 7. Volume estimate

Phases 1 to 3: 12 national cells + 12 Ontario cells + (6 GTA areas x 12) = 96
cells, at roughly 5 to 10 searches each, so 500 to 900 searches total for the
launch market. At Haiku speed and cost this is a few background-agent batches,
not a project bottleneck. The bottleneck remains human vetting hours, which is
exactly why the tracker has a priority column.
