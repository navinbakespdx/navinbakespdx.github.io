import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import Contact from "./components/pages/Contact";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<HomePage />} />
					<Route path="/contact" exact element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
