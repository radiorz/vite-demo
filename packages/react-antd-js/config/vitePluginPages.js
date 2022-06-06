import Page from "vite-plugin-pages";

//  用于 test 路由的生成 比较方便
const config = {
  dirs: [
    // { dir: "src/views", baseRoute: "" },
    { dir: "src/test/views", baseRoute: "test" },
    // { dir: "src/features/**/pages", baseRoute: "features" },
    // { dir: "src/admin/pages", baseRoute: "admin" },
  ],
  exclude: [
    // 避免普通 js 也被撸进来,
    "**/*.js",
    // 避免组件也被撸进来
    "**/components/*",
  ],
  // extensions: ["jsx"],
};
export default () => Page(config);
