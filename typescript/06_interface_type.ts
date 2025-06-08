// 06_interface_type.ts
// 主题：接口（interface）与类型别名（type）
// 本示例演示 TypeScript 中接口和类型别名的用法。

// 接口
interface Person {
  name: string;
  age: number;
}

let tom: Person = { name: "Tom", age: 18 };

// 类型别名
type Point = { x: number; y: number };
let p: Point = { x: 1, y: 2 };

console.log("tom:", tom);
console.log("p:", p);
