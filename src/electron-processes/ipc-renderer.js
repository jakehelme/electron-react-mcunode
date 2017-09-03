const message = require('./../messages');
let window;

function initialize(mainWindow) {
	window = mainWindow;
}

function sendMqttStatus(connected) {
	window.webContents.send(message.MQTT_BROKER_STATUS, connected);
}

function sendNodeMcuStatus(connected) {
	window.webContents.send(message.NODEMCU_STATUS, connected);
}

module.exports = {
	initialize,
	sendMqttStatus,
	sendNodeMcuStatus
};
