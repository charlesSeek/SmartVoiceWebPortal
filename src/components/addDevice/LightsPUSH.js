import React,{Component } from 'react';
import { Form, Input, Icon,  Button,Checkbox,Select,Switch} from 'antd';
const Option = Select.Option;
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;
import axios from 'axios';
import _ from 'lodash';


class LightsPUSH extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:false,
			errMessage:''
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const controlSystemName = this.props.controlSystemName||'';
		const itemType = this.props.itemType||'';
		const itemName = this.props.itemName||'';
		const integratorEmail = this.props.integratorEmail||'';
		const customerEmail = this.props.customerEmail||'';
		const jwtToken = localStorage.getItem('jwtToken');
		this.props.form.validateFields((err, values) => {
			console.log('values:',values);
			const turnOn = values.turnOn||'';
			const turnOff = values.turnOff||'';
			const turnLow = values.turnLow||'';
			const turnBright = values.turnBright||'';
  			if (!err){
  				const data = {
  					name:itemName,
  					type:itemType,
  					controlSystemName:controlSystemName,
  					params:{
  						TurnOn:turnOn,
  						TurnOff:turnOff
  					}
  				}
  				if (turnLow){
  					data.params.TurnLow = turnLow;
  				}
  				if (turnBright){
  					data.params.TurnBright = turnBright;
  				}
  				console.log('data:',data);
  				/*const url = "https://zkfbp60kh7.execute-api.us-east-1.amazonaws.com/v1/integrator/"+
  							integratorEmail+"/customer/"+customerEmail+"/controlsystem"
  				console.log('data:',data);
  				this.setState({
  					loading:true,
  					errMessage:''
  				});
  				axios.post(url,data,{
  					headers:{Authorization:jwtToken}
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
			    	const errMessage = _.get(err,'response.data.errorMessage','');
			    	let message = '';
			    	if (!errMessage){
			    		message = 'internal error';
			    	}else {
			    		message = JSON.parse(errMessage).message||'internal error';
			    	}
			    	this.setState({loading:false,errMessage:message});
  				})*/
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
					label="Turn On"
				>
					{getFieldDecorator('turnOn', {
			            rules: [
			            	{ required: true, message: 'Please input macro number of turn on!' }],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Macro Number"
			            />
			        )}
				</FormItem>
				<FormItem
					hasFeedback
					label="Turn Off"
				>
					{getFieldDecorator('turnOff', {
			            rules: [
			            	{ required: true, message: 'Please input macro number of turn off!' }],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Macro Number"
			            />
			        )}
				</FormItem>
		        <FormItem
					hasFeedback
					label="Turn Low"
				>
					{getFieldDecorator('turnLow', {
			            rules: [],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Macro Number"
			            />
			        )}
				</FormItem>
				<FormItem
					hasFeedback
					label="Turn Bright"
				>
					{getFieldDecorator('turnBright', {
			            rules: [
			            	],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Macro Number"
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
const WrappedLightsPUSH= Form.create()(LightsPUSH);
function mapStateToProps(state){
	return {
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator
	}
}
export default connect(mapStateToProps,actions)(WrappedLightsPUSH);