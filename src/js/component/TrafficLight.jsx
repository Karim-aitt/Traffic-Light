import React, { useState } from "react";

function TrafficLight() {
	const [light, setLight] = useState({
		redLight: "general red",
		yellowLight: "general yellow",
		greenLight: "general green",
		purpleLight: "general purple",
	});

	const [int, setInt] = useState(null);

	function handleClick(event) {
		let name = event.target.getAttribute("name");

		setLight((prev) => {
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

	function intermitente() {
		function inter() {
			number++;

			setLight((prev) => {
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

		setInt(setInterval(inter, 1000));
		// interval = setInterval(inter, 1000);
	}

	function extraLight() {
		let padre = document.getElementById("padre");
		let hijo = document.createElement("div");

		let atrName = document.createAttribute("name");
		let atrClick = document.createAttribute("onClick");

		atrClick.value = { handleClick };
		atrName.value = "purple";

		hijo.setAttributeNode(atrClick);
		hijo.setAttributeNode(atrName);

		// hijo.classList.add({light.purpleLight});
		padre.appendChild(hijo);
	}

	function prueba() {
		console.log({ interval });
		if (interval === null) {
			intermitente();
		} else {
			clearInterval(interval);
			setInt(null);
			console.log({ interval });
		}
	}

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
				<button onClick={prueba}>Intermitente</button>
				{/* <button onClick={extraLight}>Purple</button> */}
			</div>
		</div>
	);
}

export default TrafficLight;
