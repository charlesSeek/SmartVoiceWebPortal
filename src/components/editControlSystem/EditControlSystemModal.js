import React, { Component } from 'react';
import {Modal,Select,Input,Button,Icon} from 'antd';
const Option = Select.Option;
import {connect} from 'react-redux';
import * as actions from '../../actions';
import '../../../styles/control-system.css';
import EditControlSystemComponent from './EditControlSystemComponent';
import EditAirtopiaComponent from './EditAirtopiaComponent';
import EditWISERComponent from './EditWISERComponent';
import EditNeroCloudComponent from './EditNeroCloudComponent';
import EditNACComponent from './EditNACComponent';


class EditControlSystemModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			type:'',
			controlSystemStyle:'control-system-selection-button'
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			type:nextProps.type,
			controlSystemStyle:'hidden'
		});
	}
	handleCancel(){
		console.log('handleCancel...');
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		const controlSystem = this.props.currentControlSystem;
		this.setState({
			type:'',
			controlSystemStyle:'control-system-selection-button'
		})
		this.props.editControlSystemModalShow(controlSystem,false);
		this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
	}
	controlSystemOnChange(value){
		console.log(value);
		this.setState({
			type:value,
			controlSystemStyle:'hidden'
		})
	}
	renderControlSystemComponent(){
		const type = this.state.type||'';
		let editControlSystemComponent = null;
		switch (type){
			case 'CBUS':
				editControlSystemComponent = <EditControlSystemComponent 
					handleCancel={this.handleCancel.bind(this)}
					type = {type}
				/>
				break;
			case 'PUSH':
				editControlSystemComponent = <EditControlSystemComponent 
					handleCancel={this.handleCancel.bind(this)}
					type = {type}
				/>
				break;
			case 'Airtopia':
				editControlSystemComponent = <EditAirtopiaComponent 
					handleCancel={this.handleCancel.bind(this)}
					type = {type}
				/>
				break;
			case 'WISER':
				editControlSystemComponent = <EditWISERComponent 
					handleCancel={this.handleCancel.bind(this)}
					type = {type}
				/>
				break;
			case 'NAC':
				editControlSystemComponent = <EditNACComponent 
					handleCancel={this.handleCancel.bind(this)}
					type = {type}
				/>
				break;
			case 'NeroCloud':
				editControlSystemComponent = <EditNeroCloudComponent 
					handleCancel={this.handleCancel.bind(this)}
					type = {type}
				/>
				break;
			default:
				break;
		}
		return editControlSystemComponent;
	}
	render(){
		console.log('controlsystem:',this.state.controlSystem);
		const controlSystem = this.state.controlSystem||'';
		const name = this.state.name||''
		return(
			<Modal title="Edit Control System"
	          visible={this.props.isOpen}
	          onCancel={this.handleCancel.bind(this)}
	          footer = {null}
	        >
	        	<label>* If you change the control system name or type, you will have to re-associate the new devices with the new control system</label>
	        	<div className="ant-row ant-form-item">
	        		<div className="ant-form-item-label">
		        		<label>Control System</label>
		        	</div>
		        	<Select 
		        		size="large" 
		        		value={this.state.type}
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
		isOpen:state.modalOpen.editControlSystemModal,
		currentControlSystem:state.controlSystem.controlSystem,
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator
	}
}
export default connect(mapStateToProps,actions)(EditControlSystemModal);
