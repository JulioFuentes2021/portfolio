import React from "react";
// import { handleSubmit } from "../Nodemail/index";
import { useForm, ValidationError } from "@formspree/react";
import swal from "sweetalert";

const ContactForm = () => {
	// const handleSubmit = async () => {
	// 	// send mail with defined transport object
	// 	await transporter.sendMail({
	// 		from: '"Probando 👻" <julyfuentes2021@gmail.com>', // sender address
	// 		to: "juliodddddd1234@gmail.com", // list of receivers
	// 		subject: "Hello ✔", // Subject line
	// 		text: "Hello world?", // plain text body
	// 		html: "<b>Hello world?</b>",
	// 	});
	// };

	const prueba = () => {
		console.log("Ejecutadno");
		swal({
			title: "Thank you",
			icon: "success",
			text: "I will answer you immediately",
			timer: "3000",
			buttons: false,
		});
	};

	const myHandleSubmit = e => {
		e.preventDefault();
		const form = document.getElementById("form");
		form.reset();
		handleSubmit();
		prueba();
	};

	const [state, handleSubmit] = useForm("xwkykeoa");

	if (state.succeeded) {
		console.log("Thanks for joining!");
		const form = document.getElementById("form");
		form.reset();
		prueba();
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col rounded-md m-4 dark:bg-black"
			id="form"
		>
			<div className="my-4 p-2 dark:bg-gray-800 bg-blue-100">
				<label htmlFor="name" className="p-1">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="w-full outline-none p-1 bg-blue-100 dark:bg-gray-800"
				/>
				<ValidationError prefix="Name" field="name" errors={state.errors} />
			</div>
			<div className="my-4 p-2 bg-blue-100 dark:bg-gray-800">
				<label htmlFor="email" className="p-1">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					className="w-full bg-blue-100 outline-none p-1 dark:bg-gray-800"
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
			{/* <div className="my-4 p-2 bg-blue-100 dark:bg-gray-800">
				<label htmlFor="project" className="p-1">
					Project
				</label>
				<input
					type="text"
					id="project"
					className="w-full bg-blue-100 outline-none p-1 dark:bg-gray-800"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div> */}
			<div className="my-4 p-2 bg-blue-100 dark:bg-gray-800">
				<label htmlFor="message" className="p-1">
					Message
				</label>
				<textarea
					type="text"
					id="message"
					name="message"
					required
					className="w-full h-48 resize-none bg-blue-100 outline-none p-1 dark:bg-gray-800"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<button
				type="submit"
				disabled={state.submitting}
				className="flex my-5 mx-2 text-white rounded-xl w-28 h-16 bg-blue-400 transition-colors hover:bg-blue-600"
			>
				<span className="m-auto">Send</span>
			</button>
			{/* <button type="button" onClick={prueba}>
				hola
			</button> */}
		</form>
	);
};

export default ContactForm;
