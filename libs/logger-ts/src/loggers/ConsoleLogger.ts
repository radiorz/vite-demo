import { LOG_LEVELS } from "~/utils/constants";
import makeLazy from "~/utils";
import ILogger from "~/ILogger";
export class ConsoleLogger implements ILogger {
  _name = "";
  level = LOG_LEVELS.INFO;
  constructor(name, { level }) {
    Object.assign(this, console);
    this._name = name;
    this.level = level;
  }
}
