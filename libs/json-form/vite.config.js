import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
  build: {
    lib: {
      // 无法打包umd，因为用到了dynamic import，反正是自己用，所以不打umd
      formats: ["es"],
      // 库打包入口文件
      entry: resolve("./src/index.js"),
      // 库暴露的全局变量
      name: "JsonForm",
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
