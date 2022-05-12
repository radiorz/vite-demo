import zh from "@/language/zh";
import en from "@/language/en";
import { createI18n } from "vue-i18n";
const i18n = createI18n({
  // switch composition api /options api
  legacy: false,
  locale: "zh",
  // ???
  fallbackLocale: "zh",
  messages: {
    zh,
    en,
  },
});
export default i18n;
