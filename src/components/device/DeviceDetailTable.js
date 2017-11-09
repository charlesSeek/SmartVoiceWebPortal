import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Table, Icon, Button,Modal } from 'antd';
import * as actions from '../../actions';
import { hashHistory } from 'react-router';
import Parameters from './Parameters';

class DeviceDetailTable extends Component{
	expandedRowRender = (record)=>{
		console.log('record:',JSON.stringify(record))
		return <Parameters params={record.parameters}/>
	}
	render(){
		const columns = [{
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name'
		},
		{
		  title:'Type',
		  dataIndex:'type',
		  key:'type'
		},
		{
		  title:'Control System',
		  dataIndex:'controlSystem',
		  key:'controlSystem'
		},
		{
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <Button 
		      	type="primary"
		      	icon='edit'
		      >
		      	Edit
		      </Button>
		      <Button 
		      	type="danger" 
		      	icon='delete'
		      	>
		      		Delete
		      	</Button>
		    </span>
		  ),
		}];
		const dataSource = this.props.devices.map(device=>{
			return {
				key:device.Name+device.Type,
				name:device.Name,
				type:device.Type,
				controlSystem:device.ControlSystems,
				parameters:JSON.stringify(device.Params)
			}
		})
		let locale = {};
		if (dataSource.length == 0){
			locale = {
				emptyText:'No Data'
			}
		}
		return(
			<Table
				expandedRowRender={this.expandedRowRender}
				dataSource={dataSource} 
				columns={columns}
				locale = {locale}
			/>
		)
	}
}
function mapStateToProps(state){
	return {
		devices:state.device.devices
	}
}
export default connect(mapStateToProps,actions)(DeviceDetailTable)