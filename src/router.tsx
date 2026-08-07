import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Every deploy renames the hashed JS chunks, so a tab opened before a deploy
// can request chunks that no longer exist and lands on the error page. One
// reload fetches fresh HTML with the new chunk names; the sessionStorage
// stamp stops a reload loop if the network itself is the problem.
if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", (event) => {
    const KEY = "tvs-chunk-reload-at";
    const last = Number(sessionStorage.getItem(KEY) ?? 0);
    if (Date.now() - last > 30_000) {
      event.preventDefault();
      sessionStorage.setItem(KEY, String(Date.now()));
      window.location.reload();
    }
  });
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
