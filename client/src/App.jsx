import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "components/Navbar/index.js";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Outlet />
		</div>
	);
};
export default App;
