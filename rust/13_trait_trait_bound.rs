// 13_trait_trait_bound.rs
// 主题：Trait 与 Trait Bound
// 本示例演示 Rust 中 trait 的定义、实现和 trait bound 的用法。

// 定义一个 trait
trait Summary {
    fn summarize(&self) -> String;
}

// 为结构体实现 trait
struct Article {
    title: String,
    author: String,
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{} by {}", self.title, self.author)
    }
}

// 带 trait bound 的泛型函数
fn notify<T: Summary>(item: &T) {
    println!("通知: {}", item.summarize());
}

fn main() {
    let article = Article {
        title: String::from("Rust 学习指南"),
        author: String::from("Owen"),
    };
    notify(&article);
} 