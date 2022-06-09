// 可使用函数
const makeLazy = (func: Function) => {
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
