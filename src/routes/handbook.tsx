import { createFileRoute, redirect } from "@tanstack/react-router";

// Preserve old page links; the main free offer now lives at /starter-pack.
export const Route = createFileRoute("/handbook")({
  beforeLoad: () => {
    throw redirect({ to: "/starter-pack", statusCode: 301 });
  },
});
