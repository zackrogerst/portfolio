import "./footer.css";

import content from "../../content.ts";

const Footer = () => {
	const { logoFilePath, logoAltText, logoText } = content.footer;
	return (
		<footer>
			<div className="logo-container">
				{logoFilePath !== "" && (
					<img className="logo" src={logoFilePath} alt={logoAltText ? logoAltText : ""} />
				)}
				{logoText && <p>{logoText}</p>}
				{/* Toolbar Icons */}
			</div>
		</footer>
	);
};

export default Footer;
