const { app, BrowserWindow } = require('electron')

function createWindow () {
  const window = new BrowserWindow({ width: 1280, height: 1024 })
  window.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)
