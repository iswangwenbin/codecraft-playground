// 04_window_management.js
// 主题：窗口管理（BrowserWindow 的创建与操作）
// 本示例演示如何在主进程中创建和管理多个窗口

const { app, BrowserWindow } = require("electron");

let mainWindow;
let childWindow;

function createWindows() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile("index.html");

  // 创建子窗口
  childWindow = new BrowserWindow({
    parent: mainWindow,
    width: 400,
    height: 300,
  });
  childWindow.loadFile("child.html");
}

app.whenReady().then(createWindows);

app.on("window-all-closed", () => {
  app.quit();
});
