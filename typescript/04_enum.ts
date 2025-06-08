// 04_enum.ts
// 主题：枚举（enum）
// 本示例演示 TypeScript 中枚举的定义和使用。

// 数字枚举
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// 字符串枚举
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let dir: Direction = Direction.Left;
let color: Color = Color.Green;

console.log("dir:", dir);
console.log("color:", color);
