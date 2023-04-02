import React from "react";
import HomePanel from "../../components/HomePanel";
import SolarSystem from "../../components/SolarSystem";
import "./style.css";
const Home = () => {
	return (
		<main className="home">
			<section className="solarsystem">
				<SolarSystem scale="100" />
			</section>

			<HomePanel />
		</main>
	);
};

export default Home;
