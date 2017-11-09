import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon,Row,Col,Button } from 'antd';
import {hashHistory,Link} from 'react-router';
import '../../../styles/customer-home.css';
import * as actions from '../../actions';
import CustomerSimpleInfo from './CustomerSimpleInfo';
import _ from 'lodash';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import RoomDetail from './RoomDetail';
import ControlSystemDetail from './ControlSystemDetail';
import Sidebar from '../includes/Sidebar';

class CustomerHome extends Component{
	componentDidMount(){
		const jwtToken = localStorage.getItem('jwtToken');
		const integratorEmail = this.props.integratorEmail;
		const customerEmail = this.props.customerEmail;
		this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
	}
	render(){
		const jwtToken = localStorage.getItem('jwtToken')||'';
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const address = _.get(this.props.customer,'address','');
		const contactName = _.get(this.props.customer,'contactName','');
		const email = _.get(this.props.customer,'email','');
		console.log('customerEmail:',customerEmail);
		console.log('address:',address);
		console.log('contactName:',contactName);
		if (!jwtToken || !integratorEmail || !customerEmail){
			hashHistory.push('/')
		}
		if (this.props.loading){
			console.log('loading:',this.props.loading);
			window.scrollTo(0, 0);
			return (
				<div className="customer-home-div">
					<Icon type="loading" className="loading-icon"/>
				</div>
			)
		}
		if (this.props.errMessage){
			return (
				<div className="customer-home-div">
					<p>
						{this.props.errMessage} try again or contact us
					</p>
				</div>
			)
		}
		return(
			<div className="customer-home-div">
				<Layout className="customer-home-layout">
			      <Sidebar/>
			      <Layout style={{ padding: '0 24px 24px' }}>
			        <Breadcrumb style={{ margin: '12px 0' }}>
			          <Breadcrumb.Item><Link to='/integrator'>Integrator</Link></Breadcrumb.Item>
			          <Breadcrumb.Item><Link to='/integrator/customer'>customer</Link></Breadcrumb.Item>
			        </Breadcrumb>
			        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 800 }}>
			          <CustomerSimpleInfo 
			          	email={customerEmail}
			          	address={address}
			          	contactName={contactName}
			          />
			          <Row>
			          	<Col xs={24} sm={24} md={10} lg={10} xl={10}>
			          		<RoomDetail/>
			          	</Col>
			          	<Col xs={24} sm={24} md={14} lg={14} xl={14}>
			          		<ControlSystemDetail/>
			          	</Col>
			          </Row>
			          <Button 
			          	type="primary"
			          	onClick={()=>hashHistory.push('/integrator')}
			          	className="customer-home-back-button"
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
		loading:state.customer.loading,
		errMessage:state.customer.errMessage,
		customers:state.integrator.integrator.customers,
		rooms:state.customer.customer.rooms,
		customer:state.customer.customer

	}
}
export default connect(mapStateToProps,actions)(CustomerHome)