import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Table, Icon, Button,Modal } from 'antd';
import EditControlSystemModal from '../editControlSystem/EditControlSystemModal';
import * as actions from '../../actions';
import LoadDevicesModal from '../controlSystem/LoadDevicesModal';

class ControlSystemDetailTable extends Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render(){
		const columns = [{
		  title: 'Control Systems',
		  dataIndex: 'name',
		  key: 'name'
		}, {
		  title: 'Types',
		  dataIndex: 'type',
		  key: 'type'
		}, {
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => {
		  	console.log('record',record)
		  	if (record.type =='WISER' || record.type =='NeroCloud'|| record.type =='Airtopia' || record.type =='NAC'){
			  	return (
			  		<span>
			  			<Button 
					      	type="primary"
					      	icon="edit"
					      	onClick={()=>{
					      		const name = record.key||'';
					      		const type = record.type||'';
					      		const controlSystem = this.props.controlSystems.find(item=>{
					      			return item.Name == name && item.ControlSystem == type;
					      		})
					      		this.props.editControlSystemModalShow(controlSystem,true);
					      	}}
					      >
					      	Edit
					    </Button>
					    <Button 
					      	type="primary"
					      	icon="upload"
							onClick={()=>{
								console.log('device loading...');
								const name = record.key||'';
					      		const type = record.type||'';
					      		const controlSystem = this.props.controlSystems.find(item=>{
					      			return item.Name == name && item.ControlSystem == type;
					      		})
					      		this.props.loadDeviceModalShow(controlSystem,true);
							}}
					      >
					      	load Device
					    </Button>
			  		</span>
			  	)
			}
			return (
				<span>
		  			<Button 
				      	type="primary"
				      	icon='edit'
				      	onClick={()=>{
				      		const name = record.key||'';
					      	const type = record.type||'';

				      		const controlSystem = this.props.controlSystems.find(item=>{
				      			return item.Name == name && item.ControlSystem == type;
				      		})
				      		console.log('control system:',controlSystem);
				      		this.props.editControlSystemModalShow(controlSystem,true);
				      	}}
				      >
				      	Edit
				    </Button>
		  		</span>
			)
		  }
		}];
		const controlSystems = this.props.controlSystems||[];
		controlSystems.sort();
		const dataSource = controlSystems.map(controlSystem=>{
			return {
				key:controlSystem.Name,
				name:controlSystem.Name,
				type:controlSystem.ControlSystem
			}
		})
		let locale = {};
		if (dataSource.length == 0){
			locale = {
				emptyText:'No Data'
			}
		}
		const type = this.props.currentControlSystem.ControlSystem||'';
		return(
			<div>
				<Table 
					dataSource={dataSource} 
					columns={columns}
					locale = {locale}
				/>
				<EditControlSystemModal type={type}/>
				<LoadDevicesModal/>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		controlSystems:state.customer.customer.controlSystems,
		currentControlSystem: state.controlSystem.controlSystem
	}
}
export default connect(mapStateToProps,actions)(ControlSystemDetailTable)