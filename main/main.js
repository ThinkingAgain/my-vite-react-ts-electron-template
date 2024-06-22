"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const node_path_1 = __importDefault(require("node:path"));
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: node_path_1.default.join(__dirname, 'preload.js')
        }
    });
    // 加载应用 --打包react应用后
    win.loadFile(node_path_1.default.join(__dirname, '../dist/index.html'));
    // 加载应用 --开发调试react应用时
    // 因为我们是加载的react生成的页面, 并不是静态页面
    // 所以loafFile换成loadURL
    //win.loadURL('http://localhost:5173')
    // 解决应用启动白屏问题
    /*win.on('ready-to-show', () => {
        win.show();
        win.focus();
    })*/
};
electron_1.app.whenReady().then(() => {
    electron_1.ipcMain.handle('ping', () => 'pong');
    createWindow();
    electron_1.app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
});
