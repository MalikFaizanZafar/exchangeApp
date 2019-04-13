const electron = require('electron')

const { app, BrowserWindow } = electron

app.on('ready', ()=> {
  console.log("First Electron App has Started Running")
  const HomeWindow = new BrowserWindow({})
  // HomeWindow.loadURL(`https://freecoursesite.com/`)
  HomeWindow.loadURL(`file://${__dirname}/index.html`)
})

app.on('quit', ()=> {
  console.log("App has been Closed")
})