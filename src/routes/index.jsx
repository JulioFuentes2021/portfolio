import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/index";
import Error from "../components/Error";

const index = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
