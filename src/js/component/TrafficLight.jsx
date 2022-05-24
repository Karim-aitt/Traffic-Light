import React, { useState } from "react";

function TrafficLight() {
	const [light, setLight] = useState({
		redLight: "general red",
		yellowLight: "general yellow",
		greenLight: "general green",
		purpleLight: "general purple",
	});

	const [flagInterval, setFlagInterval] = useState(null);

	function handleClick(event) {
		let name = event.target.getAttribute("name");

		setLight(() => {
			if (name === "red") {
				return {
					redLight: "general red glow",
					yellowLight: "general yellow",
					greenLight: "general green",
					purpleLight: "general purple",
				};
			} else if (name === "yellow") {
				return {
					redLight: "general red",
					yellowLight: "general yellow glow",
					greenLight: "general green",
					purpleLight: "general purple",
				};
			} else if (name === "green") {
				return {
					redLight: "general red",
					yellowLight: "general yellow",
					greenLight: "general green glow",
					purpleLight: "general purple",
				};
			} else if (name === "purple") {
				return {
					redLight: "general red",
					yellowLight: "general yellow",
					greenLight: "general green",
					purpleLight: "general purple glow",
				};
			}
		});
	}

	let number = 0;
	let interval = null;

	function inter() {
		number++;

		setLight(() => {
			if (number === 1) {
				return {
					redLight: "general red glow",
					yellowLight: "general yellow",
					greenLight: "general green",
				};
			} else if (number === 2) {
				return {
					redLight: "general red",
					yellowLight: "general yellow glow",
					greenLight: "general green",
				};
			} else if (number === 3) {
				return {
					redLight: "general red",
					yellowLight: "general yellow",
					greenLight: "general green glow",
				};
			} else if (number > 3) {
				number = 1;
				return {
					redLight: "general red glow",
					yellowLight: "general yellow",
					greenLight: "general green",
				};
			}
		});
	}

	function prueba() {
		if (flagInterval) {
			clearInterval(flagInterval);
			setFlagInterval(null);
		} else {
			setFlagInterval(setInterval(inter, 1000));
		}
	}

	const getLabel = () => {
		return flagInterval ? "pausar" : "intervalo";
	};

	return (
		<div className="cuerpo">
			<div className="bar"></div>
			<div id="padre" className="semaforoBody">
				<div
					name="red"
					onClick={handleClick}
					className={light.redLight}></div>
				<div
					name="yellow"
					onClick={handleClick}
					className={light.yellowLight}></div>
				<div
					name="green"
					onClick={handleClick}
					className={light.greenLight}></div>
			</div>
			<div className="intermitente">
				<p>
					Antes de darle a <strong>intermitente</strong>, prueba los
					colores
				</p>
				<button onClick={prueba}>{getLabel()}</button>
			</div>
		</div>
	);
}

export default TrafficLight;
