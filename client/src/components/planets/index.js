import React, { useState, useEffect } from 'react';

import Sun from './Sun';
import Mercury from './Mercury';
import Venus from './Venus';
import Earth from './Earth';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import Pluto from './Pluto';

import './style.css';

function Planets() {
	const [currentPlanet, setCurrentPlanet] = useState('Earth');

	return (
		<div className='all-planets'>
			{currentPlanet === 'Sun' && <Sun />}
			{currentPlanet === 'Mercury' && <Mercury />}
			{currentPlanet === 'Venus' && <Venus />}
			{currentPlanet === 'Earth' && <Earth />}
			{currentPlanet === 'Mars' && <Mars />}
			{currentPlanet === 'Jupiter' && <Jupiter />}
			{currentPlanet === 'Saturn' && <Saturn />}
			{currentPlanet === 'Uranus' && <Uranus />}
			{currentPlanet === 'Neptune' && <Neptune />}
			{currentPlanet === 'Pluto' && <Pluto />}

			<div className='temp-planet-select' onClick={(e) => setCurrentPlanet(e.target.innerText)}>
				<h3>Sun</h3>
				<h3>Mercury</h3>
				<h3>Venus</h3>
				<h3>Earth</h3>
				<h3>Mars</h3>
				<h3>Jupiter</h3>
				<h3>Saturn</h3>
				<h3>Uranus</h3>
				<h3>Neptune</h3>
				<h3>Pluto</h3>
			</div>
		</div>
	);
}

export default Planets;
