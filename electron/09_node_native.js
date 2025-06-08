// 09_node_native.js
// 主题：使用 Node.js API 与原生模块
// 本示例演示如何在 Electron 中使用 Node.js 内置模块

const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const os = require("os");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");

  // 使用 Node.js API
  console.log("主目录:", os.homedir());
  fs.writeFileSync("test.txt", "Hello from Node.js API!");
}

app.whenReady().then(createWindow);
