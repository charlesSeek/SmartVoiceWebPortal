import React, { Component } from 'react';
import {Row,Col,Button} from 'antd';
import {connect} from 'react-redux';
import RoomDetailTable from './RoomDetailTable';
import '../../../styles/room-detail.css';

class RoomDetail  extends Component {
	render(){
		return(
			<div className="room-detail-div">
				<p className="room-detail-title">Room Details</p>
				<div className="room-detail-content">
					<Button 
						type="primary"
					>
						Add
					</Button>
					<Button 
						type="primary"
					>
						Scenes
					</Button>
				</div>
				<RoomDetailTable/>
			</div>
		)
	}
}

export default RoomDetail;