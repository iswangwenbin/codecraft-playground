// 08_generics.ts
// 主题：泛型（generics）
// 本示例演示 TypeScript 中泛型函数和泛型类的用法。

// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(123));
console.log(identity<string>("hello"));

// 泛型类
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

const box = new Box<boolean>(true);
console.log(box.value);
