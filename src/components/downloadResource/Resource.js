import React, { Component } from 'react'
import {Link} from 'react-router';
import { Card,Icon,Button,Avatar } from 'antd'
import '../../../styles/download-resource.css';
import echoAvator from '../../../assets/images/amazon-echo-black.jpg';
import remoteSetup from '../../../assets/images/remote-setup.jpeg';
import examplePhrase from '../../../assets/images/example-phrase.jpeg';
import cheatSheet from '../../../assets/images/cheat-sheet.png';
import brochure from '../../../assets/images/brochure.png';
import alexaApp from '../../../assets/images/alexa-app.png';
import orderForm from '../../../assets/images/order-form.png';
import location from '../../../assets/images/location.png';
import essentialSkill from '../../../assets/images/essential-skill.jpeg';
import echoSetupPdf from '../../../assets/resources/Amazon_Echo_setup.pdf';

class DownloadResource extends Component {
	render(){
		return(
			<div className="download-resource-div">
				<div className="download-resource-content">
					<Card className="download-resource-card">
						<Avatar shape="square" size="large"  src={echoAvator}/>
						<p>Echo Setup PDF</p>
						<a href='' download><Button size="large" type="primary" icon="cloud-download">Download</Button></a>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={remoteSetup} />
						<p>Remote Access Setup PDF</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={examplePhrase}/>
						<p>Example Phrase PDF</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={cheatSheet} />
						<p>Example Smart Voice Cheat Sheet PDF</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={brochure} />
						<p>Brochure</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={alexaApp} />
						<p>Alexa App(Android)</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={orderForm} />
						<p>Smart Voice Order Form</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={location} />
						<p>Default Location Setup PDF</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={cheatSheet} />
						<p>Example Smart Voice Cheat Sheet PUB(edited)</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
					<Card className="download-resource-card">
						<Avatar shape="square" size="large" src={essentialSkill} />
						<p>How to: Smart Voice - Essentials PDF</p>
						<Button size="large" type="primary" icon="cloud-download">Download</Button>
					</Card>
				</div>
				<div className="download-resource-back-button">
					<Link to="/integrator"><Button type="primary">Back</Button></Link>
				</div>
			</div>
		)
	}
}
export default DownloadResource;