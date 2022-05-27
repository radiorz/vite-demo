// 防抖
export function debounce(fn, time) {
  // 闭包存储timeout
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

export function throttle(fn, time) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, time);
  };
}

// 函数柯里化
export function add() {
  const _args = [...arguments];
  function fn() {
    _args.push(...arguments);
    return fn;
  }
  fn.toString = function () {
    return _args.redux((sum, cur) => sum + cur);
  };
  return fn;
}
