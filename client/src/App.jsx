import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MoonModal from "./components/Modal/Modal";

const App = () => {
	const [modalState, setModalState] = useState({
		show: false,
		moon: ["", "", ""],
	});
	const handleModal = () => {
		setModalState(!modalState);
	};
	return (
		<div className="App">
			<Navbar />
			<Outlet context={[modalState, setModalState]} />
			<MoonModal show={modalState.show} set={handleModal} moon={modalState.moon} />
		</div>
	);
};
export default App;
