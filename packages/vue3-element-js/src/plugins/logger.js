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
 * @param {*} prefixs 耆那最
 * @return {*}
 */
function setPrefix(prefixs = []) {
  return (logger = getLogger()) => {
    Object.keys(LOG_LEVELS).forEach((type) => {
      const out = logger[type.toLowerCase()] || function () {};
      if (out) {
        // 覆写logger方法
        logger[type.toLowerCase()] = (...args) => {
          return out.call(logger, `[${type}]`, ...prefixs, ...args);
        };
      }
    });
    return logger;
  };
}

level: "INFO";
export function useLogger(
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

export default useLogger("voerka");
