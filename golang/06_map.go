// 06_map.go
// 主题：映射（map）
// 本示例演示 Go 语言中的 map 的基本用法。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import "fmt"

func main() {
    // 创建 map
    m := make(map[string]int)
    m["Alice"] = 90
    m["Bob"] = 85
    fmt.Println("map:", m)

    // 访问和判断键是否存在
    score, ok := m["Alice"]
    if ok {
        fmt.Println("Alice 的分数:", score)
    }

    // 遍历 map
    for name, score := range m {
        fmt.Println(name, ":", score)
    }
} 