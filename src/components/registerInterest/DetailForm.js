import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,Mention,notification } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;

class DetailForm extends Component {
	componentWillMount(){
		this.state = {
			loading:false
		}
	}
	handleSubmit(e) {
	    e.preventDefault();
	    const customerType = this.props.customerType||'';
	    const environment = this.props.environment||'';
	    const content = this.props.content;
	    this.setState({loading:true})
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        const data = values;
	        data.describe = customerType;
	        data.environment = environment;
	        const url = 'https://q1oqe5jm8c.execute-api.us-east-1.amazonaws.com/v1/registerinterest';
	        axios.post(url,data)
	        .then(response=>{
	        	this.setState({loading:false})
	        	notification.open({
    				message: 'Thank you for registering',
    				description: content
  				});
	        })
	        .catch(err=>{
	        	this.setState({loading:false})
	        	console.log('error:',err.toString());
	        	notification.open({
    				message: 'Sorry for registering failed',
    				description: 'try again or contact us by phone or email'
  				});
	        })
	      }
	    });
	}
	render(){
		const { getFieldDecorator } = this.props.form;
	    let companyNameField = "";
	    let postCodeField = "";
	    if (this.props.customerType=="homeOwner" || this.props.customerType == 'other'){
	    	postCodeField = 
	    	<div>
	    		<label>*Post Code:</label>
		    	<FormItem>
		        	{getFieldDecorator('zipCode', {
		            	rules: [{
		              		type: 'string', message: 'The input is not valid post code',
		            	}, {
		              		required: true, message: 'Please input your post code!',
		            	}],
		          	})(
		            	<Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Post Code"/>
		          	)}
		        </FormItem>
	        </div>
	    }
	    if (this.props.customerType=='builder' || this.props.customerType =='integrator' || this.props.customerType=='other'){
	    	companyNameField =
	    	<div> 
	    		<label>*Company Name:</label>
		        <FormItem>
		        	{getFieldDecorator('companyName', {
		            	rules: [{required:true,message:'Please input the company name'}],
		          	})(
		            	<Input prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} placeholder="Company Name"/>
		          	)}
		        </FormItem>
		    </div>
	    }
		return(
			<Form onSubmit={this.handleSubmit.bind(this)}>
				{companyNameField}
				<label>Name:</label>
				<FormItem>
		          {getFieldDecorator('name', {
		            rules: [{ required: false}],
		          })(
		            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
		          )}
		        </FormItem>
		        <label>*Email:</label>
				<FormItem>
		        	{getFieldDecorator('email', {
		            	rules: [{
		              		type: 'email', message: 'The input is not valid E-mail!',
		            	}, {
		              		required: true, message: 'Please input your E-mail!',
		            	}],
		          	})(
		            	<Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email"/>
		          	)}
		        </FormItem>
		        <label>Phone:</label>
		        <FormItem>
		        	{getFieldDecorator('phone', {
		            	rules: [{required:false}],
		          	})(
		            	<Input prefix={<Icon type="mobile" style={{ fontSize: 13 }} />} placeholder="Phone"/>
		          	)}
		        </FormItem>
		        <label>*State/s:</label>
		        <FormItem>
		        	{getFieldDecorator('states', {
		            	rules: [{required:true,message:'Please input the state'}],
		          	})(
		            	<Input prefix={<Icon type="global" style={{ fontSize: 13 }} />} placeholder="States"/>
		          	)}
		        </FormItem>
		        {postCodeField}
		        <label>Addition Comment:</label>
		        <FormItem>
		        	{getFieldDecorator('postcode', {
		            	rules: [{required:false}],
		          	})(
		            	<Mention
						   style = {{height:100}}
						/>
		          	)}
		        </FormItem>
		        <FormItem>
          			<Button type="primary" loading={this.state.loading} htmlType="submit">Register</Button>
        		</FormItem>
			</Form>
		)
	}
}
const WrappedDetailForm = Form.create()(DetailForm);
export default WrappedDetailForm;
