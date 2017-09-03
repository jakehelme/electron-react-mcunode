const electron = require('electron');
const ipcMain = electron.ipcMain;
const mqtt = require('./mqtt');

function registerListeners() {
	ipcMain.on('MQTT_BROKER_STATUS', (event) => {
		event.sender.send('MQTT_BROKER_STATUS', mqtt.isConnected());
	});

	ipcMain.on('MQTT_NODEMCU_STATUS', (event) => {
		event.sender.send('NODEMCU_STATUS', mqtt.isNodeMcuConnected());
	});

}

module.exports = {
	registerListeners
};
