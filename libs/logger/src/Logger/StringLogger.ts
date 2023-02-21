/**
 * @author
 * @file StringLogger.js
 * @fileBase StringLogger
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

export const appendStringToFile = (message: string, path: string) => {
  if (!path) {
    return;
  }
  fs.appendFile(resolve(path), message, function (err) {
    if (err) throw err;
  });
};
export default class StringLogger extends AbstractLogger {
  constructor(options: any) {
    super(options);
    Object.assign(this, options);
  }

  // common parsers
  protected parsers: Function[] = [toJsonStringify];
  protected debugParsers: Function[] = [curryRight(addLevel)(LEVELS.debug)];
  protected infoParsers: Function[] = [curryRight(addLevel)(LEVELS.info)];
  protected warnParsers: Function[] = [curryRight(addLevel)(LEVELS.warn)];
  protected errorParsers: Function[] = [curryRight(addLevel)(LEVELS.error)];
  protected finalParsers: Function[] = [joinBySpace];
}
