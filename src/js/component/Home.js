import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Count from "./Count.js";

//create your first component
const Home = ({ seconds }) => {
	return (
		<>
			<Count
				seconds={seconds}
			/>
		</>
	);
};

export default Home;
