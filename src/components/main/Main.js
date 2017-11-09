import React, { Component } from 'react';
import {Layout} from 'antd';
import '../../../styles/main-content.css';
import LandingPicture from './LandingPicture';
import Introduction from './Introduction';
import WorkFlow from './WorkFLow';
import { Button } from 'antd';
import '../../../styles/main-content.css';
import ModalVideo from 'react-modal-video';
import '../../../styles/modal-video.min.css';
const {Content} = Layout;

class Main extends Component {
	componentWillMount(){
		this.state = {
			isOpen:false
		}
	}
	handleVideo(){
		this.setState({
			isOpen:true
		})
	}
	render(){
		return(
			<Content>
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='IDgf-qXlNvM' onClose={() => this.setState({isOpen: false})} />
				<LandingPicture/>
				<div className="carousel-reminder-div">
					<p className="landing-picture-lg-title">VOICE THE NEXT GENERATION OF CONTROL</p>
					<p className="landing-picture-sm-title">Your Home&Electronics, under your Command</p>
					<Button onClick={this.handleVideo.bind(this)} icon="play-circle" className="watch-video-button" type="primary">Watch Video</Button>
				</div>
				<Introduction/>
				<WorkFlow/>
			</Content>
		)
	}
}
export default Main;