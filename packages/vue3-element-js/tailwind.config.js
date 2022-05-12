const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      // 添加一些颜色别称
      primary: colors.blue[800],
      secondary: colors.blue[400],
      success: colors.green,
      danger: colors.red,
      warning: colors.orange,
      info: colors.blue,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
