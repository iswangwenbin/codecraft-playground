// 10_modules_packages.rs
// 主题：模块系统和包管理
// 本示例演示 Rust 的模块定义、使用和包管理的基本概念。

// 定义一个模块
mod math {
    // 公有函数
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    // 私有函数（默认）
    fn sub(a: i32, b: i32) -> i32 {
        a - b
    }
}

fn main() {
    // 使用模块中的公有函数
    let sum = math::add(2, 3);
    println!("2 + 3 = {}", sum);
    // let diff = math::sub(5, 2); // 这一行会报错，sub 是私有的

    // 包管理（Cargo）
    // 通常在项目根目录下使用 Cargo.toml 管理依赖
    // 例如: 在 Cargo.toml 添加依赖
    // [dependencies]
    // rand = "0.8"
    println!("包管理请参考 Cargo.toml 文件和 cargo 命令");
} 