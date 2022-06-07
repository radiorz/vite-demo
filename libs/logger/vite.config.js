import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve("./src"),
    },
  },
  build: {
    lib: {
      entry: resolve("src/index.js"),
      // 库暴露的全局变量
      name: "useLogger",
    },
  },
});
