import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
	//const history = useHistory();
	//const goBack = () => {
	//    history.goBack()
	//}

	return (
		<div className="back">
			<Link to={`..`} relative="path">Cascading Solar System</Link>
		</div>
	);
}

export default Navbar;
