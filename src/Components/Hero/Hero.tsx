import "./hero.css";

import content from "../../content.json";

const Hero = () => {
	const { headline, version } = content.hero;
	return (
		<div className="hero">
			<div className="headline-container">
				<h6>{headline}</h6>
				<p>{version}</p>
			</div>
		</div>
	);
};

export default Hero;
