import { useState, useEffect } from 'react';

import './style.css';

function Clouds() {
	const [cloudsA, setCloudsA] = useState([]);
	const [cloudsB, setCloudsB] = useState([]);
	const [cloudsC, setCloudsC] = useState([]);

	// generate clouds every 5 seconds
	useEffect(() => {
		let set = 'a';

		const interval = setInterval(() => {
			// generate random positions
			const getCloudPositions = () => {
				// instantiate array
				const arr = [];

				// push 20 random coordinates into array
				for (let i = 0; i < 20; i++) {
					arr.push({
						left: Math.floor(Math.random() * 500),
						top: Math.floor(Math.random() * 500),
						transform: `rotate(${Math.random() > 0.5 ? Math.floor(Math.random() * 30) : Math.floor(Math.random() * -30)}deg)`
					});
				}

				return arr;
			};

			// update position state with array
			if (set === 'a') {
				setCloudsA(getCloudPositions);
				set = 'b';
			} else if (set === 'b') {
				setCloudsB(getCloudPositions);
				set = 'c';
			} else if (set === 'c') {
				setCloudsC(getCloudPositions);
				set = 'a';
			}
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='clouds'>
			<div className='cloud-set'>
				{cloudsA.map((cloud) => {
					return (
						<h1 className='cloud' style={cloud}>
							~~
						</h1>
					);
				})}
			</div>

			<div className='cloud-set'>
				{cloudsB.map((cloud) => {
					return (
						<h1 className='cloud' style={cloud}>
							~~
						</h1>
					);
				})}
			</div>

			<div className='cloud-set'>
				{cloudsC.map((cloud) => {
					return (
						<h1 className='cloud' style={cloud}>
							~~
						</h1>
					);
				})}
			</div>
		</div>
	);
}

export default Clouds;
