import { makeLazy } from "./utils";
import { DEFAULT_TAG, LOG_LEVELS } from "./utils/constants";
export { LOG_LEVELS } from "./utils/constants";

const isDev = process.env.NODE_ENV === "development";

class Adapter {
  constructor(level) {
    this._level = level;
    // 合并console
    Object.assign(this, console);
    if (!this.debug) this.debug = this.log;
    if (!this.info) this.info = this.log;
    if (!this.fatal) this.fatal = this.error;
    // 增加level 判断 ,或许这个应该写个wrapper方法
    Object.keys(LOG_LEVELS)
      .map((key) => key.toLowerCase())
      .forEach((key) => (this[key] = this._makeLevel(key, this[key])));
  }
  get level() {
    return this._level;
  }
  set level(_level) {
    if (typeof _level === "number" && _level in Object.values(LOG_LEVELS)) {
      this._level = _level;
    }
    if (typeof _level === "string" && _level in Object.keys(LOG_LEVELS)) {
      this._level = LOG_LEVELS[_level];
    }
  }
  // 设置等级 大于自身等级则不打印
  _makeLevel(key, func) {
    return (...args) => {
      if (this.level > LOG_LEVELS[key.toUpperCase()]) return;
      func(...args);
    };
  }
}
function getLogger(level = 0) {
  return new Adapter(level);
}

/**
 * @description 设置前缀
 * @param {*} prefixs 前缀
 * @return {*}
 */
function setPrefixes(func, type, prefixes = []) {
  return function (...args) {
    return func(`[${type}]`, ...prefixes, ...args);
  };
}

/**
 * @description 获取 一个logger 实例的函数
 * @param {*} name 
 * @param {*} param1 
 * @returns 
 */
export function useLogger(
  name = DEFAULT_TAG,
  { prefixes = [], level = isDev ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO } = {}
) {
  const logger = getLogger(level);
  //
  if (!prefixes.length) {
    prefixes.push(name);
  }
  prefixes = prefixes.map((item) => `[${item}]`);
  Object.entries(logger)
    .filter(([type, func]) => {
      return typeof func === "function";
    })
    .map(([type, func]) => [type, setPrefixes(func, type, prefixes)])
    .map(([type, func]) => [type, makeLazy(func)])
    .forEach(([type, func]) => (logger[type] = func.bind(logger)));
  return logger;
}
// 定制前缀
export const logger = useLogger(DEFAULT_TAG);
