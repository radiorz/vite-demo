import { useLogger, LOG_LEVELS } from "@tikkhun/logger";
export default useLogger;
// 定制前缀
export const logger = useLogger("vue3-element-js", {
  level:
    process.env.NODE_ENV === "production" ? LOG_LEVELS.INFO : LOG_LEVELS.DEBUG,
});
logger.debug("logger start");
