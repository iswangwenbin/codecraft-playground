// 01_variable_declaration.ts
// 主题：变量声明与类型注解
// 本示例演示 TypeScript 中变量声明和类型注解的基本用法。

let count: number = 10; // 声明一个 number 类型变量
let username: string = "Alice"; // 声明一个 string 类型变量
let isActive: boolean = true; // 声明一个 boolean 类型变量

// 类型推断
let age = 18; // TypeScript 会自动推断 age 为 number 类型

console.log("count:", count);
console.log("username:", username);
console.log("isActive:", isActive);
console.log("age:", age);
