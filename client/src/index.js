import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// import App from './App';
import './index.css';
import Root from './routes/root';
import ErrorPage from "./error-page";
import Details from './routes/details';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "planets/:name",
                element: <Details />,
                id: 'planet',
                loader: async ({ params }) => {
                    const res = await fetch(`/api/${params.name}`);
                    if (res.status === 404) {
                        throw new Response("Not Found",{  status: 404 });
                    }
                    console.log(res);
                    return res.body;
                },
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
