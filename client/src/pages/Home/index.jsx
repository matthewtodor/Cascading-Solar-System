import React from "react";
import HomePanel from "../../components/HomePanel";
import SolarSystem from "../../components/SolarSystem";
import "./style.css";
const Home = () => {
	return (
		<>
			<main className="home">
				<SolarSystem scale="100" />

				<HomePanel />
			</main>
			<footer>
				<p> For more information about the creators of this application, visit our githubs:</p>
			</footer>
		</>
	);
};

export default Home;
