//Greeter.js
import React, { Component } from 'react';
import config from './config.json';

class Greeter extends Component {
	render() {
		return (
	<div>
		<p>Hello React</p>
		{config.greetText}
	</div>
		);
	}
}

export default Greeter;
