import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // 加载应用 --打包react应用后
    //win.loadFile(path.join(__dirname, '../dist/index.html'))

    // 加载应用 --开发调试react应用时
    // 因为我们是加载的react生成的页面, 并不是静态页面
    // 所以loafFile换成loadURL
    win.loadURL('http://localhost:5173')

    // 解决应用启动白屏问题
    /*win.on('ready-to-show', () => {
        win.show();
        win.focus();
    })*/

}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')

    createWindow();

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    })
})