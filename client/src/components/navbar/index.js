import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
	//const history = useHistory();
	//const goBack = () => {
	//    history.goBack()
	//}

	return (
		<div className="nav">
			<h1>Cascading Solar System</h1>
			<div className="dropdown">
				<span className="dropdown-head">Planets</span>
				<Link to={`/planets/venus`} className="nav-link venus-link">
					Venus
				</Link>
				<Link to={`/planets/mercury`} className="nav-link mercury-link">
					Mercury
				</Link>
				<Link to={`/planets/earth`} className="nav-link earth-link">
					Earth
				</Link>
				<Link to={`/planets/mars`} className="nav-link mars-link">
					Mars
				</Link>
				<Link to={`/planets/jupiter`} className="nav-link jupiter-link">
					Jupiter
				</Link>
				<Link to={`/planets/saturn`} className="nav-link saturn-link">
					Saturn
				</Link>
				<Link to={`/planets/uranus`} className="nav-link uranus-link">
					Uranus
				</Link>
				<Link to={`/planets/neptune`} className="nav-link neptune-link">
					Neptune
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
