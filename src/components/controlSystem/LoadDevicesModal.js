import React, { Component } from 'react';
import {Modal,Select,Input,Button,Icon} from 'antd';
const Option = Select.Option;
import {connect} from 'react-redux';
import * as actions from '../../actions';
import LoadDevicesTable from './LoadDevicesTable';

class LoadDevicesModal extends Component {
	constructor(props){
		super(props)
	}
	handleCancel(){
		console.log('handleCancel...');
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		const controlSystem = this.props.currentControlSystem;
		this.props.loadDeviceModalShow(controlSystem,false);
		this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
	}
	render(){
		console.log('isOpen:',this.props.isOpen);
		return (
			<Modal title="Load Devices"
			  okText = "Submit"
			  cancelText = "Cancel"
	          visible={this.props.isOpen}
	          onCancel={this.handleCancel.bind(this)}
	        >
	        	<LoadDevicesTable/>
	        </Modal>
		)
	}
}
function mapStateToProps(state){
	return {
		isOpen:state.modalOpen.loadDeviceModal,
		currentControlSystem:state.controlSystem.controlSystem,
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator
	}
}
export default connect(mapStateToProps,actions)(LoadDevicesModal);