import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-xxl">
					<Link to="/" className="navbar-brand">
						<span
							className="fw-bold text-light display-6"
							style={{ fontFamily: "Pacifico" }}
						>
							Navin Bakes <i className="bi-cookie"></i>
						</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end align-center"
						id="navbarNav"
					>
						<ul className="navbar-nav ms-auto mb-1 mb-lg-0">
							<li className="nav-item active">
								<Link to="/" className="nav-link">
									<span
										data-bs-toggle="collapse"
										data-bs-target="#navbarNav"
										className="text-light"
									>
										Home <i className="bi-house-fill"></i>
									</span>
								</Link>
							</li>
							<li className="nav-item">
								<HashLink to="/#items" className="nav-link">
									<span
										data-bs-toggle="collapse"
										data-bs-target="#navbarNav"
										className="text-light"
									>
										Items
									</span>
								</HashLink>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									<span
										data-bs-toggle="collapse"
										data-bs-target="#navbarNav"
										className="text-light"
									>
										Contact
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
