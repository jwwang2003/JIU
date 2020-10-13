const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const electron = require('electron'),
ipc = electron.ipcMain;

const windowSizes = [
  { width: 350, height: 500 },
  { width: 1000, height: 600 },
];

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 500,
    show: false,
    resizable: false,
    webPreferences: { nodeIntegration: true },
  });
  const startURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  mainWindow.loadURL(startURL);

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  mainWindow.webContents.openDevTools();
  mainWindow.setMenuBarVisibility(false)
  // setTimeout(() => {
  //   mainWindow.setSize(400, 400, true);
  // }, 4000);
}

ipc.on('test', (event, args) => {
  console.log(args[0]);
  resizeWindow(args[0]);
 });


 ipc.on('test2', (event, args) => {
  console.log(args[0]);

 });
function resizeWindow(mode) {
  if (mode != 0 && mode != 1) return false;
  const windowSize = windowSizes[mode];
  console.log(windowSize);
  mainWindow.setSize(windowSize.width, windowSize.height, true);
  return true;
}

app.on("ready", createWindow);
