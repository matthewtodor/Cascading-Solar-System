import React from "react";
import Details from "../../components/Details/details";
import Planet from "../../components/Planet";
import { useRouteLoaderData } from "react-router-dom";
import "./style.css";
const PlanetPage = () => {
	const data = useRouteLoaderData("planets");
	let name = data.name;

	return (
		<main className="planet-page">
			<figure className="planet-page-planet-container">
				<Planet name={name} scale="100" />
			</figure>
			<section className="planet-page-details-container">
				<Details />
			</section>
		</main>
	);
};

export default PlanetPage;
