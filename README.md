# Electron + React + TypeScript + Vite

这个模板以vite-react-ts为基础创建, 增加electron支持, 采用electron forge作为打包工具.

## 项目结构

- react代码位于src目录
- electron代码位于electron目录, 使用TypeScript, 调试时先编译生成js, 放在main目录中
- 打包应用会自动生成out目录

## 调试

- 同时调试electron和react 

```js
///electorn/main.ts

// 加载应用 --开发调试react应用时
// 因为我们是加载的react生成的页面, 并不是静态页面
// 所以loafFile换成loadURL
win.loadURL('http://localhost:5173')
```
执行如下命令进行调试
```js
npm run dev:electron
```
- 只调试electron
  
```js
///先build react
npm run build:react

/// 修改 electorn/main.ts

// 加载应用 --打包react应用后
win.loadFile(path.join(__dirname, '../dist/index.html'))

/// 执行如下命令进行调试
npm run dev:electron
```

## 打包
```js
///执行打包命令, 生成目录为out
npm run make
```