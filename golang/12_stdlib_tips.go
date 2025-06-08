// 12_stdlib_tips.go
// 主题：常用标准库函数与实用技巧
// 本示例演示 Go 语言常用标准库函数和一些实用技巧。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import (
	"fmt"
	"strings"
	"time"
)

func main() {
    // 字符串处理
    s := "hello,go"
    fmt.Println("大写:", strings.ToUpper(s))

    // 时间处理
    now := time.Now()
    fmt.Println("当前时间:", now.Format("2006-01-02 15:04:05"))

    // 切片复制
    src := []int{1, 2, 3}
    dst := make([]int, len(src))
    copy(dst, src)
    fmt.Println("复制后的切片:", dst)
} 