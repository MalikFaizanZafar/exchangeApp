const electron = require('electron')

const { app } = electron

app.on('ready', ()=> {
  console.log("First Electron App is Running")
})