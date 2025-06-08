// 01_variables_constants.go
// 主题：变量与常量
// 本示例演示 Go 语言中变量和常量的声明与使用。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

func main() {
    // 变量声明
    var a int = 10
    var b = 20 // 类型推断
    c := 30    // 简短声明
    fmt.Println("a:", a, "b:", b, "c:", c)

    // 常量声明
    const PI float64 = 3.14159
    fmt.Println("常量 PI:", PI)
} 