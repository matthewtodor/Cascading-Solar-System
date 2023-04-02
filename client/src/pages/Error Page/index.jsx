import { useRouteError, Link } from "react-router-dom";
import "../../App.css";
import "./style.css";
export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<main className="App">
			<article className="error-page">
				<h1>404</h1>
				<h2>Oops!</h2>
				<p>You're lost in space!</p>
				<h3>
					<Link to="/">Go Home</Link>
				</h3>
			</article>
		</main>
	);
}
