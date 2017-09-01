import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Button waves='light'>
					<Icon>thumb_up</Icon>
				</Button>
			</div>
		);
	}
}

export default App;
