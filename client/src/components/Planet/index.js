import React from "react";
import Sun from "./Sun";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";

import "./style.css";

function Planet({ scale, name }) {
    // handle case sensitivity in name
    name = name.toLowerCase();
    console.log(name);
    // handle use of a percent symbol in scale
    if (scale.charAt(scale.length - 1) === "%") {
    	scale = scale.slice(0, -1);
    }

<<<<<<< HEAD
    return (
            <div className="planet-container">
                {name === "sun" && <Sun scale={scale} />}
                {name === "mercury" && <Mercury scale={scale} />}
                {name === "venus" && <Venus scale={scale} />}
                {name === "earth" && <Earth scale={scale} />}
                {name === "mars" && <Mars scale={scale} />}
                {name === "jupiter" && <Jupiter scale={scale} />}
                {name === "saturn" && <Saturn scale={scale} />}
                {name === "uranus" && <Uranus scale={scale} />}
                {name === "neptune" && <Neptune scale={scale} />}
            </div>
    );
=======
	return (
		<div className="planet-container">
			{name === "sun" && <Sun scale={scale} />}
			{name === "mercury" && <Mercury scale={scale} />}
			{name === "venus" && <Venus scale={scale} />}
			{name === "earth" && <Earth scale={scale} />}
			{name === "mars" && <Mars scale={scale} />}
			{name === "jupiter" && <Jupiter scale={scale} />}
			{name === "saturn" && <Saturn scale={scale} />}
			{name === "uranus" && <Uranus scale={scale} />}
			{name === "neptune" && <Neptune scale={scale} />}
		</div>
	);
>>>>>>> main
}

export default Planet;
