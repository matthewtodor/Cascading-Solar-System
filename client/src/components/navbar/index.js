import './style.css';
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className='nav'>
            <h1>Cascading Solar System</h1>
            <div className='dropdown'>
                <span className='dropdown-head'>Planets</span>
                <Link to={`planets/earth`} className="nav-link earth-link">Earth</Link>
                <Link to={`mars`} className="nav-link mars-link">Mars</Link>
                <Link to={`saturn`} className="nav-link saturn-link">Saturn</Link>
            </div>
		</div>
	);
}

export default Navbar;
