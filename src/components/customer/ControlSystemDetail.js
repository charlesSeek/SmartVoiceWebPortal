import React, { Component } from 'react';
import {Row,Col,Button,notification} from 'antd';
import {connect} from 'react-redux';
import ControlSystemDetailTable from './ControlSystemDetailTable';
import '../../../styles/control-system-detail.css';
import ControlSystemModal from '../controlSystem/ControlSystemModal';
import * as actions from '../../actions';



class ControlSystemDetail  extends Component {
	handleAddClick(){
		console.log('add controlsystem click');
		if (this.props.freeControlSystemSlots <=0){
			const args = {
			    message: 'Alert Message',
			    description: 'There is no free controlSystem slot for you, please contact us',
			    duration: 0,
			};
  			notification.open(args);
		} else {
			this.props.controlSystemModalShow(true);
		}
	}
	render(){
		return(
			<div className="control-system-detail-div">
				<p className="control-system-detail-title">ControlSystem Details</p>
				<ControlSystemModal/>
				<div className="control-system-detail-content">
					<Button 
						type="primary"
						onClick = {this.handleAddClick.bind(this)}
					>
						Add
					</Button>
				</div>
				<ControlSystemDetailTable/>
			</div>
		)
	}
}
function mapStateToProps(state){
	const freeControlSystemSlots = state.integrator.integrator.freeControlSystemSlots;
	return {
		freeControlSystemSlots
	}
}

export default connect(mapStateToProps,actions)(ControlSystemDetail);