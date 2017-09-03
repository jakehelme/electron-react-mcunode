const electron = require('electron');
const ipcMain = electron.ipcMain;
const mqtt = require('./mqtt');

function registerListeners() {
	ipcMain.on('async', (event) => {
		// eslint-disable-next-line no-console
		event.sender.send('MQTT_CONNECTED', mqtt.isConnected());
	});
}

module.exports = {
	registerListeners
};
