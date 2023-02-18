// 简单测试
import defaultLogger, {
  LoggerFactory,
  LEVELS,
  TYPES,
  Loggers,
} from "../dist/logger.mjs";
// 不同的
const fileLogger = LoggerFactory.create("", TYPES.FileLogger);
fileLogger.setFile("D:/code/frontend-demo/libs/logger/__test__/1.log");
fileLogger.debug("123");
fileLogger.info("zcxvzcv");
fileLogger.warn("sdfasdf");
fileLogger.error("adsfadf ");

// 修改权限设置
defaultLogger.debug("123");
defaultLogger.setLevel(LEVELS.info);
defaultLogger.debug("123");
defaultLogger.info("123");
defaultLogger.setLevel(null);
defaultLogger.debug("123123123");

// 自己搞一个实例
const myLogger = LoggerFactory.create("myLogger", Loggers.FileLogger);
myLogger.debug("哇哈哈");

// with
const logger123 = defaultLogger.withTag("123");
console.log(
  `
defaultLogger.tag
`,
  logger123.tag
);
