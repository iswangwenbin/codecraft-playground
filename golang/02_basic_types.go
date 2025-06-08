// 02_basic_types.go
// 主题：基本数据类型
// 本示例演示 Go 语言中的常用基本数据类型。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

func main() {
    var a int = 10
    var b float64 = 3.14
    var c bool = true
    var d string = "hello"
    fmt.Println("int:", a, "float64:", b, "bool:", c, "string:", d)
} 