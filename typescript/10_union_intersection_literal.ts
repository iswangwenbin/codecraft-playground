// 10_union_intersection_literal.ts
// 主题：联合类型、交叉类型与字面量类型
// 本示例演示 TypeScript 中联合类型、交叉类型和字面量类型的用法。

// 联合类型
let value: string | number;
value = "hello";
value = 123;

// 交叉类型
type A = { a: number };
type B = { b: string };
type AB = A & B;
let ab: AB = { a: 1, b: "x" };

// 字面量类型
let direction: "up" | "down";
direction = "up";
// direction = 'left'; // 会报错

console.log("value:", value);
console.log("ab:", ab);
console.log("direction:", direction);
