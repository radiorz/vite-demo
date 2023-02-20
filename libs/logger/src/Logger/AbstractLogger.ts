import { LEVELS } from "../consts";
import { isString, curryRight } from "lodash";
import ILogger from "../ILogger";
import { doParsers } from "../parser/funcs";

export default abstract class AbstractLogger implements ILogger {
  level: LEVELS | null = LEVELS.debug;
  constructor(public name: string = "") {
    // FIXME 这里不被认可...
    // for (const level in LEVELS) {
    //   const levelName = LEVELS[level];
    //   console.log(`levelName`, levelName);
    //   // 这里 implements 不好
    //   const func = function (...messages: any[]) {
    //     if (!this.isLevelAllow(LEVELS[level])) {
    //       return;
    //     }
    //     this[`_${level}`](toMessageArray(this.messageParser(messages)));
    //   };
    //   this[levelName] = func.bind(this);
    // }
  }
  // 创建者模式
  setName(name: string) {
    this.name = name;
    return this;
  }
  setLevel(level: LEVELS | null) {
    this.level = level;
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
  protected abstract parsers: Function[]; // any[] to any[]
  protected abstract debugParsers: Function[];
  protected abstract infoParsers: Function[];
  protected abstract warnParsers: Function[];
  protected abstract errorParsers: Function[];
  protected abstract finalParsers: Function[];
  doParsers(messages: any[]) {
    return curryRight(doParsers)(this.parsers)(messages);
  }
  debug(...messages: any[]) {
    if (!this.isLevelAllow(LEVELS.debug)) {
      return;
    }
    doParsers(messages, [
      ...this.parsers,
      ...this.debugParsers,
      ...this.finalParsers,
    ]);
  }
  info(...messages: any[]) {
    if (!this.isLevelAllow(LEVELS.info)) {
      return;
    }
    doParsers(messages, [
      ...this.parsers,
      ...this.infoParsers,
      ...this.finalParsers,
    ]);
  }
  warn(...messages: any[]) {
    if (!this.isLevelAllow(LEVELS.warn)) {
      return;
    }
    doParsers(messages, [
      ...this.parsers,
      ...this.warnParsers,
      ...this.finalParsers,
    ]);
  }
  error(...messages: any[]) {
    if (!this.isLevelAllow(LEVELS.error)) {
      return;
    }
    doParsers(messages, [
      ...this.parsers,
      ...this.errorParsers,
      ...this.finalParsers,
    ]);
  }
  // ****** tag ******
  // 快速创建一个新的logger库 只有 tag 不同
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

  /**
   * 添加插件
   * @param plugin Function
   * @returns
   */
  private plugins: Record<string, Function> = {};
  // 这里可以继续细化 keyof 和 返回值是 function 的函数
  useFunc(name: string) {
    return (this as Record<string, any>)[name] || this.plugins[name];
  }
  usePlugins(name: string) {
    return this.plugins[name];
  }
  // 如何通过this[name]使用 plugins
  addPlugins(name: string, plugin: Function): AbstractLogger {
    this.plugins[name] = plugin;
    return this;
  }
  removePlugins(name: string): AbstractLogger {
    if (this.plugins[name]) delete this.plugins[name];
    return this;
  }
  /**
   * 简单添加插件(风险较大 因为可以修改整个实例)
   * @param plugin
   * @returns
   */
  use(plugin: Function) {
    return plugin(this);
  }
}

export interface LoggerClass {
  new (name: string): AbstractLogger;
}
