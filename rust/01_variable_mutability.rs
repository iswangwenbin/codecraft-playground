// 01_variable_mutability.rs
// 主题：变量和可变性
// 本示例演示 Rust 中变量的声明、可变性和常量的用法。

fn main() {
    // 变量默认是不可变的（immutable）
    let x = 5;
    println!("x 的初始值: {}", x);
    // x = 6; // 这一行会报错，因为 x 是不可变的

    // 使用 mut 关键字声明可变变量
    let mut y = 10;
    println!("y 的初始值: {}", y);
    y = 20; // 现在可以修改 y 的值
    println!("y 修改后的值: {}", y);

    // 常量（const）必须指定类型，且始终不可变
    const MAX_POINTS: u32 = 100_000;
    println!("常量 MAX_POINTS: {}", MAX_POINTS);
} 