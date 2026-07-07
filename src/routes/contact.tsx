import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | The Vetted Senior" },
      {
        name: "description",
        content:
          "Get in touch with The Vetted Senior by email. We're here to help seniors and their families find trusted services.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-xl text-foreground/85">
            Email us anytime. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-6 px-6 py-12 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-serif text-2xl text-primary">For seniors & families</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Email: <a className="underline" href="mailto:info@thevettedsenior.com">info@thevettedsenior.com</a>
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-serif text-2xl text-primary">For businesses</h2>
          <p className="mt-3 text-lg">
            Want to apply to be vetted? We'd love to hear about your work with
            seniors. Read{" "}
            <Link to="/get-vetted" className="text-primary underline">
              how to get vetted
            </Link>{" "}
            first.
          </p>
          <p className="mt-3 text-base">
            Email: <a className="underline" href="mailto:apply@thevettedsenior.com">apply@thevettedsenior.com</a>
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            We do not accept paid placements. Every applicant goes through the
            same review.
          </p>
        </div>
      </section>
    </Page>
  );
}
