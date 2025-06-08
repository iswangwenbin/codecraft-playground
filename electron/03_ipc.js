// 03_ipc.js
// 主题：主进程与渲染进程通信（IPC）
// 本示例演示如何使用 ipcMain 和 ipcRenderer 进行进程间通信

// 主进程部分
// main.js
const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.loadFile("ipc.html");
}

app.whenReady().then(createWindow);

ipcMain.on("message-from-renderer", (event, arg) => {
  console.log("收到渲染进程消息:", arg);
  event.reply("reply-from-main", "主进程已收到: " + arg);
});

// 渲染进程部分
// ipc.html 中的 <script> 标签或 renderer.js
// const { ipcRenderer } = require('electron');
document.getElementById("sendBtn").onclick = () => {
  window
    .require("electron")
    .ipcRenderer.send("message-from-renderer", "你好，主进程！");
};
window.require("electron").ipcRenderer.on("reply-from-main", (event, arg) => {
  alert(arg);
});
// ipc.html 示例：
// <button id="sendBtn">发送消息到主进程</button>
