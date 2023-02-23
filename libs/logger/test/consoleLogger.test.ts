import { expect, test, vi } from "vitest";
import chalk from "chalk";
// 简单测试
import defaultLogger, { LoggerFactory, LEVELS, Loggers } from "../src";
import ConsoleLogger from "../dist/Logger/ConsoleLogger";
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
  const tag1 = "tag1";
  let _messages;
  const spy = vi.spyOn(console, "debug").mockImplementation((...args) => {
    _messages = args;
  });
  log.debug(message1);
  // 次数
  expect(spy).toHaveBeenCalledTimes(1);
  expect(_messages).toEqual([chalk.blue("[DEBUG]"), name, message1]);
  log.debug(message);
  expect(_messages).toEqual([chalk.blue("[DEBUG]"), name, message]);
  expect(spy).toHaveBeenCalledTimes(2);
});
test("name works", () => {
  const name = "log";
  const log = LoggerFactory.create(name, "ConsoleLogger");

  const tag1 = "tag1";
  let _messages;
  const spy = vi.spyOn(console, "debug").mockImplementation((...args) => {
    _messages = args;
  });
  log.debug();
  expect(_messages).toEqual([chalk.blue("[DEBUG]"), name]);
  const name2 = "name2";
  log.setName(name2);
  log.debug();
  expect(_messages).toEqual([chalk.blue("[DEBUG]"), name2]);
});
test("tag works ", () => {
  const name = "log";
  const log = LoggerFactory.create(name, "ConsoleLogger");
  const tag1 = "tag1";
  const tagLog = log.withTag(tag1);
  expect(tagLog.tag).toBe(tag1);
  expect(tagLog.allPrefixes).toEqual([name, tag1]);
  const message1 = "something 123";
  const message = "something";
  let _messages;
  const spy = vi.spyOn(console, "debug").mockImplementation((...args) => {
    _messages = args;
  });
  tagLog.debug();
  console.log(`tagLog.tag`, tagLog.tag);
  // 次数
  expect(_messages).toEqual([chalk.blue("[DEBUG]"), [name, tag1].join("|")]);
  expect(spy).toHaveBeenCalledTimes(1);
});
