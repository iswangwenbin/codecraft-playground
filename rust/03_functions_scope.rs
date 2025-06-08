// 03_functions_scope.rs
// 主题：函数与作用域
// 本示例演示 Rust 中函数的定义、参数、返回值以及作用域的概念。

// 定义一个函数，带有参数和返回值
def add(x: i32, y: i32) -> i32 {
    x + y // 表达式作为返回值，无需分号
}

fn main() {
    let result = add(2, 3);
    println!("2 + 3 = {}", result);

    // 作用域示例
    let outer = 10;
    {
        let inner = 5;
        println!("内部作用域: outer = {}, inner = {}", outer, inner);
    }
    // println!("inner: {}", inner); // 这一行会报错，inner 只在内部作用域有效
    println!("外部作用域: outer = {}", outer);
} 