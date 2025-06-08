// 05_menu_tray.js
// 主题：菜单与托盘（Menu & Tray）
// 本示例演示如何在主进程中创建应用菜单和系统托盘

const { app, BrowserWindow, Menu, Tray } = require("electron");
let tray = null;

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("index.html");

  // 创建菜单
  const template = [
    { label: "文件", submenu: [{ label: "退出", click: () => app.quit() }] },
    {
      label: "帮助",
      submenu: [
        {
          label: "关于",
          click: () => {
            win.webContents.send("about");
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // 创建托盘
  tray = new Tray("icon.png"); // 请确保有 icon.png 图标
  tray.setToolTip("Electron 教学示例");
  tray.setContextMenu(menu);
}

app.whenReady().then(createWindow);
