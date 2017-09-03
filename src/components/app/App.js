import React, { Component } from 'react';
import { Button, Icon, Row, Col, Card, CardPanel } from 'react-materialize';
import { ChromePicker } from 'react-color';
import { ipcRenderer } from 'electron';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: '#000000',
			mqttConnected: false
		};
	}

	componentDidMount() {
		ipcRenderer.on('MQTT_BROKER_STATUS', (event, arg) => {
			this.setState({mqttConnected: arg});
		});

		ipcRenderer.send('MQTT_BROKER_STATUS');
	}

	handleColourChange(color) {
		this.setState({ color: color.hex });
	}

	render() {
		const { mqttConnected: connected} = this.state;
		return (
			<div>
				<Row>
					<Col m={6} s={12}>
						<CardPanel className={ connected ? 'green darken-3' : 'red darken-3'}>
							{ connected ? <h5>Connected</h5> : <h5>Disconnected</h5>}
						</CardPanel>
					</Col>
					<Col m={6} s={12}>
						<Card className='blue-grey darken-1' textClassName='white-text'>
							<div id="picker-container">
								<ChromePicker
									color={this.state.color}
									onChange={(color) => { this.handleColourChange(color); }}
									disableAlpha={true}
								/>
							</div>
						</Card>
					</Col>
				</Row>

				<Button
					onClick={() => {  }}
					style={{ backgroundColor: this.state.color }}
					waves='light'
					large
				>
					<span>is connected</span>
					<Icon right>send</Icon>
				</Button>
			</div>
		);
	}
}

export default App;
