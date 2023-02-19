import AbstractLogger from "./Logger/AbstractLogger";
import LoggerFactory, { TYPES } from "./LoggerFactory";
export * as Loggers from "./Logger";
export { LEVELS } from "./consts";
export { TYPES } from "./LoggerFactory";
export { LoggerFactory };
export { AbstractLogger };

// TODO ??? 这个是否可以用 LoggersObject.keys()形式生成？

// 或许直接用函数也行
const defaultLogger = LoggerFactory.create("", TYPES.ConsoleLogger);
export default defaultLogger;

// export { default as ILogger } from "./Logger/Interface";
