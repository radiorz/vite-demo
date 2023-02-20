import { expect, test } from "vitest";
import defaultLogger, { LEVELS } from "@tikkhun/logger";
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
test("debug,info,warn,error works", () => {
  expect(defaultLogger.debug).toBeInstanceOf(Function);
  expect(defaultLogger.info).toBeInstanceOf(Function);
  expect(defaultLogger.warn).toBeInstanceOf(Function);
  expect(defaultLogger.error).toBeInstanceOf(Function);
});
