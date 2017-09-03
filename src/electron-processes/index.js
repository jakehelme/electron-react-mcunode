let mqtt = require('./mqtt');
let ipcMain = require('./ipc-main');
// let ipcRenderer = require('./ipc-renderer');

function initializeProcesses(mainWindow) {
	mqtt.connect(mainWindow);
	ipcMain.registerListeners();

}

module.exports = { initializeProcesses };
