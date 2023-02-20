// import { LEVELS } from './consts';

enum LEVELS {
  debug = 0,
  info,
  warn,
  error,
}
type ILogger = Record<keyof typeof LEVELS, Function>;
// interface ILogger extends LoggerFuncs {
//   // parsers: Function[];
//   // use: (logger: ILogger) => ILogger;
// }
export default ILogger;
// console.log(`LEVELS(LEVELS.debug)`, typeof LEVELS[LEVELS.debug]);
