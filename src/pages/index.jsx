import React from "react";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import ImJulio from "../components/ImJulio";
import Portfolio from "../components/Portfolio";
import BackgroundProfile from "../components/BackgroundProfile";
import SocialNetworks from "../components/SocialNetworks";
import ContactForm from "../components/ContactForm";
import ExtraContact from "../components/ExtraContact";
import Footer from "../components/Footer";
import X0 from "../images/x-0.png";
import countryInfo from "../images/country-info.png";
import countryQuiz from "../images/country-quiz.png";

const Index = () => {
	return (
		<div className="darkModeIsApplied">
			<div className="h-full">
				<div className="">
					<Header />
				</div>
				<div className="">
					<MenuMobile />
				</div>
				<div className="flex flex-col my-16 items-center sm:flex-row sm: justify-around">
					<div className="flex items-center">
						<SocialNetworks />
						<ImJulio />
					</div>
					<BackgroundProfile />
				</div>
				<a name="portfolio"></a>
				<span className="text-center text-4xl block dark:darkModeIsApplied mt-52">
					Portfolio
				</span>
				<div className="portfolioGrid my-16">
					<Portfolio
						image={countryInfo}
						code="https://github.com/JulioFuentes2021/CountryInfo"
						title="CountryInfo"
						href="https://juliofuentes2021.github.io/CountryInfo/"
						content="Html, Javascript,React.js, useContext, react-router, Redux, styled-components"
					/>
					<Portfolio
						image={countryQuiz}
						code="https://github.com/JulioFuentes2021/Country-Quiz-App/tree/Code"
						title="CountryQuiz"
						href="https://juliofuentes2021.github.io/Country-Quiz-App/"
						content="Html, Css3, Javascript, React.js, useContext, react-router, Redux."
					/>
					<Portfolio
						image={X0}
						code="https://github.com/JulioFuentes2021/X-0"
						title="Tic-Tact-Toe game"
						href="https://juliofuentes2021.github.io/X-0/"
						content="Html, Css3, Javascript, React.js, hooks."
					/>
				</div>
				<a name="contact"></a>
				<span className="text-center text-4xl block dark:darkModeIsApplied mt-32 mb-20">
					Contact
				</span>
				<div className="flex flex-col items-center justify-around md:flex-row">
					<ExtraContact />
					<ContactForm />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Index;
