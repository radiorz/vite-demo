/**
 * @author
 * @file ConsoleLogger.ts
 * @fileBase ConsoleLogger
 * @path libs\logger\src\logger-builder\Logger\ConsoleLogger.ts
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
import { addLevel, addPrefixes } from "../parser";
// const toPrint = (messages: any[], level: LEVELS) => {
//   console[LEVELS[level]](...messages);
// };

import { isNil } from "lodash";
export default class ConsoleLogger extends AbstractLogger {
  constructor(options: any) {
    super(options);
  }
  get allPrefixes() {
    return [this.name, this.tag || "", ...this.prefixes].filter(
      (v) => !isNil(v)
    );
  }
  protected parsers: Function[] = [curryRight(addPrefixes)(this.allPrefixes)];
  protected debugParsers: Function[] = [
    curryRight(addLevel)(LEVELS.debug),
    (messages: any[]) => console.debug(...messages),
  ];
  protected infoParsers: Function[] = [
    curryRight(addLevel)(LEVELS.info),
    (messages: any[]) => console.info(...messages),
  ];
  protected warnParsers: Function[] = [
    curryRight(addLevel)(LEVELS.warn),
    (messages: any[]) => console.warn(...messages),
  ];
  protected errorParsers: Function[] = [
    curryRight(addLevel)(LEVELS.error),
    (messages: any[]) => console.error(...messages),
  ];
  protected finalParsers: Function[] = [];
  messageParser(...args: any[]) {
    return args;
  }
}
