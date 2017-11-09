import React, { Component } from 'react';
import { Timeline, Icon,Card } from 'antd';
import '../../../styles/work-flow.css';
import diagram from '../../../assets/images/diagram.png'


class WorkFlow extends Component {
	render(){
		return (
			<div className="work-flow-div">
				<h1>How it Works</h1>
				<Timeline
					className="time-line"
				>
    				<Timeline.Item
						className="time-line-item"
						dot={<Icon type="message" style={{fontSize:'32px'}}/>}
    				>
    					<Card 
    						title="Speack a Single Phrase" 
    						className="time-line-card animation"
    						data-animation = "fadeInRight"
    					>
      						<p>Smart Voice connects with a range of automation systems, 
      						providing voice control of almost any device within your 
      						smart home.</p>
    					</Card>
    				</Timeline.Item>
    				<Timeline.Item
    					className="time-line-item"
    					dot={<Icon type="bulb" style={{fontSize:'32px'}}/>}
    				>
    					<Card 
    						title="Your Devices React" 
    						className="time-line-card animation"
    						data-animation = "fadeInRight"
    					>
      						<p>Smart Voice can turn on the lights, open the blinds, 
      						set the temperature, control your TV & AV systems or 
      						even make you a coffee.</p>
    					</Card>
    				</Timeline.Item>
    				<Timeline.Item 
    					className="time-line-item"
    					dot={<Icon type="sound" style={{fontSize:'32px'}}/>}
    				>
    					<Card 
    						title="Get Feedback" 
    						className="time-line-card animation"
    						data-animation = "fadeInUp"
    					>
      						<p>Smart Voice can also provide feedback from your 
      						smart devices, such as how much energy you are using 
      						or the current temperature.</p>
    					</Card>
    				</Timeline.Item>
    				<Timeline.Item 
    					className="time-line-item"
    					dot={<Icon type="check-circle-o" style={{fontSize:'32px'}}/>}
    				>
    				</Timeline.Item>
  				</Timeline>
  				<img className="work-flow-image" src = {diagram}/>
			</div>
		)
	}
}
export default WorkFlow;