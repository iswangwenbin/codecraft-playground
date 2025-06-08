// 04_control_flow.rs
// 主题：流程控制
// 本示例演示 Rust 中的 if、loop、while 和 for 循环。

fn main() {
    // if 表达式
    let number = 7;
    if number < 5 {
        println!("小于 5");
    } else {
        println!("大于等于 5");
    }

    // loop 循环
    let mut count = 0;
    loop {
        count += 1;
        if count == 3 {
            println!("loop 计数到 3，跳出循环");
            break;
        }
    }

    // while 循环
    let mut n = 0;
    while n < 3 {
        println!("while 循环: n = {}", n);
        n += 1;
    }

    // for 循环
    for i in 0..3 {
        println!("for 循环: i = {}", i);
    }
} 