import "./style.css";
import MoonModal from "../Modal";
import { useState } from "react";
const MoonButton = ({ name, size, nameHistory }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<button type="button" onClick={handleOpen} className="moon-button">
				<span className="button-text">{name}</span>
			</button>
			<MoonModal open={open} name={name} size={size} nameHistory={nameHistory} onClose={handleClose} />
		</>
	);
};

export default MoonButton;
