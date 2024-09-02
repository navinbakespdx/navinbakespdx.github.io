import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./InfoSection.css";
import { Link } from "react-router-dom";

function InfoSection() {
	return (
		<div className="info-section">
			<div id="carousel" className="carousel content">
				<Carousel fade>
					<Carousel.Item>
						<img
							src="./images/IMG_3977.JPG"
							className="d-block w-100 carousel_img img_1"
							alt="..."
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src="./images/IMG_5108.jpeg"
							className="d-block w-100 carousel_img img_2"
							alt="..."
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src="./images/IMG_5127.jpeg"
							className="d-block w-100 carousel_img img_3"
							alt="..."
						/>
					</Carousel.Item>
				</Carousel>
			</div>
			<div id="frontpage" className="info-text content">
				<h1 className="display-1 text-info	">Navin Bakes</h1>
				<Link to="/contact" style={{ textDecoration: "none" }}>
					<div className="d-grid gap-2">
						<Button variant="info" size="lg">
							Contact <i className="bi-envelope-fill"></i>
						</Button>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default InfoSection;
