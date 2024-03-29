/**
 * @author
 * @file FileLogger.js
 * @fileBase FileLogger
 * @path libs\logger\src\logger-builder\FileLogger.js
 * @from 
 * @desc 
 * @todo

 *
 * @done
 * @example
 */

import AbstractLogger from "./AbstractLogger";
import { LEVELS } from "../consts";
import { curryRight } from "lodash";
import { toJsonStringify } from "../parser";
import * as fs from "fs";
import { resolve } from "path";
import { addLevel, joinBySpace } from "../parser/index";
import StringLogger from "./StringLogger";
export const appendStringToFile = (message: string, path: string) => {
  if (!path) {
    return;
  }
  fs.appendFile(resolve(path), message, function (err) {
    if (err) throw err;
  });
};
export default class FileLogger extends StringLogger {
  constructor(options: any) {
    super(options);
    Object.assign(this, options);
  }

  protected finalParsers: Function[] = [
    joinBySpace,
    // 换行一下
    (message: string) => {
      return `${message}\n`;
    },
    (message: string) => {
      appendStringToFile(message, this.path);
    },
  ];

  private _path: string = "";
  setPath(path: string) {
    this._path = path;
    return this;
  }
  set path(path) {
    this._path = path;
  }
  get path() {
    return this._path;
  }
}
