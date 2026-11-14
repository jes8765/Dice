const { app } = require('electron');
const { createPetWindow } = require('./windowManager');

app.whenReady().then(() => {
  createPetWindow();

  app.on('activate', () => {
    if (require('electron').BrowserWindow.getAllWindows().length === 0) {
      createPetWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});