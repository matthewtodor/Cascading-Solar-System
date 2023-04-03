import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

	let location = useLocation();
	return (
		<nav className="nav">
			<div className="dropdown">
				<div className="dropdown-head">
					<p>Explore</p>
				</div>
				<div className="dropdown-links">
					{planets.map((planet) => {
						if (location.pathname.slice(9) !== planet) {
							return (
								<Link key={planet} to={`/planets/${planet}`} className={`nav-link`}>
									{`${planet.slice(0, 1).toUpperCase() + planet.slice(1)}`}
								</Link>
							);
						} else {
							return (
								<div key={planet} className={`nav-link`} id="disabled-link">
									{`${planet.slice(0, 1).toUpperCase() + planet.slice(1)}`}
								</div>
							);
						}
					})}
					<Link to={`/`} className={`nav-link`}>
						Home
					</Link>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
