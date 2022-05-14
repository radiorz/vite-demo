import logger from "./logger.js";
import { $t } from "./i18n";
export default (app) => {
  app.provide("$log", logger);
  app.config.globalProperties.$log = logger;
  app.config.globalProperties.$t = $t;
};
