/**
 * @author
 * @file ConsoleLogger.ts
 * @fileBase ConsoleLogger
 * @path libs\logger\src\logger-builder\Logger\ConsoleLogger.ts
 * @from 
 * @desc 普通的 console 打印
 * @todo

 *
 * @done
 * @example
 */
import { curryRight, isNil } from "lodash";

import { LEVELS } from "../consts";
import { addColorLevel, addPrefixes } from "../parser";
import AbstractLogger from "./AbstractLogger";

// const toPrint = (messages: any[], level: LEVELS) => {
//   console[LEVELS[level]](...messages);
// };

export default class ConsoleLogger extends AbstractLogger {
  constructor(options: any) {
    super(options);
  }
  get allPrefixes(): string[] {
    console.log(`this.tag`, this.tag);
    return [this.name, this.tag, ...this.prefixes].filter(
      (v) => typeof v !== "undefined"
    );
  }
  protected parsers: Function[] = [
    (messages: any[]) => addPrefixes(messages, this.allPrefixes),
  ];
  protected debugParsers: Function[] = [
    curryRight(addColorLevel)(LEVELS.debug),
    (messages: any[]) => console.debug(...messages),
  ];
  protected infoParsers: Function[] = [
    curryRight(addColorLevel)(LEVELS.info),
    (messages: any[]) => console.info(...messages),
  ];
  protected warnParsers: Function[] = [
    curryRight(addColorLevel)(LEVELS.warn),
    (messages: any[]) => console.warn(...messages),
  ];
  protected errorParsers: Function[] = [
    curryRight(addColorLevel)(LEVELS.error),
    (messages: any[]) => console.error(...messages),
  ];
  protected finalParsers: Function[] = [];
  messageParser(...args: any[]) {
    return args;
  }
}
