// 10_framework_integration.js
// 主题：Electron 与前端框架集成（如 React/Vue/Angular）
// 本示例演示如何将 Electron 与前端框架集成

// 1. 使用 create-react-app、vue-cli 或 angular-cli 创建前端项目
// 2. 构建前端项目（如 npm run build），将生成的 dist 或 build 目录作为 Electron 的加载入口
// 3. 在主进程中加载前端构建产物

const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600 });
  // 以 React 为例，加载 build/index.html
  win.loadFile(path.join(__dirname, "build", "index.html"));
}

app.whenReady().then(createWindow);

// 详细集成步骤请参考官方文档或相关脚手架文档
