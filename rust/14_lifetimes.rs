// 14_lifetimes.rs
// 主题：生命周期（lifetimes）
// 本示例演示 Rust 中生命周期标注的基本用法。

// 带生命周期参数的函数
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = String::from("hello");
    let s2 = String::from("world!");
    let result = longest(&s1, &s2);
    println!("较长的字符串是: {}", result);

    // 生命周期标注确保引用的有效性
    // fn invalid<'a>(x: &'a str) -> &'a str {
    //     let s = String::from("temp");
    //     &s // 这一行会报错，s 在函数结束后被释放
    // }
} 