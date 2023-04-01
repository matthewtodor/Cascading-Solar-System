import "./details.css";
import { useRouteLoaderData, useOutletContext } from "react-router-dom";

export default function Details() {
	const data = useRouteLoaderData("planets");
    const [modalState, setModalState] = useOutletContext();

	console.log(data.moons);
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
				{/* are there moons? */}
				{data.moons.length ? (
					<>
						<header>
							<h3>Moons</h3>
							<p>Total number of moons: {data.moons.length}</p>
						</header>
						<section>
							{data.moons.map((moon) => {
								return <button 
                                        key={moon.id} 
                                        onClick={ () => { 
                                            setModalState(
                                                { 
                                                    "show": !modalState.show, 
                                                    "moon": [ 
                                                        `${moon.name}`, 
                                                        `${moon.name_history}`, 
                                                        `${moon.size}`,
                                                    ],
                                                }
                                            );
                                        }}
                                        type="button"
                                    >{moon.name}</button>;
							})}
						</section>
					</>
				) : (
					<section>
						<h3>{data.name} doesn't have any moons! Check out other planets to see if they have moons!</h3>
					</section>
				)}
			</section>

		</article>
	);
}
