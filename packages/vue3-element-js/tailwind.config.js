/**
 * 更多设置详见
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

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      // 设置字体颜色基础类
      textColor: {
        highlight: withOpacityValue("--color-highlight"),
        main: withOpacityValue("--color-text-main"),
        muted: withOpacityValue("--color-text-muted"),
        invert: withOpacityValue("--color-text-invert"),
      },
      // 设置背景颜色基础类
      // 其中 base 基础类是用于设置网页背景色，nav 基础类用于设置导航栏背景色
      // 其他的基础类是用于设置元素的填充背景色
      backgroundColor: {
        base: withOpacityValue("--color-bg-base"),
        nav: withOpacityValue("--color-bg-nav"),
        main: withOpacityValue("--color-fill-main"),
        muted: withOpacityValue("--color-fill-muted"),
      },

      extend: {
        colors: {
          highlight: withOpacityValue("--color-highlight"),
        },
      },
    },
  },
};

console.log(`config`, config);
module.exports = config;
