class Obj {
  constructor() {}
  a() {
    console.log(123);
  }
  b() {}
  c() {}
  plugins: Record<string, Function> = {
    d() {},
    e() {},
  };
  useFunc(name: string): Function | undefined {
    if (
      (this as Record<string, Function | unknown>)[name] ||
      this.plugins[name]
    ) {
      return this[name] || this.plugins[name];
    }
    return;
  }
}
const theObj = new Obj();
const func = theObj.useFunc("sss");
// if (func instanceof Function) {
//   func();
// }
