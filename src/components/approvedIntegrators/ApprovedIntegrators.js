import React, { Component } from 'react';
import { Link } from 'react-router'
import '../../../styles/approved-integrator.css';
import { Select,Button } from 'antd';
import IntegratorsData from './IntegratorsData';
import IntegratorInfo from './IntegratorInfo';
const Option = Select.Option;

const countryData = ['Australia','New Zealand','Hong Kong','Singapore','United Kingdom'];
const areaData = {
	'Australia':['Victoria & Tasmania','South Australia & Northern Territory','New South Wales','Western Australia','Queensland'],
	'New Zealand':[],
	'Hong Kong': [],
	'Singapore':[],
	'United Kingdom':[]
}

class ApprovedIntegrators extends Component {
	componentWillMount(){
		this.state = {
			country:countryData[0],
			area:areaData[countryData[0]][0]
		}
	}
	onChangeCountry(value){
		console.log('coutry value:',value);
		this.setState({
			country:value
		})
	}
	onChangeArea(value){
		console.log('area value:',value);
		this.setState({
			area:value
		})
	}
	renderIntegratorList(){
		const country = this.state.country;
		const area = this.state.area;
		const countryData = IntegratorsData.country.find(item=>{
			return item.countryName === country;
		})
		if (countryData.isCityCountry){
			const integrators = countryData.integrators||[];
			if (integrators.length==0){
				return (
					<div className="approved-integrator-contact-div">
						<p className="approved-integrator-message">We are looking for quality C-Bus integrators 
						with a passion for voice control. Please contact Smart Voice.
						</p>
						<Link to="/contact"><Button type="primary" className="contact-button">Contact US</Button></Link>
					</div>
				)
			}
			integrators.sort(function(a,b){
				return (a["Company Name"] > b["Company Name"])?1:((a["Company Name"] < b["Company Name"])?-1:0);
			})
			console.log('integrators:',JSON.stringify(integrators));
			return integrators.map(integrator=>{
				return <IntegratorInfo key={integrator.Email} integrator={integrator}/>
			})

		}else{
			const areaData = countryData.areas.find(item=>{
				return item.name === area;
			})
			if (areaData){
				const integrators = areaData.integrators||[];
				integrators.sort(function(a,b){
					return (a["Company Name"] > b["Company Name"])?1:((a["Company Name"] < b["Company Name"])?-1:0);
						
					
				})
				console.log('integrators:',JSON.stringify(integrators));
				return integrators.map(integrator=>{
					return <IntegratorInfo key={integrator.Email} integrator={integrator}/>
				})
			}else{
				return (
					<div className="approved-integrator-contact-div">
						<p className="approved-integrator-message">We are looking for quality C-Bus integrators 
						with a passion for voice control. Please contact Smart Voice.
						</p>
						<Link to="/contact"><Button type="primary" className="contact-button">Contact US</Button></Link>
					</div>
				)
			}
		}

	}
	render(){
		const countryOptions = countryData.map(item=>{
			return <Option key={item}>{item}</Option>
		})
		const country = this.state.country;
		const areaOptions = areaData[country].map(item=>{
			return <Option key={item}>{item}</Option>
		})
		const areaSelect = areaOptions.length?
			<Select 
        			value={this.state.area}
        			className="approved-integrator-area"
        			onChange = {this.onChangeArea.bind(this)}
        		>
          		{areaOptions}
        	</Select>:''
		return(
			<div className="approved-integrator-div">
				<Select 
					defaultValue={this.state.country}
					className="approved-integrator-country"
					onChange = {this.onChangeCountry.bind(this)}
				>
          			{countryOptions}
        		</Select>
        		{areaSelect}
        		<div className="integrators-list">
        			{this.renderIntegratorList()}
        		</div>
			</div>
		)
	}

}
export default ApprovedIntegrators;