import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
	//const history = useHistory();
	//const goBack = () => {
	//    history.goBack()
	//}
    const [current, setCurrent] = useState("");
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

	let location = useLocation();
	return (
		<nav className="nav">
			<div className="dropdown">
				<Link to={`../..`} relative="path" 
                    onClick={() => setCurrent("")} 
                    className="dropdown-head">
					{location.pathname === "/" ? `Planets` : `Back`}
				</Link>
				{/*<span className="dropdown-head">Planets</span> */}
				{
                    planets.map((planet, n) => {
					/*
					This checks the current page and returns nothing if it is the planet displayed. Due to the nature of the navbar styling at the moment, it is rendering a gap at the planet name location.
					if (location.pathname.includes(planet)) {
						console.log("Nav if statement");
						return "";
					}
					*/
					const properName = () => {
						const capLetter = planet.split("").shift().toUpperCase();
						planet = planet.split("");
						planet.shift();
						planet.unshift(capLetter);
						return planet.join("");
					};
					return ( current === planet ? (<></>) : (
                        <Link key={planet} to={`/planets/${planet}`} 
                            onClick={() => setCurrent(planet)} 
                            className={`nav-link ${planet}-link`}>
							{`${planet.slice(0,1).toUpperCase() + planet.slice(1)}`}
						</Link>
                    ));
				})}
			</div>
		</nav>
	);
}
export default Navbar;
