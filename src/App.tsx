import React, { useState } from "react";
import About from "./About";
import "./App.css";
import Appointment from "./Appointment";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";

function App() {
	const [tab, setTab] = useState("Home");

	if (tab === "Home") {
		return (
			<div>
				<Header setTab={setTab} />
				<Home />
			</div>
		);
	}
	if (tab === "About") {
		return (
			<div>
				<Header setTab={setTab} />
				<About />
			</div>
		);
	}
	if (tab === "Contact") {
		return (
			<div>
				<Header setTab={setTab} />
				<Contact />
			</div>
		);
	}
	if (tab === "Appointment") {
		return (
			<div>
				<Header setTab={setTab} />
				<Appointment />
			</div>
		);
	}
}

export default App;
