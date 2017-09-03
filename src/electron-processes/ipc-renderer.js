
function sendMqttStatus(window, connected) {
	window.webContents.send('MQTT_CONNECTED', connected);
}

module.exports = {
	sendMqttStatus
};
