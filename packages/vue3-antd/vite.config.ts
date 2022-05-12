import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  plugins: [vue()],
});
