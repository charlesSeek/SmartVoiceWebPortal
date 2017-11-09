import React, { Component } from 'react';
import { Layout,Menu } from 'antd';
import { SocialIcons} from 'react-social-icons';
import '../../../styles/smartvoice-footer.css';


const { Footer } = Layout;

class SmartVoiceFooter extends Component {
	render(){
		const urls = [
  			'https://linkedin.com/in/',
 			'https://facebook.com',
  			'https://youtube.com',
  			'http://twitter.com'
		];
		return(
			<Footer 
				className="smartvoice-footer"
			>
      			<SocialIcons urls={urls} />
      			<p>Smart Voice ©2017 Created by Smart Automation Systems</p>
    		</Footer>
		)
	}
}
export default SmartVoiceFooter;
