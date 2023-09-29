import React from "react";

export default function Contact({img, name, phone, mail}) {
	return (
        
		<div className="contact-card">
			<img src={img}/>
			<h3>{name}</h3>
			<div className="info-group">
				<img src="./images/phone-icon.png" />
				<p>{phone}</p>
			</div>
			<div className="info-group">
				<img src="./images/mail-icon.png" />
				<p>{mail}</p>
			</div>
		</div>
	)
}
