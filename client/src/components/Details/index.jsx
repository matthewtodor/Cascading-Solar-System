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
		<article className="details">
			<header className="details-name">
				<h1>{data.name}</h1>
			</header>
			<div className="details-outer">
				<section className="details-inner">
					<div className="scroll-container-details">
						<div className="size">
							<h2>Size:</h2>
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
						</div>
						<div>
							<p>
								<strong>Planet type: </strong>
								{data.core}
							</p>
						</div>
						<div>
							<p>
								<strong>Average distance from the Sun: </strong>
								{data.sun_distance} miles
							</p>
						</div>
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
								<article>
									<header>
										<h3>Moons: {data.moons.length}</h3>
									</header>
									<section>
										{data.moons.map((moon) => {
											console.log(moon);
											return <MoonButton key={moon.id} name={moon.name} size={moon.size} nameHistory={moon.name_history} />;
										})}
									</section>
								</article>
							) : (
								<section>
									<h3>{data.name} doesn't have any moons! Check out other planets to see if they have moons!</h3>
								</section>
							)}
						</section>
					</div>
				</section>
			</div>
		</article>
	);
}
