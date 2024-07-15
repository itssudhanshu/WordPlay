import React, { useState } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("Enter Your Text Here...");
	// const [word, setWord] = useState(text.split(" ").length);

	const onChangeText = (event) => {
		setText(event.target.value);
		// countWords();
		// console.log("onChange new text: "+ event.target.value);
	};

	const handleOnClickUpperCase = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Uppercase!", "success");
	};

	const handleOnClickLowerCase = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to Lowercase!", "success");
	};

	const clearText = () => {
		setText("");
		console.log(text);
		props.showAlert("Text Cleared!", "success");
	};

	const handleReverse = () => {
		let newText = text.split("").reverse().join("");
		setText(newText);
		props.showAlert("Text Reversed!", "success");
	};

	const handleCopy = () => {
		// let tempText = document.getElementById("text-box");
		// tempText.select();
		// navigator.clipboard.writeText(tempText.value);
		navigator.clipboard.writeText(text);

		props.showAlert("Copied to Clipboard!", "success");
	};

	const handleExtraSpaces = () => {
		let tempText = text.split(/[ ]+/);
		setText(tempText.join(" "));
		props.showAlert("Removed Extra Spaces!", "success");
	};

	// const countWords = () => {
	// 	const tempText = text.split(/[ ]+/);
	// 	setWord(tempText.join(" ").split(" ").length);
	// }

	return (
		<>
			<div className="container my-4 ">
				<div className="some-buttons">
					<button
						type="button"
						disabled={text.length === 0}
						className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} btn-${
							props.mode
						}`}
						onClick={handleOnClickUpperCase}>
						Uppercase
					</button>
					<button
						type="button"
						disabled={text.length === 0}
						className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} btn-${
							props.mode
						} mx-2`}
						onClick={handleOnClickLowerCase}>
						Lowercase
					</button>
					<button
						type="button"
						disabled={text.length === 0}
						className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} btn-${
							props.mode
						} mx-2`}
						onClick={handleReverse}>
						Reverse
					</button>
					<button
						type="button"
						disabled={text.length === 0}
						className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} btn-${
							props.mode
						} mx-2`}
						onClick={handleExtraSpaces}>
						Remove Spaces
					</button>
					<button
						type="button"
						disabled={text.length === 0}
						className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} btn-${
							props.mode
						} mx-2`}
						onClick={clearText}>
						Clear
					</button>
					<button
						type="button"
						disabled={text.length === 0}
						className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} btn-${
							props.mode
						} mx-2`}
						onClick={handleCopy}>
						Copy
					</button>
				</div>
				<div className="mb-3 my-3">
					<textarea
						className="form-control"
						id="text-box"
						value={text}
						onChange={onChangeText}
						style={{
							backgroundColor: props.mode === "dark" ? "#343434" : "white",
							color: props.mode === "dark" ? "white" : "black",
						}}
						rows="10"></textarea>
				</div>
			</div>
			<div className="container my-4">
				<h3
					className="my-3"
					style={{ color: props.mode === "dark" ? "white" : "black" }}>
					Statistic
				</h3>
				<h6
					className="my-3"
					style={{ color: props.mode === "dark" ? "white" : "black" }}>
					Words : {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} and Characters:{" "}
					{text.length} <br /> <br />
					Time to Read: {text.split(/\s+/).filter((element) => {return element.length !== 0}).length * 0.008}
				</h6>
			</div>
			<div className="my-3 container">
				<h3 style={{ color: props.mode === "dark" ? "white" : "black" }}> Preview Text</h3>
				<p
					className="my-1"
					style={{ color: props.mode === "dark" ? "white" : "black" }}>
					{text.length === 0 ? "Nothing to Preview!!!" : text}
				</p>
			</div>
		</>
	);
}
