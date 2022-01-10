import React from "react";

const Context = React.createContext();

function ContextProvider(props) {
	const [darkMode, setDarkMode] = React.useState(false);
	const [showMenuMobile, setShowMenuMobile] = React.useState(false);

	const manageDarkMode = () => {
		setDarkMode(!darkMode);
		const html = document.querySelector("html");
		!darkMode ? html.classList.add("dark") : html.classList.remove("dark");
	};

	return (
		<Context.Provider
			value={{
				darkMode,
				setDarkMode,
				showMenuMobile,
				setShowMenuMobile,
				manageDarkMode,
			}}
		>
			{props.children}
		</Context.Provider>
	);
}

export { Context, ContextProvider };
