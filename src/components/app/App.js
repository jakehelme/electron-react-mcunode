import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { ChromePicker } from 'react-color';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div id="app">
				<div id="picker-container">
					<ChromePicker disableAlpha={true} />
				</div>
				<Button waves='light'>hit it!
					<Icon right>send</Icon>
				</Button>
			</div>
		);
	}
}

export default App;
