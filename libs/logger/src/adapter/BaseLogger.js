import { LOG_LEVELS } from "~/utils/constants";
export default class BaseLogger {
  constructor(level) {
    this._level = level;
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
