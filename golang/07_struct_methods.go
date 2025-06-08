// 07_struct_methods.go
// 主题：结构体与方法
// 本示例演示 Go 语言中结构体的定义、实例化和方法。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

// 定义结构体
type Person struct {
    Name string
    Age  int
}

// 为结构体定义方法
func (p Person) Greet() {
    fmt.Println("Hello, my name is", p.Name, "and I am", p.Age, "years old.")
}

func main() {
    p := Person{Name: "Tom", Age: 20}
    p.Greet()
} 