import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import { ChromePicker } from 'react-color';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';

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

	render() {
		return (
			<div id="app">
				<div id="picker-container">
					<ChromePicker
						color={this.state.color}
						onChange={(color) => {this.handleColourChange(color);}}
						disableAlpha={true} />
				</div>
				{/* <Button className="color-change-button" waves='light'>hit it! */}
				<Button
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
