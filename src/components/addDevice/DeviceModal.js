import React, { Component } from 'react';
import {Modal,Select,Input,Button,Icon} from 'antd';
const Option = Select.Option;
import {connect} from 'react-redux';
import AddCustomerForm from '../integrator/AddCustomerForm';
import * as actions from '../../actions';
//import '../../../styles/control-system.css';
import LightsCBUS from './LightsCBUS';
import LightsPUSH from './LightsPUSH';


const deviceNameData = {
	Lights:["lights","main","down","pendant","bench","strip","wall","side","left",
	"right","front","rear","bulkhead","kitchenette","cabinet","skylight","hallway",
	"sensor","courtyard","floor","up","bay","feature","spot","desk","mirror","robe",
	"wardrobe","walk in robe","cupboard"],
	Blinds:["blinds","main","north","south","east","west","left","right","door",
	"side","desk","kitchenette","block out","sheer","front","back","garden","feature",
	"courtyard","picture","window","deck"],
	AV:["Foxtel","DVD","Blu Ray","TV","Roku","Western Digital","WDTV","Apple","Apple TV",
	"Movie","Music","Netflix","Kodie","Stan","Plex","Sonos","Radio","Blue Sound","Cameras",
	"Spotify","Xbox","play station","air play"],
	AC:["Climate Control"],
	Fans:["fans","main","down","pendant","bench","strip","wall","side","left","right",
	"front","rear","bulkhead","kitchenette","cabinet","skylight","hallway","sensor",
	"courtyard","floor","up","bay","feature","spot","desk","north","south","east",
	"west","door","block out","sheer","front","back","garden","picture","window","deck"]
}
class DeviceModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			controlSystem:'',
			itemType:'',
			itemName:'',
			controlSystemStyle:'control-system-selection-button'
		}
	}
	handleCancel(){
		console.log('handleCancel...');
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		const location = this.props.location||'';
		this.setState({
			controlSystem:'',
			itemType:'',
			itemName:'',
			controlSystemStyle:'control-system-selection-button'
		})
		this.props.deviceModalShow(false);
		this.props.fetchDevices(integratorEmail,customerEmail,location,jwtToken);
	}
	controlSystemOnChange(value){
		console.log(value);
		this.setState({
			controlSystem:value,
			controlSystemStyle:'hidden'
		})
	}
	itemTypeOnChange(value){
		const itemNames = deviceNameData[value]||[];
		const itemName = itemNames[0]||'';
		this.setState({
			itemType:value,
			itemName:itemName
		})
	}
	itemNameOnChange(value){
		this.setState({
			itemName:value
		})
	}
	renderDeviceComponent(){
		const controlSystem = this.state.controlSystem||'';
		const itemType = this.state.itemType||'';
		const itemName = this.state.itemName||'';
		const controlSystems = this.props.controlSystems||[];
		const selectedControlSystem = controlSystems.find(item=>{
			return item.Name == controlSystem
		})
		console.log('select control sytem:',selectedControlSystem)
		let controlSystemComponent = null;
		if (selectedControlSystem){
			const controlSystemType = selectedControlSystem.ControlSystem||'';
			const componentType = itemType+controlSystemType;
			console.log('compoentType:',componentType);
			switch (componentType){
				case 'LightsCBUS':
					controlSystemComponent = <LightsCBUS itemType={itemType} itemName={itemName} controlSystemName={controlSystem}/>
					break;
				case 'LightsPUSH':
					controlSystemComponent = <LightsPUSH itemType={itemType} itemName={itemName} controlSystemName={controlSystem}/>
					break;
			}
		}
		return controlSystemComponent;
	}
	itemNamerender(){
		const itemType = this.state.itemType||'';
		if (!itemType){
			return null
		}
		const itemNameList = deviceNameData[itemType]||[];
		return itemNameList.map(item=>{
			return <Option key={item} value={item}>{item}</Option>
		})
	}
	controlSystemRender(){
		const controlSystems = this.props.controlSystems||[];
		return controlSystems.map(controlSystem=>{
			return <Option key={controlSystem.Name} value={controlSystem.Name}>{controlSystem.Name}</Option>
		})
	}
	render(){
		const controlSystem = this.state.controlSystem||'';
		const name = this.state.name||'';
		const itemType = this.state.itemType||'';
		return(
			<Modal title="Add Device"
	          visible={this.props.isOpen}
	          onCancel={this.handleCancel.bind(this)}
	          footer = {null}
	        >
	        	<div className="ant-row ant-form-item">
	        		<div className="ant-form-item-label">
		        		<label>Item Type</label>
		        	</div>
		        	<Select 
		        		size="large" 
		        		value={this.state.itemType}
		        		style={{width:'100%'}}
		        		onChange={this.itemTypeOnChange.bind(this)}
		        	>
				      <Option value="Lights">Lights</Option>
				      <Option value="Blinds">Blinds</Option>
				      <Option value="AV">Audio Visual</Option>
				      <Option value="AC">Climate Control</Option>
				      <Option value="Fans">Fans</Option>
				    </Select>
				</div>
				<div className="ant-row ant-form-item">
	        		<div className="ant-form-item-label">
		        		<label>Item Name</label>
		        	</div>
		        	<Select 
		        		size="large" 
		        		value={this.state.itemName}
		        		style={{width:'100%'}}
		        		onChange={this.itemNameOnChange.bind(this)}
		        	>
				      {this.itemNamerender()}
				    </Select>
				</div>
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
				      {this.controlSystemRender()}
				    </Select>
				</div>

				<div className="ant-row ant-form-item">
				    <div className={this.state.controlSystemStyle}>
				    	<Button type="primary">Submit</Button>
				    	<Button type="default" onClick={this.handleCancel.bind(this)}>Cancel</Button>
				    </div>
				</div>
          		{this.renderDeviceComponent()}
        	</Modal>

		)
	}
}

function mapStateToProps(state){
	return {
		isOpen:state.modalOpen.addDeviceModal,
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator,
		location:state.authentication.location,
		controlSystems:state.customer.customer.controlSystems
	}
}
export default connect(mapStateToProps,actions)(DeviceModal);
