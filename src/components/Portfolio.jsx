import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Portfolio = props => {
	const arrowStyles = "text-5xl text-blue-500 bg-red-500 p-0 m-0";

	const handleProject = e => {
		const project = e.target.parentElement.parentElement;
		const next = project.nextElementSibling;
		console.log(e.target);
		console.log(project);
		console.log(next);
	};

	return (
		<div className="">
			<div className="flex max-w-2xl justify-center">
				<div className="flex items-center m-2 w-full darkModeIsApplied">
					<div className="flex flex-col sm:flex-row m-2">
						<img src={props.image} alt="" className="w-96 m-auto" />
						<div className="flex flex-col">
							<span className="text-xl p-2">{props.title}</span>
							<small className="text-sm p-2">{props.content}</small>
							<a
								href={props.code}
								target={"_blank"}
								rel="noopener noreferrer"
								className="text-sm p-2 w-16"
							>
								Code
							</a>
							<a href={props.href} target={"_blank"} rel="noopener noreferrer">
								<button className="flex my-5 mx-2 text-white rounded-xl w-28 h-16 bg-blue-400 transition-colors hover:bg-blue-600">
									<span className="m-auto">Demo</span>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
