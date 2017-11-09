import React,{Component } from 'react';
import { Form, Input, Icon,  Button,Checkbox,Select,Switch} from 'antd';
const Option = Select.Option;
import { connect } from 'react-redux';
import * as actions from '../../actions';
const FormItem = Form.Item;
import axios from 'axios';
import _ from 'lodash';


class LightsCBUS extends Component {
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
			const aa = values.applicationAddress||'';
			const ga1 = values.groupAddress1||'';
			const ga2 = values.groupAddress2||'';
			const ga3 = values.groupAddress3||'';
			const dimmable =values.dimmable||false;
  			if (!err){
  				const data = {
  					name:itemName,
  					type:itemType,
  					controlSystemName:controlSystemName,
  					params:{
  						AA:aa,
  						GA1:ga1,
  						Dimmabel:dimmable
  					}
  				}
  				if (ga2){
  					data.params.GA2 = ga2;
  				}
  				if (ga3){
  					data.params.GA3 = ga3;
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
					label="Application Address"
				>
					{getFieldDecorator('applicationAddress', {
			            rules: [
			            	{ required: true, message: 'Please input application address!' }],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Application Address"
			            />
			        )}
				</FormItem>
				<FormItem
					hasFeedback
					label="Group Address 1"
				>
					{getFieldDecorator('groupAddress1', {
			            rules: [
			            	{ required: true, message: 'Please input group address 1!' }],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Group Address 1"
			            />
			        )}
				</FormItem>
		        <FormItem
					hasFeedback
					label="Group Address 2"
				>
					{getFieldDecorator('groupAddress2', {
			            rules: [],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Group Address 2"
			            />
			        )}
				</FormItem>
				<FormItem
					hasFeedback
					label="Group Address 3"
				>
					{getFieldDecorator('groupAddress3', {
			            rules: [
			            	],
			        })(
			            <Input
			            	prefix={<Icon type="home"/>}
			            	placeholder="Group Address 3"
			            />
			        )}
				</FormItem>
				<FormItem
					label="Dimmable"
				>
					{getFieldDecorator('dimmable', {
						initialValue:false,
			            rules: [
			            	],
			        })(
			            <Switch/>
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
const WrappedLightsCBUS= Form.create()(LightsCBUS);
function mapStateToProps(state){
	return {
		customerEmail:state.authentication.customer,
		integratorEmail:state.authentication.integrator
	}
}
export default connect(mapStateToProps,actions)(WrappedLightsCBUS);