import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

export const onRequest = createPagesFunctionHandler({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- does not exist until generated by `remix vite:build`
  build: async () => import("../build/server" as const),
});
