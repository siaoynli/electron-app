const { ipcMain } = require('electron')
import { autoUpdater } from 'electron-updater'

export default function handleUpdate(win) {
  //是否自动下载，默认设置为不自动下载
  autoUpdater.autoDownload = false

  //设置更新路径
  autoUpdater.setFeedURL('http://192.168.0.148:9091')

  // 更新发生错误时触发
  autoUpdater.on('error', (error) => {
    win.webContents.send('message', '更新出错')
    win.webContents.send('installErr', error)
  })

  //检查更新是否已开始时发出
  autoUpdater.on('checkingForUpdate', () => {
    win.webContents.send('message', '正在检查更新。。。')
  })

  //检查应用可以更新，不自动下载
  autoUpdater.on('update-available', (e, info) => {
    win.webContents.send('message', '应用可以更新')
    win.webContents.send('updateAvailable', info)
  })


  //检查应用没有新版本
  autoUpdater.on('update-not-available', () => {
    win.webContents.send('message', '应用没有更新')
  })

  //应用下载完成事件
  autoUpdater.on('update-downloaded', (event) => {
    win.webContents.send('message', '下载完成事件')
    win.webContents.send('requestInstall', event)
  })

  //应用下载进度条事件
  autoUpdater.on('download-progress', (progressObj) => {
    win.webContents.send('message', '应用下载中')
    let info = {
      bytesPerSecond: progressObj.bytesPerSecond,
      percent: progressObj.percent,
      transferred: progressObj.transferred,
      total: progressObj.total
    }
    win.webContents.send('downloadProgress', info)
  })

  //安装前的事件
  autoUpdater.on('before-quit-for-update', () => {
    win.webContents.send('message', '正在安装请稍后')
  })

  //询问服务器是否有更新。 使用该 API 前必须先调用 setFeedURL
  //查看是否有更新事件
  ipcMain.on('checkForUpdate', () => {
    console.log('检查更新')
    //将制动下载设置为false
    autoUpdater.autoDownload = false
    autoUpdater.checkForUpdates()
    win.webContents.send('message', '正在检查更新')
  })

  //  手动下载事件
  ipcMain.on('download', () => {
    //将制动下载设置为true
    autoUpdater.autoDownload = true
    autoUpdater.checkForUpdates().then(() => {})
  })

  //确定安装事件
  ipcMain.on('installApp', () => {
    autoUpdater.quitAndInstall()
  })
}
