// 08_auto_update_packaging.js
// 主题：自动更新与打包发布
// 本示例演示如何在主进程中集成自动更新（需配合 electron-updater）

const { app, BrowserWindow } = require("electron");
// const { autoUpdater } = require('electron-updater'); // 需安装 electron-updater

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("index.html");

  // 自动更新（伪代码，需配置服务器）
  // autoUpdater.checkForUpdatesAndNotify();
}

app.whenReady().then(createWindow);

// 打包发布可使用 electron-builder 或 electron-forge
// 详细文档：https://www.electron.build/
