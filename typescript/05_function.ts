// 05_function.ts
// 主题：函数与参数类型
// 本示例演示 TypeScript 中函数的定义、参数类型和返回值类型。

// 带类型注解的函数
function add(x: number, y: number): number {
  return x + y;
}

// 可选参数和默认参数
function greet(name: string = "Guest", age?: number): string {
  return `Hello, ${name}${age ? ", age " + age : ""}`;
}

console.log("add(2, 3):", add(2, 3));
console.log(greet("Alice", 20));
console.log(greet());
