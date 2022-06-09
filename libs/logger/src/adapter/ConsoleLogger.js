import BaseLogger from "./BaseLogger";
import { LOG_LEVELS } from "~/utils/constants";
export default class ConsoleLogger extends BaseLogger {
  constructor(level) {
    super(level);
    // 合并console
    Object.assign(this, console);
    if (!this.debug) this.debug = this.log;
    if (!this.info) this.info = this.log;
    if (!this.fatal) this.fatal = this.error;
    // 增加等级判断(这个暂时不知道怎么放到 baseLogger中，可能我这里应该写的是 _方法)
    Object.keys(LOG_LEVELS)
      .map((key) => key.toLowerCase())
      .forEach((key) => (this[key] = this._makeLevel(key, this[key])));
  }
}
