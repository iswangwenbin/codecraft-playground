// 05_arrays_slices.go
// 主题：数组与切片
// 本示例演示 Go 语言中的数组和切片的基本用法。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

func main() {
    // 数组
    var arr [3]int = [3]int{1, 2, 3}
    fmt.Println("数组:", arr)

    // 切片
    s := []int{4, 5, 6}
    fmt.Println("切片:", s)

    // 切片的追加
    s = append(s, 7)
    fmt.Println("追加后的切片:", s)

    // 切片的切片
    sub := s[1:3]
    fmt.Println("切片的切片:", sub)
} 