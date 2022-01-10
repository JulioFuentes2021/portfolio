import React from "react";
import Photo from "../images/perfil.png";

const BackgroundProfile = () => {
	return (
		<div className="flex items-center overflow-hidden m-3 min-w-min w-72 h-72 bg-blue-400 roundedCustom">
			<img src={Photo} alt="" className="w-72 m-auto" />
		</div>
	);
};

export default BackgroundProfile;
