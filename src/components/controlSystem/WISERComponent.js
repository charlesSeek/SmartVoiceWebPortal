import React, { Component } from 'react';
import { Form, Input, Icon,  Button,Checkbox,Select } from 'antd';
const Option = Select.Option;
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;
import axios from 'axios';
import _ from 'lodash';


class WISERComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:false,
			errMessage:''
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const controlSystem = this.props.controlSystem||'';
		const name = this.props.name||'';
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		this.props.form.validateFields((err, values) => {
			const ip = values.ip||'';
			const port = values.port||'';
			const username = values.username||'';
			const userpassword = values.password||'';
			const security = values.security||'';
			const name = values.name||'';
			const params = {
				IP:ip,
				PortNo:port,
				username:username,
				userpassword:userpassword,
				Security:security
			};
  			if (!err){
  				const data = {
  					controlSystem,
  					name,
  					params
  				}
  				const url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/"+
  							integratorEmail+"/customer/"+customerEmail+"/controlsystem"
  				console.log('data:',data);
  				this.setState({
  					loading:true,
  					errMessage:''
  				})
  				axios.post(url,data,{
  					headers:{Authorization:jwtToken},
  					timeout:10000
  				})
  				.then(response=>{
  					this.setState({
  						loading:false,
  						errMessage:''
  					})
  					this.props.controlSystemModalShow(false);
  					this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
  				})
  				.catch(err=>{
  					console.log('error:',JSON.stringify(err));
  					const errMessage = _.get(err,'response.data.errorMessage','');
			    	let message = 'internal error,please check username and password';
			    	if (!errMessage){
			    		message = 'internal error,please check username and password';
			    	}else {
			    		message = JSON.parse(errMessage).message||'internal error,please check username and password';
			    	}
			    	this.setState({loading:false,errMessage:message});
  				})
  			}
  		})
	}
	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,setFieldsValue } = this.props.form;
		const controlSystemType = this.props.controlSystem||'';
		const name = this.props.name||'';
		return(
			<Form onSubmit={this.handleSubmit.bind(this)}>
				<FormItem
					hasFeedback
					label="ControlSystem Name"
				>
					{getFieldDecorator('name', {
			            rules: [
			            	{ required: true, message: 'Please input name!' }],
			        })(
			            <Input
			            	prefix={<Icon type="user"/>}
			            	placeholder="ControlSystem Name"
			            />
			        )}
				</FormItem>
				<FormItem
					hasFeedback
					label="IP Address"
				>
					{getFieldDecorator('ip', {
			            rules: [
			            	{ required: true, message: 'Please input ip address!' }],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="IP Address"
			            />
			        )}
				</FormItem>
		        <FormItem 
		        	hasFeedback
		        	label="Port No"
		        >
		          {getFieldDecorator('port', {
		            rules: [
		            	{required: true, message: 'Please input port no!'}
		            ],
		          })(
		            <Input
		            	prefix={<Icon type="hdd"/>}
		            	placeholder="Port No"
		            />
		          )}
		        </FormItem>
		        <FormItem 
		        	hasFeedback
		        	label="User Name"
		        >
		          {getFieldDecorator('username', {
		            rules: [
		            	{required: true, message: 'Please input username!'}
		            ],
		          })(
		            <Input
		            	prefix={<Icon type="user"/>}
		            	placeholder="User Name"
		            />
		          )}
		        </FormItem>
		        <FormItem 
		        	hasFeedback
		        	label="User Password"
		        >
		          {getFieldDecorator('password', {
		            rules: [
		            	{required: true, message: 'Please input password!'}
		            ],
		          })(
		            <Input
		            	prefix={<Icon type="lock"/>}
		            	type="password"
		            	placeholder="Password"
		            />
		          )}
		        </FormItem>
		        <FormItem 
		        	hasFeedback
		        	label="Security"
		        >
		          {getFieldDecorator('security', {
		            rules: [
		            	{required: true, message: 'Please select security!'}
		            ],
		          })(
		            <Select 
		        		size="large" 
		        		style={{width:'100%'}}
		        	>
				      <Option value="SSL">SSL</Option>
				      <Option value="TCP">TCP</Option>
				    </Select>
		          )}
		        </FormItem>
		        <p className="control-system-error-message">{this.state.errMessage}</p>
		        <FormItem>
		          <Button 
		          	type="primary" 
		          	htmlType="submit" 
		          	loading={this.state.loading}
		          	className="add-control-system-button"
		          >
		            Submit
		          </Button>
		          <Button 
		          	type="default" 
		          	className="add-control-system-button"
		          	onClick = {this.props.handleCancel}
		          >
		            Cancel
		          </Button>
		        </FormItem>
		    </Form>
		)
	}
}

const WrappedControlSystemComponent= Form.create()(WISERComponent);
function mapStateToProps(state){
	return {
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator
	}
}
export default connect(mapStateToProps,actions)(WrappedControlSystemComponent);