import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';
import { hashHistory} from 'react-router';
import axios from 'axios';
import CustomersTable from './CustomersTable';
import '../../../styles/integrator-home.css';
import * as actions from '../../actions';
import AddCustomerModal from './AddCustomerModal';

class IntegratorHome extends Component {
	componentDidMount(){
		console.log('component did mount');
		const jwtToken = localStorage.getItem('jwtToken');
		const integratorEmail = this.props.integratorEmail;
		console.log('integratorEmail:',integratorEmail)
		this.props.fetchIntegratorInfo(integratorEmail,jwtToken);
	}
	handleNewCustomer(){
		console.log('handle new customer');
		this.props.customerAddModalShow(true);
	}
	render(){
		window.scrollTo(0, 0);
		const integratorEmail = this.props.integratorEmail||'';
		console.log('render integrator:',integratorEmail);
		const jwtToken = localStorage.getItem('jwtToken')||'';
		if (!jwtToken || !integratorEmail){
			hashHistory.push('/');
		}
		if (this.props.loading){
			return(
				<div className="integrator-home-div">
					<p className="integrator-home-title">Integrator</p>
					<div className="integrator-contact">
						<Icon style={{fontSize:16}} type="mail"/>
						<p style={{fontSize:16,marginLeft:'10px'}}>{integratorEmail}</p>
					</div>
					<Icon type="loading" className="loading-icon"/>
				</div>
			)
		}
		if (this.props.errMessage){
			return (
				<div className="integrator-home-div">
					<p className="integrator-home-title">Integrator</p>
					<div className="integrator-contact">
						<Icon style={{fontSize:16}} type="mail"/>
						<p style={{fontSize:16,marginLeft:'10px'}}>{integratorEmail}</p>
					</div>
					<div className="integrator-home-error-message">
						<p>
							{this.props.errMessage} try again or contact us
						</p>
						<Button
							type="primary"
							onClick={()=>{
								this.props.fetchIntegratorInfo(integratorEmail,jwtToken);
							}}
						>
							Try again
						</Button>
					</div>
				</div>
			)
		}
		return(
			<div className="integrator-home-div">
				<p className="integrator-home-title">Integrator</p>
				<div className="integrator-contact">
					<Icon style={{fontSize:16}} type="mail"/>
					<p style={{fontSize:16,marginLeft:'10px'}}>{integratorEmail}</p>
				</div>
				<AddCustomerModal/>
				<div className="integrator-home-add-customer">
					<p>Customers</p>
					<Button 
						type="primary" 
						className="add-customer-button" 
						icon="plus"
						onClick = {this.handleNewCustomer.bind(this)}
					>
						Add Customer
					</Button>
				</div>
				<CustomersTable customers={this.props.customers}/>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		integrator:state.integrator.integrator,
		loading:state.integrator.loading,
		errMessage:state.integrator.errMessage,
		integratorEmail:state.authentication.integrator,
		customers:state.integrator.integrator.customers
	}
}
export default connect(mapStateToProps,actions)(IntegratorHome);