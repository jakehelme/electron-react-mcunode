const mqtt = require('mqtt');
const ipcRenderer = require('./ipc-renderer');
let isConnected = false;
let client;
let mainWindow;

function connect(window) {
	mainWindow = window;
	// eslint-disable-next-line
	console.log('Connecting...');
	client = mqtt.connect('mqtt://localhost:1883');

	client.on('connect', function () {
		// eslint-disable-next-line
		console.log('Connected to MQTT Broker');
		isConnected = true;
		ipcRenderer.sendMqttStatus(mainWindow, isConnected);
	});

	client.on('reconnect', function () {
		// eslint-disable-next-line
		console.log('Reconnecting...');
		isConnected = false;
	});

	client.on('offline', function () {
		// eslint-disable-next-line
		console.log('Offline');
		isConnected = false;
		ipcRenderer.sendMqttStatus(mainWindow, isConnected);
	});

	client.on('error', function () {
		// eslint-disable-next-line
		console.log('Could not connect');
		isConnected = false;
	});
}

function publish(topic, message) {
	client.publish(topic, message);
}

module.exports = {
	connect,
	publish,
	isConnected: () => {return isConnected;}
};
