import "./root.css";
import { useState } from "react";
import { useRouteLoaderData, useLocation } from "react-router-dom";
import SolarSystem from "../components/SolarSystem";
import Planet from "../components/Planet";
import Navbar from "../components/navbar";

import { Outlet } from "react-router-dom";

export default function Root() {
	const data = useRouteLoaderData("planets");

	return (
		<>
			<div className="App">
				<div className="overlay">
					<div className="planet-display">{!data ? <SolarSystem scale="100" /> : ""}</div>
					<Navbar />
					<Outlet />
				</div>
			</div>
		</>
	);
}
