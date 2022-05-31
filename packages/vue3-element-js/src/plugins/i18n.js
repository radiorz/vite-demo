// 国际化
import { createI18n } from "vue-i18n";

// 项目中的国际化
import common from "~locales/common";
import zhCN from "~locales/zh-CN";
import enUS from "~locales/en-US";
import zhTW from "~locales/zh-TW";

// element-plus 国际化
import enLocale from "element-plus/lib/locale/lang/en";
import zhLocale from "element-plus/lib/locale/lang/zh-cn";

export const i18n = createI18n({
  // switch composition api /options api
  legacy: false,
  locale: "zh-CN",
  // 没有翻译则使用 中文
  fallbackLocale: "zh-CN",
  messages: {
    "zh-CN": { ...zhCN, ...zhLocale, ...common },
    "zh-TW": { ...zhTW, ...zhLocale, ...common },
    "en-US": { ...enUS, ...enLocale, ...common },
  },
});
// 此函数只是配合i18n Ally插件来进行国际化智能提示，并无实际意义（只对提示起作用），如果不需要国际化可删除
export const $t = i18n.global.t;

export function useI18n(app) {
  app.use(i18n);
}
export default i18n;
