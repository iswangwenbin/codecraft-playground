// 02_renderer_process.js
// 主题：渲染进程与网页集成
// 本示例演示如何在渲染进程中操作 DOM

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    alert("Hello from renderer process!");
  });
});

// index.html 示例：
// <button id="btn">点击我</button>
