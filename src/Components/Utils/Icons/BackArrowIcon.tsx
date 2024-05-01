import React from "react";

interface BackArrowIconProps {
	iconColor: string;
}

const BackArrowIcon: React.FC<BackArrowIconProps> = ({ iconColor }) => {
	return (
		<svg
			cursor="pointer"
			width="15"
			height="15"
			viewBox="0 0 9 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.35021 0.393389C8.89007 0.917907 8.89007 1.76832 8.35021 2.29284L3.33737 7.16327L8.35021 12.0337C8.89007 12.5582 8.89007 13.4086 8.35021 13.9331C7.81036 14.4577 6.93508 14.4577 6.39522 13.9331L0.404891 8.11299C-0.134964 7.58847 -0.134964 6.73806 0.404891 6.21354L6.39522 0.393388C6.93508 -0.131129 7.81036 -0.131129 8.35021 0.393389Z"
				fill={iconColor}
			/>
		</svg>
	);
};

export default BackArrowIcon;
