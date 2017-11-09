import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import {hashHistory,Link} from 'react-router';
import '../../../styles/device-home.css';
import * as actions from '../../actions';
import _ from 'lodash';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import Sidebar from '../includes/Sidebar';
import DeviceDetailTable from './DeviceDetailTable';
import DeviceModal from '../addDevice/DeviceModal';

class DeviceHome extends Component {
	componentDidMount(){
		const jwtToken = localStorage.getItem('jwtToken');
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const location = this.props.location||'';
		this.props.fetchDevices(integratorEmail,customerEmail,location,jwtToken);
	}
	render(){
		if (this.props.loading){
			console.log('loading:',this.props.loading);
			window.scrollTo(0, 0);
			return (
				<div className="device-home-div">
					<Icon type="loading" className="loading-icon"/>
				</div>
			)
		}
		if (this.props.errMessage){
			return (
				<div className="device-home-div">
					<p>
						{this.props.errMessage} try again or contact us
					</p>
				</div>
			)
		}
		const location = this.props.location||'';
		return(
			<div className="device-home-div">
				<Layout className="device-home-layout">
			      <Sidebar/>
			      <Layout style={{ padding: '0 24px 24px' }}>
			        <Breadcrumb style={{ margin: '12px 0' }}>
			          <Breadcrumb.Item><Link to='/integrator'>Integrator</Link></Breadcrumb.Item>
			          <Breadcrumb.Item><Link to='/integrator/customer'>customer</Link></Breadcrumb.Item>
			          <Breadcrumb.Item><Link to='/integrator/customer/device'>{location}</Link></Breadcrumb.Item>
			        </Breadcrumb>
			        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 800 }}>
			        	<p className="device-home-location-title">{location}</p>
			        	<div className="device-home-add">
			        		<Button
			        			type="primary"
			        			className="device-home-add-button"
			        			onClick={()=>this.props.deviceModalShow(true)}
			        		>
			        			Add
			        		</Button>
			        	</div>
			        	<DeviceModal/>
						<DeviceDetailTable/>
						<Button 
				          	type="primary"
				          	onClick={()=>hashHistory.push('/integrator/customer')}
				          	className="device-home-back-button"
			          	>
			          	Back
			          </Button>
			        </Content>
			      </Layout>
			    </Layout>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator,
		location:state.authentication.location,
		loading:state.device.loading,
		errMessage:state.device.errMessage,
		devices:state.device.devices
	}
}
export default connect(mapStateToProps,actions)(DeviceHome);