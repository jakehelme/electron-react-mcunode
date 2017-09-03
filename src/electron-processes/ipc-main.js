const electron = require('electron');
const ipcMain = electron.ipcMain;
const mqtt = require('./mqtt');
const message = require('./../messages');

function registerListeners() {
	ipcMain.on(message.MQTT_BROKER_STATUS, (event) => {
		event.sender.send(message.MQTT_BROKER_STATUS, mqtt.isConnected());
	});

	ipcMain.on(message.NODEMCU_STATUS, (event) => {
		event.sender.send(message.NODEMCU_STATUS, mqtt.isNodeMcuConnected());
	});

	ipcMain.on(message.NODEMCU_SET_COLOR, (event, arg) => {
		mqtt.publish('cmnd/neo/hex', arg);
	});

}

module.exports = {
	registerListeners
};
