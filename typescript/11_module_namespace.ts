// 11_module_namespace.ts
// 主题：模块与命名空间
// 本示例演示 TypeScript 中模块和命名空间的用法。

// 模块（需配合 import/export 使用，通常在多个文件中）
// 这里只做简单说明
export function foo() {
  console.log("foo from module");
}

// 命名空间
namespace MathUtils {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

console.log("MathUtils.add(1, 2):", MathUtils.add(1, 2));
