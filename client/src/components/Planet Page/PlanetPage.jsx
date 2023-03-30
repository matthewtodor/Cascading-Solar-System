import React from "react";
import Details from "../Details/details";
import Planet from "../Planet";
import { useRouteLoaderData } from "react-router-dom";
import "./style.css";
const PlanetPage = () => {
	const data = useRouteLoaderData("planets");
	console.log(data);
	let name = data.name;

	return (
		<main className="planet-page">
			<section>
				<Planet name={name} scale="100" />
			</section>
			<section>
				<Details />
			</section>
		</main>
	);
};

export default PlanetPage;
