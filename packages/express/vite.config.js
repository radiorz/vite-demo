// https://github.com/axe-me/vite-plugin-node/issues/20
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  server: {
    port: 3333,
  },
  build: {
    // ssr: true,
    outDir: "../dist",
    // 清空
    emptyOutDir: true,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      // 之所以要这么做是因为打包的时候会加上 root 选项
      appPath:
        process.env.NODE_ENV === "production" ? "index.js" : "./src/index.js",
      tsCompiler: "esbuild",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
