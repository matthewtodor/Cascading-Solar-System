import Planet from '../Planet';
import { Link } from 'react-router-dom';
import './style.css';

function SolarSystem({ scale }) {
	// handle use of a percent symbol in scale
	if (scale.charAt(scale.length - 1) === '%') {
		scale = scale.slice(0, -1);
	}

	// planets at actual scale
	// const planets = [
	// 	{
	// 		name: 'sun',
	// 		scale: '109%'
	// 	},
	// 	{
	// 		name: 'mercury',
	// 		scale: '0.38%'
	// 	},
	// 	{
	// 		name: 'venus',
	// 		scale: '0.94%'
	// 	},
	// 	{
	// 		name: 'earth',
	// 		scale: '1%'
	// 	},
	// 	{
	// 		name: 'mars',
	// 		scale: '0.53%'
	// 	},
	// 	{
	// 		name: 'jupiter',
	// 		scale: '10.97%'
	// 	},
	// 	{
	// 		name: 'saturn',
	// 		scale: '9.14%'
	// 	},
	// 	{
	// 		name: 'uranus',
	// 		scale: '3.98%'
	// 	},
	// 	{
	// 		name: 'neptune',
	// 		scale: '3.86%'
	// 	}
	// ];

	// planets scaled for solar system visual
	const planets = [
		{
			name: 'sun',
			scale: window.innerWidth < 1000 ? '14%' : '12%'
		},
		{
			name: 'mercury',
			scale: window.innerWidth < 1000 ? '3%' : '1%'
		},
		{
			name: 'venus',
			scale: window.innerWidth < 1000 ? '4%' : '2%'
		},
		{
			name: 'earth',
			scale: window.innerWidth < 1000 ? '6%' : '3%'
		},
		{
			name: 'mars',
			scale: window.innerWidth < 1000 ? '5%' : '2%'
		},
		{
			name: 'jupiter',
			scale: window.innerWidth < 1000 ? '12%' : '7%'
		},
		{
			name: 'saturn',
			scale: window.innerWidth < 1000 ? '11%' : '6%'
		},
		{
			name: 'uranus',
			scale: window.innerWidth < 1000 ? '12%' : '5%'
		},
		{
			name: 'neptune',
			scale: window.innerWidth < 1000 ? '15%' : '4%'
		}
	];

	return (
		<div className='solar-system' style={{ transform: `scale(${scale / 100})` }}>
			{planets.map((planet) => {
				return (
					<Link key={planet.name} to={`planets/${planet.name}`} className='page-link'>
						<div id={planet.name + '-orbit'} className='planet-orbit-container' aria-label={`${planet.name}`}>
							<Planet name={planet.name} scale={planet.scale} aria-label={`${planet.name}`} />
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default SolarSystem;
