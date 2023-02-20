import { defineConfig } from "vite";
import { resolve } from "path";
// 用于自动生成 d.ts 文件
import dts from "vite-plugin-dts";
// import dts from "rollup-plugin-dts";
import path from "path-browserify";
export default defineConfig({
  resolve: {
    alias: {
      "~": resolve("./src"),
      path: "path-browserify",
    },
  },

  plugins: [],
  build: {
    lib: {
      entry: resolve("src/index.ts"),
      // 库暴露的全局变量
      name: "logger",
    },
    rollupOptions: {
      external: ["fs"],
    },
  },
});
