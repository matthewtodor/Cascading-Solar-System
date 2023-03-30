import "./root.css";
import { useState } from "react";
import { useRouteLoaderData, useLocation } from "react-router-dom";
import SolarSystem from "../components/SolarSystem";
import Planet from "../components/Planet";
import Navbar from "../components/navbar";

import { Outlet } from "react-router-dom";

export default function Root() {
	const data = useRouteLoaderData("planets");
	const [scale, setScale] = useState("50");
	const location = useLocation();
	let name;
	data ? (name = data.name) : (name = "sun");
	return (
		<>
			<div className="App">
				<div className="overlay">
					<div className="planet-display">{location.pathname === "/" ? <SolarSystem scale="100" /> : <Planet name={name} scale="100" />}</div>
					<Navbar />
					<Outlet props={{ scale, setScale }} />
				</div>
			</div>
		</>
	);
}
