import { useState, useEffect } from 'react';

import './style.css';

function Clouds() {
	const [cloudData, setCloudData] = useState([]);

	// generate random cloud transformations
	const generateCloudData = () => {
		// instantiate array
		const arr = [];

		// push transform matrix into array
		// random scale between 0 and 2
		// random skew between 0 and 0.5
		// random translate up to 10%
		for (let i = 0; i < 5; i++) {
			const scaleX = (Math.random() + 1).toFixed(1);
			const skewX = (Math.random() / 4).toFixed(1);
			const skewY = (Math.random() / 4).toFixed(1);
			const scaleY = (Math.random() + 1).toFixed(1);
			const translateX = Math.floor(Math.random() * 100).toFixed(0);
			const translateY = Math.floor(Math.random() * 100).toFixed(0);

			arr.push({
				transform: `matrix(${scaleX}, ${skewX}, ${skewY}, ${scaleY}, ${translateX}, ${translateY})`
			});
		}

		// set array as state
		setCloudData(arr);
	};

	// generate clouds on page load
	useEffect(() => {
		generateCloudData();
	}, []);

	return (
		<div className='clouds'>
			{cloudData.map((data, i) => {
				return (
					<h1 key={i} className='cloud' style={data}>
						~~
					</h1>
				);
			})}
		</div>
	);
}

export default Clouds;
