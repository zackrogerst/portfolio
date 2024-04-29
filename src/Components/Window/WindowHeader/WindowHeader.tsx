import React from "react";
import CloseIcon from "../../Utils/Icons/CloseIcon";
import MinimizeIcon from "../../Utils/Icons/MinimizeIcon";

import "./WindowHeader.css";

import BackArrowIcon from "../../Utils/Icons/BackArrowIcon";
import ForwardArrowIcon from "../../Utils/Icons/ForwardArrowIcon";
import VerticalLine from "../../Utils/Icons/VerticalLine";

interface WindowHeaderProps {
	headerText: string;
}

const WindowHeader: React.FC<WindowHeaderProps> = ({ headerText }) => {
	return (
		<div className="drag-handle window-header">
			<div className="window-header-column">
				<div className="header-icons-container">
					<CloseIcon />
					<MinimizeIcon />
				</div>
				<VerticalLine />
				<div className="header-icons-container wider-gap">
					<BackArrowIcon iconColor={"var(--dark-grey)"} />
					<ForwardArrowIcon iconColor={"var(--light-grey)"} />
				</div>
				<h3>{headerText}</h3>
			</div>
		</div>
	);
};

export default WindowHeader;
