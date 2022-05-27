import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),

    // 自动导入
    AutoImport({
      // 记录
      dts: "src/auto-imports.d.ts",
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core"],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [ElementPlusResolver()],
    }),
    // 自动导入组件
    Components({
      dts: "src/components.d.ts", // 记录
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(), // 自动注册图标组件
      ],
    }),
  ],
});
