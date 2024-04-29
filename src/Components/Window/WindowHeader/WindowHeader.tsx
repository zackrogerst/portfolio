import React from "react";

interface WindowHeaderProps {
	headerText: string;
}

const WindowHeader: React.FC<WindowHeaderProps> = ({ headerText }) => {
	return (
		<div className="drag-handle window-header striped-background">
			<h3>{headerText}</h3>
			<p className="close-icon">X</p>
		</div>
	);
};

export default WindowHeader;
