// 04_control_flow.go
// 主题：流程控制（if、for、switch）
// 本示例演示 Go 语言中的 if、for、switch 语句。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

func main() {
    // if 语句
    x := 7
    if x < 5 {
        fmt.Println("x 小于 5")
    } else {
        fmt.Println("x 大于等于 5")
    }

    // for 循环
    for i := 0; i < 3; i++ {
        fmt.Println("for 循环 i:", i)
    }

    // switch 语句
    day := 3
    switch day {
    case 1:
        fmt.Println("星期一")
    case 2:
        fmt.Println("星期二")
    case 3:
        fmt.Println("星期三")
    default:
        fmt.Println("其他")
    }
} 