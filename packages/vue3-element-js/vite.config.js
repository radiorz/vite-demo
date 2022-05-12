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
      // network 可以访问 不只是 localhost
      host: "0.0.0.0",
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
      // 自动导入
      AutoImport({
        dts: "src/auto-imports.d.ts", // 记录
        imports: ["vue"],
        resolvers: [ElementPlusResolver()],
      }),
      // 自动导入组件
      Components({
        dts: "src/components.d.ts", // 记录
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
