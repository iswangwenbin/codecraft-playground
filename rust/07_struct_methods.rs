// 07_struct_methods.rs
// 主题：结构体（struct）和方法
// 本示例演示 Rust 中结构体的定义、实例化和为结构体实现方法。

// 定义一个结构体
struct Rectangle {
    width: u32,
    height: u32,
}

// 为结构体实现方法
impl Rectangle {
    // 关联函数（类似静态方法）
    fn new(width: u32, height: u32) -> Self {
        Self { width, height }
    }

    // 实例方法
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    // 实例化结构体
    let rect = Rectangle::new(30, 50);
    println!("矩形: {} x {}", rect.width, rect.height);
    println!("面积: {}", rect.area());
} 