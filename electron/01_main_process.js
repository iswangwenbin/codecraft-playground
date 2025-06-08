// 01_main_process.js
// 主题：Electron 项目结构与主进程基础
// 本示例演示如何创建主进程并打开一个窗口

const { app, BrowserWindow } = require("electron");

function createWindow() {
  // 创建一个新的浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // 加载本地 HTML 文件或远程 URL
  win.loadFile("index.html");
}

// Electron 初始化完成后创建窗口
app.whenReady().then(createWindow);

// 所有窗口关闭时退出应用（macOS 除外）
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// macOS 上点击 Dock 图标时重新创建窗口
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
