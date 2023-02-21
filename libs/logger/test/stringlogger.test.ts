import { test, expect, vi } from "vitest";
import { LoggerFactory, Loggers, LEVELS } from "../src";
test("可以生成 stringlogger", () => {
  const stringLogger = LoggerFactory.create("name", "StringLogger");
  expect(stringLogger).toBeInstanceOf(Loggers.StringLogger);
});
test("输出正确的 log string", () => {
  const log = LoggerFactory.create("name", "StringLogger");
  expect(log.debug()).toBe("[DEBUG]");
  const message = "message";
  expect(log.debug(message)).toBe(`[DEBUG] ${message}`);
});
