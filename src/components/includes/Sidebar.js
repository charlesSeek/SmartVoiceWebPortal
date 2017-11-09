import React, { Component } from 'react';
import {Layout,Menu,Icon} from 'antd';
import {connect } from 'react-redux';
import * as actions from '../../actions';
const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends Component {
	renderCustomersItem(){
		const customers = this.props.customers||[];
		console.log('customers:',customers);
		return customers.map(customer=>{
			return (
				<Menu.Item 
					key={customer.Email}
				>
					{customer.Email}
				</Menu.Item>
			)
		})
	}
	renderLocations(){
		const rooms = this.props.rooms||[];
		console.log('rooms:',rooms);
		return rooms.map(room=>{
			return (
				<Menu.Item key={room.RoomName}>{room.RoomName}</Menu.Item>
			)
		})
	}
	handleClick(e){
		console.log('click side menu:',e)
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken')||''
		let key = '';
		let value = '';
		if (e.keyPath.length == 1){
			key = e.keyPath[0];
		}else {
			key = e.keyPath[1];
			value = e.keyPath[0];
		}
		switch (key){
			case 'customers':
				console.log('customers:',value);
				if (!integratorEmail || !value || !jwtToken){
					return null;
				}
				this.props.fetchCustomerInfo(integratorEmail,value,jwtToken)
				break;
			case 'locations':
				console.log('locations:',value);
				const location = value.toLowerCase()||'';
				this.props.fetchDevices(integratorEmail,customerEmail,location,jwtToken);
				break;
			case 'profile':
				console.log('profile');
				break;
			case 'logout':
				console.log('logout');
				break;
			default:
				break;
		}
	}
	render(){
		return(
			<Sider 
				style={{ background: '#fff',fontSize:'16px' }} 
		      	width={280} 
		      	breakpoint="lg"
		      	collapsedWidth="0"
				onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
		      >
		        <Menu
		          mode="inline"
		          defaultSelectedKeys={['1']}
		          defaultOpenKeys={['sub1']}
		          style={{ height: '100%', borderRight: 0 }}
		          onClick = {this.handleClick.bind(this)}
		        >
		          <SubMenu key="customers" title={<span><Icon type="user"/>Customers</span>}>
		          	{this.renderCustomersItem()}
		          </SubMenu>
		          <SubMenu key="locations" title={<span><Icon type="home"/>Locations</span>}>
		          	{this.renderLocations()}
		          </SubMenu>
		          <Menu.Item key="profile">
		          	<Icon style={{fontSize:16}} type="contacts" />
          			<span>Customer Profile</span>
		          </Menu.Item>
		          <Menu.Item key="logout">
		          	<Icon style={{fontSize:16}} type="logout" />
          			<span>Logout</span>
		          </Menu.Item>
		        </Menu>
		    </Sider>
		)
	}
}
function mapStateToProps(state){
	return {
		customers:state.integrator.integrator.customers,
		rooms:state.customer.customer.rooms,
		integratorEmail:state.authentication.integrator,
		customerEmail:state.authentication.customer
	}
}
export default connect(mapStateToProps,actions)(Sidebar)
