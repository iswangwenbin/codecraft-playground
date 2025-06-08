// 03_functions_scope.go
// 主题：函数与作用域
// 本示例演示 Go 语言中函数的定义、参数、返回值和作用域。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

// 定义一个带参数和返回值的函数
func add(x int, y int) int {
    return x + y
}

func main() {
    result := add(3, 5)
    fmt.Println("3 + 5 =", result)

    // 作用域示例
    x := 10
    {
        y := 20
        fmt.Println("内部作用域: x =", x, ", y =", y)
    }
    // fmt.Println(y) // 这一行会报错，y 只在内部作用域有效
    fmt.Println("外部作用域: x =", x)
} 