import { makeLazy } from "./utils";
import { LOG_LEVELS } from "./utils/constants";
export { LOG_LEVELS } from "./utils/constants";

const isDev = process.env.NODE_ENV === "development";
function getLogger(level = 0) {
  const adapter = Object.assign({}, console);
  adapter.level = level;
  if (!adapter.fatal) adapter.fatal = adapter.error;
  if (!adapter.debug) adapter.debug = adapter.log;
  if (!adapter.info) adapter.info = adapter.log;
  // 写好点
  if (adapter.level > LOG_LEVELS.INFO) {
    adapter.info = () => {};
  }
  if (level > LOG_LEVELS.DEBUG) {
    adapter.debug = () => {};
  }
  if (level > LOG_LEVELS.WARN) {
    adapter.warn = () => {};
  }

  return adapter;
}

/**
 * @description 前缀装饰器
 * @param {*} prefixs 前缀
 * @return {*}
 */
function setPrefixes(func, type, prefixes = []) {
  return function (...args) {
    return func(`[${type}]`, ...prefixes, ...args);
  };
}

// level: "INFO";
export function useLogger(
  name = "loggerName",
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
export const logger = useLogger("logger");
