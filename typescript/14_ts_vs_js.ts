// 14_ts_vs_js.ts
// 主题：TypeScript 与 JavaScript 的区别
// 本示例对比 TypeScript 和 JavaScript 的主要区别。

// 1. 类型系统
let tsVar: number = 123; // TypeScript 需要类型注解，JS 不需要
// let jsVar = 123; // JavaScript 只支持动态类型

// 2. 接口和类型
interface Person {
  name: string;
}
let p: Person = { name: "Tom" };

// 3. 编译时检查
// TypeScript 在编译阶段检查类型错误，JS 运行时才报错
// tsVar = 'hello'; // 会报错

// 4. 新语法支持
// TypeScript 支持更多 ESNext/未来语法，并可编译为兼容 JS

console.log("TypeScript 与 JavaScript 的主要区别见注释说明");
