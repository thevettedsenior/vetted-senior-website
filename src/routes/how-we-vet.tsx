import { createFileRoute, redirect } from "@tanstack/react-router";

// Printed materials and provider outreach reference thevettedsenior.com/how-we-vet.
export const Route = createFileRoute("/how-we-vet")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
});
