import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Signup handler for every email-capture form on the site. Stores the
// contact in Brevo (our ESP) and forwards a copy of the submission to
// info@thevettedsenior.com so nothing sits unseen in a dashboard.
//
// Requires BREVO_API_KEY. Locally it comes from .env (gitignored); in
// production it is a Cloudflare Pages secret. Read inside the handler,
// never at module scope (see config.server.ts).

const BREVO_API = "https://api.brevo.com/v3";

async function brevoPost(path: string, apiKey: string, body: unknown) {
  return fetch(`${BREVO_API}${path}`, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(body),
  });
}

export const subscribe = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().trim().email().max(320),
      name: z.string().trim().max(200).optional(),
      intent: z.string().trim().min(1).max(300),
      page: z.string().trim().max(500).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("subscribe: BREVO_API_KEY is not set");
      throw new Error("Signup is not configured yet.");
    }

    const { email, name, intent, page } = data;

    // Store the contact. updateEnabled turns a repeat signup into an
    // update instead of a duplicate error. INTENT and SIGNUP_PAGE are
    // custom attributes; if they don't exist in the Brevo account yet,
    // retry with defaults only so the signup never depends on dashboard
    // configuration. The intent still survives in the forwarded email.
    const attributes: Record<string, string> = { INTENT: intent };
    if (name) attributes.FIRSTNAME = name;
    if (page) attributes.SIGNUP_PAGE = page;

    let contactRes = await brevoPost("/contacts", apiKey, {
      email,
      updateEnabled: true,
      attributes,
    });
    if (!contactRes.ok) {
      contactRes = await brevoPost("/contacts", apiKey, {
        email,
        updateEnabled: true,
        attributes: name ? { FIRSTNAME: name } : {},
      });
    }
    const stored = contactRes.ok;
    if (!stored) {
      console.error(
        "subscribe: Brevo contact create failed",
        contactRes.status,
        await contactRes.text().catch(() => ""),
      );
    }

    // Forward the submission to info@. A forwarding failure alone (for
    // example, sender domain not yet verified in Brevo) doesn't fail the
    // signup, because the contact is already stored above.
    let forwarded = false;
    try {
      const mailRes = await brevoPost("/smtp/email", apiKey, {
        sender: {
          name: "The Vetted Senior website",
          email: "info@thevettedsenior.com",
        },
        to: [{ email: "info@thevettedsenior.com" }],
        replyTo: { email },
        subject: `New signup: ${intent}`,
        textContent: [
          `Name: ${name || "(not given)"}`,
          `Email: ${email}`,
          `Signed up for: ${intent}`,
          `Page: ${page || "(unknown)"}`,
          `Time: ${new Date().toISOString()}`,
        ].join("\n"),
      });
      forwarded = mailRes.ok;
      if (!forwarded) {
        console.error(
          "subscribe: Brevo forward to info@ failed",
          mailRes.status,
          await mailRes.text().catch(() => ""),
        );
      }
    } catch (err) {
      console.error("subscribe: Brevo forward to info@ threw", err);
    }

    if (!stored && !forwarded) {
      throw new Error("Signup failed.");
    }
    return { ok: true as const };
  });
