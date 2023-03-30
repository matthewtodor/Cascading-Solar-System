import "./details.css";
import { useRouteLoaderData } from "react-router-dom";

export default function Details() {
	const data = useRouteLoaderData("planets");
	console.log(data);
	return (
		<>
			<div className="details">
				<p>Test</p>
				{/* <span>{data.name}</span> */}
				{/* {data.facts.map((fact) => {
					console.log(fact.fact);
					return <span key={fact.id}>{fact.fact}</span>;
				})} */}
			</div>
		</>
	);
}
