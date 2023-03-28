import './style.css';
import { Link } from "react-router-dom";

function Dropdown() {
	return (
		<div className='dropdown'>
            <span className='dd-head'>Planets</span>
            <div className='dd-planets'>
                <Link to={`earth`}>Your Name</Link>
            </div>
		</div>
	);
}

export default Dropdown;
