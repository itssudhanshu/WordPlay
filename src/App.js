import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		if (mode === "dark") {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been enabled!", "success");
			document.title = "Testing App - Light Mode";
		} else {
			setMode("dark");
			document.body.style.backgroundColor = "#000000";
			showAlert("Dark Mode has been enabled!", "success");
			document.title = "Testing App - Dark Mode";
		}
	};

	return (
		<>
			<Router>
				<Navbar
					title="Testing"
					mode={mode}
					toggleFunc={toggleMode}
				/>
				<Alert alert={alert} />

				<div className="my-1">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<TextForm
									mode={mode}
									showAlert={showAlert}
								/>
							}></Route>
						<Route
							exact
							path="home"
							element={
								<TextForm
									mode={mode}
									showAlert={showAlert}
								/>
							}></Route>
						<Route
							exact
							path="about"
							element={<About aboutUs="About Us" mode={mode}/>}
							// element={
							// 	<TextForm
							// 		mode={mode}
							// 		showAlert={showAlert}
							// 	/>
						></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
