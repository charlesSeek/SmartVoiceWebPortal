import React, { Component } from 'react';
import { Card,Icon } from 'antd';

class IntegratorInfo extends Component{
	render(){
		return(
		    <Card
		    	title={this.props.integrator["Company Name"]} 
		    	bordered={true}
		    	className="integrator-info"
		    >
		      <div className="integrator-info-location">
		      	<Icon type="environment" className="integrator-info-icon"/>
		      	<p>{this.props.integrator["Location"]}</p>
		      </div>
		      <div className="integrator-info-name">
		      	<Icon type="user" className="integrator-info-icon"/>
		      	<p>{this.props.integrator["Contact Name"]}</p>
		      </div>
		      <div className="integrator-info-email">
		      	<Icon type="mail" className="integrator-info-icon"/>
		      	<p>{this.props.integrator["Email"]}</p>
		      </div>
		    </Card>
		)
	}
}
export default IntegratorInfo;