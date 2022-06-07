const LOG_LEVELS = {
  NOTSET: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
  FATAL: 5
};
function getLogger(level) {
  const adapter = Object.assign({}, console);
  adapter.fatal = adapter.error;
  if (level > LOG_LEVELS.INFO) {
    adapter.info = () => {
    };
    adapter.debug = () => {
    };
    return adapter;
  }
  adapter.info = adapter.log;
  if (level > LOG_LEVELS.DEBUG) {
    adapter.debug = () => {
    };
    return adapter;
  }
  adapter.debug = adapter.log;
  return adapter;
}
function setPrefix(prefixs = []) {
  return (logger = getLogger()) => {
    Object.keys(LOG_LEVELS).forEach((type) => {
      const out = logger[type.toLowerCase()] || function() {
      };
      const lazyOut = makeLazy(out);
      if (lazyOut) {
        logger[type.toLowerCase()] = (...args) => {
          return lazyOut.call(logger, `[${type}]`, ...prefixs, ...args);
        };
      }
    });
    return logger;
  };
}
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
function useLogger(name = "loggerName", { prefixs = [], level = LOG_LEVELS.INFO } = {}) {
  const logger = getLogger(level);
  if (!prefixs.length) {
    prefixs.push(name);
  }
  prefixs = prefixs.map((item) => `[${item}]`);
  setPrefix(prefixs)(logger);
  return logger;
}
var index = useLogger("logger");
export { index as default, useLogger };
