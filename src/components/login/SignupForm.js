import React, { Component } from 'react';
import '../../../styles/login-form.css';
import { Form, Icon, Input, Button,Checkbox } from 'antd';
import { Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignupForm extends Component {
	componentWillMount(){
		this.state = {
			loading:false,
			errMessage:''
		}
	}
	componentDidMount() {
    	this.props.form.validateFields();
  	}
  	handleSubmit(e){
  		e.preventDefault();
  		this.setState({loading:true});
  		this.props.form.validateFields((err, values) => {
  			if (!err){
  				const username = values.email||'';
  				const password = values.password||'';
  				const rememberme = values.rememberme||false;
  				console.log('values:',JSON.stringify(values));
  				const url = "https://2y7j7iy0cf.execute-api.us-east-1.amazonaws.com/v1/integrator/signin"
  				axios.post(url,{username,password,rememberme})
  				.then(response=>{
  					this.setState({loading:false,errMessage:''});
  					console.log('response:',JSON.stringify(response));
  					const jwt = response.data.jwtToken||'';
  					localStorage.setItem('jwtToken', jwt);
  					this.props.authenticate(true,username);
  					console.log('state:',this.props)
  				})
  				.catch(err=>{
  					this.setState({loading:false});
  					this.setState({errMessage:err.response.data.message})
  				})
  			}
  		})
  	}
  	checkPassword (rule, value, callback) {
	    const form = this.props.form;
	    if (value && value !== form.getFieldValue('password')) {
	      callback('Two passwords that you enter is inconsistent!');
	    } else {
	      callback();
	    }
	}
	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const userNameError = isFieldTouched('userName') && getFieldError('userName');
    	const passwordError = isFieldTouched('password') && getFieldError('password');
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
		        <FormItem hasFeedback>
		          {getFieldDecorator('confirmPassword', {
		            rules: [
		            {
			           required: true, message: 'Please confirm your password!',
			        }, {
			              validator: this.checkPassword.bind(this)
			        }
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
		        <FormItem hasFeedback>
		          {getFieldDecorator('invitationKey', {
		            rules: [
		            { required: true, message: 'Please input your invitation key!' }],
		          })(
		            <Input
		            	className = "login-form-input-mail"
		            	prefix={<Icon type="key" style={{ fontSize: 20 }}/>}
		            	placeholder="Invitation Key"
		            />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('telstraCustomer', {
		            valuePropName: 'checked',
		            initialValue: false,
		          })(
		            <Checkbox>Telstra Customer</Checkbox>
		          )}
		 		  <p className="login-form-err-message">{this.state.errMessage}</p>
		          <Button 
		          	type="primary" 
		          	htmlType="submit" 
		          	className="login-form-button"
		          	loading={this.state.loading}
		          >
		            Sign Up
		          </Button>
		        </FormItem>
		    </Form>
		)
	}

}
const WrappedSignupForm= Form.create()(SignupForm);
function mapStateToProps(state) {
  return {authenticated:state.authenticated, integrator:state.integrator};
}
export default connect(mapStateToProps,actions)(WrappedSignupForm);