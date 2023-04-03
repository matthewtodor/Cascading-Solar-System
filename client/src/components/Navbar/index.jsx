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
				<div className="dropdown-head">
					<p>Explore</p>
				</div>
				{planets.map((planet) => {
					setTop();
					if (location.pathname.slice(9) !== planet) {
						return (
							<Link key={planet} to={`/planets/${planet}`} className={`nav-link`} style={{ top: topValue }}>
								{`${planet.slice(0, 1).toUpperCase() + planet.slice(1)}`}
							</Link>
						);
					} else {
						return (
							<div key={planet} className={`nav-link`} style={{ top: topValue }} id="disabled-link">
								{`${planet.slice(0, 1).toUpperCase() + planet.slice(1)}`}
							</div>
						);
					}
				})}
				<Link to={`/`} className={`nav-link`} style={{ top: 335 }}>
					Home
				</Link>
			</div>
		</nav>
	);
}
export default Navbar;
