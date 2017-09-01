import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Button waves='light'>
					<Icon>thumb_up</Icon>
				</Button>
			</div>
		);
	}
}

export default App;
