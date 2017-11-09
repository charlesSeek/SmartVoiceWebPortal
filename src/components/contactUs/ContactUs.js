import React, { Component } from 'react';
import { Card,Icon } from 'antd';
import '../../../styles/contact-us.css';

class ContactUs extends Component{
	render(){
		return(
			<div className="contact-us-div">
				<Card
					title="Contact US"
					className="contact-us-card"
				>
					<p className="margin-20">For New Sales & Integrator Enquiries:</p>
					<div className="sales-inquiry">
						<Icon type="mail"/>
						<p className="contact-us-p-item">sales@smartvoice.com.au</p>
					</div>
					<p className="margin-20">For Existing Integrators & Training Enquiries:</p>
					<div className="existed-support-inquiry">
						<Icon type="mail"/>
						<p className="contact-us-p-item">support@smartvoice.com.au</p>
					</div>
					<p className="margin-20">For Immediate Enquiries,please call:</p>
					<div className="immediate-inquiry">
						<Icon type="phone"/>
						<p className="contact-us-p-item">1300-211-644</p>
					</div>
					<p className="margin-20">Physical Office/Showroom Address:</p>
					<p>220 Osborne Street, Williamstown, VIC 3016</p>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.8559866464016!2d144.88756795089245!3d-37.863659979643884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad666bf4a6972f3%3A0x6068e8c464ab572c!2s220+Osborne+St%2C+Williamstown+VIC+3016!5e0!3m2!1sen!2sau!4v1482373345599"/>
                </Card>
            </div>
        )
    }
}

export default ContactUs;