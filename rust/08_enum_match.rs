// 08_enum_match.rs
// 主题：枚举与模式匹配
// 本示例演示 Rust 中枚举的定义、使用和 match 模式匹配。

// 定义一个枚举
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

fn describe_direction(dir: Direction) {
    // 使用 match 进行模式匹配
    match dir {
        Direction::Up => println!("方向：上"),
        Direction::Down => println!("方向：下"),
        Direction::Left => println!("方向：左"),
        Direction::Right => println!("方向：右"),
    }
}

fn main() {
    let dir = Direction::Left;
    describe_direction(dir);

    // Option 枚举的 match 用法
    let maybe_num = Some(5);
    match maybe_num {
        Some(n) => println!("有值: {}", n),
        None => println!("无值"),
    }
} 