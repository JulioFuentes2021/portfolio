import React from "react";
import { FaWhatsapp, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const ExtraContact = () => {
	return (
		<section className="flex flex-col">
			<article className="flex items-center my-5">
				<div className="text-4xl text-blue-400">
					<FaWhatsapp />
				</div>
				<div className="flex flex-col mx-3">
					<span className="mb-4 font-semibold text-2xl">Call Me</span>
					<span className="text-gray-500 sm:text-xl">+504 98090839</span>
				</div>
			</article>
			<article className="flex items-center my-5">
				<div className="text-4xl text-blue-400">
					<FaEnvelope />
				</div>
				<div className="flex flex-col mx-3">
					<span className="mb-4 text-2xl font-semibold">Email</span>
					<span className="text-gray-500 sm:text-xl">
						julyfuentes2002@gmail.com
					</span>
				</div>
			</article>
			<article className="flex items-center my-5">
				<div className="text-4xl text-blue-400">
					<FaLocationArrow />
				</div>
				<div className="flex flex-col mx-3">
					<span className="mb-4 text-2xl font-semibold">Location</span>
					<span className="text-gray-500 sm:text-xl">Honduras</span>
				</div>
			</article>
		</section>
	);
};

export default ExtraContact;
