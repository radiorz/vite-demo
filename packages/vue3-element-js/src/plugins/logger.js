// 设置一个logger 并且设定等级
const LOG_LEVELS = {
  NOTSET: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  FATAL: 5,
};
const isDev = process.env.NODE_ENV === "development";

function getLogger(level) {
  const adapter = Object.assign({}, console);
  adapter.fatal = adapter.error;
  // 写好点
  if (level > LOG_LEVELS.INFO) {
    adapter.info = () => {};
    adapter.debug = () => {};
    return adapter;
  }
  adapter.info = adapter.log;
  if (level > LOG_LEVELS.DEBUG) {
    adapter.debug = () => {};
    return adapter;
  }
  adapter.debug = adapter.log;
  return adapter;
}

/**
 * @description 前缀装饰器
 * @param {*} prefixs 前缀
 * @return {*}
 */
function setPrefix(prefixs = []) {
  return (logger = getLogger()) => {
    Object.keys(LOG_LEVELS).forEach((type) => {
      const out = logger[type.toLowerCase()] || function () {};
      const lazyOut = makeLazy(out);
      if (lazyOut) {
        // 覆写logger方法
        logger[type.toLowerCase()] = (...args) => {
          return lazyOut.call(logger, `[${type}]`, ...prefixs, ...args);
        };
      }
    });
    return logger;
  };
}
// 可使用函数
const makeLazy = (func) => {
  return (...args) => {
    const lastArg = args[args.length - 1];
    if (typeof lastArg === "function") {
      args.pop();
      func(...args, lastArg());
    } else {
      func(...args);
    }
  };
};

level: "INFO";
export default function useLogger(
  name = "loggerName",
  { prefixs = [], level = isDev ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO } = {}
) {
  const logger = getLogger(level);
  //
  if (!prefixs.length) {
    prefixs.push(name);
  }
  prefixs = prefixs.map((item) => `[${item}]`);
  setPrefix(prefixs)(logger);

  return logger;
}
// 定制前缀
export const logger = useLogger("tikkhun");
