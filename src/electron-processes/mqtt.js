const mqtt = require('mqtt');
const ipcRenderer = require('./ipc-renderer');
let isConnected = false;
let isNodeMcuConnected = false;
let client;

function connect() {

	// eslint-disable-next-line
	console.log('Connecting...');
	client = mqtt.connect('mqtt://localhost:1883');

	client.on('connect', function () {
		// eslint-disable-next-line
		console.log('Connected to MQTT Broker');
		isConnected = true;
		ipcRenderer.sendMqttStatus(isConnected);
		client.subscribe('tele/neo/alive');
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
		ipcRenderer.sendMqttStatus(isConnected);
	});

	client.on('message', function (topic) {
		// message is Buffer
		if(topic === 'tele/neo/alive') {
			isNodeMcuConnected = true;
			ipcRenderer.sendNodeMcuStatus(isNodeMcuConnected);
		}
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
	isConnected: () => {return isConnected;},
	isNodeMcuConnected: () => {return isNodeMcuConnected;}
};
