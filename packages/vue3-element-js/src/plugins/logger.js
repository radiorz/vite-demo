import logger, { LEVELS } from "@tikkhun/logger";
// 定制前缀
const _logger = logger
  .setName("vue3-element-js")
  .setLevel(process.env.NODE_ENV === "production" ? LEVELS.info : LEVELS.debug);
_logger.debug("logger start");
export default _logger;
