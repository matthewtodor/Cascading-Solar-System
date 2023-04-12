import "./style.css";
import { useOutletContext } from "react-router-dom";

const MoonButton = ({ name, nameHistory, size }) => {
	const [modalState, setModalState] = useOutletContext();
	let diameter = size * 2;
	diameter = diameter.toFixed(2);
	let circumference = 2 * Math.PI * size;
	circumference = circumference.toFixed(2);
	return (
		<>
			<button
				type="button"
				className="moon-button"
				onClick={() => {
					setModalState({
						moon: [`${name}`, `${nameHistory}`, `${size}`, `${diameter}`, `${circumference}`],
						show: !modalState.show,
					});
				}}
			>
				<span className="button-text">{name}</span>
			</button>
		</>
	);
};

export default MoonButton;
