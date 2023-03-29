import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Planet from "./components/Planet";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "planets/:name",
				element: <Planet name="earth" scale="100%" />,
				id: "planet",
				loader: async ({ params }) => {
					const res = await fetch(`/planets/${params.name}`);
					if (res.status === 404) {
						throw new Response("Not Found", { status: 404 });
					}
					console.log(res.body);
					return res.body;
				},
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
