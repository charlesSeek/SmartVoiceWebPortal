import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Table, Icon, Button,Modal } from 'antd';
import * as actions from '../../actions';
import { hashHistory } from 'react-router';

class RoomDetailTable extends Component{
	render(){
		const columns = [{
		  title: 'Location',
		  dataIndex: 'location',
		  key: 'location'
		},  {
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <Button 
		      	type="primary"
		      	icon='edit'
		      	onClick={()=>{
		      		const location = record.location.toLowerCase()||'';
		      		this.props.changeLocation(location);
		      		hashHistory.push('/integrator/customer/device');
		      	}}
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
		const dataSource = this.props.rooms.map(room=>{
			return {
				key:room.RoomName,
				location:room.RoomName
			}
		})
		return(
			<Table dataSource={dataSource} columns={columns}/>
		)
	}
}
function mapStateToProps(state){
	return {
		rooms:state.customer.customer.rooms
	}
}
export default connect(mapStateToProps,actions)(RoomDetailTable)