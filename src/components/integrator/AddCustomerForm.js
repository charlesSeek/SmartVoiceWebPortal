import React, { Component } from 'react';
import { Form, Input, Icon,  Button,Checkbox } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;
import axios from 'axios';
import _ from 'lodash';

class AddCustomerForm extends Component {
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
  	handleConfirmBlur = (e) => {
    	const value = e.target.value;
    	this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  	}
  	checkPassword = (rule, value, callback) => {
	    const form = this.props.form;
	    if (value && value !== form.getFieldValue('password')) {
	      callback('Two passwords that you enter is inconsistent!');
	    } else {
	      callback();
	    }
	}
  	checkConfirm = (rule, value, callback) => {
	    const form = this.props.form;
	    if (value && this.state.confirmDirty) {
	      form.validateFields(['confirm'], { force: true });
	    }
	    callback();
	}
  	handleSubmit(e){
  		e.preventDefault();
  		const jwt = localStorage.getItem('jwtToken');
		const integratorEmail = this.props.integrator.email;
  		this.props.form.validateFields((err, values) => {
  			if (!err){
  				this.setState({loading:true});
			    const url ='https://h2gf88qrka.execute-api.us-east-1.amazonaws.com/v1/integrator/'+integratorEmail+'/customer' 
			    axios.post(url,values,{
			      headers:{Authorization:jwt}
			    })
			    .then(response=>{
			    	this.props.customerAddModalShow(false);
			    	this.props.fetchIntegratorInfo(integratorEmail,jwt);
			    })
			    .catch(err=>{
			    	console.log('error:',JSON.parse(err.response.data.errorMessage).message);
			    	const errMessage = _.get(err,'response.data.errorMessage','');
			    	let message = '';
			    	if (!errMessage){
			    		message = 'internal error';
			    	}else {
			    		message = JSON.parse(errMessage).message||'internal error';
			    	}
			    	this.setState({loading:false,errMessage:message});
			    })

  			}
  		})
  	}
  	handleCancel(){
  		this.state = {
			loading:false,
			errMessage:''
		}
  		this.props.form.resetFields();
  		this.props.customerAddModalShow(false);
  	}
	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		//const userNameError = isFieldTouched('userName') && getFieldError('userName');
    	//const passwordError = isFieldTouched('password') && getFieldError('password');
		return(
			<Form onSubmit={this.handleSubmit.bind(this)}>
				<FormItem
					hasFeedback
					label="Customer Name"
				>
					{getFieldDecorator('name', {
			            rules: [
			            	{ required: true, message: 'Please input your customer name!' }],
			        })(
			            <Input
			            	prefix={<Icon type="user"/>}
			            	placeholder="Customer Name"
			            />
			        )}
				</FormItem>
				<FormItem
					hasFeedback
					label="Customer Address"
				>
					{getFieldDecorator('address', {
			            rules: [
			            	{ required: true, message: 'Please input your customer address!' }],
			        })(
			            <Input
			            	prefix={<Icon type="user"/>}
			            	placeholder="Customer Address"
			            />
			        )}
				</FormItem>
				<FormItem
					hasFeedback
					label="Contact Email"
				>
					{getFieldDecorator('email', {
			            rules: [
			            	{type:'email', message:'email is not valid!'},
			            	{ required: true, message: 'Please input your customer email!' }],
			        })(
			            <Input
			            	prefix={<Icon type="mail" />}
			            	placeholder="Customer contact email"
			            />
			        )}
				</FormItem>
		        <FormItem 
		        	hasFeedback
		        	label="Password"
		        >
		          {getFieldDecorator('password', {
		            rules: [
		            { min: 6, message:'Password min length is 6'},
		            {required: true, message: 'Please input your password!'},
					{ pattern:/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,message:'Password should contains upper case, lower case and number'}
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
		          	label="Confirm Password"
		          	hasFeedback
			    >
		          {getFieldDecorator('confirm', {
		            rules: [{
		              required: true, message: 'Please confirm your password!',
		            }, {
		              validator: this.checkPassword,
		            }],
		          })(
		            <Input 
		            	prefix={<Icon type="lock"/>}
		            	type="password" 
		            	onBlur={this.handleConfirmBlur}
		            />
		          )}
		        </FormItem>
		        <p className="add-customer-error-message">{this.state.errMessage}</p>
		        <FormItem>
		          <Button 
		          	type="primary" 
		          	htmlType="submit" 
		          	loading={this.state.loading}
		          	className="add-customer-submit-button"
		          >
		            Submit
		          </Button>
		           <Button 
		          	type="primary"  
		          	onClick = {this.handleCancel.bind(this)}
		          >
		            Cancel
		          </Button>
		        </FormItem>
		    </Form>
		)
	}

}
const WrappedAddCustomerForm = Form.create()(AddCustomerForm);
function mapStateToProps(state) {
	return {
  		integrator:state.integrator.integrator
  	}
}
export default connect(mapStateToProps,actions)(WrappedAddCustomerForm);