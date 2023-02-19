import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "./config/vitePluginPages";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages()],
  server: {
    port: 1314,
  },
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
