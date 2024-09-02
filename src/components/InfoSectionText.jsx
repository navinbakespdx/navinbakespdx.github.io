import React from "react";
import "./InfoSectionText.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function InfoSectionText() {
	return (
		<div className="info-content">
			<h1 className="text-info" style={{ textAlign: "center" }}>
				About <i className="bi-info-square-fill"></i>
			</h1>
			<p>
				Since I started baking when I was in middle school, it has become one of
				my favorite hobbies. I started by learning the basics like cakes,
				cookies and brownies. Over the years I have expanded to baking bread and
				pastries, but my favorite thing to make is still the classic chocalate
				chip cookie! I recently obtained my food handlers certificate in hopes
				of baking at a more professional level. I am currently studying computer
				science at UC Davis and thought it would be fun to document the things I
				make on a website.
			</p>
			<Link to="/contact" style={{ textDecoration: "none" }}>
				<div style={{ textAlign: "center", marginTop: "20px" }}>
					<Button variant="info" size="lg" href="/contact">
						Contact Me!
					</Button>
				</div>
			</Link>
		</div>
	);
}

export default InfoSectionText;
