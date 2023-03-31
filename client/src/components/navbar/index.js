import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
	//const history = useHistory();
	//const goBack = () => {
	//    history.goBack()
	//}
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	return (
		<div className="nav">
			<Link to="/">
				<h1>Cascading Solar System</h1>
			</Link>
			<div className="dropdown">
				<span className="dropdown-head">Planets</span>
				{/* Drop down links */}
				{planets.map((planet) => {
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
		</div>
	);
}

export default Navbar;
