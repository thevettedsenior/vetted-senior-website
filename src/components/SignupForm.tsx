import { useState } from "react";

import { subscribe } from "@/lib/api/subscribe.functions";

type Status = "idle" | "sending" | "done" | "error";

/**
 * The inline email-capture form used everywhere the site used to open a
 * mailto draft. Name optional, email required. The intent travels with the
 * submission as a hidden field, so info@ knows exactly what was asked for:
 * "briefing", "handbook", or "notify me: <place or category>".
 *
 * Success and error states are honest: success only shows after Brevo
 * accepts the signup, and the error state says nothing was saved and
 * offers the direct email instead.
 */
export function SignupForm({
  intent,
  signupFor,
  buttonLabel,
  successMessage,
  compact = false,
}: {
  /** Stored with the signup so we know what they asked for. */
  intent: string;
  /** Completes the consent line: "You're signing up for {signupFor}." */
  signupFor: string;
  buttonLabel: string;
  successMessage: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = new FormData(form);

    // Honeypot: real people never see or fill this field.
    if (fields.get("website")) {
      setStatus("done");
      return;
    }

    setStatus("sending");
    try {
      await subscribe({
        data: {
          email: String(fields.get("email") || ""),
          name: String(fields.get("name") || "") || undefined,
          intent: String(fields.get("intent") || intent),
          page:
            typeof window !== "undefined"
              ? window.location.pathname
              : undefined,
        },
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p
        role="status"
        className="rounded-2xl bg-secondary/60 px-5 py-4 text-base text-foreground/85 leading-relaxed"
      >
        {successMessage}
      </p>
    );
  }

  const inputClass =
    "w-full rounded-full border-2 border-border bg-background px-5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none " +
    (compact ? "py-2.5" : "py-3");

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div
        className={compact ? "flex flex-col gap-2.5" : "flex flex-col gap-3"}
      >
        <input
          type="text"
          name="name"
          autoComplete="given-name"
          placeholder="First name (optional)"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className={inputClass}
        />
        <input type="hidden" name="intent" value={intent} />
        <div className="hidden" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className={
            "inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60 " +
            (compact ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-base")
          }
        >
          {status === "sending" ? "Adding you..." : buttonLabel}
        </button>
      </div>
      {status === "error" && (
        <p
          role="alert"
          className="mt-3 text-sm text-destructive leading-relaxed"
        >
          That didn't go through on our end, and nothing was saved. Please try
          again, or email{" "}
          <a className="underline" href="mailto:info@thevettedsenior.com">
            info@thevettedsenior.com
          </a>{" "}
          and Ragini will add you by hand.
        </p>
      )}
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        You're signing up for {signupFor}. Unsubscribe is one click, any time,
        and your email is never shared or sold.
      </p>
    </form>
  );
}
