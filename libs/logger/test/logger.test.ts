import { expect, test } from "vitest";
import defaultLogger, { LEVELS, Loggers } from "../src";
import { random } from "lodash";
test("setLevel works", () => {
  defaultLogger.setLevel(LEVELS.info);
  expect(defaultLogger.level).toBe(LEVELS.info);
  defaultLogger.setLevel(LEVELS.warn);
  expect(defaultLogger.level).toBe(LEVELS.warn);
  defaultLogger.setLevel(LEVELS.debug);
  expect(defaultLogger.level).toBe(LEVELS.debug);
  defaultLogger.setLevel(LEVELS.error);
  expect(defaultLogger.level).toBe(LEVELS.error);
  defaultLogger.setLevel(null);
  expect(defaultLogger.level).toBe(null);
});
test("setName works", () => {
  const name = `${random()}`;
  defaultLogger.setName(name);
  expect(defaultLogger.name).toBe(name);
});
test("defaultLogger is ConsoleLogger", () => {
  expect(defaultLogger).toBeInstanceOf(Loggers.ConsoleLogger);
});
