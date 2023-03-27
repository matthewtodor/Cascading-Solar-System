import './style.css';
import Dropdown from './Dropdown';

function Navbar() {
	return (
		<div className='nav'>
            <h1>Cascading Solar System</h1>
            <Dropdown />
		</div>
	);
}

export default Navbar;
