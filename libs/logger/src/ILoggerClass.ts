// import ILogger from "./ILogger";
import AbstractLogger from "./Logger/AbstractLogger";
export default interface LoggerClass {
  new ([value]: any): AbstractLogger;
}
