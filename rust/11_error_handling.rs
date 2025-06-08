// 11_error_handling.rs
// 主题：错误处理
// 本示例演示 Rust 中的错误处理，包括 panic、Result 和 Option。

use std::fs::File;
use std::io::{self, Read};

fn main() {
    // panic! 宏：遇到不可恢复错误时终止程序
    // panic!("发生致命错误");

    // Option 用于可选值
    let some_number = Some(10);
    match some_number {
        Some(n) => println!("有值: {}", n),
        None => println!("无值"),
    }

    // Result 用于可恢复错误
    match read_file_content("not_exist.txt") {
        Ok(content) => println!("文件内容: {}", content),
        Err(e) => println!("读取文件出错: {}", e),
    }
}

fn read_file_content(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut content = String::new();
    file.read_to_string(&mut content)?;
    Ok(content)
} 