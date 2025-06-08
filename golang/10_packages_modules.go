// 10_packages_modules.go
// 主题：包与模块管理
// 本示例演示 Go 语言中的包和模块的基本用法。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import (
	"fmt"
	"math"
)

func main() {
    fmt.Println("math.Pi =", math.Pi)
    // Go 的包管理通常通过 go mod init、go get 等命令实现
    // 具体请参考官方文档：https://golang.org/doc/go1.11#modules
} 