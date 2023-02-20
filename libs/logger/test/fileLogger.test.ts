import { expect, test, vi } from "vitest";
// 简单测试
import { LoggerFactory, LEVELS, Loggers } from "../src";
// 不同的
import { resolve } from "path";
import FileLogger from "../dist/Logger/FileLogger";
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
import * as fs from "fs";
test("debug,warn,info,error输出到文件", () => {
  // const name = "log";
  // const log = LoggerFactory.create(name, "FileLogger");
  // const message1 = "something 123";
  // const message = "something";
  // const fsMock = vi.mock("fs");
  // let _messages;
  // const spy = vi.spyOn(fs, "appendFile").mockImplementation((...args) => {
  //   _messages = args;
  // });
  // log.debug(message1);
  // // 次数
  // expect(spy).toHaveBeenCalledTimes(1);
  // expect(_messages).toEqual(["[DEBUG]", name, message1]);
  // log.debug(message);
  // expect(spy).toHaveBeenCalledTimes(2);
  // expect(_messages).toEqual(["[DEBUG]", name, message]);
});
