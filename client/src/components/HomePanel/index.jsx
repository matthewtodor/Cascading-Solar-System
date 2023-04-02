import "./style.css";
const HomePanel = () => {
	return (
		<section className="home-panel-outer">
			<div className="scroll-container">
				<header>
					<h2>Size</h2>
					<p>
						<strong>Radius: </strong>
						miles
					</p>
					<p>
						<strong>Diameter: </strong>
						miles
					</p>
					<p>
						<strong>Circumference: </strong>
						miles
					</p>
				</header>
				<section className="facts-container">
					<ul></ul>
				</section>
				<section className="moons-container"></section>
			</div>
		</section>
	);
};
export default HomePanel;
