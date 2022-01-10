import React from "react";
import { FaAddressCard } from "react-icons/fa";

const ImJulio = () => {
	return (
		//m-3 might be a problem in the future
		<div className="m-3 flex flex-col w-48 darkModeIsApplied">
			<h1 className="text-3xl my-1">Hi, I'm Julio</h1>
			<span className="text-2xl my-1 text-gray-800 darkModeIsApplied">
				Frontend developer
			</span>
			<small className="text-sm">
				with extensive knowledge in web technologies, fallen in love about tech
				world and happy to work in the industry I love.
			</small>
			<a
				href="#contact"
				className="flex my-5 text-gray-200 rounded-xl h-16 bg-blue-400 transition-colors hover:bg-blue-600"
			>
				<button className="p-3">Contact Me</button>
				<FaAddressCard className="text-3xl my-auto mx-3" />
			</a>
		</div>
	);
};

export default ImJulio;
