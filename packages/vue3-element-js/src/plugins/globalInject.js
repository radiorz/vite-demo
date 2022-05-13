window.isDev = process.env.NODE_ENV === "development";
window.isProd = process.env.NODE_ENV === "production";
window.isTest = process.env.NODE_ENV === "test";
import logger from "./logger.js";
import i18n from "./i18n";
// FIXME 这个无法使用
window.$i18n = i18n.global;
window.$log = logger;
