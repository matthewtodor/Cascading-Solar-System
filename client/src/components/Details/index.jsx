import "./details.css";
import { useRouteLoaderData } from "react-router-dom";
import MoonButton from "../MoonButton";
export default function Details() {
	const data = useRouteLoaderData("planets");
	let diameter = data.size * 2;
	diameter = diameter.toFixed(2);
	let circumference = 2 * Math.PI * data.size;
	circumference = circumference.toFixed(2);
	return (
		<section className="details">
			<div className="scroll-container">
				<header>
					<h2>Size</h2>
					<p>
						<strong>Radius: </strong>
						{data.size} miles
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
						{data.facts.map((fact) => {
							return <li key={fact.id}>{fact.fact}</li>;
						})}
					</ul>
				</section>
				<section className="moons-container">
					{/* are there moons? */}
					{data.moons.length ? (
						<>
							<header>
								<h3>Moons</h3>
								<p>Total number of moons: {data.moons.length}</p>
							</header>
							<section>
								{data.moons.map((moon) => {
									return <MoonButton key={moon.id} name={moon.name} size={moon.size} nameHistory={moon.name_history} />;
								})}
							</section>
						</>
					) : (
						<section>
							<h3>{data.name} doesn't have any moons! Check out other planets to see if they have moons!</h3>
						</section>
					)}
				</section>
			</div>
		</section>
	);
}
