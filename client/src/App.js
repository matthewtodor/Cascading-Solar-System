import './App.css';

import Planet from './components/Planet';
// import Planets from './components/planets';
import Navbar from './components/navbar';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>

			{/* enter the name of the planet to display */}
			{/* sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune */}

			{/* enter the scale of the planet as a percentage */}
			{/* 100% = 500px diameter */}

			<Planet name='venus' scale='100%' />
			<Navbar />
			{/* <Planets /> */}
		</div>
	);
}

export default App;
