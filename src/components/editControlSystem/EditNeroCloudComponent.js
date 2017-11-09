import React, { Component } from 'react';
import { Form, Input, Icon,  Button,Checkbox,Select } from 'antd';
const Option = Select.Option;
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;
import axios from 'axios';
import _ from 'lodash';


class EditNeroCloudComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:false,
			errMessage:'',
			continueButtonStyle:'hidden',
			submitButtonStyle:'add-control-system-button',
			deviceNumbers:[],
			deviceNumberStyle:'hidden',
			neroParams:null
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const type = this.props.type||'';
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		const neroParams = this.state.neroParams;
		const controlSystemName = this.props.currentControlSystem.Name||'';
		this.props.form.validateFields((err, values) => {
			const name = values.name||'';
			const neroUserName = values.username||'';
			let MMSAuth = '';
			let MMSAuthSig = '';
			let NeroAccountNumber = '';
			let NeroDeviceNumber = '';
			let SHA1Key = '';
			let validTil = '';
			if (!neroParams){
				MMSAuth = this.props.currentControlSystem.Params.MMSAuth||'';
				MMSAuthSig = this.props.currentControlSystem.Params.MMSAuthSig||'';
				NeroAccountNumber = this.props.currentControlSystem.Params.NeroAccountNumber||'';
				NeroDeviceNumber = this.props.currentControlSystem.Params.NeroDeviceNumber||'';
				SHA1Key = this.props.currentControlSystem.Params.SHA1Key||'';
				validTil = this.props.currentControlSystem.Params.validTil||'';
			}else {
				MMSAuth = _.get(neroParams,'MMSAuth','');
				MMSAuthSig = _.get(neroParams,'MMSAuthSig','');
				NeroAccountNumber = _.get(neroParams,'accountNum','');
				NeroDeviceNumber = values.deviceNumber||'';
				SHA1Key = _.get(neroParams,'SHA1','');
				validTil = _.get(neroParams,'validTil','');
			}
			const params = {
				MMSAuth,
				MMSAuthSig,
				NeroAccountNumber,
				NeroDeviceNumber,
				neroUserName,
				SHA1Key,
				validTil
			};
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
	getDeviceNumber(){
		const jwtToken = localStorage.getItem('jwtToken');
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		this.props.form.validateFields((err, values) => {
			if (!err){
				console.log('username and password are valid');
				const username = values.username||'';
				const password = values.password||'';
				const url = 'https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/'+
				integratorEmail+'/customer/'+customerEmail+'/controlsystem/getdevicenumber?username='+
				username+'&password='+password;
				this.setState({
					loading:true
				})
				axios.get(url,{
					headers:{Authorization:jwtToken}
				})
				.then(response=>{
					const deviceNumbers = JSON.parse(response.data.data.devices).Devices||[];
					const neroParams = response.data.data.params||{};
					console.log('deviceNumbers:',deviceNumbers);
					this.setState({
						errMessage:'',
						loading:false,
						continueButtonStyle:'hidden',
						submitButtonStyle:'add-control-system-button',
						deviceNumbers:deviceNumbers,
						deviceNumberStyle:'',
						neroParams: neroParams
					})
				})
				.catch(err=>{
					console.log('error:',err);
					this.setState({
						errMessage:'get device number error,confirm username and password',
						loading:false
					})
				})
			}
		})
	}
	renderDeviceNumberSelect(){
		const deviceNumbers = this.state.deviceNumbers||[];
		const { getFieldDecorator } = this.props.form;
		if (deviceNumbers.length==0){
			return null
		}
		const optionList = deviceNumbers.map(device=>{
			return <Option key= {device.PK_Device} value={device.PK_Device}>Device Number,{device.PK_Device}</Option>
		})
		return (
			<FormItem 
		        	hasFeedback
		        	label="Device Number"
		        	className={this.state.deviceNumberStyle}
		        >
		        {getFieldDecorator('deviceNumber', {
		            rules: [
		            	{required: true, message: 'Please select device number!'}
		            ],
		        })(
		            <Select 
		        		size="large" 
		        		style={{width:'100%'}}
		        	>
				      {optionList}
				    </Select>
		        )}
		    </FormItem>
		)
	}
	onPasswordChange(e){
		this.setState({
			continueButtonStyle:'add-control-system-button',
			submitButtonStyle:'hidden'
		})
	}
	render(){
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,setFieldsValue,getFieldValue } = this.props.form;
		const type = this.props.type||'';
		let name = '';
		let username = '';
		let password = '';
		if (type == this.props.currentControlSystem.ControlSystem){
			name = this.props.currentControlSystem.Name;
			username = this.props.currentControlSystem.Params.neroUserName||'';
			password = 'fakepassword';
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
		        	label="User Name"
		        >
		          {getFieldDecorator('username', {
		          	initialValue:username,
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
		        	label="Password"
		        >
		          {getFieldDecorator('password', {
		          	initialValue:password,
		            rules: [
		            	{required: true, message: 'Please input password!'}
		            ],
		          })(
		            <Input
		            	prefix={<Icon type="lock"/>}
		            	type="password"
		            	placeholder="Password"
		            	onChange={this.onPasswordChange.bind(this)}
		            />
		          )}
		        </FormItem>
		        {this.renderDeviceNumberSelect()}
		        <p className="control-system-error-message">{this.state.errMessage}</p>
		        <FormItem>
		          <Button 
		          	type="primary"
		          	loading={this.state.loading}
		          	className={this.state.continueButtonStyle}
		          	onClick = {this.getDeviceNumber.bind(this)}
		          >
		            Continue
		          </Button>
		          <Button 
		          	type="primary" 
		          	htmlType="submit" 
		          	loading={this.state.loading}
		          	className={this.state.submitButtonStyle}
		          >
		            Submit
		          </Button>
		          <Button 
		          	type="default" 
		          	className={this.state.submitButtonStyle}
		          	onClick = {this.props.handleCancel}
		          >
		            Cancel
		          </Button>
		        </FormItem>
		    </Form>
		)
	}
}

const WrappedControlSystemComponent= Form.create()(EditNeroCloudComponent);

function mapStateToProps(state){
	return {
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator,
		controlSystems:state.customer.customer.controlSystems,
		currentControlSystem:state.controlSystem.controlSystem
	}
}
export default connect(mapStateToProps,actions)(WrappedControlSystemComponent);