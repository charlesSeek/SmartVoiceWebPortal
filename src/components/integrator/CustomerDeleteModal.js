import React, { Component } from 'react';
import { Modal, Button } from 'antd'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import _ from 'lodash';

class CustomerDeleteModal extends Component {
	constructor(props){
		super(props);
		this.state = {
			confirmLoading:false
		}
	}
	handleOk(){
		const jwt = localStorage.getItem('jwtToken');
		const integratorEmail = this.props.integrator.email;
		const customerEmail = this.props.customer||'';
		this.setState({
	      confirmLoading: true,
	    });
	    const url ='https://h2gf88qrka.execute-api.us-east-1.amazonaws.com/v1/integrator/'+integratorEmail+'/customer/'+customerEmail; 
	    axios.delete(url,{
	    	headers:{Authorization:jwt}
	    })
	    .then(response=>{
	    	this.props.customerDeleteModalShow(false);
			this.props.fetchIntegratorInfo(integratorEmail,jwt);
	    })
	    .catch(err=>{
	    	console.log('error:',JSON.stringify(err));
	    	this.setState({loading:false,errMessage:message});
	    })

	}
	handleCancel(){
	    this.props.customerDeleteModalShow(false);
	}
	render(){
		return(
			<Modal title="Customer Delete"
			  okText = "Confirm"
			  cancelText = "Cancel"
	          visible={this.props.isOpen}
	          onOk={this.handleOk.bind(this)}
	          confirmLoading={this.state.confirmLoading}
	          onCancel={this.handleCancel.bind(this)}
	        >
          		<p>Do you confirm to delete customer {this.props.customer}</p>
        	</Modal>
		)
	}
}
function mapStateToProps(state){
	return {
		isOpen:state.modalOpen.customerDeleteModal,
		integrator:state.integrator.integrator
	}
}
export default connect(mapStateToProps,actions)(CustomerDeleteModal);
