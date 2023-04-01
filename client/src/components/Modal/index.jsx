import "./style.css";

export default function MoonModal({ show, set, moon }) {
	return (
		<>
			{show ? (
				<div className="modal" onClick={() => set()}>
					<div className="modal-content">
						<header>
							<h2>{moon[0]}</h2>
						</header>
						<aside>
							<h3>Size</h3>
							<p>
								{" "}
								<strong>Radius:</strong> {moon[2]} miles
							</p>
							<p>
								<strong>Diameter:</strong> {moon[3]} miles
							</p>
							<p>
								<strong>Circumference:</strong> {moon[4]} miles
							</p>
						</aside>
						<article>
							<span>{moon[1]}</span>
						</article>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
