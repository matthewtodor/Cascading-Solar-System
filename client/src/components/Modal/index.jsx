import "./style.css";
import { useEffect } from "react";
export default function MoonModal({ open, name, size, nameHistory, onClose }) {
	if (!open) {
		return null;
	}
	let diameter = size * 2;
	diameter = diameter.toFixed(2);
	let circumference = 2 * Math.PI * size;
	circumference = circumference.toFixed(2);

	const closeOnEscape = (e) => {
		if ((e.charCode || e.keyCode) === 27) {
			onClose();
		}
	};
	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscape);

		return function cleanUp() {
			document.body.removeEventListener("keydown", closeOnEscape);
		};
	}, []);

	return (
		<div className="modal" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<header>
					<h2>{name}</h2>
				</header>
				<aside>
					<h3>Size</h3>
					<p>
						<strong>Radius:</strong> {size} miles
					</p>
					<p>
						<strong>Diameter:</strong> {diameter} miles
					</p>
					<p>
						<strong>Circumference:</strong> {circumference} miles
					</p>
				</aside>
				<article>
					<span>{nameHistory}</span>
				</article>
			</div>
		</div>
	);
}
