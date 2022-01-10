import React from "react";
import { Context } from "../context";
import { useContext } from "react";
import { FaSun, FaBars, FaMoon, FaTimes } from "react-icons/fa";

const MenuMobile = () => {
	const {
		darkMode,
		setDarkMode,
		manageDarkMode,
		showMenuMobile,
		setShowMenuMobile,
	} = useContext(Context);

	// const handleDarkMode = () => {
	//     setDarkMode(!darkMode);
	// };

	const handleMenu = () => {
		setShowMenuMobile(!showMenuMobile);
		console.log("Ha cambiado");
	};

	return (
		<div className="md:hidden">
			<div className="overflow-hidden flex items-end">
				<div
					className={`flex fixed bottom-0 justify-around w-full items-center p-2 bg-gray-100 darkModeIsApplied`}
				>
					<div className="hoverForHeader">Fuentes</div>
					<div className="flex">
						<span className="hoverForHeader mx-2" onClick={manageDarkMode}>
							{!darkMode ? <FaMoon /> : <FaSun />}
						</span>
						<span className="hoverForHeader mx-2" onClick={handleMenu}>
							<FaBars />
						</span>
					</div>
				</div>
			</div>
			<div
				className={`w-full darkModeIsApplied bg-gray-100 ${
					showMenuMobile ? "bottom-0 fixed" : "hidden"
				}`}
			>
				<div className="flex z-10 justify-around">
					<div className="flex flex-col m-3">
						<span className="my-7">
							<a href="#">About</a>
						</span>
						{/* <span>About</span> */}
					</div>
					<div className="flex flex-col m-3">
						<span className="my-7">
							<a href="#portfolio">Portfolio</a>
						</span>
						{/* <span>Services</span> */}
					</div>
					<div className="flex flex-col m-3">
						<span className="my-7">
							<a href="#contact">Contact</a>
						</span>
						{/* <span>Contact</span> */}
					</div>
				</div>
				<div className="flex justify-end mx-3 py-2">
					<span
						onClick={handleMenu}
						className="text-2xl cursor-pointer activeForMobile"
					>
						<FaTimes />
					</span>
				</div>
			</div>
		</div>
	);
};

export default MenuMobile;
