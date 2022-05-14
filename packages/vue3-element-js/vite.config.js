// vite.config.js
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import vueJsx from "@vitejs/plugin-vue-jsx";

import { join, resolve } from "path";
import "./config/index";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
// 插件检查
// import Inspect from "vite-plugin-inspect";
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
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
      vue(),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      // 自动导入
      AutoImport({
        // 记录
        dts: "src/auto-imports.d.ts",
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core"],
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
      // 自动导入组件
      Components({
        dts: "src/components.d.ts", // 记录
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),
          // 自动导入 Element Plus 组件
          ElementPlusResolver(), // 自动注册图标组件
        ],
      }),
      Icons({
        autoInstall: true,
      }),
      // Inspect(),
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
