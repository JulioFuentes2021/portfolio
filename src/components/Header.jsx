import React from "react";
import { Context } from "../context/index";
import { useContext } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

const Header = () => {
	const marginXForLi = "mx-2";
	const { darkMode, manageDarkMode } = useContext(Context);

	// const handleDarkMode = () => {
	//     setDarkMode(!darkMode);
	// };

	return (
		<header
			className={`text-xl py-10 hidden justify-evenly darkModeIsApplied md:flex`}
		>
			<div className="hoverForHeader">Fuentes</div>
			{/* <div className="md:hidden">
                    <FaBars />
                </div> */}
			<ul className="flex">
				<li className={`${marginXForLi} hoverForHeader`}>Home</li>
				{/* <li className={`${marginXForLi} hoverForHeader`}>About</li> */}
				{/* <li className={`${marginXForLi} hoverForHeader`}>Skills</li> */}
				{/* <li className={`${marginXForLi} hoverForHeader`}>Services</li> */}
				<li className={`${marginXForLi} hoverForHeader`}>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li className={`${marginXForLi} hoverForHeader`}>
					<a href="#contact">Contact</a>
				</li>
				<li
					className={`${marginXForLi} hoverForHeader m-auto`}
					onClick={manageDarkMode}
				>
					{!darkMode ? <FaMoon /> : <FaSun />}
				</li>
			</ul>
		</header>
	);
};

export default Header;
