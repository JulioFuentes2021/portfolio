import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="flex w-full h-screen flex-col justify-center items-center p3 text-center">
			<section className="">
				<span className="text-8xl">404</span>
			</section>
			<section className="p-5 flex flex-col items-center text-3xl">
				<span className="my-2">Ooops!</span>
				<span>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</span>
			</section>
			<section>
				<Link to="/">
					<button
						type="button"
						className="bg-blue-400 text-white p-5 w-72 text-xl hover:bg-blue-600 cursor-pointer my-5"
					>
						Go Back to Home
					</button>
				</Link>
			</section>
		</div>
	);
};

export default Error;
