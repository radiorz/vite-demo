import * as Loggers from "./Logger";
export * as Loggers from "./Logger";
import AbstractLogger from "./Logger/AbstractLogger";
import ILogger from "./Logger/Interface";
export interface LoggerClass {
  new ([value]: any): ILogger;
}

// TODO ??? 这个是否可以用 LoggersObject.keys()形式生成？
enum TYPES {
  ConsoleLogger = "ConsoleLogger",
  FileLogger = "FileLogger",
}
// 或许直接用函数也行
class LoggerFactory {
  public static create(
    name: string = "",
    type: TYPES | LoggerClass = TYPES.ConsoleLogger
  ): any {
    if (typeof type === "string" && Loggers[type]) {
      // 这里只有一种，或许可以设置多种
      return new Loggers[type](name);
    }
    return new Loggers[TYPES.ConsoleLogger](name);
  }
}
const defaultLogger = LoggerFactory.create("", TYPES.ConsoleLogger);
export default defaultLogger;
export { LoggerFactory };
export { LEVELS } from "./consts";

export { TYPES };

export { AbstractLogger };
// export { default as ILogger } from "./Logger/Interface";
