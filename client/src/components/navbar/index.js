import './style.css';
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className='nav'>
            <h1>Cascading Solar System</h1>
            <div className='dropdown'>
                <span className=''>Planets</span>
                <div className='dropdown-content'>
                    <Link to={`earth`} className="nav-link">Earth</Link>
                    <Link to={`mars`} className="nav-link">Mars</Link>
                    <Link to={`saturn`} className="nav-link">Saturn</Link>
                </div>
            </div>
		</div>
	);
}

export default Navbar;
