// 09_collections.rs
// 主题：常见集合类型及常用操作
// 本示例演示 Rust 标准库中的 Vec、HashMap 等集合类型及其常用操作。

use std::collections::HashMap;

fn main() {
    // Vec（动态数组）
    let mut v = Vec::new();
    v.push(1);
    v.push(2);
    v.push(3);
    println!("Vec: {:?}", v);
    for i in &v {
        println!("Vec 元素: {}", i);
    }

    // HashMap（哈希映射）
    let mut scores = HashMap::new();
    scores.insert(String::from("Alice"), 90);
    scores.insert(String::from("Bob"), 85);
    println!("HashMap: {:?}", scores);
    match scores.get("Alice") {
        Some(score) => println!("Alice 的分数: {}", score),
        None => println!("没有找到 Alice 的分数"),
    }

    // 遍历 HashMap
    for (name, score) in &scores {
        println!("{}: {}", name, score);
    }
} 