import './root.css';
import { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import SolarSystem from '../components/SolarSystem';
import Planet from '../components/Planet';
import Navbar from '../components/navbar';

import { Outlet } from 'react-router-dom';

export default function Root() {
	const data = useRouteLoaderData('planets');
	const [scale, setScale] = useState('50');

	let name;
	if (!data) {
		name = 'sun';
	} else {
		name = data.name;
	}
	return (
		<>
			<div className='App'>
				<div className='planet-display'>
					<Planet name={name} scale='100' />
					{/* <SolarSystem scale="100" /> */}
				</div>
				<div className='overlay'>
					<Navbar />
					<Outlet props={{ scale, setScale }} />
				</div>
			</div>
		</>
	);
}
