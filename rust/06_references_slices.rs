// 06_references_slices.rs
// 主题：引用与切片（references and slices）
// 本示例演示 Rust 中引用的用法和切片类型（字符串切片、数组切片）。

fn main() {
    // 引用（reference）
    let x = 10;
    let y = &x; // y 是 x 的引用
    println!("x: {}, y: {}", x, y);

    // 字符串切片（string slice）
    let s = String::from("hello world");
    let hello = &s[0..5]; // 取前 5 个字节
    let world = &s[6..]; // 从第 6 个字节到结尾
    println!("s: {}, hello: {}, world: {}", s, hello, world);

    // 数组切片（array slice）
    let arr = [1, 2, 3, 4, 5];
    let slice = &arr[1..4]; // 取第 2 到第 4 个元素
    println!("arr: {:?}, slice: {:?}", arr, slice);
} 