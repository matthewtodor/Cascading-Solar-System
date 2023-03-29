import './root.css';
import SolarSystem from '../components/SolarSystem';
import Planet from '../components/Planet';
import Navbar from '../components/navbar';

import { Outlet } from 'react-router-dom';

export default function Root() {
	return (
		<>
			<div className='App'>
				<div className='planet-display'>
					{/* <Planet name='Sun' scale='100' /> */}
					<SolarSystem />
				</div>

				<div className='overlay'>
					<Navbar />
					<Outlet />
				</div>
			</div>
		</>
	);
}
