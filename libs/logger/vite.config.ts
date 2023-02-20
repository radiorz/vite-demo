import { defineConfig } from "vite";
import { resolve } from "path";
// 用于自动生成 d.ts 文件
import dts from "vite-plugin-dts";
// import dts from "rollup-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve("./src"),
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
      external: ["fs", "path"],
    },
  },
});
