const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('diceAPI', {
  platform: process.platform,
});