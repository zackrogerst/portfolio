import "./about-me.css";

import content from "../../../content.ts";

const AboutMe = () => {
	const { name, occupation, location, title, bio, links, professionalExperience } = content.about;
	return (
		<div>
			{name && occupation && location && (
				<h1>
					{name} | {occupation} in {location}
				</h1>
			)}
			{name && occupation && location && <hr />}
			<div>
				{title && <h2>{title}</h2>}
				{bio && <p>{bio}</p>}
				{links &&
					links.map((link, index, array) => (
						<p key={index} style={{ display: "inline" }}>
							<a href={link.href} target="_blank">
								{link.text}
							</a>
							{array[array.length - 1] !== link && " | "}
						</p>
					))}
			</div>
			{professionalExperience && (
				<div>
					<hr />
					<h2>Professional Experience</h2>
					<div className="card-container">
						{professionalExperience.map((experience, index) => (
							<div className="professional-experience-card" key={index}>
								<h3>{experience.position}</h3>
								<p>{experience.employer}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default AboutMe;
