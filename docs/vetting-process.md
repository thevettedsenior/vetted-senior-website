# Vetting process: rubric and AI/human division of labor

Drafted 2026-07-09. Operationalizes the methodology already published on
/about (eight steps, five criteria). The public page is the contract; nothing
in this doc may be weaker than what the site promises. Candidate data stays in
docs/research/ (gitignored); this doc describes process only.

Two rules frame everything:

1. **The human owns judgment and relationships; AI owns evidence and
   drafting.** Every conversation with a human being (interview, reference
   call, provider email under Ragini's name) is Ragini's. Every lookup,
   cross-check, transcript analysis, and draft is AI work product that Ragini
   reviews rather than produces.
2. **AI never decides a pass, and never touches the Honesty criterion's final
   call.** AI drafts scores with evidence; Ragini signs every determination,
   every decline, and every publication.

## The rubric (scoring a provider)

Each provider is scored on the five published criteria. Each criterion gets
PASS, MARGINAL, or FAIL plus a written rationale citing evidence (a logged
check, an interview answer, a reference quote). Listing requires:

- at least four PASS out of five,
- no FAIL on any criterion,
- PASS on Honesty outright (a MARGINAL on Honesty is a decline; the brand is
  named for this criterion),
- at most one MARGINAL, which makes the listing a CONDITIONAL PASS: the
  improvement is named privately to the provider and re-review moves up to
  six months.

### What each criterion requires as evidence

**1. Legitimacy.** Legal existence in the Ontario Business Registry (or
federal registry); every licence or registration the category requires,
verified on the issuing regulator's own register (RHRA for retirement homes,
BAO for funeral services, health-profession colleges, ADP vendor status where
claimed); commercial general liability insurance in force, insurer and expiry
logged from the certificate itself; WSIB clearance where the provider has
workers. Every check recorded with source URL and date.

**2. Honesty.** Claims inventory from the provider's website (every
credential, membership, award, and "licensed and insured" statement) with
each claim verified or refuted; interview answers consistent with the
documentary record; a real rate card shown, with pricing that matches what
references report paying. Pass/fail in spirit: one knowing misrepresentation
is a decline for honesty, not paperwork.

**3. Competence and safety.** Evidence, not description: the actual last-hire
walkthrough (screening, checks run, training given), supervision practice,
category-specific safety practices (e.g. medication handling in home care,
infection control, safe-transfer training in transportation), and stated
scope limits the provider can articulate unprompted.

**4. Reliability.** The 6am-sick-call answer (named backup coverage, not "we
manage"); staff turnover picture; references confirming the same person shows
up on time over months.

**5. Accountability.** A named human answers for the business; a complaint
walked through end to end in the interview; references confirm issues raised
were answered and management checked in unprompted; invoices never surprised
anyone.

### Automatic disqualifiers (regardless of scores)

- Lapsed or unverifiable required licence or insurance.
- Any knowing misrepresentation to the vetting process.
- Refusal to consent to regulator and reference contact.
- Solo practitioner, referral-only body, or lead-gen marketplace (standing
  eligibility exclusions; these should have been screened at research, but
  vetting re-checks).
- No reachable human contact point.

### Hospital-affiliated stream (lighter track)

Public and hospital-affiliated programs (William Osler, Baycrest, CAMH,
Sinai, Mackenzie Health, Southlake, Ontario Health atHome, etc.) are not
private businesses and do not sit interviews or provide insurance
certificates. Their track: verify the program exists today on the
institution's own site, confirm the consumer intake contact (phone answered,
correct department), record eligibility/referral requirements, and log the
check with a date. They publish only once the hospital-affiliated badge
exists on the site (owner ruling 2026-07-09) and their listing states
plainly that this is a public health-system service, not a vetted private
provider. No vetting report; a shorter verification note instead.

## Pipeline stages and who does what

Status flow in the tracker: candidate -> shortlisted -> in-vetting -> passed
/ failed (or removed). Estimated Ragini time per provider drops from the 6-9
hours the site describes to roughly 3.5-4.5 hours, nearly all of it
conversation.

### Stage 0: Batch selection (AI, Ragini approves the batch)

AI proposes a vetting batch from the tracker (priority H, launch cities
first, one category at a time), re-confirms each is currently operating, and
marks them shortlisted. Ragini approves the batch list. 5 minutes of her
time per batch.

### Stage 1: Pre-screen on the public record (AI ~90%)

For each shortlisted provider AI compiles a pre-screen dossier: registry
lookup, regulator standing, CanLII litigation search, complaint patterns
(BBB, review-site patterns, news), and the full claims inventory that later
verification will test. Dossier ends with a recommendation: proceed or
decline with reasons. Roughly half of candidates die here, per the public
page. Ragini skims each dossier (10-15 min) and signs declines. Declined
rows get status failed with the reason in notes.

### Stage 2: Invitation and documents (Ragini sends, AI prepares)

AI drafts the personalized invitation email (from the apply@thevettedsenior
.com framing, no cost, consent language for regulator and reference contact)
and the document checklist. Ragini sends from her own account; external
communication always carries her name and her send. When documents come
back, AI reads the certificates, logs insurer/expiry/policy details, and
flags gaps or oddities. Ragini's time: sending and any relationship
back-and-forth, ~15-20 min.

### Stage 3: Primary-source verification (AI ~80%)

AI runs every verifiable check against the issuing source and records each
with a date: licence on the regulator's register, college registration for
regulated professionals, WSIB clearance certificate lookup, insurance
details as documented. Anything that requires a phone call to confirm
authenticity (an insurer callback when a certificate looks off) is queued
for Ragini. Ragini also spot-checks one full verification in every five as
quality control. Her time: ~15 min plus any callbacks.

### Stage 4: The structured interview (Ragini, AI prepares and analyzes)

AI produces a tailored interview kit: the standard question set plus
provider-specific probes built from every discrepancy or oddity found in
stages 1-3 (the questions designed to be uncomfortable, aimed where this
provider's record is thin). Ragini conducts the hour-plus interview and
records or takes notes. Afterward AI transcribes/structures the notes,
cross-checks every answer against the documentary record, and flags
contradictions for the Honesty score. Her time: 1-1.5 hours.

### Stage 5: Reference calls (Ragini, AI prepares and analyzes)

AI drafts the written consent request, scheduling emails, and a call guide
per reference. Ragini makes the three 20-30 minute calls. AI analyzes her
notes across the three calls for consistency, coached-sounding patterns, and
answers bearing on Reliability and Accountability. Her time: 1.5-2 hours
including scheduling friction.

### Stage 6: Determination (AI drafts, Ragini decides)

AI drafts the full scorecard: five criteria, proposed PASS/MARGINAL/FAIL
each, written rationale with evidence citations, and a proposed outcome
under the rubric rules. Ragini reviews, adjusts any score, and makes the
call. Her decision is recorded with date in the tracker (passed / failed,
conditional flag in notes). Her time: 20-30 min.

### Stage 7: The published vetting report (AI drafts, provider fact-checks, Ragini approves)

AI drafts the public vetting report in site voice (what was verified and
when, what was asked, what clients said, what the provider does not do),
ending with the standard no-pay line. Ragini sends factual fields to the
provider for fact-check (they cannot edit conclusions), then approves. AI
adds the listing to src/lib/data/businesses.json (tier, provinces, cities,
brandGroup per the contact-point rule), verifies the directory page renders,
and commits. Her time: ~20 min plus provider round-trip.

### Stage 8: Re-review, forever (AI monitors, Ragini re-runs judgment steps)

AI maintains the re-review calendar (12 months, 6 for conditional), watches
for expiring insurance/licences from the logged dates, and periodically
re-checks regulator standing and news. Triggers produce a re-review dossier;
the judgment steps of a re-review are Ragini's. This is a natural fit for a
scheduled agent task once the first batch is live.

## Ragini's irreducible list (the things only she does)

1. Approve each batch and sign every decline, determination, and
   publication.
2. Send every external email and make every phone call: invitations,
   interviews, reference calls, insurer callbacks.
3. The Honesty criterion's final call, always.
4. Spot-check 1 in 5 AI verifications.
5. Own the relationship: providers and references are talking to The Vetted
   Senior's named human checker, which is the brand.

## First batch recommendation

Home care, Toronto, priority H rows. It was the pilot category with the
deepest research, and the /get-vetted page already tells providers vetting
is underway in Toronto, Mississauga, and Durham. Before stage 2 emails go
out, the hospital-affiliated badge is not a blocker (no hospital rows in
this batch), but the vetting-report page template and businesses.json
publishing path should exist so a pass can go live promptly.

No em dashes are used in this document.
