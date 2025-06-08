// 12_exception.ts
// 主题：异常处理
// 本示例演示 TypeScript 中的异常处理（try/catch/finally）。

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("除数不能为0");
  }
  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2));
  console.log("10 / 0 =", divide(10, 0));
} catch (e) {
  console.error("捕获到异常:", (e as Error).message);
} finally {
  console.log("无论是否异常都会执行");
}
