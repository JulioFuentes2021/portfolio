import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialNetworks = () => {
	return (
		<div className="flex flex-col text-3xl text-blue-500">
			<div className="my-3 mx-2">
				<a
					href="https://www.linkedin.com/in/julio-fuentes-05160220b/"
					target={"_blank"}
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
			</div>
			<div className="my-3 mx-2 cursor-pointer">
				<a
					href="https://github.com/JulioFuentes2021"
					target={"_blank"}
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
			</div>
			<div className="my-3 mx-2">
				<a href="#contact">
					<FaEnvelope />
				</a>
			</div>
		</div>
	);
};

export default SocialNetworks;
