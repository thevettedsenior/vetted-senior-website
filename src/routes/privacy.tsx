import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | The Vetted Senior",
      },
      {
        name: "description",
        content:
          "What The Vetted Senior collects (a name and email, if you give them), why, where it is stored, and how to leave with one click. No tracking, no ads, no selling of data.",
      },
      {
        property: "og:title",
        content: "Privacy policy: what we collect and what we never do",
      },
    ],
  }),
  component: PrivacyPage,
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-serif text-2xl font-semibold text-primary md:text-3xl">
      {children}
    </h2>
  );
}

function PrivacyPage() {
  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Privacy
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            What we collect, why, and how to leave
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            This is a short policy because we collect very little. If you read
            nothing else: we ask for an email only when you request something,
            we never sell or share it, and unsubscribing takes one click.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="space-y-5 text-lg text-foreground/90 leading-relaxed">
          <SectionHeading>Who we are</SectionHeading>
          <p>
            The Vetted Senior (thevettedsenior.com) is run by its founder,{" "}
            <Link to="/founder" className="text-primary underline">
              Ragini
            </Link>
            , in Ontario, Canada. She is the person accountable for how this
            site handles your information. Anything in this policy, and any
            question, request, or complaint about your information, goes to{" "}
            <a
              className="text-primary underline"
              href="mailto:info@thevettedsenior.com"
            >
              info@thevettedsenior.com
            </a>{" "}
            and gets answered by a person.
          </p>

          <SectionHeading>What we collect, and when</SectionHeading>
          <p>
            You can read every page of this site without giving us anything.
            We collect personal information in exactly three situations, and in
            every one of them you are the one who hands it to us:
          </p>
          <ul className="list-none space-y-4 pl-0">
            <li className="rounded-xl border border-border bg-card p-5">
              <strong>Signup forms.</strong> When you sign up for the Caregiver
              Handbook, our email briefing, or a waitlist for a city or
              category, we collect your email address, your first name if you
              choose to give it, what you signed up for, and which page you
              signed up on. That last part exists so we send you the thing you
              actually asked for and nothing else.
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <strong>Email you send us.</strong> If you write to info@ or
              apply@, we receive whatever you include in your message and use
              it to reply and to act on your request.
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <strong>Provider vetting.</strong> When a business applies to be
              vetted, we collect business information and check references.
              Reference information is collected with consent and used only to
              make vetting decisions.
            </li>
          </ul>
          <p>
            We do not use advertising trackers, analytics profiles, or tracking
            cookies. There is no hidden collection layer behind the visible
            forms.
          </p>

          <SectionHeading>Why we collect it</SectionHeading>
          <p>
            One purpose: to send you what you asked for. A handbook signup gets
            the handbook and our related updates for caregivers. A waitlist
            signup gets a note when that city or category goes live. A briefing
            signup gets the briefing. Signing up is your express consent to
            receive those emails, and every email we send identifies us and
            carries an unsubscribe link, as Canada's anti-spam law (CASL)
            requires. We do not repurpose your email for anything you did not
            ask for, and reading our guides never puts you on any list.
          </p>

          <SectionHeading>Where your information lives</SectionHeading>
          <p>
            Signups are stored with Brevo, the email service we use to send our
            mailings, and a copy of each signup is forwarded to our own inbox
            so nothing sits unseen in a dashboard. Brevo may store and process
            data on servers outside Canada; while it is there, it is subject to
            the laws of the country where those servers sit. The site itself is
            hosted on Cloudflare, which, like any web host, processes standard
            technical logs such as IP addresses to serve pages and block
            attacks. We do not use those logs to identify visitors.
          </p>

          <SectionHeading>What we never do</SectionHeading>
          <p>
            We do not sell, rent, or trade your information. We do not share it
            with advertisers, because we have none. We do not share your
            information with listed providers, and no provider will ever
            contact you because you used this site. If you want to reach a
            provider, you contact them; it never works the other way around.
          </p>

          <SectionHeading>How long we keep it</SectionHeading>
          <p>
            As long as you are subscribed, plus the short period needed to
            honour unsubscribe and deletion requests. If you unsubscribe, you
            stop receiving email immediately. If you ask us to delete your
            information entirely, we remove you from Brevo and our records.
          </p>

          <SectionHeading>Your rights</SectionHeading>
          <p>
            Under Canadian privacy law (PIPEDA), you can ask us what
            information we hold about you, ask us to correct it, withdraw your
            consent, or ask us to delete it. Email{" "}
            <a
              className="text-primary underline"
              href="mailto:info@thevettedsenior.com"
            >
              info@thevettedsenior.com
            </a>{" "}
            for any of these and we will act on it promptly, at no cost to you.
            If you are not satisfied with how we handle a privacy concern, you
            can complain to the Office of the Privacy Commissioner of Canada
            (priv.gc.ca or 1-800-282-1376).
          </p>

          <SectionHeading>Unsubscribing</SectionHeading>
          <p>
            Every email we send has an unsubscribe link at the bottom. One
            click, no login, no "are you sure" gauntlet, no guilt trip. You can
            also just reply and ask, and a person will remove you.
          </p>

          <SectionHeading>Safeguards</SectionHeading>
          <p>
            The site is served over HTTPS, signup data goes directly to Brevo
            over an encrypted connection, and access to the mailbox and the
            Brevo account is limited to the people who run this site.
          </p>

          <SectionHeading>Children</SectionHeading>
          <p>
            This site is written for adults: seniors, their adult children, and
            caregivers. We do not knowingly collect information from anyone
            under 18.
          </p>

          <SectionHeading>Changes to this policy</SectionHeading>
          <p>
            If how we handle information changes, this page changes with it,
            and we date every change. We will never quietly expand what we
            collect.
          </p>

          <p className="mt-8 border-t border-border pt-6 text-base text-muted-foreground">
            Last updated: July 2026. Questions? Write to{" "}
            <a className="underline" href="mailto:info@thevettedsenior.com">
              info@thevettedsenior.com
            </a>
            . For how this site earns money, see{" "}
            <Link to="/disclosure" className="underline">
              our disclosure page
            </Link>
            .
          </p>
        </div>
      </section>
    </Page>
  );
}
