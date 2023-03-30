import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./routes/details";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "planets/:name",
				element: <Details />,
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
						console.log(results);
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

/*



*/
