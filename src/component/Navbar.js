import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

export default function Navbar(props) {
	return (
		<>
			<div>
				<nav className={`navbar navbar-expand-lg bg-${props.mode} bg-${props.mode}`}>
					<div className="container">
						<Link
							className={`navbar-brand text-${props.mode === "light" ? "dark" : "light"}`}
							to="/">
							{props.title}
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link
										className={`nav-link active text-${props.mode === "light" ? "dark" : "light"}`}
										aria-current="page"
										to="/home">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`}
										to="/about">
										{props.aboutText}
									</Link>
								</li>
							</ul>
							<div className={`d-flex mx-4 text-${props.mode === "light" ? "dark" : "light"}`}>
								<div className="form-check form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										role="switch"
										id="flexSwitchCheckDefault"
										onClick={props.toggleFunc}
									/>
									<label
										className="form-check-label"
										htmlFor="flexSwitchCheckDefault">
										Enable Dark Mode
									</label>
								</div>
							</div>
							<form
								className="d-flex"
								role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
									style={{
										backgroundColor: props.mode === "dark" ? "#343434" : "white",
										color: props.mode === "dark" ? "white" : "black",
									}}
								/>
								<button
									className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} btn-${
										props.mode
									}`}
									type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
				<Outlet />
			</div>
		</>
	);
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
	title: "Set title here",
	aboutText: "About Us",
};
