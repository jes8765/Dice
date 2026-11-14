const { BrowserWindow, screen } = require('electron');
const path = require('path');

function createPetWindow() {
  const { workArea } = screen.getPrimaryDisplay();

  const width = 160;
  const height = 160;

  const petWindow = new BrowserWindow({
    width,
    height,

    x: workArea.x + workArea.width - width - 20,
    y: workArea.y + workArea.height - height - 20,

    frame: false,
    transparent: true,
    backgroundColor: '#00000000',

    resizable: false,
    hasShadow: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    show: false,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  petWindow.once('ready-to-show', () => {
    petWindow.show();
  });

  petWindow.webContents.openDevTools({
  mode: 'detach',
  });

  if (require('electron').app.isPackaged) {
  petWindow.loadFile(path.join(__dirname, '../dist/index.html'));
} else {
  petWindow.loadURL('http://127.0.0.1:5173');
}

  return petWindow;
}

module.exports = { createPetWindow };