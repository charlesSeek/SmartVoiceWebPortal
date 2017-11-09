import React , { Component } from 'react';
import { Card,Radio,Checkbox,Form, Icon, Input, Button,Select } from 'antd';
import '../../../styles/register-interest.css';
import WrappedDetailForm from './DetailForm';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;


class RegisterInterest extends Component {
	componentWillMount(){
		this.state = {
			describe:'',
			residential:'',
			commercial:'',
			disability:'',
			other:'',
			name:'',
			email:'',
			companyName:'',
			phone:'',
			states:'',
			postCode:'',
			comments:'',
			errMessage:'',
			welcomeContent:'',
			registerDescribeStyle:'register-interest',
			registerDetailsStyle:'register-details',
			registerWelcomeStyle:'hidden',
			registerButtonContent:'Register',
			registerButtonStyle:'btn btn-primary btn-lg',
			registerButtonDisabled:''
		}
	}
	onChangeDescribe(event){
		const value = event.target.value;
		console.log("value:",value)
		switch (value){
			case 'integrator':
				this.setState({
					describe:value,
					welcomeContent:'You will soon be contacted by a member of the Smart Voice team to assist you in becoming a Smart Voice Installer.'
				})
				break;
			case 'builder':
				this.setState({
					describe:value,
					welcomeContent:'You will soon be contacted by a member of the Smart Voice team to assist you in your Smart Voice enquiry.'
				})
				break;
			case 'other':
				this.setState({
					describe:value,
					welcomeContent:'You will soon be contacted by a member of the Smart Voice team to assist you in your Smart Voice enquiry.'
				})
				break;
			case 'home owner':
				this.setState({
					describe:value,
					welcomeContent:'You will soon be contacted by a Smart Voice registered installer to assist you in your Smart Voice service.'
				})
				break;
			default:
				break;
		}
	}
	onChangeResidential(event){
		const flag = event.target.checked;
		this.setState({residential:flag})
		
	}
	onChangeCommercial(event){
		const flag = event.target.checked;
		this.setState({commercial:flag})
	}
	onChangeDisability(event){
		const flag = event.target.checked;
		this.setState({disability:flag})
		
	}
	onChangeOther(event){
		const flag = event.target.checked;
		this.setState({other:flag})
	}
	renderDetailsForm(){
		const describe = this.state.describe;
		const residential = this.state.residential;
		const commercial = this.state.commercial;
		const disability = this.state.disability;
		const other = this.state.other;
		let environmentArray = [];
		if (residential){
			environmentArray.push(' '+residential);
		}
		if (commercial){
			environmentArray.push(' '+commercial);
		}
		if (disability){
			environmentArray.push(' '+disability);
		}
		if (other){
			environmentArray.push(' '+other);
		}
		const environment = environmentArray.toString();
		if (describe && (residential||commercial||disability||other)){
			return (
				<Card title="Your Detail"
					className="detail-card animated fadeInRight"
				>
					<WrappedDetailForm 
						customerType={describe} 
						environment={environment}
						content = {this.state.welcomeContent}
					/>
				</Card>
			)
		}
		return null;
	}
	render(){
		return(
			<div className="register-interest-div">
				<Card title="Register Your Interest" 
					className="describe-card animated fadeInLeft"
				>
					<label>Which best describes you?</label>
					<RadioGroup
						className="describe-radio-group"
						onChange = {this.onChangeDescribe.bind(this)}
					>
	    				<Radio 
	    					className="describe-radio-item" 
	    					value="home owner" 
	    				>
	    					A Home owner
	    				</Radio>
	        			<Radio 
	        				className="describe-radio-item" 
	        				value="builder" 
	        			>
	        				A Builder
	        			</Radio>
	        			<Radio 
	        				className="describe-radio-item" 
	        				value="integrator" 
	        			>
	        				An Integrator
	        			</Radio>
	        			<Radio 
	        				className="describe-radio-item" 
	        				value="other" 
	        			>
	        				Other
	        			</Radio>
	        		</RadioGroup>
	        		<label>Which environments are you looking to use Smart Voice in?</label>
					<Checkbox 
						className="describe-checkbox" 
						onChange={this.onChangeResidential.bind(this)}
					>
						Residential
					</Checkbox>
					<Checkbox 
						className="describe-checkbox"
						onChange={this.onChangeCommercial.bind(this)}
					>
						Commercial
					</Checkbox>
					<Checkbox 
						className="describe-checkbox"
						onChange={this.onChangeDisability.bind(this)}
					>
						Disablity
					</Checkbox>
					<Checkbox 
						className="describe-checkbox"
						onChange={this.onChangeOther.bind(this)}
					>
						Other
					</Checkbox>
  				</Card>
  				{this.renderDetailsForm()}
			</div>
		)
	}

}

export default RegisterInterest;