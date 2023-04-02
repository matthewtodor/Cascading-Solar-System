import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

	var topValue = 20;
	const setTop = () => {
		topValue = topValue + 35;
	};

	let location = useLocation();
	return (
		<nav className="nav">
			<div className="dropdown">
				<Link to={`../..`} relative="path" className="dropdown-head">
					{location.pathname === "/" ? `Planets` : `Solar System`}
				</Link>
				{planets.map((planet) => {
					if (location.pathname.slice(9) !== planet) {
						setTop();
						return (
							<Link key={planet} to={`/planets/${planet}`} className={`nav-link`} style={{ top: topValue }}>
								{`${planet.slice(0, 1).toUpperCase() + planet.slice(1)}`}
							</Link>
						);
					} else {
						return "";
					}
				})}
			</div>
		</nav>
	);
}
export default Navbar;
