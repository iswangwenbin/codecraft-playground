// 11_concurrency.go
// 主题：并发（goroutine、channel）
// 本示例演示 Go 语言中的 goroutine 和 channel。
// 注意：如需运行本文件，请确保同目录下没有其他 main 包的文件。

package main

import (
	"fmt"
	"time"
)

func say(msg string) {
    for i := 0; i < 3; i++ {
        fmt.Println(msg, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // 启动 goroutine
    go say("hello")
    say("world")

    // 使用 channel
    ch := make(chan int)
    go func() {
        ch <- 42
    }()
    value := <-ch
    fmt.Println("从 channel 接收到:", value)
} 