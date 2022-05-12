import logger from "./logger.js";
export default (app) => {
  app.provide("$log", logger);
  app.config.globalProperties.$log = logger;
};
