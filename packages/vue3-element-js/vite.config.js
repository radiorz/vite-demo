// vite.config.js
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join, resolve } from "path";
import "./config/index";

// https://vitejs.dev/config/
export default () => {
  const build = {};
  // output 去向
  if (process.env.VITE_OUT_DIR) {
    build.outDir = join(__dirname, process.env.VITE_OUT_DIR);
  }
  return defineConfig({
    server: {
      // 自动打开浏览器
      open: true,
      port: 5000,
      // 设置https 代理
      proxy: {
        "/api": {
          target: "localhost:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vue(),
    ],
    resolve: {
      alias: {
        "@": resolve("src"),
      },
      // 省略文件扩展名
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    build,
    // electron 绝对路径将识别错误
    base: "./",
  });
};
