import "./style.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	//const history = useHistory();
	//const goBack = () => {
	//    history.goBack()
	//}
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

	let location = useLocation();
	return (
		<nav className="nav">
			<div className="dropdown">
				<Link to={`../..`} relative="path" className="dropdown-head">
					{location.pathname === "/" ? `Planets` : `Back`}
				</Link>
				{/*<span className="dropdown-head">Planets</span> */}
				{planets.map((planet) => {
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
					return (
						<Link key={planet} to={`/planets/${planet}`} className={`nav-link ${planet}-link`}>
							{properName()}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
