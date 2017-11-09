import React, { Component } from 'react';
import {Modal,Select,Input,Button,Icon} from 'antd';
const Option = Select.Option;
import {connect} from 'react-redux';
import AddCustomerForm from '../integrator/AddCustomerForm';
import * as actions from '../../actions';
import '../../../styles/control-system.css';
import ControlSystemComponent from './ControlSystemComponent';
import AirtopiaComponent from './AirtopiaComponent';
import WISERComponent from './WISERComponent';
import NeroCloudComponent from './NeroCloudComponent';
import NACComponent from './NACComponent';


class ControlSystemModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			controlSystem:'',
			controlSystemStyle:'control-system-selection-button'
		}
	}
	handleCancel(){
		console.log('handleCancel...');
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		this.setState({
			controlSystem:'',
			name:'',
			controlSystemStyle:'control-system-selection-button'
		})
		this.props.controlSystemModalShow(false);
		this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
	}
	controlSystemOnChange(value){
		console.log(value);
		this.setState({
			controlSystem:value,
			controlSystemStyle:'hidden'
		})
	}
	renderControlSystemComponent(){
		const controlSystem = this.state.controlSystem||'';
		let controlSystemComponent = null;
		switch (controlSystem){
			case 'CBUS':
				controlSystemComponent = <ControlSystemComponent handleCancel={this.handleCancel.bind(this)} controlSystem={controlSystem}/>
				break;
			case 'PUSH':
				controlSystemComponent = <ControlSystemComponent handleCancel={this.handleCancel.bind(this)} controlSystem={controlSystem}/>
				break;
			case 'Airtopia':
				controlSystemComponent = <AirtopiaComponent handleCancel={this.handleCancel.bind(this)} controlSystem={controlSystem}/>
				break;
			case 'WISER':
				controlSystemComponent = <WISERComponent handleCancel={this.handleCancel.bind(this)} controlSystem={controlSystem}/>
				break;
			case 'NeroCloud':
				controlSystemComponent = <NeroCloudComponent handleCancel={this.handleCancel.bind(this)} controlSystem={controlSystem}/>
				break;
			case 'NAC':
				controlSystemComponent = <NACComponent handleCancel={this.handleCancel.bind(this)} controlSystem={controlSystem}/>
				break;
			default:
				break;
		}
		return controlSystemComponent;
	}
	render(){
		const controlSystem = this.state.controlSystem||'';
		const name = this.state.name||''
		return(
			<Modal title="Add Control System"
	          visible={this.props.isOpen}
	          onCancel={this.handleCancel.bind(this)}
	          footer = {null}
	        >
	        	<div className="ant-row ant-form-item">
	        		<div className="ant-form-item-label">
		        		<label>Control System</label>
		        	</div>
		        	<Select 
		        		size="large" 
		        		value={this.state.controlSystem}
		        		style={{width:'100%'}}
		        		onChange={this.controlSystemOnChange.bind(this)}
		        	>
				      <Option value="CBUS">CBUS Systems</Option>
				      <Option value="PUSH">PUSH Systems</Option>
				      <Option value="Airtopia">Airtopia Systems</Option>
				      <Option value="WISER">WISER Systems</Option>
				      <Option value="NeroCloud">NeroCloud Systems</Option>
				      <Option value="NAC">NAC Systems</Option>
				    </Select>
				</div>
				<div className="ant-row ant-form-item">
				    <div className={this.state.controlSystemStyle}>
				    	<Button type="primary">Submit</Button>
				    	<Button type="default" onClick={this.handleCancel.bind(this)}>Cancel</Button>
				    </div>
				</div>
          		{this.renderControlSystemComponent()}
        	</Modal>

		)
	}
}

function mapStateToProps(state){
	return {
		isOpen:state.modalOpen.addControlSystemModal,
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator
	}
}
export default connect(mapStateToProps,actions)(ControlSystemModal);
