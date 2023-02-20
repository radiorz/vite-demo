// 简单测试
import defaultLogger, { LoggerFactory, TYPES, Loggers } from "../src";
import FileLogger from "../dist/Logger/FileLogger";
import { LEVELS } from "../src/consts";
import ILogger from "../src/ILogger";
import AbstractLogger from "../src/Logger/AbstractLogger";
// 不同的
const fileLogger = LoggerFactory.create("", TYPES.FileLogger);
(fileLogger as Loggers.FileLogger).setFile(
  "D:/code/frontend-demo/libs/logger/__test__/1.log"
);
fileLogger.info("123");
console.log(`LEVELS[LEVELS.debug]==='debug'`, LEVELS[LEVELS.debug] === "debug");

fileLogger.debug("123123123");
fileLogger.info("zcxvzcv");
fileLogger.warn("sdfasdf");
fileLogger.error("adsfadf");

// // 修改权限设置
// defaultLogger.debug("123");
// defaultLogger.setLevel(LEVELS.info);
// defaultLogger.debug("123");
// defaultLogger.info("123");
// defaultLogger.setLevel(null);
// defaultLogger.debug("123123123");

// // 自己搞一个实例
// const myLogger = LoggerFactory.create("myLogger", Loggers.FileLogger);
// myLogger.debug("哇哈哈");

// // with
// const logger123 = defaultLogger.withTag("123");
// console.log(
//   `
// defaultLogger.tag
// `,
//   logger123.tag
// );

const logger = fileLogger.use(function (logger: any) {
  logger.$a = () => {
    console.log(123);
  };
  console.log(`logger.prototype`, logger.prototype);
  return logger;
});

logger.$a();

const logger2 = fileLogger.addPlugins("ttt", function () {
  console.log(456);
});
logger2.usePlugins("ttt")();
let func = logger2.useFunc("ttt");
console.log(`func`, func());
