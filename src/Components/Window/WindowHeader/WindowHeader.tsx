import CloseIcon from "../../Utils/Icons/CloseIcon";
import MinimizeIcon from "../../Utils/Icons/MinimizeIcon";

import "./WindowHeader.css";

import BackArrowIcon from "../../Utils/Icons/BackArrowIcon";
import ForwardArrowIcon from "../../Utils/Icons/ForwardArrowIcon";
import VerticalLine from "../../Utils/Icons/VerticalLine";

interface WindowHeaderProps {
	setWindows: React.Dispatch<React.SetStateAction<string[] | []>>;
	closeIcons: boolean;
	headerText: string;
}

const WindowHeader: React.FC<WindowHeaderProps> = ({ setWindows, closeIcons, headerText }) => {
	const noButtonStyles = {
		backgroundColor: "transparent",
		padding: 0,
		margin: 0,
		height: "18px",
		width: "18px",
		border: "none"
	};
	const handleCloseButtonClick = (headerText: string) => {
		setWindows((prevWindows) => {
			const updatedWindows = [...prevWindows];
			const index = updatedWindows.indexOf(headerText);
			if (index !== -1) {
				updatedWindows.splice(index, 1);
			}
			return updatedWindows;
		});
	};
	return (
		<div className="drag-handle window-header">
			<div className="window-header-column">
				{closeIcons && (
					<>
						<div className="header-icons-container">
							<button
								style={noButtonStyles}
								onClick={() => handleCloseButtonClick(headerText)}
							>
								<CloseIcon />
							</button>
							<button style={noButtonStyles}>
								<MinimizeIcon />
							</button>
						</div>
						<VerticalLine />
						<div className="header-icons-container wider-gap">
							<BackArrowIcon iconColor={"var(--dark-grey)"} />
							<ForwardArrowIcon iconColor={"var(--light-grey)"} />
						</div>
					</>
				)}
				<h3 style={{ fontWeight: 400 }}>{headerText}</h3>
			</div>
		</div>
	);
};

export default WindowHeader;
