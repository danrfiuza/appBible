const { app,  BrowserWindow,ipcMain, IpcMessageEvent} = require('electron');

let win;

function createWindow () {
     win = new BrowserWindow({
        resizable: true,
        fullscreen: false,
        maximizable: true,
        icon : `file://${__dirname}/dist/assets/logo.png`
     });

  win.loadURL(`file://${__dirname}/dist/index.html`)

  win.webContents.openDevTools();

  win.on('closed', function(){
    win = null
  });
}

ipcMain.on('goFullScreen', (event) => {
  if (win.isFullScreen()){
      win.setFullScreen(false);

  }else{
    win.setFullScreen(true);
  }
});

app.on('ready',createWindow);

app.on('window-all-closed',function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if(win == null) {
    createWindow();
  }
});
