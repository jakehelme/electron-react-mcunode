import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { ChromePicker } from 'react-color';
import { ipcRenderer } from 'electron';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';

// const electron = window.require('electron');
// // eslint-disable-next-line no-unused-vars
// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: {
				r: 0,
				g: 0,
				b: 0
			}
		};
	}

	handleColourChange(color) {
		this.setState({ color: color.rgb });
	}

	handleSend() {
		// eslint-disable-next-line no-console
		console.log('sending to electron');
		ipcRenderer.send('async', 1);
	}

	render() {
		return (
			<div id="app">
				<div id="picker-container">
					<ChromePicker
						color={this.state.color}
						onChange={(color) => { this.handleColourChange(color); }}
						disableAlpha={true} />
				</div>
				{/* <Button className="color-change-button" waves='light'>hit it! */}
				<Button
					onClick={() => { this.handleSend();}}
					style={{ backgroundColor: `rgb(${this.state.color.r},${this.state.color.g},${this.state.color.b})` }}
					waves='light'
					large
				>
					<span>hit it!</span>
					<Icon right>send</Icon>
				</Button>
			</div>
		);
	}
}

export default App;
