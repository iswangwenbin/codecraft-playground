// 05_ownership_borrowing.rs
// 主题：所有权与借用（ownership, borrowing）
// 本示例演示 Rust 的所有权规则、移动、克隆和借用。

fn main() {
    // 所有权转移（move）
    let s1 = String::from("hello");
    let s2 = s1; // s1 的所有权被转移给 s2，s1 失效
    // println!("s1: {}", s1); // 这一行会报错，s1 已无效
    println!("s2: {}", s2);

    // 克隆（clone）
    let s3 = String::from("world");
    let s4 = s3.clone(); // 深拷贝，s3 依然有效
    println!("s3: {}, s4: {}", s3, s4);

    // 借用（引用）
    let s5 = String::from("borrow");
    print_str(&s5); // 传递不可变引用，s5 依然有效
    println!("s5: {}", s5);

    // 可变借用
    let mut s6 = String::from("mut");
    change_str(&mut s6);
    println!("s6: {}", s6);
}

fn print_str(s: &String) {
    println!("print_str: {}", s);
}

fn change_str(s: &mut String) {
    s.push_str(" changed");
} 