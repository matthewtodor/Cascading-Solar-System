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
			<article className="planet-page-details-container">
				<div className="planet-page-name">
					<h1>{name}</h1>
				</div>
				<div className="planet-page-details-content">
					<Details />
				</div>
			</article>
		</main>
	);
};

export default PlanetPage;
