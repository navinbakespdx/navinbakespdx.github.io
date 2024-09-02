import React from "react";
import "../../App.css";
import InfoSection from "../InfoSection";
import InfoSectionText from "../InfoSectionText";
import Cards from "../Cards";

function HomePage() {
	return (
		<>
			<InfoSection />
			<InfoSectionText />
			<Cards />
		</>
	);
}

export default HomePage;
