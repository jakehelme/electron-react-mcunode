let window;

function initialize(mainWindow) {
	window = mainWindow;
}

function sendMqttStatus(connected) {
	console.log('sending');
	window.webContents.send('MQTT_BROKER_STATUS', connected);
}

module.exports = {
	initialize,
	sendMqttStatus
};
