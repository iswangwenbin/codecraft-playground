// 09_type_infer_assert.ts
// 主题：类型推断与类型断言
// 本示例演示 TypeScript 的类型推断和类型断言用法。

// 类型推断
let msg = "hello"; // 推断为 string
let num = 42; // 推断为 number

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log("msg:", msg);
console.log("num:", num);
console.log("strLength:", strLength);
