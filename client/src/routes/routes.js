import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error Page";
import PlanetPage from "../pages/Planet Page";
import SolarSystem from "../components/SolarSystem";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <SolarSystem scale="100" />,
			},
			{
				path: "planets/:name",
				element: <PlanetPage />,
				loader: async ({ params }) => {
					let results;
					try {
						const res = await fetch(`http://localhost:3001/api/${params.name}`, {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
							},
						});
						if (res.status === 404) {
							throw new Response("Not Found", { status: 404 });
						} else if (res.status === 500) {
							throw new Response("Server Error", { status: 500 });
						}
						results = res.json();
					} catch (error) {
						console.log(error);
					}
					return results || null;
				},
				id: "planets",
			},
		],
	},
]);
export default router;
