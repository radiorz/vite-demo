// vite.config.js
import "./config/index";
import vitepwaConfig from "./config/vitepwa";
import vitePagesConfig from "./config/vitePages";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
// 文件路由
import Pages from "vite-plugin-pages";
import { VitePWA } from "vite-plugin-pwa";
import { join, resolve } from "path";
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
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      vueJsx(),
      Pages(vitePagesConfig),
      VitePWA(vitepwaConfig),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      // 自动导入
      AutoImport({
        // 记录
        dts: "src/auto-imports.d.ts",
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          "vue",
          "vue-router",
          "vue-i18n",
          "@vueuse/core",
        ],
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
          VueUseComponentsResolver(), // 自动注册 vue-use 组件
        ],
      }),
      Icons({
        compiler: "vue3",
        autoInstall: true,
      }),
      VueI18n({
        include: [resolve(__dirname, "locales/**")],
      }),
      // Inspect(),
    ],
    resolve: {
      alias: {
        "~": resolve("src"),
        "~locales": resolve("locales"),
      },
      // 省略文件扩展名
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },

    build,
    // electron 绝对路径将识别错误
    base: "./",
  });
};
