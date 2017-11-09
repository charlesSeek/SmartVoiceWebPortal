import React, { Component } from 'react';
import '../../../styles/login-form.css';
import { Form, Icon, Input, Button,Checkbox } from 'antd';
import { Link,hashHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;

/*function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}*/

class LoginForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			loading:false,
			errMessage:''
		}
	}
	/*componentDidMount() {
    	this.props.form.validateFields();
  	}*/
  	handleSubmit(e){
  		e.preventDefault();
  		//this.setState({loading:true});
  		this.props.form.validateFields((err, values) => {
  			if (!err){
  				this.props.signinUser(values);
  			}
  		})
  	}
	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		//const userNameError = isFieldTouched('userName') && getFieldError('userName');
    	//const passwordError = isFieldTouched('password') && getFieldError('password');
		return(
			<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
		        <FormItem hasFeedback>
		          {getFieldDecorator('email', {
		            rules: [
		            {type: 'email', message: 'The input is not valid E-mail!'},
		            { required: true, message: 'Please input your email!' }],
		          })(
		            <Input
		            	className = "login-form-input-mail"
		            	prefix={<Icon type="mail" style={{ fontSize: 20 }}/>}
		            	placeholder="Email"
		            />
		          )}
		        </FormItem>
		        <FormItem hasFeedback>
		          {getFieldDecorator('password', {
		            rules: [
		            { min: 6, message:'Password min length is 6'},
					{ pattern:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,message:'Password should contains upper case, lower case and number'}
		            ],
		          })(
		            <Input
		            	className="login-form-input-password"
		            	prefix={<Icon type="lock" style={{ fontSize: 20 }}/>}
		            	type="password" 
		            	placeholder="Password"
		            />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('remember', {
		            valuePropName: 'checked',
		            initialValue: true,
		          })(
		            <Checkbox>Remember me</Checkbox>
		          )}
		          <Link className="login-form-forgot" to="/forgetPassword">Forgot password</Link>
		 		  <p className="login-form-err-message">{this.props.authentication.error}</p>
		          <Button 
		          	type="primary" 
		          	htmlType="submit" 
		          	className="login-form-button"
		          	loading={this.props.authentication.loading}
		          >
		            Log in
		          </Button>
		        </FormItem>
		    </Form>
		)
	}

}
const WrappedLoginForm= Form.create()(LoginForm);
function mapStateToProps(state) {
  return {authentication:state.authentication};
}
export default connect(mapStateToProps,actions)(WrappedLoginForm);