import "./footer.css";

import content from "../../content.json";

const Footer = () => {
	const { logoFilePath, logoAltText, logoText } = content.footer;
	return (
		<footer>
			<div className="logo-container">
				{logoFilePath !== "" && (
					<img className="logo" src={logoFilePath} alt={logoAltText ? logoAltText : ""} />
				)}
				{logoText && <p>{logoText}</p>}
			</div>
		</footer>
	);
};

export default Footer;
