import "./details.css";
import { useRouteLoaderData } from "react-router-dom";

export default function Details() {
	const data = useRouteLoaderData("planets");
	return (
		<article className="details">
			<header>
				<h2>{data.name}</h2>
				<section>
					<p>
						Radius of {data.name}:{data.size}
					</p>
				</section>
			</header>
			<section>
				<ul>
					{data.facts.map((fact) => {
						return <li key={fact.id}>{fact.fact}</li>;
					})}
				</ul>
			</section>
			<section className="moons-container">
				<header>
					<h3>Moons</h3>
				</header>
				<section>
					{data.moons.map((moon) => {
						return <button key={moon.id}>{moon.name}</button>;
					})}
				</section>
			</section>
		</article>
	);
}
