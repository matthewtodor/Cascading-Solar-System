import "./details.css";
import { useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";

export default function Root() {
	const data = useRouteLoaderData("planets");
	console.log(data);
	return (
		<>
			<div className="details">
				<span>{data.name}</span>
				{data.facts.map((fact) => {
					console.log(fact.fact);
					return <span key={fact.id}>{fact.fact}</span>;
				})}
			</div>
		</>
	);
}
