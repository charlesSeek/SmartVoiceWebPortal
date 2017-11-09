import React, { Component } from 'react';
import '../../../styles/introduction.css';

class Introduction extends Component {
	render(){
		return (
			<div className="introduction-div">
				<h1>What is Smart Voice?</h1>
				<p className="animation" data-animation="zoomIn">
				Until now smart home control has always required contact with 
				a physical device, be it a switch, app or remote. Smart Voice finally 
				removes this need enabling control in the most natural, intuitive and
				convenient way, via Voice. Providing voice control for a range of home 
				automation systems, Smart Voice changes any smart home into the home of 
				the future, using an always listening smart speaker. With simple and 
				adaptable commands, Smart Voice can operate virtually any device, 
				system or appliance.</p>
			</div>
		)
	}
}
export default Introduction;