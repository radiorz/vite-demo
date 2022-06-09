const { useLogger, LOG_LEVELS } = require("@tikkhun/logger");
const logger = useLogger("logger-test", { level: LOG_LEVELS.INFO });
logger.debug("test", () => JSON.stringify({ a: 123 }));
logger.info("logger start",logger.level);
logger.warn("123");
logger.error("123");
logger.fatal("123");
logger.level =  LOG_LEVELS.DEBUG;
logger.debug(123)
