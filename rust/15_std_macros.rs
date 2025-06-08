// 15_std_macros.rs
// 主题：常用标准库函数与实用宏
// 本示例演示 Rust 常用标准库函数和宏的用法。

fn main() {
    // println! 宏：输出到控制台
    println!("Hello, Rust!");

    // vec! 宏：创建 Vec
    let v = vec![1, 2, 3];
    println!("Vec: {:?}", v);

    // dbg! 宏：调试输出
    let x = 42;
    dbg!(x);

    // 常用标准库函数
    let s = "rust".to_uppercase();
    println!("大写: {}", s);

    let n = i32::from_str_radix("2A", 16).unwrap();
    println!("16 进制 2A 转为十进制: {}", n);
} 