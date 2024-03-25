import "./header.css";

import content from "../../content.json";

const Header = () => {
	const { logoFilePath, logoAltText, logoText } = content.header;
	return (
		<header>
			<div className="logo-container">
				{logoFilePath !== "" && (
					<img
						className="logo"
						src={logoFilePath}
						alt={logoAltText ? logoAltText : ""}
					/>
				)}
				{logoText && <p>{logoText}</p>}
			</div>
		</header>
	);
};

export default Header;
