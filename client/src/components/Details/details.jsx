import "./details.css";
import { useRouteLoaderData } from "react-router-dom";

export default function Details() {
	const data = useRouteLoaderData("planets");
	return (
		<div className="details">
			{<span>{data.name}</span>}
			{data.facts.map((fact) => {
				console.log(fact.fact);
				return <span key={fact.id}>{fact.fact}</span>;
			})}
			{/* {data.moons.map((moon) => {
					return <p key={moon.id}>{moon.name}</p>;
				})} */}
		</div>
	);
}
