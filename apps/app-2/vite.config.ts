import { cloudflareDevProxyVitePlugin, vitePlugin } from "@remix-run/dev";
import tailwindPlugin from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [cloudflareDevProxyVitePlugin(), vitePlugin(), tailwindPlugin()],
  server: {
    host: true,
    watch: {
      ignored: ["!**/node_modules/@aaronadams/**"],
    },
  },
});
