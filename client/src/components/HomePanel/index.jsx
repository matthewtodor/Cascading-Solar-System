import "./style.css";
const HomePanel = () => {
	return (
		<article className="home-panel">
			<header className="home-panel-name">
				<h1>Our Solar System</h1>
			</header>
			<section className="home-panel-outer">
				<section className="home-panel-inner">
					<div className="scroll-container">
						<section className="facts-container" id="solar-system-facts-container">
							<h2>Welcome to our galactic home!</h2>
							<p>To find out information about the planets, click on them, or use the navigation panel!</p>
							<p>The solar system we live in is massive, despite it currently fitting on this screen! It contains:</p>
							<ul>
								<li>8 planets</li>
								<li>5 dwarf planets</li>
								<li>1 asteroid belt (between Mars and Saturn)</li>
							</ul>
							<p>It is within the Milky Way galaxy, and is the only known location of life</p>
						</section>
					</div>
				</section>
			</section>
		</article>
	);
};
export default HomePanel;
