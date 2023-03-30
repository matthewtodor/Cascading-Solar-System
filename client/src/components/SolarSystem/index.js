import Planet from "../Planet";
import { Link } from "react-router-dom";
import "./style.css";

function SolarSystem({ scale }) {
	// handle use of a percent symbol in scale
	if (scale.charAt(scale.length - 1) === "%") {
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
			name: "sun",
			scale: "12%",
		},
		{
			name: "mercury",
			scale: "1%",
		},
		{
			name: "venus",
			scale: "2%",
		},
		{
			name: "earth",
			scale: "3%",
		},
		{
			name: "mars",
			scale: "2%",
		},
		{
			name: "jupiter",
			scale: "7%",
		},
		{
			name: "saturn",
			scale: "6%",
		},
		{
			name: "uranus",
			scale: "5%",
		},
		{
			name: "neptune",
			scale: "4%",
		},
	];

	const handlePlanetClick = (planet) => {
		console.log(planet);
	};

	return (
		<div className="solar-system" style={{ transform: `scale(${scale / 100})` }}>
			{planets.map((planet) => {
				return (
					<div
						key={planet.name}
						id={planet.name + "-orbit"}
						className="planet-orbit-container"
						onClick={() => {
							handlePlanetClick(planet.name);
						}}
					>
						<Link to={`planets/${planet.name}`}>
							<Planet name={planet.name} scale={planet.scale} />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default SolarSystem;
