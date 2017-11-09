import React, { Component } from 'react';
import { Table, Icon, Button,Modal } from 'antd';
import CustomerDeleteModal from './CustomerDeleteModal';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { hashHistory } from 'react-router';

class CustomersTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			deleteModalVisible:false,
			customerEmail:''
		}
		const handleEdit = this.handleEdit.bind(this);
		const handleDelete = this.handleDelete.bind(this);
	}
	handleEdit(){

	}
	handleDelete(e){
		console.log('e target:',e.target);
		console.log('value:',e.target.value);
	}
	render(){
		const columns = [{
		  title: 'Name',
		  dataIndex: 'name',
		  key: 'name'
		}, {
		  title: 'Address',
		  dataIndex: 'address',
		  key: 'address',
		}, {
		  title: 'Email',
		  dataIndex: 'email',
		  key: 'email',
		}, {
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <Button 
		      	type="primary"
		      	onClick={()=>{
		      		this.props.changeCustomer(record.email)
		      		hashHistory.push('/integrator/customer');
		      	}}
		      	icon='edit'
		      >
		      	Edit
		      </Button>
		      <Button 
		      	type="danger" 
		      	onClick={()=>{
		      		this.setState({
		      			customerEmail:record.email
		      		});
		      		this.props.customerDeleteModalShow(true);
		      	}} 
		      	icon='delete'
		      	>
		      		Delete
		      </Button>
		    </span>
		  ),
		}];
		const customers = this.props.customers;
		customers.sort(function(a,b){
			if (a.contactName.toLowerCase() < b.contactName.toLowerCase())
				return -1
			if (a.contactName.toLowerCase() > b.contactName.toLowerCase())
				return 1
			return 0
		});
		console.log('sorted customers:',customers)
		const dataSource = customers.map(customer=>{
			return {
				key:customer.Email,
				name:customer.contactName,
				address:customer.address,
				email:customer.Email
			}
		})
		const { deleteModalVisible, customerEmail } = this.state;
		return(
			<div className="integrator-home-table-div">
				<CustomerDeleteModal
					customer = { customerEmail }
				/>
				<Table dataSource={dataSource} columns={columns}/>
			</div>
		)
	}

}
function mapStateToProps(state){
	return {...state}
}
export default connect(mapStateToProps,actions)(CustomersTable);