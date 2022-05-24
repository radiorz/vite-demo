/**
 * 更多设置详见 https://tailwindcss.com/docs/theme#configuration-reference
 * @returns
 */
/**
 * 配色
 * highlight
 *
 * @returns
 */
// 该方法是为了颜色基础类可以提供设置透明度的快捷方式，
function withOpacityValue(variable) {
  // 返回一个函数，透明度为可选参数，这样在 HTML 元素中使用颜色基础类时，既可以采用 text-blue-500 方式，也支持 text-blue-500/20 快捷同时设置透明度的形式
  return ({ opacityValue }) => {
    if (!opacityValue) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}
const highlight = withOpacityValue("--color-highlight");
const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      // 添加 flex center
      // flex:{
      //   center:
      // },
      // 设置字体颜色基础类
      textColor: {
        highlight: withOpacityValue("--color-highlight"), // 主题色 标题 高亮
        main: withOpacityValue("--color-text-main"), // 主颜色 正文颜色
        muted: withOpacityValue("--color-text-muted"), // 失效颜色
        invert: withOpacityValue("--color-text-invert"), // 反色
      },
      // 设置背景颜色基础类
      // 其中 base 基础类是用于设置网页背景色，nav 基础类用于设置导航栏背景色
      // 其他的基础类是用于设置元素的填充背景色
      backgroundColor: {
        highlight: withOpacityValue("--color-highlight"), // 高光
        base: withOpacityValue("--color-bg-base"), // 整体背景色
        nav: withOpacityValue("--color-bg-nav"), //导航栏背景色
        main: withOpacityValue("--color-fill-main"), // 主颜色
        muted: withOpacityValue("--color-fill-muted"), // 失效颜色
      },
      // 渐变色
      gradientColorStops: {
        highlight,
      },
      // 表单外框阴影颜色
      ringColor: {
        highlight,
      },
      // 卡片阴影
      boxShadowColor: {
        highlight,
      },
      // 边框
      borderColor: {
        highlight,
      },
      // 光标
      caretColor: {
        highlight,
      },
      // 表单强调色
      accentColor: {
        highlight,
      },
      extend: {
        colors: {
          highlight,
        },
      },
    },
  },
};

// console.log(`config`, config);
module.exports = config;
