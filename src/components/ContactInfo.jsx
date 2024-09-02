import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import "./ContactInfo.css";

function ContactInfo() {
	return (
		<div className="contact-content">
			<div className="image-grid">
				<img src="./images/IMG_1902.jpeg" alt="..."></img>
				<img
					className="image-grid-row-2"
					src="./images/IMG_1905.jpg"
					alt="..."
				></img>
				<img src="./images/IMG_1886.jpeg" alt="..."></img>
			</div>
			<div className="contact-text">
				<h1 className="Contact">Contact</h1>
				<p style={{ fontSize: 20 }}>
					For more information please email me at: navinbakespdx@gmail.com
				</p>
				<div className="d-grid gap-2 contact-button">
					<Button
						variant="primary"
						size="lg"
						href="mailto:navinbakespdx@gmail.com"
					>
						Click here to email me <i className="bi-box-arrow-up-right"></i>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
