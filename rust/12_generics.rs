// 12_generics.rs
// 主题：泛型（generics）
// 本示例演示 Rust 中泛型函数和泛型结构体的用法。

// 泛型函数
def largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

// 泛型结构体
struct Point<T> {
    x: T,
    y: T,
}

fn main() {
    let numbers = vec![1, 3, 2, 5, 4];
    println!("最大值: {}", largest(&numbers));

    let p = Point { x: 1.0, y: 2.0 };
    println!("Point: ({}, {})", p.x, p.y);
} 