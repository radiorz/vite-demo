function getLogger() {
  const adapter = Object.assign({}, console);
  adapter.fatal = adapter.error;
  return adapter;
}

/**
 * @description 前缀装饰器
 * @param {*} prefixs 耆那最
 * @return {*}
 */
function prefix(prefixs = []) {
  return (logger = getLogger()) => {
    const logTypes = ["debug", "info", "warn", "error", "fatal"];
    logTypes.forEach((type) => {
      const out = logger[type];
      // 覆写logger方法
      logger[type] = (...args) => {
        return out.call(logger, ...prefixs, ...args);
      };
    });
    return logger;
  };
}

export function useLogger(name = "loggerName", { prefixs = [] } = {}) {
  const logger = getLogger();
  //
  if (!prefixs.length) {
    prefixs.push(name);
  }
  prefixs = prefixs.map((item) => `[${item}]`);
  prefix(prefixs)(logger);
  return logger;
}

export default useLogger("voerka");
