import env from "~/config/env";
import logger from "./logger";
import i18n from "./i18n";
Object.entries(env).forEach(([key, value]) => {
  window[key] = value;
});
import router from "~/router";

// FIXME 这个无法使用
window.$t = i18n.global.t;
window.$log = logger;
window.$router = router;
