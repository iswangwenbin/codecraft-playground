// 16_async_await.rs
// 主题：Rust 中的异步编程（async/await）
// 本示例演示 Rust 的 async/await 基本用法。
// 需要在 Cargo.toml 添加 tokio 依赖：tokio = { version = "1", features = ["full"] }

use tokio::time::{sleep, Duration};

// 异步函数
def async say_hello() {
    sleep(Duration::from_secs(1)).await;
    println!("Hello from async function!");
}

#[tokio::main]
async fn main() {
    println!("异步 main 函数开始");
    say_hello().await;
    println!("异步 main 函数结束");
} 