import React, { Component } from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AddCustomerForm from './AddCustomerForm';

class AddCustomerModal extends Component {
	constructor(props){
		super(props);
	}
	/*handleOk(){
		const jwt = localStorage.getItem('jwtToken');
		const integrator = this.props.integrator;
		this.setState({
	      confirmLoading: true,
	    });
	    setTimeout(() => {
	      this.setState({
	        confirmLoading: false,
	      });
	      this.props.customerAddModalShow(false);
	    }, 2000);
	}*/
	handleCancel(){
		const jwt = localStorage.getItem('jwtToken');
		const integratorEmail = this.props.integrator.email;
	    this.props.customerAddModalShow(false);
	    this.props.fetchIntegratorInfo(integratorEmail,jwt);
	}
	render(){
		return(
			<Modal title="Add New Customer"
	          visible={this.props.isOpen}
	          onCancel={this.handleCancel.bind(this)}
	          footer = {null}
	        >
          		<AddCustomerForm/>
        	</Modal>
		)
	}
}
function mapStateToProps(state){
	console.log('state:',state);
	return {
		isOpen:state.modalOpen.addCustomerModal,
		integrator:state.integrator.integrator
	}
}
export default connect(mapStateToProps,actions)(AddCustomerModal);