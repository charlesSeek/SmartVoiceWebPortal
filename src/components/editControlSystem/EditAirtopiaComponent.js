import React, { Component } from 'react';
import { Form, Input, Icon,  Button,Checkbox,Select } from 'antd';
const Option = Select.Option;
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;
import axios from 'axios';
import _ from 'lodash';


class EditAirtopiaComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:false,
			errMessage:''
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const type = this.props.type||'';
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		const controlSystemName = this.props.currentControlSystem.Name||'';
		this.props.form.validateFields((err, values) => {
			const id = values.id||'';
			const owner = values.owner||'';
			const key = values.key||'';
			const name = values.name||'';
			const ip = "http://oauth.airtopia.com";
			const params = {id,owner,key,ip};
  			if (!err){
  				const data = {
  					controlSystem:type,
  					name,
  					params
  				}
  				console.log('data:',data);
  				const url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/"+
  							integratorEmail+"/customer/"+customerEmail+"/controlsystem?name="+controlSystemName;
  				console.log('data:',data);
  				this.setState({
  					loading:true,
  					errMessage:''
  				});
  				axios.put(url,data,{
  					headers:{Authorization:jwtToken}
  				})
  				.then(response=>{
  					this.setState({
  						loading:false,
  						errMessage:''
  					})
  					this.props.editControlSystemModalShow({Name:'',ControlSystem:'',Params:{}},false);
  					this.props.fetchCustomerInfo(integratorEmail,customerEmail,jwtToken);
  				})
  				.catch(err=>{
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
	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,setFieldsValue } = this.props.form;
		const type = this.props.type||'';
		let name = '';
		let owner = '';
		let id = '';
		let key = '';
		if (type == this.props.currentControlSystem.ControlSystem){
			name = this.props.currentControlSystem.Name;
			owner = this.props.currentControlSystem.Params.owner||'';
			id = this.props.currentControlSystem.Params.id||'';
			key = this.props.currentControlSystem.Params.key||'';
		}
		return(
			<Form onSubmit={this.handleSubmit.bind(this)}>
				<FormItem
					hasFeedback
					label="ControlSystem Name"
				>
					{getFieldDecorator('name', {
						initialValue:name,
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
					label="ID"
				>
					{getFieldDecorator('id', {
						initialValue:id,
			            rules: [
			            	{ required: true, message: 'Please input id!' }],
			        })(
			            <Input
			            	prefix={<Icon type="key"/>}
			            	placeholder="Airtopia ID"
			            />
			        )}
				</FormItem>
		        <FormItem 
		        	hasFeedback
		        	label="Owner"
		        >
		          {getFieldDecorator('owner', {
		          	initialValue:owner,
		            rules: [
		            	{required: true, message: 'Please input onwer!'}
		            ],
		          })(
		            <Input
		            	prefix={<Icon type="key"/>}
		            	placeholder="Airtopia Owner"
		            />
		          )}
		        </FormItem>
		        <FormItem 
		        	hasFeedback
		        	label="Key"
		        >
		          {getFieldDecorator('key', {
		          	initialValue:key,
		            rules: [
		            	{required: true, message: 'Please input key!'}
		            ],
		          })(
		            <Input
		            	prefix={<Icon type="key"/>}
		            	placeholder="Airtopia Key"
		            />
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

const WrappedControlSystemComponent= Form.create()(EditAirtopiaComponent);
function mapStateToProps(state){
	return {
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator,
		controlSystems:state.customer.customer.controlSystems,
		currentControlSystem:state.controlSystem.controlSystem
	}
}
export default connect(mapStateToProps,actions)(WrappedControlSystemComponent);