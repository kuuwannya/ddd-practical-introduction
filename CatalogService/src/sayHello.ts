export const sayHello = (name: string): string => {
  const res = `Hello ${name}!`;
  return res;
};
// 使用例
console.log(sayHello("World"));
