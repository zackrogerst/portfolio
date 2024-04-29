export interface ContentProps {
	footer: Footer;
	about: About;
}

export interface About {
	headline: string;
	version: string;
	releaseNotes: ReleaseNote[];
	title: string;
	name: string;
	location: string;
	occupation: string;
	bio: string;
	links: Link[];
	professionalExperience: ProfessionalExperience[];
	technologies: string[];
}

export interface Link {
	text: string;
	href: string;
}

export interface ProfessionalExperience {
	position: Employer;
	employer: Employer;
}

export interface Employer {
	element: string;
	content: string;
}

export interface ReleaseNote {
	version: string;
	description: string;
}

export interface Footer {
	logoFilePath: string;
	logoAltText: string;
	logoText: string;
	externalLinks: ExternalLink[];
}

export interface ExternalLink {
	linkedin: string;
	github: string;
}

const content = {
	footer: {
		logoFilePath: "",
		logoAltText: "",
		logoText: "Zack Rogers | Web Developer",
		externalLinks: [
			{
				linkedin: "https://www.linkedin.com/in/zachary-rogers-dev/",
				github: "https://github.com/zackrogerst"
			}
		]
	},
	about: {
		headline: "Welcome to Zack OS",
		version: "Version 0.0.1",
		releaseNotes: [
			{
				version: "0.0.1",
				description: "Zack OS published to the web."
			}
		],
		title: "About Me",
		name: "Zack Rogers",
		location: "Salt Lake City, Utah",
		occupation: "Web Developer",
		bio: "My Name is Zack Rogers, I'm a Web Developer in Salt Lake City, Utah. I became a developer after designing websites for 5 years. Building has always been a part of my life whether it's motorcycles, Legos, or software. Let's build your solution today!",
		links: [
			{
				text: "LinkedIn",
				href: "https://www.linkedin.com/in/zachary-rogers-dev"
			},
			{
				text: "GitHub",
				href: "https://github.com/zackrogerst"
			}
		],
		professionalExperience: [
			{
				position: {
					element: "h4",
					content: "SEO Fulfillment Specialist"
				},
				employer: {
					element: "p",
					content: "Boostability | 2015-2018"
				}
			},
			{
				position: {
					element: "h4",
					content: "Photographer"
				},
				employer: {
					element: "p",
					content: "Royal Business Academy | 2016"
				}
			},
			{
				position: {
					element: "h4",
					content: "Web Designer"
				},
				employer: {
					element: "p",
					content: "TTO Advisors | 2019"
				}
			},
			{
				position: {
					element: "h4",
					content: "Web Designer"
				},
				employer: {
					element: "p",
					content: "Boostability | 2018-2022"
				}
			},
			{
				position: {
					element: "h4",
					content: "Web Developer"
				},
				employer: {
					element: "p",
					content: "Boostability | 2022-2023"
				}
			},
			{
				position: {
					element: "h4",
					content: "Full Stack Web Developer and Designer"
				},
				employer: {
					element: "p",
					content: "Bridgewoods | 2022 - current"
				}
			}
		],
		technologies: [
			"Typescript",
			"Javascript",
			"Python",
			"React",
			"Vue",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"HTML5",
			"CSS",
			"EJS",
			"Bash",
			"Git",
			"Github",
			"Heroku",
			"Bcrypt",
			"Redux",
			"axios",
			"React Router",
			"Sequelize",
			"Figma",
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Wordpress",
			"WPEngine",
			"Cloudflare",
			"Filezilla (SFTP)",
			"GoDaddy"
		]
	}
};

export default content