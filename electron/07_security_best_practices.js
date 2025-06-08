// 07_security_best_practices.js
// 主题：Electron 安全性最佳实践
// 本示例演示如何设置 Electron 应用的安全选项

const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // 禁用 Node 集成
      contextIsolation: true, // 启用上下文隔离
      enableRemoteModule: false, // 禁用 remote 模块
      sandbox: true, // 启用沙箱
    },
  });
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

// 更多安全建议请参考官方文档：https://www.electronjs.org/docs/latest/tutorial/security
