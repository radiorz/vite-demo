import { expect, test } from "vitest";
// 简单测试
import { LoggerFactory, LEVELS, Loggers } from "@tikkhun/logger";
// 不同的
import { resolve } from "path";
test("fileLogger", () => {
  const fileLogger = LoggerFactory.create("", "FileLogger");
  expect(fileLogger).toBeInstanceOf(Loggers.FileLogger);
});
test("setPath works", () => {
  const fileLogger = LoggerFactory.create("", "FileLogger");
  (fileLogger as Loggers.FileLogger).setPath("./libs/logger/test/1.log");
  expect((fileLogger as Loggers.FileLogger).path).toBe(
    "./libs/logger/test/1.log"
  );
});

test("debug,warn,info,error输出到文件", () => {
  // mock apppendStringToFile
});
