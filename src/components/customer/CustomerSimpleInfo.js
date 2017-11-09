import React,{ Component } from 'react';
import {Icon} from 'antd';
import '../../../styles/customer-simple-info.css';

class CustomerSimpleInfo extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="customer-simple-info-div">
				<p className="customer-contact-name">{this.props.contactName}</p>
				<div className="customer-email">
					<Icon type="mail"/>
					<p>{this.props.email}</p>
				</div>
				<div className="customer-address">
					<Icon type="environment-o"/>
					<p>{this.props.address}</p>
				</div>
			</div>
		)
	}
}
export default CustomerSimpleInfo;