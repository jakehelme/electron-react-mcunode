let mqtt = require('./mqtt');
let ipcMain = require('./ipc-main');
let ipcRenderer = require('./ipc-renderer');

function initializeProcesses(mainWindow) {
	ipcMain.registerListeners();
	ipcRenderer.initialize(mainWindow);
	mqtt.connect();
}

module.exports = { initializeProcesses };
