type OriginMessage = string | string[];
import ILogger from "./Interface";
import { LEVELS } from "../consts";
const toMessageArray = (message: string | string[]) => {
  return typeof message === "string" ? [message] : message;
};
export default abstract class AbstractLogger implements ILogger {
  level: LEVELS | null = LEVELS.debug;
  constructor(public name: string = "") {}

  setLevel(level: LEVELS | null) {
    this.level = level || null;
    return this;
  }
  prefixes: string[] = [];
  addPrefix(prefix: string): this;
  addPrefix(prefix: string[]): this;
  addPrefix(prefix: string | string[]): this {
    if (Array.isArray(prefix)) {
      this.prefixes = [...this.prefixes, ...prefix];
    } else {
      this.prefixes.push(prefix);
    }
    return this;
  }
  removePrefix(prefix: string): this;
  removePrefix(prefix: string[]): this;
  removePrefix(prefix: string | string[]) {
    if (Array.isArray(prefix)) {
      this.prefixes = this.prefixes.filter((_prefix) =>
        prefix.includes(_prefix)
      );
    } else {
      this.prefixes = this.prefixes.filter((_prefix) => prefix === _prefix);
    }
    return this;
  }
  private isLevelAllow(level: LEVELS) {
    if (this.level === null) return true;
    if (this.level < level) return false;
    return true;
  }
  abstract _debug(message: string[]): void;
  abstract _info(message: string[]): void;
  abstract _warn(message: string[]): void;
  abstract _error(message: string[]): void;

  debug(message: OriginMessage) {
    if (!this.isLevelAllow(LEVELS.debug)) {
      return;
    }
    this._debug(toMessageArray(message));
  }
  info(message: OriginMessage) {
    if (!this.isLevelAllow(LEVELS.info)) {
      return;
    }
    this._info(toMessageArray(message));
  }
  warn(message: OriginMessage) {
    if (!this.isLevelAllow(LEVELS.warn)) {
      return;
    }
    this._info(toMessageArray(message));
  }
  error(message: OriginMessage) {
    if (!this.isLevelAllow(LEVELS.warn)) {
      return;
    }
    this._info(toMessageArray(message));
  }
  // 快速创建一个新的logger库 只有 tag不同
  private static tags = new WeakMap<object, string>();
  get tag() {
    return AbstractLogger.tags.get(this);
  }
  /**
   * 创建一个新的实例,带着原来的参数
   * @param tag
   * @returns
   */
  withTag(tag: string) {
    const proxy = new Proxy(this, {});
    AbstractLogger.tags.set(proxy, tag);
    return proxy;
  }
}

export interface LoggerClass {
  new (name: string): AbstractLogger;
}
