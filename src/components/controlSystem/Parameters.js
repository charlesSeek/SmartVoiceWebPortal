import React,{ Component } from 'react';

class Parameters extends Component {
	constructor(props){
		super(props);
	}
	renderParameters(){
		const params = JSON.parse(this.props.params)||{};
		console.log('parameters:',params);
		const data = [];
		for (let prop in params){
			const key = prop;
			const value = params[prop].toString();
			console.log('key:',key);
			console.log('value:',value);
			if (typeof value =='object'){
				for (let childProp in value){
					const childkey = childProp;
					const childValue = value[childKey];
					data.push(
						<p className="parameters-item" key={childKey}>{childKey}:{childValue}</p>
					);
				}
			}else{
				data.push(
					<p className="parameters-item" key={key}>{key}:{value}</p>
				)
			}

		}
		return data;
	}
	render(){
		return(
			<div className="parameters-div">
				<p className="parameters-item" key={this.props.params}>Parameters:</p>
				{this.renderParameters()}
			</div>
		)
	}
}
export default Parameters;