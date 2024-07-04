import React from "react";
import NavBar from "./navbar";
import Card from "./card";
import JumboTron from "./jumbotron";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		<div>
			<NavBar />
			<div className="container">
				<JumboTron />
				<div className="row d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
