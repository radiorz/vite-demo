import { expect, test } from "vitest";
// 简单测试
import defaultLogger, { LoggerFactory, LEVELS, Loggers } from "@tikkhun/logger";
// 不同的
test("可以创建实例 ConsoleLogger", () => {
  const log = LoggerFactory.create("", "ConsoleLogger");
  expect(log).toBeInstanceOf(Loggers.ConsoleLogger);
});
test("defaultLogger可用", () => {
  expect(defaultLogger).toBeInstanceOf(Loggers.ConsoleLogger);
});

test("debug,warn,info,error输出到console", () => {
  // mock console
  expect(defaultLogger.debug).toBeInstanceOf(Function);
  expect(defaultLogger.warn).toBeInstanceOf(Function);
  expect(defaultLogger.error).toBeInstanceOf(Function);
  expect(defaultLogger.info).toBeInstanceOf(Function);

  // 
});
