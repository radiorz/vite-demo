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
import fs from "fs";
import { LEVELS } from "../consts";
export default class FileLogger extends AbstractLogger {
  constructor(options: any) {
    super(options);
    Object.assign(this, options);
  }
  private _messageParse(message: string[], level: string): string {
    const thePrefix = [this.name, this.tag, ...this.prefixes]
      .filter((v) => !v)
      .join("|");
    return `\n[${level}] ${thePrefix} ${message.join(",")}`;
  }
  public _path: string = "";
  setFile(path: string) {
    this._path = path;
    return this;
  }
  private _toSave(message: any, level: LEVELS) {
    const _message = this._messageParse(message, LEVELS[level]);
    if (!this._path) {
      console.log("123");
      return;
    }
    fs.appendFile(this._path, _message, function (err) {
      if (err) throw err;
    });
  }
  _debug(message: string[]) {
    this._toSave(message, LEVELS.debug);
  }
  _error(message: string[]) {
    this._toSave(message, LEVELS.error);
  }
  _info(message: string[]) {
    this._toSave(message, LEVELS.info);
  }
  _warn(message: string[]) {
    this._toSave(message, LEVELS.warn);
  }
}
