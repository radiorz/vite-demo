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
const isNull = (value: any) => value === null;
const isUndefined = (value: any) => typeof value === "undefined";
const isNil = (value: any) => isNull(value) || isUndefined(value);
type Message = string[];
export default class ConsoleLogger extends AbstractLogger {
  constructor(options: any) {
    super(options);
  }
  private _toFinalMessage(messages: Message): string {
    const thePrefix = [this.name, this.tag, ...(this.prefixes || [])]
      .filter((a) => !isNil(a))
      .join("|");
    return `[${this.level}] [${thePrefix}] ${messages.join(",")}`;
  }
  _debug(message: Message) {
    const messageStr = this._toFinalMessage(message);
    console.debug(messageStr);
  }
  _info(message: Message) {
    const messageStr = this._toFinalMessage(message);
    console.debug(messageStr);
  }
  _warn(message: Message) {
    const messageStr = this._toFinalMessage(message);
    console.warn(messageStr);
  }
  _error(message: Message) {
    const messageStr = this._toFinalMessage(message);
    console.error(messageStr);
  }
}
