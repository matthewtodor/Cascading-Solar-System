import React from "react";
import Details from "../../components/Details";
import Planet from "../../components/Planet";
import { useRouteLoaderData } from "react-router-dom";
import "./style.css";
const PlanetPage = () => {
	const data = useRouteLoaderData("planets");
	let name = data.name;
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    const handleChange = (e) => {
        if (e.matches) {
            console.log("ayyyy");
            return true;
        }
    }

    mediaQuery.addListener(handleChange);
    handleChange(mediaQuery);

	return (
		<main className="planet-page">
			<figure className="planet-page-planet-container">
				<Planet name={name} scale={handleChange(mediaQuery) ? "170" : "100"} />
			</figure>
			<article className="planet-page-details-container">
				<div className="planet-page-name">
					<h1>{name}</h1>
				</div>
				<div className="planet-page-details-content">
					<Details name={data.name} size={data.size} facts={data.facts} moons={data.moons} />
				</div>
			</article>
		</main>
	);
};

export default PlanetPage;
