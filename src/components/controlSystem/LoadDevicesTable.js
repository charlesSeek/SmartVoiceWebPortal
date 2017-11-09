import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { Table, Icon, Button,Modal } from 'antd';
import '../../../styles/load-device.css';
import Parameters from './Parameters';

class LoadDevicesTable extends Component {
	constructor(props){
		super(props);
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		const controlSystem = this.props.currentControlSystem||'';
		this.props.fetchAutoLoadDevices(controlSystem,integratorEmail,customerEmail,jwtToken);
	}
	expandedRowRender = (record)=>{
		console.log('record:',JSON.stringify(record))
		return <Parameters params={record.parameters}/>
	}
	render(){
		const devices = this.props.loadDevices;
		console.log('devices:',devices);
		if (this.props.loading){
			return(
				<div className='load-device-modal-div'>
					<Icon type="loading" className="loading-icon"/>
				</div>
			)
		}
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
		  title:'Location',
		  dataIndex:'location',
		  key:'location'
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
		const dataSource = devices.map(device=>{
			return {
				key:device.name+device.location+device.type,
				name:device.name,
				type:device.type,
				location:device.location,
				controlSystem:device.controlSystem,
				parameters:JSON.stringify(device.params)
			}
		})
		let locale = {};
		if (dataSource.length == 0){
			locale = {
				emptyText:'No Data'
			}
		}
		const rowSelection = {
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  getCheckboxProps: record => ({
		    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
		  }),
		};
		return(
			<div className='load-device-modal-div'>
				<Table
					rowSelection={rowSelection}
					expandedRowRender={this.expandedRowRender}
					dataSource={dataSource} 
					columns={columns}
					locale = {locale}
				/>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator,
		loading:state.loadDevices.loading,
		currentControlSystem:state.controlSystem.controlSystem,
		loadDevices:state.loadDevices.devices
	}
}
export default connect(mapStateToProps,actions)(LoadDevicesTable);
