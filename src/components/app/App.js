import React, { Component } from 'react';
import { Button, Icon, Row, Col, Card } from 'react-materialize';
import { ChromePicker } from 'react-color';
import { ipcRenderer } from 'electron';
import messages from './../../messages';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: '#000000',
			mqttBrokerConnected: false,
			nodeMcuConnected: false
		};
	}

	componentDidMount() {
		ipcRenderer.on(messages.MQTT_BROKER_STATUS, (event, arg) => {
			this.setState({mqttBrokerConnected: arg});
			if(arg){
				ipcRenderer.send(messages.NODEMCU_STATUS);
			}
		});

		ipcRenderer.on(messages.NODEMCU_STATUS, (event, arg) => {
			this.setState({nodeMcuConnected: arg});
		});

		ipcRenderer.send(messages.MQTT_BROKER_STATUS);
	}

	handleColourChange(color) {
		this.setState({ color: color.hex });
	}

	dispatchChangeColor() {
		ipcRenderer.send(messages.NODEMCU_SET_COLOR, this.state.color.substr(1,6));
	}

	render() {
		const { mqttBrokerConnected, nodeMcuConnected } = this.state;
		return (
			<div>
				<Row>
					<Col m={6} s={12}>
						<Card
							className={ mqttBrokerConnected && nodeMcuConnected ? 'green darken-3' : 'red darken-3' }
							title='Connection Status'
							textClassName='white-text'
						>
							<p>MQTT Broker: { mqttBrokerConnected ? 'Connected' : 'Disconnected' }</p>
							<p>Node MCU: { nodeMcuConnected ? 'Connected' : 'Disconnected' }</p>
						</Card>
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
					onClick={() => { this.dispatchChangeColor(); }}
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
