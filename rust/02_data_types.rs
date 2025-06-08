// 02_data_types.rs
// 主题：数据类型（标量与复合）
// 本示例演示 Rust 中常见的数据类型，包括标量类型和复合类型。

fn main() {
    // 标量类型：整数、浮点数、布尔值和字符
    let a: i32 = 42; // 32位有符号整数
    let b: f64 = 3.14; // 64位浮点数
    let c: bool = true; // 布尔类型
    let d: char = 'R'; // 字符类型，支持 Unicode
    println!("a: {}, b: {}, c: {}, d: {}", a, b, c, d);

    // 复合类型：元组（tuple）和数组（array）
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (x, y, z) = tup; // 解构
    println!("元组 tup: ({}, {}, {}), 解构后: x={}, y={}, z={}", tup.0, tup.1, tup.2, x, y, z);

    let arr: [i32; 3] = [1, 2, 3]; // 长度为3的整型数组
    println!("数组 arr: [{}, {}, {}]", arr[0], arr[1], arr[2]);
} 