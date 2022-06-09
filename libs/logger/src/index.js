import { makeLazy } from "./utils";
import { DEFAULT_TAG, LOG_LEVELS } from "./utils/constants";
export { LOG_LEVELS } from "./utils/constants";
import Adapter from "./adapter/ConsoleLogger";
const isDev = process.env.NODE_ENV === "development";

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
