import { useLocation } from 'react-router-dom';

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
			scale: '9%'
		},
		{
			name: 'mercury',
			scale: '1%'
		},
		{
			name: 'venus',
			scale: '1.5%'
		},
		{
			name: 'earth',
			scale: '2%'
		},
		{
			name: 'mars',
			scale: '1.5%'
		},
		{
			name: 'jupiter',
			scale: '4%'
		},
		{
			name: 'saturn',
			scale: '3.5%'
		},
		{
			name: 'uranus',
			scale: '3%'
		},
		{
			name: 'neptune',
			scale: '2.5%'
		}
	];

	// get current url path
	// const { pathname } = useLocation();
	const pathname = '/';

	// set conditional class on system for zoom effect
	const systemClass = pathname === '/' ? ' focus-system' : ' unfocus-system';

	return (
		<div className={'solar-system ' + systemClass} style={{ transform: `scale(${scale / 100})` }}>
			{planets.map((planet) => {
				// set conditional class on planet for zoom effect
				const planetClass = pathname === `planets/${planet.name}` ? ' focus-planet' : pathname === '/' ? '' : ' unfocus-planet';
				const planetScale = pathname === `planets/${planet.name}` ? '100' : pathname === '/' ? planet.scale : '0';

				return (
					<div key={planet.name} id={planet.name + '-orbit'} className={'planet-orbit-container' + planetClass}>
						<div className='orbit-path' />
						<Link to={`planets/${planet.name}`} className='page-link'>
							<Planet name={planet.name} scale={planetScale} />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default SolarSystem;
