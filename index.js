const electron = require('electron')

const { app, BrowserWindow } = electron

app.on('ready', ()=> {
  console.log("First Electron App has Started Running")
  new BrowserWindow({})
})

app.on('quit', ()=> {
  console.log("App has been Closed")
})