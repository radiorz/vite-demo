function A(): typeof A {
  const a = {};
  return A
}
const a = A();
