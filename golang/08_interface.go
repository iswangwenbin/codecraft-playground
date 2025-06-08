// 08_interface.go
// 主题：接口（interface）
// 本示例演示 Go 语言中接口的定义和实现。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

// 定义接口
type Speaker interface {
    Speak()
}

// 实现接口
type Dog struct{}
func (d Dog) Speak() {
    fmt.Println("汪汪！")
}

type Cat struct{}
func (c Cat) Speak() {
    fmt.Println("喵喵！")
}

func main() {
    var s Speaker
    s = Dog{}
    s.Speak()
    s = Cat{}
    s.Speak()
} 