const { useLogger, LOG_LEVELS } = require("@tikkhun/logger");
const logger = useLogger("logger-test", { level: LOG_LEVELS.DEBUG });
logger.debug("test");
logger.info("logger start");
logger.warn("123");
logger.error("123");
logger.fatal("123");
