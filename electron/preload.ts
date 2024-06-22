import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('versions', {
    text: () => 'hello',
    ping: () => ipcRenderer.invoke('ping')
})