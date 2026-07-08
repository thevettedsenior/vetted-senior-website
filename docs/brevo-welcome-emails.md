# Brevo Welcome Email Copy

Internal ops document, not published. Copy for the welcome/autoresponder
emails sent when someone signs up through any form on the site. The actual
Brevo automation setup is a separate step; this doc is the copy plus the
routing logic the automation needs.

## How signups arrive in Brevo

Every form on the site stores the contact with an INTENT custom attribute
(and SIGNUP_PAGE for the page they signed up on). The INTENT values in
production today:

| INTENT value | Form | Welcome email to send |
|---|---|---|
| `handbook and briefing` | /handbook signup | Variant 1 |
| `briefing` | HandbookCTA briefing form (appears across the site) | Variant 2 |
| `notify me: {place}` | Directory/city waitlists (e.g. "notify me: Toronto") | Variant 3 |
| `notify me: {category}` | Category page waitlists (e.g. "notify me: Home Care & Nursing") | Variant 3 |

Automation logic: one Brevo automation triggered on contact creation,
branching on whether INTENT equals `handbook and briefing`, equals
`briefing`, or starts with `notify me:`. If INTENT is missing (the server
falls back to storing the contact without custom attributes when the
attribute write fails), send Variant 2, since it promises the least.

Sender for all variants: The Vetted Senior <info@thevettedsenior.com>.
Reply-to: info@thevettedsenior.com (replies are read by Ragini).
Personalization: use {{ contact.FIRSTNAME }} with a fallback to no name,
i.e. "Hi Margaret," becomes just "Hello," when FIRSTNAME is empty. In
Brevo template syntax: `{% if contact.FIRSTNAME %}Hi {{ contact.FIRSTNAME }},{% else %}Hello,{% endif %}`

CASL notes baked into the copy: every email identifies who we are and why
they are receiving it, includes our mailing contact, and Brevo's
unsubscribe link must be present in the footer. Do not remove the footer
block when pasting into Brevo.

Site conventions apply: no em dashes, plain language, 18px+ base font in
the Brevo template, navy #1F2A52 headings if styled.

---

## Variant 1: Handbook signup (INTENT = "handbook and briefing")

**Subject:** Your Caregiver Handbook is attached (plus what to expect from us)

**Preheader:** The handbook, one Thursday email, and a promise about your inbox.

Hi {{FIRSTNAME}},

Here is your copy of The Family Caregiver's Complete Handbook. You can
download it any time from this link, so there is no need to hunt for this
email later:

https://thevettedsenior.com/handbook/TVS_Family_Caregivers_Complete_Handbook.pdf

A suggestion from experience: do not try to read it cover to cover. Skim
the table of contents, find the chapter that matches the week you are
having, and start there. It is written to be picked up in the middle.

Since you asked for the handbook, you are also signed up for our briefing:
one email on Thursdays with what changed for Ontario seniors and families
that week, in plain language. Rates, programs, deadlines, and anything we
found that a family should know. No filler. If a week has nothing worth
your time, we skip the week.

Two things you should know about us, because you just gave us your email
address:

1. Nobody pays to be recommended by us. No provider can buy a listing, an
   ad, or a ranking on our site. Our full disclosure of how the site makes
   money is here: https://thevettedsenior.com/disclosure

2. Your email stays here. We never sell, rent, or share it, and every
   email we send has a one-click unsubscribe. Our privacy policy:
   https://thevettedsenior.com/privacy

If anything in the handbook raises a question about your family's
situation, just reply to this email. A person reads these, usually me.

Warmly,
Ragini
The Vetted Senior
https://thevettedsenior.com

---
You are receiving this because you requested the Caregiver Handbook at
thevettedsenior.com. The Vetted Senior, Ontario, Canada.
info@thevettedsenior.com
[Unsubscribe] (Brevo unsubscribe link, mandatory)

---

## Variant 2: Briefing signup (INTENT = "briefing")

**Subject:** You're in. Here is what Thursdays will look like.

**Preheader:** One email a week, plain language, easy to leave.

Hi {{FIRSTNAME}},

You are signed up for The Vetted Senior briefing. Here is the deal, so
there are no surprises:

One email, on Thursdays. What changed for Ontario seniors and families
that week: program changes, rate updates, deadlines worth knowing, and
anything we found that a family should hear about before it becomes a
problem. Plain language, no jargon, no filler. If a week has nothing worth
your time, we skip the week rather than pad one out.

While you wait for your first issue, the most useful thing on our site is
the free Family Caregiver's Complete Handbook. No signup wall for you,
you are already here:

https://thevettedsenior.com/handbook/TVS_Family_Caregivers_Complete_Handbook.pdf

Two things you should know about us, because you just gave us your email
address:

1. Nobody pays to be recommended by us. No provider can buy a listing, an
   ad, or a ranking on our site. Full disclosure of how the site makes
   money: https://thevettedsenior.com/disclosure

2. Your email stays here. We never sell, rent, or share it, and every
   email has a one-click unsubscribe. Privacy policy:
   https://thevettedsenior.com/privacy

Questions about anything senior-care related? Reply to this email. A
person reads these, usually me.

Warmly,
Ragini
The Vetted Senior
https://thevettedsenior.com

---
You are receiving this because you signed up for the weekly briefing at
thevettedsenior.com. The Vetted Senior, Ontario, Canada.
info@thevettedsenior.com
[Unsubscribe] (Brevo unsubscribe link, mandatory)

---

## Variant 3: Waitlist signup (INTENT starts with "notify me:")

Works for both city waitlists ("notify me: Toronto") and category
waitlists ("notify me: Home Care & Nursing"). The copy references what
they asked for generically; if Brevo templating is set up to echo the
INTENT value, use the bracketed line instead.

**Subject:** Got it. We will email you the day your listings go live.

**Preheader:** One email when it is ready, and why the wait exists.

Hi {{FIRSTNAME}},

You asked us to tell you when vetted listings go live
[for {{ INTENT with "notify me: " stripped }}], and we will: one email,
the day it happens.

Here is why there is a wait, because it is the whole point of this site.
Every provider in our directory is vetted personally before listing:
licences checked, complaint history reviewed, references called. That
takes six to nine hours per provider, and nobody can pay to skip the line
or buy their way in. An empty category means we have not finished the
work yet, not that we forgot about you.

While you wait, two things on the site are already useful:

- The free Family Caregiver's Complete Handbook:
  https://thevettedsenior.com/handbook/TVS_Family_Caregivers_Complete_Handbook.pdf
- Printable checklists for comparing providers, touring residences, and
  getting legal documents in order: https://thevettedsenior.com/resources

If your situation cannot wait for the directory, reply to this email and
tell us what you are looking for. We cannot recommend unvetted providers,
but we can usually point you to the right questions to ask and the
official registries to check.

Two promises, since you just gave us your email address: nobody pays to be
recommended by us (https://thevettedsenior.com/disclosure), and your email
is never sold or shared (https://thevettedsenior.com/privacy).

Warmly,
Ragini
The Vetted Senior
https://thevettedsenior.com

---
You are receiving this because you joined a waitlist at
thevettedsenior.com. The Vetted Senior, Ontario, Canada.
info@thevettedsenior.com
[Unsubscribe] (Brevo unsubscribe link, mandatory)

---

## Setup checklist (for the separate Brevo step, not part of this packet)

1. Verify the sending domain thevettedsenior.com in Brevo (SPF + DKIM),
   or welcome emails will land in spam or fail to send.
2. Create one automation: trigger on contact created, branch on INTENT
   (equals "handbook and briefing" / equals "briefing" / starts with
   "notify me:" / fallback to Variant 2).
3. Waitlist contacts should also receive the Thursday briefing only if
   that is disclosed; current form copy says they signed up for "one email
   the day listings go live", so do NOT add them to the briefing list
   automatically. Keep them on a waitlist-only segment.
4. Confirm the unsubscribe link renders in all three templates before
   activating.
5. Send a test of each variant to info@ and read them on a phone.
