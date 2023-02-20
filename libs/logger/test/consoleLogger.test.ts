import { expect, test, vi } from "vitest";
// 简单测试
import defaultLogger, { LoggerFactory, LEVELS, Loggers } from "../src";
// 不同的
test("可以创建实例 ConsoleLogger", () => {
  const log = LoggerFactory.create("", "ConsoleLogger");
  expect(log).toBeInstanceOf(Loggers.ConsoleLogger);
});
test("可以创建实例 ConsoleLogger by Class", () => {
  const log = LoggerFactory.create("", Loggers.ConsoleLogger);
  expect(log).toBeInstanceOf(Loggers.ConsoleLogger);
});
test("defaultLogger", () => {
  expect(defaultLogger).toBeInstanceOf(Loggers.ConsoleLogger);
});

test("consoleLogger has debug,warn,info,error", () => {
  // mock console
  expect(defaultLogger.debug).toBeInstanceOf(Function);
  expect(defaultLogger.warn).toBeInstanceOf(Function);
  expect(defaultLogger.error).toBeInstanceOf(Function);
  expect(defaultLogger.info).toBeInstanceOf(Function);
});
test("consoleLogger.debug call console.debug by ...args", () => {
  const name = "log";
  const log = LoggerFactory.create(name, "ConsoleLogger");
  const message1 = "something 123";
  const message = "something";
  let _messages;
  const spy = vi.spyOn(console, "debug").mockImplementation((...args) => {
    _messages = args;
  });
  log.debug(message1);
  // 次数
  expect(spy).toHaveBeenCalledTimes(1);
  expect(_messages).toEqual(["[DEBUG]", name, message1]);
  log.debug(message);
  expect(spy).toHaveBeenCalledTimes(2);
  expect(_messages).toEqual(["[DEBUG]", name, message]);
});
