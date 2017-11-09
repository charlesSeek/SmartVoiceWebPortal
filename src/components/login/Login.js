import React, { Component } from 'react';
import '../../../styles/login.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class Login extends Component {
	render(){
		return(
			<div className="login-div">
				<Tabs 
					className="tab-container"
				>
			    	<TabPane tab="Log in" key="1">
			        	<LoginForm/>
			      	</TabPane>
			      	<TabPane tab="Sign up" key="2">
			        	<SignupForm/>
			      </TabPane>
			    </Tabs>
			</div>
		)
	}
}

export default Login;