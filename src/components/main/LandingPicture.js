import React, { Component } from 'react';
import { Button } from 'antd';
import { Carousel } from 'antd';
import '../../../styles/landing-picture.css';

class LandingPicture extends Component {
	render(){
		return(
			<Carousel
				autoplay
			>
				<div className="landing-picture-1">
				</div>
				<div className="landing-picture-2">
    			</div>
    			<div className="landing-picture-3">
    			</div>
    			<div className="landing-picture-4">
    			</div>
			</Carousel>
		)
	}
}
export default LandingPicture;