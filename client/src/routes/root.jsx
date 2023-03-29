import './root.css';
import SolarSystem from '../components/SolarSystem';
import Navbar from '../components/navbar';

import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<div className='App'>
				<Navbar />
				<SolarSystem />
				<Outlet />
			</div>
		</>
	);
}
