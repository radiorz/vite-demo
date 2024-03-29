import { defineConfig } from "vite";
import { resolve } from "path";
// 用于自动生成 d.ts 文件
import dts from "vite-plugin-dts";
import path from "path-browserify";
import nodeResolve from "@rollup/plugin-node-resolve";
export default defineConfig({
  resolve: {
    alias: {
      "~": resolve("./src"),
      path: "path-browserify",
    },
  },

  plugins: [dts()],
  build: {
    lib: {
      entry: resolve("src/index.ts"),
      // 库暴露的全局变量
      name: "logger",
    },
    rollupOptions: {
      plugins: [nodeResolve()],
      external: ["fs"],
    },
  },
});
