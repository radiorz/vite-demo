enum TYPES {
  ConsoleLogger = "ConsoleLogger",
  FileLogger = "FileLogger",
}
import AbstractLogger from "./Logger/AbstractLogger";
import LoggerClass from "./ILoggerClass";
import * as Loggers from "./Logger";
export { TYPES };
export default class LoggerFactory {
  public static create(
    name: string = "",
    type: TYPES | LoggerClass = TYPES.ConsoleLogger
  ): AbstractLogger {
    if (typeof type === "string") {
      if (!Loggers[type]) throw new Error("没有这个构造器" + type);
      // 这里只有一种，或许可以设置多种
      return new Loggers[type](name);
    }
    // FIXME
    return new (type as LoggerClass)(name);
  }
}
