import "./details.css";
import { useOutletContext } from "react-router-dom";

export default function Details({ name, size, facts, moons }) {
	const [modalState, setModalState] = useOutletContext();
	let diameter = size * 2;
	diameter = diameter.toFixed(2);
	let circumference = 2 * Math.PI * size;
	circumference = circumference.toFixed(2);
	return (
		<section className="details">
			<div className="scroll-container">
				<header>
					<h2>Size</h2>
					<p>
						<strong>Radius: </strong>
						{size} miles
					</p>
					<p>
						<strong>Diameter: </strong>
						{diameter} miles
					</p>
					<p>
						<strong>Circumference: </strong>
						{circumference} miles
					</p>
				</header>
				<section className="facts-container">
					<ul>
						{facts.map((fact) => {
							return <li key={fact.id}>{fact.fact}</li>;
						})}
					</ul>
				</section>
				<section className="moons-container">
					{/* are there moons? */}
					{moons.length ? (
						<>
							<header>
								<h3>Moons</h3>
								<p>Total number of moons: {moons.length}</p>
							</header>
							<section>
								{moons.map((moon) => {
									return (
										<button
											key={moon.id}
											onClick={() => {
												setModalState({
													show: !modalState.show,
													moon: [`${moon.name}`, `${moon.name_history}`, `${moon.size}`, `${diameter}`, `${circumference}`],
												});
											}}
											type="button"
										>
											<span className="button-text">{moon.name}</span>
										</button>
									);
								})}
							</section>
						</>
					) : (
						<section>
							<h3>{name} doesn't have any moons! Check out other planets to see if they have moons!</h3>
						</section>
					)}
				</section>
			</div>
		</section>
	);
}
