// 06_filesystem_storage.js
// 主题：文件系统与本地存储
// 本示例演示如何在主进程中读写文件

const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({ width: 600, height: 400 });
  win.loadFile("index.html");

  // 写入文件
  const filePath = path.join(app.getPath("userData"), "test.txt");
  fs.writeFileSync(filePath, "Hello, Electron!");

  // 读取文件
  const content = fs.readFileSync(filePath, "utf-8");
  console.log("文件内容:", content);
}

app.whenReady().then(createWindow);
