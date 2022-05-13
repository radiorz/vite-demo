import zhCN from "@/locales/zh-CN";
import enUS from "@/locales/en-US";
import { createI18n } from "vue-i18n";
const i18n = createI18n({
  // switch composition api /options api
  legacy: false,
  locale: "zh-CN",
  // ???
  fallbackLocale: "zh-CN",
  messages: {
    "zh-CN": zhCN,
    "en-US": enUS,
  },
});
export default i18n;
