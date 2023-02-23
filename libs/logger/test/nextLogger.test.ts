import { expect, test, vi } from "vitest";
import chalk from "chalk";
// 简单测试
import defaultLogger, { LoggerFactory, LEVELS, Loggers } from "../src";
import ConsoleLogger from "../dist/Logger/ConsoleLogger";

test("tag works ", () => {
  const name = "log";
  const log = LoggerFactory.create(name, "ConsoleLogger");
  const errorLogger = LoggerFactory.create(name, "ConsoleLogger").setLevel(
    LEVELS.error
  );
  log.setNextLogger(errorLogger);
  const spy = vi.spyOn(console, "debug");
  log.debug();
  // 次数
  expect(spy).toHaveBeenCalledTimes(1);
  const spyError = vi.spyOn(console, "error");
  log.error("123");
  expect(spyError).toHaveBeenCalledTimes(2);
});
